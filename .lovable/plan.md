

## Plan: URL Migration + JSON-LD Additions

### 1. Change `/blog` routes to `/resources`

Update every occurrence of `/blog` to `/resources` across the entire codebase:

- **`src/App.tsx`** — Routes: `/blog` → `/resources`, `/blog/category/:categorySlug` → `/resources/category/:categorySlug`, `/blog/:slug` → `/resources/:slug`
- **`src/components/layout/Header.tsx`** — Nav link path
- **`src/components/layout/Footer.tsx`** — Category links
- **`src/components/home/FeaturedArticles.tsx`** — Category pills, article links, "View All" link
- **`src/pages/Blog.tsx`** — Canonical URL, JSON-LD URLs
- **`src/pages/BlogCategory.tsx`** — pageUrl, all internal links
- **`src/pages/ArticleDetail.tsx`** — pageUrl, breadcrumb/back links, related article links
- **`src/pages/ServiceDetail.tsx`** — Any cross-links to blog articles
- **`public/sitemap.xml`** — All `/blog/` URLs → `/resources/`

### 2. Add JSON-LD to About page

Add an `Organization` schema to `src/pages/About.tsx`:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cape Cod Plumbing Guide",
  "url": "https://capecodplumbingresources.com",
  "description": "Free plumbing resource for Cape Cod homeowners"
}
```

### 3. Add JSON-LD to BlogCategory page

Add a `CollectionPage` schema to `src/pages/BlogCategory.tsx`:

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "{category.name}",
  "url": "{pageUrl}",
  "description": "{seoDescription}",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [/* category articles mapped with position, url, name */]
  }
}
```

### Files to modify
- `src/App.tsx`
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/home/FeaturedArticles.tsx`
- `src/pages/Blog.tsx`
- `src/pages/BlogCategory.tsx`
- `src/pages/ArticleDetail.tsx`
- `src/pages/ServiceDetail.tsx` (if it has blog links)
- `public/sitemap.xml`
- `src/pages/About.tsx`

