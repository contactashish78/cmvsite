# Local Development Guide

Step-by-step instructions to run the Comvinity website on your local machine.

## Prerequisites

| Tool | Version | Notes |
|------|---------|-------|
| Python | 3.10+ | [python.org](https://python.org) |
| Node.js | 18+ | [nodejs.org](https://nodejs.org) |
| PostgreSQL | 14+ | Must be running locally |
| npm | 9+ | Comes with Node.js |

---

## 1. Clone / Open the Project

```bash
cd C:\code\CMV_Site   # or wherever the project lives
```

---

## 2. Database Setup

The backend uses the PostgreSQL database **`amazon_aplus`**.

### 2a. Ensure PostgreSQL is running

On Windows (PowerShell or Services panel):
```powershell
# Check status
Get-Service -Name postgresql*

# Start if stopped
Start-Service -Name postgresql*
```

### 2b. Create tables (first time only)

Connect to the database and run:

```sql
-- Connect
psql -U postgres -d amazon_aplus

-- Create tables
CREATE TABLE IF NOT EXISTS status_checks (
    id VARCHAR(36) PRIMARY KEY,
    client_name VARCHAR(255) NOT NULL,
    timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS blog_posts (
    id VARCHAR(36) PRIMARY KEY,
    title TEXT NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    author VARCHAR(255) NOT NULL DEFAULT 'Comvinity Team',
    seo_keywords TEXT[] DEFAULT '{}',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    published BOOLEAN NOT NULL DEFAULT TRUE,
    featured_image TEXT,
    read_time INTEGER NOT NULL DEFAULT 5
);
```

> **Note:** If the `amazon_aplus` database does not exist yet, create it first:
> ```sql
> psql -U postgres -c "CREATE DATABASE amazon_aplus;"
> ```

---

## 3. Backend Setup

```bash
cd backend
```

### 3a. Install Python dependencies

```bash
pip install -r requirements.txt
```

### 3b. Configure environment

The file `backend/.env` should contain:

```env
DATABASE_URL=postgresql://postgres:Password%40123@127.0.0.1:5432/amazon_aplus
CORS_ORIGINS=http://localhost:3000
```

> **Note on special characters in passwords:** If your PostgreSQL password contains `@`, encode it as `%40` in the URL.
> Example: `Password@123` → `Password%40123`

### 3c. Seed blog data (optional)

Populate the database with sample blog posts:

```bash
python seed_blogs.py
```

Expected output:
```
Cleared existing blog posts
[OK] How to Calculate True Amazon Profit Beyond ACOS
[OK] Why Your Amazon ROAS Dropped Even Though Traffic Stayed the Same
[OK] How to Reduce ACOS Without Losing Sales
[OK] Inventory Forecasting for Amazon Sellers: Avoiding Stockouts While Scaling Ads
[OK] Understanding the Amazon Buy Box and Why It Impacts Your Ad Performance

Blog seeding complete!
```

### 3d. Start the backend server

```bash
python -m uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

The backend will be available at **http://localhost:8001**

Verify it's working:
```bash
curl http://localhost:8001/api/
# Expected: {"message":"Hello World"}

curl http://localhost:8001/api/blog/
# Expected: JSON array of blog posts
```

---

## 4. Frontend Setup

Open a **new terminal**:

```bash
cd frontend
```

### 4a. Install dependencies

```bash
npm install --legacy-peer-deps
```

### 4b. Configure environment

The file `frontend/.env` should contain:

```env
REACT_APP_BACKEND_URL=http://127.0.0.1:8001
```

### 4c. Start the frontend

```bash
npm start
```

The frontend will be available at **http://localhost:3000**

> The browser may open automatically. If not, navigate to http://localhost:3000

---

## 5. Verify Everything Works

| Check | URL | Expected |
|-------|-----|----------|
| Frontend loads | http://localhost:3000 | Comvinity homepage |
| Blog page | http://localhost:3000/blog | List of blog posts |
| API health | http://localhost:8001/api/ | `{"message":"Hello World"}` |
| API blogs | http://localhost:8001/api/blog/ | JSON array of blogs |
| API docs | http://localhost:8001/docs | FastAPI Swagger UI |
| Admin panel | http://localhost:3000/admin/blogs | Blog management UI |

---

## 6. Stopping the Servers

### Stop backend
Press `Ctrl+C` in the backend terminal.

### Stop frontend
Press `Ctrl+C` in the frontend terminal.

### Force-kill by port (Windows) if Ctrl+C doesn't work

```powershell
# Find PIDs
netstat -ano | findstr ":3000 :8001"

# Kill by PID (replace XXXX with actual PID)
taskkill /PID XXXX /F
```

---

## Troubleshooting

### `getaddrinfo failed` on backend start
Use `127.0.0.1` instead of `localhost` in `DATABASE_URL`. Some Windows environments fail to resolve `localhost` in async contexts.

### `MODULE_NOT_FOUND` on frontend start
Run with legacy peer deps:
```bash
npm install --legacy-peer-deps
npm start
```

### PostgreSQL connection refused
Ensure the PostgreSQL service is running and the port (default 5432) is not blocked by a firewall.

### CORS errors in browser
Confirm `CORS_ORIGINS` in `backend/.env` includes `http://localhost:3000` and matches the frontend URL exactly.

### Blog page shows no posts
Run the seeder:
```bash
cd backend
python seed_blogs.py
```
