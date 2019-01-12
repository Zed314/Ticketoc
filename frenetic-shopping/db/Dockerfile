FROM mongo
WORKDIR /usr/src/app
COPY . ./
CMD ["sh", "-c", "mongoimport --upsertFields name --host mongodb --db supermarket --collection products --type json --file products.json --jsonArray ; mongoimport --upsertFields name --host mongodb --db supermarket --collection categories --type json --file categories.json --jsonArray"]
