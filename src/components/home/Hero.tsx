import { ArrowRight, Droplets, Shield, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      {/* Decorative Wave Pattern */}
      <div className="absolute inset-0 wave-pattern opacity-50" />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-up">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">
              Your Local Cape Cod Plumbing Resource
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Expert Plumbing Guidance for{' '}
            <span className="text-gradient-ocean">Cape Cod</span>{' '}
            Homeowners
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Trusted tips, local insights, and professional resources to help you maintain your home's plumbing—from Falmouth to Provincetown.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/blog">
              <Button variant="hero" size="xl">
                Browse Resources
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a
              href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="xl">
                Need a Plumber?
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center gap-3 p-4 bg-card rounded-lg shadow-soft">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Local Focus</p>
                <p className="text-sm text-muted-foreground">Cape Cod expertise</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-card rounded-lg shadow-soft">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Droplets className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Free Resources</p>
                <p className="text-sm text-muted-foreground">Educational guides</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-card rounded-lg shadow-soft">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Trusted Advice</p>
                <p className="text-sm text-muted-foreground">From local pros</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
