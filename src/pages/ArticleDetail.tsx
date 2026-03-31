import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Calendar, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { articles, categories } from '@/data/articles';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">We couldn't find the article you're looking for.</p>
          <Link to="/blog"><Button>Browse All Resources</Button></Link>
        </div>
      </Layout>
    );
  }

  const category = categories.find((c) => c.slug === article.category);
  const relatedArticles = articles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const isoDate = new Date(article.publishedAt).toISOString();

  return (
    <>
      <Helmet>
        <title>{article.title} | Cape Cod Plumbing Guide</title>
        <meta name="description" content={article.metaDescription} />
        <link rel="canonical" href={`https://capecodplumbingguide.com/blog/${article.slug}`} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://capecodplumbingguide.com/blog/${article.slug}`} />
        <meta property="article:published_time" content={isoDate} />
        <meta property="article:section" content={category?.name} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.metaDescription,
            datePublished: isoDate,
            dateModified: isoDate,
            author: { '@type': 'Organization', name: 'Cape Cod Plumbing Guide', url: 'https://capecodplumbingguide.com' },
            publisher: { '@type': 'Organization', name: 'Cape Cod Plumbing Guide', url: 'https://capecodplumbingguide.com' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': `https://capecodplumbingguide.com/blog/${article.slug}` },
            articleSection: category?.name,
            wordCount: article.content.split(/\s+/).length,
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://capecodplumbingguide.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://capecodplumbingguide.com/blog' },
              { '@type': 'ListItem', position: 3, name: article.title, item: `https://capecodplumbingguide.com/blog/${article.slug}` },
            ],
          })}
        </script>
      </Helmet>
      <Layout>
        {/* Article Header */}
        <section className="bg-navy py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-6">
                <ArrowLeft className="w-4 h-4" />
                Back to Resources
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Link
                  to={`/blog/category/${article.category}`}
                  className="inline-flex items-center gap-2 bg-primary/20 text-[hsl(var(--ocean-light))] px-3 py-1.5 rounded-full hover:bg-primary/30 transition-colors"
                >
                  <span className="text-sm font-semibold">{category?.name}</span>
                </Link>
              </div>

              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-white/60">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={isoDate}>{formatDate(article.publishedAt)}</time>
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
        <section className="py-12 md:py-16 bg-sand">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <article className="lg:col-span-2">
                <div className="prose prose-lg max-w-none
                  prose-headings:font-heading prose-headings:text-foreground prose-headings:font-bold
                  prose-h1:text-3xl prose-h1:mt-0 prose-h1:mb-6
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-border prose-h2:pb-2
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                  prose-a:text-primary prose-a:font-medium prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-primary/80
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                  prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                  prose-li:text-muted-foreground prose-li:my-2 prose-li:leading-relaxed
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground
                ">
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => <h1 className="text-3xl font-black font-heading text-foreground mt-0 mb-6">{children}</h1>,
                      h2: ({ children }) => <h2 className="text-2xl font-bold font-heading text-foreground mt-10 mb-4 pb-2 border-b border-border">{children}</h2>,
                      h3: ({ children }) => <h3 className="text-xl font-bold font-heading text-foreground mt-8 mb-3">{children}</h3>,
                      p: ({ children }) => <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>,
                      ul: ({ children }) => <ul className="my-6 list-disc pl-6 space-y-2">{children}</ul>,
                      ol: ({ children }) => <ol className="my-6 list-decimal pl-6 space-y-2">{children}</ol>,
                      li: ({ children }) => <li className="text-muted-foreground leading-relaxed">{children}</li>,
                      strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
                      a: ({ href, children }) => (
                        <a href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-primary font-medium underline underline-offset-2 hover:text-primary/80 transition-colors">
                          {children}
                        </a>
                      ),
                      blockquote: ({ children }) => <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6">{children}</blockquote>,
                    }}
                  >
                    {article.content}
                  </ReactMarkdown>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="space-y-6">
                <div className="bg-navy rounded-xl p-6 text-white sticky top-24">
                  <h3 className="font-heading text-xl font-bold mb-3">Need Professional Help?</h3>
                  <p className="text-white/70 mb-4 text-sm">
                    For professional plumbing services throughout Cape Cod, trust the local experts at Blue Pacific Cape Cod.
                  </p>
                  <a href="https://bluepacificcapecod.com/plumbing-falmouth-ma/" target="_blank" rel="noopener noreferrer">
                    <Button variant="cta" className="w-full">
                      Contact Blue Pacific
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Button>
                  </a>
                </div>

                {relatedArticles.length > 0 && (
                  <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                    <h3 className="font-heading text-lg font-bold text-foreground mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedArticles.map((related) => (
                        <Link key={related.id} to={`/blog/${related.slug}`} className="block group">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">{related.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{related.readTime} min read</p>
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
