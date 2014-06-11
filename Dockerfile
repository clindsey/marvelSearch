# clindsey/marvelSearch
#
# VERSION 0.0.1
#
# DOCKER-VERSION 0.9.1

FROM ubuntu:14.04

MAINTAINER Chris Lindsey <56clindsey@gmail.com>

RUN apt-get update

RUN apt-get install -y git-core
RUN apt-get install -y npm nodejs
RUN apt-get install -y fontconfig # phantomjs
RUN ln -s /usr/bin/nodejs /usr/bin/node

EXPOSE 8080

ADD . /src

RUN cd /src && make clean && make install

ENTRYPOINT cd /src && make live
