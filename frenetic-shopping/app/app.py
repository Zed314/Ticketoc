

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

import requests

import pymongo
from pymongo import MongoClient

client = MongoClient('mongodb://mongodb:27017/')
supermarketDB = client["supermarketDB"]
products = supermarketDB["products"]


def getRandomProducts(nb):
	products = supermarketDB.products.aggregate([{ "$sample": { "size": nb } }])

	return list(products)

def generateLine(ind):
	productCode = '000000'  + str(randint(10,20))

	productFromDB = (getRandomProducts(1))[0]
	product = productFromDB["_id"]
	productCategoryName = productFromDB["category"]
	productDescription = productFromDB["name"]
	print(product)
	categoryCode = productCategoryName[0:2].upper()
	taxPercentage=randint(6,20)
	quantity = randint(1,3)
	unitPrice = float(("%.2f"%uniform(0.23,1.10)))
	creditAmount = float(("%.2f"%(unitPrice * quantity)))
	settlementAmount = float(("%.2f"%(creditAmount*(1.+(taxPercentage/100.)))))
	line={
		'lineNumber':ind,
		'productCode':productCode,
		'productDescription':productDescription,
		'productCategoryCode':categoryCode,
		'productCategoryName':productCategoryName,
		'quantity':quantity,
		'unitOfMeasure':'measure',
		'unitPrice':unitPrice,
		'creditAmount':creditAmount,
		'taxPercentage':taxPercentage,
		'settlementAmount':settlementAmount,
	}



	return line

def fromTimeStampToDate(timestamp):
	return datetime.datetime.fromtimestamp(int(timestamp)).strftime('%Y-%m-%d %H:%M:%S')

def truncateFloat(r):
        return float(("%.2f"%(r)));


def generateCashReceipt(storeid=1,terminalid=1,agentid=1,customerid=1,nbtotalproducts= randint(1,5),timestamp=time()):
	nblines = 5 #TODO : change
	
	cashreceipt={
        'cashReceiptID': str(storeid) + str(terminalid) + str(int(timestamp)),
		'storeID':str(storeid),
		'terminalID':str(terminalid),
		'agentID':str(storeid)+str(agentid),
		'customerID':str(customerid),
		'date':fromTimeStampToDate(timestamp),
		'lines':[generateLine(i+1) for i in range(nblines)]
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

def generateApproximateOrder(cashier):
	order = dict()
	order["numberOfElements"] = returnValueIfValueOrBelow(int(gauss(munbelement, sigmanbelement)),1)
	order["billingMethod"] = PaymentMethod.CASH
	order["finishTime"] = estimateTimeRequired(order,cashiers[i]) + time()
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


#parser.add_argument('tick', metavar='N', type=int, nargs='+',
#			help='an integer for the accumulator')
parser.add_argument("-t", "--tpm", type=float, default =60,
                    help="ticket per minute on average")
parser.add_argument("-c", "--checkoutnumber", type=int, default =100,
                    help="number of different checkout in one store")
parser.add_argument("-s","--storeID",type=int, default = "0",
					help="id of the store")
args = parser.parse_args()

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

currentOrders = [generateApproximateOrder(cashiers[i]) for i in range(numberOfCheckout)] 
print("BEFORE")
print(getRandomProducts(2))
#sleep(100)

while True:

	for i,order in enumerate(currentOrders):
		if order["finishTime"]<= time():
			print(cashiers[i])
			print(order["finishTime"])
			cashRec = generateCashReceipt(storeid=idOfStore,terminalid=i,agentid=i,customerid=200,nbtotalproducts=order["numberOfElements"],timestamp=time())
			print(cashRec)
			try:
				r=requests.post('http://ticketoc_entrypoint_1:80/v1/tickets', json={"nique":"adidas"})#cashRec)
				print(r)
			finally:
				pass
			currentOrders[i] = generateApproximateOrder(cashiers[i])
	sleep(0.01)
writeJSON(cashRec,'cashreceipt.json')
