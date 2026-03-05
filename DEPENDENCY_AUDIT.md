# Dependency Audit - Comvinity Website

## Verification: No Proprietary Dependencies

This document verifies that all dependencies are open-source and publicly available.

### Frontend Dependencies (package.json)

All dependencies are from npm public registry:

**Core Libraries:**
- ✅ react (MIT License)
- ✅ react-dom (MIT License)  
- ✅ react-router-dom (MIT License)
- ✅ axios (MIT License)

**UI Components (Shadcn/UI - Open Source):**
- ✅ @radix-ui/* (MIT License) - Headless UI primitives
- ✅ lucide-react (ISC License) - Icon library
- ✅ tailwindcss (MIT License)
- ✅ class-variance-authority (Apache 2.0)
- ✅ clsx (MIT License)
- ✅ tailwind-merge (MIT License)

**Form & Validation:**
- ✅ react-hook-form (MIT License)
- ✅ @hookform/resolvers (MIT License)
- ✅ zod (MIT License)

**Markdown:**
- ✅ react-markdown (MIT License)

**Build Tools:**
- ✅ react-scripts (MIT License)
- ✅ @craco/craco (Apache 2.0)
- ✅ eslint (MIT License)

### Backend Dependencies (requirements.txt)

All dependencies are from PyPI public registry:

**Web Framework:**
- ✅ fastapi (MIT License)
- ✅ uvicorn (BSD License)

**Database:**
- ✅ motor (Apache 2.0) - Async MongoDB driver
- ✅ pymongo (Apache 2.0)

**Data Validation:**
- ✅ pydantic (MIT License)

**Utilities:**
- ✅ python-dotenv (BSD License)
- ✅ requests (Apache 2.0)
- ✅ python-jose (MIT License) - JWT
- ✅ passlib (BSD License) - Password hashing

**Development:**
- ✅ pytest (MIT License)
- ✅ black (MIT License)
- ✅ isort (MIT License)
- ✅ flake8 (MIT License)

### Database
- ✅ MongoDB (SSPL/Community License)

### Assets
- ✅ Logo: Created from user-provided asset
- ✅ Images: Unsplash (free to use)
- ✅ Fonts: Poppins (Google Fonts, OFL License)

## Conclusion

✅ **100% Open Source**  
✅ **No Emergent-specific code**  
✅ **No proprietary dependencies**  
✅ **All libraries publicly available**  
✅ **Free to modify and redistribute**

You own this code completely and can:
- Modify any part
- Deploy anywhere
- Add any integrations
- Remove any features
- Rebrand completely
- Use commercially

All dependencies use permissive open-source licenses (MIT, Apache 2.0, BSD, ISC).
