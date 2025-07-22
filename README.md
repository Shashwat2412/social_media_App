# Social Media App

A minimal social media application built with NestJS backend and Next.js frontend, demonstrating JWT authentication, Redis queues, WebSocket notifications, and rate limiting.

## Features

- **JWT Authentication**: Secure signup and login
- **Rate Limiting**: API endpoints are rate-limited for security
- **Async Queues**: Post creation uses Redis/BullMQ with 5-second delay
- **Real-time Notifications**: WebSocket-based notifications for follows and new posts
- **Timeline**: View posts from followed users
- **Follow/Unfollow**: Instant follow/unfollow functionality

## Tech Stack

### Backend
- NestJS with TypeScript
- MongoDB with Mongoose
- Redis + BullMQ for queues
- WebSocket for real-time features
- JWT for authentication
- Rate limiting with @nestjs/throttler

### Frontend
- Next.js 14 with App Router
- TypeScript
- shadcn/ui components
- Socket.io client for WebSocket
- Axios for API calls

## Setup Instructions

### Prerequisites
- Node.js 18+
- MongoDB running on localhost:27017
- Redis running on localhost:6379

### Backend Setup
1. Navigate to the backend directory
2. Install dependencies: `npm install`
3. Start the development server: `npm run start:dev`
4. Backend will run on http://localhost:3001

### Frontend Setup
1. Navigate to the frontend directory (root)
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Frontend will run on http://localhost:3000

## API Endpoints

### Authentication
- `POST /auth/signup` - Create new user (rate limited: 5/min)
- `POST /auth/login` - Login user (rate limited: 5/min)

### Posts
- `POST /posts` - Create post (queued, rate limited: 3/min)
- `GET /posts/timeline` - Get timeline posts

### Users
- `GET /users` - Get all users
- `POST /users/follow/:id` - Follow user
- `POST /users/unfollow/:id` - Unfollow user

## Rate Limits
- Signup: 5 requests per minute
- Login: 5 requests per minute
- Post creation: 3 requests per minute

## WebSocket Events
- `join` - Join user room for notifications
- `notification` - Receive real-time notifications

## Queue Processing
- Post creation is delayed by 5 seconds using BullMQ
- After delay, post is saved and followers are notified

## Environment Variables
Create a `.env` file in the backend directory:
\`\`\`
MONGODB_URI=mongodb://localhost:27017/social-media
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-secret-key
