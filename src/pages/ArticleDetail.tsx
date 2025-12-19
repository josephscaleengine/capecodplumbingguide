import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Tag, Calendar, ExternalLink, MapPin } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { articles, categories, towns } from '@/data/articles';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">
            We couldn't find the article you're looking for.
          </p>
          <Link to="/blog">
            <Button>Browse All Resources</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const category = categories.find((c) => c.slug === article.category);
  const town = article.town ? towns.find((t) => t.slug === article.town) : null;
  const relatedArticles = articles
    .filter((a) => a.id !== article.id && (a.category === article.category || a.town === article.town))
    .slice(0, 3);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <Helmet>
        <title>{article.title} | Cape Cod Plumbing Guide</title>
        <meta name="description" content={article.excerpt} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.excerpt,
            datePublished: article.publishedAt,
            author: {
              '@type': 'Organization',
              name: 'Cape Cod Plumbing Guide',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Cape Cod Plumbing Guide',
            },
          })}
        </script>
      </Helmet>
      <Layout>
        {/* Article Header */}
        <section className="bg-gradient-hero py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Resources
              </Link>

              {/* Category & Town Tags */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Link
                  to={`/blog/category/${article.category}`}
                  className="inline-flex items-center gap-2 bg-secondary px-3 py-1.5 rounded-full hover:bg-secondary/80 transition-colors"
                >
                  <span>{category?.icon}</span>
                  <span className="text-sm font-medium text-secondary-foreground">
                    {category?.name}
                  </span>
                </Link>
                {town && (
                  <Link
                    to={`/towns/${town.slug}`}
                    className="inline-flex items-center gap-2 bg-accent px-3 py-1.5 rounded-full hover:bg-accent/80 transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-accent-foreground" />
                    <span className="text-sm font-medium text-accent-foreground">
                      {town.name}
                    </span>
                  </Link>
                )}
              </div>

              {/* Title */}
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {article.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(article.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <article className="lg:col-span-2">
                <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-li:text-muted-foreground">
                  <ReactMarkdown
                    components={{
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          target={href?.startsWith('http') ? '_blank' : undefined}
                          rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {children}
                        </a>
                      ),
                    }}
                  >
                    {article.content}
                  </ReactMarkdown>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* CTA Card */}
                <div className="bg-gradient-ocean rounded-xl p-6 text-primary-foreground sticky top-24">
                  <h3 className="font-heading text-xl font-bold mb-3">
                    Need Professional Help?
                  </h3>
                  <p className="text-primary-foreground/90 mb-4 text-sm">
                    For professional plumbing services throughout Cape Cod, trust the local experts at Blue Pacific Cape Cod.
                  </p>
                  <a
                    href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                      Contact Blue Pacific
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Button>
                  </a>
                </div>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                  <div className="bg-card rounded-xl p-6 shadow-soft">
                    <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {relatedArticles.map((related) => (
                        <Link
                          key={related.id}
                          to={`/blog/${related.slug}`}
                          className="block group"
                        >
                          <h4 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {related.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {related.readTime} min read
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ArticleDetail;
