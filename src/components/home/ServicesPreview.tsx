import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';

const ServicesPreview = () => {
  return (
    <section className="py-16 md:py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-10">
          <p className="text-[hsl(var(--warm-orange))] font-bold text-sm uppercase tracking-widest mb-2">Service Guides</p>
          <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-3">
            Common Plumbing Services on Cape Cod
          </h2>
          <p className="text-white/70 text-lg">
            Learn about each service — what's involved, when you need it, and what to expect.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 max-w-4xl">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              className="flex items-center gap-2 py-3 text-white/80 hover:text-[hsl(var(--warm-orange))] transition-colors group border-b border-white/10"
            >
              <span className="font-medium">{service.name}</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ml-auto flex-shrink-0" />
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[hsl(var(--warm-orange))] font-bold hover:text-white transition-colors"
          >
            View All Service Guides
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
