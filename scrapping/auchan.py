from bs4 import BeautifulSoup

import unidecode
import requests
import time
import re
import json

#url = 'https://www.auchandrive.fr/drive/mag/update-527/'
url = "https://www.auchandrive.fr/drive/mag/Viry-Noureuil-98501/"
#r = requests.get(url)
# print(r.cookies)

#r1 = requests.get("https://www.auchandrive.fr/nos-rayons",cookies=r.cookies)
# print(r1.content)

s = requests.Session()

s.get(url)
time.sleep(1)
print(s.cookies)
r1 = s.get("https://www.auchandrive.fr/nos-rayons")

soup = BeautifulSoup(r1.content, features="lxml")

# '{"cookies": {"sessioncookie": "123456789"}}'

urlCategories = []
for a in soup.find_all("a", {"href": lambda L: L and L.startswith('/nos-rayons/')}):
    print("Found the URL:", a['href'])
    urlCategories.append("https://www.auchandrive.fr"+a['href'])
urlRayons = []
nameRayons = []
for cat in urlCategories:

    r1 = s.get(cat)
    soup = BeautifulSoup(r1.content, features="lxml")
    time.sleep(0.5)
    for a in soup.find_all("a", {"href": lambda L: L and L.startswith('/catalog/')}):
        # print(a['href'].split("/"))
        print(a['href'].split("/"))
        if(len(a['href'].split("/")) == 4) and not ("https://www.auchandrive.fr"+a['href'] in urlRayons):
            print("Found the URL:", a['href'])
            categoryName = a['href'].split("/")[2]
            categoryName = categoryName.split("-")[0]
            if categoryName == "le":
                categoryName = "le-marche"

            urlRayons.append("https://www.auchandrive.fr" +
                              a['href'])
            nameRayons.append(categoryName)


products = []
meatList = ["poulet","boeuf","crevette","escargot","huitre","bœuf","poisson","saumon","dinde","porc","volaille","canard","viande","boudin","sang","chapon"]
veganList = ["oeuf","œuf","lait","fromage","beurre","miel","lactiques"]
alcoolList = ["vin","liqueur","vodka","cidre","bière","biere","cognac","alcool"]
with open('cat.txt', 'w') as outfile:
    json.dump(nameRayons, outfile)
#urlArticles = []
for i,ray in enumerate(urlRayons):

    r1 = s.get(ray)
    soup = BeautifulSoup(r1.content, features="lxml")
    time.sleep(1)
    for a in soup.find_all("article"):
        bio = False
        frozen = False
        meat = False
        vegan = True
        alcool = False
        for b in a.find_all("img"):
            if "PICTO_bio.gif.svg" in b["src"]:
                bio = True
            if "PICTO_surgele.gif.svg" in b["src"]:
                frozen = True
        time.sleep(0.3)
        urlProduct=""
        for url in a.find_all("a", {"href": lambda L: L and L.startswith('/catalog/')}):
            urlProduct= "https://www.auchandrive.fr" +  url['href']
        r2 = s.get(urlProduct)
        soupArticle = BeautifulSoup(r2.content, features="lxml")
        for eltArticle in soupArticle.find_all("div", {"class": "pdp-bottom-infos__content"}):
            if "Ingrédients" in eltArticle.text:
                if any(x.lower() in eltArticle.text.lower() for x in meatList) or any(x.lower() in a["data-name"].lower() for x in meatList):
                    print("MEAT")
                    meat=True
                    vegan= False
                if any(x.lower() in eltArticle.text.lower() for x in veganList) or any(x.lower() in a["data-name"].lower() for x in veganList):
                    print("NON-VEGAN")
                    vegan=False
                if any(x.lower() in eltArticle.text.lower() for x in alcoolList) or any(x.lower() in a["data-name"].lower() for x in alcoolList):
                    print("Alcool")
                    alcool=True
        products.append({"name": unidecode.unidecode(
            a["data-name"]), "isBio": bio,"containsMeat":meat,"vegan":vegan, "alcool":alcool,"isFrozen":frozen,"category": nameRayons[i], "price": float(a["data-price"].replace(',', '.'))})

        print({"name": unidecode.unidecode(
            a["data-name"]), "isBio": bio,"containsMeat":meat,"vegan":vegan, "alcool":alcool,"isFrozen":frozen,"category": nameRayons[i], "price": float(a["data-price"].replace(',', '.'))})

with open('data.txt', 'w') as outfile:
    json.dump(products, outfile)
