import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { services } from '@/data/services';
import { SITE_URL } from '@/seo/titles';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Plumbing Services on Cape Cod — What to Know</title>
        <meta
          name="description"
          content="Learn about common plumbing services on Cape Cod. What to expect, typical costs, and when to call a professional."
        />
        <link rel="canonical" href={`${SITE_URL}/services`} />
        <meta property="og:title" content="Plumbing Services on Cape Cod — What to Know" />
        <meta property="og:description" content="Learn about common plumbing services on Cape Cod. What to expect, typical costs, and when to call a professional." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/services`} />
        <meta property="og:site_name" content="Cape Cod Plumbing Guide" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Plumbing Services Guide - Cape Cod',
            description: 'Learn about common plumbing services on Cape Cod. What to expect, typical costs, and when to call a professional.',
            url: `${SITE_URL}/services`,
          })}
        </script>
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="bg-navy py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                <Wrench className="w-4 h-4 text-[hsl(var(--warm-orange))]" />
                <span className="text-sm font-semibold text-white/80">Service Guides</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-black text-white mb-4">
                Plumbing Services Guide
              </h1>
              <p className="text-lg text-white/70">
                Learn about common plumbing services Cape Cod homeowners need. Understand what's involved, when you need it, and what to expect.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-sand">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="card-double-border p-6 group animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <h2 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center gap-2 text-accent font-semibold text-sm">
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
