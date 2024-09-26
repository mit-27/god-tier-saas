# run directly from the repo root directory
# docker build -f ./apps/api/Dockerfile .
FROM node:20-alpine AS base
# =======================================================================
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
RUN turbo prune @template/server --docker

# =======================================================================
# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
# Set pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app
 
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install

# Build the project
COPY --from=builder /app/out/full/ .
#RUN pnpm turbo run build --filter=api...
#avoid pulling from db
RUN pnpm run build 

# ========================================================================
FROM base AS runner
RUN apk add --no-cache libc6-compat netcat-openbsd curl

WORKDIR /app

COPY --from=installer ./app .
WORKDIR /app/apps/server 

EXPOSE 3000
CMD node dist/src/main.js
