import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Clock, Tag, ArrowRight, BookOpen } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { articles, categories } from '@/data/articles';
import { DEFAULT_OG_IMAGE, SITE_URL } from '@/seo/titles';

const categoryColors: Record<string, string> = {
  seasonal: 'bg-[hsl(200,60%,50%,0.15)] text-[hsl(200,60%,35%)] hover:bg-[hsl(200,60%,50%)] hover:text-white',
  emergency: 'bg-[hsl(0,65%,55%,0.15)] text-[hsl(0,65%,40%)] hover:bg-[hsl(0,65%,55%)] hover:text-white',
  coastal: 'bg-[hsl(174,55%,36%,0.15)] text-[hsl(174,55%,30%)] hover:bg-[hsl(var(--ocean-teal))] hover:text-white',
  'older-homes': 'bg-[hsl(30,30%,50%,0.15)] text-[hsl(30,30%,32%)] hover:bg-[hsl(30,30%,50%)] hover:text-white',
  'well-water': 'bg-[hsl(190,55%,50%,0.15)] text-[hsl(190,55%,32%)] hover:bg-[hsl(190,55%,50%)] hover:text-white',
  'cost-guide': 'bg-[hsl(var(--warm-orange)/0.15)] text-[hsl(14,76%,48%)] hover:bg-[hsl(var(--warm-orange))] hover:text-white',
  'homeowner-guide': 'bg-[hsl(var(--navy)/0.15)] text-[hsl(var(--navy))] hover:bg-[hsl(var(--navy))] hover:text-white',
  septic: 'bg-[hsl(140,40%,45%,0.15)] text-[hsl(140,40%,30%)] hover:bg-[hsl(140,40%,45%)] hover:text-white',
  rental: 'bg-[hsl(30,40%,50%,0.15)] text-[hsl(30,40%,32%)] hover:bg-[hsl(30,40%,45%)] hover:text-white',
  maintenance: 'bg-[hsl(220,15%,50%,0.15)] text-[hsl(220,15%,35%)] hover:bg-[hsl(220,15%,50%)] hover:text-white',
};

const getArticleCount = (slug: string) => articles.filter((a) => a.category === slug).length;

const Blog = () => {
  const seoTitle = 'Cape Cod Plumbing Guides & Tips for Homeowners';
  const seoDescription = 'Browse free plumbing guides for Cape Cod homeowners. Seasonal tips, emergency guides, cost breakdowns, and expert advice for coastal homes.';
  const pageUrl = `${SITE_URL}/resources`;

  const getCategoryInfo = (categorySlug: string) => {
    return categories.find((cat) => cat.slug === categorySlug);
  };

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Cape Cod Plumbing Guide" />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Cape Cod Plumbing Guide Resources',
            description: 'Free plumbing guides and tips for Cape Cod homeowners',
            url: pageUrl,
            publisher: {
              '@type': 'Organization',
              name: 'Cape Cod Plumbing Guide',
            },
            blogPost: articles.slice(0, 10).map((article) => ({
              '@type': 'BlogPosting',
              headline: article.title,
              description: article.metaDescription,
              url: `${SITE_URL}/resources/${article.slug}`,
              datePublished: new Date(article.publishedAt).toISOString(),
            })),
          })}
        </script>
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="bg-navy py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4 text-[hsl(var(--warm-orange))]" />
                <span className="text-sm font-semibold text-white/80">
                  Educational Resources
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-black text-white mb-4">
                Plumbing Resources
              </h1>
              <p className="text-lg text-white/70">
                Expert guidance to help you understand and maintain your Cape Cod home's plumbing system.
              </p>
            </div>
          </div>
        </section>

        {/* Unified: Pills + Articles */}
        <section className="py-12 md:py-16 bg-[hsl(var(--pale-white))]">
          <div className="container mx-auto px-4">
            {/* Topic pills */}
            <div className="flex flex-wrap items-center gap-2 mb-10">
              <Link
                to="/resources"
                className="px-3.5 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-semibold"
              >
                All ({articles.length})
              </Link>
              {categories.map((category) => {
                const colors = categoryColors[category.slug] || categoryColors.maintenance;
                return (
                  <Link
                    key={category.slug}
                    to={`/blog/category/${category.slug}`}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${colors}`}
                  >
                    {category.name} ({getArticleCount(category.slug)})
                  </Link>
                );
              })}
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => {
                const category = getCategoryInfo(article.category);
                const colors = categoryColors[article.category] || categoryColors.maintenance;
                return (
                  <article
                    key={article.id}
                    className="card-double-border overflow-hidden animate-fade-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="p-6">
                      {/* Category */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors}`}>
                          {category?.name}
                        </span>
                        {article.featured && (
                          <span className="ml-auto px-2 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                            Featured
                          </span>
                        )}
                      </div>

                      <h2 className="font-heading text-xl font-bold text-foreground mb-3 line-clamp-2">
                        <Link
                          to={`/blog/${article.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {article.title}
                        </Link>
                      </h2>

                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime} min</span>
                          </div>
                          {article.town && (
                            <div className="flex items-center gap-1">
                              <Tag className="w-4 h-4" />
                              <span className="capitalize">{article.town}</span>
                            </div>
                          )}
                        </div>
                        <Link
                          to={`/blog/${article.slug}`}
                          className="text-accent hover:text-[hsl(var(--warm-orange-hover))] transition-colors"
                        >
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Blog;
