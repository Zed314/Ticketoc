# Ticketoc

## Scripts

Some utility scripts to enable docker when doing a fresh install, to start and stop a swarm, to build and push an image to the docker.io/admo120104/ticketoc registry, and to perform a deep destructive clean of everything in docker (use with caution).

```
scripts/install.sh
scripts/build.sh [--push]
scripts/start.sh
scripts/stop.sh
scripts/clean.sh [--deep]
```

## Install docker

Add yourself to the group docker:

```
groups
sudo usermod -a -G docker zvergne
groups
```

If you are not added to this group, it is because you have to type:

```
su <user>
```

The command above will open a new session in your terminal where your groups 
have been updated, preventing you from login and out to do so.

Make it as a service that start at boot if you want:

```
sudo systemctl enable docker
```

And start it using the following command, you can check the status afterwards:

```
sudo service docker start
sudo service docker status
```
__Attention:__ To use swarm, every used package has to be in a registry. Our dashboard is not, so for time being, you'll have to do `docker-compose -f docker-compose.yml up` instead.

To init:

```
docker swarm init
docker stack deploy -c docker-compose.yml ticketoc --with-registry-auth
```

To check the status:

```
docker service ps ticketoc_kafka
docker ps
```

To shutdown:

```
docker stack rm ticketoc
docker swarm leave --force
```

If you want to rebuild an image, simply type

```
docker-compose build
```

Sometimes, shutting down is not enough, as it just stops the container, but does not delete them.
Therefore, you may want to delete those.

To do so, run this command :

```
docker rm $(docker ps -a -q)
```

The command above deletes the containers. However, for self generated images, you may want to delete them as well to rebuild them.

To do so, just type :

```
docker image rm <imagename>
docker image rm docker_dashboard:latest 
```

To fix kafka volumes permissions:

```
sudo chown 1001:1001 -R volumes/kafka
```

# Project Members and Roles

- Martin Haug : Dashboard WebUI & Cash-Clasp WebSocketServer
- Faycal Bziou : Spark Streaming
- Pierrick Chauvet : Spark Streaming 
- Adrien Moll : Kafka & Entrypoint
- Ziggy Vergne : Generator & Persistence MongoDB
