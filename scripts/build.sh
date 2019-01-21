#!/usr/bin/env bash

docker-compose -f docker-compose.yml           build
docker-compose -f docker-compose-generator.yml build

if [[ "$1" = "--push" ]]
then

    if ! [[ $(cat ~/.docker/config.json | grep "https://index.docker.io/v1/") ]]
    then
        docker login || exit 1
    fi

	docker-compose -f docker-compose.yml           push
	docker-compose -f docker-compose-generator.yml push
fi
