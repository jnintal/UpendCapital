# Upend Capital - Local Development Setup

A nostalgic 1980s-inspired terminal homepage for Upend Capital, delivering an authentic computer experience with immersive retro design elements and interactive portfolio showcase.

## Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn package manager

## Local Development Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/upend_capital

# Optional: SendGrid for email functionality (if implementing contact form)
SENDGRID_API_KEY=your_sendgrid_api_key_here

# Node Environment
NODE_ENV=development
```

### 3. Database Setup

#### Option A: Local PostgreSQL
1. Install PostgreSQL on your machine
2. Create a database named `upend_capital`
3. Update the `DATABASE_URL` in your `.env` file

#### Option B: Neon Database (Recommended)
1. Sign up at [neon.tech](https://neon.tech)
2. Create a new database
3. Copy the connection string to your `.env` file

### 4. Database Migration

Push the database schema:

```bash
npm run db:push
```

### 5. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Production Build

To build for production:

```bash
npm run build
npm start
```

## Project Structure

```
├── client/          # React frontend
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Page components
│   │   └── lib/         # Utilities
│   └── public/      # Static assets
├── server/          # Express.js backend
├── shared/          # Shared types and schemas
└── migrations/      # Database migrations
```

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: 1980s terminal aesthetic with JetBrains Mono font
- **State Management**: TanStack Query

## Features

- Authentic 1980s amber terminal design
- CRT screen effects and scanlines
- Portfolio company showcase
- Investment fund information
- Contact information
- Responsive design

## Environment Notes

- The project uses ESM modules (`"type": "module"` in package.json)
- TypeScript configuration is shared across client/server
- Vite handles frontend building and development
- Express serves both API routes and static files in production

## Troubleshooting

### Database Connection Issues
- Ensure PostgreSQL is running
- Check DATABASE_URL format: `postgresql://username:password@host:port/database`
- Verify database exists and user has proper permissions

### Build Issues
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version compatibility (18+)

### Development Server Issues
- Check if port 5000 is available
- Ensure all environment variables are set
- Check console for specific error messages