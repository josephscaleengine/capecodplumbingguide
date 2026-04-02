import { towns } from '@/data/articles';

const TownsReference = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
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
