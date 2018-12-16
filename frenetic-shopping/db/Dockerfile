FROM mongo
COPY init.json /init.json
CMD mongoimport --upsertFields name --host mongodb --db supermarketDB --collection products --type json --file /init.json --jsonArray