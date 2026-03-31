import { Link } from 'react-router-dom';
import { towns } from '@/data/articles';

const TownsReference = () => {
  return (
    <section className="py-16 md:py-20 bg-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-3">
            Serving All of Cape Cod
          </h2>
          <p className="text-lg text-muted-foreground">
            Plumbing resources for every Cape Cod community.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-5xl">
          {towns.map((town) => (
            <Link
              key={town.slug}
              to={`/towns/${town.slug}`}
              className="group px-4 py-3 bg-card rounded-lg border border-border hover:border-accent/40 hover:shadow-soft transition-all duration-200 text-center"
            >
              <span className="font-bold text-sm text-foreground group-hover:text-accent transition-colors">
                {town.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TownsReference;
