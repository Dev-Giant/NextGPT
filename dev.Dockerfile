FROM node:16-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

FROM node:16-alpine AS runner
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . /app

RUN npx prisma generate

EXPOSE 3000
ENV PORT 3000

CMD ["npm", "run", "start:migrate:dev"]