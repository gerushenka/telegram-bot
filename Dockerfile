FROM node:23-alpine AS builder
RUN npm install --global pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml tsconfig.json ./
RUN pnpm install --frozen-lockfile
COPY src ./src
RUN pnpm build

FROM node:23-alpine
RUN npm install --global pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile
COPY --from=builder /app/dist ./dist
EXPOSE 8080
CMD pnpm start
