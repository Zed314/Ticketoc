

import argparse
import datetime
import json
import math
import pprint
import sys
from collections import OrderedDict
from enum import Enum
from random import choice, gauss, randint, random, uniform
from time import sleep, time
import avro.schema
from avro.io import DatumWriter
import io
import requests
import re
import pymongo
from pymongo import MongoClient



#print("TETETETETET")

#todo settlementAmout et al.
test_schema = '''
{
    "namespace": "avro.ticketoc",
    "type": "record",
    "name": "Receipt",
    "fields": [
        {
            "name": "cashReceiptID",
            "type": "string"
        },
		{
			"name": "storeID",
			"type": "string"
		},
        {
            "name": "terminalID",
            "type": "string"
        },
        {
            "name": "agentID",
            "type": "string"
        },
		{
            "name": "customerID",
            "type": "string"
        },
        {
            "name": "date",
            "type": "string"
        },
        {
            "name": "documentTotal",
			"type": {
				"type": "record",
				"name":"documentTotalBis",
   			"fields": [
      			{
        		"name": "netTotal",
        		"type": "float"
      			},
      			{
        		"name": "taxPayable",
        		"type": "float"
      			},
      			{
        		"name": "grossTotal",
        		"type": "float"
      			}
    		]
			}


        },
        {
            "name": "settlements",
            "type": {
                "type": "array",
                "items": {
                    "namespace": "avro.ticketoc",
                    "name": "Line",
                    "type": "record",
                    "fields": [
                        {
                            "name": "paymentMechanism",
                            "type": {
                                "type": "enum",
                                "name": "auie",
                                "symbols": [
                                    "Especes",
                                    "CB"
                                ]
                            }
                        },
                        {
                            "name": "settlementAmount",
                            "type": "float"
                        }
                    ]
                }
            }
        },
        {
            "name": "lines",
            "type": {
                "type": "array",
                "items": {
                    "namespace": "avro.ticketoc.Receipt",
                    "name": "Line",
                    "type": "record",
                    "fields": [
                        {
                            "name": "lineNumber",
                            "type": "int"
                        },
                        {
                            "name": "productCode",
                            "type": "string"
                        },
                        {
                            "name": "productDescription",
                            "type": "string"
                        },
                        {
                            "name": "productCategoryCode",
                            "type": "string"
                        },
                        {
                            "name": "productCategoryName",
                            "type": "string"
                        },
                        {
                            "name": "quantity",
                            "type": "int"
                        },
                        {
                            "name": "unitOfMeasure",
                            "type": "string"
                        },
                        {
                            "name": "unitPrice",
                            "type": "float"
                        },
                        {
                            "name": "taxPercentage",
                            "type": "int"
                        },
                        {
                            "name": "creditAmount",
                            "type": "float"
                        },
                        {
                            "name": "settlementAmount",
                            "type": "float"
                        }
                    ]
                }
            }
        }
    ]
}
'''

schema = avro.schema.Parse(test_schema)
writer = avro.io.DatumWriter(schema)


client = MongoClient('mongodb://mongodb:27017/')
supermarketDB = client["supermarketDB"]
products = supermarketDB["products"]
categories = supermarketDB["categories"]

taxes = {}
for category in categories.find({}) :
	taxes[category["name"]] = category["tax"]

def getRandomProducts(nb):
	products = supermarketDB.products.aggregate([{ "$sample": { "size": nb } }])

	return list(products)

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
#	quantitiesProduct = getListQuantities(nbtotalproducts)
#	nblines = len(quantitiesProduct)
#	products = getRandomProducts(nblines)
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

def generateOrder(cashier, popularProducts=[]):
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
		pass
	#TOdo : find appropriate datastructure to add popular products
	return order

def returnValueIfValueOrBelow(nb,value):
	if nb <= value:
		return value
	return nb

#def toAvro(input):
	#toReturn = {}
#	toReturn["cashReceiptID"]=input

class PaymentMethod(Enum):     
    CASH = 1     
    CARD = 2     
    BOTH = 3     

parser = argparse.ArgumentParser(description='Generate some tickets.')

parser.add_argument("-t", "--tpm", type=float, default =60,
                    help="ticket per minute on average")
parser.add_argument("-c", "--checkoutnumber", type=int, default =100,
                    help="number of different checkout in one store")
parser.add_argument("-s","--storeID",type=int, default = "0",
					help="id of the store")
parser.add_argument("-p","--popular",type=str, default = "",
					help="name of the popular product, separated by a comma and followed by the probability in percentage")

#Todo : change
useAvro = False
						
args = parser.parse_args()
re.split('[-,]', args.popular)

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

currentOrders = [generateOrder(cashiers[i]) for i in range(numberOfCheckout)] 
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
					r = requests.post('http://ticketoc_entrypoint_1:80/v1/tickets',data = bytes_writer.getvalue(),
                    headers={'Content-Type': 'application/octet-stream'})
					print(r)
				else :
					r=requests.post('http://ticketoc_entrypoint_1:80/v1/tickets',json=cashRec)
					print(r)
			finally:
				pass
			currentOrders[i] = generateOrder(cashiers[i])
	sleep(0.01)
