FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install ts-node-dev -g
RUN npm install

COPY . .

RUN npx prisma generate

CMD ["ts-node-dev", "--respawn", "--transpile-only", "src/server.ts"]
