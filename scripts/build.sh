#!/usr/bin/env bash

docker-compose -f docker-compose.yml           build
docker-compose -f docker-compose-generator.yml build

[[ "--push" = "${1}" ]] || exit 0

cat ~/.docker/config.json | grep -q "https://index.docker.io/v1/" || \
docker login                                                      || exit 1

docker-compose -f docker-compose.yml           push
docker-compose -f docker-compose-generator.yml push
