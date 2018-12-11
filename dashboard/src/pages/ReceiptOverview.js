import React, { Component } from 'react';
import SiteWrapper from "../SiteWrapper";
import Receipt from "../components/Receipt";
import {
  Page,
  Grid,
} from "tabler-react";

class ReceiptOverview extends Component {
  render() {
    return (<SiteWrapper>
     <Page.Content title="Live receipt tracking">
      <Receipt 
      details = {
        {
          "cashReceiptID": "1", 
          "storeID": "1", 
          "terminalID": "1", 
          "agentID": "1",
          "agentName": "Mindy Boldton",
          "customerID": "1",
          "customerName": "Haug",
          "customerTitle": "Mr.",
          "date": "2017-11-18 20:39:32"
        }
      }
      lines = {[
        {
            "unitOfMeasure": "measure", 
            "settlementAmount": 0.68, 
            "creditAmount": 0.62, 
            "lineNumber": 1, 
            "unitPrice": 0.31,
            "productName": "Sel Mt Blanche",
            "productCode": "00000010", 
            "taxPercentage": 10, 
            "productDescription": "---", 
            "productCategoryName": "Kertel", 
            "productCategoryCode": "3", 
            "quantity": 2
        }, 
        {
            "unitOfMeasure": "measure", 
            "settlementAmount": 2.36, 
            "creditAmount": 2.02, 
            "lineNumber": 2,
            "productName": "Müesli Milch",
            "unitPrice": 1.01, 
            "productCode": "00000018", 
            "taxPercentage": 17, 
            "productDescription": "---", 
            "productCategoryName": "P.Q.R.", 
            "productCategoryCode": "5", 
            "quantity": 2
        }, 
        {
            "unitOfMeasure": "measure", 
            "settlementAmount": 1.05, 
            "creditAmount": 0.95, 
            "lineNumber": 3, 
            "unitPrice": 0.95, 
            "productName": "Salty Pretzels",
            "productCode": "00000014", 
            "taxPercentage": 11, 
            "productDescription": "---", 
            "productCategoryName": "Kertel", 
            "productCategoryCode": "3", 
            "quantity": 1
        }, 
        {
            "unitOfMeasure": "measure", 
            "settlementAmount": 0.76, 
            "creditAmount": 0.72, 
            "lineNumber": 4, 
            "unitPrice": 0.72, 
            "productName": "Eau minerale",
            "productCode": "00000013", 
            "taxPercentage": 6, 
            "productDescription": "---", 
            "productCategoryName": "Plans", 
            "productCategoryCode": "Q", 
            "quantity": 1
        }, 
        {
            "unitOfMeasure": "measure", 
            "settlementAmount": 1.11, 
            "creditAmount": 1.04, 
            "lineNumber": 5, 
            "unitPrice": 0.52, 
            "productName": "E-Voucher 5 UniCred's",
            "productCode": "00000020", 
            "taxPercentage": 7, 
            "productDescription": "---", 
            "productCategoryName": "UniversalMobile", 
            "productCategoryCode": "Z", 
            "quantity": 2
        }
      ]}
      settlements={[
        {
          "paymentMechanism": "CB", 
          "settlementAmount": 5.71
        }, 
        {
            "paymentMechanism": "Especes", 
            "settlementAmount": 0.25
        }
      ]}
      documentTotal={{
        "grossTotal": 5.96, 
        "taxPayable": 0.61, 
        "netTotal": 5.35
      }} />
     </Page.Content>
     </SiteWrapper>)
  }
}

export default ReceiptOverview