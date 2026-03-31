import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { articles, categories } from '@/data/articles';
import { Button } from '@/components/ui/button';

const FeaturedArticles = () => {
  const featuredArticles = articles.filter((article) => article.featured);

  const getCategoryInfo = (categorySlug: string) => {
    return categories.find((cat) => cat.slug === categorySlug);
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Plumbing Guides
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 pb-0">
                  <div className="inline-flex items-center gap-2 bg-secondary px-3 py-1.5 rounded-full">
                    <span>{category?.icon}</span>
                    <span className="text-xs font-medium text-secondary-foreground">
                      {category?.name}
                    </span>
                  </div>
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
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime} min read</span>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${article.slug}`}
                      className="text-primary hover:text-ocean-light transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12">
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
