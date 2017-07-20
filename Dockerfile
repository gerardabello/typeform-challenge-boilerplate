FROM nginx:alpine
COPY ./dist /etc/nginx/html
COPY ./web /etc/nginx/html/web
COPY ./landing.html /etc/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
