ticketoc = db.getSiblingDB('ticketoc');

ticketoc.tickets.insertMany(
    [
       {
          "cashReceiptID": "133701547997391",
          "storeID": "1337",
          "terminalID": "0",
          "agentID": "13370",
          "customerID": "200",
          "date": "2019-01-20 15: 16: 31",
          "lines": [
             {
                "lineNumber": 1,
                "productCode": "5c4488dbddf35f81ac80e06f",
                "productDescription": "Beef",
                "productCategoryCode": "ME",
                "productCategoryName": "meat",
                "quantity": 1,
                "unitOfMeasure": "kg",
                "unitPrice": 10.0,
                "creditAmount": 10.0,
                "taxPercentage": 10,
                "settlementAmount": 11.0

             },
             {
                "lineNumber": 2,
                "productCode": "5c4488dbddf35f81ac80e827",
                "productDescription": "Super Croix Bora Bora ecodose x30 -0,75l",
                "productCategoryCode": "GE",
                "productCategoryName": "generalfood",
                "quantity": 1,
                "unitOfMeasure": "each",
                "unitPrice": 9.15,
                "creditAmount": 9.15,
                "taxPercentage": 10,
                "settlementAmount": 10.07
             },
             {
                "lineNumber": 3,
                "productCode": "5c4488dbddf35f81ac80e3b1",
                "productDescription": "Auchan filet limande meuniere 200g",
                "productCategoryCode": "GE",
                "productCategoryName": "generalfood",
                "quantity": 1,
                "unitOfMeasure": "each",
                "unitPrice": 3.29,
                "creditAmount": 3.29,
                "taxPercentage": 10,
                "settlementAmount": 3.62
             },
             {
                "lineNumber": 4,
                "productCode": "5c4488dcddf35f81ac80ea0a",
                "productDescription": "Verquin tetes brulees sticks fraise pomme 200g",
                "productCategoryCode": "GE",
                "productCategoryName": "generalfood",
                "quantity": 1,
                "unitOfMeasure": "each",
                "unitPrice": 1.98,
                "creditAmount": 1.98,
                "taxPercentage": 10,
                "settlementAmount": 2.18
             },
             {
                "lineNumber": 5,
                "productCode": "5c4488dcddf35f81ac80e87e",
                "productDescription": "Auchan papier aluminium rouleau de 50m",
                "productCategoryCode": "GE",
                "productCategoryName": "generalfood",
                "quantity": 1,
                "unitOfMeasure": "each",
                "unitPrice": 3.26,
                "creditAmount": 3.26,
                "taxPercentage": 10,
                "settlementAmount": 3.59
             },
             {
                "lineNumber": 6,
                "productCode": "5c4488dbddf35f81ac80e63a",
                "productDescription": "1664 biere blonde 5,5deg -20x25cl",
                "productCategoryCode": "GE",
                "productCategoryName": "generalfood",
                "quantity": 1,
                "unitOfMeasure": "each",
                "unitPrice": 11.62,
                "creditAmount": 11.62,
                "taxPercentage": 10,
                "settlementAmount": 12.78
             }
          ],
          "documentTotal": {
             "taxPayable": 3.94,
             "netTotal": 39.3,
             "grossTotal": 43.24
          },
          "settlements": [
             {
                "settlementAmount": 24.65,
                "paymentMechanism": "CB"
             },
             {
                "settlementAmount": 18.58,
                "paymentMechanism": "Especes"
             }
          ]
       }
    ]
);
