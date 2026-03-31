import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ExternalLink, CheckCircle, DollarSign, AlertTriangle, Info, MapPin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';

const ServiceDetail = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = services.find((s) => s.slug === serviceSlug);

  if (!service) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-6">We couldn't find the service you're looking for.</p>
          <Link to="/services">
            <Button>View All Services</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.name} | Cape Cod Plumbing Guide</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={`https://capecodplumbingguide.com/services/${service.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.name,
            description: service.metaDescription,
            url: `https://capecodplumbingguide.com/services/${service.slug}`,
            provider: {
              '@type': 'Organization',
              name: 'Blue Pacific Cape Cod',
              url: 'https://bluepacificcapecod.com/plumbing-falmouth-ma/',
            },
            areaServed: {
              '@type': 'Place',
              name: 'Cape Cod, Massachusetts',
            },
          })}
        </script>
      </Helmet>
      <Layout>
        {/* Header */}
        <section className="bg-gradient-hero py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                All Services
              </Link>
              <div className="text-5xl mb-4">{service.icon}</div>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {service.name}
              </h1>
              <p className="text-lg text-muted-foreground">{service.shortDescription}</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-10">
                {/* What Is */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <Info className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground">
                      What Is This Service?
                    </h2>
                  </div>
                  {service.content.whatIs.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Why Cape Cod */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground">
                      Why Cape Cod Homeowners Need This
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{service.content.whyCapeCod}</p>
                </div>

                {/* Warning Signs */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-coral-light flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-coral" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground">
                      Common Signs You Need This Service
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {service.content.signs.map((sign, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What to Expect */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-seafoam-light flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-seafoam" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground">
                      What to Expect
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{service.content.whatToExpect}</p>
                  <div className="card-double-border p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <DollarSign className="w-5 h-5 text-primary" />
                      <span className="font-heading font-bold text-foreground">Typical Cost Range</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{service.content.costRange}</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="card-double-border p-8 bg-secondary/30">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    Need {service.name}?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    For professional {service.name.toLowerCase()} throughout Cape Cod, we recommend Blue Pacific Cape Cod — licensed, insured, and locally trusted.
                  </p>
                  <a
                    href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="hero" size="lg">
                      Contact Blue Pacific Cape Cod
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                <div className="bg-gradient-ocean rounded-xl p-6 text-primary-foreground sticky top-24">
                  <h3 className="font-heading text-xl font-bold mb-3">Need Professional Help?</h3>
                  <p className="text-primary-foreground/90 mb-4 text-sm">
                    Blue Pacific Cape Cod provides trusted plumbing services throughout Cape Cod.
                  </p>
                  <a
                    href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                      Visit Blue Pacific
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Button>
                  </a>
                </div>

                {/* Other Services */}
                <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-4">Other Services</h3>
                  <div className="space-y-2">
                    {services
                      .filter((s) => s.slug !== serviceSlug)
                      .slice(0, 6)
                      .map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-1 text-sm"
                        >
                          <span>{s.icon}</span>
                          <span>{s.name}</span>
                        </Link>
                      ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ServiceDetail;
