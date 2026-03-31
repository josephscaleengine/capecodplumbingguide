import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/hero-cape-cod-new.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Cape Cod harbor with fishing boats in Cape Cod, Massachusetts"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,50%,14%,0.88)] via-[hsl(220,50%,14%,0.72)] to-[hsl(220,50%,14%,0.45)]" />

      {/* Content — LEFT aligned */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <p className="text-[hsl(var(--warm-orange))] font-semibold text-sm uppercase tracking-widest mb-4 animate-fade-up">
            Cape Cod Plumbing Guide
          </p>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Your Local Cape Cod{' '}
            <span className="text-[hsl(var(--ocean-light))]">Plumbing Resource</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Trusted tips, local insights, and expert guidance to help Cape Cod homeowners maintain their plumbing — from Falmouth to Provincetown.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/blog">
              <Button variant="hero" size="xl">
                Browse Guides
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a
              href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="cta" size="xl">
                Need a Plumber?
                <ExternalLink className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
