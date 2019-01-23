#!/usr/bin/env bash

cat ~/.docker/config.json | grep -q "https://index.docker.io/v1/" || \
docker login                                                      || exit 1

docker swarm init
docker stack deploy -c docker-compose.yml           ticketoc          --with-registry-auth
docker stack deploy -c docker-compose-generator.yml frenetic-shopping --with-registry-auth
