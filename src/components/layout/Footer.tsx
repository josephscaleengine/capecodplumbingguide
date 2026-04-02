import { Link } from 'react-router-dom';
import { ExternalLink, Phone, MapPin, Mail } from 'lucide-react';
import logo from '@/assets/logo.png';
import { towns, categories } from '@/data/articles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(174,45%,18%)] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-heading font-black text-lg">Cape Cod</span>
                <span className="block text-xs text-white/60 -mt-1">Plumbing Guide</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Your trusted local resource for plumbing information, tips, and guidance for Cape Cod homeowners.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-white/60">
              <MapPin className="w-4 h-4" />
              <span>Serving Cape Cod, Massachusetts</span>
            </div>
          </div>

          {/* Towns */}
          <div>
            <h4 className="font-heading font-bold text-base mb-3">Towns We Cover</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
              {towns.map((town) => (
                <span
                  key={town.slug}
                  className="text-white/70 text-sm py-0.5"
                >
                  {town.name}
                </span>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-bold text-base mb-3">Resources</h4>
            <ul className="space-y-1">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/resources/category/${cat.slug}`}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Services */}
          <div>
            <h4 className="font-heading font-bold text-base mb-3">Professional Services</h4>
            <p className="text-white/70 text-sm mb-3">
              For professional plumbing services throughout Cape Cod, we recommend Blue Pacific Cape Cod.
            </p>
            <div className="space-y-1.5 text-sm">
              <a
                href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[hsl(var(--warm-orange))] hover:text-white transition-colors font-semibold"
              >
                Blue Pacific Cape Cod
                <ExternalLink className="w-4 h-4" />
              </a>
              <a href="tel:5082749939" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                (508) 274-9939
              </a>
              <a href="mailto:BluePacificCapeCod@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                BluePacificCapeCod@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
            <p>&copy; {currentYear} Cape Cod Plumbing Guide. All rights reserved.</p>
            <p>
              Professional plumbing services by{' '}
              <a
                href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--warm-orange))] hover:text-white transition-colors"
              >
                Blue Pacific Cape Cod
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
