import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { articles, categories } from '@/data/articles';
import { Button } from '@/components/ui/button';

const categoryColors: Record<string, { pill: string }> = {
  seasonal: { pill: 'bg-[hsl(200,60%,50%,0.15)] text-[hsl(200,60%,35%)] hover:bg-[hsl(200,60%,50%)] hover:text-white' },
  emergency: { pill: 'bg-[hsl(0,65%,55%,0.15)] text-[hsl(0,65%,40%)] hover:bg-[hsl(0,65%,55%)] hover:text-white' },
  coastal: { pill: 'bg-[hsl(174,55%,36%,0.15)] text-[hsl(174,55%,30%)] hover:bg-[hsl(var(--ocean-teal))] hover:text-white' },
  'older-homes': { pill: 'bg-[hsl(30,30%,50%,0.15)] text-[hsl(30,30%,32%)] hover:bg-[hsl(30,30%,50%)] hover:text-white' },
  'well-water': { pill: 'bg-[hsl(190,55%,50%,0.15)] text-[hsl(190,55%,32%)] hover:bg-[hsl(190,55%,50%)] hover:text-white' },
  'cost-guide': { pill: 'bg-[hsl(var(--warm-orange)/0.15)] text-[hsl(14,76%,48%)] hover:bg-[hsl(var(--warm-orange))] hover:text-white' },
  'homeowner-guide': { pill: 'bg-[hsl(var(--navy)/0.15)] text-[hsl(var(--navy))] hover:bg-[hsl(var(--navy))] hover:text-white' },
  septic: { pill: 'bg-[hsl(140,40%,45%,0.15)] text-[hsl(140,40%,30%)] hover:bg-[hsl(140,40%,45%)] hover:text-white' },
  rental: { pill: 'bg-[hsl(30,40%,50%,0.15)] text-[hsl(30,40%,32%)] hover:bg-[hsl(30,40%,45%)] hover:text-white' },
  maintenance: { pill: 'bg-[hsl(220,15%,50%,0.15)] text-[hsl(220,15%,35%)] hover:bg-[hsl(220,15%,50%)] hover:text-white' },
};

const getArticleCount = (slug: string) => articles.filter((a) => a.category === slug).length;

const FeaturedArticles = () => {
  const featuredArticles = articles.filter((article) => article.featured);

  const getCategoryInfo = (categorySlug: string) => {
    return categories.find((cat) => cat.slug === categorySlug);
  };

  return (
    <section className="py-16 md:py-24 bg-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-8">
          <p className="text-accent font-bold text-sm uppercase tracking-widest mb-2">Resources</p>
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-4">
            Featured Plumbing Guides
          </h2>
          <p className="text-lg text-muted-foreground">
            In-depth guides on common plumbing challenges facing Cape Cod homeowners.
          </p>
        </div>

        {/* Topic pills — inline filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const colors = categoryColors[cat.slug] || categoryColors.maintenance;
            return (
              <Link
                key={cat.slug}
                to={`/blog/category/${cat.slug}`}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${colors.pill}`}
              >
                {cat.name} ({getArticleCount(cat.slug)})
              </Link>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => {
            const category = getCategoryInfo(article.category);
            const colors = categoryColors[article.category] || categoryColors.maintenance;
            return (
              <article
                key={article.id}
                className="card-double-border overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="p-6 pb-0">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${colors.pill}`}>
                    {category?.name}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 line-clamp-2">
                    <Link
                      to={`/blog/${article.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime} min read</span>
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

        <div className="mt-12">
          <Link to="/blog">
            <Button variant="outline" size="lg">
              View All Resources
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
