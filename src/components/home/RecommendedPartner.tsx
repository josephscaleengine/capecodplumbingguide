import { ExternalLink, Shield, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RecommendedPartner = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Recommended Plumbing Partner
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-double-border p-8 md:p-10 bg-gradient-to-br from-cape-sky/50 to-background">
            {/* Logo Placeholder */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-ocean flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-heading font-bold text-primary-foreground">BP</span>
            </div>

            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
              Blue Pacific Cape Cod
            </h3>

            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8 leading-relaxed">
              For professional plumbing services throughout Cape Cod, we proudly recommend Blue Pacific Cape Cod. Licensed, insured, and locally trusted — they're the team we refer our readers to.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-xl mx-auto">
              <div className="flex items-center justify-center gap-2 p-3 bg-secondary rounded-lg">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Licensed & Insured</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-3 bg-secondary rounded-lg">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Local Cape Cod Experts</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-3 bg-secondary rounded-lg">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Emergency Services</span>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="xl">
                  Visit Blue Pacific Cape Cod
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedPartner;
