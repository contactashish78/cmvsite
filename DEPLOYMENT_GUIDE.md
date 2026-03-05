# Comvinity Website - Deployment Guide

This is a production-ready website built with open-source technologies.

## Technology Stack

### Frontend
- **React 19** - UI framework
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Shadcn/UI** - Component library
- **Lucide React** - Icons
- **Axios** - HTTP client
- **React Markdown** - Blog rendering

### Backend
- **FastAPI** - Python web framework
- **asyncpg** - Async PostgreSQL driver
- **Pydantic** - Data validation
- **Python 3.10+** - Runtime

### Database
- **PostgreSQL** - Relational database (database: `amazon_aplus`)

---

## Local Development

See [LOCAL_DEVELOPMENT.md](LOCAL_DEVELOPMENT.md) for step-by-step local setup instructions.

---

## Production Deployment

### Environment Variables

**Frontend (.env)**
```
REACT_APP_BACKEND_URL=https://your-api-domain.com
```

**Backend (.env)**
```
DATABASE_URL=postgresql://user:password@host:5432/amazon_aplus
CORS_ORIGINS=https://your-frontend-domain.com
```

### Build Frontend for Production

```bash
cd frontend
npm run build
# Creates optimized build in /frontend/build
```

### Deployment Options

#### Option 1: Vercel (Frontend) + Railway/Render (Backend)
1. **Frontend on Vercel:**
   - Connect GitHub repo
   - Set build command: `npm run build`
   - Set output directory: `build`
   - Add environment variable: `REACT_APP_BACKEND_URL`

2. **Backend on Railway/Render:**
   - Deploy from GitHub
   - Set start command: `python -m uvicorn server:app --host 0.0.0.0 --port $PORT`
   - Add `DATABASE_URL` and `CORS_ORIGINS` environment variables

#### Option 2: AWS/DigitalOcean VPS
1. Set up Ubuntu server
2. Install Node.js, Python, PostgreSQL
3. Use Nginx as reverse proxy
4. Use PM2 or systemd for process management
5. Set up SSL with Let's Encrypt

#### Option 3: Docker Deployment

```yaml
# docker-compose.yml
version: '3.8'
services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - REACT_APP_BACKEND_URL=http://backend:8001

  backend:
    build: ./backend
    ports:
      - "8001:8001"
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/amazon_aplus
      - CORS_ORIGINS=http://localhost:3000
    depends_on:
      - db

  db:
    image: postgres:16
    environment:
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=amazon_aplus
    ports:
      - "5432:5432"
    volumes:
      - pg_data:/var/lib/postgresql/data

volumes:
  pg_data:
```

---

## File Structure

```
/CMV_Site
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/              # Shadcn components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ChatWidget.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── BlogDetail.jsx
│   │   │   ├── Pricing.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── About.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Privacy.jsx
│   │   │   ├── Terms.jsx
│   │   │   ├── RiskDisclaimer.jsx
│   │   │   ├── AdminBlogs.jsx
│   │   │   └── AdminBlogEditor.jsx
│   │   ├── App.js
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
│
├── backend/
│   ├── models/
│   │   └── blog.py
│   ├── routes/
│   │   └── blog.py
│   ├── server.py
│   ├── seed_blogs.py
│   └── requirements.txt
│
├── LOCAL_DEVELOPMENT.md
└── DEPLOYMENT_GUIDE.md
```

---

## API Endpoints

### Status
- `GET /api/` - Health check
- `POST /api/status` - Create status check
- `GET /api/status` - List status checks

### Blog Management
- `GET /api/blog/` - List all published blogs
- `GET /api/blog/{slug}` - Get single blog by slug
- `POST /api/blog/` - Create new blog
- `PUT /api/blog/{id}` - Update blog
- `DELETE /api/blog/{id}` - Delete blog

### Admin Panel (Frontend Routes)
- `/admin/blogs` - Manage all blogs
- `/admin/blogs/new` - Create new blog
- `/admin/blogs/edit/{id}` - Edit existing blog

---

## Customization

### Changing Colors
Edit `frontend/tailwind.config.js` and `frontend/src/index.css`

### Adding New Pages
1. Create component in `frontend/src/pages/`
2. Add route in `frontend/src/App.js`
3. Add navigation link in `Header.jsx` and `Footer.jsx`

### Modifying Blog Schema
1. Update `backend/models/blog.py`
2. Alter the `blog_posts` table in PostgreSQL
3. Update `AdminBlogEditor.jsx`, `Blog.jsx`, and `BlogDetail.jsx`

---

## Resources

- React: https://react.dev
- FastAPI: https://fastapi.tiangolo.com
- Tailwind: https://tailwindcss.com
- Shadcn/UI: https://ui.shadcn.com
- PostgreSQL: https://www.postgresql.org
- asyncpg: https://magicstack.github.io/asyncpg
