#!/usr/bin/env bash

docker stack rm ticketoc
docker swarm leave --force
