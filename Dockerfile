FROM node:8.10.0-alpine
LABEL maintainer="Bruno Gama <brunogama@fastmail.fm>"

ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

WORKDIR /var/www/app

COPY . /var/www/app

CMD ["yarn", "install"]
