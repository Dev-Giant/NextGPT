FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci


FROM mcr.microsoft.com/playwright:v1.30.0-focal AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run test:ci

RUN npx playwright install
RUN npm run test:e2e
