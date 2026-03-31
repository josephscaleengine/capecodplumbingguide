import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, ArrowRight, Clock, ExternalLink } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { towns, articles, categories } from '@/data/articles';

const TownDetail = () => {
  const { townSlug } = useParams<{ townSlug: string }>();
  const town = towns.find((t) => t.slug === townSlug);
  const townArticles = articles.filter((article) => article.town === townSlug);

  if (!town) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Town Not Found</h1>
          <p className="text-muted-foreground mb-6">
            We couldn't find the town you're looking for.
          </p>
          <Link to="/towns">
            <Button>View All Towns</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const getCategoryInfo = (categorySlug: string) => {
    return categories.find((cat) => cat.slug === categorySlug);
  };

  return (
    <>
      <Helmet>
        <title>{town.name} Plumbing Resources | Cape Cod Plumbing Guide</title>
        <meta name="description" content={town.metaDescription} />
        <link rel="canonical" href={`https://capecodplumbingguide.com/towns/${town.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: `${town.name} Plumbing Resources`,
            description: town.metaDescription,
            url: `https://capecodplumbingguide.com/towns/${town.slug}`,
            about: {
              '@type': 'Place',
              name: `${town.name}, Massachusetts`,
              address: {
                '@type': 'PostalAddress',
                addressLocality: town.name,
                addressRegion: 'MA',
                addressCountry: 'US',
              },
            },
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: townArticles.map((article, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: article.title,
                url: `https://capecodplumbingguide.com/blog/${article.slug}`,
              })),
            },
          })}
        </script>
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative">
          <div className="aspect-[21/9] md:aspect-[3/1] relative">
            <img
              src={town.image}
              alt={`${town.name}, Cape Cod, Massachusetts`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-ocean-deep/60 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 py-8 md:py-12">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-2 text-seafoam-light mb-3">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Cape Cod, Massachusetts</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-3">
                {town.name} Plumbing Guide
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-2xl">
                {town.description}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Articles */}
              <div className="lg:col-span-2">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Resources for {town.name} Homeowners
                </h2>

                {townArticles.length > 0 ? (
                  <div className="space-y-6">
                    {townArticles.map((article) => {
                      const category = getCategoryInfo(article.category);
                      return (
                        <article
                          key={article.id}
                          className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-shadow"
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                              {category?.name}
                            </span>
                          </div>
                          <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                            <Link
                              to={`/blog/${article.slug}`}
                              className="hover:text-primary transition-colors"
                            >
                              {article.title}
                            </Link>
                          </h3>
                          <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              <span>{article.readTime} min read</span>
                            </div>
                            <Link
                              to={`/blog/${article.slug}`}
                              className="flex items-center gap-1 text-primary font-medium hover:text-ocean-light transition-colors"
                            >
                              Read More
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                ) : (
                  <div className="bg-secondary/50 rounded-xl p-8 text-center">
                    <p className="text-muted-foreground mb-4">
                      We're still building resources for {town.name}. Check back soon!
                    </p>
                    <Link to="/blog">
                      <Button variant="outline">Browse All Resources</Button>
                    </Link>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* CTA Card */}
                <div className="bg-gradient-ocean rounded-xl p-6 text-primary-foreground">
                  <h3 className="font-heading text-xl font-bold mb-3">
                    Need a Plumber in {town.name}?
                  </h3>
                  <p className="text-primary-foreground/90 mb-4 text-sm">
                    For professional plumbing services in {town.name} and throughout Cape Cod, Blue Pacific Cape Cod is here to help.
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

                {/* Other Towns */}
                <div className="bg-card rounded-xl p-6 shadow-soft">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                    Other Towns
                  </h3>
                  <div className="space-y-2">
                    {towns
                      .filter((t) => t.slug !== townSlug)
                      .slice(0, 5)
                      .map((t) => (
                        <Link
                          key={t.slug}
                          to={`/towns/${t.slug}`}
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-1"
                        >
                          <MapPin className="w-4 h-4" />
                          <span>{t.name}</span>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default TownDetail;
