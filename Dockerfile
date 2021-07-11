FROM node:16-alpine as builder

WORKDIR /app

RUN apk update && apk upgrade

COPY ["package.json", "package-lock.json", "./"]

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:1.21

RUN apt-get update && apt-get install vim -y

COPY --from=builder /app/dist           /usr/share/nginx/html
COPY --from=builder /app/nginx.conf     /etc/nginx/conf.d/default.conf
