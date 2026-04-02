import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { services } from '@/data/services';
import { DEFAULT_OG_IMAGE, SITE_URL } from '@/seo/titles';

const Services = () => {
  const seoTitle = 'Plumbing Services on Cape Cod — What to Know';
  const seoDescription = 'Learn about common plumbing services on Cape Cod. What to expect, typical costs, and when to call a professional.';
  const pageUrl = `${SITE_URL}/services`;

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Cape Cod Plumbing Guide" />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Plumbing Services Guide - Cape Cod',
            description: seoDescription,
            url: pageUrl,
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
        <section className="py-16 bg-[#f7f7f7]">
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
