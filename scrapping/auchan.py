from bs4 import BeautifulSoup

import unidecode
import requests
import time
import re
import json
     
#url = 'https://www.auchandrive.fr/drive/mag/update-527/'
url = "https://www.auchandrive.fr/drive/mag/Viry-Noureuil-98501/"
#r = requests.get(url)
#print(r.cookies)

#r1 = requests.get("https://www.auchandrive.fr/nos-rayons",cookies=r.cookies)
#print(r1.content)

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

for cat in urlCategories:
   
    r1 = s.get(cat)
    soup = BeautifulSoup(r1.content, features="lxml")
    time.sleep(1)
    for a in soup.find_all("a", {"href": lambda L: L and L.startswith('/catalog/')}):
        #print(a['href'].split("/"))
        if(len(a['href'].split("/"))==4) and not ("https://www.auchandrive.fr"+a['href']  in urlRayons):
          print("Found the URL:", a['href'])
          urlRayons.append("https://www.auchandrive.fr"+a['href'])


products = []

for ray in urlRayons:
   
    r1 = s.get(ray)
    soup = BeautifulSoup(r1.content, features="lxml")
    time.sleep(1)
    for a in soup.find_all("article"):
            
        products.append({"name":unidecode.unidecode(a["data-name"]),"category":"generalfood","price":float(a["data-price"].replace(',','.'))})
        print(a["data-name"])
        print(a["data-price"])
with open('data.txt', 'w') as outfile:  
    json.dump(products, outfile)
        

