#!/usr/bin/env bash

mongoimport --upsertFields name --host frenetic-shopping-database --db supermarket --collection products   --type json --file products.json   --jsonArray
mongoimport --upsertFields name --host frenetic-shopping-database --db supermarket --collection categories --type json --file categories.json --jsonArray
