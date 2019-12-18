FROM node:12.13-buster-slim as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli

# RUN npm run build

COPY src /app/src
COPY e2e /app/e2e
COPY *.json /app/
COPY *.js /app/


# ENTRYPOINT ["/bin/bash"]
RUN ng build --output-path=dist

### PROD ###
FROM nginx:1.16.0-alpine
ARG PORT=80

COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE $PORT
# run nginx
CMD ["nginx", "-g", "daemon off;"]
