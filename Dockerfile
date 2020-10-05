# Stage 1, "build-stage"
FROM node:12.4.0-alpine as react-build
RUN apk --no-cache add --virtual builds-deps build-base python
RUN mkdir /app
WORKDIR /app
COPY ["package.json", "/app/"]
RUN yarn install
COPY ./ /app/
RUN yarn build
# Stage 2, based on Nginx
FROM nginx:1.17.0-alpine
COPY --from=react-build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80