FROM nginx:alpine
COPY ./dist /etc/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
