import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { towns, articles } from '@/data/articles';

const Towns = () => {
  const getArticleCountForTown = (townSlug: string) => {
    return articles.filter((article) => article.town === townSlug).length;
  };

  return (
    <>
      <Helmet>
        <title>Cape Cod Towns | Plumbing Resources by Location</title>
        <meta
          name="description"
          content="Find plumbing resources specific to your Cape Cod town. Local tips and guides for Falmouth, Mashpee, Sandwich, Bourne, Osterville, and Hyannis homeowners."
        />
        <link rel="canonical" href="https://capecodplumbingguide.com/towns" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Cape Cod Towns - Plumbing Resources',
            description: 'Local plumbing resources organized by Cape Cod town',
            url: 'https://capecodplumbingguide.com/towns',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: towns.map((town, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: town.name,
                url: `https://capecodplumbingguide.com/towns/${town.slug}`,
              })),
            },
          })}
        </script>
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="bg-gradient-hero py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-secondary/80 px-4 py-2 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-secondary-foreground">
                  Local Resources
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                Plumbing Resources by Town
              </h1>
              <p className="text-lg text-muted-foreground">
                Every Cape Cod community has unique plumbing considerations. Find guidance specific to your area.
              </p>
            </div>
          </div>
        </section>

        {/* Towns Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {towns.map((town, index) => (
                <Link
                  key={town.slug}
                  to={`/towns/${town.slug}`}
                  className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Background Image */}
                  <div className="aspect-[16/10] relative">
                    <img
                      src={town.image}
                      alt={`${town.name}, Cape Cod, Massachusetts`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-seafoam-light" />
                      <span className="text-sm text-primary-foreground/80">
                        {getArticleCountForTown(town.slug)} articles
                      </span>
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-primary-foreground mb-2 group-hover:text-seafoam-light transition-colors">
                      {town.name}
                    </h2>
                    <p className="text-primary-foreground/80 text-sm mb-3">
                      {town.description}
                    </p>
                    <div className="flex items-center gap-2 text-seafoam-light font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>View Resources</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Towns;
