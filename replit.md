# Replit.md

## Overview

This is a full-stack web application built with a modern tech stack featuring a React frontend, Express.js backend, and PostgreSQL database. The application uses Drizzle ORM for database operations and follows a monorepo structure with shared types between client and server. The project is configured for development on Replit with hot reloading and includes a comprehensive UI component library based on shadcn/ui.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Request Logging**: Custom middleware for API request logging
- **Error Handling**: Centralized error handling middleware

### Project Structure
```
├── client/          # React frontend application
├── server/          # Express.js backend application
├── shared/          # Shared types and schemas
├── migrations/      # Database migration files
└── dist/           # Production build output
```

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL support
- **Schema**: Centralized schema definitions in `shared/schema.ts`
- **Migrations**: Automated migration system via `drizzle-kit`
- **Connection**: Neon Database serverless connection
- **Validation**: Zod schemas for type-safe data validation

### API Layer
- **Structure**: RESTful API with `/api` prefix
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Request Handling**: JSON body parsing and URL encoding support

### Frontend Components
- **UI Library**: Complete shadcn/ui component set including forms, dialogs, tables, charts
- **Form Handling**: React Hook Form with Zod resolvers
- **Styling**: Tailwind CSS with dark/light mode support
- **Icons**: Lucide React icon library
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### Development Tools
- **Hot Reloading**: Vite HMR for frontend, tsx for backend
- **Type Checking**: Strict TypeScript configuration
- **Path Aliases**: Configured for clean imports (@/, @shared/)
- **Replit Integration**: Cartographer and runtime error overlay plugins

## Data Flow

### Request Flow
1. Frontend makes API requests using TanStack Query
2. Requests are routed through Express middleware stack
3. Custom logging middleware captures request/response data
4. Route handlers interact with storage interface
5. Storage layer performs database operations via Drizzle ORM
6. Responses are formatted and sent back to frontend

### Authentication Flow
- Session-based authentication using connect-pg-simple
- Sessions stored in PostgreSQL database
- Middleware handles authentication state
- Frontend queries authentication status via TanStack Query

### Data Validation
- Shared Zod schemas ensure type safety across client/server boundary
- Drizzle-zod integration for database schema validation
- React Hook Form with Zod resolvers for frontend validation

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL hosting
- **Connection**: @neondatabase/serverless driver
- **Environment**: DATABASE_URL environment variable required

### UI Framework
- **Radix UI**: Unstyled, accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Class Variance Authority**: Type-safe component variants
- **Embla Carousel**: Carousel component library

### Development
- **Replit**: Cloud development environment with specialized plugins
- **TypeScript**: Strict type checking across entire codebase
- **ESBuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Development
- **Frontend**: Vite dev server with HMR on client port
- **Backend**: tsx watch mode for automatic TypeScript compilation
- **Database**: Drizzle migrations via `npm run db:push`

### Production
- **Build Process**: 
  1. Vite builds frontend to `dist/public`
  2. ESBuild bundles backend to `dist/index.js`
- **Serving**: Express serves static files from build directory
- **Environment**: NODE_ENV=production for optimized builds
- **Database**: Migrations applied before application start

### Configuration
- **TypeScript**: Shared configuration across client/server/shared
- **Path Resolution**: Consistent import aliases across environments
- **Module System**: ESM modules throughout the application
- **Hot Reloading**: Development-only Vite plugins and middleware