#!/usr/bin/env bash

CONTAINER="$1"

docker stop ${CONTAINER}
docker build ${CONTAINER}
docker create ${CONTAINER}
docker start ${CONTAINER}
