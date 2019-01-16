#!/bin/bash

docker swarm leave --force
docker service rm $(docker service ls -q)
docker rm $(docker ps -a -q)
docker container rm $(docker container ls -q -a)
docker network rm $(docker network ls -q)
docker volume rm $(docker volume ls -q)

if [[ "$1" = "--deep" ]]
then
	docker image rm -f $(docker image ls -q -a)
fi
