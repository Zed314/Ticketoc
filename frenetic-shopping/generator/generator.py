import argparse
import datetime
import io
import json
import re
import requests
import avro.io
import avro.schema
from collections import OrderedDict
from enum import Enum
from random import gauss, randint, uniform
from time import sleep, time
from pymongo import MongoClient


def getProductSchema():
	return requests.get('http://schema-registry/v1/schemas/product').text


schema = avro.schema.Parse(getProductSchema())
writer = avro.io.DatumWriter(schema)


client = MongoClient('mongodb://mongodb:27017/')
supermarketDB = client["supermarket"]
products = supermarketDB["products"]
categories = supermarketDB["categories"]

taxes = {}
for category in categories.find({}) :
	taxes[category["name"]] = category["tax"]

print("A")
for match in products.find({}):
	print(match)

for match in products.find({ "holidays" : { "$in" : ["motherday"] } }):
	print(match)
print("B")

def getRandomProducts(nb):
	products = supermarketDB.products.aggregate([{ "$sample": { "size": nb } }])

	return list(products)
def getProductByName(name):
	return supermarketDB.products.find({ "name"  :name })[0]

def generateLine(ind,productFromDB):
	print(productFromDB)
	productCode = str(productFromDB[0]["_id"])
	product = productFromDB[0]["_id"]
	productCategoryName = productFromDB[0]["category"]
	productDescription = productFromDB[0]["name"]
	productUnit = productFromDB[0]["unit"]
	
	categoryCode = productCategoryName[0:2].upper()
	taxPercentage=taxes[productCategoryName]
	quantity = productFromDB[1]
	unitPrice = float(("%.2f"%productFromDB[0]["price"]))
	creditAmount = float(("%.2f"%(unitPrice * quantity)))
	settlementAmount = float(("%.2f"%(creditAmount*(1.+(taxPercentage/100.)))))
	line={
		'lineNumber':ind,
		'productCode':productCode,
		'productDescription':productDescription,
		'productCategoryCode':categoryCode,
		'productCategoryName':productCategoryName,
		'quantity':quantity,
		'unitOfMeasure': productUnit,
		'unitPrice':unitPrice,
		'creditAmount':creditAmount,
		'taxPercentage':taxPercentage,
		'settlementAmount':settlementAmount,
	}



	return line

def fromTimeStampToDate(timestamp):
	return datetime.datetime.fromtimestamp(int(timestamp)).strftime('%Y-%m-%d %H:%M:%S')

def truncateFloat(r):
    return float(("%.2f"%(r)))
def getListQuantities(nb):
	total = 0
	quantities = []
	while total !=nb :
		quantity = randint(1,nb-total)
		quantities.append(quantity)
		total  = total + quantity
		if nb-total == 1:
			total += 1
			quantities.append(1)
	return quantities
	

def generateCashReceipt(storeid=1,terminalid=1,agentid=1,customerid=1,order=None,timestamp=time()):

	cashreceipt={
        'cashReceiptID': str(storeid) + str(terminalid) + str(int(timestamp)),
		'storeID':str(storeid),
		'terminalID':str(terminalid),
		'agentID':str(storeid)+str(agentid),
		'customerID':str(customerid),
		'date':fromTimeStampToDate(timestamp),
		'lines':[generateLine(i+1,product) for i,product in enumerate(order["products"])]
	}
	netTotal=0.
	grossTotal=0.
	taxPayable=0.
	for i in range(len(cashreceipt['lines'])):
		line = cashreceipt['lines'][i]
		netTotal += line['creditAmount']
		grossTotal += line['settlementAmount']
		taxPayable += line['settlementAmount']-line['creditAmount']


	documentTotal={
		'taxPayable':truncateFloat(taxPayable),
		'netTotal':truncateFloat(netTotal),
		'grossTotal':truncateFloat(grossTotal),
	}

	settlements=[]

	nb_settlements=randint(1,2)
	paymentsMechanismes=["CB","Especes"]
	if nb_settlements==1:
		settlements.append({
			'settlementAmount':grossTotal,
			'paymentMechanism':paymentsMechanismes[randint(0,1)]
		})
	else:
		settlements.append({
			'settlementAmount':truncateFloat(grossTotal- float(("%.2f"%uniform(0.,grossTotal)))),
			'paymentMechanism':paymentsMechanismes[0]
		}),
		settlements.append({
			'settlementAmount':truncateFloat(grossTotal-settlements[0]['settlementAmount']),
			'paymentMechanism':paymentsMechanismes[1]
		})


	cashreceipt['documentTotal']=documentTotal
	cashreceipt['settlements']=settlements
	CRECEIPT=OrderedDict([
                ('cashReceiptID',cashreceipt['cashReceiptID']),
		('storeID',cashreceipt['storeID']),
		('terminalID',cashreceipt['terminalID']),
		('agentID',cashreceipt['agentID']),
		('customerID',cashreceipt['customerID']),
		('date',cashreceipt['date']),
		('lines',cashreceipt['lines']),
		('documentTotal',cashreceipt['documentTotal']),
		('settlements',cashreceipt['settlements'])
	])
	return CRECEIPT

def writeJSON(jsonObject,destination) :
    with open(destination, 'w+') as outfile:
        json.dump(jsonObject, outfile, indent=4)

def estimateTimeRequired(order,cashier):
	return cashier[order["billingMethod"]]+order["numberOfElements"]/cashier["elementPerSecond"]

def generateOrder(cashier,popularProducts):
	order = dict()
	order["numberOfElements"] = returnValueIfValueOrBelow(int(gauss(munbelement, sigmanbelement)),1)
	order["billingMethod"] = PaymentMethod.CASH
	order["finishTime"] = estimateTimeRequired(order,cashier) + time()
	if not popularProducts :
		quantitiesProduct = getListQuantities(order["numberOfElements"])
		nblines = len(quantitiesProduct)
		products = []
		for i,product in enumerate(getRandomProducts(nblines)):
			products.append((product,quantitiesProduct[i]))
		order["products"] = products
	else:
	
		nbProducts = 0
		productsToAddName = []
		for elt in sorted(popularProducts, key=lambda x: x[1],reverse=True):
			if elt[1] > uniform(0,100):
				# add the product
				productsToAddName.append(elt[0])

			if len(productsToAddName) >= order["numberOfElements"]:
				break
		print(productsToAddName)

		
		quantitiesProduct = getListQuantities(order["numberOfElements"]-len(productsToAddName))
		nblines = len(quantitiesProduct)
		products = []
		for i,product in enumerate(getRandomProducts(nblines)):
			products.append([product,quantitiesProduct[i]])
		
		# Add the artificially added products
		for name in productsToAddName:
			found = False
			for productInOrder in products:
				if productInOrder[0]["name"]==name:
					productInOrder[1]+=1
					found = True
					break
			if not found :
				products.append([getProductByName(name),1])

		order["products"] = products

	return order

def returnValueIfValueOrBelow(nb,value):
	if nb <= value:
		return value
	return nb


class PaymentMethod(Enum):     
    CASH = 1     
    CARD = 2     
    BOTH = 3     

parser = argparse.ArgumentParser(description='Generate some tickets.')
parser.add_argument("-a", "--avro", help="use avro serialization (default : json)")
parser.add_argument("-t", "--tpm", type=float, default =60,
                    help="ticket per minute on average")
parser.add_argument("-c", "--checkoutnumber", type=int, default =100,
                    help="number of different checkout in one store")
parser.add_argument("-s","--storeID",type=int, default = "0",
					help="id of the store")
parser.add_argument("-p","--popular",type=str, default = "",
					help="name of the popular product, separated by a comma and followed by the probability in percentage")
parser.add_argument('--holiday', choices=['motherday','christmas','newyearseve',"valentinesday","blackfriday"], help='Special testing value')

	
args = parser.parse_args()

useAvro = args.avro
popularProducts = re.split('[-,]', args.popular)

#Todo : change
popularProducts = [("Roses",100),("Nutella",20)]
					

ticketsPerMinute = args.tpm
numberOfCheckout = args.checkoutnumber
numberOfAgent = args.checkoutnumber
idOfStore = args.storeID
muspeedcashier = 1.0
sigmaspeedcashier = 0.3
muspeedcash = 7.0
sigmaspeedcash = 4.0
munbelement = 12.0
sigmanbelement = 7.0

cashiers = [{} for i in range(numberOfAgent)] 


for i,cashier in enumerate(cashiers):
	cashier["id"] = i
	cashier["elementPerSecond"] = returnValueIfValueOrBelow(gauss(muspeedcashier, sigmaspeedcashier),0.5)
	cashier[PaymentMethod.CARD] = 8
	cashier[PaymentMethod.CASH] = returnValueIfValueOrBelow(gauss(muspeedcash, sigmaspeedcash),2)
	cashier[PaymentMethod.BOTH] = cashier[PaymentMethod.CARD] + cashier[PaymentMethod.CASH] + 2

currentOrders = [generateOrder(cashiers[i], popularProducts) for i in range(numberOfCheckout)] 
print("BEFORE")
print(getRandomProducts(2))


begin = True

while True:

	for i,order in enumerate(currentOrders):
		if order["finishTime"]<= time() or begin:
			begin = False
			print(cashiers[i])
			print(order["finishTime"])
			cashRec = generateCashReceipt(storeid=idOfStore,terminalid=i,agentid=i,customerid=200,order=order,timestamp=time())
			print(cashRec)
			try:
				if useAvro:
					bytes_writer = io.BytesIO()
					encoder = avro.io.BinaryEncoder(bytes_writer)
					writer.write(dict(cashRec), encoder)
					print(bytes_writer.getvalue())
					r = requests.post('http://entrypoint/v1/tickets',data = bytes_writer.getvalue(),
                    headers={'Content-Type': 'application/avro'})
					print(r.content)
				else :
					r=requests.post('http://entrypoint/v1/tickets',json=cashRec)
					print(r)
			finally:
				pass
			currentOrders[i] = generateOrder(cashiers[i], popularProducts)
	sleep(0.01)
