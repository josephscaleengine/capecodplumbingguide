import { ExternalLink, Phone, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTABanner = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-ocean relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary-foreground blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-6">
            <Shield className="w-8 h-8 text-primary-foreground" />
          </div>

          {/* Headline */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need Professional Plumbing Help?
          </h2>

          {/* Description */}
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            While we provide educational resources, sometimes you need a licensed professional. 
            Blue Pacific Cape Cod offers trusted plumbing services throughout the Cape.
          </p>

          {/* Trust Points */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-seafoam-light" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-seafoam-light" />
              <span>Local Cape Cod Experts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-seafoam-light" />
              <span>Emergency Services</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Contact Blue Pacific Cape Cod
              <ExternalLink className="w-4 h-4 ml-1" />
            </Button>
          </a>

          {/* Subtle Disclaimer */}
          <p className="mt-6 text-sm text-primary-foreground/60">
            This educational resource is proudly supported by Blue Pacific Cape Cod.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
