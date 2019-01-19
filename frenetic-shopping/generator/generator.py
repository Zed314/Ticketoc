import argparse
import datetime
import io
import json
import re
import requests

import avro.io
import avro.schema
from collections import OrderedDict, Counter
from enum import Enum
from random import gauss, randint, uniform, choice, shuffle
from time import sleep, time
from pymongo import MongoClient
from math import cos, pi

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



def getRandomProduct(exclusionList):

	return getRandomProducts(1,exclusionList)[0]
def getRandomProducts(nb,exclusionList):
	idList = []
	for elt in exclusionList:
		idList.append(elt["_id"])
	products = supermarketDB.products.aggregate([{"$match":{ "_id":{"$nin":idList}}},{ "$sample": { "size": nb }} ])

	return list(products)
def getProductByName(name):
	return supermarketDB.products.find({ "name"  :name })[0]

def getProductsByName(names):
	return list(supermarketDB.products.find({ "name"  :{"$in":names} }))

def getProductsNotCompatible(season):
	return list(supermarketDB.products.find( { "$and": [ { "restrictions": { "$nin":[season] } }, { "restrictions": { "$exists": True } } ] }))


def generateLine(ind,productFromDB):
	
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

	nb_settlements=order["settlements"]
	paymentsMechanismes=["CB","Especes"]
	if nb_settlements==1:
		settlements.append({
			'settlementAmount':grossTotal,
			'paymentMechanism':paymentsMechanismes[randint(0,1)]
		})
	else:
		developpedPriceList = []
		for product in order["products"]:
		#dictPrices[product[0]["name"]] = product[0]["price"]
			for i in range(product[1]):
				developpedPriceList.append(product[0]["price"]*(1+taxes[product[0]["category"]]/100))
		shuffle(developpedPriceList)
		
		division = [developpedPriceList[i::2] for i in range(2)]
		prices = [sum(division[0]),sum(division[1])]
		
		settlements.append({
			'settlementAmount':truncateFloat(prices[0]),
			'paymentMechanism':paymentsMechanismes[0]
		}),
		settlements.append({
			'settlementAmount':truncateFloat(prices[1]),
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

#def completeOrder(order,):

#def addProductsToList(products,productsToAdd):



def generateOrder(cashier,popularProducts,trendingProducts,season,propabilityOfOrder):
	order = dict()
	order["numberOfElements"] = returnValueIfValueOrBelow(int(gauss(munbelement, sigmanbelement)),1)
	order["billingMethod"] = PaymentMethod.CASH
	order["finishTime"] = estimateTimeRequired(order,cashier) + time()
	doesThisOrderFollowTheTrend = uniform(0,100)<30
	order["followTheTrend"] = doesThisOrderFollowTheTrend
	exclusionList = []
	#print(probabilityOfOrder)
	#print(100.0 - probabilityOfOrder)
	if randint(0,100)<(100 - probabilityOfOrder):
		order["isAnOrder"]=False
		#print("not an order")
		return order
	order["isAnOrder"]=True

	#Init the exclusion list
	exclusionList = getProductsNotCompatible(season)


	products = []
	totalProducts = 0
	if popularProducts:
		productsToAdd =""
		for elt in sorted(popularProducts, key=lambda x: x[1],reverse=True):
			if elt[1] > uniform(0,100):
				# add the product
				product = getProductByName(elt[0])
				found = False
				for productElt in products:
					if productElt[0]== product:
						productElt[1]+=1
						found = True
						break
				if not found:
					products.append([product,1])
					if "notwith" in product:
						nameToExclude = []
						for eltToExclude in product["notwith"]:
							nameToExclude.append(eltToExclude)
						eltsToExclude = getProductsByName(nameToExclude)
						for elt in eltsToExclude:
							exclusionList.append(elt)
				totalProducts+=1
				if totalProducts >= order["numberOfElements"]:
					break

	
	if doesThisOrderFollowTheTrend and not order["numberOfElements"]==totalProducts and not order["numberOfElements"]==totalProducts+1:
		

		for i in range(randint(0,order["numberOfElements"]-totalProducts)):

			choiceProduct = choice(trendingProducts)
			if choiceProduct in exclusionList:
				continue
			found = False
			for product in products:
				if product[0]== choiceProduct:
					product[1]+=1
					found = True
					break
			if not found:
				products.append([choiceProduct,1])
	
				if "notwith" in choiceProduct:
					nameToExclude = []
					for eltToExclude in choiceProduct["notwith"]:
						nameToExclude.append(eltToExclude)
					eltsToExclude = getProductsByName(nameToExclude)
					for elt in eltsToExclude:
						exclusionList.append(elt)
			totalProducts+=1
			
	if totalProducts<order["numberOfElements"]:
		productNameSet = {"auieauie"}
		
		for product in products:
			if not product[0]["name"] in productNameSet:
				productNameSet.add(product[0]["name"])
		
		#quantitiesProduct = getListQuantities(order["numberOfElements"]-len(productsToAddName))
		#nblines = len(quantitiesProduct)
		productsToAddName =[]
		for product in products:
			if "frequentlyboughtwith" in product[0]:
				if product[0]["frequentlyboughtwith"]:
					for name in product[0]["frequentlyboughtwith"]:
						if not name in productNameSet:
							productsToAddName.append(name)

		countProductsToAdd = Counter(productsToAddName)
		
		for nameProductToAdd in countProductsToAdd.most_common():
			found = False
			if totalProducts==order["numberOfElements"]:
				break
			for product in products:
				if product[0]["name"]==nameProductToAdd:
					found=True
					break
			if not found and uniform(0,100)<60:
				totalProducts+=1
				products.append([getProductByName(nameProductToAdd[0]),1])
	
		while totalProducts<order["numberOfElements"]:
			productToAdd = getRandomProduct(exclusionList)
			found = False
			for product in products:
				if product[0]["name"]==productToAdd["name"]:
					product[1]+=1
					found=True
					totalProducts+=1
					break
			if not found: 
				products.append([productToAdd,1])
				totalProducts+=1
				productNameSet.add(productToAdd["name"])
			if "notwith" in productToAdd:
				nameToExclude = []
				for eltToExclude in productToAdd["notwith"]:
					nameToExclude.append(eltToExclude)
				eltsToExclude = getProductsByName(nameToExclude)
				for elt in eltsToExclude:
					exclusionList.append(elt)

		# quantities=getListQuantities(order["numberOfElements"]-totalProducts)
		
		# for i,productToAdd in enumerate(getRandomProducts(len(quantities),exclusionList)):
		# 	found = False
		# 	if totalProducts==order["numberOfElements"]:
		# 		break
		# 	for product in products:
		# 		if product[0]["name"]==productToAdd["name"]:
		# 			product[1]+=quantities[i]
		# 			found=True
		# 			totalProducts+=quantities[i]
		# 			break
		# 	if not found: 
		# 		products.append([productToAdd,quantities[i]])
		# 		totalProducts+=quantities[i]
		# 		productNameSet.add(productToAdd["name"])
	else:
		#print("no more room")
		pass
	order["products"] = products
	
	
	nbSettle = randint(1,2)
	order["settlements"]=nbSettle

		#divide the order in two parts
		
	#print("Order:")
	#print(order)
	return order

def returnValueIfValueOrBelow(nb,value):
	if nb <= value:
		return value
	return nb


class PaymentMethod(Enum):     
    CASH = 0     
    CARD = 1     
    BOTH = 2     

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
parser.add_argument('--holiday', choices=['motherday','christmas','newyearseve',"valentinesday","blackfriday","easter"],default="blackfriday", help='Choose the holiday that will influence the clients')

	
args = parser.parse_args()

useAvro = args.avro
popularProductsToDecode = re.split('[-,]', args.popular)
popularProducts = []

if len(popularProductsToDecode)>=2:
	for i,elt in enumerate(popularProductsToDecode):
		if i % 2 == 0:
			popularProducts.append([elt])
		else :
			popularProducts[len(popularProducts)-1].append(int(elt))

#Todo : change
popularProducts = []#[("Raspberry Pi",0),("Condoms (XXL)",100)]
trendingProducts = []
if args.holiday:
	for match in products.find({ "holidays" : { "$in" : [args.holiday] } }):
		trendingProducts.append(match)

					

ticketsPerMinute = args.tpm
numberOfCheckout = args.checkoutnumber
numberOfAgent = args.checkoutnumber
idOfStore = args.storeID
muspeedcashier = 1.0
sigmaspeedcashier = 0.3
muspeedcash = 7.0
sigmaspeedcash = 4.0
munbelement = 10.0
sigmanbelement = 7.0

cashiers = [{} for i in range(numberOfAgent)] 


for i,cashier in enumerate(cashiers):
	cashier["id"] = i
	cashier["elementPerSecond"] = returnValueIfValueOrBelow(gauss(muspeedcashier, sigmaspeedcashier),0.5)
	cashier[PaymentMethod.CARD] = 8
	cashier[PaymentMethod.CASH] = returnValueIfValueOrBelow(gauss(muspeedcash, sigmaspeedcash),2)
	cashier[PaymentMethod.BOTH] = cashier[PaymentMethod.CARD] + cashier[PaymentMethod.CASH] + 2

#Todo: change
#print("auie")
probabilityOfOrder = 80
currentOrders = [generateOrder(cashiers[i], popularProducts,trendingProducts,args.holiday,probabilityOfOrder) for i in range(numberOfCheckout)] 
#print("auie")



begin = True

while True:
	probabilityOfOrder= (cos(time()*2*pi*1/(2*2*60))+1)*100/2
	#print(probabilityOfOrder)
	for i,order in enumerate(currentOrders):
		if order["finishTime"]<= time() or begin:
			begin = False
			if not order["isAnOrder"]:
				#print("Not an order")
				currentOrders[i] = generateOrder(cashiers[i], popularProducts,trendingProducts,args.holiday,probabilityOfOrder)
				continue
			cashRec = generateCashReceipt(storeid=idOfStore,terminalid=i,agentid=i,customerid=200,order=order,timestamp=time())
			#print(cashRec)
			
			try:
				if useAvro:
					bytes_writer = io.BytesIO()
					encoder = avro.io.BinaryEncoder(bytes_writer)
					writer.write(dict(cashRec), encoder)
					
					r = requests.post('http://entrypoint/v1/tickets',data = bytes_writer.getvalue(),
                    headers={'Content-Type': 'application/avro'})
					#print(r.content)
				else :
					r=requests.post('http://entrypoint/v1/tickets',json=cashRec)
					#print(r.content)
			finally:
				pass
			currentOrders[i] = generateOrder(cashiers[i], popularProducts,trendingProducts,args.holiday,probabilityOfOrder)
	sleep(0.01)
