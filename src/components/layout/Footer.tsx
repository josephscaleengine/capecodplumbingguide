import { Link } from 'react-router-dom';
import { Droplets, ExternalLink, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const towns = [
    { name: 'Falmouth', slug: 'falmouth' },
    { name: 'Mashpee', slug: 'mashpee' },
    { name: 'Sandwich', slug: 'sandwich' },
    { name: 'Bourne', slug: 'bourne' },
    { name: 'Osterville', slug: 'osterville' },
    { name: 'Hyannis', slug: 'hyannis' },
  ];

  const resources = [
    { name: 'Seasonal Tips', path: '/blog/category/seasonal' },
    { name: 'Emergency Guides', path: '/blog/category/emergency' },
    { name: 'Maintenance Tips', path: '/blog/category/maintenance' },
    { name: 'Older Homes', path: '/blog/category/older-homes' },
  ];

  return (
    <footer className="bg-ocean-deep text-primary-foreground">
      {/* Professional Services Banner */}
      <div className="bg-seafoam py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <p className="font-medium">
                Need a licensed plumber? Professional services provided by Blue Pacific Cape Cod.
              </p>
            </div>
            <a
              href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary-foreground text-seafoam px-5 py-2 rounded-md font-semibold hover:bg-primary-foreground/90 transition-colors"
            >
              Visit Blue Pacific Cape Cod
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <Droplets className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg">Cape Cod</span>
                <span className="block text-xs text-primary-foreground/70 -mt-1">Plumbing Guide</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted local resource for plumbing information, tips, and guidance for Cape Cod homeowners.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-primary-foreground/70">
              <MapPin className="w-4 h-4" />
              <span>Serving Cape Cod, Massachusetts</span>
            </div>
          </div>

          {/* Towns */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Towns We Cover</h4>
            <ul className="space-y-2">
              {towns.map((town) => (
                <li key={town.slug}>
                  <Link
                    to={`/towns/${town.slug}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {town.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.path}>
                  <Link
                    to={resource.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Professional Services</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">
              For professional plumbing services throughout Cape Cod, we recommend Blue Pacific Cape Cod — trusted local experts.
            </p>
            <a
              href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-seafoam-light hover:text-primary-foreground transition-colors text-sm font-medium"
            >
              Blue Pacific Cape Cod
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
            <p>© {currentYear} Cape Cod Plumbing Guide. All rights reserved.</p>
            <p>
              Professional plumbing services by{' '}
              <a
                href="https://bluepacificcapecod.com/plumbing-falmouth-ma/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-seafoam-light hover:text-primary-foreground transition-colors"
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
