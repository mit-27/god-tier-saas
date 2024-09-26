# run directly from the repo root directory
# docker build -f ./apps/webapp/Dockerfile .
FROM node:20-alpine AS base
# =======================================================================
# Turbo: Prepare a standalone workspace for docker
FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update

# Set pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app
RUN pnpm add -g turbo@2.1.2
COPY . .
RUN turbo prune @template/web --docker

#check content
RUN ls -la ./out/full/apps/web

# =======================================================================
# Install Deps and build project using PNPM
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
# Set pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

WORKDIR /app

RUN ls -la 

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .

# 🔴🔴🔴 possible bug due to missing dependencies here, when using "standalone mode"
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

# install dependencies
RUN pnpm install --shamefully-hoist

# Build the project
COPY --from=builder ./app/out/full/ .
RUN pnpm run build

CMD cd /app/apps/web/ && pnpm run start

