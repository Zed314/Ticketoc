#!/bin/bash

if [[ $(cat ~/.docker/config.json | grep "https://index.docker.io/v1/") ]]
then
	echo 'Login OK'
else
	docker login
fi

DIR=$1
NAME=$(echo $1 | sed -r 's/\//-/g')

docker build $DIR/ -t ticketoc_$NAME
docker tag ticketoc_$NAME admo120104/ticketoc:$NAME
docker push admo120104/ticketoc:$NAME
