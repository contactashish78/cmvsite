from fastapi import APIRouter, HTTPException
from typing import List
from models.blog import BlogPost, BlogPostCreate, BlogPostUpdate
from datetime import datetime
import uuid

router = APIRouter(prefix="/api/blog", tags=["blog"])


async def get_pool():
    from server import db_pool
    return db_pool


@router.get("/", response_model=List[BlogPost])
async def get_all_blogs():
    """Get all published blog posts"""
    pool = await get_pool()
    async with pool.acquire() as conn:
        rows = await conn.fetch(
            "SELECT * FROM blog_posts WHERE published = TRUE ORDER BY created_at DESC LIMIT 100"
        )
    return [BlogPost(**dict(row)) for row in rows]


@router.get("/{slug}", response_model=BlogPost)
async def get_blog_by_slug(slug: str):
    """Get a single blog post by slug"""
    pool = await get_pool()
    async with pool.acquire() as conn:
        row = await conn.fetchrow(
            "SELECT * FROM blog_posts WHERE slug = $1 AND published = TRUE", slug
        )
    if not row:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return BlogPost(**dict(row))


@router.post("/", response_model=BlogPost)
async def create_blog(blog: BlogPostCreate):
    """Create a new blog post"""
    pool = await get_pool()
    async with pool.acquire() as conn:
        existing = await conn.fetchrow("SELECT id FROM blog_posts WHERE slug = $1", blog.slug)
        if existing:
            raise HTTPException(status_code=400, detail="Blog with this slug already exists")

        blog_obj = BlogPost(**blog.model_dump())
        await conn.execute(
            """INSERT INTO blog_posts (id, title, slug, content, excerpt, author, seo_keywords,
               created_at, updated_at, published, featured_image, read_time)
               VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)""",
            blog_obj.id, blog_obj.title, blog_obj.slug, blog_obj.content,
            blog_obj.excerpt, blog_obj.author, blog_obj.seo_keywords,
            blog_obj.created_at, blog_obj.updated_at, blog_obj.published,
            blog_obj.featured_image, blog_obj.read_time
        )
    return blog_obj


@router.put("/{blog_id}", response_model=BlogPost)
async def update_blog(blog_id: str, blog_update: BlogPostUpdate):
    """Update an existing blog post"""
    pool = await get_pool()
    async with pool.acquire() as conn:
        row = await conn.fetchrow("SELECT * FROM blog_posts WHERE id = $1", blog_id)
        if not row:
            raise HTTPException(status_code=404, detail="Blog post not found")

        update_data = blog_update.model_dump(exclude_unset=True)
        update_data["updated_at"] = datetime.utcnow()

        set_clauses = []
        values = []
        for i, (key, val) in enumerate(update_data.items(), start=1):
            set_clauses.append(f"{key} = ${i}")
            values.append(val)
        values.append(blog_id)

        await conn.execute(
            f"UPDATE blog_posts SET {', '.join(set_clauses)} WHERE id = ${len(values)}",
            *values
        )

        updated_row = await conn.fetchrow("SELECT * FROM blog_posts WHERE id = $1", blog_id)
    return BlogPost(**dict(updated_row))


@router.delete("/{blog_id}")
async def delete_blog(blog_id: str):
    """Delete a blog post"""
    pool = await get_pool()
    async with pool.acquire() as conn:
        result = await conn.execute("DELETE FROM blog_posts WHERE id = $1", blog_id)
    if result == "DELETE 0":
        raise HTTPException(status_code=404, detail="Blog post not found")
    return {"message": "Blog post deleted successfully"}
