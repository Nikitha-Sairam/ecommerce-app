# Ecommerce Application

A full-stack ecommerce application built with React frontend and Node.js backend with MongoDB database.

## Features

- User authentication and authorization
- Product catalog with search and filtering
- Shopping cart functionality
- Order management
- Payment integration (Stripe)
- Admin dashboard
- Responsive design

## Tech Stack

### Frontend

- React 18
- Redux Toolkit
- React Router
- Bootstrap
- Axios

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Multer for file uploads
- Stripe for payments

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Setup

1. Clone the repository

```bash
git clone https://github.com/yourusername/ecommerce-app.git
cd ecommerce-app
```

2. Install dependencies

```bash
npm install
```

3. Environment Setup
   Create a `.env` file in the root directory with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

4. Start the development server

```bash
npm start
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm start` - Start both frontend and backend servers
- `npm run server` - Start only the backend server
- `npm run client` - Start only the frontend server
- `npm run build` - Build the application for production

## Project Structure

```
ecommerce/
├── api/                 # Backend API
│   ├── controllers/     # Route controllers
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── middlewares/    # Custom middlewares
│   └── server.js       # Express server
├── src/                # Frontend React app
│   ├── components/     # React components
│   ├── pages/         # Page components
│   └── redux/         # Redux store and reducers
└── public/            # Static files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
