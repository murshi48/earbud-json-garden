FROM oven/bun:latest

WORKDIR /app

COPY . .

RUN bun install
RUN bun run build

RUN bun add -D serve

EXPOSE 4173

CMD ["bunx", "serve", "-s", "dist", "-l", "4173"]

