# Stage 1: Build
FROM node:20-slim AS build

WORKDIR /app

# Instala as dependências
COPY package*.json ./
RUN npm install

# Copia o código e gera o build
COPY . .
RUN npm run build

# Stage 2: Serve com Nginx
FROM nginx:alpine

# Copia os arquivos estáticos do build para o diretório do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia uma configuração customizada do Nginx para suportar React Router (opcional mas recomendado)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
