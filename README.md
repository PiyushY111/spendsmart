# 💰 SpendSmart - Finance Manager

A full-stack personal finance management application built with React, Node.js, Express, and MongoDB. Track your income and expenses, visualize spending patterns, and take control of your finances.

![Finance Manager](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)

## ✨ Features

- 🔐 **Secure Authentication** - JWT-based user authentication with bcrypt password hashing
- 💵 **Transaction Management** - Add, edit, and delete income/expense transactions
- 📊 **Analytics Dashboard** - Visual insights with circular and linear progress bars
- 🎨 **Avatar System** - Customizable user avatars
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🌙 **Modern UI** - Clean interface with Material-UI and Bootstrap
- 🔄 **Real-time Updates** - Instant feedback with React Hot Toast
- 📅 **Date Range Filtering** - Filter transactions by custom date ranges

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with Hooks
- **React Router v6** - Client-side routing
- **Material-UI** - Component library
- **Bootstrap 5** - Responsive styling
- **Axios** - HTTP client
- **React DatePicker** - Date selection
- **Moment.js** - Date formatting

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📸 Screenshots

*Add screenshots of your application here*

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- MongoDB Atlas account (free tier) or local MongoDB
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/PiyushY111/spendsmart.git
cd spendsmart
```

2. **Setup Backend**
```bash
cd Server
npm install

# Create .env file
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
```

3. **Setup Frontend**
```bash
cd ../Client
npm install

# Create .env file (optional for local development)
cp .env.example .env
```

4. **Start Development Servers**

Terminal 1 - Backend:
```bash
cd Server
npm start
```

Terminal 2 - Frontend:
```bash
cd Client
npm start
```

5. **Open your browser**
```
http://localhost:3000
```

## 🌐 Production Deployment

This project is production-ready with multiple deployment options:

### Quick Deploy (Free)
- **Frontend**: Vercel / Netlify
- **Backend**: Render.com / Railway
- **Database**: MongoDB Atlas

### Detailed Guides
- 📚 [Complete Deployment Guide](./DEPLOYMENT.md) - Step-by-step instructions for all platforms
- ⚡ [Quick Start Guide](./QUICKSTART.md) - Get deployed in 15 minutes

### Deployment Configurations Included
- ✅ Docker & Docker Compose
- ✅ Render.com (render.yaml)
- ✅ Vercel (vercel.json)
- ✅ Railway (railway.toml)
- ✅ Nginx configuration
- ✅ Environment templates

## 📁 Project Structure

```
spendsmart/
├── Client/                 # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── Pages/
│   │   │   ├── Auth/      # Login/Register
│   │   │   ├── Avatar/    # Avatar selection
│   │   │   └── Home/      # Main dashboard
│   │   ├── components/    # Reusable components
│   │   └── utils/         # API configuration
│   └── package.json
│
├── Server/                # Node.js Backend
│   ├── controllers/       # Business logic
│   ├── models/           # Database schemas
│   ├── Routers/          # API routes
│   ├── DB/               # Database connection
│   └── package.json
│
├── docker-compose.yml    # Docker setup
├── render.yaml           # Render.com config
├── vercel.json          # Vercel config
├── DEPLOYMENT.md        # Deployment guide
└── README.md            # This file
```

## 🔧 Environment Variables

### Backend (.env)
```env
NODE_ENV=production
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
```

### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:4000
```

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/setAvatar` - Set user avatar

### Transactions
- `POST /api/v1/addTransaction` - Add new transaction
- `GET /api/v1/getTransaction` - Get all transactions
- `PUT /api/v1/updateTransaction` - Update transaction
- `DELETE /api/v1/deleteTransaction` - Delete transaction

## 🐳 Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop containers
docker-compose down
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Piyush**
- GitHub: [@PiyushY111](https://github.com/PiyushY111)

## 🙏 Acknowledgments

- Material-UI for the component library
- MongoDB Atlas for database hosting
- Render.com for backend hosting
- Vercel for frontend hosting

## 📞 Support

If you have any questions or need help deploying the application, please:
- Open an issue on GitHub
- Check the [DEPLOYMENT.md](./DEPLOYMENT.md) guide
- Review the [QUICKSTART.md](./QUICKSTART.md) guide

---

⭐ **Star this repo** if you find it helpful!

**Live Demo**: [Add your deployed URL here]

Made with ❤️ by Piyush
