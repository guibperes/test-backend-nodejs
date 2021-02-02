FROM node:14-alpine as TS_BUILD
WORKDIR /build
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:14-alpine
WORKDIR /app
ENV MONGO_URL=
COPY package*.json ./
RUN npm ci --only=production
COPY --from=TS_BUILD /build/dist /app/dist
CMD ["node", "dist/main.js"]
