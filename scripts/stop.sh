#!/usr/bin/env bash

docker stack rm ticketoc
docker stack rm frenetic-shopping
docker swarm leave --force
