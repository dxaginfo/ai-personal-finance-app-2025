# AI Personal Finance App

A web application designed to help individuals manage their finances more effectively through AI-powered insights.

## Project Overview

The AI Personal Finance App aims to democratize financial planning and make wealth management accessible to everyone. The app analyzes spending patterns, provides budgeting recommendations, identifies savings opportunities, and offers personalized investment suggestions based on user goals and risk tolerance.

## Key Features

- **Financial Account Integration**: Connect multiple bank accounts, credit cards, and investment accounts with secure data handling
- **Expense Analysis and Budgeting**: Analyze spending patterns, detect unusual activity, and create AI-recommended budgets
- **Savings Recommendations**: Identify opportunities to save, suggest subscription optimization, and calculate potential savings
- **Investment Insights**: Assess risk tolerance, provide personalized investment recommendations, and simulate potential returns
- **Financial Goal Planning**: Track progress towards goals, create debt repayment strategies, and develop retirement planning scenarios

## Technology Stack

### Frontend
- React.js with TypeScript
- Chakra UI for responsive and accessible design
- Redux Toolkit for application state
- D3.js and Recharts for financial charts
- React Router for navigation
- Axios for API requests
- Formik with Yup validation

### Backend
- Node.js with Express
- PostgreSQL for relational data storage
- Prisma ORM for database access
- JWT and OAuth 2.0 for secure authentication
- Plaid API for bank account connectivity
- TensorFlow.js for financial predictions
- Helmet.js for HTTP security

### Infrastructure
- AWS (EC2 for backend, S3 and CloudFront for frontend)
- AWS RDS for PostgreSQL
- GitHub Actions for CI/CD
- AWS CloudWatch and Sentry for monitoring
- Docker and Docker Compose for containerization

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- PostgreSQL
- AWS account (for deployment)
- Plaid API keys

### Installation
```bash
# Clone the repository
git clone https://github.com/dxaginfo/ai-personal-finance-app-2025.git

# Navigate to the project directory
cd ai-personal-finance-app-2025

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env file to add your API keys and database credentials

# Set up the database
npx prisma migrate dev

# Start the development server
npm run dev
```

## Project Structure

```
.
├── client/                # Frontend React application
│   ├── public/           # Static files
│   ├── src/              # Source files
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom hooks
│   │   ├── utils/        # Utility functions
│   │   ├── services/     # API services
│   │   ├── store/        # Redux store
│   │   └── App.tsx       # Main application component
│   └── package.json      # Frontend dependencies
│
├── server/                # Backend Node.js/Express application
│   ├── controllers/      # Request handlers
│   ├── models/           # Prisma models
│   ├── routes/           # API routes
│   ├── services/         # Business logic
│   ├── utils/            # Utility functions
│   ├── middleware/       # Express middleware
│   └── server.js         # Entry point
│
├── prisma/                # Prisma schema and migrations
├── .github/               # GitHub actions for CI/CD
├── docker/                # Docker configuration
├── .gitignore             # Git ignore file
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

## Security

This application handles sensitive financial data and implements several security measures:
- Data encryption at rest and in transit
- JWT token authentication with short expiration
- OAuth 2.0 for third-party authentication
- Helmet.js for HTTP security headers
- Rate limiting to prevent brute force attacks
- Regular security audits and dependency updates

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Plaid for their financial data API
- The financial technology community for inspiration
- All contributors who help improve this project