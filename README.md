# 🚀 God Tier SaaS - Build the next Enterprise application

A SaaS Kit offering end-to-end type safety with ts-rest between Next.js and Nest.js, along with integrated services like AuthJS for authentication, PostHog for analytics, and Drizzle ORM with PostgreSQL for database management.

Perfect to build scalable SaaS applications.

## Key Features

- End-to-end Type safety with ts-rest
- Dashboard and Landing Page with NextJS
- Optimistic UI with TanStack Query
- Database management with Drizzle ORM
- Authentication ready with NextAuth.js
- Containerized development environment
- Monorepo structure for efficient code organization
- Analytics with PostHog
- Ready-to-use ContentLayer for blog and changelog


## Tech Stack
- NextJS as the frontend framework
- NestJS as the backend framework
- tRPC for end-to-end type safety
- Prisma ORM for database management
- NextAuth.js for authentication
- Docker for containerization
- PostHog for analytics
- Content Collections for blog and changelog

This stack ensures a robust, scalable, and maintainable application with strong typing throughout the entire codebase and secure authentication.

## Setup and Running Instructions

### 1. 🐳 Using Docker

To set up and run the project using Docker Compose:

1. Ensure you have Docker and Docker Compose installed on your system.
2. Open a terminal and navigate to the project's root directory.
3. Copy the example environment files and add appropriate environment variables:

   ```bash
   cp .env.example .env
   ```

   Edit `.env` files and add the necessary environment variables.

4. Run the following command:

   ```bash
   docker-compose -f docker-compose.dev.yml up
   ```

This command will build and start all the necessary containers defined in the `docker-compose.dev.yml` file.

## 2. 📦 Using pnpm (Local Development)

To set up and run the project locally using pnpm:

1. Make sure you have Node.js (version 18 or higher) and pnpm installed on your system.
2. Open a terminal and navigate to the project's root directory.
3. Copy the example environment files and add appropriate environment variables:

   ```bash
   cp apps/web/.env.example apps/web/.env.local
   cp apps/server/.env.example apps/server/.env
   ```

   Edit both `.env` files and add the necessary environment variables.

4. Install the dependencies by running:

   ```bash
   pnpm install
   ```

5. Start the PostgreSQL database using Docker Compose:

   ```bash
   docker-compose -f docker-compose.postgres.yml up -d
   ```

6. Start the development servers by running:

   ```bash
   pnpm run dev
   ```

This command will concurrently start both the Next.js web application (on port 8090) and the NestJS API server with shared module which manages db and ts-rest router. It uses Turbo to manage the monorepo workspace and run the development scripts for both the web and API projects simultaneously.

Make sure your environment variables are properly configured to connect to the PostgreSQL database started by Docker Compose.
