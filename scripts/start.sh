#!/usr/bin/env bash

if ! [[ $(cat ~/.docker/config.json | grep "https://index.docker.io/v1/") ]]
then
    docker login
fi

docker swarm init
docker stack deploy -c docker-compose.yml           ticketoc          --with-registry-auth
docker stack deploy -c docker-compose-generator.yml frenetic-shopping --with-registry-auth
