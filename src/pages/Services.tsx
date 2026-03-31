import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { services } from '@/data/services';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Plumbing Services Guide | Cape Cod Plumbing Guide</title>
        <meta
          name="description"
          content="Learn about common plumbing services Cape Cod homeowners need. Educational guides on water heaters, drain cleaning, pipe repair, and more."
        />
        <link rel="canonical" href="https://capecodplumbingguide.com/services" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Plumbing Services Guide - Cape Cod',
            description: 'Educational guides on common plumbing services for Cape Cod homeowners',
            url: 'https://capecodplumbingguide.com/services',
          })}
        </script>
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="bg-gradient-hero py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-secondary/80 px-4 py-2 rounded-full mb-6">
                <Wrench className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-secondary-foreground">
                  Service Guides
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                Plumbing Services Guide
              </h1>
              <p className="text-lg text-muted-foreground">
                Learn about common plumbing services Cape Cod homeowners need. Understand what's involved, when you need it, and what to expect.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="card-double-border p-6 group animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h2 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
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

export default Services;
