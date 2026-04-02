import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ExternalLink, CheckCircle, DollarSign, AlertTriangle, Info, MapPin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import { articles } from '@/data/articles';
import { DEFAULT_OG_IMAGE, SITE_URL, buildServiceSeoDescription, buildServiceSeoTitle } from '@/seo/titles';

// Service header images
const serviceImages: Record<string, { url: string; alt: string }> = {
  'water-heater-repair': { url: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0', alt: 'Water heater tank installation on Cape Cod' },
  'drain-cleaning': { url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0', alt: 'Kitchen sink drain cleaning on Cape Cod' },
  'sewer-line-repair': { url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0', alt: 'Underground sewer pipe repair on Cape Cod' },
  'pipe-leak-repair': { url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0', alt: 'Copper pipes and plumbing leak repair on Cape Cod' },
  'frozen-pipe-repair': { url: 'https://images.unsplash.com/photo-1607220523685-75f2044e3195?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0', alt: 'Frozen pipe repair and prevention on Cape Cod' },
  'well-pump-services': { url: 'https://images.unsplash.com/photo-1558873072-e1243a49a2d5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0', alt: 'Well pump system servicing on Cape Cod' },
  'water-filtration': { url: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0', alt: 'Clean water filtration system for Cape Cod homes' },
  'sump-pump-installation': { url: 'https://images.unsplash.com/photo-1525438160292-a4a860951216?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0', alt: 'Basement flooding prevention sump pump on Cape Cod' },
  'garbage-disposal': { url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0', alt: 'Kitchen sink garbage disposal installation on Cape Cod' },
  'septic-system-services': { url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0', alt: 'Cape Cod home septic system yard maintenance' },
  'bathroom-kitchen-remodel': { url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0', alt: 'Modern bathroom renovation plumbing on Cape Cod' },
  'toilet-repair-installation': { url: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0', alt: 'Toilet repair and installation services on Cape Cod' },
  'faucet-fixture-replacement': { url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0', alt: 'Faucet and fixture replacement on Cape Cod' },
  'water-line-repair': { url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0', alt: 'Water line repair and replacement on Cape Cod' },
  'outdoor-plumbing-hose-bibs': { url: 'https://images.unsplash.com/photo-1462275646964-a0e3c11f18a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0', alt: 'Outdoor plumbing and hose bibs on Cape Cod property' },
  'backflow-prevention': { url: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0', alt: 'Backflow prevention device for Cape Cod water protection' },
};

// Services Blue Pacific definitively offers
const bluePacificServices = [
  'water-heater-repair',
  'drain-cleaning',
  'pipe-leak-repair',
  'bathroom-kitchen-remodel',
  'sewer-line-repair',
  'frozen-pipe-repair',
  'sump-pump-installation',
  'garbage-disposal',
  'toilet-repair-installation',
  'faucet-fixture-replacement',
  'water-line-repair',
  'outdoor-plumbing-hose-bibs',
  'backflow-prevention',
];

// Map services to related article slugs
const serviceArticleLinks: Record<string, string[]> = {
  'water-heater-repair': ['how-salt-air-affects-water-heater', 'water-heater-replacement-cape-cod', 'average-plumbing-costs-cape-cod'],
  'drain-cleaning': ['average-plumbing-costs-cape-cod', 'common-plumbing-problems-older-cape-cod-homes'],
  'pipe-leak-repair': ['salt-air-plumbing-corrosion-cape-cod', 'common-plumbing-problems-older-cape-cod-homes', 'emergency-plumber-cape-cod'],
  'frozen-pipe-repair': ['why-cape-cod-homes-prone-frozen-pipes', 'winterizing-cape-cod-vacation-home-plumbing', 'prevent-plumbing-problems-vacation-homes-cape-cod'],
  'sewer-line-repair': ['common-plumbing-problems-older-cape-cod-homes', 'signs-you-need-emergency-plumbing-help'],
  'well-pump-services': ['cape-cod-well-water-plumbing-issues', 'well-water-vs-town-water-cape-cod'],
  'water-filtration': ['cape-cod-well-water-plumbing-issues', 'well-water-vs-town-water-cape-cod'],
  'sump-pump-installation': ['sump-pump-guide-cape-cod', 'spring-plumbing-checklist-cape-cod', 'signs-you-need-emergency-plumbing-help'],
  'garbage-disposal': ['garbage-disposal-problems-cape-cod', 'average-plumbing-costs-cape-cod'],
  'septic-system-services': ['what-homeowners-should-know-about-septic-systems', 'garbage-disposal-problems-cape-cod'],
  'bathroom-kitchen-remodel': ['bathroom-remodel-plumbing-cape-cod', 'common-plumbing-problems-older-cape-cod-homes', 'plumbing-permits-cape-cod'],
  'toilet-repair-installation': ['average-plumbing-costs-cape-cod', 'bathroom-remodel-plumbing-cape-cod'],
  'faucet-fixture-replacement': ['salt-air-plumbing-corrosion-cape-cod', 'average-plumbing-costs-cape-cod'],
  'water-line-repair': ['emergency-plumber-cape-cod', 'common-plumbing-problems-older-cape-cod-homes'],
  'outdoor-plumbing-hose-bibs': ['winterizing-cape-cod-vacation-home-plumbing', 'spring-plumbing-checklist-cape-cod', 'prevent-plumbing-problems-vacation-homes-cape-cod'],
  'backflow-prevention': ['well-water-vs-town-water-cape-cod', 'plumbing-permits-cape-cod'],
};

const ServiceDetail = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = services.find((s) => s.slug === serviceSlug);
  const pageUrl = `${SITE_URL}/services/${serviceSlug ?? ''}`;

  if (!service) {
    const seoTitle = 'Service Not Found — Cape Cod Plumbing Guide';
    const seoDescription = 'The requested Cape Cod plumbing service guide could not be found. Browse services, resources, and homeowner tips.';

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
        </Helmet>
        <Layout>
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="font-heading text-3xl font-bold mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-6">We couldn't find the service you're looking for.</p>
            <Link to="/services"><Button>View All Services</Button></Link>
          </div>
        </Layout>
      </>
    );
  }

  const isBluePacific = bluePacificServices.includes(service.slug);
  const seoTitle = buildServiceSeoTitle(service.name);
  const seoDescription = buildServiceSeoDescription(service.name);

  // Get related articles for this service
  const relatedArticleSlugs = serviceArticleLinks[service.slug] || [];
  const relatedArticles = relatedArticleSlugs
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter(Boolean);

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
            '@type': 'Service',
            name: service.name,
            description: seoDescription,
            url: pageUrl,
            areaServed: { '@type': 'Place', name: 'Cape Cod, Massachusetts' },
            provider: {
              '@type': 'LocalBusiness',
              name: 'Blue Pacific Cape Cod',
              telephone: '(508) 274-9939',
              email: 'BluePacificCapeCod@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Falmouth',
                addressRegion: 'MA',
              },
            },
          })}
        </script>
      </Helmet>
      <Layout>
        {/* Header */}
        <section className="bg-navy py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <Link to="/services" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-6">
                <ArrowLeft className="w-4 h-4" />
                All Services
              </Link>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
                {service.name}
              </h1>
              <p className="text-lg text-white/70">{service.shortDescription}</p>
            </div>
          </div>
        </section>

        {/* Service Header Image */}
        {serviceImages[service.slug] && (
          <section className="bg-[#f7f7f7]">
            <div className="container mx-auto px-4 pt-8">
              <img
                src={serviceImages[service.slug].url}
                alt={serviceImages[service.slug].alt}
                className="w-full object-cover rounded-lg max-h-[300px]"
                loading="lazy"
              />
            </div>
          </section>
        )}
        <section className="py-12 md:py-16 bg-[#f7f7f7]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-10">
                {/* What Is */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <Info className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground">What Is This Service?</h2>
                  </div>
                  {service.content.whatIs.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-4">{paragraph}</p>
                  ))}
                </div>

                {/* Why Cape Cod */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center border border-border">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground">Why Cape Cod Homeowners Need This</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{service.content.whyCapeCod}</p>
                </div>

                {/* Warning Signs */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[hsl(var(--coral-light))] flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground">Common Signs You Need This Service</h2>
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
                    <div className="w-10 h-10 rounded-lg bg-[hsl(var(--seafoam-light))] flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-[hsl(var(--seafoam))]" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground">What to Expect</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{service.content.whatToExpect}</p>
                  <div className="card-double-border p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <DollarSign className="w-5 h-5 text-accent" />
                      <span className="font-heading font-bold text-foreground">Typical Cost Range</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{service.content.costRange}</p>
                  </div>
                </div>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                  <div className="p-6 bg-secondary/30 rounded-xl border border-border">
                    <h3 className="font-heading text-lg font-bold text-foreground mb-3">Related Articles</h3>
                    <div className="space-y-2">
                      {relatedArticles.map((a: any) => (
                        <Link
                          key={a.slug}
                          to={`/resources/${a.slug}`}
                          className="block text-primary hover:underline font-medium"
                        >
                          {a.title} →
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA — varies based on Blue Pacific match */}
                <div className="card-double-border p-8 bg-background">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    Need {service.name}?
                  </h3>
                  {isBluePacific ? (
                    <>
                      <p className="text-muted-foreground mb-4">
                        For professional {service.name.toLowerCase()} throughout Cape Cod, we recommend Blue Pacific Cape Cod — licensed, insured, and locally trusted.
                      </p>
                      <a href="https://bluepacificcapecod.com/plumbing-falmouth-ma/" target="_blank" rel="noopener noreferrer">
                        <Button variant="cta" size="lg">
                          Contact Blue Pacific Cape Cod
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </Button>
                      </a>
                    </>
                  ) : (
                    <p className="text-muted-foreground">
                      Contact a licensed local plumber for this service. Make sure they are experienced with Cape Cod's unique conditions and hold proper Massachusetts licensing.
                    </p>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                {isBluePacific && (
                  <div className="bg-navy rounded-xl p-6 text-white sticky top-24">
                    <h3 className="font-heading text-xl font-bold mb-3">Need Professional Help?</h3>
                    <p className="text-white/70 mb-4 text-sm">
                      Blue Pacific Cape Cod provides trusted plumbing services throughout Cape Cod.
                    </p>
                    <a href="https://bluepacificcapecod.com/plumbing-falmouth-ma/" target="_blank" rel="noopener noreferrer">
                      <Button variant="cta" className="w-full">
                        Visit Blue Pacific
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </Button>
                    </a>
                  </div>
                )}

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
