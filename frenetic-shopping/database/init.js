supermarket = db.getSiblingDB('supermarket');


supermarket.products.insertMany(
    [
        {
            "category": "movie",
            "tax":20,"name": "Matrix",
      
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 10.0,
            "notwith": [
                "Matrix"
            ]
        },
        {
            "category": "movie",
            "tax":20,"name": "Star Wars IV",
        
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 10.0,
            "notwith": [
                "Star Wars IV"
            ]
        },
        {
            "category": "movie",
            "tax":20,"name": "Star Wars V",
         
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 10.0,
            "notwith": [
                "Star Wars V"
            ]
        },
        {
            "category": "movie",
            "tax":20,"name": "Star Wars VI",
         
            "notwith": [
                "Star Wars VI"
            ],
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 10.0
        },
        {
            "category": "movie",
            "tax":20,"name": "Star Wars VII",
            
            "notwith": [
                "Star Wars VII"
            ],
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 10.0
        },
        {
            "category": "movie",
            "tax":20,"name": "Star Wars VIII",
           
            "notwith": [
                "Star Wars VIII"
            ],
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 10.0
        },
        {
            "category": "movie",
            "tax":20,"name": "Star Wars I",
       
            "notwith": [
                "Star Wars I"
            ],
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 10.0
        },
        {
            "category": "movie",
            "tax":20,"name": "Star Wars II",
         
            "notwith": [
                "Star Wars II"
            ],
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 10.0
        },
        {
            "category": "movie",
            "tax":20,"name": "Star Wars III",
          
            "notwith": [
                "Star Wars III"
            ],
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 10.0
        },
        {
            "category": "movie",
            "tax":20,"name": "The Lord of the Rings: The Fellowship of the Ring",
            
            "notwith": [
                "The Lord of the Rings: The Fellowship of the Ring"
            ],
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 10.0
        },
        {
            "category": "movie",
            "tax":20,"name": "The Lord of the Rings: The Two Towers",
           
            "notwith": [
                "The Lord of the Rings: The Two Towers"
            ],
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 10.0
        },
        {
            "category": "movie",
            "tax":20,"name": "The Lord of the Rings: The Return of the King",

            "notwith": [
                "The Lord of the Rings: The Return of the King"
            ],
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 10.0
        },
        {
            "category": "consumerelectronics",
            "tax":20,"name": "4K TV 200 inches",

            "holidays": [
                "blackfriday"
            ],
            "notwith": [
                "4K TV 200 inches",
                "3D TV 100 inches",
                "Canon Camera",
                "Sony Camera"
            ],
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 2099.0
        },
        {
            "category": "consumerelectronics",
            "tax":20,"name": "3D TV 100 inches",

            "holidays": [
                "blackfriday"
            ],
            "notwith": [
                "4K TV 200 inches",
                "3D TV 100 inches",
                "Canon Camera",
                "Sony Camera"
            ],
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 1499.0
        },
        {
            "category": "consumerelectronics",
            "tax":20,"name": "CD player",
    
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 20.0
        },
        {
            "category": "consumerelectronics",
            "tax":20,"name": "DVD player",
         
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 50.0
        },
        {
            "category": "consumerelectronics",
            "tax":20,"name": "Blu-ray player",

            "notwith": [
                "DVD player"
            ],
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 100.0
        },
        {
            "category": "consumerelectronics",
            "tax":20,"name": "Raspberry Pi",
 
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 40.0,
            "frequentlyboughtwith": [
                "Micro USB charger",
                "MicroSD Card (16Gb)"
            ]
        },
        {
            "category": "consumerelectronics",
            "tax":20,"name": "Micro USB charger",
 
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 10.0
        },
        {
            "category": "consumerelectronics",
            "tax":20,"name": "MicroSD Card (16Gb)",
    
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 10.0
        },
        {
            "category": "consumerelectronics",
            "tax":20,"name": "MicroSD Card (32Gb)",

            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 15.0
        },
        {
            "category": "consumerelectronics",
            "tax":20,"name": "MicroSD Card (64Gb)",
             "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 25.0
        },
        {
            "category": "consumerelectronics",
            "tax":20,"name": "MicroSD Card (128Gb)",
  
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 50.0
        },
        {
            "category": "consumerelectronics",
            "tax":20,"name": "Canon Camera",
    
            "holidays": [
                "blackfriday"
            ],
            "frequentlyboughtwith": [
                "MicroSD Card (32Gb)"
            ],
            "notwith": [
                "Sony Camera",
                "Canon Camera",
                "4K TV 200 inches",
                "3D TV 100 inches"
            ],
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 499.0
        },
        {
            "category": "consumerelectronics",
            "tax":20,"name": "Sony Camera",
            
            "holidays": [
                "blackfriday"
            ],
            "frequentlyboughtwith": [
                "MicroSD Card (32Gb)"
            ],
            "notwith": [
                "Canon Camera",
                "Sony Camera",
                "4K TV 200 inches",
                "3D TV 100 inches"
            ],
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 499.0
        },
        {
            "category": "consumerelectronics",
            "tax":20,"name": "Chintendo Vi",
     
            "holidays": [
                "christmas"
            ],
            "notwith": [
                "Chintendo Vi"
            ],
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 10.99
        },
        {
            "category": "consumerelectronics",
            "tax":20,"name": "Webcam",
    
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 20.0
        },
        {
            "category": "consumerelectronics",
            "tax":20,"name": "iPhone X",
                    "notwith": [
                "Galaxy S9",
                "iPhone X"
            ],
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 1230.0
        },
        {
            "category": "consumerelectronics",
            "tax":20,"name": "Galaxy S9",
   
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 20.0,
            "notwith": [
                "iPhone X",
                "Galaxy S9"
            ],
            "frequentlyboughtwith": [
                "MicroSD Card (64Gb)"
            ]
        },
        {
            "category": "consumerelectronics",
            "tax":20,"name": "Inkjet printer",
   
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 50.99,
            "frequentlyboughtwith": [
                "Inkjet Cartdrige"
            ],
            "notwith": [
                "Laser printer",
                "Laser Cartdrige",
                "Inkjet printer"
            ]
        },
        {
            "category": "consumerelectronics",
            "tax":20,"name": "Inkjet Cartdrige",
       
            "notwith": [
                "Laser printer",
                "Laser Cartdrige"
            ],
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 50.00
        },
        {
            "category": "consumerelectronics",
            "tax":20,"name": "Laser printer",
      
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 300.99,
            "notwith": [
                "Inkjet printer",
                "Inkjet Cartdrige",
                "Laser printer"
            ],
            "frequentlyboughtwith": [
                "Laser Cartdrige"
            ]
        },
        {
            "category": "consumerelectronics",
            "tax":20,"name": "Laser Cartdrige",
            "notwith": [
                "Inkjet printer",
                "Inkjet Cartdrige"
            ],
     
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 150.00
        },
        {
            "category": "junk",
            "tax":20,"name": "Nutella",
     
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 4.0,
            "frequentlyboughtwith": [
                "Toast"
            ]
        },
        {
            "category": "junk",
            "tax":20,"name": "Chocolate Egg (0% chocolate)",
       
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 5.0,
            "restrictions": [
                "christmas"
            ],
            "holidays": [
                "easter"
            ]
        },
        {
            "category": "junk",
            "tax":20,"name": "Chocolate Egg (Fair trade chocolate)",
        
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 15.0,
            "restrictions": [
                "christmas"
            ],
            "holidays": [
                "easter"
            ]
        },
        {
            "category": "junk",
            "tax":20,"name": "Chocolate House",
        
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 5.0,
            "restrictions": [
                "easter"
            ],
            "holidays": [
                "easter"
            ]
        },
        {
            "category": "junk",
            "tax":20,"name": "Santa claus in chocolate",
        
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 5.0,
            "restrictions": [
                "christmas"
            ],
            "holidays": [
                "christmas"
            ]
        },
        {
            "category": "junk",
            "tax":20,"name": "Advent Calendar",
          
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 4.0,
            "restrictions": [
                "christmas"
            ],
            "holidays": [
                "christmas"
            ]
        },
        {
            "category": "junk",
            "tax":20,"name": "Mon Chéri",
      
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 10.0,
            "holidays": [
                "valentinesday"
            ]
        },
        {
            "category": "junk",
            "tax":20,"name": "Ferrero Rocher (with Extra Palm Oil)",
      
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 10.0,
            "holidays": [
                "easter",
                "newyearseve",
                "christmas"
            ]
        },
        {
            "category": "junk",
            "tax":20,"name": "Ferrero Rocher",
           
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 15.0,
            "holidays": [
                "easter",
                "newyearseve",
                "christmas"
            ]
        },
        {
            "category": "animalbased",
            "tax":20,"name": "Chicken Eggs",
            "unit": "dozen",
          "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 5.0
        },
        {
            "category": "animalbased",
            "tax":20,"name": "Ducks Eggs",
            "unit": "half-dozen",
            "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 5.0
        },
        {
            "category": "meat",
            "tax":20,"name": "Kangoroo",
            "unit": "kg",
           "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 30
        },
        {
            "category": "meat",
            "tax":20,"name": "Dog",
            "unit": "kg",
            "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 15
        },
        {
            "category": "fruits",
            "tax":20,"name": "Apple",
            "unit": "kg",
           "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 1.30
        },
        {
            "category": "bakery",
            "tax":20,"name": "Baguette",
            "unit": "each",
         "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 0.95
        },
        {
            "category": "bakery",
            "tax":20,"name": "Toast",
            "unit": "each",
          "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 1.30
        },
        {
            "category": "bakery",
            "tax":20,"name": "Pain chocolat",
            "unit": "each",
         "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 1.19
        },
        {
            "category": "fruits",
            "tax":20,"name": "Pear",
            "unit": "kg",
          "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 1.50
        },
        {
            "category": "fruits",
            "tax":20,"name": "Banana",
            "unit": "kg",
            "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 1.30
        },
        {
            "category": "fruits",
            "tax":20,"name": "Mango",
            "unit": "each",
            "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 2.5
        },
        {
            "category": "fruits",
            "tax":20,"name": "Grape",
            "unit": "kg",
          "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 2.5
        },
        {
            "category": "fruits",
            "tax":20,"name": "Kaki",
            "unit": "each",
             "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 2.5
        },
        {
            "category": "vegetables",
            "tax":20,"name": "Topinambour",
            "unit": "kg",
          "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 15.0
        },
        {
            "category": "vegetables",
            "tax":20,"name": "Potatoes",
            "unit": "kg",
         "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 1.5
        },
        {
            "category": "vegetables",
            "tax":20,"name": "Salad",
            "unit": "each",
             "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 1
        },
        {
            "category": "vegetables",
            "tax":20,"name": "Soup",
            "unit": "L",
             "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 1
        },
        {
            "category": "everydaylife",
            "tax":20,"name": "Pasta Linguine",
            "unit": "kg",
            "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 2
        },
        {
            "category": "everydaylife",
            "tax":20,"name": "Spaghetti",
     
            "frequentlyboughtwith": [
                "Bolognese sauce"
            ],
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 2
        },
        {
            "category": "everydaylife",
            "tax":20,"name": "Spa'ghetto",
            "unit": "each",
            "frequentlyboughtwith": [
                "Bolognese sauce"
            ],
            "notwith": [
                "Spaghetti"
            ],
        "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 0.10
        },
        {
            "category": "animalbased",
            "tax":20,"name": "Bolognese sauce",
        
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 3
        },
        {
            "category": "everydaylife",
            "tax":20,"name": "Pesto sauce",
        
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 4
        },
        {
            "category": "vegetables",
            "tax":20,"name": "Carrots",
            "unit": "kg",
        "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 3.0
        },
        {
            "category": "everydaylife",
            "tax":20,"name": "Grated cheese",
   
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 3.0
        },
        {
            "category": "vegetables",
            "tax":20,"name": "Falafel ball",
     
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 5.0
        },
        {
            "category": "vegetables",
            "tax":20,"name": "Mashed potatoes",
            
            "frequentlyboughtwith": [
                "Sliced ham",
                "Sliced ham (organic)"
            ],
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 0.5
        },
        {
            "category": "meat",
            "tax":20,"name": "Beef",
            "unit": "kg",
          "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 10
        },
        {
            "category": "meat",
            "tax":20,"name": "Sliced ham",
            "unit": "each",
            "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 2.95
        },
        {
            "category": "meat",
            "tax":20,"name": "Sliced ham (organic)",
            "unit": "each",
           "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 4.39
        },
        {
            "category": "meat",
            "tax":20,"name": "Lamb",
            "unit": "kg",
             "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 8
        },
        {
            "category": "meat",
            "tax":20,"name": "Chicken",
            "unit": "kg",
          "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 6
        },
        {
            "category": "meat",
            "tax":20,"name": "Duck",
            "unit": "kg",
         "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 9
        },
        {
            "category": "fish",
            "tax":20,"name": "Clownfish",
            "unit": "each",
         "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 15
        },
        {
            "category": "seafruits",
            "tax":20,"name": "Oysters",
            "unit": "dozen",
            "holidays": [
                "christmas",
                "newyearseve"
            ],
           "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 15
        },
        {
            "category": "luxery",
            "tax":20,"name": "Snails",
            "unit": "dozen",
            "holidays": [
                "christmas",
                "newyearseve"
            ],
          "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 10
        },
        {
            "category": "luxery",
            "tax":20,"name": "Foie gras",
            "unit": "each",
            "restrictions": [
                "christmas",
                "newyearseve"
            ],
            "holidays": [
                "christmas",
                "newyearseve"
            ],
        "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 20
        },
        {
            "category": "clothes",
            "tax":20,"name": "Pants",
            "unit": "each",
         "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 15
        },
        {
            "category": "clothes",
            "tax":20,"name": "Socks",
            
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 2
        },
        {
            "category": "clothes",
            "tax":20,"name": "T-Shirts",
            
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 10
        },
        {
            "category": "plants",
            "tax":20,"name": "Roses",
            
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 2,
            "holidays": [
                "valentinesday",
                "motherday"
            ]
        },
        {
            "category": "bakery",
            "tax":20,"name": "Galette des rois",
            
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 6.95,
            "restrictions": [
                "epiphany"
            ],
            "holidays": [
                "epiphany"
            ]
        },
        {
            "category": "plants",
            "tax":20,"name": "Lemon tree",
            
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 25
        },
        {
            "category": "plants",
            "tax":20,"name": "Apple tree",
         
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 30
        },
        {
            "category": "plants",
            "tax":20,"name": "Cactus",
     
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 5
        },
        {
            "category": "everydaylife",
            "tax":20,"name": "Toilet paper",
     
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 5
        },
        {
            "category": "greetingscard",
            "tax":20,"name": "Happy Birthday card",
      
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 2
        },
        {
            "category": "greetingscard",
            "tax":20,"name": "Marriage card",
          
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 2
        },
        {
            "category": "greetingscard",
            "tax":20,"name": "Merry Christmas card",
      
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 2,
            "restrictions": [
                "christmas"
            ],
            "holidays": [
                "christmas"
            ]
        },
        {
            "category": "greetingscard",
            "tax":20,"name": "New years card",
        
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 2,
            "holidays": [
                "newyearseve"
            ]
        },
        {
            "category": "health",
            "tax":20,"name": "Condoms (S)",
         
            "holidays": [
                "valentinesday"
            ],
            "notwith": [
                "Condoms (M)",
                "Condoms (XL)",
                "Condoms (XXL)",
                "Condoms (XXXL) (aka Trash bags)"
            ],
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 5
        },
        {
            "category": "health",
            "tax":20,"name": "Condoms (M)",
            "unit": "each",
            "holidays": [
                "valentinesday"
            ],
            "notwith": [
                "Condoms (S)",
                "Condoms (XL)",
                "Condoms (XXL)",
                "Condoms (XXXL) (aka Trash bags)"
            ],
           "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 5
        },
        {
            "category": "health",
            "tax":20,"name": "Condoms (XL)",
            "unit": "each",
            "holidays": [
                "valentinesday"
            ],
            "notwith": [
                "Condoms (S)",
                "Condoms (M)",
                "Condoms (XXL)",
                "Condoms (XXXL) (aka Trash bags)"
            ],
         "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 5
        },
        {
            "category": "health",
            "tax":20,"name": "Condoms (XXL)",
        
            "holidays": [
                "valentinesday"
            ],
            "notwith": [
                "Condoms (S)",
                "Condoms (M)",
                "Condoms (XXXL) (aka Trash bags)",
                "Condoms (XL)"
            ],
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 5
        },
        {
            "category": "health",
            "tax":20,"name": "Condoms (XXXL) (aka Trash bags)",
            
            "holidays": [
                "valentinesday"
            ],
            "notwith": [
                "Condoms (S)",
                "Condoms (M)",
                "Condoms (XXL)",
                "Condoms (XL)"
            ],
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 5
        },
        {
            "category": "health",
            "tax":20,"name": "Lubriant (1L)",
          
            "holidays": [
                "valentinesday"
            ],
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 10
        },
        {
            "category": "junk",
            "tax":20,"name": "Marple Syrup",
           
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 5
        },
        {
            "category": "fruits",
            "tax":20,"name": "Apple juice",
     
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 2
        },
        {
            "category": "fruits",
            "tax":20,"name": "Pear juice",
     
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 5
        },
        {
            "category": "fruits",
            "tax":20,"name": "Orange juice",
  
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 3
        },
        {
            "category": "animalbased",
            "tax":20,"name": "Emmental",
        
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 4.0
        },
        {
            "category": "animalbased",
            "tax":20,"name": "Camembert",
          
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 5.0
        },
        {
            "category": "animalbased",
            "tax":20,"name": "Omelette du fromage",
        
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 4.38
        },
        {
            "category": "junk",
            "tax":20,"name": "Margherita Pizza",
     
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 3.00
        },
        {
            "category": "everydaylife",
            "tax":20,"name": "Coffee",
         
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 4.00
        },
        {
            "category": "everydaylife",
            "tax":20,"name": "Sugar",
          
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 3.00
        },
        {
            "category": "junk",
            "tax":20,"name": "Chewing gum",
         
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 2.00
        },
        {
            "category": "health",
            "tax":20,"name": "Toothbrush",
       
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 3.00
        },
        {
            "category": "health",
            "tax":20,"name": "Electric Toothbrush",
    
            "frequentlyboughtwith": [
                "Extra brush for toothbrush"
            ],
            "unit": "each", "vegan": true, "isBio": false, "containsMeat": false, "isFrozen": false, "alcool": false, "price": 15.00
        },
        {
            "category": "health",
            "tax":20,"name": "Extra brush for toothbrush",
         
            "unit": "each",
            "vegan": true,
            "isBio": false,
            "containsMeat": false,
            "isFrozen": false,
            "alcool": false,
            "price": 3.0
        },
        {
            "tax":20,"name": "banane bio sachet 600g",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 1.89
        },
        {
            "tax":20,"name": "Lyre Bio poulet blanc 1,350kg",
            "isBio": true,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 14.79
        },
        {
            "tax":20,"name": "Auchan bio carottes filiere sachet 1kg",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.5
        },
        {
            "tax":20,"name": "courgettes bio barquette 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 3.99
        },
        {
            "tax":20,"name": "Auchan bio orange filet 1kg",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 3.49
        },
        {
            "tax":20,"name": "Auchan bio oignons filet 1kg",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.99
        },
        {
            "tax":20,"name": "concombre bio piece",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 1.99
        },
        {
            "tax":20,"name": "Auchan pommes de terre bio filet 2,5kg",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 4.99
        },
        {
            "tax":20,"name": "tomate ronde grappe bio barquette 500g",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 1.99
        },
        {
            "tax":20,"name": "courge butternut bio piece",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.99
        },
        {
            "tax":20,"name": "Bonduelle feuille de chene bio sachet 100g",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.02
        },
        {
            "tax":20,"name": "Auchan Citron bio sachet 4 fruits",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 1.69
        },
        {
            "tax":20,"name": "pomme Juliet bio 1kg",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 3.69
        },
        {
            "tax":20,"name": "brocoli bio piece",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.49
        },
        {
            "tax":20,"name": "Auchan saumon fume Atlantique bio tranche x4 -120g",
            "isBio": true,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 5.5
        },
        {
            "tax":20,"name": "orange a jus bio filet 2kg",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 4.49
        },
        {
            "tax":20,"name": "Auchan bio hache 5% -350g",
            "isBio": true,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 5.95
        },
        {
            "tax":20,"name": "2 poivrons bio vert, jaune ou rouge 300g",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.99
        },
        {
            "tax":20,"name": "Nature de France cordon bleu de poulet emmental bio 200g",
            "isBio": true,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 3.65
        },
        {
            "tax":20,"name": "potimarron bio piece",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 3.29
        },
        {
            "tax":20,"name": "Loue oeufs bio moyen x10",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 4.46
        },
        {
            "tax":20,"name": "Loue oeufs fermiers gros bio x6",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 3.08
        },
        {
            "tax":20,"name": "Auchan bio oeuf x10",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 3.0
        },
        {
            "tax":20,"name": "Auchan bio lait equitable demi-ecreme bouteille 6x1l",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 5.94
        },
        {
            "tax":20,"name": "Herta bio jambon sans nitrate a l'etouffe 4 tranches 120g",
            "isBio": true,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 5.02
        },
        {
            "tax":20,"name": "Auchan bio lait equitable entier bouteille 6x1l",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 8.1
        },
        {
            "tax":20,"name": "Fleury Michon bio jambon superieur sans couenne 4 tranches",
            "isBio": true,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 4.58
        },
        {
            "tax":20,"name": "Auchan Bio Ravioli ricotta 250g",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.45
        },
        {
            "tax":20,"name": "Lactel matin leger bio sans lactose 1,2% U.H.T. 6x1l",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 10.92
        },
        {
            "tax":20,"name": "Candia grandlait bio demi-ecreme 6x1l",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 7.92
        },
        {
            "tax":20,"name": "Auchan bio galette de ble noir x4",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 1.95
        },
        {
            "tax":20,"name": "Lactel lait demi-ecreme bio U.H.T. bouteille 6x1l",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 7.26
        },
        {
            "tax":20,"name": "Auchan bio steak hache 4x100g",
            "isBio": true,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": true,
            "category": "bio",
            "unit": "each",
            "price": 5.77
        },
        {
            "tax":20,"name": "La Laitiere Yaourt bio au lait entier vanille 4x125g",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.03
        },
        {
            "tax":20,"name": "Auchan bio oeufs x15",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 4.36
        },
        {
            "tax":20,"name": "Bonjour Campagne boudin noir bio aux oignons x2 -200g",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 3.79
        },
        {
            "tax":20,"name": "Auchan bio parmigiano rape 50g",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 0.99
        },
        {
            "tax":20,"name": "Auchan bio beurre moule doux 250g",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.38
        },
        {
            "tax":20,"name": "Fleury Michon bio blanc poulet taux sel reduit 4 tranches",
            "isBio": true,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 4.43
        },
        {
            "tax":20,"name": "Auchan bio petits pois  600g",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": true,
            "category": "bio",
            "unit": "each",
            "price": 2.08
        },
        {
            "tax":20,"name": "Nocciolata pate a tartiner bio cacao et noisettes 700g",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 8.05
        },
        {
            "tax":20,"name": "Auchan bio huile d'olive extra-vierge 75cl",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 5.2
        },
        {
            "tax":20,"name": "Jardin Bio pate a tartiner noisette cacao 350g",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 3.42
        },
        {
            "tax":20,"name": "Auchan pur jus d'orange frais bio 1l",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.9
        },
        {
            "tax":20,"name": "Bjorg lait d'amande bio 1l",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.69
        },
        {
            "tax":20,"name": "Jardin Bio petits pois tres fins et carottes rondelles 660g",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.67
        },
        {
            "tax":20,"name": "Lactel matin leger bio sans lactose 1,2% U.H.T. 6x1l",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 10.92
        },
        {
            "tax":20,"name": "Candia grandlait bio demi-ecreme 6x1l",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 7.92
        },
        {
            "tax":20,"name": "Pressade bio nectar multifruits 1,5l",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.02
        },
        {
            "tax":20,"name": "Auchan riz thai bio 500g",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.03
        },
        {
            "tax":20,"name": "Lactel lait demi-ecreme bio U.H.T. bouteille 6x1l",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 7.26
        },
        {
            "tax":20,"name": "Auchan bio flocons d'avoine 500g",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 1.66
        },
        {
            "tax":20,"name": "Jardin Bio haricots verts tres fins 660g",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.36
        },
        {
            "tax":20,"name": "Thomas le prince pur jus pomme bio 1l",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.5
        },
        {
            "tax":20,"name": "Auchan Bio champignons eminces 230g",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.26
        },
        {
            "tax":20,"name": "Nocciolata pate a tartiner bio 270g",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 3.38
        },
        {
            "tax":20,"name": "Force Bio 100% pur jus de grenade 1l",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 6.43
        },
        {
            "tax":20,"name": "Jardin Bio haricots beurre extra fins coupes bocal 660g",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 4.19
        },
        {
            "tax":20,"name": "Auchan bio muesli croustillant quinoa chocolat 500g",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 3.69
        },
        {
            "tax":20,"name": "Auchan Bio boisson a l'avoine brique 1L",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 1.7
        },
        {
            "tax":20,"name": "Carryboo couches dermo sensitives 12/25kg x44 taille5",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 18.66
        },
        {
            "tax":20,"name": "Carryboo batonnets securite bebe x50",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 1.32
        },
        {
            "tax":20,"name": "Auchan baby bio maxi carre x40",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 1.77
        },
        {
            "tax":20,"name": "Cadum gel douche surgras miel de fleur bio 400ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.69
        },
        {
            "tax":20,"name": "So'bio Etic eau micellaire nettoyante bebe 500ml",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 8.08
        },
        {
            "tax":20,"name": "Hipp bio mon premier biscuit boite 180g des 6 mois",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.95
        },
        {
            "tax":20,"name": "Hipp bio haricots verts p. de terre poulet 2x190g des 6 mois",
            "isBio": true,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.47
        },
        {
            "tax":20,"name": "Hipp bio soupe 6 legumes semoule brique 2x250ml des 8mois",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.58
        },
        {
            "tax":20,"name": "Hipp bio risotto legumes petits pois poulet 260g des 18 mois",
            "isBio": true,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.38
        },
        {
            "tax":20,"name": "Eveil bio nature croissance 6x1l",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 11.28
        },
        {
            "tax":20,"name": "Carryboo couches dermo sensitives 4/9kg x54 taille 3",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 18.66
        },
        {
            "tax":20,"name": "So'Bio Etic gel lavant tres doux bebe 500ml",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 8.08
        },
        {
            "tax":20,"name": "Hipp bio menus tagliatelle legume colin 2x190g des8mois",
            "isBio": true,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.47
        },
        {
            "tax":20,"name": "Nestle bio naturnes patate douce carottes 2x130g des 4/6mois",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 1.6
        },
        {
            "tax":20,"name": "Auchan Baby Bio croissance 10 mois a 3 ans 6x1l",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 10.32
        },
        {
            "tax":20,"name": "Hipp croissance bio format biberon 6x25cl des 10 mois",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 5.58
        },
        {
            "tax":20,"name": "Nestle naturnes bio pommes bananes 2x115g des 4/6mois",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 1.7
        },
        {
            "tax":20,"name": "Babybio mirabelle lorraine pomme aquitaine 2x130g des 4 mois",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.49
        },
        {
            "tax":20,"name": "Good Gout bio ratatouille de quinoa 190g des 6mois",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.91
        },
        {
            "tax":20,"name": "Hipp bio lait croissance en poudre 900g de 12mois a 3ans",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 12.9
        },
        {
            "tax":20,"name": "Auchan environnement papier toilette blanc rouleau x16",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 6.15
        },
        {
            "tax":20,"name": "Arbre Vert lessive diluee vegetal 30 lavages 2l + recharge",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 10.65
        },
        {
            "tax":20,"name": "Auchan Mieux Vivre allume feu 100% naturel x24",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 1.11
        },
        {
            "tax":20,"name": "Arbre Vert lessive vegetal recharge ecolabel 30 lavages 2l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 5.59
        },
        {
            "tax":20,"name": "Auchan environnement essuie-tout maxi rouleau x2",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.23
        },
        {
            "tax":20,"name": "Arbre Vert lessive vegetale ecolabel 45 lavages 3l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 10.32
        },
        {
            "tax":20,"name": "Maison Verte lessive ecolabel fraicheur ete 40 lavages 2,4l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 8.81
        },
        {
            "tax":20,"name": "Arbre Vert liquide vaisselle ecologique amande 500ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 1.53
        },
        {
            "tax":20,"name": "Vademecum dentifrice bio protection complete 75ml",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.83
        },
        {
            "tax":20,"name": "Arbre Vert liquide vaisselle ecologique peau sensible 500ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 1.53
        },
        {
            "tax":20,"name": "Auchan disques a demaquiller bio x70",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 1.24
        },
        {
            "tax":20,"name": "Cadum gel douche surgras miel de fleur bio 400ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.69
        },
        {
            "tax":20,"name": "Auchan sacs poubelle 100% recyclable lien classique 10x50l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 2.9
        },
        {
            "tax":20,"name": "Auchan Mieux Vivre vinaigre menager 100% naturel 1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 1.25
        },
        {
            "tax":20,"name": "Auchan gel wc detartrant ecologique 750ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 1.09
        },
        {
            "tax":20,"name": "L'Arbre Vert bien etre creme douche amande douce bio 250ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 1.95
        },
        {
            "tax":20,"name": "Auchan sac poubelle 100% recycle lien classique 15x30l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 1.15
        },
        {
            "tax":20,"name": "So'Bio Etic gel pur aloe vera peau sensible reactive 125ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 10.7
        },
        {
            "tax":20,"name": "So Bio Etic plaisir d'orient huile pure argan 100ml",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 12.3
        },
        {
            "tax":20,"name": "L'Arbre Vert bien etre creme de douche vanille bio 250ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bio",
            "unit": "each",
            "price": 1.95
        },
        {
            "tax":20,"name": "Auchan lait demi-ecreme U.H.T. brique 8x1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 6.08
        },
        {
            "tax":20,"name": "Auchan oeufs moyen de poules elevees en plein air x12",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.65
        },
        {
            "tax":20,"name": "Auchan lait demi-ecreme bouteille 6x1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 4.98
        },
        {
            "tax":20,"name": "Auchan oeuf gros de poules elevees en plein air x12",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.69
        },
        {
            "tax":20,"name": "Loue oeufs bio moyen x10",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 4.46
        },
        {
            "tax":20,"name": "Auchan creme legere semi-epaisse 3x20cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.04
        },
        {
            "tax":20,"name": "Pouce lait demi-ecreme brique 6x1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 3.84
        },
        {
            "tax":20,"name": "Auchan oeufs moyens dates au jour de ponte x12",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.74
        },
        {
            "tax":20,"name": "Paysan Breton beurre moule doux 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 4.65
        },
        {
            "tax":20,"name": "Loue oeufs fermiers gros bio x6",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 3.08
        },
        {
            "tax":20,"name": "Auchan oeufs de poules elevees en plein air label rouge x12",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 3.29
        },
        {
            "tax":20,"name": "Auchan oeufs moyens dates du jour de ponte x20",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.69
        },
        {
            "tax":20,"name": "Auchan beurre moule doux 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 4.07
        },
        {
            "tax":20,"name": "Auchan creme U.H.T. liquide legere 3x20cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.59
        },
        {
            "tax":20,"name": "Auchan creme epaisse entiere 494g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.39
        },
        {
            "tax":20,"name": "Paysan Breton beurre moule doux 250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.41
        },
        {
            "tax":20,"name": "Elle et Vire beurre doux 60% mg barquette 250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.77
        },
        {
            "tax":20,"name": "Auchan creme epaisse legere 15%mg 505g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.15
        },
        {
            "tax":20,"name": "Auchan beurre tendre doux 250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.92
        },
        {
            "tax":20,"name": "Auchan oeufs de poules elevees en plein air gros x6",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.35
        },
        {
            "tax":20,"name": "Bonne Maman mousse au chocolat au lait 4x50g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.12
        },
        {
            "tax":20,"name": "Andros compote de pommes nature 16x100g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 3.49
        },
        {
            "tax":20,"name": "Yop mini saveur fraise 8x100g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.39
        },
        {
            "tax":20,"name": "Auchan yaourts brasses et mixes aux fruits 16x125g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.65
        },
        {
            "tax":20,"name": "Auchan liegeois chocolat 12x100g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.59
        },
        {
            "tax":20,"name": "P'tit Yop panache 6x180g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.5
        },
        {
            "tax":20,"name": "Perle de lait vanille 8x125g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.92
        },
        {
            "tax":20,"name": "Auchan mousse au chocolat au lait 8x12cl",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.11
        },
        {
            "tax":20,"name": "Bonne Maman mousse au chocolat aux oeufs frais 4x50g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.12
        },
        {
            "tax":20,"name": "Actimel gout fraise 12x100g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 4.26
        },
        {
            "tax":20,"name": "Nestle Viennois liegeois chocolat 12x100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 3.26
        },
        {
            "tax":20,"name": "Yoplait yaourts natures sucres 16x125g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.55
        },
        {
            "tax":20,"name": "Petits Filous tub's panaches 12x40g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.5
        },
        {
            "tax":20,"name": "Danette pop chocolat bille 3chocolats x4 -468g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.09
        },
        {
            "tax":20,"name": "Petits Filous aux fruits 24x50g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.69
        },
        {
            "tax":20,"name": "Jockey stracciatella 4x120g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.81
        },
        {
            "tax":20,"name": "Nestle Viennois mousse liegeoise chocolat 8x90g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.51
        },
        {
            "tax":20,"name": "Bonne Maman yaourt confiture fraise 4x125g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.78
        },
        {
            "tax":20,"name": "Petit Nesquik creme dessert chocolat 6x60g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.35
        },
        {
            "tax":20,"name": "Auchan tiramisu au speculos au mascarpone 2x100g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.14
        },
        {
            "tax":20,"name": "Auchan raclette tranche 400g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 3.85
        },
        {
            "tax":20,"name": "Auchan emmental rape francais 350g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.5
        },
        {
            "tax":20,"name": "Auchan emmental rape francais 200g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.45
        },
        {
            "tax":20,"name": "Auchan emmental rape 3x70g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.5
        },
        {
            "tax":20,"name": "Auchan emmental rape 750g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 4.95
        },
        {
            "tax":20,"name": "Auchan rape francais 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 3.4
        },
        {
            "tax":20,"name": "Auchan fromage pour tartiflette 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 3.33
        },
        {
            "tax":20,"name": "Auchan emmental francais 400g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 3.01
        },
        {
            "tax":20,"name": "Fauquet maroilles sorbais AOP 575g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 7.66
        },
        {
            "tax":20,"name": "Auchan des de mimolette et edam 150g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.95
        },
        {
            "tax":20,"name": "Auchan coeur a coeur 300g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.39
        },
        {
            "tax":20,"name": "Auchan mimolette 290g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.7
        },
        {
            "tax":20,"name": "Auchan emmental francais 250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.93
        },
        {
            "tax":20,"name": "Coeur de Lion coulommiers portion x10 -350g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 3.53
        },
        {
            "tax":20,"name": "Auchan comte AOP 450g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 5.05
        },
        {
            "tax":20,"name": "Caprice des Dieux 200g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.63
        },
        {
            "tax":20,"name": "Babybel mini filet x20 -440g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 5.72
        },
        {
            "tax":20,"name": "Auchan mimolette tranche x10 -200g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.77
        },
        {
            "tax":20,"name": "Entremont parmigiano reggiano rape AOP 60g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.64
        },
        {
            "tax":20,"name": "Auchan fromage a tartiner nature 300g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.8
        },
        {
            "tax":20,"name": "Fleury Michon blanc poulet dore 6 tranches 180g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.2
        },
        {
            "tax":20,"name": "Auchan jambon superieur decouenne degraisse 6 tranches 255g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.76
        },
        {
            "tax":20,"name": "Auchan jambon superieur decouenne tranche x4 -180g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.09
        },
        {
            "tax":20,"name": "Auchan jambon de paris decouenne degraisse tranche x4 -180g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.59
        },
        {
            "tax":20,"name": "Le Charcutier jambon sup.cuit torchon sans couenne x4 -240g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 3.99
        },
        {
            "tax":20,"name": "Auchan lardons fumes 2x150g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.02
        },
        {
            "tax":20,"name": "Le Charcutier jambon cuit avec couenne x4 -240g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 3.89
        },
        {
            "tax":20,"name": "Herta Knacki original taux sel reduit x10 -350g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.18
        },
        {
            "tax":20,"name": "Auchan ptit saucisson 200g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.49
        },
        {
            "tax":20,"name": "Auchan jambon superieur sel reduit tranche x4 - 160g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.89
        },
        {
            "tax":20,"name": "Le Charcutier jambon cru sec tranche x15 -200g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 3.99
        },
        {
            "tax":20,"name": "Auchan jambon paris decouenne tranche x6 -270g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.33
        },
        {
            "tax":20,"name": "Herta le bon Paris jambon cuit a l'etouffe 4 tranches 170g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.17
        },
        {
            "tax":20,"name": "Herta le bon Paris jambon cuit a l'etouffe 6 tranches 255g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.79
        },
        {
            "tax":20,"name": "Herta Knacki original taux sel reduit x6 -210g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.99
        },
        {
            "tax":20,"name": "Herta le bon Paris jambon fume 4 tranches 140g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.13
        },
        {
            "tax":20,"name": "Moroni chorizo doux 200g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.9
        },
        {
            "tax":20,"name": "Mmm! saucisse de montbeliard 2x150g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 3.18
        },
        {
            "tax":20,"name": "Auchan blanc de poulet tranche x6 -180g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.09
        },
        {
            "tax":20,"name": "Auchan allumettes bacon fumees 2x75g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.28
        },
        {
            "tax":20,"name": "Le Gaulois cordon bleu x4 -400g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 3.62
        },
        {
            "tax":20,"name": "Auchan oeuf de lompe noir 100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.48
        },
        {
            "tax":20,"name": "Le Traiteur lasagne de boeuf 1kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 6.95
        },
        {
            "tax":20,"name": "Auchan oeufs de lompe rouge 100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.48
        },
        {
            "tax":20,"name": "Auchan truite fumee tranche x4 - 100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 3.01
        },
        {
            "tax":20,"name": "Le Gaulois cordon bleu de poulet x2 -200g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.87
        },
        {
            "tax":20,"name": "Auchan saumon fume mini tranche 100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 3.17
        },
        {
            "tax":20,"name": "Auchan pate feuilletee 230g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 0.65
        },
        {
            "tax":20,"name": "Sodebo pizza crust emmental jambon 600g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 5.53
        },
        {
            "tax":20,"name": "Le Gaulois crousty chicken long filet's 400g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 4.85
        },
        {
            "tax":20,"name": "Auchan cordon bleu dinde x4 - 400g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.65
        },
        {
            "tax":20,"name": "Stoeffler Flammkueche max 550g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 4.37
        },
        {
            "tax":20,"name": "Auchan batonnets de surimi x36 -600g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 3.75
        },
        {
            "tax":20,"name": "Auchan nuggets de poulet x10 -200g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.0
        },
        {
            "tax":20,"name": "Herta knacki vegetale x6 -210g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.49
        },
        {
            "tax":20,"name": "Le Gaulois nuggets party 200g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.93
        },
        {
            "tax":20,"name": "Auchan saumon fume de Norvege mini x4 -140g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 5.39
        },
        {
            "tax":20,"name": "Lustucru pastabox tortellini au 4 fromages 360g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.75
        },
        {
            "tax":20,"name": "Auchan p'tit poisson pane au fromage x2 -200g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.44
        },
        {
            "tax":20,"name": "Auchan des de saumon fume 90g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 3.49
        },
        {
            "tax":20,"name": "banane bio sachet 600g",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 1.89
        },
        {
            "tax":20,"name": "banane sachet 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 1.99
        },
        {
            "tax":20,"name": "kiwi piece",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 0.39
        },
        {
            "tax":20,"name": "pommes Pink Lady 6 unites",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.99
        },
        {
            "tax":20,"name": "oranges pour le jus filet 3kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 4.99
        },
        {
            "tax":20,"name": "bananes des Antilles 4 doigts",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 1.99
        },
        {
            "tax":20,"name": "clementine en plateau 2,3kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 3.99
        },
        {
            "tax":20,"name": "clementine a deguster 1,5kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.99
        },
        {
            "tax":20,"name": "kiwi jaune piece",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 0.49
        },
        {
            "tax":20,"name": "Auchan bio orange filet 1kg",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 3.49
        },
        {
            "tax":20,"name": "orange caissette 10kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 9.99
        },
        {
            "tax":20,"name": "Oranges a deguster sans residus de pesticides filet 2kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.99
        },
        {
            "tax":20,"name": "clementine a feuilles 1,5kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 3.89
        },
        {
            "tax":20,"name": "Auchan Citron bio sachet 4 fruits",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 1.69
        },
        {
            "tax":20,"name": "pomme Juliet bio 1kg",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 3.69
        },
        {
            "tax":20,"name": "poire conference barquette 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.49
        },
        {
            "tax":20,"name": "kiwi jaune x4",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 3.49
        },
        {
            "tax":20,"name": "kiwis pret a deguster barquette 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.99
        },
        {
            "tax":20,"name": "pommes golden 1er prix sachet 2kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.99
        },
        {
            "tax":20,"name": "raisin mixte sans pepin barquette 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.99
        },
        {
            "tax":20,"name": "courgettes filet 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 3.29
        },
        {
            "tax":20,"name": "poireau en botte 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.29
        },
        {
            "tax":20,"name": "concombre piece",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 1.09
        },
        {
            "tax":20,"name": "Auchan pomme de terre salade vapeur sautee filet 2,5kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.99
        },
        {
            "tax":20,"name": "tomate ronde en grappe barquette 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.99
        },
        {
            "tax":20,"name": "Rik & Rok tomate cerise ronde en grappe 350g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 3.99
        },
        {
            "tax":20,"name": "Auchan pomme de terre rouge salade vapeur sautee filet 2,5kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.99
        },
        {
            "tax":20,"name": "carottes sachet 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 1.29
        },
        {
            "tax":20,"name": "poivrons panaches sachet 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 1.69
        },
        {
            "tax":20,"name": "champignons blancs pieds entiers 300g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 0.99
        },
        {
            "tax":20,"name": "Pomme de terre frite puree potage filet 2,5kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.99
        },
        {
            "tax":20,"name": "pomme de terre frite puree potage filet 5kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 3.99
        },
        {
            "tax":20,"name": "endives sachet 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.49
        },
        {
            "tax":20,"name": "Auchan bio carottes filiere sachet 1kg",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.5
        },
        {
            "tax":20,"name": "tomates cerises meli melo barquette 350g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 3.29
        },
        {
            "tax":20,"name": "oignons filet 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 0.99
        },
        {
            "tax":20,"name": "patate douce barquette 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 3.59
        },
        {
            "tax":20,"name": "champignons blancs pieds coupes barquette 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.29
        },
        {
            "tax":20,"name": "courgettes bio barquette 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 3.99
        },
        {
            "tax":20,"name": "melange pot au feu 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.79
        },
        {
            "tax":20,"name": "Auchan feuille de chene salade sachet 125g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 1.27
        },
        {
            "tax":20,"name": "Florette coeur de laitue salade sachet 200g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 1.82
        },
        {
            "tax":20,"name": "Bonduelle feuille de chene salade sachet 175g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.12
        },
        {
            "tax":20,"name": "Auchan laitue iceberg salade sachet 300g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 1.17
        },
        {
            "tax":20,"name": "Auchan bouquet de mache salade sachet 125g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 1.43
        },
        {
            "tax":20,"name": "Florette salade mache maxi salade sachet 200g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.33
        },
        {
            "tax":20,"name": "Bonduelle mache et roquette salade sachet 100g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 1.62
        },
        {
            "tax":20,"name": "Auchan coeur de laitue sachet 200g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 1.43
        },
        {
            "tax":20,"name": "Bonduelle feuille de chene bio sachet 100g",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.02
        },
        {
            "tax":20,"name": "Florette radis long 200g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.4
        },
        {
            "tax":20,"name": "Florette melange croquant 180g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 1.52
        },
        {
            "tax":20,"name": "Crealine ecrase de pommes de terre aux 2carottes 2x200g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.62
        },
        {
            "tax":20,"name": "Crudette carotte baby 200g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 1.94
        },
        {
            "tax":20,"name": "Bonduelle jeunes pousses salade sachet 145g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.09
        },
        {
            "tax":20,"name": "Bonduelle feuille de mache sachet 100g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 1.72
        },
        {
            "tax":20,"name": "Mandar menthe 11g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 1.61
        },
        {
            "tax":20,"name": "Auchan mache bio salade sachet 100g",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.06
        },
        {
            "tax":20,"name": "Lunor pommes de terre entieres 2x500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.57
        },
        {
            "tax":20,"name": "Mandar ciboulette 11g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 1.61
        },
        {
            "tax":20,"name": "Auchan betteraves rouges entieres bio 500g",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 1.29
        },
        {
            "tax":20,"name": "Mmm! amande decortiquee 125g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.39
        },
        {
            "tax":20,"name": "Auchan amandes grillees 200g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 3.7
        },
        {
            "tax":20,"name": "Auchan amandes en poudre 125g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.15
        },
        {
            "tax":20,"name": "Auchan pignons de pin 70g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.99
        },
        {
            "tax":20,"name": "Auchan noisettes decortiquees 125g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.39
        },
        {
            "tax":20,"name": "Auchan abricot moelleux 200g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 1.9
        },
        {
            "tax":20,"name": "Color noix de pecan 150g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 9.8
        },
        {
            "tax":20,"name": "Wonderful pistaches grillees et salees 250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 5.41
        },
        {
            "tax":20,"name": "Wonderful pistache legerement salee 250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 5.41
        },
        {
            "tax":20,"name": "Wonderful pistaches grillees non salees 250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 5.41
        },
        {
            "tax":20,"name": "Auchan trio gourmand 250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 3.59
        },
        {
            "tax":20,"name": "Auchan pistaches 200g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 3.7
        },
        {
            "tax":20,"name": "Auchan cerneaux de noix 125g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 3.15
        },
        {
            "tax":20,"name": "Auchan pruneaux denoyautes 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 3.25
        },
        {
            "tax":20,"name": "Maitre Prunille arachides grillees 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.9
        },
        {
            "tax":20,"name": "Auchan lentille verte 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.29
        },
        {
            "tax":20,"name": "Mmm! pruneaux d'agen denoyautes 250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.19
        },
        {
            "tax":20,"name": "Daco 4 graines grillees sans sel 175g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 4.22
        },
        {
            "tax":20,"name": "Auchan noix de cajou grillees sans sel 200g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 4.23
        },
        {
            "tax":20,"name": "Mmm! datte medjoul 200g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.99
        },
        {
            "tax":20,"name": "Innocent jus d'orange sans pulpe 90cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.34
        },
        {
            "tax":20,"name": "Auchan pur jus d'orange sans pulpe 1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 1.82
        },
        {
            "tax":20,"name": "Andros pur jus d'orange sans pulpe 1,5l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 3.15
        },
        {
            "tax":20,"name": "Danao kung fu panda peche abricot 1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 1.75
        },
        {
            "tax":20,"name": "Andros jus de clementines pressees avec pulpe 1.5l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 3.05
        },
        {
            "tax":20,"name": "Auchan pur jus d'orange frais bio 1l",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.9
        },
        {
            "tax":20,"name": "Andros jus de pomme 1,5l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 3.15
        },
        {
            "tax":20,"name": "Innocent ananas passion 90cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.54
        },
        {
            "tax":20,"name": "Danao kung fu panda multivitamine 1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 1.75
        },
        {
            "tax":20,"name": "Andros jus orange 1,5l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 3.05
        },
        {
            "tax":20,"name": "Innocent jus de pomme et framboise 90cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.54
        },
        {
            "tax":20,"name": "Auchan jus de pomme 1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.07
        },
        {
            "tax":20,"name": "Auchan jus de raisin 1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.28
        },
        {
            "tax":20,"name": "Innocent pomme poire peche 90cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.54
        },
        {
            "tax":20,"name": "Auchan jus d'orange frais avec pulpe  1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 1.82
        },
        {
            "tax":20,"name": "Tropicana pur jus d'orange sans pulpe 1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.44
        },
        {
            "tax":20,"name": "Innocent jus d'orange et carotte 90cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.54
        },
        {
            "tax":20,"name": "Sunny Delight doux california 1,25l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 1.93
        },
        {
            "tax":20,"name": "Andros jus d'ananas presses 1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.6
        },
        {
            "tax":20,"name": "Tropicana pur jus de fruits reveil fruite 1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "fruits",
            "unit": "each",
            "price": 2.09
        },
        {
            "tax":20,"name": "Pasquier pitch barre chocolat au lait x8 -310g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 2.4
        },
        {
            "tax":20,"name": "La Fournee Doree gache tranchee au sucre 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 2.78
        },
        {
            "tax":20,"name": "pain de mie nature sans sucre ajoute 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 1.15
        },
        {
            "tax":20,"name": "Harry's brioche tranchee 700g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 2.35
        },
        {
            "tax":20,"name": "Auchan croissant x10 -400g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 1.85
        },
        {
            "tax":20,"name": "Auchan brioche tranchee aux pepites de chocolat 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 1.76
        },
        {
            "tax":20,"name": "Auchan briochettes rondes x12 -480g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 1.52
        },
        {
            "tax":20,"name": "Auchan pain a toast special foie gras 250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 1.15
        },
        {
            "tax":20,"name": "Auchan pain de mie tranche extra moelleux nature 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 0.69
        },
        {
            "tax":20,"name": "Auchan gaufre liegeoise au chocolat belge x7 - 345g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 2.19
        },
        {
            "tax":20,"name": "Harry's 100% mie nature 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 1.51
        },
        {
            "tax":20,"name": "Lotus gaufres de Liege au chocolat x7 -363g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 2.91
        },
        {
            "tax":20,"name": "Auchan pain hot dog x4 -250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 1.29
        },
        {
            "tax":20,"name": "Harrys beau et bon pain de mie cereales 325g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 1.52
        },
        {
            "tax":20,"name": "pain de campagne tranche 400g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 1.1
        },
        {
            "tax":20,"name": "Auchan pancakes sucres x8 -176g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 1.8
        },
        {
            "tax":20,"name": "Auchan pains au chocolat 16x45g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 2.65
        },
        {
            "tax":20,"name": "Pasquier croissant x8 -320g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 1.76
        },
        {
            "tax":20,"name": "Auchan toast rond nature 280g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 1.08
        },
        {
            "tax":20,"name": "Auchan muffin a toaster nature x4 -250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 1.39
        },
        {
            "tax":20,"name": "Auchan steak hache facon bouchere 5% 4x100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 5.8
        },
        {
            "tax":20,"name": "roti de porc filet 600g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 5.6
        },
        {
            "tax":20,"name": "filet mignon de porc 900g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 14.5
        },
        {
            "tax":20,"name": "bourguignon ** a mijoter 600g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 5.9
        },
        {
            "tax":20,"name": "Auchan cheveux d'ange 5% -500g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 6.2
        },
        {
            "tax":20,"name": "roti de boeuf tranche ** 800g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 12.9
        },
        {
            "tax":20,"name": "Auchan cheveux d'ange 15%mg 700g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 6.95
        },
        {
            "tax":20,"name": "cervelas orloff x4 -560g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 3.9
        },
        {
            "tax":20,"name": "boeuf piece pour fondue 500g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 8.9
        },
        {
            "tax":20,"name": "Auchan steaks haches facon bouchere 15%mg 4x100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 4.95
        },
        {
            "tax":20,"name": "Mmm! steack hache charolais 12%mg  2x125g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 3.3
        },
        {
            "tax":20,"name": "Charal steaks haches 5%  4x100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 6.05
        },
        {
            "tax":20,"name": "Auchan cheveux d'ange 15% 400g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 4.25
        },
        {
            "tax":20,"name": "cote de porc filet sans os x4 -400g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 3.9
        },
        {
            "tax":20,"name": "Auchan viande hachee vrac 5% -350g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 4.5
        },
        {
            "tax":20,"name": "Auchan saucisse fumee x4 -360g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 2.9
        },
        {
            "tax":20,"name": "Auchan palette a la diable 1kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 6.95
        },
        {
            "tax":20,"name": "Auchan tomates farcies x4 -600g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 3.95
        },
        {
            "tax":20,"name": "Auchan chair a saucisse pur porc 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 3.6
        },
        {
            "tax":20,"name": "Auchan farce pur porc 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 3.6
        },
        {
            "tax":20,"name": "Le Gaulois escalopes de poulet blanc 720g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 8.99
        },
        {
            "tax":20,"name": "Le Gaulois aiguillettes de poulet blanc 210g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 2.99
        },
        {
            "tax":20,"name": "Pouce filets de poulet 600g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 4.69
        },
        {
            "tax":20,"name": "Le Gaulois escalope de dinde extra tendre x2 -250g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 3.5
        },
        {
            "tax":20,"name": "Le Gaulois escalope de dinde x6 -720g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 7.82
        },
        {
            "tax":20,"name": "Lyre Bio poulet blanc 1,350kg",
            "isBio": true,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 14.79
        },
        {
            "tax":20,"name": "Auchan filet de poulet x2 -280g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 3.35
        },
        {
            "tax":20,"name": "Le Gaulois escalope de dinde extra fine x2 -240g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 3.5
        },
        {
            "tax":20,"name": "Pouce escalopes de dinde 600g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 5.19
        },
        {
            "tax":20,"name": "Le Gaulois la belle escalope de poulet x2 -240g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 4.17
        },
        {
            "tax":20,"name": "Lyre filet de poulet blanc x2 -280g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 5.39
        },
        {
            "tax":20,"name": "Le Gaulois frites de poulet panees x12 -200g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 2.0
        },
        {
            "tax":20,"name": "Pouce cuisses de poulet blanc 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 3.79
        },
        {
            "tax":20,"name": "Pouce pilons poulet blanc 1kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 4.19
        },
        {
            "tax":20,"name": "Fermiers de Loue filet de poulet blanc x2 -240g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 5.85
        },
        {
            "tax":20,"name": "Auchan cuisse de poulet blanc x2 - 550g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 2.89
        },
        {
            "tax":20,"name": "Le Gaulois cordons bleus x10 -1kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 5.5
        },
        {
            "tax":20,"name": "Auchan poulet certifie jaune 1,4kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 4.99
        },
        {
            "tax":20,"name": "Auchan roti filet de dinde 800g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 8.75
        },
        {
            "tax":20,"name": "Nature de France cordon bleu de poulet emmental bio 200g",
            "isBio": true,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 3.65
        },
        {
            "tax":20,"name": "paves de saumon d'Ecosse x4 -500g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 14.99
        },
        {
            "tax":20,"name": "pave de saumon ecossais x2 -250g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 7.99
        },
        {
            "tax":20,"name": "pave de truite x2 -240g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 5.99
        },
        {
            "tax":20,"name": "dos de cabillaud sans aretes 280g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 6.44
        },
        {
            "tax":20,"name": "Auchan pave de saumon filiere 125g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 3.75
        },
        {
            "tax":20,"name": "crevette rose jumbo barquette 100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 3.0
        },
        {
            "tax":20,"name": "crevettes entieres cuites 40/60 -500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 6.5
        },
        {
            "tax":20,"name": "Le Poissonnier crevettes cuites 80/120 -200g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 2.0
        },
        {
            "tax":20,"name": "Auchan oeuf de lompe noir 100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 2.48
        },
        {
            "tax":20,"name": "Auchan oeufs de lompe rouge 100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 2.48
        },
        {
            "tax":20,"name": "Auchan truite fumee tranche x4 - 100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 3.01
        },
        {
            "tax":20,"name": "Auchan saumon fume mini tranche 100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 3.17
        },
        {
            "tax":20,"name": "Auchan batonnets de surimi x36 -600g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 3.75
        },
        {
            "tax":20,"name": "Auchan saumon fume de Norvege mini x4 -140g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 5.39
        },
        {
            "tax":20,"name": "Auchan p'tit poisson pane au fromage x2 -200g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 2.44
        },
        {
            "tax":20,"name": "Auchan des de saumon fume 90g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 3.49
        },
        {
            "tax":20,"name": "Auchan saumon fume sauvage tranche x2 -60g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 3.35
        },
        {
            "tax":20,"name": "Fleury Michon 30 batonnets surimi 500g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 3.9
        },
        {
            "tax":20,"name": "Auchan truite fumee tranchee x6 -160g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 3.76
        },
        {
            "tax":20,"name": "Auchan batonnets de surimi x60 -1kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 6.15
        },
        {
            "tax":20,"name": "Auchan saumon fume Atlantique bio tranche x4 -120g",
            "isBio": true,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 5.5
        },
        {
            "tax":20,"name": "Delpeyrat saumon fume d'Ecosse tranche x4 -130g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 6.45
        },
        {
            "tax":20,"name": "Simon salade de thon 300g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 3.43
        },
        {
            "tax":20,"name": "Auchan batonnets de surimi x30 -450g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 2.89
        },
        {
            "tax":20,"name": "Filet merlu blanc meuniere 220g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 3.29
        },
        {
            "tax":20,"name": "Mmm! truite de mer fumee tranche x4 -140g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 5.29
        },
        {
            "tax":20,"name": "Ovive truite fumee bio tranche x3 -100g",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 4.2
        },
        {
            "tax":20,"name": "Auchan lardons de saumon 90g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "le-marche",
            "unit": "each",
            "price": 3.17
        },
        {
            "tax":20,"name": "Auchan feuillete jambon emmental 400g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 3.15
        },
        {
            "tax":20,"name": "Auchan mini feuilletes x50 -480g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 4.82
        },
        {
            "tax":20,"name": "Auchan escargots gros x48 -355g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 13.42
        },
        {
            "tax":20,"name": "Auchan feuillete au chevre 400g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 3.48
        },
        {
            "tax":20,"name": "Auchan escargots gros calibre x24 -178g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 7.25
        },
        {
            "tax":20,"name": "Tipiak coquille st jacques 4x90g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 6.9
        },
        {
            "tax":20,"name": "Buitoni picco jambon fromage x9 -270g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.64
        },
        {
            "tax":20,"name": "Buitoni piccolini mini pizza 3 fromages x9 -270g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.85
        },
        {
            "tax":20,"name": "Pouce escargot petit lucorum x48 -173g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 3.85
        },
        {
            "tax":20,"name": "Auchan potatoes burger x4 -680g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 6.14
        },
        {
            "tax":20,"name": "Auchan coquille st jacques 4x90g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 5.71
        },
        {
            "tax":20,"name": "Auchan mini saucisse en feuillete x20 -350g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 4.52
        },
        {
            "tax":20,"name": "Auchan feuilletee au saumon 400g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 3.8
        },
        {
            "tax":20,"name": "Auchan crepe jambon fromage x20 1kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 3.33
        },
        {
            "tax":20,"name": "Auchan beurre d'escargot 250g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 3.99
        },
        {
            "tax":20,"name": "Buitoni piccolini mini pizza bolognaise x9 -270g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.6
        },
        {
            "tax":20,"name": "Mc Cain buns jambon ketchup 400g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.85
        },
        {
            "tax":20,"name": "Auchan mini tartelettes x24 - 300g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 3.59
        },
        {
            "tax":20,"name": "Auchan feuillete aux legumes du soleil x4 -400g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 3.48
        },
        {
            "tax":20,"name": "Auchan beignets de crevettes x6 -130g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 3.64
        },
        {
            "tax":20,"name": "Findus pomme rissolee 1,1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "surgeles",
            "unit": "each",
            "price": 2.56
        },
        {
            "tax":20,"name": "Auchan poelee legumes verts 750g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.7
        },
        {
            "tax":20,"name": "Findus pomme noisette 1,050kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "surgeles",
            "unit": "each",
            "price": 2.87
        },
        {
            "tax":20,"name": "Auchan mini gratin dauphinois x4 -480g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 3.15
        },
        {
            "tax":20,"name": "Auchan champignons de Paris eminces 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.1
        },
        {
            "tax":20,"name": "Auchan pommes rissolees 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 1.14
        },
        {
            "tax":20,"name": "Auchan frites classique 2,5kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.44
        },
        {
            "tax":20,"name": "Auchan trio de poivrons crus 450g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 1.35
        },
        {
            "tax":20,"name": "Auchan pommes duchesse 750g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 1.82
        },
        {
            "tax":20,"name": "Auchan frites au four 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 1.3
        },
        {
            "tax":20,"name": "Mc Cain just au four frites classiques 875g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.7
        },
        {
            "tax":20,"name": "Auchan puree de pommes de terre 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 1.61
        },
        {
            "tax":20,"name": "Findus pommes noisettes 400g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.02
        },
        {
            "tax":20,"name": "McCain pommes duchesse 900g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.09
        },
        {
            "tax":20,"name": "Auchan poelee catalane 750g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.7
        },
        {
            "tax":20,"name": "Auchan melange forestiers 450g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 3.85
        },
        {
            "tax":20,"name": "Auchan brocolis minute 750g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 1.6
        },
        {
            "tax":20,"name": "Auchan frites allumettes au four 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 1.56
        },
        {
            "tax":20,"name": "Mc Cain frites tradition 1,04kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.03
        },
        {
            "tax":20,"name": "Auchan poelee 4 saisons 750g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.4
        },
        {
            "tax":20,"name": "escalopes de poulet marinees 800g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 6.86
        },
        {
            "tax":20,"name": "Auchan viande hache de boeuf 700g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 6.55
        },
        {
            "tax":20,"name": "Charal mini boulettes de boeuf x50 - 750g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 5.6
        },
        {
            "tax":20,"name": "Auchan paves de saumon Atlantique x2 -250g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 5.72
        },
        {
            "tax":20,"name": "Auchan cordon bleu de poulet 400g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 3.74
        },
        {
            "tax":20,"name": "Auchan steak haches 5%mg 4x100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 4.47
        },
        {
            "tax":20,"name": "Charal steak hache extra moelleux x8 -800g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 6.11
        },
        {
            "tax":20,"name": "Auchan petites noix de Saint Jacques avec corail 250g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 4.95
        },
        {
            "tax":20,"name": "Findus croustibat batonnets de poisson pane x18 -550g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 4.07
        },
        {
            "tax":20,"name": "Auchan nuggets filet poulet 400g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "surgeles",
            "unit": "each",
            "price": 3.74
        },
        {
            "tax":20,"name": "Charal steak hache charolais x10 -1kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 9.67
        },
        {
            "tax":20,"name": "Auchan mini boulette de viande de boeuf cuite 750g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 4.84
        },
        {
            "tax":20,"name": "Findus colin d'Alaska facon fish and chips x4 -400g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 3.74
        },
        {
            "tax":20,"name": "Daregal ciboulette 50g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 1.99
        },
        {
            "tax":20,"name": "Auchan moules decoquillees cuites 400g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.99
        },
        {
            "tax":20,"name": "Auchan ail hache 250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.54
        },
        {
            "tax":20,"name": "Daregal persil 50g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 1.99
        },
        {
            "tax":20,"name": "Rik & Rok colin batonnet x15 -450g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.07
        },
        {
            "tax":20,"name": "Auchan beurre d'escargot 250g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 3.99
        },
        {
            "tax":20,"name": "Auchan echalote hachee 250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.54
        },
        {
            "tax":20,"name": "Auchan poelee legumes verts 750g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.7
        },
        {
            "tax":20,"name": "Auchan riz cantonais 900g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 3.12
        },
        {
            "tax":20,"name": "Buitoni picco jambon fromage x9 -270g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.64
        },
        {
            "tax":20,"name": "Buitoni piccolini mini pizza 3 fromages x9 -270g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.85
        },
        {
            "tax":20,"name": "Auchan paella 900g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 3.54
        },
        {
            "tax":20,"name": "Auchan poelee catalane 750g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.7
        },
        {
            "tax":20,"name": "Buitoni piccolini mini pizza bolognaise x9 -270g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.6
        },
        {
            "tax":20,"name": "Buitoni Fiesta royale 500g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 3.99
        },
        {
            "tax":20,"name": "Auchan poelee campagnarde 900g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 3.12
        },
        {
            "tax":20,"name": "Buitoni fraich'up la supreme viande 590g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 3.89
        },
        {
            "tax":20,"name": "Auchan poelee 4 saisons 750g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.4
        },
        {
            "tax":20,"name": "Auchan poelee fermiere 750g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.4
        },
        {
            "tax":20,"name": "Auchan pizza cuite sur pierre 4 fromages pate fine 370g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 1.95
        },
        {
            "tax":20,"name": "Auchan pizza cuite sur pierre chorizo pate fine 390g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 1.8
        },
        {
            "tax":20,"name": "Auchan penne poulet champignons 900g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 3.85
        },
        {
            "tax":20,"name": "Auchan poulet basquaise 900g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 3.85
        },
        {
            "tax":20,"name": "Marie pizza crousti'moelleuse fromage x3 -1,17kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 5.85
        },
        {
            "tax":20,"name": "Auchan hachis parmentier 1kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "surgeles",
            "unit": "each",
            "price": 3.11
        },
        {
            "tax":20,"name": "Auchan pizza cuite sur pierre royale pate fine 370g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 1.75
        },
        {
            "tax":20,"name": "Auchan torsades carbonara 900g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 3.33
        },
        {
            "tax":20,"name": "Auchan pains au chocolat pur beurre x6 -450g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.76
        },
        {
            "tax":20,"name": "Auchan pepites de chocolat 100g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "surgeles",
            "unit": "each",
            "price": 1.53
        },
        {
            "tax":20,"name": "Auchan croissants pur beurre x6 -360g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.24
        },
        {
            "tax":20,"name": "Auchan framboise 600g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 4.33
        },
        {
            "tax":20,"name": "Labeyrie recette Lenotre plaisir aux noix 410g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 8.95
        },
        {
            "tax":20,"name": "Auchan morceaux de mangues 450g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 4.49
        },
        {
            "tax":20,"name": "Auchan melange de fruits rouges 450g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.29
        },
        {
            "tax":20,"name": "Auchan fraises entieres 450g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 3.05
        },
        {
            "tax":20,"name": "Auchan tarte normande 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 4.06
        },
        {
            "tax":20,"name": "Auchan profiteroles x12-280g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.45
        },
        {
            "tax":20,"name": "Haagen Dazs macadamia 430g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 4.84
        },
        {
            "tax":20,"name": "Auchan mini gourmands chocolat x8 - 258g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 1.98
        },
        {
            "tax":20,"name": "Kinder Bueno ice cone x4 -240g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 3.71
        },
        {
            "tax":20,"name": "Auchan glace vanille 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.12
        },
        {
            "tax":20,"name": "Haagen Dazs favorite select x4 -340g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 4.95
        },
        {
            "tax":20,"name": "Vahine pepites de chocolat au lait 100g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "surgeles",
            "unit": "each",
            "price": 2.51
        },
        {
            "tax":20,"name": "Mars barre glacee x7 -292,6g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.73
        },
        {
            "tax":20,"name": "Vahine bio pepites de chocolat noir 100g",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "surgeles",
            "unit": "each",
            "price": 2.59
        },
        {
            "tax":20,"name": "Snickers barre glacee caramel et cacahuetes x7 -336g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 2.78
        },
        {
            "tax":20,"name": "Extreme cone chocolat x6 -426g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "surgeles",
            "unit": "each",
            "price": 3.25
        },
        {
            "tax":20,"name": "Auchan arabica doux moulu 2x250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 4.72
        },
        {
            "tax":20,"name": "Auchan cafe classique dosette x48 -333g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.89
        },
        {
            "tax":20,"name": "Senseo cafe classiques dosette x40 -277g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 4.65
        },
        {
            "tax":20,"name": "Nescafe latte macchiato caramel dolce gusto capsule x8 -169g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 4.55
        },
        {
            "tax":20,"name": "Auchan cafe corse dosette x48 -333g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.89
        },
        {
            "tax":20,"name": "Senseo cafe classique dosette x54 -375g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 6.19
        },
        {
            "tax":20,"name": "Maison Du Cafe L'Or moulu doux 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 5.99
        },
        {
            "tax":20,"name": "Auchan colombia moulu 250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.55
        },
        {
            "tax":20,"name": "Tassimo L'Or petit dej classic tdisc 119g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 6.09
        },
        {
            "tax":20,"name": "Nescafe dolce gusto ricore au lait x16 capsules 168g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 4.55
        },
        {
            "tax":20,"name": "Tassimo Grand Mere cafe petit dejeuner capsule x16 -132g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 3.39
        },
        {
            "tax":20,"name": "Alpro lait d'amande 1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.45
        },
        {
            "tax":20,"name": "Auchan brasil moulu 250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.49
        },
        {
            "tax":20,"name": "Senseo cafe doux dosette x54 -375g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 6.19
        },
        {
            "tax":20,"name": "Auchan Bio boisson a l'avoine brique 1L",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.7
        },
        {
            "tax":20,"name": "Auchan cafe lungo compatible dolce gusto capsule x10 -70g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.99
        },
        {
            "tax":20,"name": "Nescafe the menthe Marrakech dolce gusto capsule x16 -117g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 4.55
        },
        {
            "tax":20,"name": "Tassimo L'Or cafe espresso decafeine capsule x16 -106g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 4.49
        },
        {
            "tax":20,"name": "Tassimo L'Or cafe long classic 119g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 6.09
        },
        {
            "tax":20,"name": "Nescafe caffe lungo dolce gusto capsule x30 -210g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 6.95
        },
        {
            "tax":20,"name": "Pasquier pitch barre chocolat au lait x8 -310g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.4
        },
        {
            "tax":20,"name": "La Fournee Doree gache tranchee au sucre 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.78
        },
        {
            "tax":20,"name": "pain de mie nature sans sucre ajoute 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.15
        },
        {
            "tax":20,"name": "Harry's brioche tranchee 700g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.35
        },
        {
            "tax":20,"name": "Nocciolata pate a tartiner bio cacao et noisettes 700g",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 8.05
        },
        {
            "tax":20,"name": "Auchan croissant x10 -400g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.85
        },
        {
            "tax":20,"name": "Auchan brioche tranchee aux pepites de chocolat 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.76
        },
        {
            "tax":20,"name": "Auchan briochettes rondes x12 -480g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.52
        },
        {
            "tax":20,"name": "Auchan pain de mie tranche extra moelleux nature 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 0.69
        },
        {
            "tax":20,"name": "Harry's 100% mie nature 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.51
        },
        {
            "tax":20,"name": "Harrys beau et bon pain de mie cereales 325g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.52
        },
        {
            "tax":20,"name": "pain de campagne tranche 400g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.1
        },
        {
            "tax":20,"name": "Auchan pate a tartiner sans huile de palme 750g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 3.17
        },
        {
            "tax":20,"name": "Auchan pains au chocolat 16x45g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.65
        },
        {
            "tax":20,"name": "Pasquier croissant x8 -320g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.76
        },
        {
            "tax":20,"name": "Auchan biscuits petit dejeuneur lait pepites chocolat 600g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.61
        },
        {
            "tax":20,"name": "Auchan muffin a toaster nature x4 -250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.39
        },
        {
            "tax":20,"name": "baguette 250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 0.48
        },
        {
            "tax":20,"name": "Lu Prince maxi chocolat au lait 250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.61
        },
        {
            "tax":20,"name": "Jardin Bio pate a tartiner noisette cacao 350g",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 3.42
        },
        {
            "tax":20,"name": "Auchan gaufre liegeoise au chocolat belge x7 - 345g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.19
        },
        {
            "tax":20,"name": "Lotus gaufres de Liege au chocolat x7 -363g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.91
        },
        {
            "tax":20,"name": "Auchan gouter fondant au chocolat x12 -225g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.12
        },
        {
            "tax":20,"name": "Auchan Brownie individuel x8 - 240g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.63
        },
        {
            "tax":20,"name": "Auchan pancakes sucres x8 -176g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.8
        },
        {
            "tax":20,"name": "Lotus gaufre coeur fondant vergeoise piece 5x2 -310g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.51
        },
        {
            "tax":20,"name": "Nutella & Go! x2 -104g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.38
        },
        {
            "tax":20,"name": "Nutella b ready x6 -130g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.02
        },
        {
            "tax":20,"name": "Bonne Maman quatre quart au beurre frais 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 3.17
        },
        {
            "tax":20,"name": "Lu Prince maxi chocolat au lait 250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.61
        },
        {
            "tax":20,"name": "Rik et Rok mini fourres pepites de chocolat 150g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.22
        },
        {
            "tax":20,"name": "St Michel madeleine coquille oeufs de poules plein air 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.26
        },
        {
            "tax":20,"name": "Belvita petit dejeuner coeur fondant chocolat noisette 253g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.32
        },
        {
            "tax":20,"name": "Auchan biscuits cuillers x36 -300g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.49
        },
        {
            "tax":20,"name": "St Michel madeleine coquille oeufs de poules plein air 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 3.81
        },
        {
            "tax":20,"name": "St Michel tam-tam coeur fondant chocolat 250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.6
        },
        {
            "tax":20,"name": "Brossard savane pocket chocolat x7 -189g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.76
        },
        {
            "tax":20,"name": "Granola barre extra sablee familial 280g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.86
        },
        {
            "tax":20,"name": "St Michel doonuts nappes au chocolat 180g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.76
        },
        {
            "tax":20,"name": "Mini BN chocolat 175g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.67
        },
        {
            "tax":20,"name": "Nestle dessert noir 2x205g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 3.79
        },
        {
            "tax":20,"name": "Nutella & Go! x2 -104g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.38
        },
        {
            "tax":20,"name": "Haribo happy box 600g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 4.45
        },
        {
            "tax":20,"name": "Celebrations ballotin 280g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 4.93
        },
        {
            "tax":20,"name": "Auchan chocolat noir dessert 2x200g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.8
        },
        {
            "tax":20,"name": "Mentos box pure fresh mint x50 -100g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 3.42
        },
        {
            "tax":20,"name": "Auchan chocolat dessert noir corse 64% 2x200g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.82
        },
        {
            "tax":20,"name": "Nestle dessert blanc 180g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.29
        },
        {
            "tax":20,"name": "Cote d'Or lait extra fin 3x100g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 3.19
        },
        {
            "tax":20,"name": "Airwaves menthol eucalyptus dragees sans sucre etuis x5 -70g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.27
        },
        {
            "tax":20,"name": "Twix x12 -600g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 4.76
        },
        {
            "tax":20,"name": "Kit Kat x10 -415g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 3.5
        },
        {
            "tax":20,"name": "Auchan chocolat au lait alpin 3x100g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.95
        },
        {
            "tax":20,"name": "Saint Siffrein pate de fruits 4 saisons boite 720g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 4.61
        },
        {
            "tax":20,"name": "Haribo pocket sachet 380g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 3.32
        },
        {
            "tax":20,"name": "Lindt chocolat noir 70% a cuisiner 180g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.55
        },
        {
            "tax":20,"name": "Kinder surprise unisexe x3 -60g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 3.04
        },
        {
            "tax":20,"name": "Hollywood powerfresh dragees sans sucre 5x10 -70g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.27
        },
        {
            "tax":20,"name": "Auchan bonbons menthe sans sucre 150g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.99
        },
        {
            "tax":20,"name": "Ferrero Kinder country Largo x9 -211,5g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.88
        },
        {
            "tax":20,"name": "Auchan pate feuilletee 230g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 0.65
        },
        {
            "tax":20,"name": "Materne pom'potes multivarietes 4 parfums gourde 20x90g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 7.49
        },
        {
            "tax":20,"name": "Auchan pepites de chocolat 100g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.53
        },
        {
            "tax":20,"name": "Pom Potes sans sucre ajoutes pomme nature 20x90g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 6.49
        },
        {
            "tax":20,"name": "Auchan farine de ble fluide T45 -1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 0.66
        },
        {
            "tax":20,"name": "Auchan sucre blanc morceaux 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 0.79
        },
        {
            "tax":20,"name": "Materne pom'potes sans sucre ajoutes multi-varietes 12x90g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 4.75
        },
        {
            "tax":20,"name": "Pouce sucre en poudre sachet 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 0.78
        },
        {
            "tax":20,"name": "St Mamet cocktail sirop leger 850g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.55
        },
        {
            "tax":20,"name": "Materne pom'potes pomme nature 20x90g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 7.15
        },
        {
            "tax":20,"name": "Mmm! amande decortiquee 125g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.39
        },
        {
            "tax":20,"name": "Auchan pate a pizza 260g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 0.99
        },
        {
            "tax":20,"name": "Materne compote pomme poire 16x100g format familial",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 14.9
        },
        {
            "tax":20,"name": "Auchan amandes grillees 200g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 3.7
        },
        {
            "tax":20,"name": "Auchan amandes en poudre 125g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.15
        },
        {
            "tax":20,"name": "Auchan pate feuilletee au beurre frais 230g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.09
        },
        {
            "tax":20,"name": "Auchan pate brisee 230g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 0.65
        },
        {
            "tax":20,"name": "Andros compote gourdes panache 18x90g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 6.89
        },
        {
            "tax":20,"name": "Materne Pom'Potes pomme nature 12x90g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 4.19
        },
        {
            "tax":20,"name": "Pouce farine de ble T55 menagere 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 0.46
        },
        {
            "tax":20,"name": "Auchan ptit saucisson 200g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.49
        },
        {
            "tax":20,"name": "concombre piece",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.09
        },
        {
            "tax":20,"name": "Moroni chorizo doux 200g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.9
        },
        {
            "tax":20,"name": "St Agaune specialite saucisson sec 200g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 3.98
        },
        {
            "tax":20,"name": "carottes sachet 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.29
        },
        {
            "tax":20,"name": "Auchan fuet 170g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.96
        },
        {
            "tax":20,"name": "endives sachet 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.49
        },
        {
            "tax":20,"name": "Le Charcutier saucisson sec tranche 100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.99
        },
        {
            "tax":20,"name": "St Agaune saucisson 200g + 10g offerts",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 3.98
        },
        {
            "tax":20,"name": "Le Charcutier chorizo espagnol 100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.99
        },
        {
            "tax":20,"name": "Auchan saucisse seche droite 250g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.0
        },
        {
            "tax":20,"name": "Auchan chorizo doux 225g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.25
        },
        {
            "tax":20,"name": "Auchan batonnets de surimi x36 -600g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 3.75
        },
        {
            "tax":20,"name": "tomates cerises barquette 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.99
        },
        {
            "tax":20,"name": "Mmm! saucisson de savoie nature 200g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.94
        },
        {
            "tax":20,"name": "Auchan snacks croustillants cacahuetes 90g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 0.72
        },
        {
            "tax":20,"name": "Auchan chorizo doux 24 tranches 120g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.5
        },
        {
            "tax":20,"name": "Lay's chips nature x6 - 27,5g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.6
        },
        {
            "tax":20,"name": "Auchan pain a toast special foie gras 250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.15
        },
        {
            "tax":20,"name": "Lay's chips nature 300g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.16
        },
        {
            "tax":20,"name": "Auchan thon au naturel albacore 2x140g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 3.18
        },
        {
            "tax":20,"name": "La Belle Chaurienne cassoulet au canard 420g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.76
        },
        {
            "tax":20,"name": "Auchan invitation au voyage tortillas de ble x8 - 320g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.85
        },
        {
            "tax":20,"name": "Auchan asperges blanches pic-nic bocal 110g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.43
        },
        {
            "tax":20,"name": "Mmm! ratatouille gourmande 650g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.8
        },
        {
            "tax":20,"name": "Auchan pain a toast special foie gras 250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.15
        },
        {
            "tax":20,"name": "Auchan pulpe de tomate 3x400g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.86
        },
        {
            "tax":20,"name": "Auchan champignons pieds et morceaux 230g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.24
        },
        {
            "tax":20,"name": "Mmm! confit de canard 4 cuisses IGP 1,350kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 12.71
        },
        {
            "tax":20,"name": "Auchan duo haricots verts et haricots beurre 455g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.57
        },
        {
            "tax":20,"name": "Auchan wraps x6 -370g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.23
        },
        {
            "tax":20,"name": "Tipiak la corbeille croutons nature 300g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.63
        },
        {
            "tax":20,"name": "Auchan thon albacore au naturel 140g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.6
        },
        {
            "tax":20,"name": "Auchan champignons eminces 3x115g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.5
        },
        {
            "tax":20,"name": "Vico croutons a l'ail 2x90g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.73
        },
        {
            "tax":20,"name": "Bonduelle champignons eminces epais au naturel -3x115g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.75
        },
        {
            "tax":20,"name": "Heinz haricots cuisines a la sauce tomate 415g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.47
        },
        {
            "tax":20,"name": "Auchan haricots verts tres fins 440g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.03
        },
        {
            "tax":20,"name": "Vico croutons natures 2x90g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.73
        },
        {
            "tax":20,"name": "Auchan champignons de Paris eminces 230g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 0.94
        },
        {
            "tax":20,"name": "Auchan riz arborio pour risotto 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.55
        },
        {
            "tax":20,"name": "Auchan Riz basmati sachets cuisson  500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.76
        },
        {
            "tax":20,"name": "Panzani sauce tomate bolognaise 500g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.78
        },
        {
            "tax":20,"name": "Auchan riz complet cuisson 10 minutes vrac 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.39
        },
        {
            "tax":20,"name": "Tipiak couscous parfume aux epices du monde 510g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.72
        },
        {
            "tax":20,"name": "Auchan pates serpentini 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 0.65
        },
        {
            "tax":20,"name": "Crealine ecrase de pommes de terre aux 2carottes 2x200g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.62
        },
        {
            "tax":20,"name": "Auchan Riz long etuve 10 mn sachet  500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.03
        },
        {
            "tax":20,"name": "Panzani sauce tomate cuisinee oignon ail 180g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 0.87
        },
        {
            "tax":20,"name": "Panzani sauce tomates cuisinees 600g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.63
        },
        {
            "tax":20,"name": "Auchan Mini farfalle 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 0.89
        },
        {
            "tax":20,"name": "Auchan couscous moyen 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.27
        },
        {
            "tax":20,"name": "Nissin nouilles japonaises poulet teriyaki cup 67g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.96
        },
        {
            "tax":20,"name": "Auchan torti cuisson rapide 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 0.7
        },
        {
            "tax":20,"name": "Auchan Penne Rigate qualite superieure 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 0.65
        },
        {
            "tax":20,"name": "Barilla sauce bolognaise 400g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.93
        },
        {
            "tax":20,"name": "Auchan riz thai bio 500g",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.03
        },
        {
            "tax":20,"name": "Panzani Tomacouli sauce tomate nature 3x200g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.31
        },
        {
            "tax":20,"name": "Lustucru riz cuisson express 5 minutes sachet x5 -450g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.52
        },
        {
            "tax":20,"name": "Auchan bio flocons d'avoine 500g",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.66
        },
        {
            "tax":20,"name": "Auchan invitation au voyage tortillas de ble x8 - 320g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.85
        },
        {
            "tax":20,"name": "Auchan double concentre de tomates 3x70g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 0.76
        },
        {
            "tax":20,"name": "Auchan huile de tournesol 1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.99
        },
        {
            "tax":20,"name": "vin blanc de table sec Sevebelle en briquette 3x25cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.5
        },
        {
            "tax":20,"name": "Auchan pulpe de tomate 3x400g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.86
        },
        {
            "tax":20,"name": "Auchan vinaigre balsamique de Modene 50cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.7
        },
        {
            "tax":20,"name": "Panzani sauce tomate bolognaise 500g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.78
        },
        {
            "tax":20,"name": "Auchan wraps x6 -370g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.23
        },
        {
            "tax":20,"name": "Auchan bio huile d'olive extra-vierge 75cl",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 5.2
        },
        {
            "tax":20,"name": "Auchan huile pour friture 2l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 4.07
        },
        {
            "tax":20,"name": "Auchan Fond de veau 110g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.75
        },
        {
            "tax":20,"name": "Auchan cornichons extra fins aux 5 aromates 360g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.71
        },
        {
            "tax":20,"name": "Blini olives manzanilla a la mediterraneenne 150g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.69
        },
        {
            "tax":20,"name": "Auchan olives vertes denoyautees 370ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 0.92
        },
        {
            "tax":20,"name": "Auchan poivre noir moulu 50g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.5
        },
        {
            "tax":20,"name": "Panzani sauce tomate cuisinee oignon ail 180g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 0.87
        },
        {
            "tax":20,"name": "Auchan invitation au voyage Sauce salsa fajita 410g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.38
        },
        {
            "tax":20,"name": "Panzani sauce tomates cuisinees 600g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.63
        },
        {
            "tax":20,"name": "Heinz tomato ketchup -50% de sucre et -50% de sel 665g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.67
        },
        {
            "tax":20,"name": "Auchan huile olive extra-vierge 1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 6.11
        },
        {
            "tax":20,"name": "Moroni chorizo doux 200g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.9
        },
        {
            "tax":20,"name": "Auchan invitation au voyage tortillas de ble x8 - 320g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.85
        },
        {
            "tax":20,"name": "Le Charcutier chorizo espagnol 100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.99
        },
        {
            "tax":20,"name": "Auchan riz cantonais 900g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "epicerie",
            "unit": "each",
            "price": 3.12
        },
        {
            "tax":20,"name": "Auchan riz arborio pour risotto 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.55
        },
        {
            "tax":20,"name": "Nocciolata pate a tartiner bio cacao et noisettes 700g",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 8.05
        },
        {
            "tax":20,"name": "Le Charcutier mortadelle superieure 100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.99
        },
        {
            "tax":20,"name": "Centurion cheddar rape 200g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.27
        },
        {
            "tax":20,"name": "Auchan paella 900g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": true,
            "category": "epicerie",
            "unit": "each",
            "price": 3.54
        },
        {
            "tax":20,"name": "Auchan cheddar tranche x10 -200g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.27
        },
        {
            "tax":20,"name": "Auchan tortillas chips huile de tournesol nature 400g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.23
        },
        {
            "tax":20,"name": "Auchan coppa tranches x12 -100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.04
        },
        {
            "tax":20,"name": "Auchan wraps x6 -370g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.23
        },
        {
            "tax":20,"name": "Auchan kit pizza 600g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.95
        },
        {
            "tax":20,"name": "Mmm! mozzarella di bufala campana 125g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.8
        },
        {
            "tax":20,"name": "Auchan plateau assortiment asiatique 600g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 6.11
        },
        {
            "tax":20,"name": "Auchan mascarpone 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 3.07
        },
        {
            "tax":20,"name": "Auchan pate a pizza 260g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 0.99
        },
        {
            "tax":20,"name": "Auchan chorizo fort 225g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 2.25
        },
        {
            "tax":20,"name": "Herta pate a pizza fine rectangulaire 390g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": true,
            "isFrozen": false,
            "category": "epicerie",
            "unit": "each",
            "price": 1.89
        },
        {
            "tax":20,"name": "C'est qui le Patron lait demi ecreme 6x1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 5.94
        },
        {
            "tax":20,"name": "Auchan lait demi-ecreme U.H.T. brique 8x1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 6.08
        },
        {
            "tax":20,"name": "Auchan lait demi-ecreme bouteille 6x1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 4.98
        },
        {
            "tax":20,"name": "Cristaline eau de source 12x50cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 1.92
        },
        {
            "tax":20,"name": "Auchan eau minerale naturelle 6x1,5L",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 2.1
        },
        {
            "tax":20,"name": "Pouce lait demi-ecreme brique 6x1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 3.84
        },
        {
            "tax":20,"name": "St Amand eau minerale naturelle bouchon sport 12x33cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 2.76
        },
        {
            "tax":20,"name": "Cristaline eau de source 12x33cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 2.52
        },
        {
            "tax":20,"name": "Volvic eau minerale plate 6x1,5l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 2.88
        },
        {
            "tax":20,"name": "Lactel lait demi-ecreme U.H.T. bouteille 6x1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 4.92
        },
        {
            "tax":20,"name": "Cristaline eau gazeifiee 6x1,5l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 1.62
        },
        {
            "tax":20,"name": "Lactel lait entier U.H.T. bouteille 6x1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 7.62
        },
        {
            "tax":20,"name": "Auchan eau de source montagne 6x1.5l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 1.5
        },
        {
            "tax":20,"name": "Auchan lait demi-ecreme des montagnes bouteille 6x1l.",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 5.1
        },
        {
            "tax":20,"name": "Candy'Up chocolat briquette 24x20cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 8.88
        },
        {
            "tax":20,"name": "Lactel lait ecreme U.H.T. bouteille 6x1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 6.0
        },
        {
            "tax":20,"name": "Lactel lait demi-ecreme U.H.T. bouteille 6x50cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 4.38
        },
        {
            "tax":20,"name": "Auchan eau minerale gazeuse 6x1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 2.57
        },
        {
            "tax":20,"name": "Candia grandlait demi-ecreme U.H.T. bouteille 6x1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 5.34
        },
        {
            "tax":20,"name": "Lactel lait demi-ecreme U.H.T. bouteille 6x25cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 3.48
        },
        {
            "tax":20,"name": "Auchan pur jus d'orange sans pulpe 2l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 2.76
        },
        {
            "tax":20,"name": "Auchan pur jus d'orange sans pulpe 1,5l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 2.24
        },
        {
            "tax":20,"name": "Auchan Pur jus multifruits brique de 2l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 2.9
        },
        {
            "tax":20,"name": "Rik & Rok jus multifruits a base de concentre 6x20cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 2.17
        },
        {
            "tax":20,"name": "Innocent jus d'orange sans pulpe 90cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 2.34
        },
        {
            "tax":20,"name": "Auchan pur jus d'orange sans pulpe 1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 1.82
        },
        {
            "tax":20,"name": "Rik & Rok jus de pomme a base de concentre 6x20cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 2.07
        },
        {
            "tax":20,"name": "Auchan pur jus de pomme 1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 1.15
        },
        {
            "tax":20,"name": "Auchan nectar multivitamine brique 2l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 2.0
        },
        {
            "tax":20,"name": "Auchan pur jus de pomme 2l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 2.24
        },
        {
            "tax":20,"name": "Andros pur jus d'orange sans pulpe 1,5l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 3.15
        },
        {
            "tax":20,"name": "Auchan nectar abricot 1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 1.86
        },
        {
            "tax":20,"name": "Auchan pur jus d'orange brique avec pulpe 4x1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 5.0
        },
        {
            "tax":20,"name": "Auchan jus de pomme 1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 0.96
        },
        {
            "tax":20,"name": "Danao kung fu panda peche abricot 1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 1.75
        },
        {
            "tax":20,"name": "Auchan pur jus multifruits 2l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 2.9
        },
        {
            "tax":20,"name": "Joker Le Fruit jus d'ananas 1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 1.72
        },
        {
            "tax":20,"name": "Andros jus de clementines pressees avec pulpe 1.5l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 3.05
        },
        {
            "tax":20,"name": "Auchan pur jus d'orange frais bio 1l",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 2.9
        },
        {
            "tax":20,"name": "Auchan pur jus multifruits 1,5l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 2.29
        },
        {
            "tax":20,"name": "Coca Cola zero 6x1,25l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 8.58
        },
        {
            "tax":20,"name": "Auchan boisson au the peche 2l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 1.42
        },
        {
            "tax":20,"name": "Coca Cola classic 1,25l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 1.53
        },
        {
            "tax":20,"name": "Auchan the glace a la peche 1,5l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 1.17
        },
        {
            "tax":20,"name": "Auchan limonade 1,5l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 0.76
        },
        {
            "tax":20,"name": "Fuze tea the a la peche 1,25l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 1.7
        },
        {
            "tax":20,"name": "Coca Cola zero 1,25l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 1.43
        },
        {
            "tax":20,"name": "Auchan sirop de peche bidon metal 60cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 1.79
        },
        {
            "tax":20,"name": "Auchan sirop de grenadine 1,5l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 2.0
        },
        {
            "tax":20,"name": "La Maison Guiot sirop de violette 70cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 2.94
        },
        {
            "tax":20,"name": "Tropico exotique 1,5l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 1.5
        },
        {
            "tax":20,"name": "Coca-Cola bouteille 6x50cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 5.54
        },
        {
            "tax":20,"name": "Moulin de Valdonne sirop de grenadine 70cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 2.52
        },
        {
            "tax":20,"name": "Auchan boisson au jus de fruits exotiques 2l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 1.4
        },
        {
            "tax":20,"name": "Lipton Ice Tea peche 1,5l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 1.4
        },
        {
            "tax":20,"name": "Coca Cola zero 1,75l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 1.73
        },
        {
            "tax":20,"name": "Impact de Balle energy drink 1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 2.01
        },
        {
            "tax":20,"name": "Pepsi max 1,5l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 1.11
        },
        {
            "tax":20,"name": "Auchan boisson a la pulpe d'orange 1,5l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 0.97
        },
        {
            "tax":20,"name": "The Peche boite 33cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 0.34
        },
        {
            "tax":20,"name": "1664 biere blonde 5,5deg -20x25cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": true,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 11.62
        },
        {
            "tax":20,"name": "Captain Morgan spiritueux a base de rhum 35deg -70cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 14.17
        },
        {
            "tax":20,"name": "Affligem carmin biere fruits rouges fut pression 6,7deg -5L",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": true,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 22.99
        },
        {
            "tax":20,"name": "Canebiere Pastis 45deg -1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": true,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 15.89
        },
        {
            "tax":20,"name": "Abbaye de Leffe blonde bi",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 11.95
        },
        {
            "tax":20,"name": "Jagermeister liqueur new 35deg -70cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": true,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 18.62
        },
        {
            "tax":20,"name": "Jack Daniel's Old 40deg -70cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 20.94
        },
        {
            "tax":20,"name": "Affligem blonde biere belge d'abbaye fut pression 6,7deg -5L",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": true,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 19.59
        },
        {
            "tax":20,"name": "Desperados Original biere aromatisee tequila 5,9deg -12x33cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": true,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 14.58
        },
        {
            "tax":20,"name": "Kronenbourg biere blonde 4,2deg 26x25cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": true,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 11.33
        },
        {
            "tax":20,"name": "Dworakoff vodka 37,5deg - 1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 13.78
        },
        {
            "tax":20,"name": "Ricard pastis 45deg -1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": true,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 19.62
        },
        {
            "tax":20,"name": "Loic Raison cidre bouche doux 2deg -75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": true,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 2.4
        },
        {
            "tax":20,"name": "Grimbergen biere blonde 6,7deg -12x25cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": true,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 8.49
        },
        {
            "tax":20,"name": "Affligem Cuvee blonde biere belge d'abbaye 6,7deg -12X25cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": true,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 8.44
        },
        {
            "tax":20,"name": "Heineken biere blonde premium 5deg 12x33cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": true,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 8.5
        },
        {
            "tax":20,"name": "Ballantines Finest whisky 40deg -70cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 14.83
        },
        {
            "tax":20,"name": "Charrette rhum blanc 40deg - 70cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 9.92
        },
        {
            "tax":20,"name": "William Lawson whisky 40deg -70cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 12.51
        },
        {
            "tax":20,"name": "Paix Dieu biere 10deg -75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": true,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 5.48
        },
        {
            "tax":20,"name": "Veuve Paul Bur brut 11deg 75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 2.84
        },
        {
            "tax":20,"name": "Pierre Chanau Cotes du Ventoux rouge 14deg -75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 2.99
        },
        {
            "tax":20,"name": "Actuel bouchon a Champagne",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 2.5
        },
        {
            "tax":20,"name": "vin blanc de table sec Sevebelle en briquette 3x25cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 2.5
        },
        {
            "tax":20,"name": "Pierre Chanau cremant de loire 12deg -75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 5.49
        },
        {
            "tax":20,"name": "Wolfberger cremant d'alsace 11,5deg -75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 7.39
        },
        {
            "tax":20,"name": "Pierre Chanau Saumur brut 12deg -75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 5.4
        },
        {
            "tax":20,"name": "Freixenet cava cordon negro Espagne brut 11,5deg -75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 5.01
        },
        {
            "tax":20,"name": "Montaudon Champagne brut 12deg -75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 17.99
        },
        {
            "tax":20,"name": "Pierre Chanau Monbazillac 13,5deg -75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 5.99
        },
        {
            "tax":20,"name": "Nicolas Feuillatte Champagne brut grande reserve 12deg -75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 19.91
        },
        {
            "tax":20,"name": "Pierre Chanau Cremant d'Alsace brut 11,5deg -75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 5.99
        },
        {
            "tax":20,"name": "De Castellane Champagne brut 12deg -75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 21.59
        },
        {
            "tax":20,"name": "Champagne Canard Duchene authentic reserve 75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 25.9
        },
        {
            "tax":20,"name": "Pierre Chanau Chablis blanc 12,5deg -75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 9.99
        },
        {
            "tax":20,"name": "Mouton Cadet bordeaux rouge 13,5deg 75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 9.99
        },
        {
            "tax":20,"name": "Charles Volner vin mousseux brut 11deg -75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": true,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 3.91
        },
        {
            "tax":20,"name": "Nicolas Feuillatte Champagne rose 12deg -75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 20.65
        },
        {
            "tax":20,"name": "Cafe de Paris brut 11,5deg -75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 4.11
        },
        {
            "tax":20,"name": "Nicolas Feuillatte Champagne brut 12deg -75 cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "boissons",
            "unit": "each",
            "price": 16.65
        },
        {
            "tax":20,"name": "Auchan baby croissance 10 mois a 3 ans bouteille 6x1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 7.02
        },
        {
            "tax":20,"name": "Gallia Galliagest croissance 900g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 12.81
        },
        {
            "tax":20,"name": "Guigoz 3 lait croissance 10 a 36 mois 6x1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 10.56
        },
        {
            "tax":20,"name": "Bledilait croissance 18x250ml de 10 mois a 3 ans",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 11.16
        },
        {
            "tax":20,"name": "Candia croissance chocolat 6x25cl des 10 mois",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 3.9
        },
        {
            "tax":20,"name": "Mont Roucous eau minerale naturelle 6x1,5l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.76
        },
        {
            "tax":20,"name": "Eveil croissance nature 12x25cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 6.41
        },
        {
            "tax":20,"name": "Candia Baby lait croissance vanille 6x25cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 4.14
        },
        {
            "tax":20,"name": "Eveil bio nature croissance 6x1l",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 11.28
        },
        {
            "tax":20,"name": "Auchan Baby Bio croissance 10 mois a 3 ans 6x1l",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 10.32
        },
        {
            "tax":20,"name": "Gallia Calisma lait croissance bag in box 1,2kg des 12 mois",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 13.23
        },
        {
            "tax":20,"name": "Hipp croissance bio format biberon 6x25cl des 10 mois",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 5.58
        },
        {
            "tax":20,"name": "Guigoz 1er age formule epaissie boite 820g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 15.78
        },
        {
            "tax":20,"name": "Hipp bio lait croissance en poudre 900g de 12mois a 3ans",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 12.9
        },
        {
            "tax":20,"name": "Evian eau minerale 6x1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.58
        },
        {
            "tax":20,"name": "Hipp bio lait 2eme age boite 900g des 6 mois",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 17.48
        },
        {
            "tax":20,"name": "Hipp croissance bio bouteille 6x1l des 10 mois",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 15.42
        },
        {
            "tax":20,"name": "Candia baby croissance cereales 6x25cl de 10 mois a 3 ans",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 3.74
        },
        {
            "tax":20,"name": "Guigoz optipro 3 croissance boite 900g de 1 a 3ans",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 10.0
        },
        {
            "tax":20,"name": "Guigoz lait bio 3eme age de 12mois a 3ans 800g",
            "isBio": true,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 15.94
        },
        {
            "tax":20,"name": "Bledichef etuvee potiron carottes boulghour 250g des 15 mois",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 1.91
        },
        {
            "tax":20,"name": "Bledichef fondue de poireaux pdt et gruyere 250g des 15mois",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 1.91
        },
        {
            "tax":20,"name": "Nestle ptite recette lentilles jambon 2x200g des 12 mois",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.53
        },
        {
            "tax":20,"name": "Nestle ptite recette blanquette dinde riz 2x200g des 12 mois",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.53
        },
        {
            "tax":20,"name": "Hipp bio haricots verts p. de terre poulet 2x190g des 6 mois",
            "isBio": true,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.47
        },
        {
            "tax":20,"name": "Nestle ptite recette poulet basquaise 2x200g des 15mois",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.53
        },
        {
            "tax":20,"name": "Bledina courgette riz de veau 2x200g des12mois",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.89
        },
        {
            "tax":20,"name": "Nestle ptite recette spaghettis bolognaise 2x200g des 8 mois",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.53
        },
        {
            "tax":20,"name": "Hipp bio soupe 6 legumes semoule brique 2x250ml des 8mois",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.58
        },
        {
            "tax":20,"name": "Hipp bio risotto legumes petits pois poulet 260g des 18 mois",
            "isBio": true,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.38
        },
        {
            "tax":20,"name": "Nestle ptite recette couscous 2x200g des 8mois",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.53
        },
        {
            "tax":20,"name": "Hipp bio menus tagliatelle legume colin 2x190g des8mois",
            "isBio": true,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.47
        },
        {
            "tax":20,"name": "Bledine cereales riz carottes dosette 12x12g des 4/6 mois",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.45
        },
        {
            "tax":20,"name": "Bledina idees de maman bols potiron poulet 2x200g des 12mois",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.89
        },
        {
            "tax":20,"name": "Nestle bio naturnes patate douce carottes 2x130g des 4/6mois",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 1.6
        },
        {
            "tax":20,"name": "Nestle ptit souper tomate pate courgette 2x200g des 6 mois",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.44
        },
        {
            "tax":20,"name": "Bledina idees de maman epinard carotte boeuf 2x200gdes12mois",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.89
        },
        {
            "tax":20,"name": "Nestle ptite recette pot au feu boeuf 2x200g des 8 mois",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.53
        },
        {
            "tax":20,"name": "Bledichef duo carottes, petits pois et boeuf 260g des 18mois",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 1.85
        },
        {
            "tax":20,"name": "Good Gout bio ratatouille de quinoa 190g des 6mois",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.91
        },
        {
            "tax":20,"name": "Auchan baby dessert puree poire gourde 4x90g des 6mois",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.29
        },
        {
            "tax":20,"name": "Auchan baby puree pomme banane gourde 4x90g des 6mois",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.29
        },
        {
            "tax":20,"name": "Hipp bio mon premier biscuit boite 180g des 6 mois",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.95
        },
        {
            "tax":20,"name": "Auchan baby dessert lacte fraise gourde 4x90g des 6mois",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.6
        },
        {
            "tax":20,"name": "Nestle ptit onctueux fraise framboise 6x60g des 10 mois",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.47
        },
        {
            "tax":20,"name": "Nestle ptit onctueux croissance abricot mangue 6x60g 10 mois",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.47
        },
        {
            "tax":20,"name": "Nestle p'tit brasse framboise 4x100g des 6 mois",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 1.84
        },
        {
            "tax":20,"name": "Nestle ptit brasse a l'abricot 4x100g des 6 mois",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 1.84
        },
        {
            "tax":20,"name": "Naturnes corbeille de fruits 4x130g des 6 mois",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.53
        },
        {
            "tax":20,"name": "Auchan baby petit dessert lacte abricot gourde 4x90g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.6
        },
        {
            "tax":20,"name": "Auchan baby petit dessert puree de pomme 4x90g des 6 mois",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.29
        },
        {
            "tax":20,"name": "Nestle naturnes bio pommes bananes 2x115g des 4/6mois",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 1.7
        },
        {
            "tax":20,"name": "Nestle ptit onctueux croissance banane peche 6x60g des 10m",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.47
        },
        {
            "tax":20,"name": "Babybio mirabelle lorraine pomme aquitaine 2x130g des 4 mois",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.49
        },
        {
            "tax":20,"name": "Nestle ptit brasse banane 4x100g des 6 mois",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 1.84
        },
        {
            "tax":20,"name": "Nestle ptit brasse a la myrtille 4x100g des 6 mois",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 1.84
        },
        {
            "tax":20,"name": "Hipp bio 100% fruits pommes bananes fruits rouges 4x100g 6m",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.22
        },
        {
            "tax":20,"name": "Bledina pommes nectarines bananes bio 2x130g des 6mois",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.05
        },
        {
            "tax":20,"name": "Nestle ptit brasse a la fraise 4x100g des 6 mois",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 1.84
        },
        {
            "tax":20,"name": "Babybio pot bio pommes bananes 2x130g  des4mois",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 1.93
        },
        {
            "tax":20,"name": "Pampers couches new baby geant 2/5kg x44 taille 1",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 5.92
        },
        {
            "tax":20,"name": "Love And Green couches midi 2/5kg x23 taille 1",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 6.32
        },
        {
            "tax":20,"name": "Auchan baby changes confort  born 2/5kg x22 taille 1",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.8
        },
        {
            "tax":20,"name": "Pampers new baby value 2/5kg x72 taille 1",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 11.12
        },
        {
            "tax":20,"name": "Pampers couches new baby 2/5kg x22 taille 1",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 3.02
        },
        {
            "tax":20,"name": "Pampers harmonie geant x35 taille 1",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 10.6
        },
        {
            "tax":20,"name": "Pampers couches new baby paquet micro 1,5/2,5kg x24 taille 0",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 8.33
        },
        {
            "tax":20,"name": "Pampers couches new baby geant 4/8kg x54 taille 2",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 13.6
        },
        {
            "tax":20,"name": "Pampers couches new baby dry 4/8kg x31 taille 2",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 7.35
        },
        {
            "tax":20,"name": "Auchan baby confort+ 3/6kg x36 taille 2",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 5.92
        },
        {
            "tax":20,"name": "Lotus baby touch change 3/6 kg x56 taille 2",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 14.43
        },
        {
            "tax":20,"name": "Pampers harmonie geant x39 taille 2",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 15.1
        },
        {
            "tax":20,"name": "Auchan baby confort+ pack change mini 3/6kg x68 taille 2",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 10.86
        },
        {
            "tax":20,"name": "Love And Green couches midi 3/6kg x36 taille 2",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 11.51
        },
        {
            "tax":20,"name": "Carryboo couches dermo sensitives 3/6kg x56 taille 2",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 18.66
        },
        {
            "tax":20,"name": "Pampers baby dry pants geant 12/17kg x36 taille 5",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 14.1
        },
        {
            "tax":20,"name": "Love And Green couches midi 4/9kg x52 taille 3",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 17.9
        },
        {
            "tax":20,"name": "Lotus baby touch change 4/9kg x44 taille 3",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 14.42
        },
        {
            "tax":20,"name": "Pampers couches new baby midi change 6/10kg x50 taille 3",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 13.89
        },
        {
            "tax":20,"name": "Pampers baby dry pants geant 6/11kg x44 taille 3",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 14.1
        },
        {
            "tax":20,"name": "Cosmia baby maxi carres sensitive 100% coton 3x80",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 5.81
        },
        {
            "tax":20,"name": "Cosmia baby serum physiologique 40x5ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 3.06
        },
        {
            "tax":20,"name": "Auchan baby carre de soin x100",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 3.11
        },
        {
            "tax":20,"name": "Auchan lingettes douceur recharge 3x72",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 4.66
        },
        {
            "tax":20,"name": "Auchan baby lingette sensitive lait recharge 3x64",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 4.15
        },
        {
            "tax":20,"name": "Cosmia baby carre de soin visage et corps x100",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.07
        },
        {
            "tax":20,"name": "Biolane lingettes visage et mains x64",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.44
        },
        {
            "tax":20,"name": "Cosmia baby carres douceur 100% coton x40",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 1.24
        },
        {
            "tax":20,"name": "Auchan huile d'amande douce 100ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 3.28
        },
        {
            "tax":20,"name": "Kandoo melon lingette x55",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.39
        },
        {
            "tax":20,"name": "Auchan Baby lessive liquide peaux sensibles 1,5l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 4.18
        },
        {
            "tax":20,"name": "Pouce lingettes bebe x72",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 0.79
        },
        {
            "tax":20,"name": "Lingettes bebe sensitives a l'aloe vera x80",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 1.58
        },
        {
            "tax":20,"name": "Cosmia baby lingette sensitive extrait de camomille x56",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 1.44
        },
        {
            "tax":20,"name": "Cosmia baby spray nasal a base d'eau de mer 150ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 4.44
        },
        {
            "tax":20,"name": "Pampers lingettes max care 3x50",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 6.0
        },
        {
            "tax":20,"name": "Cosmia baby lingette papier toilette 2x50",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.29
        },
        {
            "tax":20,"name": "Biolane lingettes recharge x72",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 2.44
        },
        {
            "tax":20,"name": "Biolane liniment oleo-calcaire 700ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 10.3
        },
        {
            "tax":20,"name": "Carryboo batonnets securite bebe x50",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "bebe",
            "unit": "each",
            "price": 1.32
        },
        {
            "tax":20,"name": "Signal dentifrice haleine pure 75ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.74
        },
        {
            "tax":20,"name": "Colgate dentifrice triple action tube 2x75ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.78
        },
        {
            "tax":20,"name": "Colgate dentifrice kids minions 50ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 2.04
        },
        {
            "tax":20,"name": "Listerine bain de bouche fraicheur intense 500ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 4.72
        },
        {
            "tax":20,"name": "Rik et Rok brosse a dents junior x3",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 2.7
        },
        {
            "tax":20,"name": "Elmex dentifrice sensitive tube 75ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 3.52
        },
        {
            "tax":20,"name": "Elmex dentifrice sensitive blancheur 75ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 3.52
        },
        {
            "tax":20,"name": "Vademecum dentifrice blancheur naturelle 2x75ml",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 5.7
        },
        {
            "tax":20,"name": "Vademecum dentifrice bio protection complete 75ml",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 2.83
        },
        {
            "tax":20,"name": "Teraxil dentifrice mon premier teraxil pomme 75ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.56
        },
        {
            "tax":20,"name": "White Glo dentifrice blanchissant formule pro 100ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 4.11
        },
        {
            "tax":20,"name": "Oral B brossettes dual clean x2",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 9.09
        },
        {
            "tax":20,"name": "Sensodyne dentifrice repare protege blancheur 2x75ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 6.56
        },
        {
            "tax":20,"name": "Auchan dentifrice multi fruits enfants plus de 6 ans -50ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 0.79
        },
        {
            "tax":20,"name": "Oral B brosse a dents electrique vitality pro timer trizone",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 28.72
        },
        {
            "tax":20,"name": "Oral B dentifrice proexpert clean mint 75ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 3.03
        },
        {
            "tax":20,"name": "Colgate brosse a dents triple action souple",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.74
        },
        {
            "tax":20,"name": "Oral B dentifrice pro expert blancheur saine 75ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 3.13
        },
        {
            "tax":20,"name": "Signal dentifrice integral white 100ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 2.27
        },
        {
            "tax":20,"name": "Listerine bain de bouche total care gout leger 500ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 4.99
        },
        {
            "tax":20,"name": "Cosmia gel douche et bain dermo protect peaux seches 750ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 3.49
        },
        {
            "tax":20,"name": "Sanex douche 0% peaux seches 2x750ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 9.9
        },
        {
            "tax":20,"name": "Cosmia lait douche et bain amande douce 750ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 3.25
        },
        {
            "tax":20,"name": "Cosmia gel douche lait noix de coco 250ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.19
        },
        {
            "tax":20,"name": "Auchan huile d'amande douce 100ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 3.28
        },
        {
            "tax":20,"name": "Monsavon l'authentiquesavon au lait 6x100g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 4.8
        },
        {
            "tax":20,"name": "Cosmia gel douche mure sauvage et grenade 250ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.19
        },
        {
            "tax":20,"name": "Sanex douche et bain zero % peaux seches 750ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 5.79
        },
        {
            "tax":20,"name": "Cosmia Men shampooing douche 3en1 sport 250ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.19
        },
        {
            "tax":20,"name": "Mennen deodorant gel x-treme ice fresh 75ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 4.37
        },
        {
            "tax":20,"name": "Cosmia gel douche gourmand tarte aux fraises 250ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.45
        },
        {
            "tax":20,"name": "Tourangelle huile vierge bio de noix de coco 31,4cl",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 5.5
        },
        {
            "tax":20,"name": "Cosmia gel douceur fleur de tiare de Tahiti 250ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.19
        },
        {
            "tax":20,"name": "Savon liquide le naturel extra pur de Marseille pompe 500ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 2.69
        },
        {
            "tax":20,"name": "Gillette venus lames smooth sensitive x4",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 12.08
        },
        {
            "tax":20,"name": "Cadum douche douceur velours fleur de coton 400ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 2.69
        },
        {
            "tax":20,"name": "Le Petit Marseillais gel douche amande douce 250ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.98
        },
        {
            "tax":20,"name": "Gillette rasoir venus smooth sensitive",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 11.08
        },
        {
            "tax":20,"name": "Cosmia gel douche lait peche 250ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.19
        },
        {
            "tax":20,"name": "Dove pain de toilette 4x100g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 3.4
        },
        {
            "tax":20,"name": "Dop shampooing 2en1 huile amande douce 400ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.85
        },
        {
            "tax":20,"name": "Head & Shoulders shampooing anti-pellicule apple fresh 280ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 4.4
        },
        {
            "tax":20,"name": "Cosmia shampooing sec 200ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 3.12
        },
        {
            "tax":20,"name": "Batiste shampooing sec blush aerosol 200ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 3.49
        },
        {
            "tax":20,"name": "Cosmia shampooing aux amandes tous types de cheveux 500ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.44
        },
        {
            "tax":20,"name": "Head & Shoulders shampooing 2en1 citrus fresh 255ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 4.51
        },
        {
            "tax":20,"name": "Garnier ultra doux shampooing delicatesse 250ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 2.84
        },
        {
            "tax":20,"name": "Fructis masque hair food banane 390ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 7.74
        },
        {
            "tax":20,"name": "Cosmia shampooing aux oeufs tous types de cheveux 500ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.44
        },
        {
            "tax":20,"name": "Batiste shampoing sec original 200ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 3.49
        },
        {
            "tax":20,"name": "Cosmia kids spray demelant cerise fraise 150ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 2.19
        },
        {
            "tax":20,"name": "Head & Shoulders shampooing classic clean 280ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 3.66
        },
        {
            "tax":20,"name": "Vivelle dop gel coiffant pot 200ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 4.85
        },
        {
            "tax":20,"name": "Cosmia shampooing douche 2en1 monoi 250ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.19
        },
        {
            "tax":20,"name": "Timotei shampooing pure 300ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 2.43
        },
        {
            "tax":20,"name": "Dop shampooing 2en1 huile d'argan 400ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.85
        },
        {
            "tax":20,"name": "Cosmia kids shampooing demelant 2en1 cerise amande 250ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.29
        },
        {
            "tax":20,"name": "Cosmia laque forces et brillance 300ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.59
        },
        {
            "tax":20,"name": "Nature Moi shampooing nourrissant cheveux secs 250ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 4.07
        },
        {
            "tax":20,"name": "L'Oreal Elseve shampooing color vive 2en1 -300ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 4.01
        },
        {
            "tax":20,"name": "coton maxi carres a demaquiller x80",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.49
        },
        {
            "tax":20,"name": "Auchan batonnet coton x200 boite",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 0.88
        },
        {
            "tax":20,"name": "Auchan disques a demaquiller super doux x70",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 0.92
        },
        {
            "tax":20,"name": "Lotus batonnets coton boite x160",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.48
        },
        {
            "tax":20,"name": "Auchan batonnets coton x160 sachet",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 0.51
        },
        {
            "tax":20,"name": "Cosmia baby carre de soin visage et corps x100",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 2.07
        },
        {
            "tax":20,"name": "Cosmia baby carres douceur 100% coton x40",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.24
        },
        {
            "tax":20,"name": "Cosmia lingette demaquillante sensitive x25",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.79
        },
        {
            "tax":20,"name": "Auchan carres a demaquiller x50",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.19
        },
        {
            "tax":20,"name": "Gillette lame mach 3+ x5",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 16.31
        },
        {
            "tax":20,"name": "Demak Up original disques coton a demaquiller x105",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.72
        },
        {
            "tax":20,"name": "Gemey fond de teint Dream satin fluide beige dore 21",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 10.9
        },
        {
            "tax":20,"name": "Maybelline mascara total temptation washable ndeg1 black",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 9.6
        },
        {
            "tax":20,"name": "Auchan ovales a demaquiller a l'aloe vera x50",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.19
        },
        {
            "tax":20,"name": "Tourangelle huile vierge bio de noix de coco 31,4cl",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 5.5
        },
        {
            "tax":20,"name": "Garnier pure active intensif 3en1 anti points noirs 150ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 6.39
        },
        {
            "tax":20,"name": "Lotus sachet x160 batonnets",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 0.8
        },
        {
            "tax":20,"name": "Cosmia gel nettoyant pure au dpenthenol peaux grasses 150ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 2.99
        },
        {
            "tax":20,"name": "Demak'Up lingette a demaquiller peau seche ou sensible x25",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 2.8
        },
        {
            "tax":20,"name": "Gilette lames fusion x5",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 20.27
        },
        {
            "tax":20,"name": "Florex papier toilette blanc pure ouate x18 rouleaux",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 2.79
        },
        {
            "tax":20,"name": "Lotus confort papier hygienique rose aquatube rouleau x24",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 7.94
        },
        {
            "tax":20,"name": "Auchan papier hygienique 3plis rose 140 feuilles rouleau x12",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 4.01
        },
        {
            "tax":20,"name": "Renova papier toilette yorissime rouleau x48 +24offerts",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 21.5
        },
        {
            "tax":20,"name": "Auchan papier hygienique 3 plis extra doux coton blanc x12",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 4.13
        },
        {
            "tax":20,"name": "Auchan papier toilette blanc maxi rouleau 216 feuilles x12",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 4.05
        },
        {
            "tax":20,"name": "Auchan mouchoirs hello blancs 2 plis boite x100",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 0.83
        },
        {
            "tax":20,"name": "Auchan papier toilette blanc 5plis 90 feuilles rouleau x6",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 3.34
        },
        {
            "tax":20,"name": "Auchan papier toilette blanc maxi rouleaux 280 feuilles x6",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 2.12
        },
        {
            "tax":20,"name": "Auchan environnement papier toilette blanc rouleau x16",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 6.15
        },
        {
            "tax":20,"name": "Lotus collection papier toilette blanc ou lilas rouleau x6",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 2.64
        },
        {
            "tax":20,"name": "Lotus papier toilette confort rose ou blanc aquatube x12",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 3.48
        },
        {
            "tax":20,"name": "Auchan mouchoirs home compact 4plis 9x24etuis",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.99
        },
        {
            "tax":20,"name": "Auchan papier toilette rose maxi rouleaux x12",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 4.05
        },
        {
            "tax":20,"name": "Kleenex mouchoirs ultra soft boite cubique x56",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 2.16
        },
        {
            "tax":20,"name": "Auchan papier toilette rose maxi rouleau 216 feuilles x6",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 2.11
        },
        {
            "tax":20,"name": "Auchan sacs congelation a zip petit modele 1lx25",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 1.2
        },
        {
            "tax":20,"name": "Lotus mouchoirs blanc x140 pack familial",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 2.1
        },
        {
            "tax":20,"name": "Tena lady serviettes nuit maxi night  x12",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 7.95
        },
        {
            "tax":20,"name": "Nana serviettes hygieniques ultra goodnight x20",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "hygiene",
            "unit": "each",
            "price": 3.47
        },
        {
            "tax":20,"name": "Florex papier toilette blanc pure ouate x18 rouleaux",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 2.79
        },
        {
            "tax":20,"name": "Auchan essuie tout decore resistant rouleau x4",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.77
        },
        {
            "tax":20,"name": "Renova essuie tout flexi absorbe rouleau x12",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 8.16
        },
        {
            "tax":20,"name": "Florex essuie-tout decore rouleau x4",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.49
        },
        {
            "tax":20,"name": "Lotus confort papier hygienique rose aquatube rouleau x24",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 7.94
        },
        {
            "tax":20,"name": "Auchan papier hygienique 3plis rose 140 feuilles rouleau x12",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 4.01
        },
        {
            "tax":20,"name": "Renova papier toilette yorissime rouleau x48 +24offerts",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 21.5
        },
        {
            "tax":20,"name": "Auchan papier hygienique 3 plis extra doux coton blanc x12",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 4.13
        },
        {
            "tax":20,"name": "Auchan papier toilette blanc maxi rouleau 216 feuilles x12",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 4.05
        },
        {
            "tax":20,"name": "Auchan mouchoirs home blancs 3 plis boite x100",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.05
        },
        {
            "tax":20,"name": "Auchan mouchoirs hello blancs 2 plis boite x100",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 0.83
        },
        {
            "tax":20,"name": "Auchan essuie tout blanc maxi rouleau x6",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 6.01
        },
        {
            "tax":20,"name": "Auchan papier toilette blanc 5plis 90 feuilles rouleau x6",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 3.34
        },
        {
            "tax":20,"name": "Auchan papier toilette blanc maxi rouleaux 280 feuilles x6",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 2.12
        },
        {
            "tax":20,"name": "Sopalin essuie tout sur mesure rouleau x5 +1offert",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 7.95
        },
        {
            "tax":20,"name": "Auchan environnement papier toilette blanc rouleau x16",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 6.15
        },
        {
            "tax":20,"name": "Lotus collection papier toilette blanc ou lilas rouleau x6",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 2.64
        },
        {
            "tax":20,"name": "Okay essuie tout decor 3 rouleaux",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.99
        },
        {
            "tax":20,"name": "Auchan essuie tout blanc maxi 90 feuilles rouleau x4",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 4.23
        },
        {
            "tax":20,"name": "Lotus papier toilette confort rose ou blanc aquatube x12",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 3.48
        },
        {
            "tax":20,"name": "Omo lessive tropique magnolia 2 en 1 ecodose x 30 -0,723l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 9.5
        },
        {
            "tax":20,"name": "Omo lessive diluee fleurs des tropiques 40 lavages 2l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 6.99
        },
        {
            "tax":20,"name": "Eau Ecarlate decolor stop 3x25lingettes",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 13.64
        },
        {
            "tax":20,"name": "Auchan lessive liquide air de printemps 37lavages 2l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 6.01
        },
        {
            "tax":20,"name": "Pouce eau demineralisee 5l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.43
        },
        {
            "tax":20,"name": "Arbre Vert lessive diluee vegetal 30 lavages 2l + recharge",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 10.65
        },
        {
            "tax":20,"name": "Auchan lingettes anti decoloration x20",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 3.8
        },
        {
            "tax":20,"name": "Super Croix Bora Bora ecodose x30 -0,75l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 9.15
        },
        {
            "tax":20,"name": "Auchan lessive liquide savon de Marseille 55 lavages 3l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 8.62
        },
        {
            "tax":20,"name": "Dr Beckmann nettoyant hygiene lave-linge 250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 3.26
        },
        {
            "tax":20,"name": "Dash pods lessive ecodoses 3en1 lotus lys x29 -0,765kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 11.47
        },
        {
            "tax":20,"name": "Skip lessive diluee active clean lavage x72 -2x1,8l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 19.02
        },
        {
            "tax":20,"name": "Lenor parfum de linge printemps 15 lavages 210g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 7.1
        },
        {
            "tax":20,"name": "Soupline concentre vanille mandarine 104 lavages -2x1,3l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 9.69
        },
        {
            "tax":20,"name": "Vanish detachant avant lavage action gold pistolet 700ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 6.95
        },
        {
            "tax":20,"name": "Super Croix Maroc ecodose x30 -0,75l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 9.15
        },
        {
            "tax":20,"name": "Mir couleurs lessive liquide concentree 25 lavages 1,5l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 6.03
        },
        {
            "tax":20,"name": "Lenor assouplissant concentre secret charme 40 lavages 1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 8.48
        },
        {
            "tax":20,"name": "Ariel simply lessive diluee intense lavage x33 -1,815l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 6.59
        },
        {
            "tax":20,"name": "Lenor assouplissant concentre souffle precieux 1,15l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 4.47
        },
        {
            "tax":20,"name": "Spontex gratte eponge stop graisse x6 +2offerts",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 4.94
        },
        {
            "tax":20,"name": "Auchan eponges grattantes basiques x3",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.29
        },
        {
            "tax":20,"name": "Finish liquide de rincage 800ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 5.24
        },
        {
            "tax":20,"name": "Auchan pastille de lavage lave-vaisselle x45",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 4.78
        },
        {
            "tax":20,"name": "Auchan liquide vaisselle classique vinaigre framboise 750ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.35
        },
        {
            "tax":20,"name": "Auchan liquide vaisselle soin ecolabel basilic laurier 500ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.14
        },
        {
            "tax":20,"name": "Sun tablettes lave-vaisselle tout en 1 citron 26 lavages",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 4.95
        },
        {
            "tax":20,"name": "Sun tablettes lave-vaisselle tout en 1 standard x26 -0,455kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 4.95
        },
        {
            "tax":20,"name": "Arbre Vert liquide vaisselle mains peaux sensibles 750ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.93
        },
        {
            "tax":20,"name": "Finish liquide de rincage 800ml offre eco",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 5.24
        },
        {
            "tax":20,"name": "Auchan liquide vaisselle soin zero 500ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.14
        },
        {
            "tax":20,"name": "Auchan sel regenerant pour lave-vaisselle 4x1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 2.94
        },
        {
            "tax":20,"name": "Auchan lave vaisselle pastille tout en 1 citron x45",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 5.98
        },
        {
            "tax":20,"name": "Auchan liquide vaisselle flash desincrustant 500ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.3
        },
        {
            "tax":20,"name": "Auchan liquide vaisselle classique tradi citron 1,5l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 2.29
        },
        {
            "tax":20,"name": "Auchan liquide vaisselle classique vinaigre pomme 750ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.35
        },
        {
            "tax":20,"name": "Auchan eponge grattante salle de bain x2",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.34
        },
        {
            "tax":20,"name": "Auchan liquide de rincage lave vaisselle fresh 500ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.25
        },
        {
            "tax":20,"name": "Auchan liquide vaisselle soin peau sensible 500ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.14
        },
        {
            "tax":20,"name": "Auchan liquide vaisselle anti bacterien 500ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.3
        },
        {
            "tax":20,"name": "Auchan sac poubelle liens coulissants 50l x15",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 2.35
        },
        {
            "tax":20,"name": "Auchan sac poubelle ultra resistant coulissant 10x50l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 2.7
        },
        {
            "tax":20,"name": "Auchan sac poubelle a liens coulissants 100l x10",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 2.15
        },
        {
            "tax":20,"name": "Auchan sac poubelle liens coulissants 30l x25",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 2.45
        },
        {
            "tax":20,"name": "Auchan film fraicheur 50mx29cm",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.8
        },
        {
            "tax":20,"name": "Spontex gratte eponge stop graisse x6 +2offerts",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 4.94
        },
        {
            "tax":20,"name": "Auchan sacs poubelle lien coulissant poubelle haute 50l x10",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.65
        },
        {
            "tax":20,"name": "Auchan eponges grattantes basiques x3",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.29
        },
        {
            "tax":20,"name": "Auchan papier aluminium rouleau de 20m",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.73
        },
        {
            "tax":20,"name": "Auchan papier cuisson extra large 8mx36cm",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.22
        },
        {
            "tax":20,"name": "Auchan papier aluminium rouleau de 50m",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 3.26
        },
        {
            "tax":20,"name": "Auchan papier cuisson feuille a feuille x16",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.1
        },
        {
            "tax":20,"name": "Auchan Mieux Vivre allume feu 100% naturel x24",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.11
        },
        {
            "tax":20,"name": "Auchan sac poubelle ultra resistant coulissant 20x30l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 2.5
        },
        {
            "tax":20,"name": "Auchan sac congelation a zip modele moyen 3l x20",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.4
        },
        {
            "tax":20,"name": "Auchan sac poubelle lien classique 50l x15",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.85
        },
        {
            "tax":20,"name": "Auchan sacs congelation a zip petit modele 1lx25",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.2
        },
        {
            "tax":20,"name": "Auchan sac poubelle a lien classique 100l x10",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 2.11
        },
        {
            "tax":20,"name": "Spontex gratte eponge stop graisse x8 +eponge mosaique x3",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 5.25
        },
        {
            "tax":20,"name": "Auchan film fraicheur 30mx29cm",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.23
        },
        {
            "tax":20,"name": "Auchan lingettes multi-usages antibacteriennes x40",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.55
        },
        {
            "tax":20,"name": "Auchan lingettes wc antibacteriennes x40",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 2.07
        },
        {
            "tax":20,"name": "Auchan lingettes nettoyantes multi usage x40",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.24
        },
        {
            "tax":20,"name": "Sanytol desinfectant multi-usages spray 500ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 3.06
        },
        {
            "tax":20,"name": "Sanytol desinfectant nettoyant multi-usages 1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 3.27
        },
        {
            "tax":20,"name": "Sanytol lingettes desinfectantes multi-usage x48",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 2.2
        },
        {
            "tax":20,"name": "Bref wc power activ eau bleue 2x50g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 3.46
        },
        {
            "tax":20,"name": "Lavofruit nettoyant menager bactericide fraise 1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 3.87
        },
        {
            "tax":20,"name": "Auchan lingettes multi-usage citron x40",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.55
        },
        {
            "tax":20,"name": "Auchan pastilles de javel x52 -170g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 2.1
        },
        {
            "tax":20,"name": "Auchan gel wc javel eucalyptus 750ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 0.94
        },
        {
            "tax":20,"name": "Briochin savon noir liquide 1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 3.36
        },
        {
            "tax":20,"name": "Arbre Vert lessive vegetale ecolabel 45 lavages 3l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 10.32
        },
        {
            "tax":20,"name": "Auchan lingettes multi-usage fraicheur marine x40",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.55
        },
        {
            "tax":20,"name": "Lacroix javel precise tonique 750ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.82
        },
        {
            "tax":20,"name": "Auchan lingettes nettoyantes imbibees pour le sol x15",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.86
        },
        {
            "tax":20,"name": "Pliz fee du logis aerosol 300ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 2.5
        },
        {
            "tax":20,"name": "Harpic lingette desinfectante wc marine x80 offre decouverte",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 3.99
        },
        {
            "tax":20,"name": "Auchan bloc wc bleue javel x2",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 1.98
        },
        {
            "tax":20,"name": "Cif ultimate clean anti calcaire spray 435ml",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "entretien",
            "unit": "each",
            "price": 2.49
        },
        {
            "tax":20,"name": "Auchan litiere pour chat 16l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 3.9
        },
        {
            "tax":20,"name": "Auchan litiere compact 5l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 3.94
        },
        {
            "tax":20,"name": "Nullodor litiere pour chat 1,5kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 5.33
        },
        {
            "tax":20,"name": "Auchan bouchees en sauce assort poissons boites 3x400g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 2.3
        },
        {
            "tax":20,"name": "Terdis litiere tranquille christal bicabornite 4l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 5.3
        },
        {
            "tax":20,"name": "Whiskas selection sauce 4 varietes sachet fraicheur 72x100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 24.95
        },
        {
            "tax":20,"name": "Felix effiles de viande et poisson en gelee sachets 44x100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 14.39
        },
        {
            "tax":20,"name": "Auchan bouchees en sauce viandes pour chat sachets 24x100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 6.55
        },
        {
            "tax":20,"name": "Auchan Expert croquette au boeuf pour chat sterilise 1,5kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 4.9
        },
        {
            "tax":20,"name": "Auchan junior bouchees sauce  pour chat sachets 12x100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 3.59
        },
        {
            "tax":20,"name": "Perfect Fit croquettes saumon  chat adulte sterilise 1.4 kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 5.95
        },
        {
            "tax":20,"name": "Brekkies Excel croquettes chat sterilise 1,5kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 3.24
        },
        {
            "tax":20,"name": "Auchan eminces en gelee sachets mixte pour chat 12x100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 3.19
        },
        {
            "tax":20,"name": "Purina One junior croquette pour chat 1,5kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 6.8
        },
        {
            "tax":20,"name": "Pouce litiere 7l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 0.98
        },
        {
            "tax":20,"name": "Catsan litiere sans odeur active fresh 5l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 6.6
        },
        {
            "tax":20,"name": "Auchan bouchees en sauce assort viandes sachets 12x100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 3.73
        },
        {
            "tax":20,"name": "Auchan multicroquettes au boeuf pour chat 7,5kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 8.5
        },
        {
            "tax":20,"name": "Perfect Fit adulte sterilise croquette riche en boeuf  1,4kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 5.95
        },
        {
            "tax":20,"name": "desodorisant pour litiere 350g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 3.02
        },
        {
            "tax":20,"name": "Auchan bouchees en gelee viandes pour chien boites 6x400g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 4.1
        },
        {
            "tax":20,"name": "Auchan terrine assort viandes pour chien barquette 3x300g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 3.1
        },
        {
            "tax":20,"name": "Pedigree mini chien adulte-10kg croquette poulet legumes 6kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 13.99
        },
        {
            "tax":20,"name": "Pedigree Sachets Fraicheur pour chien en gelee 72x100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 22.5
        },
        {
            "tax":20,"name": "Brekkies Excel multicroc croquettes au boeuf et legumes 10kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 11.35
        },
        {
            "tax":20,"name": "Pedigree dentastix hygiene dentaire grand chien x28 -1080g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 7.97
        },
        {
            "tax":20,"name": "Canigou pate et morceaux recette allegee boite 4x400g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 3.58
        },
        {
            "tax":20,"name": "Auchan croquettes pour chien viande bouchees moelleuses 10kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 10.35
        },
        {
            "tax":20,"name": "Cesar barquette pour chien en terrine traiteur 4x150g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 3.45
        },
        {
            "tax":20,"name": "Frolic croquettes boeuf carottes et cereales 4kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 7.99
        },
        {
            "tax":20,"name": "Auchan terrine au boeuf en boite 1,220kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 1.5
        },
        {
            "tax":20,"name": "Pedigree gelee gourmande pour chien sachet fraicheur 12x100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 4.89
        },
        {
            "tax":20,"name": "Fido croquettes pour chien croq et tendre au poulet 3kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 6.55
        },
        {
            "tax":20,"name": "Auchan expert croquettes volaille pour chien 1,5kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 3.85
        },
        {
            "tax":20,"name": "Pedigree croquettes boeuf pour chien adulte 10kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 14.15
        },
        {
            "tax":20,"name": "Pedigree schmackos recompense pour chien stick x20 -172g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 2.09
        },
        {
            "tax":20,"name": "Auchan multicroquettes poulet et moelleuses pour chien 2kg",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 2.77
        },
        {
            "tax":20,"name": "Pedigree Dentastix hygiene dentaire petit chien x28 - 440g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 4.99
        },
        {
            "tax":20,"name": "Cesar senior 10+ gelee barquette 4x150g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 3.45
        },
        {
            "tax":20,"name": "Auchan Junior terrine volaille pour chien boite 3x400g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 2.34
        },
        {
            "tax":20,"name": "Auchan menu complet pour lapin nain 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 2.8
        },
        {
            "tax":20,"name": "Auchan menu complet pour cochon d'inde 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 2.8
        },
        {
            "tax":20,"name": "Riga sciure pour rongeurs 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 1.52
        },
        {
            "tax":20,"name": "foin 1kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 2.01
        },
        {
            "tax":20,"name": "melange de graines pour oiseaux de la nature 1,5kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 1.84
        },
        {
            "tax":20,"name": "Riga tetra flocons pour poissons rouges 250ml",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 4.56
        },
        {
            "tax":20,"name": "Auchan menu complet pour grandes perruches 800g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 3.48
        },
        {
            "tax":20,"name": "Auchan menu complet pour perruches 800g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 3.28
        },
        {
            "tax":20,"name": "Auchan menu complet pour canaris 800g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 3.07
        },
        {
            "tax":20,"name": "Auchan biscuits aux fruits pour oiseaux x6 -70g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 2.33
        },
        {
            "tax":20,"name": "Riga biscuits au miel pour oiseaux x6",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "animalerie",
            "unit": "each",
            "price": 2.11
        },
        {
            "tax":20,"name": "kit hiver degivrant pour voiture",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 6.99
        },
        {
            "tax":20,"name": "Florex essuie-tout decore rouleau x4",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 1.49
        },
        {
            "tax":20,"name": "Chef&Sommelier set de 2 verres a cocktail 30cl collector",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 13.99
        },
        {
            "tax":20,"name": "Energizer pile AA-LR6 x16 family pack",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 9.99
        },
        {
            "tax":20,"name": "Energizer pile AAA-LR03 x16 family pack",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 9.99
        },
        {
            "tax":20,"name": "Auchan piles alcaline LR6 x8",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 2.9
        },
        {
            "tax":20,"name": "Axal sel adoucisseur 25kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 10.5
        },
        {
            "tax":20,"name": "combustible desaromatise pour appareil mobile chauffage 20l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 20.99
        },
        {
            "tax":20,"name": "Auchan bobine essuie tout multi usages feuille x500",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 5.29
        },
        {
            "tax":20,"name": "Chef&Sommelier set de 2 flutes a Champagne 24cl collector",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 11.99
        },
        {
            "tax":20,"name": "Auchan pile rechargeable HR06 2500mah x4",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 9.9
        },
        {
            "tax":20,"name": "boite de cotillons pour 10 personnes",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 4.99
        },
        {
            "tax":20,"name": "Chef&Sommelier set de 2 verres a whisky 35cl collector",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 8.99
        },
        {
            "tax":20,"name": "Auchan pile rechargeable HR03 1000mah x4",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 8.9
        },
        {
            "tax":20,"name": "papier cadeau Noel 10mx0,70m",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 1.99
        },
        {
            "tax":20,"name": "Chef et Sommelier set de 2 verres a vin rouge 47cl collector",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 13.99
        },
        {
            "tax":20,"name": "Auchan ampoule led GU10 equi couleur froide 50W",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 4.9
        },
        {
            "tax":20,"name": "Duracell 2032 x2",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 7.89
        },
        {
            "tax":20,"name": "Auchan piles alcaline LR14 x2",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 2.9
        },
        {
            "tax":20,"name": "Auchan piles alcaline LR3 AAA x4",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 1.5
        },
        {
            "tax":20,"name": "papier cadeau Noel 10mx0,70m",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 1.99
        },
        {
            "tax":20,"name": "Auchan papier cadeau metal sparkling winter 2m x0,70m",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 1.6
        },
        {
            "tax":20,"name": "Auchan enveloppe NF auto-adhesive 80g 110mmx220mm  x100",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 2.95
        },
        {
            "tax":20,"name": "Auchan carnet enveloppes precasees 110x220 mm 90g x50",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 2.25
        },
        {
            "tax":20,"name": "Bic feutre coloriage kid couleur x12",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 2.44
        },
        {
            "tax":20,"name": "Auchan carnet enveloppes precasees 114x162 mm 90g x50",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 1.95
        },
        {
            "tax":20,"name": "Bic kids tropicolors crayon de couleur x18",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 1.95
        },
        {
            "tax":20,"name": "Auchan enveloppe papier kraft 162x229 auto-adhesive 90g x25",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 1.45
        },
        {
            "tax":20,"name": "Pokemon booster sl05 ultra prisme",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 5.9
        },
        {
            "tax":20,"name": "H.Packard ndeg301 cartouche d'encre noire",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 17.99
        },
        {
            "tax":20,"name": "Johnny Hallyday Mon Pays c'est l'Amour cd collector",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 17.99
        },
        {
            "tax":20,"name": "Uhu 3 sticks colle 8,2g super heros",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 4.23
        },
        {
            "tax":20,"name": "Bic tipp ex mini pocket mouse fashion x3",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 4.6
        },
        {
            "tax":20,"name": "Auchan rouleau adhesif invisible 19mnx25m",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 1.59
        },
        {
            "tax":20,"name": "Auchan classeur A4 souple 21x29,7cm dos personnalisable",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 2.8
        },
        {
            "tax":20,"name": "Auchan ramette papier ultra blanc 80g - 500 feuilles A4",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 4.1
        },
        {
            "tax":20,"name": "Auchan trieur personnalisable 12 positions",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 4.95
        },
        {
            "tax":20,"name": "Auchan chemise a elastique 3 rabats 24x32cm",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 1.75
        },
        {
            "tax":20,"name": "Auchan protege-cahiers avec rabats x5 -24x32cm",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 6.1
        },
        {
            "tax":20,"name": "Auchan protege documents 120 vues 21x29,7cm coloris assortis",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 3.8
        },
        {
            "tax":20,"name": "Auchan 3 pinceaux aquarelle ndeg4-10-16",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 1.69
        },
        {
            "tax":20,"name": "Clairefontaine copie double perforee 200p 90g 21x29,7cm",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 4.75
        },
        {
            "tax":20,"name": "Auchan pochette A4 perforee lisse 50 microns x50",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 2.75
        },
        {
            "tax":20,"name": "Bic ardoise ergonomique 20x30cm +1 feutre +1 effacette",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 1.99
        },
        {
            "tax":20,"name": "Uhu stick colle 21g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 3.0
        },
        {
            "tax":20,"name": "Auchan protege cahier 21x29,7cm avec rabats cristal incolore",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 1.35
        },
        {
            "tax":20,"name": "Auchan regle double decimetre incassable",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 1.09
        },
        {
            "tax":20,"name": "Pilot 1 recharge bleu pour stylo frixion ball x3 + 1 etui",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 4.98
        },
        {
            "tax":20,"name": "Bic feutre coloriage kid couleur x12",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 2.44
        },
        {
            "tax":20,"name": "Auchan intercalaire 12 positions A4 carton lustre",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 1.85
        },
        {
            "tax":20,"name": "Auchan peinture 10 tubes 10ml +1 pinceau ndeg8",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 2.89
        },
        {
            "tax":20,"name": "Energizer pile AA-LR6 x16 family pack",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 9.99
        },
        {
            "tax":20,"name": "Energizer pile AAA-LR03 x16 family pack",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 9.99
        },
        {
            "tax":20,"name": "Auchan piles alcaline LR6 x8",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 2.9
        },
        {
            "tax":20,"name": "Auchan Mieux Vivre allume feu 100% naturel x24",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 1.11
        },
        {
            "tax":20,"name": "Auchan pile rechargeable HR06 2500mah x4",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 9.9
        },
        {
            "tax":20,"name": "boite de cotillons pour 10 personnes",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 4.99
        },
        {
            "tax":20,"name": "Auchan pile rechargeable HR03 1000mah x4",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 8.9
        },
        {
            "tax":20,"name": "papier cadeau Noel 10mx0,70m",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 1.99
        },
        {
            "tax":20,"name": "Duracell 2032 x2",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 7.89
        },
        {
            "tax":20,"name": "Auchan piles alcaline LR14 x2",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 2.9
        },
        {
            "tax":20,"name": "Auchan allume feu cubes sans odeur x24",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 1.78
        },
        {
            "tax":20,"name": "Auchan piles alcaline LR3 AAA x4",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 1.5
        },
        {
            "tax":20,"name": "Auchan piles alcaline LR6 AA x4",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 1.5
        },
        {
            "tax":20,"name": "Auchan allume feu cube sous sachet x20",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 2.43
        },
        {
            "tax":20,"name": "Auchan allume feu gel 1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 3.23
        },
        {
            "tax":20,"name": "Zip allume feux classique sans odeur x40",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 2.11
        },
        {
            "tax":20,"name": "Auchan papier cadeau metal sparkling winter 2m x0,70m",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 1.6
        },
        {
            "tax":20,"name": "Auchan piles alcaline LR20 x2",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 2.9
        },
        {
            "tax":20,"name": "Duracell plus power AAA x8",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 9.99
        },
        {
            "tax":20,"name": "Auchan pile alcaline 9v 6LR61",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 1.9
        },
        {
            "tax":20,"name": "Dim collant body touch noir transparent 20D taille 3",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 6.59
        },
        {
            "tax":20,"name": "Dim collant body touch opaque noir 40D taille 3",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 8.99
        },
        {
            "tax":20,"name": "In Extenso collant ventre plat noir 25D taille 3",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 4.99
        },
        {
            "tax":20,"name": "Dim collant body touch opaque noir 40D taille 2",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 8.99
        },
        {
            "tax":20,"name": "Dim collant body touch noir transparent 20D taille 2",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 6.59
        },
        {
            "tax":20,"name": "Dim collant teint soleil ventre clair taille 2",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 8.59
        },
        {
            "tax":20,"name": "Dim mi-bas maxi format longue duree capri 35/41 x4 paires",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 3.99
        },
        {
            "tax":20,"name": "Dim collant body touch noir transparent 20D taille 4",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 6.59
        },
        {
            "tax":20,"name": "In Extenso collant ventre plat noir 25D taille 2",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 4.99
        },
        {
            "tax":20,"name": "Dim collant body touch opaque noir 40D taille 4",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 8.99
        },
        {
            "tax":20,"name": "Dim mi-bas noir x4 taille 35/41",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 3.99
        },
        {
            "tax":20,"name": "In Extenso collant ventre plat noir 25D taille 4",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 4.99
        },
        {
            "tax":20,"name": "Dim socquette noir x4 taille 35/41",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 3.99
        },
        {
            "tax":20,"name": "Dim collant teint soleil ventre clair taille 4",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 8.59
        },
        {
            "tax":20,"name": "Dim socquette capri x4 taille 35/41",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 3.99
        },
        {
            "tax":20,"name": "Dim socquette daim x4 taille 35/41",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 3.99
        },
        {
            "tax":20,"name": "Dim protege pieds clair x4 taille 39/42",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 5.99
        },
        {
            "tax":20,"name": "Dim protege pieds clair x4 taille 35/38",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "maison",
            "unit": "each",
            "price": 5.99
        },
        {
            "tax":20,"name": "Mmm! saint felicien 180g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.03
        },
        {
            "tax":20,"name": "Raffin saucisson sec pur porc extra maigre 220g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 4.74
        },
        {
            "tax":20,"name": "Thomas le prince pur jus pomme bio 1l",
            "isBio": true,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.5
        },
        {
            "tax":20,"name": "Mmm! Saint Nectaire demi AOP 300g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 3.04
        },
        {
            "tax":20,"name": "Apremont vin de Savoie cuvee reservee 11,5deg -75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": true,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 5.29
        },
        {
            "tax":20,"name": "Alpina savoie crozets nature 400g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.77
        },
        {
            "tax":20,"name": "Mmm! cantal entre-deux 250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.7
        },
        {
            "tax":20,"name": "Vichy Celestins eau minerale naturelle gazeuse 6x1,25l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 3.36
        },
        {
            "tax":20,"name": "Raffin mini buchette pur porc nature 100g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.45
        },
        {
            "tax":20,"name": "Mondeuse vin de Savoie rouge cuvee reservee 12deg -75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": true,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 5.5
        },
        {
            "tax":20,"name": "Mmm! bleu d'Auvergne 125g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.32
        },
        {
            "tax":20,"name": "Auchan galette de ble noir x6 -300g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.5
        },
        {
            "tax":20,"name": "Saint Michel madeleine coquille pepite oeuf plein air 400g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.37
        },
        {
            "tax":20,"name": "Mmm! chevre sainte maure aop 250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 4.25
        },
        {
            "tax":20,"name": "Pierre Chanau IGP ile de beaute rose 11,5deg -75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 3.15
        },
        {
            "tax":20,"name": "Pietra biere 6deg canette 33cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": true,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.8
        },
        {
            "tax":20,"name": "Pierre Chanau vin de Corse rose 12,5deg -75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 4.25
        },
        {
            "tax":20,"name": "Marie quiche lorraine creme 400g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.58
        },
        {
            "tax":20,"name": "Picon Biere aperitif a l'orange 18deg -1l",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 9.83
        },
        {
            "tax":20,"name": "Mmm! mimolette vieille 200g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.64
        },
        {
            "tax":20,"name": "Auchan gaufres liegeoises x7 - 350g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.38
        },
        {
            "tax":20,"name": "Simon salade de thon 150g",
            "isBio": false,
            "containsMeat": true,
            "vegan": false,
            "alcool": true,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.19
        },
        {
            "tax":20,"name": "Ch'ti biere blonde 6,4deg -75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": true,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.41
        },
        {
            "tax":20,"name": "Rince Cochon 8,5deg -75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 3.31
        },
        {
            "tax":20,"name": "Auchan cigarettes gourmandes 180g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.01
        },
        {
            "tax":20,"name": "Verquin tetes brulees sticks fraise pomme 200g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.98
        },
        {
            "tax":20,"name": "Verquin tetes brulees fraise framboise kitache 135g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.88
        },
        {
            "tax":20,"name": "Ferme d'Anchin supreme d'asperge 98,5cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 3.88
        },
        {
            "tax":20,"name": "Rince Cochon biere ipa 6deg -75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": true,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 4.58
        },
        {
            "tax":20,"name": "pomme de terre de consommation filet 10kg",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 3.99
        },
        {
            "tax":20,"name": "Prince tout chocolat 300g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.2
        },
        {
            "tax":20,"name": "Rik & Rok barquette au chocolat 120g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 0.7
        },
        {
            "tax":20,"name": "Mmm! creme fraiche d'Isigny 396g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.32
        },
        {
            "tax":20,"name": "Lune de Miel miel de fleurs liquide doseur 500g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 4.38
        },
        {
            "tax":20,"name": "Michaud lune de miel tartimiel 250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.36
        },
        {
            "tax":20,"name": "Etorki fromage de brebis 180g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.87
        },
        {
            "tax":20,"name": "Mmm! pruneaux d'agen denoyautes 250g",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 2.19
        },
        {
            "tax":20,"name": "Lune de Miel miel de thym pot en verre 375g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 5.09
        },
        {
            "tax":20,"name": "Jurancon fruite reserve royale 12,5deg -75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 7.19
        },
        {
            "tax":20,"name": "Jurancon vendanges tardives moelleux Choix Prince 12deg -75cl",
            "isBio": false,
            "containsMeat": false,
            "vegan": true,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 11.0
        },
        {
            "tax":20,"name": "Istara p'tit basque 220g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 4.22
        },
        {
            "tax":20,"name": "Petit Basque yaourt de brebis sur lit de chataigne 2x125g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 1.86
        },
        {
            "tax":20,"name": "Lune de Miel miel de fleurs bio cremeux pot en carton 750g",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 8.23
        },
        {
            "tax":20,"name": "Lune de Miel miel d'acacia liquide pot en verre 375g",
            "isBio": false,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 5.01
        },
        {
            "tax":20,"name": "Lune de Miel miel de fleurs bio eco doseur 500g",
            "isBio": true,
            "containsMeat": false,
            "vegan": false,
            "alcool": false,
            "isFrozen": false,
            "category": "produits",
            "unit": "each",
            "price": 5.33
        }
    ]
);
