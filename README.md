# Next.js 15 - Complete Course

This repository contains a collection of practical projects demonstrating the main concepts and features of Next.js 15, organized by study themes.

## 📚 Course Structure

### 🚀 [hello-world](./hello-world/)
**Introduction to Next.js 15**
- Initial Next.js project setup
- Basic file and folder structure
- Fundamental React components
- Basic routing

### 🛣️ [routing](./routing/)
**Advanced Routing System**
- Next.js 15 App Router
- Dynamic routes and catch-all routes
- Route groups and nested layouts
- Programmatic navigation
- Error boundaries and 404 pages

### 🔄 [rendering](./rendering/)
**Rendering Strategies**
- Server Components vs Client Components
- Server-Side Rendering (SSR)
- Static Site Generation (SSG)
- Incremental Static Regeneration (ISR)
- Streaming and Suspense
- Component interleaving

### 🌐 [route-handlers](./route-handlers/)
**API Routes and Route Handlers**
- Creating RESTful APIs
- HTTP methods (GET, POST, PUT, DELETE)
- Custom middleware
- Headers and cookies manipulation
- Data validation

### 🔐 [authentication](./authentication/)
**Authentication and Authorization**
- Clerk integration for authentication
- Route protection middleware
- Role-based access control
- Session management
- Login and registration components

### 📊 [data-fetching](./data-fetching/)
**Data Fetching and Management**
- Prisma ORM integration
- SQLite database
- Server Actions
- Data fetching in Server and Client Components
- Loading states and error handling
- Forms and validation

## 🛠️ Technologies Used

### Core
- **Next.js 15.5.3** - React framework for production
- **React 19.1.0** - User interface library
- **TypeScript 5** - Typed JavaScript superset

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS processor

### Database & ORM
- **Prisma 6.16.1** - Modern ORM for TypeScript
- **SQLite** - Lightweight database

### Authentication
- **Clerk** - Complete authentication platform

### UI Components
- **React Slick** - Image carousel
- **Slick Carousel** - React Slick dependency

### Development Tools
- **ESLint 9** - JavaScript/TypeScript linter
- **Next.js ESLint Config** - Optimized configuration for Next.js

## 🚀 Setup and Installation

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd nextjsbeginnertoadvanced
```

2. **Install dependencies for each project:**
```bash
# For each project folder
cd hello-world
npm install

cd ../routing
npm install

cd ../rendering
npm install

cd ../route-handlers
npm install

cd ../authentication
npm install

cd ../data-fetching
npm install
```

3. **Configure environment variables (when needed):**
```bash
# For the authentication project
cd authentication
cp .env.example .env.local
# Configure your Clerk keys
```

4. **Set up the database (data-fetching project):**
```bash
cd data-fetching
npx prisma generate
npx prisma db push
```

### Running the Projects

For each project, run:

```bash
npm run dev
```

The development server will be available at `http://localhost:3000`

## 📖 Design Patterns Implemented

- **App Router Architecture** - Next.js new routing architecture
- **Server/Client Component Separation** - Clear separation between server and client components
- **Middleware Pattern** - Request interception and modification
- **Route Protection** - Authentication-based route protection
- **Database Abstraction** - Prisma usage for database abstraction
- **Type Safety** - TypeScript throughout the project for enhanced type safety

## 🎯 Learning Objectives

Each project was developed to demonstrate specific concepts:

1. **Fundamentals** - Understand Next.js basic structure
2. **Routing** - Master the advanced routing system
3. **Rendering** - Understand different rendering strategies
4. **APIs** - Create and consume RESTful APIs
5. **Authentication** - Implement robust authentication systems
6. **Data** - Manage data efficiently and securely

## 📝 Important Notes

- All projects use Next.js 15 with App Router
- TypeScript is configured in all projects
- Tailwind CSS is used for styling
- Each project is independent and can be run separately
- Projects follow Next.js 15 best practices

## 🤝 Contributing

This is an educational project. Feel free to:
- Report bugs or issues
- Suggest improvements
- Add new examples
- Fix documentation

## 📄 License

This project is for educational purposes. Use it as a reference for your own projects.
