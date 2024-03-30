#1. Билд
FROM node:latest AS builder
#2. Установка рабочего каталога
WORKDIR /app
#3. Копируем конфиг
COPY package*.json ./
COPY yarn.lock ./
#4. Установка зависимостей
RUN yarn install-deps
#5. Копируем основные файлы проекта
COPY . .
#6. Билдим проект
RUN yarn build

FROM node:latest

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD [ "yarn", "start" ]