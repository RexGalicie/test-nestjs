FROM node:12-alpine as intermediate

ARG NPM_TOKEN
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk --no-cache add --virtual builds-deps build-base python git

# Install app dependencies
COPY package*  /usr/src/app/

RUN yarn install

COPY . /usr/src/app/
RUN yarn build

FROM node:12-alpine
# Magical mystery number to make the IO faster
ENV UV_THREADPOOL_SIZE 64
RUN apk --no-cache add --virtual builds-deps build-base python
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# copy the repository form the previous image
COPY --from=intermediate /usr/src/app /usr/src/app

EXPOSE 8080
CMD [ "yarn", "prod"]