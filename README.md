# Comvinity - Amazon Business Operating System Website

A complete, production-ready marketing website with blog CMS built using 100% open-source technologies.

## Quick Start

```bash
# Frontend
cd frontend
yarn install
yarn start

# Backend
cd backend
pip install -r requirements.txt
python seed_blogs.py
uvicorn server:app --reload
```

Visit http://localhost:3000

## Features

✅ **12 Complete Pages**
- Home with modern hero section
- How It Works
- Features 
- Pricing (with comparison table)
- About
- FAQ (accordion UI)
- Blog listing & detail pages
- Contact form
- Privacy Policy, Terms, Risk Disclaimer

✅ **Blog CMS**
- Create/Edit/Delete blogs via admin panel
- Markdown support
- SEO optimization
- Featured images
- Draft/Published status

✅ **Modern UI/UX**
- Responsive design (mobile-first)
- Poppins font throughout
- Transparent logo
- Chat widget
- Smooth animations
- Professional color scheme

✅ **Backend API**
- RESTful blog endpoints
- MongoDB integration
- CRUD operations
- No authentication (add your own)

## Technology Stack

**Frontend:** React 19, Tailwind CSS, Shadcn/UI, React Router  
**Backend:** FastAPI, Motor (async MongoDB), Pydantic  
**Database:** MongoDB  

**All dependencies are open-source. No proprietary code.**

## Deployment

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed instructions.

## Admin Panel

Access at `/admin/blogs` to manage blog posts (no login required - add authentication as needed).

## File Structure

```
frontend/       - React application
backend/        - FastAPI server
README.md       - This file
DEPLOYMENT_GUIDE.md  - Detailed deployment instructions
```

## Customization

All code is yours to modify. Change colors, add features, integrate services - everything is standard open-source code.

## Export Instructions

To download this entire codebase:

**Option 1: Direct Download**
```bash
# ZIP the entire app directory
tar -czf comvinity-website.tar.gz /app
# Download comvinity-website.tar.gz
```

**Option 2: Git Repository** (Recommended)
```bash
cd /app
git init
git add .
git commit -m "Initial commit"
# Push to your GitHub/GitLab repository
```

## Support

All libraries used are well-documented:
- React: https://react.dev
- FastAPI: https://fastapi.tiangolo.com  
- Tailwind: https://tailwindcss.com
- MongoDB: https://docs.mongodb.com

---

Built with ❤️ using open-source tools
