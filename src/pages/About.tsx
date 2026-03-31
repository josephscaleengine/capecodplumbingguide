import { Helmet } from 'react-helmet-async';
import { Heart, MapPin, ExternalLink, Shield, BookOpen } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Cape Cod Plumbing Guide</title>
        <meta
          name="description"
          content="Learn about Cape Cod Plumbing Guide - your trusted local resource for plumbing information, tips, and guidance for Cape Cod homeowners."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="bg-navy py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl md:text-5xl font-black text-white mb-6">
                About Cape Cod Plumbing Guide
              </h1>
              <p className="text-lg text-white/70">
                Your trusted local resource for plumbing information, tips, and guidance—helping Cape Cod homeowners make informed decisions about their home's plumbing systems.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-heading text-3xl font-black text-foreground mb-4">Our Mission</h2>
                  <p className="text-muted-foreground mb-4">
                    Cape Cod presents unique challenges for homeowners—from historic properties with aging plumbing to coastal homes affected by salt air and harsh winters. We created this resource to help local homeowners navigate these challenges.
                  </p>
                  <p className="text-muted-foreground">
                    Our goal is simple: provide free, reliable, and locally-relevant plumbing information that empowers Cape Cod homeowners to maintain their homes and know when professional help is needed.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-sand rounded-xl p-6 text-center">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-foreground">Local Focus</h3>
                    <p className="text-sm text-muted-foreground mt-1">Cape Cod-specific content</p>
                  </div>
                  <div className="bg-sand rounded-xl p-6 text-center">
                    <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-foreground">Educational</h3>
                    <p className="text-sm text-muted-foreground mt-1">Not salesy or pushy</p>
                  </div>
                  <div className="bg-sand rounded-xl p-6 text-center">
                    <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-foreground">Trusted</h3>
                    <p className="text-sm text-muted-foreground mt-1">Backed by local pros</p>
                  </div>
                  <div className="bg-sand rounded-xl p-6 text-center">
                    <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-foreground">Free</h3>
                    <p className="text-sm text-muted-foreground mt-1">Always accessible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Services */}
        <section className="py-16 bg-sand">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="card-double-border p-8 md:p-12">
                <h2 className="font-heading text-2xl md:text-3xl font-black text-foreground mb-4">
                  Professional Plumbing Services
                </h2>
                <p className="text-muted-foreground mb-4">
                  While we provide educational resources to help you understand and maintain your plumbing, we know that sometimes you need a professional. This resource is proudly supported by Blue Pacific Cape Cod—trusted local plumbing experts serving homeowners throughout Cape Cod.
                </p>
                <p className="text-muted-foreground mb-6">
                  When you need licensed, experienced plumbers who understand the unique challenges of Cape Cod homes, Blue Pacific Cape Cod is here to help.
                </p>
                <a href="https://bluepacificcapecod.com/plumbing-falmouth-ma/" target="_blank" rel="noopener noreferrer">
                  <Button variant="cta" size="lg">
                    Visit Blue Pacific Cape Cod
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">Important Note</h3>
              <p className="text-sm text-muted-foreground">
                The information provided on this website is for educational purposes only and should not be considered a substitute for professional plumbing advice. Always consult with a licensed plumber for specific plumbing issues. For professional services, we recommend contacting{' '}
                <a href="https://bluepacificcapecod.com/plumbing-falmouth-ma/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Blue Pacific Cape Cod
                </a>.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
