FROM node:12-alpine as build
WORKDIR /tmp
COPY package.json .
RUN npm install
COPY . .
ARG GOOGLE_OAUTH_CLIENT_ID
RUN cat src/index.html | sed "s+GOOGLE_OAUTH_CLIENT_ID+$GOOGLE_OAUTH_CLIENT_ID+g" > src/index.html \
    && npm run build

FROM nginx:1.18-alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /tmp/dist/tb-eagle-console-ui .
