#!/usr/bin/env bash

SWARM=$(      docker info      --format '{{.Swarm.LocalNodeState}}' )
SERVICES=$(   docker service   ls -q 2> /dev/null                   )
CONTAINERS=$( docker container ls -q -a                             )
IMAGES=$(     docker image     ls -q -a                             )
NETWORKS=$(   docker network   ls -q                                )
VOLUMES=$(    docker volume    ls -q                                )

[[           -z "${SERVICES}"   ]] || docker service   rm    ${SERVICES}
[[ "inactive" = "${SWARM}"      ]] || docker swarm     leave --force
[[           -z "${CONTAINERS}" ]] || docker container kill  ${CONTAINERS}
[[           -z "${CONTAINERS}" ]] || docker container rm    ${CONTAINERS}
[[           -z "${VOLUMES}"    ]] || docker volume    rm    ${VOLUMES}
[[           -z "${NETWORKS}"   ]] || docker network   rm    ${NETWORKS}
[[ "--deep"   = "${1}"          ]] || exit 0
[[           -z "${IMAGES}"     ]] || docker image     rm    ${IMAGES}
