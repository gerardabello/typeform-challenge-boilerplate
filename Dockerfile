FROM nginx:alpine
COPY ./dist /etc/nginx/html
COPY ./web /etc/nginx/html/web
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
