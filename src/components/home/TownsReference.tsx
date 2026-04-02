import { towns } from '@/data/articles';

const TownsReference = () => {
  return (
    <section
      className="py-16 md:py-20 bg-background relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(https://images.unsplash.com/photo-1629259398284-864e5810536c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-3">
            Serving All of Cape Cod
          </h2>
          <p className="text-lg text-muted-foreground">
            Plumbing resources for every Cape Cod community.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {towns.map((town) => (
            <div
              key={town.slug}
              className="px-4 py-2 rounded-full bg-sand border border-border text-sm font-medium text-foreground"
              title={town.description}
            >
              {town.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TownsReference;
