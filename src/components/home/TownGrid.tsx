import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { towns } from '@/data/articles';

const TownGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Plumbing Resources by Town
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every Cape Cod town has unique plumbing challenges. Find specific guidance for your community.
          </p>
        </div>

        {/* Town Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {towns.map((town, index) => (
            <Link
              key={town.slug}
              to={`/towns/${town.slug}`}
              className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <div className="aspect-[4/3] relative">
                <img
                  src={town.image}
                  alt={`${town.name}, Cape Cod`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-2 group-hover:text-seafoam-light transition-colors">
                  {town.name}
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-3">
                  {town.description}
                </p>
                <div className="flex items-center gap-2 text-seafoam-light font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View Resources</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            to="/towns"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-ocean-light transition-colors"
          >
            View All Cape Cod Towns
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TownGrid;
