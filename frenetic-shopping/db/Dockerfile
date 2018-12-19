FROM mongo
COPY initProducts.json /initProducts.json
COPY initCategories.json /initCategories.json
CMD ["sh", "-c", "mongoimport --upsertFields name --host mongodb --db supermarketDB --collection products --type json --file /initProducts.json --jsonArray ; mongoimport --upsertFields name --host mongodb --db supermarketDB --collection categories --type json --file /initCategories.json --jsonArray"]