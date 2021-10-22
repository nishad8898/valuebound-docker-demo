FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
ENV PORT=3000
EXPOSE 3000
CMD ["yarn", "start"]
# 20b108d775f3