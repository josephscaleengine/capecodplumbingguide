import { ExternalLink, Shield, Clock, Award, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RecommendedPartner = () => {
  return (
    <section className="py-16 md:py-20 bg-navy-deep">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card-double-border p-8 md:p-12 bg-[hsl(220,45%,18%)] border-white/10 hover:border-[hsl(var(--warm-orange))]/30">
            {/* Logo */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-ocean flex items-center justify-center mb-6">
              <span className="text-2xl font-black text-white">BP</span>
            </div>

            <p className="text-[hsl(var(--warm-orange))] font-bold text-sm uppercase tracking-widest mb-3">
              Our Recommended Partner
            </p>

            <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-4">
              Blue Pacific Cape Cod
            </h2>

            <p className="text-white/70 max-w-2xl mb-6 leading-relaxed text-lg">
              Licensed, insured, and serving Cape Cod since 2001 — they're the team we trust and refer our readers to.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 mb-8 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[hsl(var(--warm-orange))]" />
                <span>Falmouth, MA</span>
              </div>
              <a href="tel:5082749939" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[hsl(var(--warm-orange))]" />
                <span>(508) 274-9939</span>
              </a>
              <a href="mailto:BluePacificCapeCod@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[hsl(var(--warm-orange))]" />
                <span>BluePacificCapeCod@gmail.com</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-xl">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                <Shield className="w-5 h-5 text-[hsl(var(--ocean-light))]" />
                <span className="text-sm font-semibold text-white">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                <Award className="w-5 h-5 text-[hsl(var(--ocean-light))]" />
                <span className="text-sm font-semibold text-white">20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                <Clock className="w-5 h-5 text-[hsl(var(--ocean-light))]" />
                <span className="text-sm font-semibold text-white">Emergency Services</span>
              </div>
            </div>

            <a
              href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="cta" size="xl">
                Visit Blue Pacific Cape Cod
                <ExternalLink className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedPartner;
