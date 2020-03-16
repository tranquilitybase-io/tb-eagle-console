FROM nginx:1.16.1-alpine
WORKDIR /usr/share/nginx/html
COPY ./dist/tb-eagle-console-ui .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]