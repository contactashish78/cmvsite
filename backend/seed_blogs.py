import asyncio
import asyncpg
import os
from dotenv import load_dotenv
from pathlib import Path
from datetime import datetime
import uuid

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

blogs = [
    {
        "id": str(uuid.uuid4()),
        "title": "How to Calculate True Amazon Profit Beyond ACOS",
        "slug": "calculate-true-amazon-profit-beyond-acos",
        "excerpt": "Many Amazon sellers optimize campaigns around ACOS and ROAS. While these metrics are useful, they do not represent actual business profitability.",
        "content": """## Introduction

Many Amazon sellers optimize campaigns around ACOS and ROAS. While these metrics are useful, they do not represent actual business profitability.

True Amazon profit includes:
- Advertising cost
- Referral fees
- FBA fees
- Storage fees
- Return costs
- Refund adjustments
- Cost of goods sold

Ignoring any of these creates distorted decision-making.

## Why ACOS Alone Is Misleading

A keyword can show 18% ACOS and still destroy margin if:
- Return rate is high
- Storage costs are elevated
- Price compression has occurred
- Buy Box is unstable

Profit optimization requires a full financial lens.

## Step-by-Step True Profit Formula

**True Profit = Revenue – Ad Spend – Amazon Fees – FBA Fees – Returns & Refunds – COGS**

This must be calculated at SKU level.

## Common Mistakes Sellers Make

1. Scaling high-ROAS campaigns without checking margin
2. Ignoring return-adjusted contribution
3. Focusing on revenue growth over cash flow

## Closing

Amazon growth becomes sustainable when financial visibility matches advertising velocity.

If you want structured profit intelligence instead of fragmented reporting, explore how Comvinity connects advertising, inventory, and finance into one system.""",
        "author": "Comvinity Team",
        "seo_keywords": ["Amazon profit calculation", "Amazon ACOS vs profit", "Amazon net margin"],
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow(),
        "published": True,
        "featured_image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        "read_time": 6
    },
    {
        "id": str(uuid.uuid4()),
        "title": "Why Your Amazon ROAS Dropped Even Though Traffic Stayed the Same",
        "slug": "amazon-roas-drop-traffic-same",
        "excerpt": "If traffic is stable but ROAS drops, the issue is rarely the bid. It is usually conversion rate decline, Buy Box instability, pricing shifts, return spike, or competitor aggression.",
        "content": """## Introduction

If traffic is stable but ROAS drops, the issue is rarely the bid.

It is usually one of the following:
- Conversion rate decline
- Buy Box instability
- Pricing shifts
- Return spike
- Competitor aggression

## Diagnose in This Order

### 1. Check Conversion Rate
If CVR drops, investigate listing quality, reviews, price changes.

### 2. Check Buy Box Percentage
If Buy Box exposure declines, ad spend becomes inefficient.

### 3. Check Return Rate
A return spike reduces net profitability.

### 4. Check CPC Trend
If CPC rises but CVR does not, competitor pressure is likely.

## Why Isolated PPC Optimization Fails

Many sellers increase bids to compensate for falling sales. This often worsens margin compression.

Advertising optimization must align with product page and pricing stability.

## Closing

ROAS does not fall randomly. It signals structural friction somewhere in the system.

Comvinity identifies root cause before recommending action.""",
        "author": "Comvinity Team",
        "seo_keywords": ["Amazon ROAS drop", "Amazon conversion rate issues", "Amazon PPC troubleshooting"],
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow(),
        "published": True,
        "featured_image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        "read_time": 5
    },
    {
        "id": str(uuid.uuid4()),
        "title": "How to Reduce ACOS Without Losing Sales",
        "slug": "reduce-acos-without-losing-sales",
        "excerpt": "Reducing ACOS by cutting spend is easy. Reducing ACOS while maintaining sales requires structural alignment.",
        "content": """## Introduction

Reducing ACOS by cutting spend is easy. Reducing ACOS while maintaining sales requires structural alignment.

## Strategy 1 — Eliminate Waste First

- Identify high-spend, zero-order keywords
- Add negatives
- Remove irrelevant placements

## Strategy 2 — Improve Conversion Before Scaling

- Optimize main image
- Improve A+ content
- Stabilize Buy Box
- Align pricing

Better conversion lowers effective ACOS without reducing traffic.

## Strategy 3 — Narrow Keyword Focus

Fewer high-intent keywords often outperform broad exploration.

## Closing

ACOS improvement should protect sales volume, not sacrifice it.

Optimization must protect margin and velocity together.""",
        "author": "Comvinity Team",
        "seo_keywords": ["Reduce ACOS", "Amazon PPC optimization", "Lower advertising cost Amazon"],
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow(),
        "published": True,
        "featured_image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        "read_time": 4
    },
    {
        "id": str(uuid.uuid4()),
        "title": "Inventory Forecasting for Amazon Sellers: Avoiding Stockouts While Scaling Ads",
        "slug": "amazon-inventory-forecasting-stockouts",
        "excerpt": "Scaling ads without inventory planning is one of the fastest ways to damage profitability. Stockouts create lost ranking, wasted ad spend, Buy Box loss, and recovery delay.",
        "content": """## Introduction

Scaling ads without inventory planning is one of the fastest ways to damage profitability.

Stockouts create:
- Lost ranking
- Wasted ad spend
- Buy Box loss
- Recovery delay

## What to Track

- Sell-through rate
- Days of coverage
- Inbound shipment timeline
- Advertising velocity

## Advertising & Inventory Must Align

If inventory coverage is under 20 days and inbound lead time is long, scaling ads increases risk.

## Closing

Advertising velocity must be synchronized with operational capacity.

Integrated inventory intelligence prevents growth disruptions.""",
        "author": "Comvinity Team",
        "seo_keywords": ["Amazon inventory forecasting", "FBA restock planning", "Amazon stockout prevention"],
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow(),
        "published": True,
        "featured_image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
        "read_time": 4
    },
    {
        "id": str(uuid.uuid4()),
        "title": "Understanding the Amazon Buy Box and Why It Impacts Your Ad Performance",
        "slug": "amazon-buy-box-ad-performance",
        "excerpt": "The Buy Box determines who captures the sale. Even if your ads generate traffic, losing the Buy Box reduces conversion efficiency.",
        "content": """## Introduction

The Buy Box determines who captures the sale.

Even if your ads generate traffic, losing the Buy Box reduces conversion efficiency.

## Factors That Affect Buy Box

- Pricing competitiveness
- Fulfillment method (FBA vs MFN)
- Seller rating
- Stock availability

## Why It Matters for Ads

If Buy Box exposure drops:
- Conversion declines
- ACOS increases
- Scaling becomes unsafe

Advertising optimization must account for Buy Box probability.

## Closing

Buy Box monitoring is not optional for serious Amazon operators.

Advertising without Buy Box intelligence creates hidden inefficiency.""",
        "author": "Comvinity Team",
        "seo_keywords": ["Amazon Buy Box", "Buy Box percentage", "Amazon ad performance"],
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow(),
        "published": True,
        "featured_image": "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2",
        "read_time": 4
    }
]


async def seed_blogs():
    database_url = os.environ['DATABASE_URL']
    conn = await asyncpg.connect(database_url)
    try:
        # Clear existing blogs
        await conn.execute("DELETE FROM blog_posts")
        print("Cleared existing blog posts")

        # Insert new blogs
        for blog in blogs:
            await conn.execute(
                """INSERT INTO blog_posts (id, title, slug, content, excerpt, author, seo_keywords,
                   created_at, updated_at, published, featured_image, read_time)
                   VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)""",
                blog['id'], blog['title'], blog['slug'], blog['content'],
                blog['excerpt'], blog['author'], blog['seo_keywords'],
                blog['created_at'], blog['updated_at'], blog['published'],
                blog['featured_image'], blog['read_time']
            )
            print(f"[OK] {blog['title']}")
    finally:
        await conn.close()


if __name__ == "__main__":
    asyncio.run(seed_blogs())
    print("\nBlog seeding complete!")
