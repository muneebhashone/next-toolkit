# Next Toolkit

A modern Next.js authentication starter kit that integrates seamlessly with [TypeScript Backend Toolkit](https://github.com/muneebhashone/typescript-backend-toolkit). Built with Next.js 14, TypeScript, and Tailwind CSS, this toolkit provides a robust foundation for building secure web applications.

## Key Features

- 🔐 **Complete Authentication Flow**
  - Email & Password Authentication
  - Protected Routes with Middleware
  - Token-based Session Management
  - Password Reset & Recovery

- 🛠️ **Modern Tech Stack**
  - [Next.js 14](https://nextjs.org/) with App Router
  - [TypeScript](https://www.typescriptlang.org/) for type safety
  - [Tailwind CSS](https://tailwindcss.com/) for styling
  - [React Query](https://tanstack.com/query/latest) for data fetching
  - [Zustand](https://zustand-demo.pmnd.rs/) for state management
  - [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation

- 🔄 **API Integration**
  - Axios-based API client
  - Environment-based API configuration
  - Type-safe API responses

## Prerequisites

Before you begin, ensure you have:
- Node.js 18+ installed
- [TypeScript Backend Toolkit](https://github.com/muneebhashone/typescript-backend-toolkit) set up and running

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/muneebhashone/next-toolkit.git
   cd next-toolkit
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
   BACKEND_URL=/api/v1
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
next-toolkit/
├── app/
│   ├── (auth)/                 # Authentication pages
│   │   ├── login/             
│   │   └── register/          
│   ├── protected/              # Protected routes
│   ├── components/             # Reusable components
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility libraries
│   ├── services/              
│   │   ├── auth/              # Authentication services
│   │   └── user/              # User-related services
│   └── stores/                 # Global state management
├── middleware.ts               # Authentication middleware
└── public/                     # Static assets
```

## Authentication Flow

1. **Login/Register**
   - Users can sign up or log in using email/password
   - Form validation using Zod schemas
   - Secure token storage using Zustand

2. **Protected Routes**
   - Middleware checks for valid authentication token
   - Automatic redirect to login for unauthenticated users
   - Token validation on each protected route access

3. **API Integration**
   - Seamless integration with TypeScript Backend Toolkit
   - Type-safe API calls using TypeScript interfaces
   - Centralized API client configuration

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_API_URL` | Frontend API endpoint | Yes |
| `BACKEND_URL` | Backend service URL | Yes |

## Integration with TypeScript Backend Toolkit

This project is designed to work with [TypeScript Backend Toolkit](https://github.com/muneebhashone/typescript-backend-toolkit), providing:

- Type-safe API integration
- Consistent authentication flows
- Shared type definitions
- Standardized error handling

## Development

```bash
# Run in development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   vercel deploy
   ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [TypeScript Backend Toolkit](https://github.com/muneebhashone/typescript-backend-toolkit) for the backend integration
- [Next.js](https://nextjs.org/) team for the amazing framework
- All contributors who help improve this project

## Support

For support, please open an issue in the repository or contact the maintainers.
