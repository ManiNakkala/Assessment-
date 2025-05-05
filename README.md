# CrediKhaata – Loan Tracker for Shopkeepers

### Features
- User authentication (register/login)
- Customer management
- Loan creation and tracking
- Repayment tracking
- Loan summary and overdue reports

### Tech Stack
- Node.js, Express
- MongoDB with Mongoose
- JWT Auth
- CORS, dotenv, bcrypt

### Setup Instructions

1. Clone the repo and navigate into backend:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Setup your `.env`:
```bash
cp .env.example .env
```

4. Make sure MongoDB is running locally (or provide a MongoDB Atlas URI in `.env`)

5. Run the backend:
```bash
npm run dev
```

Test the APIs using Postman or any client of your choice.