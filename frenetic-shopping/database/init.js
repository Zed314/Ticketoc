supermarket = db.getSiblingDB('supermarket');

supermarket.categories.insertMany(
    [
        {
           "name": "fruits",
           "tax": 5
        },
        {
           "name": "vegetables",
           "tax": 5
        },
        {
           "name": "housecleaning",
           "tax": 5
        },
        {
           "name": "meat",
           "tax": 10
        },
        {
           "name": "fish",
           "tax": 10
        },
        {
           "name": "seafruits",
           "tax": 10
        },
        {
           "name": "luxery",
           "tax": 20
        },
        {
           "name": "clothes",
           "tax": 20
        },
        {
           "name": "plants",
           "tax": 20
        },
        {
           "name": "everydaylife",
           "tax": 20
        },
        {
           "name": "greetingscard",
           "tax": 20
        },
        {
           "name": "health",
           "tax": 20
        },
        {
           "name": "bakery",
           "tax": 10
        },
        {
           "name": "junk",
           "tax": 30
        },
        {
           "name": "consumerelectronics",
           "tax":20
        },
        {
           "name": "movie",
           "tax":10
        },
        {
            "name": "animalbased",
           "tax":10
        },
        {
           "name":"generalfood",
           "tax":10
        }
    ]
);

supermarket.products.insertMany(
    [
        {
            "category": "movie",
            "name": "Matrix",
            "unit": "each",
            "price": 10.0,
            "notwith": [
                "Matrix"
            ]
        },
        {
            "category": "movie",
            "name": "Star Wars IV",
            "unit": "each",
            "price": 10.0,
            "notwith": [
                "Star Wars IV"
            ]
        },
        {
            "category": "movie",
            "name": "Star Wars V",
            "unit": "each",
            "price": 10.0,
            "notwith": [
                "Star Wars V"
            ]
        },
        {
            "category": "movie",
            "name": "Star Wars VI",
            "unit": "each",
            "notwith": [
                "Star Wars VI"
            ],
            "price": 10.0
        },
        {
            "category": "movie",
            "name": "Star Wars VII",
            "unit": "each",
            "notwith": [
                "Star Wars VII"
            ],
            "price": 10.0
        },
        {
            "category": "movie",
            "name": "Star Wars VIII",
            "unit": "each",
            "notwith": [
                "Star Wars VIII"
            ],
            "price": 10.0
        },
        {
            "category": "movie",
            "name": "Star Wars I",
            "unit": "each",
            "notwith": [
                "Star Wars I"
            ],
            "price": 10.0
        },
        {
            "category": "movie",
            "name": "Star Wars II",
            "unit": "each",
            "notwith": [
                "Star Wars II"
            ],
            "price": 10.0
        },
        {
            "category": "movie",
            "name": "Star Wars III",
            "unit": "each",
            "notwith": [
                "Star Wars III"
            ],
            "price": 10.0
        },
        {
            "category": "movie",
            "name": "The Lord of the Rings: The Fellowship of the Ring",
            "unit": "each",
            "notwith": [
                "The Lord of the Rings: The Fellowship of the Ring"
            ],
            "price": 10.0
        },
        {
            "category": "movie",
            "name": "The Lord of the Rings: The Two Towers",
            "unit": "each",
            "notwith": [
                "The Lord of the Rings: The Two Towers"
            ],
            "price": 10.0
        },
        {
            "category": "movie",
            "name": "The Lord of the Rings: The Return of the King",
            "unit": "each",
            "notwith": [
                "The Lord of the Rings: The Return of the King"
            ],
            "price": 10.0
        },
        {
            "category": "consumerelectronics",
            "name": "4K TV 200 inches",
            "unit": "each",
            "holidays": [
                "blackfriday"
            ],
            "notwith": [
                "4K TV 200 inches",
                "3D TV 100 inches",
                "Canon Camera",
                "Sony Camera"
            ],
            "price": 2099.0
        },
        {
            "category": "consumerelectronics",
            "name": "3D TV 100 inches",
            "unit": "each",
            "holidays": [
                "blackfriday"
            ],
            "notwith": [
                "4K TV 200 inches",
                "3D TV 100 inches",
                "Canon Camera",
                "Sony Camera"
            ],
            "price": 1499.0
        },
        {
            "category": "consumerelectronics",
            "name": "CD player",
            "unit": "each",
            "price": 20.0
        },
        {
            "category": "consumerelectronics",
            "name": "DVD player",
            "unit": "each",
            "price": 50.0
        },
        {
            "category": "consumerelectronics",
            "name": "Blu-ray player",
            "unit": "each",
            "notwith": [
                "DVD player"
            ],
            "price": 100.0
        },
        {
            "category": "consumerelectronics",
            "name": "Raspberry Pi",
            "unit": "each",
            "price": 40.0,
            "frequentlyboughtwith": [
                "Micro USB charger",
                "MicroSD Card (16Gb)"
            ]
        },
        {
            "category": "consumerelectronics",
            "name": "Micro USB charger",
            "unit": "each",
            "price": 10.0
        },
        {
            "category": "consumerelectronics",
            "name": "MicroSD Card (16Gb)",
            "unit": "each",
            "price": 10.0
        },
        {
            "category": "consumerelectronics",
            "name": "MicroSD Card (32Gb)",
            "unit": "each",
            "price": 15.0
        },
        {
            "category": "consumerelectronics",
            "name": "MicroSD Card (64Gb)",
            "unit": "each",
            "price": 25.0
        },
        {
            "category": "consumerelectronics",
            "name": "MicroSD Card (128Gb)",
            "unit": "each",
            "price": 50.0
        },
        {
            "category": "consumerelectronics",
            "name": "Canon Camera",
            "unit": "each",
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
            "price": 499.0
        },
        {
            "category": "consumerelectronics",
            "name": "Sony Camera",
            "unit": "each",
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
            "price": 499.0
        },
        {
            "category": "consumerelectronics",
            "name": "Chintendo Vi",
            "unit": "each",
            "holidays": [
                "christmas"
            ],
            "notwith": [
                "Chintendo Vi"
            ],
            "price": 10.99
        },
        {
            "category": "consumerelectronics",
            "name": "Webcam",
            "unit": "each",
            "price": 20.0
        },
        {
            "category": "consumerelectronics",
            "name": "iPhone X",
            "unit": "each",
            "notwith": [
                "Galaxy S9",
                "iPhone X"
            ],
            "price": 1230.0
        },
        {
            "category": "consumerelectronics",
            "name": "Galaxy S9",
            "unit": "each",
            "price": 20.0,
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
            "name": "Inkjet printer",
            "unit": "each",
            "price": 50.99,
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
            "name": "Inkjet Cartdrige",
            "unit": "each",
            "notwith": [
                "Laser printer",
                "Laser Cartdrige"
            ],
            "price": 50.00
        },
        {
            "category": "consumerelectronics",
            "name": "Laser printer",
            "unit": "each",
            "price": 300.99,
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
            "name": "Laser Cartdrige",
            "notwith": [
                "Inkjet printer",
                "Inkjet Cartdrige"
            ],
            "unit": "each",
            "price": 150.00
        },
        {
            "category": "junk",
            "name": "Nutella",
            "unit": "kg",
            "price": 4.0,
            "frequentlyboughtwith": [
                "Toast"
            ]
        },
        {
            "category": "junk",
            "name": "Chocolate Egg (0% chocolate)",
            "unit": "each",
            "price": 5.0,
            "restrictions": [
                "christmas"
            ],
            "holidays": [
                "easter"
            ]
        },
        {
            "category": "junk",
            "name": "Chocolate Egg (Fair trade chocolate)",
            "unit": "each",
            "price": 15.0,
            "restrictions": [
                "christmas"
            ],
            "holidays": [
                "easter"
            ]
        },
        {
            "category": "junk",
            "name": "Chocolate House",
            "unit": "each",
            "price": 5.0,
            "restrictions": [
                "easter"
            ],
            "holidays": [
                "easter"
            ]
        },
        {
            "category": "junk",
            "name": "Santa claus in chocolate",
            "unit": "each",
            "price": 5.0,
            "restrictions": [
                "christmas"
            ],
            "holidays": [
                "christmas"
            ]
        },
        {
            "category": "junk",
            "name": "Advent Calendar",
            "unit": "each",
            "price": 4.0,
            "restrictions": [
                "christmas"
            ],
            "holidays": [
                "christmas"
            ]
        },
        {
            "category": "junk",
            "name": "Mon Chéri",
            "unit": "each",
            "price": 10.0,
            "holidays": [
                "valentinesday"
            ]
        },
        {
            "category": "junk",
            "name": "Ferrero Rocher (with Extra Palm Oil)",
            "unit": "each",
            "price": 10.0,
            "holidays": [
                "easter",
                "newyearseve",
                "christmas"
            ]
        },
        {
            "category": "junk",
            "name": "Ferrero Rocher",
            "unit": "each",
            "price": 15.0,
            "holidays": [
                "easter",
                "newyearseve",
                "christmas"
            ]
        },
        {
            "category": "animalbased",
            "name": "Chicken Eggs",
            "unit": "dozen",
            "price": 5.0
        },
        {
            "category": "animalbased",
            "name": "Ducks Eggs",
            "unit": "half-dozen",
            "price": 5.0
        },
        {
            "category": "meat",
            "name": "Kangoroo",
            "unit": "kg",
            "price": 30
        },
        {
            "category": "meat",
            "name": "Dog",
            "unit": "kg",
            "price": 15
        },
        {
            "category": "fruits",
            "name": "Apple",
            "unit": "kg",
            "price": 1.30
        },
        {
            "category": "bakery",
            "name": "Baguette",
            "unit": "each",
            "price": 0.95
        },
        {
            "category": "bakery",
            "name": "Toast",
            "unit": "each",
            "price": 1.30
        },
        {
            "category": "bakery",
            "name": "Pain chocolat",
            "unit": "each",
            "price": 1.19
        },
        {
            "category": "fruits",
            "name": "Pear",
            "unit": "kg",
            "price": 1.50
        },
        {
            "category": "fruits",
            "name": "Banana",
            "unit": "kg",
            "price": 1.30
        },
        {
            "category": "fruits",
            "name": "Mango",
            "unit": "each",
            "price": 2.5
        },
        {
            "category": "fruits",
            "name": "Grape",
            "unit": "kg",
            "price": 2.5
        },
        {
            "category": "fruits",
            "name": "Kaki",
            "unit": "each",
            "price": 2.5
        },
        {
            "category": "vegetables",
            "name": "Topinambour",
            "unit": "kg",
            "price": 15.0
        },
        {
            "category": "vegetables",
            "name": "Potatoes",
            "unit": "kg",
            "price": 1.5
        },
        {
            "category": "vegetables",
            "name": "Salad",
            "unit": "each",
            "price": 1
        },
        {
            "category": "vegetables",
            "name": "Soup",
            "unit": "L",
            "price": 1
        },
        {
            "category": "everydaylife",
            "name": "Pasta Linguine",
            "unit": "kg",
            "price": 2
        },
        {
            "category": "everydaylife",
            "name": "Spaghetti",
            "unit": "kg",
            "frequentlyboughtwith": [
                "Bolognese sauce"
            ],
            "price": 2
        },
        {
            "category": "everydaylife",
            "name": "Spa'ghetto",
            "unit": "each",
            "frequentlyboughtwith": [
                "Bolognese sauce"
            ],
            "notwith": [
                "Spaghetti"
            ],
            "price": 0.10
        },
        {
            "category": "animalbased",
            "name": "Bolognese sauce",
            "unit": "kg",
            "price": 3
        },
        {
            "category": "everydaylife",
            "name": "Pesto sauce",
            "unit": "kg",
            "price": 4
        },
        {
            "category": "vegetables",
            "name": "Carrots",
            "unit": "kg",
            "price": 3.0
        },
        {
            "category": "everydaylife",
            "name": "Grated cheese",
            "unit": "kg",
            "price": 3.0
        },
        {
            "category": "vegetables",
            "name": "Falafel ball",
            "unit": "dozen",
            "price": 5.0
        },
        {
            "category": "vegetables",
            "name": "Mashed potatoes",
            "unit": "kg",
            "frequentlyboughtwith": [
                "Sliced ham",
                "Sliced ham (organic)"
            ],
            "price": 0.5
        },
        {
            "category": "meat",
            "name": "Beef",
            "unit": "kg",
            "price": 10
        },
        {
            "category": "meat",
            "name": "Sliced ham",
            "unit": "each",
            "price": 2.95
        },
        {
            "category": "meat",
            "name": "Sliced ham (organic)",
            "unit": "each",
            "price": 4.39
        },
        {
            "category": "meat",
            "name": "Lamb",
            "unit": "kg",
            "price": 8
        },
        {
            "category": "meat",
            "name": "Chicken",
            "unit": "kg",
            "price": 6
        },
        {
            "category": "meat",
            "name": "Duck",
            "unit": "kg",
            "price": 9
        },
        {
            "category": "fish",
            "name": "Clownfish",
            "unit": "each",
            "price": 15
        },
        {
            "category": "seafruits",
            "name": "Oysters",
            "unit": "dozen",
            "holidays": [
                "christmas",
                "newyearseve"
            ],
            "price": 15
        },
        {
            "category": "luxery",
            "name": "Snails",
            "unit": "dozen",
            "holidays": [
                "christmas",
                "newyearseve"
            ],
            "price": 10
        },
        {
            "category": "luxery",
            "name": "Foie gras",
            "unit": "each",
            "restrictions": [
                "christmas",
                "newyearseve"
            ],
            "holidays": [
                "christmas",
                "newyearseve"
            ],
            "price": 20
        },
        {
            "category": "clothes",
            "name": "Pants",
            "unit": "each",
            "price": 15
        },
        {
            "category": "clothes",
            "name": "Socks",
            "unit": "each",
            "price": 2
        },
        {
            "category": "clothes",
            "name": "T-Shirts",
            "unit": "each",
            "price": 10
        },
        {
            "category": "plants",
            "name": "Roses",
            "unit": "each",
            "price": 2,
            "holidays": [
                "valentinesday",
                "motherday"
            ]
        },
        {
            "category": "bakery",
            "name": "Galette des rois",
            "unit": "each",
            "price": 6.95,
            "restrictions": [
                "epiphany"
            ],
            "holidays": [
                "epiphany"
            ]
        },
        {
            "category": "plants",
            "name": "Lemon tree",
            "unit": "each",
            "price": 25
        },
        {
            "category": "plants",
            "name": "Apple tree",
            "unit": "each",
            "price": 30
        },
        {
            "category": "plants",
            "name": "Cactus",
            "unit": "each",
            "price": 5
        },
        {
            "category": "everydaylife",
            "name": "Toilet paper",
            "unit": "each",
            "price": 5
        },
        {
            "category": "greetingscard",
            "name": "Happy Birthday card",
            "unit": "each",
            "price": 2
        },
        {
            "category": "greetingscard",
            "name": "Marriage card",
            "unit": "each",
            "price": 2
        },
        {
            "category": "greetingscard",
            "name": "Merry Christmas card",
            "unit": "each",
            "price": 2,
            "restrictions": [
                "christmas"
            ],
            "holidays": [
                "christmas"
            ]
        },
        {
            "category": "greetingscard",
            "name": "New years card",
            "unit": "each",
            "price": 2,
            "holidays": [
                "newyearseve"
            ]
        },
        {
            "category": "health",
            "name": "Condoms (S)",
            "unit": "each",
            "holidays": [
                "valentinesday"
            ],
            "notwith": [
                "Condoms (M)",
                "Condoms (XL)",
                "Condoms (XXL)",
                "Condoms (XXXL) (aka Trash bags)"
            ],
            "price": 5
        },
        {
            "category": "health",
            "name": "Condoms (M)",
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
            "price": 5
        },
        {
            "category": "health",
            "name": "Condoms (XL)",
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
            "price": 5
        },
        {
            "category": "health",
            "name": "Condoms (XXL)",
            "unit": "each",
            "holidays": [
                "valentinesday"
            ],
            "notwith": [
                "Condoms (S)",
                "Condoms (M)",
                "Condoms (XXXL) (aka Trash bags)",
                "Condoms (XL)"
            ],
            "price": 5
        },
        {
            "category": "health",
            "name": "Condoms (XXXL) (aka Trash bags)",
            "unit": "each",
            "holidays": [
                "valentinesday"
            ],
            "notwith": [
                "Condoms (S)",
                "Condoms (M)",
                "Condoms (XXL)",
                "Condoms (XL)"
            ],
            "price": 5
        },
        {
            "category": "health",
            "name": "Lubriant (1L)",
            "unit": "each",
            "holidays": [
                "valentinesday"
            ],
            "price": 10
        },
        {
            "category": "junk",
            "name": "Marple Syrup",
            "unit": "each",
            "price": 5
        },
        {
            "category": "fruits",
            "name": "Apple juice",
            "unit": "each",
            "price": 2
        },
        {
            "category": "fruits",
            "name": "Pear juice",
            "unit": "each",
            "price": 5
        },
        {
            "category": "fruits",
            "name": "Orange juice",
            "unit": "each",
            "price": 3
        },
        {
            "category": "animalbased",
            "name": "Emmental",
            "unit": "each",
            "price": 4.0
        },
        {
            "category": "animalbased",
            "name": "Camembert",
            "unit": "each",
            "price": 5.0
        },
        {
            "category": "animalbased",
            "name": "Omelette du fromage",
            "unit": "each",
            "price": 4.38
        },
        {
            "category": "junk",
            "name": "Margherita Pizza",
            "unit": "each",
            "price": 3.00
        },
        {
            "category": "everydaylife",
            "name": "Coffee",
            "unit": "each",
            "price": 4.00
        },
        {
            "category": "everydaylife",
            "name": "Sugar",
            "unit": "each",
            "price": 3.00
        },
        {
            "category": "junk",
            "name": "Chewing gum",
            "unit": "each",
            "price": 2.00
        },
        {
            "category": "health",
            "name": "Toothbrush",
            "unit": "each",
            "price": 3.00
        },
        {
            "category": "health",
            "name": "Electric Toothbrush",
            "unit": "each",
            "frequentlyboughtwith": [
                "Extra brush for toothbrush"
            ],
            "price": 15.00
        },
        {
            "category": "health",
            "name": "Extra brush for toothbrush",
            "unit": "each",
            "price": 3.0
        },
        {
            "name": "banane bio sachet 600g",
            "category": "generalfood",
            "price": 1.89,
            "unit": "each"
        },
        {
            "name": "Auchan bio orange filet 1kg",
            "category": "generalfood",
            "price": 1.49,
            "unit": "each"
        },
        {
            "name": "Auchan bio carottes filiere sachet 1kg",
            "category": "generalfood",
            "price": 2.5,
            "unit": "each"
        },
        {
            "name": "courgettes bio barquette 1kg",
            "category": "generalfood",
            "price": 3.99,
            "unit": "each",
            "unit": "each"
        },
        {
            "name": "Lyre Bio poulet blanc 1,350kg",
            "category": "generalfood",
            "price": 14.79,
            "unit": "each"
        },
        {
            "name": "Auchan pommes de terre bio filet 2,5kg",
            "category": "generalfood",
            "price": 2.99,
            "unit": "each"
        },
        {
            "name": "courge butternut bio piece",
            "category": "generalfood",
            "price": 2.99,
            "unit": "each"
        },
        {
            "name": "Auchan Citron bio sachet 4 fruits",
            "category": "generalfood",
            "price": 1.49,
            "unit": "each"
        },
        {
            "name": "Auchan bio oignons filet 1kg",
            "category": "generalfood",
            "price": 2.99,
            "unit": "each"
        },
        {
            "name": "concombre bio piece",
            "category": "generalfood",
            "price": 1.99,
            "unit": "each"
        },
        {
            "name": "tomate ronde grappe bio barquette 500g",
            "category": "generalfood",
            "price": 1.99,
            "unit": "each"
        },
        {
            "name": "Auchan saumon fume Atlantique bio tranche x4 -120g",
            "category": "generalfood",
            "price": 5.5,
            "unit": "each"
        },
        {
            "name": "brocoli bio piece",
            "category": "generalfood",
            "price": 2.49,
            "unit": "each"
        },
        {
            "name": "pomme Juliet bio 1kg",
            "category": "generalfood",
            "price": 3.69,
            "unit": "each"
        },
        {
            "name": "Bonduelle feuille de chene bio sachet 100g",
            "category": "generalfood",
            "price": 2.02,
            "unit": "each"
        },
        {
            "name": "tomate cerise bio 500g",
            "category": "generalfood",
            "price": 2.69,
            "unit": "each"
        },
        {
            "name": "potimarron bio piece",
            "category": "generalfood",
            "price": 3.29,
            "unit": "each"
        },
        {
            "name": "orange a jus bio filet 2kg",
            "category": "generalfood",
            "price": 4.49,
            "unit": "each"
        },
        {
            "name": "Ovive truite fumee bio tranche x3 -100g",
            "category": "generalfood",
            "price": 4.2,
            "unit": "each"
        },
        {
            "name": "Auchan bio hache 5% -350g",
            "category": "generalfood",
            "price": 5.95,
            "unit": "each"
        },
        {
            "name": "Loue oeufs bio moyen x10",
            "category": "generalfood",
            "price": 4.46,
            "unit": "each"
        },
        {
            "name": "Loue oeufs fermiers gros bio x6",
            "category": "generalfood",
            "price": 3.08,
            "unit": "each"
        },
        {
            "name": "Auchan bio oeuf x10",
            "category": "generalfood",
            "price": 3.11,
            "unit": "each"
        },
        {
            "name": "Auchan bio lait equitable entier bouteille 6x1l",
            "category": "generalfood",
            "price": 8.1,
            "unit": "each"
        },
        {
            "name": "Auchan bio lait equitable demi-ecreme bouteille 6x1l",
            "category": "generalfood",
            "price": 5.94,
            "unit": "each"
        },
        {
            "name": "Fleury Michon bio jambon superieur sans couenne 4 tranches",
            "category": "generalfood",
            "price": 4.58,
            "unit": "each"
        },
        {
            "name": "Herta bio jambon sans nitrate a l'etouffe 4 tranches 120g",
            "category": "generalfood",
            "price": 5.02,
            "unit": "each"
        },
        {
            "name": "Lactel matin leger bio sans lactose 1,2% U.H.T. 6x1l",
            "category": "generalfood",
            "price": 10.92,
            "unit": "each"
        },
        {
            "name": "Auchan Bio Ravioli ricotta 250g",
            "category": "generalfood",
            "price": 2.45,
            "unit": "each"
        },
        {
            "name": "Lactel lait demi-ecreme bio U.H.T. bouteille 6x1l",
            "category": "generalfood",
            "price": 7.26,
            "unit": "each"
        },
        {
            "name": "Candia grandlait bio demi-ecreme 6x1l",
            "category": "generalfood",
            "price": 7.92,
            "unit": "each"
        },
        {
            "name": "Fleury Michon bio blanc poulet taux sel reduit 4 tranches",
            "category": "generalfood",
            "price": 4.43,
            "unit": "each"
        },
        {
            "name": "Auchan bio oeufs x15",
            "category": "generalfood",
            "price": 4.56,
            "unit": "each"
        },
        {
            "name": "Auchan bio parmigiano rape 50g",
            "category": "generalfood",
            "price": 0.99,
            "unit": "each"
        },
        {
            "name": "Bonjour Campagne boudin noir bio aux oignons x2 -200g",
            "category": "generalfood",
            "price": 3.79,
            "unit": "each"
        },
        {
            "name": "La Laitiere Yaourt bio au lait entier vanille 4x125g",
            "category": "generalfood",
            "price": 2.03,
            "unit": "each"
        },
        {
            "name": "Auchan bio galette de ble noir x4",
            "category": "generalfood",
            "price": 1.95,
            "unit": "each"
        },
        {
            "name": "Auchan bio beurre moule doux 250g",
            "category": "generalfood",
            "price": 2.38,
            "unit": "each"
        },
        {
            "name": "perle de rosee bio filiere 150g",
            "category": "generalfood",
            "price": 3.99,
            "unit": "each"
        },
        {
            "name": "Auchan bio petits pois  600g",
            "category": "generalfood",
            "price": 2.08,
            "unit": "each"
        },
        {
            "name": "Nocciolata pate a tartiner bio cacao et noisettes 700g",
            "category": "generalfood",
            "price": 8.05,
            "unit": "each"
        },
        {
            "name": "Auchan bio huile d'olive extra-vierge 75cl",
            "category": "generalfood",
            "price": 5.2,
            "unit": "each"
        },
        {
            "name": "Bjorg lait d'amande bio 1l",
            "category": "generalfood",
            "price": 2.69,
            "unit": "each"
        },
        {
            "name": "Auchan pur jus d'orange frais bio 1l",
            "category": "generalfood",
            "price": 2.9,
            "unit": "each"
        },
        {
            "name": "Lactel matin leger bio sans lactose 1,2% U.H.T. 6x1l",
            "category": "generalfood",
            "price": 10.92,
            "unit": "each"
        },
        {
            "name": "Lalande de Pomerol  bio chateau vieux rivieres 13deg 75cl",
            "category": "generalfood",
            "price": 14.79,
            "unit": "each"
        },
        {
            "name": "Lactel lait demi-ecreme bio U.H.T. bouteille 6x1l",
            "category": "generalfood",
            "price": 7.26,
            "unit": "each"
        },
        {
            "name": "Candia grandlait bio demi-ecreme 6x1l",
            "category": "generalfood",
            "price": 7.92,
            "unit": "each"
        },
        {
            "name": "Jardin Bio pate a tartiner noisette cacao 350g",
            "category": "generalfood",
            "price": 3.42,
            "unit": "each"
        },
        {
            "name": "Auchan bio muesli croustillant quinoa chocolat 500g",
            "category": "generalfood",
            "price": 3.69,
            "unit": "each"
        },
        {
            "name": "Pressade bio nectar multifruits 1,5l",
            "category": "generalfood",
            "price": 2.02,
            "unit": "each"
        },
        {
            "name": "Jardin Bio petits pois tres fins et carottes rondelles 660g",
            "category": "generalfood",
            "price": 2.67,
            "unit": "each"
        },
        {
            "name": "Thomas le prince pur jus pomme bio 1l",
            "category": "generalfood",
            "price": 2.5,
            "unit": "each"
        },
        {
            "name": "Auchan bio flocons d'avoine 500g",
            "category": "generalfood",
            "price": 1.66,
            "unit": "each"
        },
        {
            "name": "Jardin Bio haricots verts tres fins 660g",
            "category": "generalfood",
            "price": 2.36,
            "unit": "each"
        },
        {
            "name": "Nocciolata pate a tartiner bio 270g",
            "category": "generalfood",
            "price": 3.38,
            "unit": "each"
        },
        {
            "name": "Auchan riz thai bio 500g",
            "category": "generalfood",
            "price": 2.03,
            "unit": "each"
        },
        {
            "name": "Force Bio 100% pur jus de grenade 1l",
            "category": "generalfood",
            "price": 6.43,
            "unit": "each"
        },
        {
            "name": "Jardin Bio haricots beurre extra fins coupes bocal 660g",
            "category": "generalfood",
            "price": 4.19,
            "unit": "each"
        },
        {
            "name": "Jardin Bio lentilles cuisinees petits legumes 400g",
            "category": "generalfood",
            "price": 2.41,
            "unit": "each"
        },
        {
            "name": "Carryboo couches dermo sensitives 12/25kg x44 taille5",
            "category": "generalfood",
            "price": 18.66,
            "unit": "each"
        },
        {
            "name": "So'bio Etic eau micellaire nettoyante bebe 500ml",
            "category": "generalfood",
            "price": 8.08,
            "unit": "each"
        },
        {
            "name": "Cadum gel douche surgras miel de fleur bio 400ml",
            "category": "generalfood",
            "price": 2.69,
            "unit": "each"
        },
        {
            "name": "Hipp bio haricots verts p. de terre poulet 2x190g des 6 mois",
            "category": "generalfood",
            "price": 2.47,
            "unit": "each"
        },
        {
            "name": "Carryboo batonnets securite bebe x50",
            "category": "generalfood",
            "price": 1.32,
            "unit": "each"
        },
        {
            "name": "Hipp bio mon premier biscuit boite 180g des 6 mois",
            "category": "generalfood",
            "price": 2.95,
            "unit": "each"
        },
        {
            "name": "Auchan baby bio maxi carre x40",
            "category": "generalfood",
            "price": 1.77,
            "unit": "each"
        },
        {
            "name": "Hipp bio menus tagliatelle legume colin 2x190g des8mois",
            "category": "generalfood",
            "price": 2.47,
            "unit": "each"
        },
        {
            "name": "Eveil bio nature croissance 6x1l",
            "category": "generalfood",
            "price": 11.28,
            "unit": "each"
        },
        {
            "name": "Carryboo couches dermo sensitives 4/9kg x54 taille 3",
            "category": "generalfood",
            "price": 18.66,
            "unit": "each"
        },
        {
            "name": "So'Bio Etic gel lavant tres doux bebe 500ml",
            "category": "generalfood",
            "price": 8.08,
            "unit": "each"
        },
        {
            "name": "Hipp bio soupe 6 legumes semoule brique 2x250ml des 8mois",
            "category": "generalfood",
            "price": 2.58,
            "unit": "each"
        },
        {
            "name": "Hipp bio mes premieres cereales 250g des 4 mois",
            "category": "generalfood",
            "price": 2.89,
            "unit": "each"
        },
        {
            "name": "Auchan Baby Bio croissance 10 mois a 3 ans 6x1l",
            "category": "generalfood",
            "price": 10.32,
            "unit": "each"
        },
        {
            "name": "Babybio pot bio pommes bananes 2x130g  des4mois",
            "category": "generalfood",
            "price": 1.93,
            "unit": "each"
        },
        {
            "name": "Hipp croissance bio format biberon 6x25cl des 10 mois",
            "category": "generalfood",
            "price": 5.58,
            "unit": "each"
        },
        {
            "name": "Hipp bio 100% fruits pommes bananes fruits rouges 4x100g 6m",
            "category": "generalfood",
            "price": 2.22,
            "unit": "each"
        },
        {
            "name": "Hipp bio risotto legumes petits pois poulet 260g des 18 mois",
            "category": "generalfood",
            "price": 2.38,
            "unit": "each"
        },
        {
            "name": "Babybio mirabelle lorraine pomme aquitaine 2x130g des 4 mois",
            "category": "generalfood",
            "price": 2.49,
            "unit": "each"
        },
        {
            "name": "Good Gout bio ratatouille de quinoa 190g des 6mois",
            "category": "generalfood",
            "price": 2.91,
            "unit": "each"
        },
        {
            "name": "Auchan environnement papier toilette blanc rouleau x16",
            "category": "generalfood",
            "price": 6.15,
            "unit": "each"
        },
        {
            "name": "Auchan Mieux Vivre allume feu 100% naturel x24",
            "category": "generalfood",
            "price": 1.11,
            "unit": "each"
        },
        {
            "name": "Arbre Vert lessive diluee vegetal 30 lavages 2l + recharge",
            "category": "generalfood",
            "price": 10.65,
            "unit": "each"
        },
        {
            "name": "Arbre Vert lessive vegetal recharge ecolabel 30 lavages 2l",
            "category": "generalfood",
            "price": 5.59,
            "unit": "each"
        },
        {
            "name": "Arbre Vert lessive vegetale ecolabel 45 lavages 3l",
            "category": "generalfood",
            "price": 10.32,
            "unit": "each"
        },
        {
            "name": "Auchan environnement essuie-tout maxi rouleau x2",
            "category": "generalfood",
            "price": 2.23,
            "unit": "each"
        },
        {
            "name": "Maison Verte lessive ecolabel fraicheur ete 40 lavages 2,4l",
            "category": "generalfood",
            "price": 8.81,
            "unit": "each"
        },
        {
            "name": "Arbre Vert liquide vaisselle ecologique amande 500ml",
            "category": "generalfood",
            "price": 1.53,
            "unit": "each"
        },
        {
            "name": "Arbre Vert liquide vaisselle ecologique peau sensible 500ml",
            "category": "generalfood",
            "price": 1.53,
            "unit": "each"
        },
        {
            "name": "Vademecum dentifrice bio protection complete 75ml",
            "category": "generalfood",
            "price": 2.83,
            "unit": "each"
        },
        {
            "name": "Auchan sacs poubelle 100% recyclable lien classique 10x50l",
            "category": "generalfood",
            "price": 2.9,
            "unit": "each"
        },
        {
            "name": "Cadum gel douche surgras miel de fleur bio 400ml",
            "category": "generalfood",
            "price": 2.69,
            "unit": "each"
        },
        {
            "name": "Auchan disques a demaquiller bio x70",
            "category": "generalfood",
            "price": 1.24,
            "unit": "each"
        },
        {
            "name": "Auchan Mieux Vivre vinaigre menager 100% naturel 1l",
            "category": "generalfood",
            "price": 1.25,
            "unit": "each"
        },
        {
            "name": "Auchan gel wc detartrant ecologique 750ml",
            "category": "generalfood",
            "price": 1.09,
            "unit": "each"
        },
        {
            "name": "Auchan sac poubelle 100% recycle lien classique 15x30l",
            "category": "generalfood",
            "price": 1.15,
            "unit": "each"
        },
        {
            "name": "L'Arbre Vert bien etre creme douche amande douce bio 250ml",
            "category": "generalfood",
            "price": 1.95,
            "unit": "each"
        },
        {
            "name": "So'Bio Etic gel pur aloe vera peau sensible reactive 125ml",
            "category": "generalfood",
            "price": 10.7,
            "unit": "each"
        },
        {
            "name": "So Bio Etic plaisir d'orient huile pure argan 100ml",
            "category": "generalfood",
            "price": 12.3,
            "unit": "each"
        },
        {
            "name": "L'Arbre Vert bien etre creme de douche vanille bio 250ml",
            "category": "generalfood",
            "price": 1.95,
            "unit": "each"
        },
        {
            "name": "Auchan lait demi-ecreme U.H.T. brique 8x1l",
            "category": "generalfood",
            "price": 6.08,
            "unit": "each"
        },
        {
            "name": "Auchan oeufs moyen de poules elevees en plein air x12",
            "category": "generalfood",
            "price": 2.65,
            "unit": "each"
        },
        {
            "name": "Auchan lait demi-ecreme bouteille 6x1l",
            "category": "generalfood",
            "price": 4.98,
            "unit": "each"
        },
        {
            "name": "Auchan oeuf gros de poules elevees en plein air x12",
            "category": "generalfood",
            "price": 2.69,
            "unit": "each"
        },
        {
            "name": "Loue oeufs bio moyen x10",
            "category": "generalfood",
            "price": 4.46,
            "unit": "each"
        },
        {
            "name": "Auchan creme legere semi-epaisse 3x20cl",
            "category": "generalfood",
            "price": 2.04,
            "unit": "each"
        },
        {
            "name": "Pouce lait demi-ecreme brique 6x1l",
            "category": "generalfood",
            "price": 3.84,
            "unit": "each"
        },
        {
            "name": "Paysan Breton beurre moule doux 500g",
            "category": "generalfood",
            "price": 4.65,
            "unit": "each"
        },
        {
            "name": "Loue oeufs fermiers gros bio x6",
            "category": "generalfood",
            "price": 3.08,
            "unit": "each"
        },
        {
            "name": "Auchan oeufs moyens dates au jour de ponte x12",
            "category": "generalfood",
            "price": 1.83,
            "unit": "each"
        },
        {
            "name": "Auchan oeufs de poules elevees en plein air label rouge x12",
            "category": "generalfood",
            "price": 3.29,
            "unit": "each"
        },
        {
            "name": "Auchan oeufs moyens dates du jour de ponte x20",
            "category": "generalfood",
            "price": 2.69,
            "unit": "each"
        },
        {
            "name": "Auchan creme epaisse entiere 494g",
            "category": "generalfood",
            "price": 1.47,
            "unit": "each"
        },
        {
            "name": "Auchan beurre moule doux 500g",
            "category": "generalfood",
            "price": 4.07,
            "unit": "each"
        },
        {
            "name": "Auchan creme U.H.T. liquide legere 3x20cl",
            "category": "generalfood",
            "price": 1.68,
            "unit": "each"
        },
        {
            "name": "Auchan beurre tendre doux 250g",
            "category": "generalfood",
            "price": 1.92,
            "unit": "each"
        },
        {
            "name": "C'est qui le Patron lait demi ecreme 6x1l",
            "category": "generalfood",
            "price": 5.94,
            "unit": "each"
        },
        {
            "name": "Elle et Vire beurre doux 60% mg barquette 250g",
            "category": "generalfood",
            "price": 1.77,
            "unit": "each"
        },
        {
            "name": "Lactel lait demi-ecreme U.H.T. bouteille 6x1l",
            "category": "generalfood",
            "price": 4.92,
            "unit": "each"
        },
        {
            "name": "Paysan Breton beurre moule doux 250g",
            "category": "generalfood",
            "price": 2.41,
            "unit": "each"
        },
        {
            "name": "Andros compote de pommes nature 16x100g",
            "category": "generalfood",
            "price": 3.49,
            "unit": "each"
        },
        {
            "name": "Bonne Maman mousse au chocolat au lait 4x50g",
            "category": "generalfood",
            "price": 2.12,
            "unit": "each"
        },
        {
            "name": "Yop mini saveur fraise 8x100g",
            "category": "generalfood",
            "price": 2.39,
            "unit": "each"
        },
        {
            "name": "Perle de lait vanille 8x125g",
            "category": "generalfood",
            "price": 2.92,
            "unit": "each"
        },
        {
            "name": "Auchan mousse au chocolat au lait 8x12cl",
            "category": "generalfood",
            "price": 2.11,
            "unit": "each"
        },
        {
            "name": "Auchan yaourts brasses et mixes aux fruits 16x125g",
            "category": "generalfood",
            "price": 2.65,
            "unit": "each"
        },
        {
            "name": "P'tit Yop panache 6x180g",
            "category": "generalfood",
            "price": 2.5,
            "unit": "each"
        },
        {
            "name": "Nestle Viennois liegeois chocolat 12x100g",
            "category": "generalfood",
            "price": 3.26,
            "unit": "each"
        },
        {
            "name": "Bonne Maman mousse au chocolat aux oeufs frais 4x50g",
            "category": "generalfood",
            "price": 2.12,
            "unit": "each"
        },
        {
            "name": "Auchan liegeois chocolat 12x100g",
            "category": "generalfood",
            "price": 2.59,
            "unit": "each"
        },
        {
            "name": "Petits Filous tub's panaches 12x40g",
            "category": "generalfood",
            "price": 2.5,
            "unit": "each"
        },
        {
            "name": "Actimel gout fraise 12x100g",
            "category": "generalfood",
            "price": 4.26,
            "unit": "each"
        },
        {
            "name": "Danette pop chocolat bille 3chocolats x4 -468g",
            "category": "generalfood",
            "price": 2.09,
            "unit": "each"
        },
        {
            "name": "Yoplait yaourts natures sucres 16x125g",
            "category": "generalfood",
            "price": 2.55,
            "unit": "each"
        },
        {
            "name": "Jockey stracciatella 4x120g",
            "category": "generalfood",
            "price": 1.81,
            "unit": "each"
        },
        {
            "name": "Petits Filous aux fruits 24x50g",
            "category": "generalfood",
            "price": 2.69,
            "unit": "each"
        },
        {
            "name": "Auchan tiramisu au speculos au mascarpone 2x100g",
            "category": "generalfood",
            "price": 2.14,
            "unit": "each"
        },
        {
            "name": "Actimel nature sucre 12x100g",
            "category": "generalfood",
            "price": 4.26,
            "unit": "each"
        },
        {
            "name": "Jockey fromage blanc nature 20%mg 1kg",
            "category": "generalfood",
            "price": 1.79,
            "unit": "each"
        },
        {
            "name": "Nestle Viennois mousse liegeoise chocolat 8x90g",
            "category": "generalfood",
            "price": 2.51,
            "unit": "each"
        },
        {
            "name": "Auchan raclette tranche 400g",
            "category": "generalfood",
            "price": 3.85,
            "unit": "each"
        },
        {
            "name": "Auchan emmental rape francais 350g",
            "category": "generalfood",
            "price": 2.5,
            "unit": "each"
        },
        {
            "name": "Auchan emmental rape francais 200g",
            "category": "generalfood",
            "price": 1.45,
            "unit": "each"
        },
        {
            "name": "Auchan emmental rape 3x70g",
            "category": "generalfood",
            "price": 1.5,
            "unit": "each"
        },
        {
            "name": "Auchan emmental rape 750g",
            "category": "generalfood",
            "price": 4.95,
            "unit": "each"
        },
        {
            "name": "Auchan rape francais 500g",
            "category": "generalfood",
            "price": 3.4,
            "unit": "each"
        },
        {
            "name": "Fauquet maroilles sorbais AOP 575g",
            "category": "generalfood",
            "price": 7.66,
            "unit": "each"
        },
        {
            "name": "Auchan fromage pour tartiflette 500g",
            "category": "generalfood",
            "price": 3.33,
            "unit": "each"
        },
        {
            "name": "Auchan emmental francais 400g",
            "category": "generalfood",
            "price": 3.01,
            "unit": "each"
        },
        {
            "name": "Auchan mimolette 290g",
            "category": "generalfood",
            "price": 2.7,
            "unit": "each"
        },
        {
            "name": "Auchan des de mimolette et edam 150g",
            "category": "generalfood",
            "price": 1.95,
            "unit": "each"
        },
        {
            "name": "Auchan emmental francais 250g",
            "category": "generalfood",
            "price": 1.93,
            "unit": "each"
        },
        {
            "name": "Coeur de Lion coulommiers portion x10 -350g",
            "category": "generalfood",
            "price": 3.53,
            "unit": "each"
        },
        {
            "name": "Auchan coeur a coeur 300g",
            "category": "generalfood",
            "price": 2.39,
            "unit": "each"
        },
        {
            "name": "Auchan comte AOP 450g",
            "category": "generalfood",
            "price": 5.05,
            "unit": "each"
        },
        {
            "name": "Caprice des Dieux 200g",
            "category": "generalfood",
            "price": 2.63,
            "unit": "each"
        },
        {
            "name": "Babybel mini filet x20 -440g",
            "category": "generalfood",
            "price": 5.72,
            "unit": "each"
        },
        {
            "name": "Entremont parmigiano reggiano rape AOP 60g",
            "category": "generalfood",
            "price": 1.64,
            "unit": "each"
        },
        {
            "name": "Auchan fromage a tartiner nature 300g",
            "category": "generalfood",
            "price": 1.8,
            "unit": "each"
        },
        {
            "name": "Auchan fromage a tartiner ail et fines herbes 250g",
            "category": "generalfood",
            "price": 1.92,
            "unit": "each"
        },
        {
            "name": "Fleury Michon blanc poulet dore 6 tranches 180g",
            "category": "generalfood",
            "price": 2.2,
            "unit": "each"
        },
        {
            "name": "Auchan jambon superieur decouenne degraisse 6 tranches 255g",
            "category": "generalfood",
            "price": 2.76,
            "unit": "each"
        },
        {
            "name": "Auchan jambon superieur decouenne tranche x4 -180g",
            "category": "generalfood",
            "price": 2.09,
            "unit": "each"
        },
        {
            "name": "Auchan jambon de paris decouenne degraisse tranche x4 -180g",
            "category": "generalfood",
            "price": 1.59,
            "unit": "each"
        },
        {
            "name": "Le Charcutier jambon sup.cuit torchon sans couenne x4 -240g",
            "category": "generalfood",
            "price": 3.99,
            "unit": "each"
        },
        {
            "name": "Auchan lardons fumes 2x150g",
            "category": "generalfood",
            "price": 2.02,
            "unit": "each"
        },
        {
            "name": "Le Charcutier jambon cuit avec couenne x4 -240g",
            "category": "generalfood",
            "price": 3.89,
            "unit": "each"
        },
        {
            "name": "Herta Knacki original taux sel reduit x10 -350g",
            "category": "generalfood",
            "price": 2.18,
            "unit": "each"
        },
        {
            "name": "Auchan ptit saucisson 200g",
            "category": "generalfood",
            "price": 2.49,
            "unit": "each"
        },
        {
            "name": "Le Charcutier jambon cru sec tranche x15 -200g",
            "category": "generalfood",
            "price": 3.99,
            "unit": "each"
        },
        {
            "name": "Auchan jambon paris decouenne tranche x6 -270g",
            "category": "generalfood",
            "price": 2.33,
            "unit": "each"
        },
        {
            "name": "Auchan jambon superieur sel reduit tranche x4 - 160g",
            "category": "generalfood",
            "price": 1.89,
            "unit": "each"
        },
        {
            "name": "Herta le bon Paris jambon cuit a l'etouffe 4 tranches 170g",
            "category": "generalfood",
            "price": 2.17,
            "unit": "each"
        },
        {
            "name": "Herta le bon Paris jambon cuit a l'etouffe 6 tranches 255g",
            "category": "generalfood",
            "price": 2.79,
            "unit": "each"
        },
        {
            "name": "Herta Knacki original taux sel reduit x6 -210g",
            "category": "generalfood",
            "price": 1.99,
            "unit": "each"
        },
        {
            "name": "St Agaune specialite saucisson sec 200g",
            "category": "generalfood",
            "price": 3.98,
            "unit": "each"
        },
        {
            "name": "Auchan allumettes bacon fumees 2x75g",
            "category": "generalfood",
            "price": 1.28,
            "unit": "each"
        },
        {
            "name": "Herta le bon Paris jambon fume 4 tranches 140g",
            "category": "generalfood",
            "price": 2.13,
            "unit": "each"
        },
        {
            "name": "Moroni chorizo doux 200g",
            "category": "generalfood",
            "price": 2.9,
            "unit": "each"
        },
        {
            "name": "Auchan blanc de poulet tranche x6 -180g",
            "category": "generalfood",
            "price": 2.09,
            "unit": "each"
        },
        {
            "name": "Auchan oeuf de lompe noir 100g",
            "category": "generalfood",
            "price": 2.48,
            "unit": "each"
        },
        {
            "name": "Le Gaulois cordon bleu x4 -400g",
            "category": "generalfood",
            "price": 3.62,
            "unit": "each"
        },
        {
            "name": "Auchan oeufs de lompe rouge 100g",
            "category": "generalfood",
            "price": 2.48,
            "unit": "each"
        },
        {
            "name": "Le Traiteur lasagne de boeuf 1kg",
            "category": "generalfood",
            "price": 6.95,
            "unit": "each"
        },
        {
            "name": "Auchan truite fumee tranche x4 - 100g",
            "category": "generalfood",
            "price": 3.01,
            "unit": "each"
        },
        {
            "name": "Le Gaulois cordon bleu de poulet x2 -200g",
            "category": "generalfood",
            "price": 1.87,
            "unit": "each"
        },
        {
            "name": "Auchan saumon fume mini tranche 100g",
            "category": "generalfood",
            "price": 3.17,
            "unit": "each"
        },
        {
            "name": "Auchan pate feuilletee 230g",
            "category": "generalfood",
            "price": 0.65,
            "unit": "each"
        },
        {
            "name": "Stoeffler Flammkueche max 550g",
            "category": "generalfood",
            "price": 4.37,
            "unit": "each"
        },
        {
            "name": "Auchan cordon bleu dinde x4 - 400g",
            "category": "generalfood",
            "price": 2.65,
            "unit": "each"
        },
        {
            "name": "Sodebo pizza crust emmental jambon 600g",
            "category": "generalfood",
            "price": 5.53,
            "unit": "each"
        },
        {
            "name": "Le Gaulois crousty chicken long filet's 400g",
            "category": "generalfood",
            "price": 4.85,
            "unit": "each"
        },
        {
            "name": "Auchan nuggets de poulet x10 -200g",
            "category": "generalfood",
            "price": 1.0,
            "unit": "each"
        },
        {
            "name": "Auchan saumon fume de Norvege mini x4 -140g",
            "category": "generalfood",
            "price": 5.39,
            "unit": "each"
        },
        {
            "name": "Auchan batonnets de surimi x36 -600g",
            "category": "generalfood",
            "price": 3.75,
            "unit": "each"
        },
        {
            "name": "Le Gaulois nuggets party 200g",
            "category": "generalfood",
            "price": 1.93,
            "unit": "each"
        },
        {
            "name": "Herta knacki vegetale x6 -210g",
            "category": "generalfood",
            "price": 2.49,
            "unit": "each"
        },
        {
            "name": "Auchan p'tit poisson pane au fromage x2 -200g",
            "category": "generalfood",
            "price": 2.44,
            "unit": "each"
        },
        {
            "name": "Auchan des de saumon fume 90g",
            "category": "generalfood",
            "price": 3.49,
            "unit": "each"
        },
        {
            "name": "Lustucru pastabox tortellini au 4 fromages 360g",
            "category": "generalfood",
            "price": 2.75,
            "unit": "each"
        },
        {
            "name": "banane bio sachet 600g",
            "category": "generalfood",
            "price": 1.89,
            "unit": "each"
        },
        {
            "name": "kiwi piece",
            "category": "generalfood",
            "price": 0.39,
            "unit": "each"
        },
        {
            "name": "banane sachet 1kg",
            "category": "generalfood",
            "price": 1.99,
            "unit": "each"
        },
        {
            "name": "pommes Pink Lady 6 unites",
            "category": "generalfood",
            "price": 2.99,
            "unit": "each"
        },
        {
            "name": "Rik & Rok clementine sans residus de pesticide 1kg",
            "category": "generalfood",
            "price": 1.99,
            "unit": "each"
        },
        {
            "name": "oranges pour le jus filet 3kg",
            "category": "generalfood",
            "price": 1.89,
            "unit": "each"
        },
        {
            "name": "bananes des Antilles 4 doigts",
            "category": "generalfood",
            "price": 1.99,
            "unit": "each"
        },
        {
            "name": "orange caissette 10kg",
            "category": "generalfood",
            "price": 7.99,
            "unit": "each"
        },
        {
            "name": "clementine en plateau 2,3kg",
            "category": "generalfood",
            "price": 3.99,
            "unit": "each"
        },
        {
            "name": "Auchan bio orange filet 1kg",
            "category": "generalfood",
            "price": 1.49,
            "unit": "each"
        },
        {
            "name": "clementine a deguster 1,5kg",
            "category": "generalfood",
            "price": 2.99,
            "unit": "each"
        },
        {
            "name": "kiwi jaune piece",
            "category": "generalfood",
            "price": 0.49,
            "unit": "each"
        },
        {
            "name": "Oranges a deguster sans residus de pesticides filet 2kg",
            "category": "generalfood",
            "price": 2.99,
            "unit": "each"
        },
        {
            "name": "Auchan Citron bio sachet 4 fruits",
            "category": "generalfood",
            "price": 1.49,
            "unit": "each"
        },
        {
            "name": "clementine a feuilles 1,5kg",
            "category": "generalfood",
            "price": 3.89,
            "unit": "each"
        },
        {
            "name": "kiwis pret a deguster barquette 500g",
            "category": "generalfood",
            "price": 2.99,
            "unit": "each"
        },
        {
            "name": "poire conference barquette 1kg",
            "category": "generalfood",
            "price": 2.49,
            "unit": "each"
        },
        {
            "name": "pomme Juliet bio 1kg",
            "category": "generalfood",
            "price": 3.69,
            "unit": "each"
        },
        {
            "name": "kiwi jaune x4",
            "category": "generalfood",
            "price": 3.49,
            "unit": "each"
        },
        {
            "name": "citron non traite apres recolte sachet 4 fruits 500g",
            "category": "generalfood",
            "price": 1.99,
            "unit": "each"
        },
        {
            "name": "courgettes filet 1kg",
            "category": "generalfood",
            "price": 2.99,
            "unit": "each"
        },
        {
            "name": "poireau en botte 1kg",
            "category": "generalfood",
            "price": 1.99,
            "unit": "each"
        },
        {
            "name": "Auchan pomme de terre salade vapeur sautee filet 2,5kg",
            "category": "generalfood",
            "price": 2.99,
            "unit": "each"
        },
        {
            "name": "Rik & Rok tomate cerise ronde en grappe 350g",
            "category": "generalfood",
            "price": 3.99,
            "unit": "each"
        },
        {
            "name": "tomate ronde en grappe barquette 1kg",
            "category": "generalfood",
            "price": 2.99,
            "unit": "each"
        },
        {
            "name": "concombre piece",
            "category": "generalfood",
            "price": 0.99,
            "unit": "each"
        },
        {
            "name": "Pomme de terre frite puree potage filet 2,5kg",
            "category": "generalfood",
            "price": 2.99,
            "unit": "each"
        },
        {
            "name": "endives sachet 1kg",
            "category": "generalfood",
            "price": 1.49,
            "unit": "each"
        },
        {
            "name": "carottes sachet 1kg",
            "category": "generalfood",
            "price": 1.29,
            "unit": "each"
        },
        {
            "name": "champignons blancs pieds entiers 300g",
            "category": "generalfood",
            "price": 0.99,
            "unit": "each"
        },
        {
            "name": "pomme de terre frite puree potage filet 5kg",
            "category": "generalfood",
            "price": 3.99,
            "unit": "each"
        },
        {
            "name": "Auchan pomme de terre rouge salade vapeur sautee filet 2,5kg",
            "category": "generalfood",
            "price": 2.99,
            "unit": "each"
        },
        {
            "name": "poivrons panaches sachet 500g",
            "category": "generalfood",
            "price": 1.69,
            "unit": "each"
        },
        {
            "name": "tomates cerises meli melo barquette 350g",
            "category": "generalfood",
            "price": 3.29,
            "unit": "each"
        },
        {
            "name": "Auchan bio carottes filiere sachet 1kg",
            "category": "generalfood",
            "price": 2.5,
            "unit": "each"
        },
        {
            "name": "patate douce barquette 1kg",
            "category": "generalfood",
            "price": 3.59,
            "unit": "each"
        },
        {
            "name": "oignons filet 1kg",
            "category": "generalfood",
            "price": 0.99,
            "unit": "each"
        },
        {
            "name": "courgettes bio barquette 1kg",
            "category": "generalfood",
            "price": 3.99,
            "unit": "each"
        },
        {
            "name": "champignons blancs pieds coupes barquette 500g",
            "category": "generalfood",
            "price": 2.29,
            "unit": "each"
        },
        {
            "name": "Auchan pommes de terre bio filet 2,5kg",
            "category": "generalfood",
            "price": 2.99,
            "unit": "each"
        },
        {
            "name": "Auchan feuille de chene salade sachet 125g",
            "category": "generalfood",
            "price": 1.27,
            "unit": "each"
        },
        {
            "name": "Florette coeur de laitue salade sachet 200g",
            "category": "generalfood",
            "price": 1.82,
            "unit": "each"
        },
        {
            "name": "Bonduelle feuille de chene salade sachet 175g",
            "category": "generalfood",
            "price": 2.12,
            "unit": "each"
        },
        {
            "name": "Auchan laitue iceberg salade sachet 300g",
            "category": "generalfood",
            "price": 1.17,
            "unit": "each"
        },
        {
            "name": "Bonduelle mache et roquette salade sachet 100g",
            "category": "generalfood",
            "price": 1.62,
            "unit": "each"
        },
        {
            "name": "Auchan coeur de laitue sachet 200g",
            "category": "generalfood",
            "price": 1.43,
            "unit": "each"
        },
        {
            "name": "Auchan bouquet de mache salade sachet 125g",
            "category": "generalfood",
            "price": 1.43,
            "unit": "each"
        },
        {
            "name": "Florette salade mache maxi salade sachet 200g",
            "category": "generalfood",
            "price": 2.33,
            "unit": "each"
        },
        {
            "name": "Bonduelle feuille de chene bio sachet 100g",
            "category": "generalfood",
            "price": 2.02,
            "unit": "each"
        },
        {
            "name": "Bonduelle jeunes pousses salade sachet 145g",
            "category": "generalfood",
            "price": 2.09,
            "unit": "each"
        },
        {
            "name": "Florette radis long 200g",
            "category": "generalfood",
            "price": 2.4,
            "unit": "each"
        },
        {
            "name": "Crealine ecrase de pommes de terre aux 2carottes 2x200g",
            "category": "generalfood",
            "price": 2.62,
            "unit": "each"
        },
        {
            "name": "Crudette carotte baby 200g",
            "category": "generalfood",
            "price": 1.94,
            "unit": "each"
        },
        {
            "name": "Florette melange croquant 180g",
            "category": "generalfood",
            "price": 1.52,
            "unit": "each"
        },
        {
            "name": "Bonduelle feuille de mache sachet 100g",
            "category": "generalfood",
            "price": 1.72,
            "unit": "each"
        },
        {
            "name": "Auchan mache bio salade sachet 100g",
            "category": "generalfood",
            "price": 2.06,
            "unit": "each"
        },
        {
            "name": "Mandar ciboulette 11g",
            "category": "generalfood",
            "price": 1.61,
            "unit": "each"
        },
        {
            "name": "Mandar menthe 11g",
            "category": "generalfood",
            "price": 1.61,
            "unit": "each"
        },
        {
            "name": "Sud'n'Sol tapenade olive Kalamata 150g",
            "category": "generalfood",
            "price": 2.91,
            "unit": "each"
        },
        {
            "name": "Auchan betteraves rouges entieres bio 500g",
            "category": "generalfood",
            "price": 1.29,
            "unit": "each"
        },
        {
            "name": "Auchan amandes grillees 200g",
            "category": "generalfood",
            "price": 3.7,
            "unit": "each"
        },
        {
            "name": "Auchan amandes en poudre 125g",
            "category": "generalfood",
            "price": 2.15,
            "unit": "each"
        },
        {
            "name": "Mmm! amande decortiquee 125g",
            "category": "generalfood",
            "price": 2.39,
            "unit": "each"
        },
        {
            "name": "Auchan pignons de pin 70g",
            "category": "generalfood",
            "price": 2.99,
            "unit": "each"
        },
        {
            "name": "Auchan noisettes decortiquees 125g",
            "category": "generalfood",
            "price": 2.39,
            "unit": "each"
        },
        {
            "name": "Auchan abricot moelleux 200g",
            "category": "generalfood",
            "price": 1.9,
            "unit": "each"
        },
        {
            "name": "Wonderful pistaches grillees et salees 250g",
            "category": "generalfood",
            "price": 5.41,
            "unit": "each"
        },
        {
            "name": "Daco 4 graines grillees sans sel 175g",
            "category": "generalfood",
            "price": 4.22,
            "unit": "each"
        },
        {
            "name": "Wonderful pistaches grillees non salees 250g",
            "category": "generalfood",
            "price": 5.41,
            "unit": "each"
        },
        {
            "name": "Color noix de pecan 150g",
            "category": "generalfood",
            "price": 9.8,
            "unit": "each"
        },
        {
            "name": "Wonderful pistache legerement salee 250g",
            "category": "generalfood",
            "price": 5.41,
            "unit": "each"
        },
        {
            "name": "Auchan pruneaux denoyautes 500g",
            "category": "generalfood",
            "price": 3.25,
            "unit": "each"
        },
        {
            "name": "Auchan trio gourmand 250g",
            "category": "generalfood",
            "price": 3.59,
            "unit": "each"
        },
        {
            "name": "Auchan cerneaux de noix 125g",
            "category": "generalfood",
            "price": 3.15,
            "unit": "each"
        },
        {
            "name": "Mmm! pruneaux d'agen denoyautes 250g",
            "category": "generalfood",
            "price": 2.19,
            "unit": "each"
        },
        {
            "name": "Auchan lentille verte 500g",
            "category": "generalfood",
            "price": 2.29,
            "unit": "each"
        },
        {
            "name": "Auchan pistaches 200g",
            "category": "generalfood",
            "price": 3.7,
            "unit": "each"
        },
        {
            "name": "Auchan noix de cajou grillees sans sel 200g",
            "category": "generalfood",
            "price": 4.23,
            "unit": "each"
        },
        {
            "name": "Mmm! datte medjoul 200g",
            "category": "generalfood",
            "price": 2.99,
            "unit": "each"
        },
        {
            "name": "Maitre Prunille arachides grillees 500g",
            "category": "generalfood",
            "price": 2.9,
            "unit": "each"
        },
        {
            "name": "Auchan pur jus d'orange sans pulpe 1l",
            "category": "generalfood",
            "price": 1.82,
            "unit": "each"
        },
        {
            "name": "Innocent jus d'orange sans pulpe 90cl",
            "category": "generalfood",
            "price": 2.05,
            "unit": "each"
        },
        {
            "name": "Andros pur jus d'orange sans pulpe 1,5l",
            "category": "generalfood",
            "price": 3.15,
            "unit": "each"
        },
        {
            "name": "Danao kung fu panda peche abricot 1l",
            "category": "generalfood",
            "price": 1.75,
            "unit": "each"
        },
        {
            "name": "Andros jus de clementines pressees avec pulpe 1.5l",
            "category": "generalfood",
            "price": 3.05,
            "unit": "each"
        },
        {
            "name": "Innocent ananas passion 90cl",
            "category": "generalfood",
            "price": 2.54,
            "unit": "each"
        },
        {
            "name": "Auchan pur jus d'orange frais bio 1l",
            "category": "generalfood",
            "price": 2.9,
            "unit": "each"
        },
        {
            "name": "Andros jus de pomme 1,5l",
            "category": "generalfood",
            "price": 3.15,
            "unit": "each"
        },
        {
            "name": "Innocent pomme poire peche 90cl",
            "category": "generalfood",
            "price": 2.54,
            "unit": "each"
        },
        {
            "name": "Innocent jus de pomme et framboise 90cl",
            "category": "generalfood",
            "price": 2.54,
            "unit": "each"
        },
        {
            "name": "Auchan jus de pomme 1l",
            "category": "generalfood",
            "price": 2.07,
            "unit": "each"
        },
        {
            "name": "Danao kung fu panda multivitamine 1l",
            "category": "generalfood",
            "price": 1.75,
            "unit": "each"
        },
        {
            "name": "Innocent jus d'orange et carotte 90cl",
            "category": "generalfood",
            "price": 2.54,
            "unit": "each"
        },
        {
            "name": "Andros jus orange 1,5l",
            "category": "generalfood",
            "price": 3.05,
            "unit": "each"
        },
        {
            "name": "Auchan jus d'orange frais avec pulpe  1l",
            "category": "generalfood",
            "price": 1.82,
            "unit": "each"
        },
        {
            "name": "Tropicana pur jus d'orange sans pulpe 1l",
            "category": "generalfood",
            "price": 2.44,
            "unit": "each"
        },
        {
            "name": "Andros jus d'ananas presses 1l",
            "category": "generalfood",
            "price": 2.6,
            "unit": "each"
        },
        {
            "name": "Sunny Delight doux california 1,25l",
            "category": "generalfood",
            "price": 1.93,
            "unit": "each"
        },
        {
            "name": "Auchan jus de raisin 1l",
            "category": "generalfood",
            "price": 2.28,
            "unit": "each"
        },
        {
            "name": "Tropicana pur jus de fruits reveil fruite 1l",
            "category": "generalfood",
            "price": 2.09,
            "unit": "each"
        },
        {
            "name": "Auchan pain a toast special foie gras 250g",
            "category": "generalfood",
            "price": 1.15,
            "unit": "each"
        },
        {
            "name": "La Fournee Doree gache tranchee au sucre 500g",
            "category": "generalfood",
            "price": 2.78,
            "unit": "each"
        },
        {
            "name": "Auchan briochettes rondes x12 -480g",
            "category": "generalfood",
            "price": 1.52,
            "unit": "each"
        },
        {
            "name": "Pasquier pitch barre chocolat au lait x8 -310g",
            "category": "generalfood",
            "price": 2.4,
            "unit": "each"
        },
        {
            "name": "Harry's brioche tranchee 700g",
            "category": "generalfood",
            "price": 2.35,
            "unit": "each"
        },
        {
            "name": "pain de mie nature sans sucre ajoute 500g",
            "category": "generalfood",
            "price": 1.15,
            "unit": "each"
        },
        {
            "name": "Auchan brioche tranchee aux pepites de chocolat 500g",
            "category": "generalfood",
            "price": 1.76,
            "unit": "each"
        },
        {
            "name": "Auchan gaufre liegeoise au chocolat belge x7 - 345g",
            "category": "generalfood",
            "price": 2.19,
            "unit": "each"
        },
        {
            "name": "Harrys beau et bon pain de mie cereales 325g",
            "category": "generalfood",
            "price": 1.52,
            "unit": "each"
        },
        {
            "name": "Auchan croissant x10 -400g",
            "category": "generalfood",
            "price": 1.85,
            "unit": "each"
        },
        {
            "name": "Auchan pain de mie tranche extra moelleux nature 500g",
            "category": "generalfood",
            "price": 0.69,
            "unit": "each"
        },
        {
            "name": "pain de campagne tranche 400g",
            "category": "generalfood",
            "price": 1.1,
            "unit": "each"
        },
        {
            "name": "Lotus gaufres de Liege au chocolat x7 -363g",
            "category": "generalfood",
            "price": 2.97,
            "unit": "each"
        },
        {
            "name": "Pasquier croissant x8 -320g",
            "category": "generalfood",
            "price": 1.76,
            "unit": "each"
        },
        {
            "name": "Auchan pancakes sucres x8 -176g",
            "category": "generalfood",
            "price": 1.8,
            "unit": "each"
        },
        {
            "name": "Auchan pains au chocolat 16x45g",
            "category": "generalfood",
            "price": 2.65,
            "unit": "each"
        },
        {
            "name": "Auchan petits pains precuits x6 300g",
            "category": "generalfood",
            "price": 0.82,
            "unit": "each"
        },
        {
            "name": "Auchan pain hot dog x4 -250g",
            "category": "generalfood",
            "price": 1.29,
            "unit": "each"
        },
        {
            "name": "Harry's 100% mie nature 500g",
            "category": "generalfood",
            "price": 1.51,
            "unit": "each"
        },
        {
            "name": "Auchan toast rond nature 280g",
            "category": "generalfood",
            "price": 1.08,
            "unit": "each"
        },
        {
            "name": "Auchan steak hache facon bouchere 5% 4x100g",
            "category": "generalfood",
            "price": 5.8,
            "unit": "each"
        },
        {
            "name": "filet mignon de porc 900g",
            "category": "generalfood",
            "price": 14.5,
            "unit": "each"
        },
        {
            "name": "roti de porc filet 600g",
            "category": "generalfood",
            "price": 5.6,
            "unit": "each"
        },
        {
            "name": "Auchan cheveux d'ange 5% -500g",
            "category": "generalfood",
            "price": 6.2,
            "unit": "each"
        },
        {
            "name": "bourguignon ** a mijoter 600g",
            "category": "generalfood",
            "price": 5.9,
            "unit": "each"
        },
        {
            "name": "roti de boeuf tranche ** 800g",
            "category": "generalfood",
            "price": 12.9,
            "unit": "each"
        },
        {
            "name": "Auchan cheveux d'ange 15%mg 700g",
            "category": "generalfood",
            "price": 6.95,
            "unit": "each"
        },
        {
            "name": "cervelas orloff x4 -560g",
            "category": "generalfood",
            "price": 3.9,
            "unit": "each"
        },
        {
            "name": "boeuf piece pour fondue 500g",
            "category": "generalfood",
            "price": 8.9,
            "unit": "each"
        },
        {
            "name": "Auchan steaks haches facon bouchere 15%mg 4x100g",
            "category": "generalfood",
            "price": 4.95,
            "unit": "each"
        },
        {
            "name": "Charal steaks haches 5%  4x100g",
            "category": "generalfood",
            "price": 6.05,
            "unit": "each"
        },
        {
            "name": "Mmm! steack hache charolais 12%mg  2x125g",
            "category": "generalfood",
            "price": 3.3,
            "unit": "each"
        },
        {
            "name": "Auchan cheveux d'ange 15% 400g",
            "category": "generalfood",
            "price": 4.25,
            "unit": "each"
        },
        {
            "name": "Auchan saucisse fumee x4 -360g",
            "category": "generalfood",
            "price": 2.9,
            "unit": "each"
        },
        {
            "name": "Auchan viande hachee vrac 5% -350g",
            "category": "generalfood",
            "price": 4.5,
            "unit": "each"
        },
        {
            "name": "cote de porc filet sans os x4 -400g",
            "category": "generalfood",
            "price": 3.9,
            "unit": "each"
        },
        {
            "name": "Auchan palette a la diable 1kg",
            "category": "generalfood",
            "price": 6.95,
            "unit": "each"
        },
        {
            "name": "Auchan chipolatas x6 -330g",
            "category": "generalfood",
            "price": 2.95,
            "unit": "each"
        },
        {
            "name": "Auchan tomates farcies x4 -600g",
            "category": "generalfood",
            "price": 3.95,
            "unit": "each"
        },
        {
            "name": "Auchan chair a saucisse pur porc 500g",
            "category": "generalfood",
            "price": 3.6,
            "unit": "each"
        },
        {
            "name": "Le Gaulois escalopes de poulet blanc 720g",
            "category": "generalfood",
            "price": 8.99,
            "unit": "each"
        },
        {
            "name": "Le Gaulois aiguillettes de poulet blanc 210g",
            "category": "generalfood",
            "price": 2.99,
            "unit": "each"
        },
        {
            "name": "Pouce filets de poulet 600g",
            "category": "generalfood",
            "price": 4.69,
            "unit": "each"
        },
        {
            "name": "Le Gaulois escalope de dinde extra tendre x2 -250g",
            "category": "generalfood",
            "price": 3.5,
            "unit": "each"
        },
        {
            "name": "Le Gaulois escalope de dinde x6 -720g",
            "category": "generalfood",
            "price": 7.82,
            "unit": "each"
        },
        {
            "name": "Auchan filet de poulet x2 -280g",
            "category": "generalfood",
            "price": 3.35,
            "unit": "each"
        },
        {
            "name": "Le Gaulois la belle escalope de poulet x2 -240g",
            "category": "generalfood",
            "price": 4.17,
            "unit": "each"
        },
        {
            "name": "Le Gaulois escalope de dinde extra fine x2 -240g",
            "category": "generalfood",
            "price": 3.5,
            "unit": "each"
        },
        {
            "name": "Lyre Bio poulet blanc 1,350kg",
            "category": "generalfood",
            "price": 14.79,
            "unit": "each"
        },
        {
            "name": "Le Gaulois frites de poulet panees x12 -200g",
            "category": "generalfood",
            "price": 2.0,
            "unit": "each"
        },
        {
            "name": "Lyre filet de poulet blanc x2 -280g",
            "category": "generalfood",
            "price": 5.39,
            "unit": "each"
        },
        {
            "name": "Pouce escalopes de dinde 600g",
            "category": "generalfood",
            "price": 5.19,
            "unit": "each"
        },
        {
            "name": "Pouce cuisses de poulet blanc 1kg",
            "category": "generalfood",
            "price": 3.79,
            "unit": "each"
        },
        {
            "name": "Fermiers de Loue filet de poulet blanc x2 -240g",
            "category": "generalfood",
            "price": 5.85,
            "unit": "each"
        },
        {
            "name": "Auchan cuisse de poulet blanc x2 - 550g",
            "category": "generalfood",
            "price": 2.89,
            "unit": "each"
        },
        {
            "name": "Pouce pilons poulet blanc 1kg",
            "category": "generalfood",
            "price": 4.19,
            "unit": "each"
        },
        {
            "name": "Le Gaulois nuggets de dinde barquette environ 50 -1kg",
            "category": "generalfood",
            "price": 6.9,
            "unit": "each"
        },
        {
            "name": "Le Gaulois cordons bleus x10 -1kg",
            "category": "generalfood",
            "price": 6.9,
            "unit": "each"
        },
        {
            "name": "Auchan canard aiguillettes 200g",
            "category": "generalfood",
            "price": 3.89,
            "unit": "each"
        },
        {
            "name": "Auchan poulet certifie jaune 1,4kg",
            "category": "generalfood",
            "price": 4.99,
            "unit": "each"
        },
        {
            "name": "paves de saumon d'Ecosse x4 -500g",
            "category": "generalfood",
            "price": 14.99,
            "unit": "each"
        },
        {
            "name": "pave de saumon ecossais x2 -250g",
            "category": "generalfood",
            "price": 7.99,
            "unit": "each"
        },
        {
            "name": "pave de truite x2 -240g",
            "category": "generalfood",
            "price": 5.99,
            "unit": "each"
        },
        {
            "name": "dos de cabillaud sans aretes 280g",
            "category": "generalfood",
            "price": 6.44,
            "unit": "each"
        },
        {
            "name": "Auchan pave de saumon filiere 125g",
            "category": "generalfood",
            "price": 3.75,
            "unit": "each"
        },
        {
            "name": "crevettes entieres cuites 40/60 -500g",
            "category": "generalfood",
            "price": 6.5,
            "unit": "each"
        },
        {
            "name": "crevette rose jumbo barquette 100g",
            "category": "generalfood",
            "price": 3.0,
            "unit": "each"
        },
        {
            "name": "Le Poissonnier crevettes cuites 80/120 -200g",
            "category": "generalfood",
            "price": 2.0,
            "unit": "each"
        },
        {
            "name": "Auchan oeuf de lompe noir 100g",
            "category": "generalfood",
            "price": 2.48,
            "unit": "each"
        },
        {
            "name": "Auchan oeufs de lompe rouge 100g",
            "category": "generalfood",
            "price": 2.48,
            "unit": "each"
        },
        {
            "name": "Auchan truite fumee tranche x4 - 100g",
            "category": "generalfood",
            "price": 3.01,
            "unit": "each"
        },
        {
            "name": "Auchan saumon fume mini tranche 100g",
            "category": "generalfood",
            "price": 3.17,
            "unit": "each"
        },
        {
            "name": "Auchan saumon fume de Norvege mini x4 -140g",
            "category": "generalfood",
            "price": 5.39,
            "unit": "each"
        },
        {
            "name": "Auchan batonnets de surimi x36 -600g",
            "category": "generalfood",
            "price": 3.75,
            "unit": "each"
        },
        {
            "name": "Auchan p'tit poisson pane au fromage x2 -200g",
            "category": "generalfood",
            "price": 2.44,
            "unit": "each"
        },
        {
            "name": "Auchan des de saumon fume 90g",
            "category": "generalfood",
            "price": 3.49,
            "unit": "each"
        },
        {
            "name": "Fleury Michon 30 batonnets surimi 500g",
            "category": "generalfood",
            "price": 3.9,
            "unit": "each"
        },
        {
            "name": "Auchan saumon fume Atlantique bio tranche x4 -120g",
            "category": "generalfood",
            "price": 5.5,
            "unit": "each"
        },
        {
            "name": "Auchan saumon fume sauvage tranche x2 -60g",
            "category": "generalfood",
            "price": 3.35,
            "unit": "each"
        },
        {
            "name": "Delpeyrat saumon fume d'Ecosse tranche x4 -130g",
            "category": "generalfood",
            "price": 6.45,
            "unit": "each"
        },
        {
            "name": "Filet merlu blanc meuniere 220g",
            "category": "generalfood",
            "price": 3.29,
            "unit": "each"
        },
        {
            "name": "Auchan batonnets de surimi x30 -450g",
            "category": "generalfood",
            "price": 2.89,
            "unit": "each"
        },
        {
            "name": "Auchan batonnets de surimi x60 -1kg",
            "category": "generalfood",
            "price": 6.15,
            "unit": "each"
        },
        {
            "name": "Ovive truite fumee bio tranche x3 -100g",
            "category": "generalfood",
            "price": 4.2,
            "unit": "each"
        },
        {
            "name": "Auchan truite fumee tranchee x6 -160g",
            "category": "generalfood",
            "price": 3.76,
            "unit": "each"
        },
        {
            "name": "Mmm! truite de mer fumee tranche x4 -140g",
            "category": "generalfood",
            "price": 5.29,
            "unit": "each"
        },
        {
            "name": "Simon salade de thon 300g",
            "category": "generalfood",
            "price": 3.43,
            "unit": "each"
        },
        {
            "name": "Auchan filet limande meuniere 200g",
            "category": "generalfood",
            "price": 3.29,
            "unit": "each"
        },
        {
            "name": "Auchan mini feuilletes x50 -480g",
            "category": "generalfood",
            "price": 4.82,
            "unit": "each"
        },
        {
            "name": "Auchan escargots gros calibre x24 -178g",
            "category": "generalfood",
            "price": 7.25,
            "unit": "each"
        },
        {
            "name": "Auchan feuillete jambon emmental 400g",
            "category": "generalfood",
            "price": 3.15,
            "unit": "each"
        },
        {
            "name": "Auchan escargots gros x48 -355g",
            "category": "generalfood",
            "price": 13.42,
            "unit": "each"
        },
        {
            "name": "Auchan feuillete au chevre 400g",
            "category": "generalfood",
            "price": 3.48,
            "unit": "each"
        },
        {
            "name": "Pouce escargot petit lucorum x48 -173g",
            "category": "generalfood",
            "price": 3.85,
            "unit": "each"
        },
        {
            "name": "Buitoni picco jambon fromage x9 -270g",
            "category": "generalfood",
            "price": 2.64,
            "unit": "each"
        },
        {
            "name": "Tipiak coquille st jacques 4x90g",
            "category": "generalfood",
            "price": 6.9,
            "unit": "each"
        },
        {
            "name": "Auchan coquille st jacques 4x90g",
            "category": "generalfood",
            "price": 5.71,
            "unit": "each"
        },
        {
            "name": "Buitoni piccolini mini pizza 3 fromages x9 -270g",
            "category": "generalfood",
            "price": 2.85,
            "unit": "each"
        },
        {
            "name": "Auchan beurre d'escargot 250g",
            "category": "generalfood",
            "price": 3.99,
            "unit": "each"
        },
        {
            "name": "Auchan feuilletee au saumon 400g",
            "category": "generalfood",
            "price": 3.8,
            "unit": "each"
        },
        {
            "name": "Auchan mini saucisse en feuillete x20 -350g",
            "category": "generalfood",
            "price": 4.52,
            "unit": "each"
        },
        {
            "name": "Auchan potatoes burger x4 -680g",
            "category": "generalfood",
            "price": 6.14,
            "unit": "each"
        },
        {
            "name": "Auchan mini tartelettes x24 - 300g",
            "category": "generalfood",
            "price": 3.59,
            "unit": "each"
        },
        {
            "name": "Auchan crepe jambon fromage x20 1kg",
            "category": "generalfood",
            "price": 3.33,
            "unit": "each"
        },
        {
            "name": "Auchan beignets de crevettes x6 -130g",
            "category": "generalfood",
            "price": 3.64,
            "unit": "each"
        },
        {
            "name": "Mc Cain buns jambon ketchup 400g",
            "category": "generalfood",
            "price": 2.85,
            "unit": "each"
        },
        {
            "name": "Buitoni piccolini mini pizza bolognaise x9 -270g",
            "category": "generalfood",
            "price": 2.6,
            "unit": "each"
        },
        {
            "name": "Auchan mini feuillete aux escargots beurre a l'ail x16 -170g",
            "category": "generalfood",
            "price": 4.26,
            "unit": "each"
        },
        {
            "name": "Findus pomme rissolee 1,1kg",
            "category": "generalfood",
            "price": 2.56,
            "unit": "each"
        },
        {
            "name": "Auchan poelee legumes verts 750g",
            "category": "generalfood",
            "price": 2.7,
            "unit": "each"
        },
        {
            "name": "Auchan pommes rissolees 1kg",
            "category": "generalfood",
            "price": 1.14,
            "unit": "each"
        },
        {
            "name": "Auchan mini gratin dauphinois x4 -480g",
            "category": "generalfood",
            "price": 3.15,
            "unit": "each"
        },
        {
            "name": "Findus pomme noisette 1,050kg",
            "category": "generalfood",
            "price": 2.87,
            "unit": "each"
        },
        {
            "name": "Auchan champignons de Paris eminces 1kg",
            "category": "generalfood",
            "price": 2.1,
            "unit": "each"
        },
        {
            "name": "Auchan pommes duchesse 750g",
            "category": "generalfood",
            "price": 1.82,
            "unit": "each"
        },
        {
            "name": "Auchan trio de poivrons crus 450g",
            "category": "generalfood",
            "price": 1.35,
            "unit": "each"
        },
        {
            "name": "Auchan frites classique 2,5kg",
            "category": "generalfood",
            "price": 2.44,
            "unit": "each"
        },
        {
            "name": "McCain pommes duchesse 900g",
            "category": "generalfood",
            "price": 2.09,
            "unit": "each"
        },
        {
            "name": "Auchan melange forestiers 450g",
            "category": "generalfood",
            "price": 3.85,
            "unit": "each"
        },
        {
            "name": "Findus pommes noisettes 400g",
            "category": "generalfood",
            "price": 2.02,
            "unit": "each"
        },
        {
            "name": "Auchan frites au four 1kg",
            "category": "generalfood",
            "price": 1.3,
            "unit": "each"
        },
        {
            "name": "Auchan puree de pommes de terre 1kg",
            "category": "generalfood",
            "price": 1.61,
            "unit": "each"
        },
        {
            "name": "Mc Cain just au four frites classiques 875g",
            "category": "generalfood",
            "price": 2.7,
            "unit": "each"
        },
        {
            "name": "Auchan brocolis minute 750g",
            "category": "generalfood",
            "price": 1.6,
            "unit": "each"
        },
        {
            "name": "Mc Cain frites tradition 1,04kg",
            "category": "generalfood",
            "price": 2.03,
            "unit": "each"
        },
        {
            "name": "Auchan legumes pour couscous 1kg",
            "category": "generalfood",
            "price": 1.65,
            "unit": "each"
        },
        {
            "name": "Auchan frites allumettes au four 1kg",
            "category": "generalfood",
            "price": 1.56,
            "unit": "each"
        },
        {
            "name": "Auchan poelee catalane 750g",
            "category": "generalfood",
            "price": 2.7,
            "unit": "each"
        },
        {
            "name": "Auchan viande hache de boeuf 700g",
            "category": "generalfood",
            "price": 6.55,
            "unit": "each"
        },
        {
            "name": "escalopes de poulet marinees 800g",
            "category": "generalfood",
            "price": 6.86,
            "unit": "each"
        },
        {
            "name": "Charal mini boulettes de boeuf x50 - 750g",
            "category": "generalfood",
            "price": 5.6,
            "unit": "each"
        },
        {
            "name": "Auchan paves de saumon Atlantique x2 -250g",
            "category": "generalfood",
            "price": 5.72,
            "unit": "each"
        },
        {
            "name": "Charal steak hache extra moelleux x8 -800g",
            "category": "generalfood",
            "price": 6.11,
            "unit": "each"
        },
        {
            "name": "Daregal ciboulette 50g",
            "category": "generalfood",
            "price": 1.99,
            "unit": "each"
        },
        {
            "name": "Auchan steak haches 5%mg 4x100g",
            "category": "generalfood",
            "price": 4.47,
            "unit": "each"
        },
        {
            "name": "Auchan petites noix de Saint Jacques avec corail 250g",
            "category": "generalfood",
            "price": 4.95,
            "unit": "each"
        },
        {
            "name": "Auchan cordon bleu de poulet 400g",
            "category": "generalfood",
            "price": 3.74,
            "unit": "each"
        },
        {
            "name": "Auchan nuggets filet poulet 400g",
            "category": "generalfood",
            "price": 3.74,
            "unit": "each"
        },
        {
            "name": "Auchan mini boulette de viande de boeuf cuite 750g",
            "category": "generalfood",
            "price": 4.84,
            "unit": "each"
        },
        {
            "name": "moules decoquillees cuites 400g",
            "category": "generalfood",
            "price": 2.99,
            "unit": "each"
        },
        {
            "name": "Findus croustibat batonnets de poisson pane x18 -550g",
            "category": "generalfood",
            "price": 4.07,
            "unit": "each"
        },
        {
            "name": "Charal steak hache charolais x10 -1kg",
            "category": "generalfood",
            "price": 9.67,
            "unit": "each"
        },
        {
            "name": "Auchan beurre d'escargot 250g",
            "category": "generalfood",
            "price": 3.99,
            "unit": "each"
        },
        {
            "name": "Findus colin d'Alaska facon fish and chips x4 -400g",
            "category": "generalfood",
            "price": 3.74,
            "unit": "each"
        },
        {
            "name": "Auchan ail hache 250g",
            "category": "generalfood",
            "price": 2.54,
            "unit": "each"
        },
        {
            "name": "Auchan filet de cabillaud 800g",
            "category": "generalfood",
            "price": 10.39,
            "unit": "each"
        },
        {
            "name": "Auchan echalote hachee 250g",
            "category": "generalfood",
            "price": 2.54,
            "unit": "each"
        },
        {
            "name": "Rik & Rok colin batonnet x15 -450g",
            "category": "generalfood",
            "price": 2.07,
            "unit": "each"
        },
        {
            "name": "Auchan poelee legumes verts 750g",
            "category": "generalfood",
            "price": 2.7,
            "unit": "each"
        },
        {
            "name": "Buitoni picco jambon fromage x9 -270g",
            "category": "generalfood",
            "price": 2.64,
            "unit": "each"
        },
        {
            "name": "Auchan riz cantonais 900g",
            "category": "generalfood",
            "price": 3.12,
            "unit": "each"
        },
        {
            "name": "Buitoni piccolini mini pizza 3 fromages x9 -270g",
            "category": "generalfood",
            "price": 2.85,
            "unit": "each"
        },
        {
            "name": "Auchan paella 900g",
            "category": "generalfood",
            "price": 3.54,
            "unit": "each"
        },
        {
            "name": "Auchan poelee catalane 750g",
            "category": "generalfood",
            "price": 2.7,
            "unit": "each"
        },
        {
            "name": "Auchan pizza cuite sur pierre 4 fromages pate fine 370g",
            "category": "generalfood",
            "price": 1.95,
            "unit": "each"
        },
        {
            "name": "Buitoni piccolini mini pizza bolognaise x9 -270g",
            "category": "generalfood",
            "price": 2.6,
            "unit": "each"
        },
        {
            "name": "Buitoni Fiesta royale 500g",
            "category": "generalfood",
            "price": 3.99,
            "unit": "each"
        },
        {
            "name": "Buitoni fraich'up la supreme viande 590g",
            "category": "generalfood",
            "price": 3.89,
            "unit": "each"
        },
        {
            "name": "Auchan poulet basquaise 900g",
            "category": "generalfood",
            "price": 3.85,
            "unit": "each"
        },
        {
            "name": "Auchan poelee 4 saisons 750g",
            "category": "generalfood",
            "price": 2.4,
            "unit": "each"
        },
        {
            "name": "Auchan pizza cuite sur pierre chorizo pate fine 390g",
            "category": "generalfood",
            "price": 1.8,
            "unit": "each"
        },
        {
            "name": "Auchan penne poulet champignons 900g",
            "category": "generalfood",
            "price": 3.85,
            "unit": "each"
        },
        {
            "name": "Auchan poelee campagnarde 900g",
            "category": "generalfood",
            "price": 3.12,
            "unit": "each"
        },
        {
            "name": "Marie pizza crousti'moelleuse fromage x3 -1,17kg",
            "category": "generalfood",
            "price": 5.85,
            "unit": "each"
        },
        {
            "name": "Auchan torsades carbonara 900g",
            "category": "generalfood",
            "price": 3.33,
            "unit": "each"
        },
        {
            "name": "Auchan hachis parmentier 1kg",
            "category": "generalfood",
            "price": 3.11,
            "unit": "each"
        },
        {
            "name": "Marie paella royal aux gambas 900g",
            "category": "generalfood",
            "price": 4.28,
            "unit": "each"
        },
        {
            "name": "Auchan poelee fermiere 750g",
            "category": "generalfood",
            "price": 2.4,
            "unit": "each"
        },
        {
            "name": "Auchan pains au chocolat pur beurre x6 -450g",
            "category": "generalfood",
            "price": 2.76,
            "unit": "each"
        },
        {
            "name": "Auchan croissants pur beurre x6 -360g",
            "category": "generalfood",
            "price": 2.24,
            "unit": "each"
        },
        {
            "name": "Auchan pepites de chocolat 100g",
            "category": "generalfood",
            "price": 1.53,
            "unit": "each"
        },
        {
            "name": "Auchan framboise 600g",
            "category": "generalfood",
            "price": 4.33,
            "unit": "each"
        },
        {
            "name": "Labeyrie recette Lenotre plaisir aux noix 410g",
            "category": "generalfood",
            "price": 8.95,
            "unit": "each"
        },
        {
            "name": "Auchan morceaux de mangues 450g",
            "category": "generalfood",
            "price": 4.49,
            "unit": "each"
        },
        {
            "name": "Auchan fraises entieres 450g",
            "category": "generalfood",
            "price": 3.05,
            "unit": "each"
        },
        {
            "name": "Kinder Bueno ice cone x4 -240g",
            "category": "generalfood",
            "price": 3.71,
            "unit": "each"
        },
        {
            "name": "Auchan melange de fruits rouges 450g",
            "category": "generalfood",
            "price": 2.29,
            "unit": "each"
        },
        {
            "name": "Auchan profiteroles x12-280g",
            "category": "generalfood",
            "price": 2.45,
            "unit": "each"
        },
        {
            "name": "Haagen Dazs macadamia 430g",
            "category": "generalfood",
            "price": 4.84,
            "unit": "each"
        },
        {
            "name": "Auchan mini gourmands chocolat x8 - 258g",
            "category": "generalfood",
            "price": 1.98,
            "unit": "each"
        },
        {
            "name": "Haagen Dazs favorite select x4 -340g",
            "category": "generalfood",
            "price": 4.95,
            "unit": "each"
        },
        {
            "name": "Auchan tarte normande 500g",
            "category": "generalfood",
            "price": 4.06,
            "unit": "each"
        },
        {
            "name": "Vahine pepites de chocolat au lait 100g",
            "category": "generalfood",
            "price": 2.51,
            "unit": "each"
        },
        {
            "name": "Auchan glace vanille 500g",
            "category": "generalfood",
            "price": 2.12,
            "unit": "each"
        },
        {
            "name": "Mars barre glacee x7 -292,6g",
            "category": "generalfood",
            "price": 2.73,
            "unit": "each"
        },
        {
            "name": "Vahine bio pepites de chocolat noir 100g",
            "category": "generalfood",
            "price": 2.59,
            "unit": "each"
        },
        {
            "name": "Snickers barre glacee caramel et cacahuetes x7 -336g",
            "category": "generalfood",
            "price": 2.78,
            "unit": "each"
        },
        {
            "name": "Auchan arabica doux moulu 2x250g",
            "category": "generalfood",
            "price": 4.72,
            "unit": "each"
        },
        {
            "name": "Auchan cafe classique dosette x48 -333g",
            "category": "generalfood",
            "price": 2.89,
            "unit": "each"
        },
        {
            "name": "Nescafe latte macchiato caramel dolce gusto capsule x8 -169g",
            "category": "generalfood",
            "price": 4.55,
            "unit": "each"
        },
        {
            "name": "Senseo cafe classiques dosette x40 -277g",
            "category": "generalfood",
            "price": 4.65,
            "unit": "each"
        },
        {
            "name": "Nescafe the menthe Marrakech dolce gusto capsule x16 -117g",
            "category": "generalfood",
            "price": 4.55,
            "unit": "each"
        },
        {
            "name": "Auchan brasil moulu 250g",
            "category": "generalfood",
            "price": 2.49,
            "unit": "each"
        },
        {
            "name": "Nescafe dolce gusto ricore au lait x16 capsules 168g",
            "category": "generalfood",
            "price": 4.55,
            "unit": "each"
        },
        {
            "name": "Auchan cafe corse dosette x48 -333g",
            "category": "generalfood",
            "price": 2.89,
            "unit": "each"
        },
        {
            "name": "Senseo cafe classique dosette x54 -375g",
            "category": "generalfood",
            "price": 6.19,
            "unit": "each"
        },
        {
            "name": "Auchan cafe lungo compatible dolce gusto capsule x10 -70g",
            "category": "generalfood",
            "price": 1.99,
            "unit": "each"
        },
        {
            "name": "Auchan colombia moulu 250g",
            "category": "generalfood",
            "price": 2.55,
            "unit": "each"
        },
        {
            "name": "Alpro lait d'amande 1l",
            "category": "generalfood",
            "price": 2.45,
            "unit": "each"
        },
        {
            "name": "Tassimo Grand Mere cafe petit dejeuner capsule x16 -132g",
            "category": "generalfood",
            "price": 3.39,
            "unit": "each"
        },
        {
            "name": "Maison Du Cafe L'Or moulu doux 500g",
            "category": "generalfood",
            "price": 5.99,
            "unit": "each"
        },
        {
            "name": "Nescafe caffe lungo dolce gusto capsule x30 -210g",
            "category": "generalfood",
            "price": 6.95,
            "unit": "each"
        },
        {
            "name": "Tassimo L'Or cafe long classic 119g",
            "category": "generalfood",
            "price": 6.09,
            "unit": "each"
        },
        {
            "name": "Auchan Bio boisson a l'avoine brique 1L",
            "category": "generalfood",
            "price": 1.7,
            "unit": "each"
        },
        {
            "name": "Auchan cafe petit dejeuner dosette x36 -250g",
            "category": "generalfood",
            "price": 2.79,
            "unit": "each"
        },
        {
            "name": "Senseo cafe doux dosette x54 -375g",
            "category": "generalfood",
            "price": 6.19,
            "unit": "each"
        },
        {
            "name": "Auchan cafe petit dejeuner dolce gusto capsule x10 -70g",
            "category": "generalfood",
            "price": 1.99,
            "unit": "each"
        },
        {
            "name": "La Fournee Doree gache tranchee au sucre 500g",
            "category": "generalfood",
            "price": 2.78,
            "unit": "each"
        },
        {
            "name": "Nocciolata pate a tartiner bio cacao et noisettes 700g",
            "category": "generalfood",
            "price": 8.05,
            "unit": "each"
        },
        {
            "name": "Auchan briochettes rondes x12 -480g",
            "category": "generalfood",
            "price": 1.52,
            "unit": "each"
        },
        {
            "name": "Pasquier pitch barre chocolat au lait x8 -310g",
            "category": "generalfood",
            "price": 2.4,
            "unit": "each"
        },
        {
            "name": "Harry's brioche tranchee 700g",
            "category": "generalfood",
            "price": 2.35,
            "unit": "each"
        },
        {
            "name": "pain de mie nature sans sucre ajoute 500g",
            "category": "generalfood",
            "price": 1.15,
            "unit": "each"
        },
        {
            "name": "Auchan pate a tartiner sans huile de palme 750g",
            "category": "generalfood",
            "price": 3.17,
            "unit": "each"
        },
        {
            "name": "Auchan brioche tranchee aux pepites de chocolat 500g",
            "category": "generalfood",
            "price": 1.76,
            "unit": "each"
        },
        {
            "name": "Harrys beau et bon pain de mie cereales 325g",
            "category": "generalfood",
            "price": 1.52,
            "unit": "each"
        },
        {
            "name": "Auchan croissant x10 -400g",
            "category": "generalfood",
            "price": 1.85,
            "unit": "each"
        },
        {
            "name": "Auchan pain de mie tranche extra moelleux nature 500g",
            "category": "generalfood",
            "price": 0.69,
            "unit": "each"
        },
        {
            "name": "pain de campagne tranche 400g",
            "category": "generalfood",
            "price": 1.1,
            "unit": "each"
        },
        {
            "name": "Lune de Miel miel de fleurs liquide doseur 500g",
            "category": "generalfood",
            "price": 4.38,
            "unit": "each"
        },
        {
            "name": "Pasquier croissant x8 -320g",
            "category": "generalfood",
            "price": 1.76,
            "unit": "each"
        },
        {
            "name": "Auchan pains au chocolat 16x45g",
            "category": "generalfood",
            "price": 2.65,
            "unit": "each"
        },
        {
            "name": "Harry's 100% mie nature 500g",
            "category": "generalfood",
            "price": 1.51,
            "unit": "each"
        },
        {
            "name": "Auchan biscuits petit dejeuneur lait pepites chocolat 600g",
            "category": "generalfood",
            "price": 2.61,
            "unit": "each"
        },
        {
            "name": "baguette 250g",
            "category": "generalfood",
            "price": 0.48,
            "unit": "each"
        },
        {
            "name": "Nutella pate a tartiner pot 750g",
            "category": "generalfood",
            "price": 4.36,
            "unit": "each"
        },
        {
            "name": "Lu Prince maxi chocolat au lait 250g",
            "category": "generalfood",
            "price": 1.61,
            "unit": "each"
        },
        {
            "name": "Auchan gaufre liegeoise au chocolat belge x7 - 345g",
            "category": "generalfood",
            "price": 2.19,
            "unit": "each"
        },
        {
            "name": "Auchan Brownie individuel x8 - 240g",
            "category": "generalfood",
            "price": 1.63,
            "unit": "each"
        },
        {
            "name": "Auchan gouter fondant au chocolat x12 -225g",
            "category": "generalfood",
            "price": 1.12,
            "unit": "each"
        },
        {
            "name": "Lotus gaufres de Liege au chocolat x7 -363g",
            "category": "generalfood",
            "price": 2.97,
            "unit": "each"
        },
        {
            "name": "Lotus gaufre coeur fondant vergeoise piece 5x2 -310g",
            "category": "generalfood",
            "price": 2.51,
            "unit": "each"
        },
        {
            "name": "Auchan pancakes sucres x8 -176g",
            "category": "generalfood",
            "price": 1.8,
            "unit": "each"
        },
        {
            "name": "Nutella b ready x6 -130g",
            "category": "generalfood",
            "price": 2.02,
            "unit": "each"
        },
        {
            "name": "Rik et Rok mini fourres pepites de chocolat 150g",
            "category": "generalfood",
            "price": 1.22,
            "unit": "each"
        },
        {
            "name": "Lu Prince maxi chocolat au lait 250g",
            "category": "generalfood",
            "price": 1.61,
            "unit": "each"
        },
        {
            "name": "Belvita petit dejeuner coeur fondant chocolat noisette 253g",
            "category": "generalfood",
            "price": 2.32,
            "unit": "each"
        },
        {
            "name": "St Michel madeleine coquille oeufs de poules plein air 1kg",
            "category": "generalfood",
            "price": 3.81,
            "unit": "each"
        },
        {
            "name": "St Michel madeleine coquille oeufs de poules plein air 500g",
            "category": "generalfood",
            "price": 2.26,
            "unit": "each"
        },
        {
            "name": "Bonne Maman quatre quart au beurre frais 500g",
            "category": "generalfood",
            "price": 3.17,
            "unit": "each"
        },
        {
            "name": "Brossard savane pocket chocolat x7 -189g",
            "category": "generalfood",
            "price": 1.76,
            "unit": "each"
        },
        {
            "name": "Nutella & Go! x2 -104g",
            "category": "generalfood",
            "price": 2.38,
            "unit": "each"
        },
        {
            "name": "Brossard Savane pocket barr' x14 -378g",
            "category": "generalfood",
            "price": 3.21,
            "unit": "each"
        },
        {
            "name": "Belvita moelleux coeur gourmand chocolat noisette 250g",
            "category": "generalfood",
            "price": 2.48,
            "unit": "each"
        },
        {
            "name": "Auchan gaufres liegeoises x7 - 350g",
            "category": "generalfood",
            "price": 1.38,
            "unit": "each"
        },
        {
            "name": "Mini BN chocolat 175g",
            "category": "generalfood",
            "price": 1.67,
            "unit": "each"
        },
        {
            "name": "Granola barre extra sablee familial 280g",
            "category": "generalfood",
            "price": 2.86,
            "unit": "each"
        },
        {
            "name": "Celebrations ballotin 280g",
            "category": "generalfood",
            "price": 4.93,
            "unit": "each"
        },
        {
            "name": "Nestle dessert noir 2x205g",
            "category": "generalfood",
            "price": 3.79,
            "unit": "each"
        },
        {
            "name": "Nutella & Go! x2 -104g",
            "category": "generalfood",
            "price": 2.38,
            "unit": "each"
        },
        {
            "name": "Haribo happy box 600g",
            "category": "generalfood",
            "price": 4.45,
            "unit": "each"
        },
        {
            "name": "Auchan chocolat noir dessert 2x200g",
            "category": "generalfood",
            "price": 1.8,
            "unit": "each"
        },
        {
            "name": "Nestle dessert blanc 180g",
            "category": "generalfood",
            "price": 2.29,
            "unit": "each"
        },
        {
            "name": "Mentos box pure fresh mint x50 -100g",
            "category": "generalfood",
            "price": 3.42,
            "unit": "each"
        },
        {
            "name": "Haribo pocket sachet 380g",
            "category": "generalfood",
            "price": 3.32,
            "unit": "each"
        },
        {
            "name": "Cote d'Or lait extra fin 3x100g",
            "category": "generalfood",
            "price": 3.19,
            "unit": "each"
        },
        {
            "name": "Auchan chocolat dessert noir corse 64% 2x200g",
            "category": "generalfood",
            "price": 2.82,
            "unit": "each"
        },
        {
            "name": "Lindt chocolat noir 70% a cuisiner 180g",
            "category": "generalfood",
            "price": 2.55,
            "unit": "each"
        },
        {
            "name": "Airwaves menthol eucalyptus dragees sans sucre etuis x5 -70g",
            "category": "generalfood",
            "price": 2.27,
            "unit": "each"
        },
        {
            "name": "Cote d'Or dessert au lait 200g",
            "category": "generalfood",
            "price": 1.89,
            "unit": "each"
        },
        {
            "name": "Milka chocolat au lait 12x100g",
            "category": "generalfood",
            "price": 10.69,
            "unit": "each"
        },
        {
            "name": "Auchan chocolat au lait alpin 3x100g",
            "category": "generalfood",
            "price": 1.95,
            "unit": "each"
        },
        {
            "name": "Kit Kat x10 -415g",
            "category": "generalfood",
            "price": 3.5,
            "unit": "each"
        },
        {
            "name": "Kinder surprise unisexe x3 -60g",
            "category": "generalfood",
            "price": 3.04,
            "unit": "each"
        },
        {
            "name": "Saint Siffrein pate de fruits 4 saisons boite 720g",
            "category": "generalfood",
            "price": 4.61,
            "unit": "each"
        },
        {
            "name": "Cote d'Or au lait  200g",
            "category": "generalfood",
            "price": 1.89,
            "unit": "each"
        },
        {
            "name": "Hollywood powerfresh dragees sans sucre 5x10 -70g",
            "category": "generalfood",
            "price": 2.47,
            "unit": "each"
        },
        {
            "name": "Auchan pate feuilletee 230g",
            "category": "generalfood",
            "price": 0.65,
            "unit": "each"
        },
        {
            "name": "Auchan farine de ble fluide T45 -1kg",
            "category": "generalfood",
            "price": 0.66,
            "unit": "each"
        },
        {
            "name": "Auchan pepites de chocolat 100g",
            "category": "generalfood",
            "price": 1.53,
            "unit": "each"
        },
        {
            "name": "Pouce sucre en poudre sachet 1kg",
            "category": "generalfood",
            "price": 0.78,
            "unit": "each"
        },
        {
            "name": "Auchan sucre blanc morceaux 1kg",
            "category": "generalfood",
            "price": 0.79,
            "unit": "each"
        },
        {
            "name": "Materne pom'potes multivarietes 4 parfums gourde 20x90g",
            "category": "generalfood",
            "price": 7.49,
            "unit": "each"
        },
        {
            "name": "Materne pom'potes sans sucre ajoutes multi-varietes 12x90g",
            "category": "generalfood",
            "price": 4.75,
            "unit": "each"
        },
        {
            "name": "St Mamet cocktail sirop leger 850g",
            "category": "generalfood",
            "price": 2.55,
            "unit": "each"
        },
        {
            "name": "Pom Potes sans sucre ajoutes pomme nature 20x90g",
            "category": "generalfood",
            "price": 6.49,
            "unit": "each"
        },
        {
            "name": "Auchan pate a pizza 260g",
            "category": "generalfood",
            "price": 0.99,
            "unit": "each"
        },
        {
            "name": "Materne compote pomme poire 16x100g format familial",
            "category": "generalfood",
            "price": 14.9,
            "unit": "each"
        },
        {
            "name": "Auchan amandes grillees 200g",
            "category": "generalfood",
            "price": 3.7,
            "unit": "each"
        },
        {
            "name": "Auchan amandes en poudre 125g",
            "category": "generalfood",
            "price": 2.15,
            "unit": "each"
        },
        {
            "name": "Materne pom'potes pomme nature 20x90g",
            "category": "generalfood",
            "price": 7.15,
            "unit": "each"
        },
        {
            "name": "Auchan pate feuilletee au beurre frais 230g",
            "category": "generalfood",
            "price": 1.09,
            "unit": "each"
        },
        {
            "name": "Mmm! amande decortiquee 125g",
            "category": "generalfood",
            "price": 2.39,
            "unit": "each"
        },
        {
            "name": "Andros compote gourdes panache 18x90g",
            "category": "generalfood",
            "price": 6.89,
            "unit": "each"
        },
        {
            "name": "Pouce farine de ble T55 menagere 1kg",
            "category": "generalfood",
            "price": 0.46,
            "unit": "each"
        },
        {
            "name": "Auchan pate brisee 230g",
            "category": "generalfood",
            "price": 0.65,
            "unit": "each"
        },
        {
            "name": "Materne Pom'Potes pomme nature 12x90g",
            "category": "generalfood",
            "price": 4.19,
            "unit": "each"
        },
        {
            "name": "Auchan ptit saucisson 200g",
            "category": "generalfood",
            "price": 2.49,
            "unit": "each"
        },
        {
            "name": "concombre piece",
            "category": "generalfood",
            "price": 0.99,
            "unit": "each"
        },
        {
            "name": "St Agaune specialite saucisson sec 200g",
            "category": "generalfood",
            "price": 3.98,
            "unit": "each"
        },
        {
            "name": "Moroni chorizo doux 200g",
            "category": "generalfood",
            "price": 2.9,
            "unit": "each"
        },
        {
            "name": "endives sachet 1kg",
            "category": "generalfood",
            "price": 1.49,
            "unit": "each"
        },
        {
            "name": "carottes sachet 1kg",
            "category": "generalfood",
            "price": 1.29,
            "unit": "each"
        },
        {
            "name": "Auchan fuet 170g",
            "category": "generalfood",
            "price": 1.96,
            "unit": "each"
        },
        {
            "name": "Le Charcutier chorizo espagnol 100g",
            "category": "generalfood",
            "price": 1.99,
            "unit": "each"
        },
        {
            "name": "St Agaune saucisson 200g + 10g offerts",
            "category": "generalfood",
            "price": 3.98,
            "unit": "each"
        },
        {
            "name": "Auchan pain a toast special foie gras 250g",
            "category": "generalfood",
            "price": 1.15,
            "unit": "each"
        },
        {
            "name": "Le Charcutier saucisson sec tranche 100g",
            "category": "generalfood",
            "price": 1.99,
            "unit": "each"
        },
        {
            "name": "Auchan chorizo doux 225g",
            "category": "generalfood",
            "price": 2.25,
            "unit": "each"
        },
        {
            "name": "Auchan batonnets de surimi x36 -600g",
            "category": "generalfood",
            "price": 3.75,
            "unit": "each"
        },
        {
            "name": "Auchan saucisse seche droite 250g",
            "category": "generalfood",
            "price": 2.0,
            "unit": "each"
        },
        {
            "name": "tomates cerises barquette 500g",
            "category": "generalfood",
            "price": 2.99,
            "unit": "each"
        },
        {
            "name": "Mmm! saucisson de savoie nature 200g",
            "category": "generalfood",
            "price": 2.94,
            "unit": "each"
        },
        {
            "name": "Auchan snacks croustillants cacahuetes 90g",
            "category": "generalfood",
            "price": 0.72,
            "unit": "each"
        },
        {
            "name": "Lay's chips nature x6 - 27,5g",
            "category": "generalfood",
            "price": 1.6,
            "unit": "each"
        },
        {
            "name": "tomates cerises barquette 250g",
            "category": "generalfood",
            "price": 0.99,
            "unit": "each"
        },
        {
            "name": "Auchan chorizo doux 24 tranches 120g",
            "category": "generalfood",
            "price": 1.5,
            "unit": "each"
        },
        {
            "name": "Auchan thon au naturel albacore 2x140g",
            "category": "generalfood",
            "price": 3.18,
            "unit": "each"
        },
        {
            "name": "Auchan invitation au voyage tortillas de ble x8 - 320g",
            "category": "generalfood",
            "price": 1.85,
            "unit": "each"
        },
        {
            "name": "La Belle Chaurienne cassoulet au canard 420g",
            "category": "generalfood",
            "price": 2.76,
            "unit": "each"
        },
        {
            "name": "Auchan asperges blanches pic-nic bocal 110g",
            "category": "generalfood",
            "price": 1.43,
            "unit": "each"
        },
        {
            "name": "Auchan pain a toast special foie gras 250g",
            "category": "generalfood",
            "price": 1.15,
            "unit": "each"
        },
        {
            "name": "Mmm! ratatouille gourmande 650g",
            "category": "generalfood",
            "price": 2.8,
            "unit": "each"
        },
        {
            "name": "Mmm! confit de canard 4 cuisses IGP 1,350kg",
            "category": "generalfood",
            "price": 12.71,
            "unit": "each"
        },
        {
            "name": "Auchan wraps x6 -370g",
            "category": "generalfood",
            "price": 2.23,
            "unit": "each"
        },
        {
            "name": "Auchan pulpe de tomate 3x400g",
            "category": "generalfood",
            "price": 1.86,
            "unit": "each"
        },
        {
            "name": "Auchan champignons pieds et morceaux 230g",
            "category": "generalfood",
            "price": 1.24,
            "unit": "each"
        },
        {
            "name": "Auchan duo haricots verts et haricots beurre 455g",
            "category": "generalfood",
            "price": 1.57,
            "unit": "each"
        },
        {
            "name": "Auchan champignons eminces 3x115g",
            "category": "generalfood",
            "price": 2.5,
            "unit": "each"
        },
        {
            "name": "Vico croutons a l'ail 2x90g",
            "category": "generalfood",
            "price": 1.73,
            "unit": "each"
        },
        {
            "name": "Auchan haricots verts tres fins 440g",
            "category": "generalfood",
            "price": 1.03,
            "unit": "each"
        },
        {
            "name": "Auchan croutons a l'ail 2x90g",
            "category": "generalfood",
            "price": 1.55,
            "unit": "each"
        },
        {
            "name": "Auchan thon albacore au naturel 280g",
            "category": "generalfood",
            "price": 3.18,
            "unit": "each"
        },
        {
            "name": "Vico croutons natures 2x90g",
            "category": "generalfood",
            "price": 1.73,
            "unit": "each"
        },
        {
            "name": "Bonduelle champignons eminces epais au naturel -3x115g",
            "category": "generalfood",
            "price": 2.75,
            "unit": "each"
        },
        {
            "name": "Tipiak la corbeille croutons nature 300g",
            "category": "generalfood",
            "price": 2.63,
            "unit": "each"
        },
        {
            "name": "Auchan champignons de Paris eminces 230g",
            "category": "generalfood",
            "price": 0.94,
            "unit": "each"
        },
        {
            "name": "Auchan riz arborio pour risotto 500g",
            "category": "generalfood",
            "price": 1.55,
            "unit": "each"
        },
        {
            "name": "Auchan Riz basmati sachets cuisson  500g",
            "category": "generalfood",
            "price": 1.76,
            "unit": "each"
        },
        {
            "name": "Panzani sauce tomate bolognaise 500g",
            "category": "generalfood",
            "price": 1.78,
            "unit": "each"
        },
        {
            "name": "Auchan riz complet cuisson 10 minutes vrac 500g",
            "category": "generalfood",
            "price": 1.39,
            "unit": "each"
        },
        {
            "name": "Crealine ecrase de pommes de terre aux 2carottes 2x200g",
            "category": "generalfood",
            "price": 2.62,
            "unit": "each"
        },
        {
            "name": "Auchan pates serpentini 500g",
            "category": "generalfood",
            "price": 0.65,
            "unit": "each"
        },
        {
            "name": "Tipiak couscous parfume aux epices du monde 510g",
            "category": "generalfood",
            "price": 2.72,
            "unit": "each"
        },
        {
            "name": "Auchan Mini farfalle 500g",
            "category": "generalfood",
            "price": 0.89,
            "unit": "each"
        },
        {
            "name": "Panzani sauce tomate cuisinee oignon ail 180g",
            "category": "generalfood",
            "price": 0.87,
            "unit": "each"
        },
        {
            "name": "Panzani sauce tomates cuisinees 600g",
            "category": "generalfood",
            "price": 1.63,
            "unit": "each"
        },
        {
            "name": "Auchan Riz etuve 10 mn sachet  500g",
            "category": "generalfood",
            "price": 1.03,
            "unit": "each"
        },
        {
            "name": "Auchan couscous moyen 1kg",
            "category": "generalfood",
            "price": 1.27,
            "unit": "each"
        },
        {
            "name": "Taureau aile riz parfume 1kg",
            "category": "generalfood",
            "price": 2.91,
            "unit": "each"
        },
        {
            "name": "Auchan Penne Rigate qualite superieure 500g",
            "category": "generalfood",
            "price": 0.65,
            "unit": "each"
        },
        {
            "name": "Auchan Coudes rayes de qualite superieure 500g",
            "category": "generalfood",
            "price": 0.59,
            "unit": "each"
        },
        {
            "name": "Panzani Tomacouli sauce tomate nature 3x200g",
            "category": "generalfood",
            "price": 1.31,
            "unit": "each"
        },
        {
            "name": "Auchan sauce tomate cuisinee 420g",
            "category": "generalfood",
            "price": 1.04,
            "unit": "each"
        },
        {
            "name": "Mousline puree nature 520g",
            "category": "generalfood",
            "price": 2.13,
            "unit": "each"
        },
        {
            "name": "Auchan torti cuisson rapide 500g",
            "category": "generalfood",
            "price": 0.7,
            "unit": "each"
        },
        {
            "name": "Auchan bio flocons d'avoine 500g",
            "category": "generalfood",
            "price": 1.66,
            "unit": "each"
        },
        {
            "name": "Auchan invitation au voyage tortillas de ble x8 - 320g",
            "category": "generalfood",
            "price": 1.85,
            "unit": "each"
        },
        {
            "name": "Auchan double concentre de tomates 3x70g",
            "category": "generalfood",
            "price": 0.76,
            "unit": "each"
        },
        {
            "name": "Auchan huile de tournesol 1l",
            "category": "generalfood",
            "price": 1.99,
            "unit": "each"
        },
        {
            "name": "Auchan bio huile d'olive extra-vierge 75cl",
            "category": "generalfood",
            "price": 5.2,
            "unit": "each"
        },
        {
            "name": "Auchan vinaigre balsamique de Modene 50cl",
            "category": "generalfood",
            "price": 2.7,
            "unit": "each"
        },
        {
            "name": "Auchan wraps x6 -370g",
            "category": "generalfood",
            "price": 2.23,
            "unit": "each"
        },
        {
            "name": "Auchan pulpe de tomate 3x400g",
            "category": "generalfood",
            "price": 1.86,
            "unit": "each"
        },
        {
            "name": "vin blanc de table sec Sevebelle en briquette 3x25cl",
            "category": "generalfood",
            "price": 2.5,
            "unit": "each"
        },
        {
            "name": "Panzani sauce tomate bolognaise 500g",
            "category": "generalfood",
            "price": 1.78,
            "unit": "each"
        },
        {
            "name": "Auchan huile pour friture 2l",
            "category": "generalfood",
            "price": 4.07,
            "unit": "each"
        },
        {
            "name": "Auchan cornichons extra fins aux 5 aromates 360g",
            "category": "generalfood",
            "price": 1.71,
            "unit": "each"
        },
        {
            "name": "Sicilia jus de citron presse 250ml",
            "category": "generalfood",
            "price": 1.81,
            "unit": "each"
        },
        {
            "name": "Auchan poivre noir moulu 50g",
            "category": "generalfood",
            "price": 1.5,
            "unit": "each"
        },
        {
            "name": "Auchan Fond de veau 110g",
            "category": "generalfood",
            "price": 1.75,
            "unit": "each"
        },
        {
            "name": "Blini olives manzanilla a la mediterraneenne 150g",
            "category": "generalfood",
            "price": 2.69,
            "unit": "each"
        },
        {
            "name": "Auchan olives vertes denoyautees 370ml",
            "category": "generalfood",
            "price": 0.92,
            "unit": "each"
        },
        {
            "name": "Heinz tomato ketchup -50% de sucre et -50% de sel 665g",
            "category": "generalfood",
            "price": 2.67,
            "unit": "each"
        },
        {
            "name": "Panzani sauce tomate cuisinee oignon ail 180g",
            "category": "generalfood",
            "price": 0.87,
            "unit": "each"
        },
        {
            "name": "Heinz mayonnaise flacon souple top down 395g",
            "category": "generalfood",
            "price": 3.59,
            "unit": "each"
        },
        {
            "name": "Panzani sauce tomates cuisinees 600g",
            "category": "generalfood",
            "price": 1.63,
            "unit": "each"
        },
        {
            "name": "Moroni chorizo doux 200g",
            "category": "generalfood",
            "price": 2.9,
            "unit": "each"
        },
        {
            "name": "Auchan invitation au voyage tortillas de ble x8 - 320g",
            "category": "generalfood",
            "price": 1.85,
            "unit": "each"
        },
        {
            "name": "Le Charcutier chorizo espagnol 100g",
            "category": "generalfood",
            "price": 1.99,
            "unit": "each"
        },
        {
            "name": "Nocciolata pate a tartiner bio cacao et noisettes 700g",
            "category": "generalfood",
            "price": 8.05,
            "unit": "each"
        },
        {
            "name": "Auchan riz arborio pour risotto 500g",
            "category": "generalfood",
            "price": 1.55,
            "unit": "each"
        },
        {
            "name": "Auchan riz cantonais 900g",
            "category": "generalfood",
            "price": 3.12,
            "unit": "each"
        },
        {
            "name": "Le Charcutier mortadelle superieure 100g",
            "category": "generalfood",
            "price": 1.99,
            "unit": "each"
        },
        {
            "name": "Centurion cheddar rape 200g",
            "category": "generalfood",
            "price": 2.27,
            "unit": "each"
        },
        {
            "name": "Auchan wraps x6 -370g",
            "category": "generalfood",
            "price": 2.23,
            "unit": "each"
        },
        {
            "name": "Auchan paella 900g",
            "category": "generalfood",
            "price": 3.54,
            "unit": "each"
        },
        {
            "name": "Auchan cheddar tranche x10 -200g",
            "category": "generalfood",
            "price": 2.27,
            "unit": "each"
        },
        {
            "name": "Auchan coppa tranches x12 -100g",
            "category": "generalfood",
            "price": 2.04,
            "unit": "each"
        },
        {
            "name": "Auchan tortillas chips huile de tournesol nature 400g",
            "category": "generalfood",
            "price": 2.23,
            "unit": "each"
        },
        {
            "name": "Auchan pate a pizza 260g",
            "category": "generalfood",
            "price": 0.99,
            "unit": "each"
        },
        {
            "name": "Auchan plateau assortiment asiatique 600g",
            "category": "generalfood",
            "price": 6.11,
            "unit": "each"
        },
        {
            "name": "Auchan kit pizza 600g",
            "category": "generalfood",
            "price": 1.95,
            "unit": "each"
        },
        {
            "name": "Auchan nems porc sauce nuoc nam x4 -300g",
            "category": "generalfood",
            "price": 2.35,
            "unit": "each"
        },
        {
            "name": "Auchan ricotta 250g",
            "category": "generalfood",
            "price": 1.51,
            "unit": "each"
        },
        {
            "name": "Auchan legumes pour couscous 1kg",
            "category": "generalfood",
            "price": 1.65,
            "unit": "each"
        },
        {
            "name": "Rana grand ravioli cepes et champignons eminces 250g",
            "category": "generalfood",
            "price": 3.3,
            "unit": "each"
        },
        {
            "name": "C'est qui le Patron lait demi ecreme 6x1l",
            "category": "generalfood",
            "price": 5.94,
            "unit": "each"
        },
        {
            "name": "Auchan lait demi-ecreme U.H.T. brique 8x1l",
            "category": "generalfood",
            "price": 6.08,
            "unit": "each"
        },
        {
            "name": "Auchan lait demi-ecreme bouteille 6x1l",
            "category": "generalfood",
            "price": 4.98,
            "unit": "each"
        },
        {
            "name": "Cristaline eau de source 12x50cl",
            "category": "generalfood",
            "price": 1.92,
            "unit": "each"
        },
        {
            "name": "Auchan eau minerale naturelle 6x1,5L",
            "category": "generalfood",
            "price": 2.1,
            "unit": "each"
        },
        {
            "name": "Pouce lait demi-ecreme brique 6x1l",
            "category": "generalfood",
            "price": 3.84,
            "unit": "each"
        },
        {
            "name": "Volvic eau minerale plate 6x1,5l",
            "category": "generalfood",
            "price": 2.88,
            "unit": "each"
        },
        {
            "name": "St Amand eau minerale naturelle bouchon sport 12x33cl",
            "category": "generalfood",
            "price": 2.76,
            "unit": "each"
        },
        {
            "name": "Cristaline eau de source 12x33cl",
            "category": "generalfood",
            "price": 2.52,
            "unit": "each"
        },
        {
            "name": "Lactel lait demi-ecreme U.H.T. bouteille 6x1l",
            "category": "generalfood",
            "price": 4.92,
            "unit": "each"
        },
        {
            "name": "Cristaline eau gazeifiee 6x1,5l",
            "category": "generalfood",
            "price": 1.62,
            "unit": "each"
        },
        {
            "name": "Auchan lait demi-ecreme des montagnes bouteille 6x1l.",
            "category": "generalfood",
            "price": 5.1,
            "unit": "each"
        },
        {
            "name": "Candy'Up chocolat briquette 24x20cl",
            "category": "generalfood",
            "price": 8.88,
            "unit": "each"
        },
        {
            "name": "Auchan eau de source montagne 6x1.5l",
            "category": "generalfood",
            "price": 1.5,
            "unit": "each"
        },
        {
            "name": "Lactel lait entier U.H.T. bouteille 6x1l",
            "category": "generalfood",
            "price": 7.62,
            "unit": "each"
        },
        {
            "name": "Candia grandlait demi-ecreme U.H.T. bouteille 6x1l",
            "category": "generalfood",
            "price": 5.34,
            "unit": "each"
        },
        {
            "name": "Auchan eau minerale gazeuse 6x1l",
            "category": "generalfood",
            "price": 2.57,
            "unit": "each"
        },
        {
            "name": "Lactel lait demi-ecreme U.H.T. bouteille 6x50cl",
            "category": "generalfood",
            "price": 4.38,
            "unit": "each"
        },
        {
            "name": "Lactel lait ecreme U.H.T. bouteille 6x1l",
            "category": "generalfood",
            "price": 6.0,
            "unit": "each"
        },
        {
            "name": "Lactel lait demi-ecreme U.H.T. bouteille 6x25cl",
            "category": "generalfood",
            "price": 3.48,
            "unit": "each"
        },
        {
            "name": "Auchan pur jus d'orange sans pulpe 2l",
            "category": "generalfood",
            "price": 2.76,
            "unit": "each"
        },
        {
            "name": "Auchan pur jus d'orange sans pulpe 1,5l",
            "category": "generalfood",
            "price": 2.24,
            "unit": "each"
        },
        {
            "name": "Auchan Pur jus multifruits brique de 2l",
            "category": "generalfood",
            "price": 2.9,
            "unit": "each"
        },
        {
            "name": "Auchan pur jus d'orange sans pulpe 1l",
            "category": "generalfood",
            "price": 1.82,
            "unit": "each"
        },
        {
            "name": "Innocent jus d'orange sans pulpe 90cl",
            "category": "generalfood",
            "price": 2.05,
            "unit": "each"
        },
        {
            "name": "Rik & Rok jus multifruits a base de concentre 6x20cl",
            "category": "generalfood",
            "price": 2.17,
            "unit": "each"
        },
        {
            "name": "Rik & Rok jus de pomme a base de concentre 6x20cl",
            "category": "generalfood",
            "price": 2.07,
            "unit": "each"
        },
        {
            "name": "Auchan pur jus de pomme 1l",
            "category": "generalfood",
            "price": 1.15,
            "unit": "each"
        },
        {
            "name": "Andros pur jus d'orange sans pulpe 1,5l",
            "category": "generalfood",
            "price": 3.15,
            "unit": "each"
        },
        {
            "name": "Auchan nectar multivitamine brique 2l",
            "category": "generalfood",
            "price": 2.0,
            "unit": "each"
        },
        {
            "name": "Auchan pur jus de pomme 2l",
            "category": "generalfood",
            "price": 2.24,
            "unit": "each"
        },
        {
            "name": "Auchan jus de pomme 1l",
            "category": "generalfood",
            "price": 0.96,
            "unit": "each"
        },
        {
            "name": "Auchan pur jus multifruits 2l",
            "category": "generalfood",
            "price": 2.9,
            "unit": "each"
        },
        {
            "name": "Danao kung fu panda peche abricot 1l",
            "category": "generalfood",
            "price": 1.75,
            "unit": "each"
        },
        {
            "name": "Andros jus de clementines pressees avec pulpe 1.5l",
            "category": "generalfood",
            "price": 3.05,
            "unit": "each"
        },
        {
            "name": "Auchan nectar abricot 1l",
            "category": "generalfood",
            "price": 1.86,
            "unit": "each"
        },
        {
            "name": "Auchan multifruits 100% pur jus  1l",
            "category": "generalfood",
            "price": 1.52,
            "unit": "each"
        },
        {
            "name": "Auchan pur jus d'orange brique avec pulpe 4x1l",
            "category": "generalfood",
            "price": 5.0,
            "unit": "each"
        },
        {
            "name": "Innocent ananas passion 90cl",
            "category": "generalfood",
            "price": 2.54,
            "unit": "each"
        },
        {
            "name": "Auchan pur jus d'orange frais bio 1l",
            "category": "generalfood",
            "price": 2.9,
            "unit": "each"
        },
        {
            "name": "Coca Cola zero 6x1,25l",
            "category": "generalfood",
            "price": 8.58,
            "unit": "each"
        },
        {
            "name": "Auchan boisson au the peche 2l",
            "category": "generalfood",
            "price": 1.42,
            "unit": "each"
        },
        {
            "name": "Coca Cola classic 1,25l",
            "category": "generalfood",
            "price": 1.53,
            "unit": "each"
        },
        {
            "name": "Auchan the glace a la peche 1,5l",
            "category": "generalfood",
            "price": 1.17,
            "unit": "each"
        },
        {
            "name": "Auchan sirop de grenadine 1,5l",
            "category": "generalfood",
            "price": 2.0,
            "unit": "each"
        },
        {
            "name": "Auchan sirop de peche bidon metal 60cl",
            "category": "generalfood",
            "price": 1.79,
            "unit": "each"
        },
        {
            "name": "Auchan limonade 1,5l",
            "category": "generalfood",
            "price": 0.76,
            "unit": "each"
        },
        {
            "name": "Coca Cola zero 1,25l",
            "category": "generalfood",
            "price": 1.43,
            "unit": "each"
        },
        {
            "name": "La Maison Guiot sirop de violette 70cl",
            "category": "generalfood",
            "price": 2.94,
            "unit": "each"
        },
        {
            "name": "Auchan boisson au jus de fruits exotiques 2l",
            "category": "generalfood",
            "price": 1.4,
            "unit": "each"
        },
        {
            "name": "Coca-Cola bouteille 6x50cl",
            "category": "generalfood",
            "price": 5.54,
            "unit": "each"
        },
        {
            "name": "Tropico exotique 1,5l",
            "category": "generalfood",
            "price": 1.5,
            "unit": "each"
        },
        {
            "name": "Fuze tea the a la peche 1,25l",
            "category": "generalfood",
            "price": 1.7,
            "unit": "each"
        },
        {
            "name": "Lipton Ice Tea peche 1,5l",
            "category": "generalfood",
            "price": 1.4,
            "unit": "each"
        },
        {
            "name": "Maytea the noir infuse glace parfum peche blanche 1l",
            "category": "generalfood",
            "price": 1.4,
            "unit": "each"
        },
        {
            "name": "Coca Cola zero 1,75l",
            "category": "generalfood",
            "price": 1.73,
            "unit": "each"
        },
        {
            "name": "Moulin de Valdonne sirop de grenadine 70cl",
            "category": "generalfood",
            "price": 2.52,
            "unit": "each"
        },
        {
            "name": "Pepsi max 1,5l",
            "category": "generalfood",
            "price": 1.11,
            "unit": "each"
        },
        {
            "name": "Impact de Balle energy drink 1l",
            "category": "generalfood",
            "price": 2.01,
            "unit": "each"
        },
        {
            "name": "Auchan sirop de grenadine 75cl",
            "category": "generalfood",
            "price": 1.59,
            "unit": "each"
        },
        {
            "name": "1664 biere blonde 5,5deg -20x25cl",
            "category": "generalfood",
            "price": 11.62,
            "unit": "each"
        },
        {
            "name": "Affligem carmin biere fruits rouges fut pression 6,7deg -5L",
            "category": "generalfood",
            "price": 22.99,
            "unit": "each"
        },
        {
            "name": "Captain Morgan spiritueux a base de rhum 35deg -70cl",
            "category": "generalfood",
            "price": 14.17,
            "unit": "each"
        },
        {
            "name": "Abbaye de Leffe blonde bi",
            "category": "generalfood",
            "price": 11.95,
            "unit": "each"
        },
        {
            "name": "Affligem blonde biere belge d'abbaye fut pression 6,7deg -5L",
            "category": "generalfood",
            "price": 19.59,
            "unit": "each"
        },
        {
            "name": "Canebiere Pastis 45deg -1l",
            "category": "generalfood",
            "price": 15.89,
            "unit": "each"
        },
        {
            "name": "Desperados Original biere aromatisee tequila 5,9deg -12x33cl",
            "category": "generalfood",
            "price": 14.58,
            "unit": "each"
        },
        {
            "name": "Jack Daniel's Old 40deg -70cl",
            "category": "generalfood",
            "price": 20.94,
            "unit": "each"
        },
        {
            "name": "Jagermeister liqueur new 35deg -70cl",
            "category": "generalfood",
            "price": 18.62,
            "unit": "each"
        },
        {
            "name": "Affligem Cuvee blonde biere belge d'abbaye 6,7deg -12X25cl",
            "category": "generalfood",
            "price": 8.44,
            "unit": "each"
        },
        {
            "name": "Kronenbourg biere blonde 4,2deg 26x25cl",
            "category": "generalfood",
            "price": 11.33,
            "unit": "each"
        },
        {
            "name": "Isautier rhum arrange banane flambee 40deg -50cl",
            "category": "generalfood",
            "price": 16.54,
            "unit": "each"
        },
        {
            "name": "Dillon rhum agricole blanc 55deg -1l",
            "category": "generalfood",
            "price": 18.01,
            "unit": "each"
        },
        {
            "name": "Ricard pastis 45deg -1l",
            "category": "generalfood",
            "price": 19.62,
            "unit": "each"
        },
        {
            "name": "Heineken biere blonde premium 5deg 12x33cl",
            "category": "generalfood",
            "price": 8.5,
            "unit": "each"
        },
        {
            "name": "Loic Raison cidre bouche doux 2deg -75cl",
            "category": "generalfood",
            "price": 2.4,
            "unit": "each"
        },
        {
            "name": "Belanis pastis 45deg -1l",
            "category": "generalfood",
            "price": 14.59,
            "unit": "each"
        },
        {
            "name": "Paix Dieu biere 10deg -75cl",
            "category": "generalfood",
            "price": 5.48,
            "unit": "each"
        },
        {
            "name": "Charrette rhum blanc 40deg - 70cl",
            "category": "generalfood",
            "price": 9.92,
            "unit": "each"
        },
        {
            "name": "William Lawson whisky 40deg -70cl",
            "category": "generalfood",
            "price": 12.51,
            "unit": "each"
        },
        {
            "name": "Mouton Cadet bordeaux rouge 13,5deg 75cl",
            "category": "generalfood",
            "price": 9.99,
            "unit": "each"
        },
        {
            "name": "Veuve Paul Bur brut 11deg 75cl",
            "category": "generalfood",
            "price": 2.84,
            "unit": "each"
        },
        {
            "name": "Actuel bouchon a Champagne",
            "category": "generalfood",
            "price": 2.5,
            "unit": "each"
        },
        {
            "name": "Pierre Chanau Cotes du Ventoux rouge 14deg -75cl",
            "category": "generalfood",
            "price": 2.99,
            "unit": "each"
        },
        {
            "name": "Freixenet cava cordon negro Espagne brut 11,5deg -75cl",
            "category": "generalfood",
            "price": 5.01,
            "unit": "each"
        },
        {
            "name": "Pierre Chanau cremant de loire 12deg -75cl",
            "category": "generalfood",
            "price": 5.49,
            "unit": "each"
        },
        {
            "name": "Pierre Chanau Saumur brut 12deg -75cl",
            "category": "generalfood",
            "price": 5.4,
            "unit": "each"
        },
        {
            "name": "vin blanc de table sec Sevebelle en briquette 3x25cl",
            "category": "generalfood",
            "price": 2.5,
            "unit": "each"
        },
        {
            "name": "Montaudon Champagne brut 12deg -75cl",
            "category": "generalfood",
            "price": 17.99,
            "unit": "each"
        },
        {
            "name": "Pierre Chanau Monbazillac 13,5deg -75cl",
            "category": "generalfood",
            "price": 5.99,
            "unit": "each"
        },
        {
            "name": "Nicolas Feuillatte Champagne brut grande reserve 12deg -75cl",
            "category": "generalfood",
            "price": 19.91,
            "unit": "each"
        },
        {
            "name": "Pierre Chanau Cremant d'Alsace brut 11,5deg -75cl",
            "category": "generalfood",
            "price": 5.99,
            "unit": "each"
        },
        {
            "name": "Champagne Canard Duchene authentic reserve 75cl",
            "category": "generalfood",
            "price": 25.9,
            "unit": "each"
        },
        {
            "name": "Wolfberger cremant d'alsace 11,5deg -75cl",
            "category": "generalfood",
            "price": 7.39,
            "unit": "each"
        },
        {
            "name": "Lalande de Pomerol  bio chateau vieux rivieres 13deg 75cl",
            "category": "generalfood",
            "price": 14.79,
            "unit": "each"
        },
        {
            "name": "Pierre Chanau saint emilion rouge 12,5deg -75cl",
            "category": "generalfood",
            "price": 7.95,
            "unit": "each"
        },
        {
            "name": "Nicolas Feuillatte Champagne brut 12deg -75 cl",
            "category": "generalfood",
            "price": 16.65,
            "unit": "each"
        },
        {
            "name": "Nicolas Feuillatte Champagne rose 12deg -75cl",
            "category": "generalfood",
            "price": 20.65,
            "unit": "each"
        },
        {
            "name": "Cafe de Paris brut 11,5deg -75cl",
            "category": "generalfood",
            "price": 4.11,
            "unit": "each"
        },
        {
            "name": "Pierre Chanau Sancerre blanc 12,5deg -75cl",
            "category": "generalfood",
            "price": 12.3,
            "unit": "each"
        },
        {
            "name": "Auchan baby croissance 10 mois a 3 ans bouteille 6x1l",
            "category": "generalfood",
            "price": 7.02,
            "unit": "each"
        },
        {
            "name": "Guigoz 3 lait croissance 10 a 36 mois 6x1l",
            "category": "generalfood",
            "price": 10.56,
            "unit": "each"
        },
        {
            "name": "Bledilait croissance 18x250ml de 10 mois a 3 ans",
            "category": "generalfood",
            "price": 11.16,
            "unit": "each"
        },
        {
            "name": "Gallia Galliagest croissance 900g",
            "category": "generalfood",
            "price": 12.81,
            "unit": "each"
        },
        {
            "name": "Candia croissance chocolat 6x25cl des 10 mois",
            "category": "generalfood",
            "price": 3.9,
            "unit": "each"
        },
        {
            "name": "Eveil croissance nature 12x25cl",
            "category": "generalfood",
            "price": 6.41,
            "unit": "each"
        },
        {
            "name": "Mont Roucous eau minerale naturelle 6x1,5l",
            "category": "generalfood",
            "price": 2.76,
            "unit": "each"
        },
        {
            "name": "Eveil bio nature croissance 6x1l",
            "category": "generalfood",
            "price": 11.28,
            "unit": "each"
        },
        {
            "name": "Candia Baby lait croissance vanille 6x25cl",
            "category": "generalfood",
            "price": 4.14,
            "unit": "each"
        },
        {
            "name": "Gallia Calisma lait croissance bag in box 1,2kg des 12 mois",
            "category": "generalfood",
            "price": 13.23,
            "unit": "each"
        },
        {
            "name": "Hipp bio mes premieres cereales 250g des 4 mois",
            "category": "generalfood",
            "price": 2.89,
            "unit": "each"
        },
        {
            "name": "Auchan Baby Bio croissance 10 mois a 3 ans 6x1l",
            "category": "generalfood",
            "price": 10.32,
            "unit": "each"
        },
        {
            "name": "Evian eau minerale 6x1l",
            "category": "generalfood",
            "price": 2.58,
            "unit": "each"
        },
        {
            "name": "Hipp croissance bio format biberon 6x25cl des 10 mois",
            "category": "generalfood",
            "price": 5.58,
            "unit": "each"
        },
        {
            "name": "Guigoz 1er age formule epaissie boite 820g",
            "category": "generalfood",
            "price": 15.78,
            "unit": "each"
        },
        {
            "name": "Hipp bio lait 2eme age boite 900g des 6 mois",
            "category": "generalfood",
            "price": 17.48,
            "unit": "each"
        },
        {
            "name": "Eveil croissance nature sans arome vanille 6x1l des 10mois",
            "category": "generalfood",
            "price": 9.78,
            "unit": "each"
        },
        {
            "name": "Guigoz lait bio 3eme age de 12mois a 3ans 800g",
            "category": "generalfood",
            "price": 15.94,
            "unit": "each"
        },
        {
            "name": "Candia baby croissance cereales 6x25cl de 10 mois a 3 ans",
            "category": "generalfood",
            "price": 3.74,
            "unit": "each"
        },
        {
            "name": "Nestle ptite cereale biscuite vanille 400g des 12mois",
            "category": "generalfood",
            "price": 2.76,
            "unit": "each"
        },
        {
            "name": "Bledichef etuvee potiron carottes boulghour 250g des 15 mois",
            "category": "generalfood",
            "price": 1.91,
            "unit": "each"
        },
        {
            "name": "Bledichef fondue de poireaux pdt et gruyere 250g des 15mois",
            "category": "generalfood",
            "price": 1.91,
            "unit": "each"
        },
        {
            "name": "Nestle ptite recette blanquette dinde riz 2x200g des 12 mois",
            "category": "generalfood",
            "price": 2.53,
            "unit": "each"
        },
        {
            "name": "Nestle ptite recette lentilles jambon 2x200g des 12 mois",
            "category": "generalfood",
            "price": 2.53,
            "unit": "each"
        },
        {
            "name": "Hipp bio haricots verts p. de terre poulet 2x190g des 6 mois",
            "category": "generalfood",
            "price": 2.47,
            "unit": "each"
        },
        {
            "name": "Nestle ptite recette poulet basquaise 2x200g des 15mois",
            "category": "generalfood",
            "price": 2.53,
            "unit": "each"
        },
        {
            "name": "Nestle ptite recette spaghettis bolognaise 2x200g des 8 mois",
            "category": "generalfood",
            "price": 2.53,
            "unit": "each"
        },
        {
            "name": "Hipp bio menus tagliatelle legume colin 2x190g des8mois",
            "category": "generalfood",
            "price": 2.47,
            "unit": "each"
        },
        {
            "name": "Nestle ptite recette couscous 2x200g des 8mois",
            "category": "generalfood",
            "price": 2.53,
            "unit": "each"
        },
        {
            "name": "Hipp bio soupe 6 legumes semoule brique 2x250ml des 8mois",
            "category": "generalfood",
            "price": 2.58,
            "unit": "each"
        },
        {
            "name": "Nestle ptite recette pot au feu boeuf 2x200g des 8 mois",
            "category": "generalfood",
            "price": 2.53,
            "unit": "each"
        },
        {
            "name": "Bledina courgette riz de veau 2x200g des12mois",
            "category": "generalfood",
            "price": 2.89,
            "unit": "each"
        },
        {
            "name": "Bledina idees de maman bols potiron poulet 2x200g des 12mois",
            "category": "generalfood",
            "price": 2.89,
            "unit": "each"
        },
        {
            "name": "Bledichef duo carottes, petits pois et boeuf 260g des 18mois",
            "category": "generalfood",
            "price": 1.85,
            "unit": "each"
        },
        {
            "name": "Bledina idees de maman epinard carotte boeuf 2x200gdes12mois",
            "category": "generalfood",
            "price": 2.89,
            "unit": "each"
        },
        {
            "name": "Bledina idees de maman tomate boulghour saumon 2x200g 12mois",
            "category": "generalfood",
            "price": 2.89,
            "unit": "each"
        },
        {
            "name": "Hipp bio risotto legumes petits pois poulet 260g des 18 mois",
            "category": "generalfood",
            "price": 2.38,
            "unit": "each"
        },
        {
            "name": "Nestle ptite recette hachis parmentier 2x200g des 8mois",
            "category": "generalfood",
            "price": 2.53,
            "unit": "each"
        },
        {
            "name": "Good Gout bio ratatouille de quinoa 190g des 6mois",
            "category": "generalfood",
            "price": 2.91,
            "unit": "each"
        },
        {
            "name": "Nestle bio naturnes patate douce carottes 2x130g des 4/6mois",
            "category": "generalfood",
            "price": 1.6,
            "unit": "each"
        },
        {
            "name": "Auchan baby puree pomme banane gourde 4x90g des 6mois",
            "category": "generalfood",
            "price": 2.29,
            "unit": "each"
        },
        {
            "name": "Auchan baby dessert puree poire gourde 4x90g des 6mois",
            "category": "generalfood",
            "price": 2.29,
            "unit": "each"
        },
        {
            "name": "Auchan baby dessert lacte fraise gourde 4x90g des 6mois",
            "category": "generalfood",
            "price": 2.6,
            "unit": "each"
        },
        {
            "name": "Nestle ptit onctueux fraise framboise 6x60g des 10 mois",
            "category": "generalfood",
            "price": 2.47,
            "unit": "each"
        },
        {
            "name": "Hipp bio mon premier biscuit boite 180g des 6 mois",
            "category": "generalfood",
            "price": 2.95,
            "unit": "each"
        },
        {
            "name": "Nestle ptit onctueux croissance abricot mangue 6x60g 10 mois",
            "category": "generalfood",
            "price": 2.47,
            "unit": "each"
        },
        {
            "name": "Babybio pot bio pommes bananes 2x130g  des4mois",
            "category": "generalfood",
            "price": 1.93,
            "unit": "each"
        },
        {
            "name": "Nestle p'tit brasse framboise 4x100g des 6 mois",
            "category": "generalfood",
            "price": 1.84,
            "unit": "each"
        },
        {
            "name": "Hipp bio 100% fruits pommes bananes fruits rouges 4x100g 6m",
            "category": "generalfood",
            "price": 2.22,
            "unit": "each"
        },
        {
            "name": "Auchan baby petit dessert lacte abricot gourde 4x90g",
            "category": "generalfood",
            "price": 2.6,
            "unit": "each"
        },
        {
            "name": "Auchan baby petit dessert puree de pomme 4x90g des 6 mois",
            "category": "generalfood",
            "price": 2.29,
            "unit": "each"
        },
        {
            "name": "Babybio mirabelle lorraine pomme aquitaine 2x130g des 4 mois",
            "category": "generalfood",
            "price": 2.49,
            "unit": "each"
        },
        {
            "name": "Nestle ptit brasse a l'abricot 4x100g des 6 mois",
            "category": "generalfood",
            "price": 1.84,
            "unit": "each"
        },
        {
            "name": "Nestle ptit onctueux croissance banane peche 6x60g des 10m",
            "category": "generalfood",
            "price": 2.47,
            "unit": "each"
        },
        {
            "name": "Nestle ptit brasse a la myrtille 4x100g des 6 mois",
            "category": "generalfood",
            "price": 1.84,
            "unit": "each"
        },
        {
            "name": "Hipp Bio coupelle pommes abricots 4x100g des 4 mois",
            "category": "generalfood",
            "price": 2.22,
            "unit": "each"
        },
        {
            "name": "Hipp bio gourde mulipack 4 varietes 8x90g des 6 mois",
            "category": "generalfood",
            "price": 7.07,
            "unit": "each"
        },
        {
            "name": "Auchan baby petit dessert lacte vanille 4x100g des 6mois",
            "category": "generalfood",
            "price": 1.45,
            "unit": "each"
        },
        {
            "name": "Nestle ptit brasse banane 4x100g des 6 mois",
            "category": "generalfood",
            "price": 1.84,
            "unit": "each"
        },
        {
            "name": "Nestle ptit brasse a la fraise 4x100g des 6 mois",
            "category": "generalfood",
            "price": 1.84,
            "unit": "each"
        },
        {
            "name": "Pampers couches new baby geant 2/5kg x44 taille 1",
            "category": "generalfood",
            "price": 5.92,
            "unit": "each"
        },
        {
            "name": "Love And Green couches midi 2/5kg x23 taille 1",
            "category": "generalfood",
            "price": 6.32,
            "unit": "each"
        },
        {
            "name": "Auchan baby changes confort  born 2/5kg x22 taille 1",
            "category": "generalfood",
            "price": 2.8,
            "unit": "each"
        },
        {
            "name": "Pampers new baby value 2/5kg x72 taille 1",
            "category": "generalfood",
            "price": 11.12,
            "unit": "each"
        },
        {
            "name": "Pampers couches new baby 2/5kg x22 taille 1",
            "category": "generalfood",
            "price": 3.02,
            "unit": "each"
        },
        {
            "name": "Pampers couches new baby paquet micro 1,5/2,5kg x24 taille 0",
            "category": "generalfood",
            "price": 8.33,
            "unit": "each"
        },
        {
            "name": "Pampers harmonie geant x35 taille 1",
            "category": "generalfood",
            "price": 10.6,
            "unit": "each"
        },
        {
            "name": "Pampers couches new baby geant 4/8kg x54 taille 2",
            "category": "generalfood",
            "price": 13.6,
            "unit": "each"
        },
        {
            "name": "Pampers couches new baby dry 4/8kg x31 taille 2",
            "category": "generalfood",
            "price": 7.35,
            "unit": "each"
        },
        {
            "name": "Lotus baby touch change 3/6 kg x56 taille 2",
            "category": "generalfood",
            "price": 14.43,
            "unit": "each"
        },
        {
            "name": "Auchan baby confort+ pack change mini 3/6kg x68 taille 2",
            "category": "generalfood",
            "price": 10.86,
            "unit": "each"
        },
        {
            "name": "Auchan baby confort+ 3/6kg x36 taille 2",
            "category": "generalfood",
            "price": 5.92,
            "unit": "each"
        },
        {
            "name": "Love And Green couches midi 3/6kg x36 taille 2",
            "category": "generalfood",
            "price": 11.51,
            "unit": "each"
        },
        {
            "name": "Carryboo couches dermo sensitives 3/6kg x56 taille 2",
            "category": "generalfood",
            "price": 18.66,
            "unit": "each"
        },
        {
            "name": "Pampers harmonie geant x39 taille 2",
            "category": "generalfood",
            "price": 15.1,
            "unit": "each"
        },
        {
            "name": "Pampers baby dry pants geant 12/17kg x36 taille 5",
            "category": "generalfood",
            "price": 14.1,
            "unit": "each"
        },
        {
            "name": "Pampers couches new baby midi change 6/10kg x50 taille 3",
            "category": "generalfood",
            "price": 13.89,
            "unit": "each"
        },
        {
            "name": "Lotus baby touch change 4/9kg x44 taille 3",
            "category": "generalfood",
            "price": 14.42,
            "unit": "each"
        },
        {
            "name": "Pampers baby dry pants geant 6/11kg x44 taille 3",
            "category": "generalfood",
            "price": 14.1,
            "unit": "each"
        },
        {
            "name": "Pampers premium megapack 6/10kg x98 taille 3",
            "category": "generalfood",
            "price": 31.38,
            "unit": "each"
        },
        {
            "name": "Cosmia baby maxi carres sensitive 100% coton 3x80",
            "category": "generalfood",
            "price": 5.81,
            "unit": "each"
        },
        {
            "name": "Cosmia baby serum physiologique 40x5ml",
            "category": "generalfood",
            "price": 3.06,
            "unit": "each"
        },
        {
            "name": "Auchan lingettes douceur recharge 3x72",
            "category": "generalfood",
            "price": 4.66,
            "unit": "each"
        },
        {
            "name": "Auchan baby carre de soin x100",
            "category": "generalfood",
            "price": 3.11,
            "unit": "each"
        },
        {
            "name": "Auchan baby lingette sensitive lait recharge 3x64",
            "category": "generalfood",
            "price": 4.15,
            "unit": "each"
        },
        {
            "name": "Cosmia baby carres douceur 100% coton x40",
            "category": "generalfood",
            "price": 1.24,
            "unit": "each"
        },
        {
            "name": "Auchan huile d'amande douce 100ml",
            "category": "generalfood",
            "price": 3.28,
            "unit": "each"
        },
        {
            "name": "Auchan Baby lessive liquide peaux sensibles 1,5l",
            "category": "generalfood",
            "price": 4.18,
            "unit": "each"
        },
        {
            "name": "Biolane liniment oleo-calcaire 700ml",
            "category": "generalfood",
            "price": 10.3,
            "unit": "each"
        },
        {
            "name": "Kandoo melon lingette x55",
            "category": "generalfood",
            "price": 2.39,
            "unit": "each"
        },
        {
            "name": "Lingettes bebe sensitives a l'aloe vera x80",
            "category": "generalfood",
            "price": 1.58,
            "unit": "each"
        },
        {
            "name": "Pouce lingettes bebe x72",
            "category": "generalfood",
            "price": 0.79,
            "unit": "each"
        },
        {
            "name": "Cosmia baby lingette papier toilette 2x50",
            "category": "generalfood",
            "price": 2.29,
            "unit": "each"
        },
        {
            "name": "Pampers lingettes max care 3x50",
            "category": "generalfood",
            "price": 6.0,
            "unit": "each"
        },
        {
            "name": "Cosmia baby carre de soin visage et corps x100",
            "category": "generalfood",
            "price": 2.07,
            "unit": "each"
        },
        {
            "name": "Nivea intimate care gel toilette intime fraicheur 250ml",
            "category": "generalfood",
            "price": 3.46,
            "unit": "each"
        },
        {
            "name": "Biolane lingettes recharge x72",
            "category": "generalfood",
            "price": 2.44,
            "unit": "each"
        },
        {
            "name": "Cosmia baby lingette sensitive extrait de camomille x56",
            "category": "generalfood",
            "price": 1.44,
            "unit": "each"
        },
        {
            "name": "Pampers harmonie lingettes 2x48",
            "category": "generalfood",
            "price": 6.8,
            "unit": "each"
        },
        {
            "name": "Biolane lingettes visage et mains x64",
            "category": "generalfood",
            "price": 2.44,
            "unit": "each"
        },
        {
            "name": "Signal dentifrice haleine pure 75ml",
            "category": "generalfood",
            "price": 1.74,
            "unit": "each"
        },
        {
            "name": "Colgate dentifrice triple action tube 2x75ml",
            "category": "generalfood",
            "price": 1.78,
            "unit": "each"
        },
        {
            "name": "Elmex dentifrice sensitive blancheur 75ml",
            "category": "generalfood",
            "price": 3.52,
            "unit": "each"
        },
        {
            "name": "Rik et Rok brosse a dents junior x3",
            "category": "generalfood",
            "price": 2.7,
            "unit": "each"
        },
        {
            "name": "Colgate dentifrice kids minions 50ml",
            "category": "generalfood",
            "price": 2.04,
            "unit": "each"
        },
        {
            "name": "Elmex dentifrice sensitive tube 75ml",
            "category": "generalfood",
            "price": 3.52,
            "unit": "each"
        },
        {
            "name": "Teraxil dentifrice mon premier teraxil pomme 75ml",
            "category": "generalfood",
            "price": 1.56,
            "unit": "each"
        },
        {
            "name": "Listerine bain de bouche fraicheur intense 500ml",
            "category": "generalfood",
            "price": 4.72,
            "unit": "each"
        },
        {
            "name": "Oral B brossettes dual clean x2",
            "category": "generalfood",
            "price": 9.09,
            "unit": "each"
        },
        {
            "name": "Vademecum dentifrice bio protection complete 75ml",
            "category": "generalfood",
            "price": 2.83,
            "unit": "each"
        },
        {
            "name": "White Glo dentifrice blanchissant formule pro 100ml",
            "category": "generalfood",
            "price": 4.11,
            "unit": "each"
        },
        {
            "name": "Auchan dentifrice multi fruits enfants plus de 6 ans -50ml",
            "category": "generalfood",
            "price": 0.79,
            "unit": "each"
        },
        {
            "name": "Oral B brosse a dents electrique vitality pro timer trizone",
            "category": "generalfood",
            "price": 28.72,
            "unit": "each"
        },
        {
            "name": "Signal dentifrice integral white 100ml",
            "category": "generalfood",
            "price": 2.27,
            "unit": "each"
        },
        {
            "name": "Oral B dentifrice pro expert blancheur saine 75ml",
            "category": "generalfood",
            "price": 3.13,
            "unit": "each"
        },
        {
            "name": "Colgate brosse a dents triple action souple",
            "category": "generalfood",
            "price": 1.74,
            "unit": "each"
        },
        {
            "name": "Oral B dentifrice proexpert clean mint 75ml",
            "category": "generalfood",
            "price": 3.03,
            "unit": "each"
        },
        {
            "name": "Auchan dentifrice fraise enfant plus de 2 ans -50ml",
            "category": "generalfood",
            "price": 0.69,
            "unit": "each"
        },
        {
            "name": "Sensodyne dentifrice repare protege blancheur 2x75ml",
            "category": "generalfood",
            "price": 6.56,
            "unit": "each"
        },
        {
            "name": "Oral B repare gencives et email original 2x75ml",
            "category": "generalfood",
            "price": 6.49,
            "unit": "each"
        },
        {
            "name": "Cosmia gel douche et bain dermo protect peaux seches 750ml",
            "category": "generalfood",
            "price": 3.49,
            "unit": "each"
        },
        {
            "name": "Cosmia lait douche et bain amande douce 750ml",
            "category": "generalfood",
            "price": 3.25,
            "unit": "each"
        },
        {
            "name": "Cosmia gel douche mure sauvage et grenade 250ml",
            "category": "generalfood",
            "price": 1.19,
            "unit": "each"
        },
        {
            "name": "Cosmia gel douche lait noix de coco 250ml",
            "category": "generalfood",
            "price": 1.19,
            "unit": "each"
        },
        {
            "name": "Auchan huile d'amande douce 100ml",
            "category": "generalfood",
            "price": 3.28,
            "unit": "each"
        },
        {
            "name": "Cosmia Men shampooing douche 3en1 sport 250ml",
            "category": "generalfood",
            "price": 1.19,
            "unit": "each"
        },
        {
            "name": "Sanex douche et bain zero % peaux seches 750ml",
            "category": "generalfood",
            "price": 5.79,
            "unit": "each"
        },
        {
            "name": "Mennen deodorant gel x-treme ice fresh 75ml",
            "category": "generalfood",
            "price": 4.37,
            "unit": "each"
        },
        {
            "name": "Cosmia gel douceur fleur de tiare de Tahiti 250ml",
            "category": "generalfood",
            "price": 1.19,
            "unit": "each"
        },
        {
            "name": "Savon liquide le naturel extra pur de Marseille pompe 500ml",
            "category": "generalfood",
            "price": 2.69,
            "unit": "each"
        },
        {
            "name": "Monsavon l'authentiquesavon au lait 6x100g",
            "category": "generalfood",
            "price": 4.8,
            "unit": "each"
        },
        {
            "name": "Le Petit Marseillais gel douche amande douce 250ml",
            "category": "generalfood",
            "price": 1.98,
            "unit": "each"
        },
        {
            "name": "Tourangelle huile vierge bio de noix de coco 31,4cl",
            "category": "generalfood",
            "price": 5.5,
            "unit": "each"
        },
        {
            "name": "Cosmia gel douche gourmand tarte aux fraises 250ml",
            "category": "generalfood",
            "price": 1.45,
            "unit": "each"
        },
        {
            "name": "Cosmia gel douche lait peche 250ml",
            "category": "generalfood",
            "price": 1.19,
            "unit": "each"
        },
        {
            "name": "Cadum douche douceur velours fleur de coton 400ml",
            "category": "generalfood",
            "price": 2.69,
            "unit": "each"
        },
        {
            "name": "Cosmia gel douche orchidee noire 250ml",
            "category": "generalfood",
            "price": 1.19,
            "unit": "each"
        },
        {
            "name": "Dove pain de toilette 4x100g",
            "category": "generalfood",
            "price": 3.4,
            "unit": "each"
        },
        {
            "name": "Nivea men deodorant black&white power 200ml",
            "category": "generalfood",
            "price": 3.13,
            "unit": "each"
        },
        {
            "name": "Cosmia dissolvant doux a la provitamine b5 -200ml",
            "category": "generalfood",
            "price": 1.44,
            "unit": "each"
        },
        {
            "name": "Dop shampooing 2en1 huile amande douce 400ml",
            "category": "generalfood",
            "price": 1.85,
            "unit": "each"
        },
        {
            "name": "Garnier ultra doux shampooing delicatesse 250ml",
            "category": "generalfood",
            "price": 2.84,
            "unit": "each"
        },
        {
            "name": "Cosmia shampooing sec 200ml",
            "category": "generalfood",
            "price": 3.12,
            "unit": "each"
        },
        {
            "name": "Fructis masque hair food banane 390ml",
            "category": "generalfood",
            "price": 7.74,
            "unit": "each"
        },
        {
            "name": "Head & Shoulders shampooing anti-pellicule apple fresh 280ml",
            "category": "generalfood",
            "price": 4.4,
            "unit": "each"
        },
        {
            "name": "Batiste shampooing sec blush aerosol 200ml",
            "category": "generalfood",
            "price": 3.49,
            "unit": "each"
        },
        {
            "name": "Cosmia shampooing aux amandes tous types de cheveux 500ml",
            "category": "generalfood",
            "price": 1.44,
            "unit": "each"
        },
        {
            "name": "Head & Shoulders shampooing 2en1 citrus fresh 255ml",
            "category": "generalfood",
            "price": 4.51,
            "unit": "each"
        },
        {
            "name": "Cosmia shampooing aux oeufs tous types de cheveux 500ml",
            "category": "generalfood",
            "price": 1.44,
            "unit": "each"
        },
        {
            "name": "Cosmia shampooing douche 2en1 monoi 250ml",
            "category": "generalfood",
            "price": 1.19,
            "unit": "each"
        },
        {
            "name": "Cosmia kids spray demelant cerise fraise 150ml",
            "category": "generalfood",
            "price": 2.19,
            "unit": "each"
        },
        {
            "name": "Vivelle dop gel coiffant pot 200ml",
            "category": "generalfood",
            "price": 4.85,
            "unit": "each"
        },
        {
            "name": "Timotei shampooing pure 300ml",
            "category": "generalfood",
            "price": 2.43,
            "unit": "each"
        },
        {
            "name": "Head & Shoulders shampooing classic clean 280ml",
            "category": "generalfood",
            "price": 3.66,
            "unit": "each"
        },
        {
            "name": "Batiste shampoing sec original 200ml",
            "category": "generalfood",
            "price": 3.49,
            "unit": "each"
        },
        {
            "name": "L'Oreal Elseve dream longs shampooing 250ml",
            "category": "generalfood",
            "price": 4.01,
            "unit": "each"
        },
        {
            "name": "Nature Moi shampooing nourrissant cheveux secs 250ml",
            "category": "generalfood",
            "price": 4.07,
            "unit": "each"
        },
        {
            "name": "Dop shampooing 2en1 huile d'argan 400ml",
            "category": "generalfood",
            "price": 1.85,
            "unit": "each"
        },
        {
            "name": "L'Oreal Elseve shampooing argile extra 3x250ml",
            "category": "generalfood",
            "price": 10.19,
            "unit": "each"
        },
        {
            "name": "L'Oreal Elseve shampooing color vive 2en1 -300ml",
            "category": "generalfood",
            "price": 4.01,
            "unit": "each"
        },
        {
            "name": "coton maxi carres a demaquiller x80",
            "category": "generalfood",
            "price": 1.49,
            "unit": "each"
        },
        {
            "name": "Auchan batonnet coton x200 boite",
            "category": "generalfood",
            "price": 0.88,
            "unit": "each"
        },
        {
            "name": "Auchan disques a demaquiller super doux x70",
            "category": "generalfood",
            "price": 0.92,
            "unit": "each"
        },
        {
            "name": "Auchan batonnets coton x160 sachet",
            "category": "generalfood",
            "price": 0.51,
            "unit": "each"
        },
        {
            "name": "Cosmia lingette demaquillante sensitive x25",
            "category": "generalfood",
            "price": 1.79,
            "unit": "each"
        },
        {
            "name": "Cosmia baby carres douceur 100% coton x40",
            "category": "generalfood",
            "price": 1.24,
            "unit": "each"
        },
        {
            "name": "Lotus batonnets coton boite x160",
            "category": "generalfood",
            "price": 1.48,
            "unit": "each"
        },
        {
            "name": "Auchan carres a demaquiller x50",
            "category": "generalfood",
            "price": 1.19,
            "unit": "each"
        },
        {
            "name": "Gillette lame mach 3+ x5",
            "category": "generalfood",
            "price": 16.31,
            "unit": "each"
        },
        {
            "name": "Demak Up original disques coton a demaquiller x105",
            "category": "generalfood",
            "price": 1.72,
            "unit": "each"
        },
        {
            "name": "Cosmia baby carre de soin visage et corps x100",
            "category": "generalfood",
            "price": 2.07,
            "unit": "each"
        },
        {
            "name": "Garnier pure active intensif 3en1 anti points noirs 150ml",
            "category": "generalfood",
            "price": 6.39,
            "unit": "each"
        },
        {
            "name": "Tourangelle huile vierge bio de noix de coco 31,4cl",
            "category": "generalfood",
            "price": 5.5,
            "unit": "each"
        },
        {
            "name": "Auchan ovales a demaquiller a l'aloe vera x50",
            "category": "generalfood",
            "price": 1.19,
            "unit": "each"
        },
        {
            "name": "Cosmia dissolvant doux a la provitamine b5 -200ml",
            "category": "generalfood",
            "price": 1.44,
            "unit": "each"
        },
        {
            "name": "Lotus sachet x160 batonnets",
            "category": "generalfood",
            "price": 0.8,
            "unit": "each"
        },
        {
            "name": "Cosmia gel nettoyant pure au dpenthenol peaux grasses 150ml",
            "category": "generalfood",
            "price": 2.99,
            "unit": "each"
        },
        {
            "name": "Gilette lames fusion x5",
            "category": "generalfood",
            "price": 20.27,
            "unit": "each"
        },
        {
            "name": "Demak'Up lingette a demaquiller peau seche ou sensible x25",
            "category": "generalfood",
            "price": 2.8,
            "unit": "each"
        },
        {
            "name": "Maybelline mascara total temptation washable ndeg1 black",
            "category": "generalfood",
            "price": 9.6,
            "unit": "each"
        },
        {
            "name": "Florex papier toilette blanc pure ouate x18 rouleaux",
            "category": "generalfood",
            "price": 2.79,
            "unit": "each"
        },
        {
            "name": "Auchan papier hygienique 3plis rose 140 feuilles rouleau x12",
            "category": "generalfood",
            "price": 4.01,
            "unit": "each"
        },
        {
            "name": "Lotus confort papier hygienique rose aquatube rouleau x24",
            "category": "generalfood",
            "price": 7.94,
            "unit": "each"
        },
        {
            "name": "Auchan papier hygienique 3 plis extra doux coton blanc x12",
            "category": "generalfood",
            "price": 4.13,
            "unit": "each"
        },
        {
            "name": "Renova papier toilette yorissime rouleau x48 +24offerts",
            "category": "generalfood",
            "price": 21.5,
            "unit": "each"
        },
        {
            "name": "Auchan papier toilette blanc maxi rouleaux 280 feuilles x6",
            "category": "generalfood",
            "price": 2.12,
            "unit": "each"
        },
        {
            "name": "Auchan papier toilette blanc maxi rouleau 216 feuilles x12",
            "category": "generalfood",
            "price": 4.05,
            "unit": "each"
        },
        {
            "name": "Auchan mouchoirs hello blancs 2 plis boite x100",
            "category": "generalfood",
            "price": 0.83,
            "unit": "each"
        },
        {
            "name": "Auchan papier toilette blanc 5plis 90 feuilles rouleau x6",
            "category": "generalfood",
            "price": 3.34,
            "unit": "each"
        },
        {
            "name": "Auchan environnement papier toilette blanc rouleau x16",
            "category": "generalfood",
            "price": 6.15,
            "unit": "each"
        },
        {
            "name": "Lotus papier toilette confort rose ou blanc aquatube x12",
            "category": "generalfood",
            "price": 3.48,
            "unit": "each"
        },
        {
            "name": "Lotus collection papier toilette blanc ou lilas rouleau x6",
            "category": "generalfood",
            "price": 2.64,
            "unit": "each"
        },
        {
            "name": "Kleenex mouchoirs ultra soft boite cubique x56",
            "category": "generalfood",
            "price": 2.16,
            "unit": "each"
        },
        {
            "name": "Auchan mouchoirs home compact 4plis 9x24etuis",
            "category": "generalfood",
            "price": 1.99,
            "unit": "each"
        },
        {
            "name": "Auchan papier toilette rose maxi rouleaux x12",
            "category": "generalfood",
            "price": 4.05,
            "unit": "each"
        },
        {
            "name": "Auchan sacs congelation a zip petit modele 1lx25",
            "category": "generalfood",
            "price": 1.2,
            "unit": "each"
        },
        {
            "name": "Lotus mouchoirs blanc x140 pack familial",
            "category": "generalfood",
            "price": 2.1,
            "unit": "each"
        },
        {
            "name": "Tena lady serviettes nuit maxi night  x12",
            "category": "generalfood",
            "price": 7.95,
            "unit": "each"
        },
        {
            "name": "Lotus lingette toilette humide aloe vera douceur x42feuilles",
            "category": "generalfood",
            "price": 2.09,
            "unit": "each"
        },
        {
            "name": "Auchan papier toilette rose maxi rouleau 216 feuilles x6",
            "category": "generalfood",
            "price": 2.11,
            "unit": "each"
        },
        {
            "name": "Florex papier toilette blanc pure ouate x18 rouleaux",
            "category": "generalfood",
            "price": 2.79,
            "unit": "each"
        },
        {
            "name": "Auchan essuie tout decore resistant rouleau x4",
            "category": "generalfood",
            "price": 1.77,
            "unit": "each"
        },
        {
            "name": "Auchan papier hygienique 3plis rose 140 feuilles rouleau x12",
            "category": "generalfood",
            "price": 4.01,
            "unit": "each"
        },
        {
            "name": "Florex essuie-tout decore rouleau x4",
            "category": "generalfood",
            "price": 1.49,
            "unit": "each"
        },
        {
            "name": "Lotus confort papier hygienique rose aquatube rouleau x24",
            "category": "everydaylife",
            "price": 7.94,
            "unit": "each"
        },
        {
            "name": "Auchan papier hygienique 3 plis extra doux coton blanc x12",
            "category": "everydaylife",
            "price": 4.13,
            "unit": "each"
        },
        {
            "name": "Renova papier toilette yorissime rouleau x48 +24offerts",
            "category": "everydaylife",
            "price": 21.5,
            "unit": "each"
        },
        {
            "name": "Auchan mouchoirs home blancs 3 plis boite x100",
            "category": "health",
            "price": 1.05,
            "unit": "each"
        },
        {
            "name": "Auchan essuie tout blanc maxi rouleau x6",
            "category": "housecleaning",
            "price": 6.01,
            "unit": "each"
        },
        {
            "name": "Auchan papier toilette blanc maxi rouleaux 280 feuilles x6",
            "category": "everydaylife",
            "price": 2.12,
            "unit": "each"
        },
        {
            "name": "Auchan papier toilette blanc maxi rouleau 216 feuilles x12",
            "category": "everydaylife",
            "price": 4.05,
            "unit": "each"
        },
        {
            "name": "Auchan mouchoirs hello blancs 2 plis boite x100",
            "category": "health",
            "price": 0.83,
            "unit": "each"
        },
        {
            "name": "Auchan papier toilette blanc 5plis 90 feuilles rouleau x6",
            "category": "everydaylife",
            "price": 3.34,
            "unit": "each"
        },
        {
            "name": "Sopalin essuie tout sur mesure rouleau x5 +1offert",
            "category": "housecleaning",
            "price": 7.95,
            "unit": "each"
        },
        {
            "name": "Auchan essuie tout blanc maxi 90 feuilles rouleau x4",
            "category": "housecleaning",
            "price": 4.23,
            "unit": "each"
        },
        {
            "name": "Auchan environnement papier toilette blanc rouleau x16",
            "category": "everydaylife",
            "price": 6.15,
            "unit": "each"
        },
        {
            "name": "Lotus papier toilette confort rose ou blanc aquatube x12",
            "category": "everydaylife",
            "price": 3.48,
            "unit": "each"
        },
        {
            "name": "Okay essuie tout decor 3 rouleaux",
            "category": "housecleaning",
            "price": 1.99,
            "unit": "each"
        },
        {
            "name": "Sopalin essuie tout sur mesure blanc x3 = 6 rouleaux",
            "category": "housecleaning",
            "price": 4.79,
            "unit": "each"
        },
        {
            "name": "Omo lessive tropique magnolia 2 en 1 ecodose x 30 -0,723l",
            "category": "housecleaning",
            "price": 9.5,
            "unit": "each"
        },
        {
            "name": "Omo lessive diluee fleurs des tropiques 40 lavages 2l",
            "category": "housecleaning",
            "price": 6.99,
            "unit": "each"
        },
        {
            "name": "Auchan lessive liquide air de printemps 37lavages 2l",
            "category": "housecleaning",
            "price": 6.01,
            "unit": "each"
        },
        {
            "name": "Eau Ecarlate decolor stop 3x25lingettes",
            "category": "housecleaning",
            "price": 13.64,
            "unit": "each"
        },
        {
            "name": "Super Croix Bora Bora ecodose x30 -0,75l",
            "category": "housecleaning",
            "price": 9.15,
            "unit": "each"
        },
        {
            "name": "Pouce eau demineralisee 5l",
            "category": "generalfood",
            "price": 1.43,
            "unit": "each"
        },
        {
            "name": "Dr Beckmann nettoyant hygiene lave-linge 250g",
            "category": "generalfood",
            "price": 3.26,
            "unit": "each"
        },
        {
            "name": "Dash pods lessive ecodoses 3en1 lotus lys x29 -0,765kg",
            "category": "generalfood",
            "price": 11.47,
            "unit": "each"
        },
        {
            "name": "Auchan lingettes anti decoloration x20",
            "category": "generalfood",
            "price": 3.8,
            "unit": "each"
        },
        {
            "name": "Skip lessive diluee active clean lavage x72 -2x1,8l",
            "category": "generalfood",
            "price": 19.02,
            "unit": "each"
        },
        {
            "name": "Super Croix Maroc ecodose x30 -0,75l",
            "category": "generalfood",
            "price": 9.15,
            "unit": "each"
        },
        {
            "name": "Arbre Vert lessive diluee vegetal 30 lavages 2l + recharge",
            "category": "generalfood",
            "price": 10.65,
            "unit": "each"
        },
        {
            "name": "Lenor parfum de linge printemps 15 lavages 210g",
            "category": "generalfood",
            "price": 7.1,
            "unit": "each"
        },
        {
            "name": "Lenor assouplissant concentre secret charme 40 lavages 1l",
            "category": "generalfood",
            "price": 8.48,
            "unit": "each"
        },
        {
            "name": "Soupline concentre vanille mandarine 104 lavages -2x1,3l",
            "category": "generalfood",
            "price": 9.69,
            "unit": "each"
        },
        {
            "name": "Mir couleurs lessive liquide concentree 25 lavages 1,5l",
            "category": "generalfood",
            "price": 6.03,
            "unit": "each"
        },
        {
            "name": "Lenor assouplissant concentre souffle precieux 1,15l",
            "category": "generalfood",
            "price": 4.47,
            "unit": "each"
        },
        {
            "name": "Ariel simply lessive diluee intense lavage x33 -1,815l",
            "category": "generalfood",
            "price": 6.59,
            "unit": "each"
        },
        {
            "name": "Le Chat lessive liquide sensitive 3l",
            "category": "generalfood",
            "price": 15.08,
            "unit": "each"
        },
        {
            "name": "Spontex gratte eponge stop graisse x6 +2offerts",
            "category": "generalfood",
            "price": 4.94,
            "unit": "each"
        },
        {
            "name": "Auchan eponges grattantes basiques x3",
            "category": "generalfood",
            "price": 1.29,
            "unit": "each"
        },
        {
            "name": "Finish liquide de rincage 800ml",
            "category": "generalfood",
            "price": 5.24,
            "unit": "each"
        },
        {
            "name": "Auchan liquide vaisselle classique vinaigre framboise 750ml",
            "category": "generalfood",
            "price": 1.35,
            "unit": "each"
        },
        {
            "name": "Auchan liquide vaisselle soin ecolabel basilic laurier 500ml",
            "category": "generalfood",
            "price": 1.14,
            "unit": "each"
        },
        {
            "name": "Auchan pastille de lavage lave-vaisselle x45",
            "category": "generalfood",
            "price": 4.78,
            "unit": "each"
        },
        {
            "name": "Arbre Vert liquide vaisselle mains peaux sensibles 750ml",
            "category": "generalfood",
            "price": 1.93,
            "unit": "each"
        },
        {
            "name": "Auchan lave vaisselle pastille tout en 1 citron x45",
            "category": "generalfood",
            "price": 5.98,
            "unit": "each"
        },
        {
            "name": "Auchan liquide vaisselle soin zero 500ml",
            "category": "generalfood",
            "price": 1.14,
            "unit": "each"
        },
        {
            "name": "Auchan liquide vaisselle flash desincrustant 500ml",
            "category": "generalfood",
            "price": 1.3,
            "unit": "each"
        },
        {
            "name": "Auchan sel regenerant pour lave-vaisselle 4x1kg",
            "category": "generalfood",
            "price": 2.94,
            "unit": "each"
        },
        {
            "name": "Auchan liquide vaisselle classique vinaigre pomme 750ml",
            "category": "generalfood",
            "price": 1.35,
            "unit": "each"
        },
        {
            "name": "Finish liquide de rincage 800ml offre eco",
            "category": "generalfood",
            "price": 5.24,
            "unit": "each"
        },
        {
            "name": "Auchan liquide vaisselle classique tradi citron 1,5l",
            "category": "generalfood",
            "price": 2.29,
            "unit": "each"
        },
        {
            "name": "Auchan eponge grattante salle de bain x2",
            "category": "generalfood",
            "price": 1.34,
            "unit": "each"
        },
        {
            "name": "Auchan liquide de rincage lave vaisselle fresh 500ml",
            "category": "generalfood",
            "price": 1.25,
            "unit": "each"
        },
        {
            "name": "Spontex gratte-eponge stop-graisse x2",
            "category": "generalfood",
            "price": 1.71,
            "unit": "each"
        },
        {
            "name": "Auchan liquide vaisselle anti bacterien 500ml",
            "category": "generalfood",
            "price": 1.3,
            "unit": "each"
        },
        {
            "name": "Auchan liquide vaisselle soin peau sensible 500ml",
            "category": "generalfood",
            "price": 1.14,
            "unit": "each"
        },
        {
            "name": "Mir liquide vaissellle framboise groseille 750ml",
            "category": "generalfood",
            "price": 1.73,
            "unit": "each"
        },
        {
            "name": "Auchan sac poubelle liens coulissants 50l x15",
            "category": "generalfood",
            "price": 2.35,
            "unit": "each"
        },
        {
            "name": "Auchan sac poubelle ultra resistant coulissant 10x50l",
            "category": "generalfood",
            "price": 2.7,
            "unit": "each"
        },
        {
            "name": "Auchan sac poubelle a liens coulissants 100l x10",
            "category": "generalfood",
            "price": 2.15,
            "unit": "each"
        },
        {
            "name": "Auchan sac poubelle liens coulissants 30l x25",
            "category": "generalfood",
            "price": 2.45,
            "unit": "each"
        },
        {
            "name": "Auchan film fraicheur 50mx29cm",
            "category": "generalfood",
            "price": 1.8,
            "unit": "each"
        },
        {
            "name": "Spontex gratte eponge stop graisse x6 +2offerts",
            "category": "generalfood",
            "price": 4.94,
            "unit": "each"
        },
        {
            "name": "Auchan eponges grattantes basiques x3",
            "category": "generalfood",
            "price": 1.29,
            "unit": "each"
        },
        {
            "name": "Auchan sacs poubelle lien coulissant poubelle haute 50l x10",
            "category": "generalfood",
            "price": 1.65,
            "unit": "each"
        },
        {
            "name": "Auchan papier aluminium rouleau de 20m",
            "category": "generalfood",
            "price": 1.73,
            "unit": "each"
        },
        {
            "name": "Auchan papier cuisson extra large 8mx36cm",
            "category": "generalfood",
            "price": 1.22,
            "unit": "each"
        },
        {
            "name": "Auchan papier aluminium rouleau de 50m",
            "category": "generalfood",
            "price": 3.26,
            "unit": "each"
        },
        {
            "name": "Auchan papier cuisson feuille a feuille x16",
            "category": "generalfood",
            "price": 1.1,
            "unit": "each"
        },
        {
            "name": "Auchan sac congelation a zip modele moyen 3l x20",
            "category": "generalfood",
            "price": 1.4,
            "unit": "each"
        },
        {
            "name": "Auchan Mieux Vivre allume feu 100% naturel x24",
            "category": "generalfood",
            "price": 1.11,
            "unit": "each"
        },
        {
            "name": "Auchan sac poubelle lien classique 50l x15",
            "category": "generalfood",
            "price": 1.85,
            "unit": "each"
        },
        {
            "name": "Auchan sac poubelle ultra resistant coulissant 20x30l",
            "category": "generalfood",
            "price": 2.5,
            "unit": "each"
        },
        {
            "name": "Auchan sacs congelation a zip petit modele 1lx25",
            "category": "generalfood",
            "price": 1.2,
            "unit": "each"
        },
        {
            "name": "Auchan allume feu cube sous sachet x20",
            "category": "generalfood",
            "price": 2.43,
            "unit": "each"
        },
        {
            "name": "Spontex gratte eponge stop graisse x8 +eponge mosaique x3",
            "category": "generalfood",
            "price": 5.25,
            "unit": "each"
        },
        {
            "name": "Auchan sac poubelle a lien classique 100l x10",
            "category": "generalfood",
            "price": 2.11,
            "unit": "each"
        },
        {
            "name": "Auchan lingettes multi-usages antibacteriennes x40",
            "category": "generalfood",
            "price": 1.55,
            "unit": "each"
        },
        {
            "name": "Auchan lingettes wc antibacteriennes x40",
            "category": "generalfood",
            "price": 2.07,
            "unit": "each"
        },
        {
            "name": "Auchan lingettes nettoyantes multi usage x40",
            "category": "generalfood",
            "price": 1.24,
            "unit": "each"
        },
        {
            "name": "Sanytol desinfectant nettoyant multi-usages 1l",
            "category": "generalfood",
            "price": 3.27,
            "unit": "each"
        },
        {
            "name": "Sanytol lingettes desinfectantes multi-usage x48",
            "category": "generalfood",
            "price": 2.2,
            "unit": "each"
        },
        {
            "name": "Bref wc power activ eau bleue 2x50g",
            "category": "generalfood",
            "price": 3.46,
            "unit": "each"
        },
        {
            "name": "Sanytol desinfectant multi-usages spray 500ml",
            "category": "generalfood",
            "price": 3.06,
            "unit": "each"
        },
        {
            "name": "Arbre Vert lessive vegetale ecolabel 45 lavages 3l",
            "category": "generalfood",
            "price": 10.32,
            "unit": "each"
        },
        {
            "name": "Briochin savon noir liquide 1l",
            "category": "generalfood",
            "price": 3.36,
            "unit": "each"
        },
        {
            "name": "Lavofruit nettoyant menager bactericide fraise 1l",
            "category": "generalfood",
            "price": 3.87,
            "unit": "each"
        },
        {
            "name": "Auchan lingettes multi-usage citron x40",
            "category": "generalfood",
            "price": 1.55,
            "unit": "each"
        },
        {
            "name": "Auchan pastilles de javel x52 -170g",
            "category": "generalfood",
            "price": 2.1,
            "unit": "each"
        },
        {
            "name": "Auchan lingettes nettoyantes imbibees pour le sol x15",
            "category": "generalfood",
            "price": 1.86,
            "unit": "each"
        },
        {
            "name": "Auchan gel wc javel eucalyptus 750ml",
            "category": "generalfood",
            "price": 0.94,
            "unit": "each"
        },
        {
            "name": "Auchan lingettes multi-usage fraicheur marine x40",
            "category": "generalfood",
            "price": 1.55,
            "unit": "each"
        },
        {
            "name": "Lacroix javel precise tonique 750ml",
            "category": "generalfood",
            "price": 1.82,
            "unit": "each"
        },
        {
            "name": "Pliz fee du logis aerosol 300ml",
            "category": "generalfood",
            "price": 2.5,
            "unit": "each"
        },
        {
            "name": "Harpic lingette desinfectante wc marine x80 offre decouverte",
            "category": "generalfood",
            "price": 3.99,
            "unit": "each"
        },
        {
            "name": "Vitroclean nettoyant plaques vitroceramique induction 250ml",
            "category": "generalfood",
            "price": 3.32,
            "unit": "each"
        },
        {
            "name": "Auchan nettoyant menager parfum fleurs rouges 1 l",
            "category": "generalfood",
            "price": 1.44,
            "unit": "each"
        },
        {
            "name": "Auchan litiere pour chat 16l",
            "category": "generalfood",
            "price": 3.9,
            "unit": "each"
        },
        {
            "name": "Auchan litiere compact 5l",
            "category": "generalfood",
            "price": 3.94,
            "unit": "each"
        },
        {
            "name": "Nullodor litiere pour chat 1,5kg",
            "category": "generalfood",
            "price": 5.33,
            "unit": "each"
        },
        {
            "name": "Auchan bouchees en sauce assort poissons boites 3x400g",
            "category": "generalfood",
            "price": 2.3,
            "unit": "each"
        },
        {
            "name": "Felix effiles de viande et poisson en gelee sachets 44x100g",
            "category": "generalfood",
            "price": 14.39,
            "unit": "each"
        },
        {
            "name": "Whiskas selection sauce 4 varietes sachet fraicheur 72x100g",
            "category": "generalfood",
            "price": 24.95,
            "unit": "each"
        },
        {
            "name": "Terdis litiere tranquille christal bicabornite 4l",
            "category": "generalfood",
            "price": 5.3,
            "unit": "each"
        },
        {
            "name": "Auchan bouchees en sauce viandes pour chat sachets 24x100g",
            "category": "generalfood",
            "price": 6.55,
            "unit": "each"
        },
        {
            "name": "Auchan Expert croquette au boeuf pour chat sterilise 1,5kg",
            "category": "generalfood",
            "price": 4.9,
            "unit": "each"
        },
        {
            "name": "Auchan junior bouchees sauce  pour chat sachets 12x100g",
            "category": "generalfood",
            "price": 3.59,
            "unit": "each"
        },
        {
            "name": "Auchan eminces en gelee sachets mixte pour chat 12x100g",
            "category": "generalfood",
            "price": 3.19,
            "unit": "each"
        },
        {
            "name": "Purina One junior croquette pour chat 1,5kg",
            "category": "generalfood",
            "price": 6.8,
            "unit": "each"
        },
        {
            "name": "Purina One chat d'interieur sterilise poulet et cereale 1,5k",
            "category": "generalfood",
            "price": 7.01,
            "unit": "each"
        },
        {
            "name": "Perfect Fit croquettes saumon  chat adulte sterilise 1.4 kg",
            "category": "generalfood",
            "price": 5.95,
            "unit": "each"
        },
        {
            "name": "Pouce litiere 7l",
            "category": "generalfood",
            "price": 0.98,
            "unit": "each"
        },
        {
            "name": "Brekkies Excel croquettes chat sterilise 1,5kg",
            "category": "generalfood",
            "price": 3.24,
            "unit": "each"
        },
        {
            "name": "Perfect Fit adulte sterilise croquette riche en boeuf  1,4kg",
            "category": "generalfood",
            "price": 5.95,
            "unit": "each"
        },
        {
            "name": "Gourmet gold coeur fondant barquettes 12x85g",
            "category": "generalfood",
            "price": 5.89,
            "unit": "each"
        },
        {
            "name": "Catsan litiere sans odeur active fresh 5l",
            "category": "generalfood",
            "price": 6.6,
            "unit": "each"
        },
        {
            "name": "Auchan multicroquettes au boeuf pour chat 7,5kg",
            "category": "generalfood",
            "price": 8.5,
            "unit": "each"
        },
        {
            "name": "Auchan bouchees en gelee viandes pour chien boites 6x400g",
            "category": "generalfood",
            "price": 4.1,
            "unit": "each"
        },
        {
            "name": "Pedigree Sachets Fraicheur pour chien en gelee 72x100g",
            "category": "generalfood",
            "price": 22.5,
            "unit": "each"
        },
        {
            "name": "Brekkies Excel multicroc croquettes au boeuf et legumes 10kg",
            "category": "generalfood",
            "price": 11.35,
            "unit": "each"
        },
        {
            "name": "Auchan terrine assort viandes pour chien barquette 3x300g",
            "category": "generalfood",
            "price": 3.1,
            "unit": "each"
        },
        {
            "name": "Pedigree dentastix hygiene dentaire grand chien x28 -1080g",
            "category": "generalfood",
            "price": 7.97,
            "unit": "each"
        },
        {
            "name": "Auchan croquettes pour chien viande bouchees moelleuses 10kg",
            "category": "generalfood",
            "price": 10.35,
            "unit": "each"
        },
        {
            "name": "Frolic croquettes boeuf carottes et cereales 4kg",
            "category": "generalfood",
            "price": 7.99,
            "unit": "each"
        },
        {
            "name": "Cesar barquette pour chien en terrine traiteur 4x150g",
            "category": "generalfood",
            "price": 3.45,
            "unit": "each"
        },
        {
            "name": "Pedigree gelee gourmande pour chien sachet fraicheur 12x100g",
            "category": "generalfood",
            "price": 4.89,
            "unit": "each"
        },
        {
            "name": "Pedigree croquettes boeuf pour chien adulte 10kg",
            "category": "generalfood",
            "price": 14.15,
            "unit": "each"
        },
        {
            "name": "Pedigree mini chien adulte-10kg croquette poulet legumes 6kg",
            "category": "generalfood",
            "price": 13.99,
            "unit": "each"
        },
        {
            "name": "Auchan expert croquettes volaille pour chien 1,5kg",
            "category": "generalfood",
            "price": 3.85,
            "unit": "each"
        },
        {
            "name": "Canigou pate et morceaux recette allegee boite 4x400g",
            "category": "generalfood",
            "price": 3.58,
            "unit": "each"
        },
        {
            "name": "Pedigree schmackos recompense pour chien stick x20 -172g",
            "category": "generalfood",
            "price": 2.09,
            "unit": "each"
        },
        {
            "name": "Fido croquettes pour chien croq et tendre au poulet 3kg",
            "category": "generalfood",
            "price": 6.55,
            "unit": "each"
        },
        {
            "name": "Auchan terrine au boeuf en boite 1,220kg",
            "category": "generalfood",
            "price": 1.5,
            "unit": "each"
        },
        {
            "name": "Ultima chien nature no grain mini adult croquettes 1,10kg",
            "category": "generalfood",
            "price": 6.65,
            "unit": "each"
        },
        {
            "name": "Auchan multicroquettes poulet et moelleuses pour chien 2kg",
            "category": "generalfood",
            "price": 2.77,
            "unit": "each"
        },
        {
            "name": "Auchan Junior terrine volaille pour chien boite 3x400g",
            "category": "generalfood",
            "price": 2.34,
            "unit": "each"
        },
        {
            "name": "Ultima croquette special mini chien adulte 1,5kg",
            "category": "generalfood",
            "price": 4.35,
            "unit": "each"
        },
        {
            "name": "Auchan menu complet pour lapin nain 500g",
            "category": "generalfood",
            "price": 2.8,
            "unit": "each"
        },
        {
            "name": "Auchan menu complet pour cochon d'inde 500g",
            "category": "generalfood",
            "price": 2.8,
            "unit": "each"
        },
        {
            "name": "Riga sciure pour rongeurs 1kg",
            "category": "generalfood",
            "price": 1.52,
            "unit": "each"
        },
        {
            "name": "foin 1kg",
            "category": "generalfood",
            "price": 2.01,
            "unit": "each"
        },
        {
            "name": "melange de graines pour oiseaux de la nature 1,5kg",
            "category": "generalfood",
            "price": 1.84,
            "unit": "each"
        },
        {
            "name": "Riga tetra flocons pour poissons rouges 250ml",
            "category": "generalfood",
            "price": 4.56,
            "unit": "each"
        },
        {
            "name": "Auchan biscuits aux fruits pour oiseaux x6 -70g",
            "category": "generalfood",
            "price": 2.33,
            "unit": "each"
        },
        {
            "name": "Riga biscuits au miel pour oiseaux x6",
            "category": "generalfood",
            "price": 2.11,
            "unit": "each"
        },
        {
            "name": "Auchan menu complet pour canaris 800g",
            "category": "generalfood",
            "price": 3.07,
            "unit": "each"
        },
        {
            "name": "Auchan menu complet pour grandes perruches 800g",
            "category": "generalfood",
            "price": 3.48,
            "unit": "each"
        },
        {
            "name": "Auchan menu complet pour perruches 800g",
            "category": "generalfood",
            "price": 3.28,
            "unit": "each"
        },
        {
            "name": "kit hiver degivrant pour voiture",
            "category": "generalfood",
            "price": 6.99,
            "unit": "each"
        },
        {
            "name": "Florex essuie-tout decore rouleau x4",
            "category": "generalfood",
            "price": 1.49,
            "unit": "each"
        },
        {
            "name": "Axal sel adoucisseur 25kg",
            "category": "generalfood",
            "price": 10.5,
            "unit": "each"
        },
        {
            "name": "Energizer pile AA-LR6 x16 family pack",
            "category": "generalfood",
            "price": 9.99,
            "unit": "each"
        },
        {
            "name": "Auchan piles alcaline LR6 x8",
            "category": "generalfood",
            "price": 2.9,
            "unit": "each"
        },
        {
            "name": "Energizer pile AAA-LR03 x16 family pack",
            "category": "generalfood",
            "price": 9.99,
            "unit": "each"
        },
        {
            "name": "papier cadeau Noel 10mx0,70m",
            "category": "generalfood",
            "price": 1.99,
            "unit": "each"
        },
        {
            "name": "Auchan bobine essuie tout multi usages feuille x500",
            "category": "generalfood",
            "price": 5.29,
            "unit": "each"
        },
        {
            "name": "boite de cotillons pour 10 personnes",
            "category": "generalfood",
            "price": 4.99,
            "unit": "each"
        },
        {
            "name": "Auchan pile rechargeable HR06 2500mah x4",
            "category": "generalfood",
            "price": 9.9,
            "unit": "each"
        },
        {
            "name": "combustible desaromatise pour appareil mobile chauffage 20l",
            "category": "generalfood",
            "price": 20.99,
            "unit": "each"
        },
        {
            "name": "Auchan pile rechargeable HR03 1000mah x4",
            "category": "generalfood",
            "price": 8.9,
            "unit": "each"
        },
        {
            "name": "Duracell 2032 x2",
            "category": "generalfood",
            "price": 7.89,
            "unit": "each"
        },
        {
            "name": "Chef et Sommelier set de 2 verres a vin rouge 47cl collector",
            "category": "generalfood",
            "price": 13.99,
            "unit": "each"
        },
        {
            "name": "Chef&Sommelier set de 2 flutes a Champagne 24cl collector",
            "category": "generalfood",
            "price": 11.99,
            "unit": "each"
        },
        {
            "name": "Auchan piles alcaline LR14 x2",
            "category": "generalfood",
            "price": 2.9,
            "unit": "each"
        },
        {
            "name": "Auchan 3 tonnelets de 100 piques en bois",
            "category": "generalfood",
            "price": 1.5,
            "unit": "each"
        },
        {
            "name": "Auchan piles alcaline LR20 x2",
            "category": "generalfood",
            "price": 2.9,
            "unit": "each"
        },
        {
            "name": "Auchan piles alcaline LR3 AAA x4",
            "category": "generalfood",
            "price": 1.5,
            "unit": "each"
        },
        {
            "name": "Brita maxtra+ pack de 2 cartouches",
            "category": "generalfood",
            "price": 16.99,
            "unit": "each"
        },
        {
            "name": "papier cadeau Noel 10mx0,70m",
            "category": "generalfood",
            "price": 1.99,
            "unit": "each"
        },
        {
            "name": "Auchan papier cadeau metal sparkling winter 2m x0,70m",
            "category": "generalfood",
            "price": 1.6,
            "unit": "each"
        },
        {
            "name": "Auchan enveloppe NF auto-adhesive 80g 110mmx220mm  x100",
            "category": "generalfood",
            "price": 2.95,
            "unit": "each"
        },
        {
            "name": "Auchan carnet enveloppes precasees 110x220 mm 90g x50",
            "category": "generalfood",
            "price": 2.25,
            "unit": "each"
        },
        {
            "name": "Auchan carnet enveloppes precasees 114x162 mm 90g x50",
            "category": "generalfood",
            "price": 1.95,
            "unit": "each"
        },
        {
            "name": "Bic feutre coloriage kid couleur x12",
            "category": "generalfood",
            "price": 2.44,
            "unit": "each"
        },
        {
            "name": "Bic kids tropicolors crayon de couleur x18",
            "category": "generalfood",
            "price": 1.95,
            "unit": "each"
        },
        {
            "name": "Auchan enveloppe papier kraft 162x229 auto-adhesive 90g x25",
            "category": "generalfood",
            "price": 1.45,
            "unit": "each"
        },
        {
            "name": "Johnny Hallyday Mon Pays c'est l'Amour cd collector",
            "category": "generalfood",
            "price": 17.99,
            "unit": "each"
        },
        {
            "name": "H.Packard ndeg301 cartouche d'encre noire",
            "category": "generalfood",
            "price": 17.99,
            "unit": "each"
        },
        {
            "name": "Pokemon booster sl05 ultra prisme",
            "category": "generalfood",
            "price": 5.9,
            "unit": "each"
        },
        {
            "name": "Uhu 3 sticks colle 8,2g super heros",
            "category": "generalfood",
            "price": 4.23,
            "unit": "each"
        },
        {
            "name": "Auchan rouleau adhesif invisible 19mnx25m",
            "category": "generalfood",
            "price": 1.59,
            "unit": "each"
        },
        {
            "name": "Bic tipp ex mini pocket mouse fashion x3",
            "category": "generalfood",
            "price": 4.6,
            "unit": "each"
        },
        {
            "name": "Auchan pochette A4 perforee lisse 50 microns x50",
            "category": "generalfood",
            "price": 2.75,
            "unit": "each"
        },
        {
            "name": "Auchan classeur A4 souple 21x29,7cm dos personnalisable",
            "category": "generalfood",
            "price": 2.8,
            "unit": "each"
        },
        {
            "name": "Bic ardoise ergonomique 20x30cm +1 feutre +1 effacette",
            "category": "generalfood",
            "price": 1.99,
            "unit": "each"
        },
        {
            "name": "Uhu stick colle 21g",
            "category": "generalfood",
            "price": 3.0,
            "unit": "each"
        },
        {
            "name": "Auchan adhesif invisible devidoir 19mmx25m",
            "category": "generalfood",
            "price": 1.89,
            "unit": "each"
        },
        {
            "name": "Auchan protege documents 120 vues 21x29,7cm coloris assortis",
            "category": "generalfood",
            "price": 3.8,
            "unit": "each"
        },
        {
            "name": "Clairefontaine copie double perforee 200p 90g 21x29,7cm",
            "category": "generalfood",
            "price": 4.75,
            "unit": "each"
        },
        {
            "name": "Auchan protege-cahiers avec rabats x5 -24x32cm",
            "category": "generalfood",
            "price": 6.1,
            "unit": "each"
        },
        {
            "name": "Auchan 3 pinceaux aquarelle ndeg4-10-16",
            "category": "generalfood",
            "price": 1.69,
            "unit": "each"
        },
        {
            "name": "Auchan protege cahier 21x29,7cm avec rabats cristal incolore",
            "category": "generalfood",
            "price": 1.35,
            "unit": "each"
        },
        {
            "name": "Bic stylo bille cristal assorti x10",
            "category": "generalfood",
            "price": 1.99,
            "unit": "each"
        },
        {
            "name": "Auchan trieur personnalisable 12 positions",
            "category": "generalfood",
            "price": 4.95,
            "unit": "each"
        },
        {
            "name": "Pilot 1 recharge bleu pour stylo frixion ball x3 + 1 etui",
            "category": "generalfood",
            "price": 4.98,
            "unit": "each"
        },
        {
            "name": "Auchan intercalaire 12 positions A4 carton lustre",
            "category": "generalfood",
            "price": 1.85,
            "unit": "each"
        },
        {
            "name": "Auchan peinture 10 tubes 10ml +1 pinceau ndeg8",
            "category": "generalfood",
            "price": 2.89,
            "unit": "each"
        },
        {
            "name": "Auchan chemise a elastique 3 rabats 24x32cm",
            "category": "generalfood",
            "price": 1.75,
            "unit": "each"
        },
        {
            "name": "Auchan ramette papier ultra blanc 80g - 500 feuilles A4",
            "category": "generalfood",
            "price": 4.1,
            "unit": "each"
        },
        {
            "name": "Energizer pile AA-LR6 x16 family pack",
            "category": "generalfood",
            "price": 9.99,
            "unit": "each"
        },
        {
            "name": "Auchan piles alcaline LR6 x8",
            "category": "generalfood",
            "price": 2.9,
            "unit": "each"
        },
        {
            "name": "Energizer pile AAA-LR03 x16 family pack",
            "category": "generalfood",
            "price": 9.99,
            "unit": "each"
        },
        {
            "name": "papier cadeau Noel 10mx0,70m",
            "category": "generalfood",
            "price": 1.99,
            "unit": "each"
        },
        {
            "name": "Auchan Mieux Vivre allume feu 100% naturel x24",
            "category": "generalfood",
            "price": 1.11,
            "unit": "each"
        },
        {
            "name": "boite de cotillons pour 10 personnes",
            "category": "generalfood",
            "price": 4.99,
            "unit": "each"
        },
        {
            "name": "Auchan pile rechargeable HR06 2500mah x4",
            "category": "generalfood",
            "price": 9.9,
            "unit": "each"
        },
        {
            "name": "Auchan allume feu cube sous sachet x20",
            "category": "generalfood",
            "price": 2.43,
            "unit": "each"
        },
        {
            "name": "Auchan pile rechargeable HR03 1000mah x4",
            "category": "generalfood",
            "price": 8.9,
            "unit": "each"
        },
        {
            "name": "Auchan allume feu cubes sans odeur x24",
            "category": "generalfood",
            "price": 1.78,
            "unit": "each"
        },
        {
            "name": "Duracell 2032 x2",
            "category": "generalfood",
            "price": 7.89,
            "unit": "each"
        },
        {
            "name": "Auchan piles alcaline LR14 x2",
            "category": "generalfood",
            "price": 2.9,
            "unit": "each"
        },
        {
            "name": "Auchan piles alcaline LR20 x2",
            "category": "generalfood",
            "price": 2.9,
            "unit": "each"
        },
        {
            "name": "Auchan piles alcaline LR3 AAA x4",
            "category": "generalfood",
            "price": 1.5,
            "unit": "each"
        },
        {
            "name": "Auchan papier cadeau metal sparkling winter 2m x0,70m",
            "category": "generalfood",
            "price": 1.6,
            "unit": "each"
        },
        {
            "name": "Auchan allume feu gel 1l",
            "category": "generalfood",
            "price": 3.23,
            "unit": "each"
        },
        {
            "name": "Zip allume feux classique sans odeur x40",
            "category": "generalfood",
            "price": 2.11,
            "unit": "each"
        },
        {
            "name": "Auchan piles alcaline LR6 AA x4",
            "category": "generalfood",
            "price": 1.5,
            "unit": "each"
        },
        {
            "name": "Duracell plus power AAA x8",
            "category": "generalfood",
            "price": 9.99,
            "unit": "each"
        },
        {
            "name": "Flam Up allumettes de 5cm boite 3x240",
            "category": "generalfood",
            "price": 1.86,
            "unit": "each"
        },
        {
            "name": "In Extenso collant ventre plat noir 25D taille 3",
            "category": "generalfood",
            "price": 4.99,
            "unit": "each"
        },
        {
            "name": "Dim collant body touch noir transparent 20D taille 3",
            "category": "generalfood",
            "price": 6.59,
            "unit": "each"
        },
        {
            "name": "Dim collant body touch opaque noir 40D taille 2",
            "category": "generalfood",
            "price": 8.99,
            "unit": "each"
        },
        {
            "name": "Dim collant teint soleil ventre clair taille 2",
            "category": "generalfood",
            "price": 8.59,
            "unit": "each"
        },
        {
            "name": "Dim mi-bas maxi format longue duree capri 35/41 x4 paires",
            "category": "generalfood",
            "price": 3.99,
            "unit": "each"
        },
        {
            "name": "Dim collant body touch opaque noir 40D taille 3",
            "category": "generalfood",
            "price": 8.99,
            "unit": "each"
        },
        {
            "name": "Dim collant body touch noir transparent 20D taille 4",
            "category": "generalfood",
            "price": 6.59,
            "unit": "each"
        },
        {
            "name": "Dim collant body touch noir transparent 20D taille 2",
            "category": "generalfood",
            "price": 6.59,
            "unit": "each"
        },
        {
            "name": "In Extenso collant ventre plat noir 25D taille 2",
            "category": "generalfood",
            "price": 4.99,
            "unit": "each"
        },
        {
            "name": "Dim collant body touch opaque noir 40D taille 4",
            "category": "generalfood",
            "price": 8.99,
            "unit": "each"
        },
        {
            "name": "Dim mi-bas noir x4 taille 35/41",
            "category": "generalfood",
            "price": 3.99,
            "unit": "each"
        },
        {
            "name": "In Extenso collant ventre plat noir 25D taille 4",
            "category": "generalfood",
            "price": 4.99,
            "unit": "each"
        },
        {
            "name": "Dim socquette noir x4 taille 35/41",
            "category": "generalfood",
            "price": 3.99,
            "unit": "each"
        },
        {
            "name": "Dim socquette capri x4 taille 35/41",
            "category": "generalfood",
            "price": 3.99,
            "unit": "each"
        },
        {
            "name": "Dim socquette daim x4 taille 35/41",
            "category": "generalfood",
            "price": 3.99,
            "unit": "each"
        },
        {
            "name": "Dim protege pieds clair x4 taille 39/42",
            "category": "generalfood",
            "price": 5.99,
            "unit": "each"
        },
        {
            "name": "Dim protege pieds clair x4 taille 35/38",
            "category": "generalfood",
            "price": 5.99,
            "unit": "each"
        },
        {
            "name": "Dim collant teint soleil ventre clair taille 4",
            "category": "generalfood",
            "price": 8.59,
            "unit": "each"
        },
        {
            "name": "Mmm! saint felicien 180g",
            "category": "generalfood",
            "price": 2.03,
            "unit": "each"
        },
        {
            "name": "Raffin saucisson sec pur porc extra maigre 220g",
            "category": "generalfood",
            "price": 4.74,
            "unit": "each"
        },
        {
            "name": "Thomas le prince pur jus pomme bio 1l",
            "category": "generalfood",
            "price": 2.5,
            "unit": "each"
        },
        {
            "name": "Apremont vin de Savoie cuvee reservee 11,5deg -75cl",
            "category": "generalfood",
            "price": 5.29,
            "unit": "each"
        },
        {
            "name": "Alpina savoie crozets nature 400g",
            "category": "generalfood",
            "price": 2.77,
            "unit": "each"
        },
        {
            "name": "Mmm! cantal entre-deux 250g",
            "category": "generalfood",
            "price": 2.7,
            "unit": "each"
        },
        {
            "name": "Mmm! Saint Nectaire demi AOP 300g",
            "category": "generalfood",
            "price": 3.04,
            "unit": "each"
        },
        {
            "name": "Vichy Celestins eau minerale naturelle gazeuse 6x1,25l",
            "category": "generalfood",
            "price": 3.36,
            "unit": "each"
        },
        {
            "name": "Raffin mini buchette pur porc nature 100g",
            "category": "generalfood",
            "price": 2.45,
            "unit": "each"
        },
        {
            "name": "Mondeuse vin de Savoie rouge cuvee reservee 12deg -75cl",
            "category": "generalfood",
            "price": 5.5,
            "unit": "each"
        },
        {
            "name": "Auchan galette de ble noir x6 -300g",
            "category": "generalfood",
            "price": 2.5,
            "unit": "each"
        },
        {
            "name": "Saint Michel madeleine coquille pepite oeuf plein air 400g",
            "category": "generalfood",
            "price": 2.37,
            "unit": "each"
        },
        {
            "name": "Mmm! chevre sainte maure aop 250g",
            "category": "generalfood",
            "price": 4.25,
            "unit": "each"
        },
        {
            "name": "Pierre Chanau IGP ile de beaute rose 11,5deg -75cl",
            "category": "generalfood",
            "price": 3.15,
            "unit": "each"
        },
        {
            "name": "Pietra biere 6deg canette 33cl",
            "category": "generalfood",
            "price": 1.8,
            "unit": "each"
        },
        {
            "name": "Pierre Chanau vin de Corse rose 12,5deg -75cl",
            "category": "generalfood",
            "price": 4.25,
            "unit": "each"
        },
        {
            "name": "Marie quiche lorraine creme 400g",
            "category": "generalfood",
            "price": 2.58,
            "unit": "each"
        },
        {
            "name": "Picon Biere aperitif a l'orange 18deg -1l",
            "category": "generalfood",
            "price": 9.83,
            "unit": "each"
        },
        {
            "name": "Mmm! mimolette vieille 200g",
            "category": "generalfood",
            "price": 2.64,
            "unit": "each"
        },
        {
            "name": "Auchan gaufres liegeoises x7 - 350g",
            "category": "generalfood",
            "price": 1.38,
            "unit": "each"
        },
        {
            "name": "Simon salade de thon 150g",
            "category": "generalfood",
            "price": 2.19,
            "unit": "each"
        },
        {
            "name": "Ch'ti biere blonde 6,4deg -75cl",
            "category": "generalfood",
            "price": 2.41,
            "unit": "each"
        },
        {
            "name": "Rince Cochon 8,5deg -75cl",
            "category": "generalfood",
            "price": 3.31,
            "unit": "each"
        },
        {
            "name": "Auchan cigarettes gourmandes 180g",
            "category": "generalfood",
            "price": 1.01,
            "unit": "each"
        },
        {
            "name": "Verquin tetes brulees fraise framboise kitache 135g",
            "category": "generalfood",
            "price": 1.88,
            "unit": "each"
        },
        {
            "name": "Verquin tetes brulees sticks fraise pomme 200g",
            "category": "generalfood",
            "price": 1.98,
            "unit": "each"
        },
        {
            "name": "pomme de terre de consommation filet 10kg",
            "category": "generalfood",
            "price": 3.99,
            "unit": "each"
        },
        {
            "name": "Rince Cochon biere ipa 6deg -75cl",
            "category": "generalfood",
            "price": 4.58,
            "unit": "each"
        },
        {
            "name": "Prince tout chocolat 300g",
            "category": "generalfood",
            "price": 1.2,
            "unit": "each"
        },
        {
            "name": "Rik & Rok barquette au chocolat 120g",
            "category": "generalfood",
            "price": 0.7,
            "unit": "each"
        },
        {
            "name": "Mmm! creme fraiche d'Isigny 396g",
            "category": "generalfood",
            "price": 2.32,
            "unit": "each"
        },
        {
            "name": "Lune de Miel miel de fleurs liquide doseur 500g",
            "category": "generalfood",
            "price": 4.38,
            "unit": "each"
        },
        {
            "name": "Michaud lune de miel tartimiel 250g",
            "category": "generalfood",
            "price": 2.36,
            "unit": "each"
        },
        {
            "name": "Etorki fromage de brebis 180g",
            "category": "generalfood",
            "price": 2.87,
            "unit": "each"
        },
        {
            "name": "Jurancon fruite reserve royale 12,5deg -75cl",
            "category": "generalfood",
            "price": 7.19,
            "unit": "each"
        },
        {
            "name": "Lune de Miel miel de thym pot en verre 375g",
            "category": "generalfood",
            "price": 5.09,
            "unit": "each"
        },
        {
            "name": "Jurancon vendanges tardives moelleux Choix Prince 12deg -75cl",
            "category": "generalfood",
            "price": 11.0,
            "unit": "each"
        },
        {
            "name": "Mmm! pruneaux d'agen denoyautes 250g",
            "category": "generalfood",
            "price": 2.19,
            "unit": "each"
        },
        {
            "name": "Istara p'tit basque 220g",
            "category": "generalfood",
            "price": 4.22,
            "unit": "each"
        },
        {
            "name": "Petit Basque yaourt de brebis sur lit de chataigne 2x125g",
            "category": "generalfood",
            "price": 1.86,
            "unit": "each"
        },
        {
            "name": "Lune de Miel miel d'acacia liquide pot en verre 375g",
            "category": "generalfood",
            "price": 5.01,
            "unit": "each"
        },
        {
            "name": "Lune de Miel miel de fleurs bio cremeux pot en carton 750g",
            "category": "generalfood",
            "price": 8.23,
            "unit": "each"
        },
        {
            "name": "Lune de Miel miel de fleurs bio eco doseur 500g",
            "category": "generalfood",
            "price": 5.33,
            "unit": "each"
        }
    ]
);
