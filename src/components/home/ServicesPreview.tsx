import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';

const ServicesPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Plumbing Services Guide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn about common plumbing services Cape Cod homeowners need.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              className="card-double-border p-4 group text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.04}s` }}
            >
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                {service.name}
              </h3>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-ocean-light transition-colors"
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
