import { ExternalLink, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTABanner = () => {
  return (
    <section className="py-12 md:py-16 bg-[hsl(var(--warm-orange))] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-5 left-10 w-48 h-48 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-5 right-10 w-64 h-64 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold text-white">
                Need a Licensed Plumber?
              </h2>
              <p className="text-white/90 text-sm md:text-base">
                Professional services provided by Blue Pacific Cape Cod.
              </p>
            </div>
          </div>

          <a
            href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-white text-[hsl(var(--warm-orange))] hover:bg-white/90 shadow-lg font-bold"
            >
              Visit Blue Pacific Cape Cod
              <ExternalLink className="w-4 h-4 ml-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
