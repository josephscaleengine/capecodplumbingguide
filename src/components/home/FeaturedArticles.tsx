import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { articles, categories } from '@/data/articles';
import { Button } from '@/components/ui/button';

const FeaturedArticles = () => {
  const featuredArticles = articles.filter((article) => article.featured);

  const getCategoryInfo = (categorySlug: string) => {
    return categories.find((cat) => cat.slug === categorySlug);
  };

  return (
    <section className="py-16 md:py-24 bg-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-12">
          <p className="text-accent font-bold text-sm uppercase tracking-widest mb-2">Resources</p>
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-4">
            Featured Plumbing Guides
          </h2>
          <p className="text-lg text-muted-foreground">
            In-depth guides on common plumbing challenges facing Cape Cod homeowners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => {
            const category = getCategoryInfo(article.category);
            return (
              <article
                key={article.id}
                className="card-double-border overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="p-6 pb-0">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
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
