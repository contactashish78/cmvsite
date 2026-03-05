from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime
import uuid


class BlogPost(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    slug: str
    content: str
    excerpt: str
    author: str = "Comvinity Team"
    seo_keywords: List[str] = []
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    published: bool = True
    featured_image: Optional[str] = None
    read_time: int = 5  # minutes


class BlogPostCreate(BaseModel):
    title: str
    slug: str
    content: str
    excerpt: str
    author: str = "Comvinity Team"
    seo_keywords: List[str] = []
    published: bool = True
    featured_image: Optional[str] = None
    read_time: int = 5


class BlogPostUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    excerpt: Optional[str] = None
    author: Optional[str] = None
    seo_keywords: Optional[List[str]] = None
    published: Optional[bool] = None
    featured_image: Optional[str] = None
    read_time: Optional[int] = None
