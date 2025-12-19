import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Clock, Tag, ArrowRight, ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { articles, categories } from '@/data/articles';

const BlogCategory = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = categories.find((c) => c.slug === categorySlug);
  const categoryArticles = articles.filter((article) => article.category === categorySlug);

  if (!category) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-6">
            We couldn't find the category you're looking for.
          </p>
          <Link to="/blog">
            <Button>Browse All Resources</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Helmet>
        <title>{category.name} | Cape Cod Plumbing Guide</title>
        <meta
          name="description"
          content={`${category.name} resources for Cape Cod homeowners. Expert plumbing tips and guidance.`}
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="bg-gradient-hero py-16 md:py-20">
          <div className="container mx-auto px-4">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Resources
            </Link>
            <div className="max-w-3xl">
              <div className="text-5xl mb-4">{category.icon}</div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                {category.name}
              </h1>
              <p className="text-lg text-muted-foreground">
                {categoryArticles.length} article{categoryArticles.length !== 1 ? 's' : ''} in this category
              </p>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            {categoryArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryArticles.map((article, index) => (
                  <article
                    key={article.id}
                    className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 animate-fade-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="p-6">
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
                          className="text-primary hover:text-ocean-light transition-colors"
                        >
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  No articles in this category yet.
                </p>
                <Link to="/blog">
                  <Button variant="outline">Browse All Resources</Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default BlogCategory;
