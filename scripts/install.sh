#!/usr/bin/env bash

sudo usermod -a -G docker $(whoami)
sudo systemctl enable docker
sudo service docker start
