#!/usr/bin/env bash

docker stack rm frenetic-shopping
docker stack rm ticketoc
docker swarm leave --force
