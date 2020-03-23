### BUILD ###
#############
FROM node:12.13-buster-slim as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ARG BASE_HREF=/

# install and cache app dependencies
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install
RUN npm install -g @angular/cli

COPY src /app/src
COPY e2e /app/e2e
COPY *.json /app/
COPY *.js /app/

RUN ng build --output-path=dist --prod --base-href $BASE_HREF --deploy-url $BASE_HREF

### PROD ###
############
FROM nginx:1.16.0-alpine
ARG PORT=80

COPY --from=build /app/dist /usr/share/nginx/html

# Set config, test it
COPY misc/nginx.conf /etc/nginx/
RUN nginx -t
RUN nginx -T

# run nginx
EXPOSE $PORT
CMD ["nginx", "-g", "daemon off;"]
