# docker-microservices

[![Build Status](https://travis-ci.org/chriskfwoo/docker-microservices.svg?branch=master)](https://travis-ci.org/chriskfwoo/docker-microservices)


## Overview
- Developed a code evaluation tool for code exercises
- Project is following [testdriven.io](http://testdriven.io/)
- Built, tested, and deployed microservices with Flask, React, Docker, nginx, gunicorn

## Purpose
- Practice test-driven development (TDD)
- Try to implement the [twelve-factor app](https://12factor.net/) pattern
- Microservice architecture, separation of concerns
- Setup staging and production environments with AWS Lambda, EC2, ECS
- Swagger service to document API
- Continuous integration with Travis CI
    - Run tests and flake8


## Run Application

### Scripts
```
# Build Images
docker-compose -f docker-compose-dev.yml up build

# Build Containers
docker-compose -f docker-compose-dev.yml up -d

# Stop Containers
docker-compose -f docker-compose-dev.yml up stop

# Down Containers
docker-compose -f docker-compose-dev.yml up down

# Remove Images
docker rmi $(docker images -q)

# staging -> docker-compose-stage.yml
# production -> docker-compose-prod.yml
```

### Create docker host with docker machine
```
docker-machine create -d virtualbox {name}
docker-machine env {name}
eval $(docker-machine env {name})

# get docker machine ip
docker-machine ip {name}    
```

## Tips

#### Create aliases for docker-compose and docker-machine
Add the following lines to .bashrc file
```
alias dc='docker-compose'
alias dm='docker-machine'
```
then, source ~/.bashrc


#### Access the database
```
docker exec -ti {container_name} psql -U postgres -W
\c {db_name}
select * from {table_name}
```