# CampusCart - E-commerce Platform for Students

A modern, microservices-based e-commerce platform built specifically for university students to buy and sell items within campus communities.

## 🏗️ Monorepo Architecture

This repository contains all microservices for the CampusCart platform:

```
ecommerce/
├── frontend/              # Next.js 16 + TypeScript (Client-facing app)
├── inventory-service/     # NestJS (Product & catalog management)
├── gateway/               # API Gateway (To be implemented)
├── orders/               # Order processing service (To be implemented)
└── payments/             # Payment processing service (To be implemented)
```

---

## 📦 Services

### ✅ Frontend
- **Framework**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui
- **Port**: `3000`
- **Status**: ✅ Production-ready
- **Documentation**: [Frontend README](./frontend/README.md)

### 🔨 Inventory Service
- **Framework**: NestJS, TypeScript
- **Port**: `3000` (default NestJS)
- **Status**: 🔨 In Development
- **Documentation**: [Inventory README](./inventory-service/README.md)

### ⏳ Upcoming Services
- **Gateway**: API Gateway + Authentication
- **Orders**: Order management & fulfillment
- **Payments**: Payment processing integration

---

## 🚀 Quick Start

### Prerequisites
- Node.js 22.x or higher
- npm/pnpm/yarn
- Git

### Running Services

**Frontend:**
```bash
cd frontend
npm install
npm run dev
# Visit: http://localhost:3000
```

**Inventory Service:**
```bash
cd inventory-service
pnpm install
pnpm run start:dev
# API: http://localhost:3000
```

---

## 🛠️ Development Workflow

### Working on a Service

```bash
# Navigate to the service
cd <service-name>

# Install dependencies
npm install  # or pnpm install

# Start development
npm run dev  # or pnpm start:dev
```

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/service-name-feature

# Make changes and commit
git add .
git commit -m "feat(service-name): description"

# Push to remote
git push origin feature/service-name-feature
```

---

## 🔧 Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 16, React 19, TypeScript, Tailwind CSS v4 |
| **Backend** | NestJS, TypeScript |
| **Database** | PostgreSQL (planned), Redis (planned) |
| **Authentication** | JWT (planned) |
| **File Storage** | AWS S3 / Cloudinary (planned) |
| **Payments** | Stripe / PayPal (planned) |

---

## 📊 Implementation Status

| Service | Status | Progress |
|---------|--------|----------|
| Frontend | ✅ Complete | 100% |
| Inventory Service | 🔨 In Progress | 15% |
| API Gateway | ⏳ Not Started | 0% |
| Orders Service | ⏳ Not Started | 0% |
| Payments Service | ⏳ Not Started | 0% |

---

## 🎯 Roadmap

### Phase 1: Core Infrastructure (Current)
- [x] Frontend UI/UX
- [ ] Inventory Service MVP
- [ ] API Gateway setup
- [ ] Database setup (PostgreSQL)
- [ ] Authentication service

### Phase 2: E-commerce Features
- [ ] Order management
- [ ] Payment integration
- [ ] User profiles & ratings
- [ ] Product reviews

### Phase 3: Advanced Features
- [ ] Real-time messaging
- [ ] Notifications system
- [ ] Analytics dashboard
- [ ] Search optimization

---

## 📝 Environment Variables

Each service requires its own `.env` file. See individual service documentation:
- [Frontend Environment Setup](./frontend/README.md)
- [Inventory Service Environment Setup](./inventory-service/README.md)

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention
Follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions/changes
- `chore:` Build/config changes

---

## 📄 License

This project is private and proprietary.

---

## 👨‍💻 Author

**Khoo The Programmer**
- GitHub: [@KhoTheProgrammer](https://github.com/KhoTheProgrammer)
- Repository: [campus-cart](https://github.com/KhoTheProgrammer/campus-cart)

---

## 📞 Support

For questions or issues, please open an issue on GitHub.

---

**Last Updated**: November 2, 2025
