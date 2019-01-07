#!/bin/bash

DIR=$1
NAME=$(echo "$1" | sed -r 's/\//-/g')

if [[ -z "$DIR" || -z "$NAME" ]]
then
	>&2 echo "Error: Missing argument"
	exit 1
fi

if ! [[ $(cat ~/.docker/config.json | grep "https://index.docker.io/v1/") ]]
then
	docker login
fi

docker build "$DIR" -t "ticketoc_$NAME"
docker tag "ticketoc_$NAME" "admo120104/ticketoc:$NAME"
docker push "admo120104/ticketoc:$NAME"
