import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Clock, Tag, ArrowRight, BookOpen } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { articles, categories } from '@/data/articles';

const Blog = () => {
  const getCategoryInfo = (categorySlug: string) => {
    return categories.find((cat) => cat.slug === categorySlug);
  };

  return (
    <>
      <Helmet>
        <title>Plumbing Resources & Tips | Cape Cod Plumbing Guide</title>
        <meta
          name="description"
          content="Expert plumbing tips, guides, and resources for Cape Cod homeowners. Learn about seasonal issues, maintenance, and more."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="bg-gradient-hero py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-secondary/80 px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-secondary-foreground">
                  Educational Resources
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                Plumbing Resources
              </h1>
              <p className="text-lg text-muted-foreground">
                Expert guidance to help you understand and maintain your Cape Cod home's plumbing system.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-secondary/30 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/blog"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium"
              >
                All Articles
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  to={`/blog/category/${category.slug}`}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                >
                  {category.icon} {category.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => {
                const category = getCategoryInfo(article.category);
                return (
                  <article
                    key={article.id}
                    className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 animate-fade-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="p-6">
                      {/* Category */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-lg">{category?.icon}</span>
                        <span className="text-sm font-medium text-muted-foreground">
                          {category?.name}
                        </span>
                        {article.featured && (
                          <span className="ml-auto px-2 py-0.5 bg-seafoam/10 text-seafoam text-xs font-medium rounded-full">
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h2 className="font-heading text-xl font-bold text-foreground mb-3 line-clamp-2">
                        <Link
                          to={`/blog/${article.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {article.title}
                        </Link>
                      </h2>

                      {/* Excerpt */}
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Meta */}
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
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Blog;
