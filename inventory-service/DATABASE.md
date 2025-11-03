# Database Configuration Guide

## 📋 Overview

The Inventory Service uses PostgreSQL as its primary database with Prisma as the ORM.

---

## 🗄️ Database Schema

### Models

#### Product
- **id**: UUID (Primary Key)
- **title**: String
- **description**: Text
- **price**: Decimal(10,2)
- **category**: Enum (TEXTBOOKS, ELECTRONICS, DORM_SUPPLIES, FURNITURE, CLOTHING, SPORTS, OTHER)
- **condition**: Enum (NEW, LIKE_NEW, GOOD, FAIR, POOR)
- **status**: Enum (DRAFT, ACTIVE, SOLD, INACTIVE, DELETED)
- **sellerId**: String
- **sellerName**: String
- **location**: String
- **images**: String[]
- **views**: Integer
- **isFeatured**: Boolean
- **tags**: String[]
- **createdAt**: DateTime
- **updatedAt**: DateTime

#### ProductStats
- **id**: UUID (Primary Key)
- **productId**: String (Unique)
- **views**: Integer
- **favorites**: Integer
- **inquiries**: Integer
- **createdAt**: DateTime
- **updatedAt**: DateTime

#### SearchHistory
- **id**: UUID (Primary Key)
- **query**: String
- **results**: Integer
- **userId**: String (Optional)
- **createdAt**: DateTime

---

## 🚀 Quick Setup

### 1. Install PostgreSQL

**macOS:**
```bash
brew install postgresql@15
brew services start postgresql@15
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
```

**Windows:**
Download from https://www.postgresql.org/download/windows/

### 2. Configure Environment

Copy `.env.example` to `.env` and update:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
```

### 3. Run Setup Script

```bash
chmod +x scripts/setup-db.sh
./scripts/setup-db.sh
```

Or manually:

```bash
# Generate Prisma client
pnpm prisma:generate

# Create and run migrations
pnpm prisma:migrate

# Seed database
pnpm prisma:seed
```

---

## 📝 Available Commands

### Prisma Commands

```bash
# Generate Prisma client
pnpm prisma:generate

# Create new migration
pnpm prisma:migrate

# Deploy migrations (production)
pnpm prisma:migrate:prod

# Open Prisma Studio (GUI)
pnpm prisma:studio

# Seed database
pnpm prisma:seed

# Push schema without migration
pnpm db:push

# Reset database (WARNING: Deletes all data)
pnpm db:reset
```

---

## 🔍 Prisma Studio

View and edit your database data visually:

```bash
pnpm prisma:studio
```

Opens at: http://localhost:5555

---

## 🌱 Seeding

The seed script (`prisma/seed.ts`) creates sample products for development:
- 6 sample products across different categories
- Product statistics
- Realistic data for testing

Run seed:
```bash
pnpm prisma:seed
```

---

## 🔧 Migrations

### Creating a Migration

1. Modify `prisma/schema.prisma`
2. Run migration:
```bash
pnpm prisma:migrate
```
3. Name your migration when prompted

### Migration Files

Located in: `prisma/migrations/`

Each migration includes:
- `migration.sql` - SQL changes
- README with timestamp

---

## 🐳 Docker Setup (Optional)

Run PostgreSQL in Docker:

```bash
docker run --name campus-cart-db \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=campus_cart_inventory \
  -p 5432:5432 \
  -d postgres:15-alpine
```

Update `.env`:
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/campus_cart_inventory?schema=public"
```

---

## 🔐 Production Setup

### Environment Variables

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public&sslmode=require"
DATABASE_POOL_SIZE=10
DATABASE_SSL=true
```

### Deploy Migrations

```bash
# Run migrations without prompts
pnpm prisma:migrate:prod
```

### Connection Pooling

For production, consider using:
- **PgBouncer** - Connection pooler
- **Prisma Data Platform** - Managed pooling
- **AWS RDS Proxy** - AWS managed pooling

---

## 🐛 Troubleshooting

### Connection Failed

```bash
# Check if PostgreSQL is running
sudo systemctl status postgresql  # Linux
brew services list  # macOS

# Test connection
psql -U postgres -h localhost -p 5432
```

### Migration Failed

```bash
# Reset database (WARNING: Deletes all data)
pnpm db:reset

# Or manually fix and retry
pnpm prisma:migrate
```

### Prisma Client Out of Sync

```bash
# Regenerate client
pnpm prisma:generate
```

---

## 📊 Performance Tips

### Indexes

Already configured in schema:
- `category` - Fast category filtering
- `sellerId` - Fast seller queries
- `status` - Fast status filtering
- `createdAt` - Fast date sorting
- `price` - Fast price filtering

### Query Optimization

```typescript
// ✅ Good: Select specific fields
const products = await prisma.product.findMany({
  select: { id: true, title: true, price: true },
});

// ❌ Bad: Select everything
const products = await prisma.product.findMany();
```

---

## 🔄 Backup & Restore

### Backup

```bash
pg_dump -U postgres -h localhost campus_cart_inventory > backup.sql
```

### Restore

```bash
psql -U postgres -h localhost campus_cart_inventory < backup.sql
```

---

## 📈 Monitoring

### Query Logging

Set in `.env`:
```env
DATABASE_LOG_LEVEL=query  # Logs all queries (dev only)
```

### Slow Query Analysis

```typescript
// Enable query logging
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});
```

---

**Last Updated**: November 2, 2025
