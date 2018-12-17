#!/bin/bash

docker stack rm ticketoc
docker swarm leave --force
