# Ticketoc

```
docker swarm init
docker stack deploy -c docker/docker-compose.yml ticketoc
docker stack rm ticketoc
docker swarm leave --force
```