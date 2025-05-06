# Stage 1: build
FROM node:16-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --silent
COPY . .
RUN npm run build

# Stage 2: serve com Nginx
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
# configuração customizada (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]