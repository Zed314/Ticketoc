#!/usr/bin/env bash

mongoimport --upsertFields cashReceiptID --host database --db ticketoc --collection tickets --type json --file tickets.json --jsonArray
