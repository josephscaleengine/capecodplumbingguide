import { DollarSign, Thermometer, Droplets, Calendar, Wind, Flame } from 'lucide-react';

interface Fact {
  category: string;
  categoryColor: string;
  cardBg: string;
  icon: React.ElementType;
  q: string;
  a: string;
  visual?: React.ReactNode;
}

const PriceBar = () => (
  <div className="mt-3 flex items-center gap-2 text-xs font-semibold">
    <span className="text-foreground">$150</span>
    <div className="flex-1 h-2 rounded-full bg-border overflow-hidden">
      <div className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--ocean-teal))] to-[hsl(var(--warm-orange))]" style={{ width: '70%' }} />
    </div>
    <span className="text-foreground">$450</span>
  </div>
);

const LifespanBar = () => (
  <div className="mt-3 flex items-center gap-2 text-xs font-semibold">
    <span className="text-foreground">8 yrs</span>
    <div className="flex-1 h-2 rounded-full bg-border overflow-hidden">
      <div className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--warm-orange))] to-[hsl(var(--ocean-teal))]" style={{ width: '80%' }} />
    </div>
    <span className="text-foreground">12 yrs</span>
  </div>
);

const FrequencyBadge = () => (
  <div className="mt-3 inline-flex items-center gap-2 bg-[hsl(140,40%,45%,0.1)] px-3 py-1.5 rounded-full">
    <Calendar className="w-3.5 h-3.5 text-[hsl(140,40%,35%)]" />
    <span className="text-xs font-bold text-[hsl(140,40%,35%)]">Every 1–2 years</span>
  </div>
);

const facts: Fact[] = [
  {
    category: 'Cost',
    categoryColor: 'bg-[hsl(var(--warm-orange)/0.15)] text-[hsl(var(--warm-orange))]',
    cardBg: 'bg-[hsl(var(--warm-orange)/0.04)]',
    icon: DollarSign,
    q: "What's the average cost of a plumber on Cape Cod?",
    a: "Most plumbing service calls on Cape Cod range from $150–$450 depending on the job. Water heater replacements typically run $1,200–$3,000 installed.",
    visual: <PriceBar />,
  },
  {
    category: 'Seasonal',
    categoryColor: 'bg-[hsl(200,60%,50%,0.15)] text-[hsl(200,60%,40%)]',
    cardBg: 'bg-[hsl(200,60%,50%,0.04)]',
    icon: Thermometer,
    q: "Why do Cape Cod homes have so many frozen pipe issues?",
    a: "Cape Cod's combination of older construction, crawl spaces, shallow foundations, and harsh coastal winters makes pipes especially vulnerable to freezing.",
  },
  {
    category: 'Water Quality',
    categoryColor: 'bg-[hsl(190,55%,45%,0.15)] text-[hsl(190,55%,35%)]',
    cardBg: 'bg-[hsl(190,55%,45%,0.04)]',
    icon: Droplets,
    q: "Do most Cape Cod homes use well water or town water?",
    a: "It varies by town. Many homes in mid and outer Cape towns rely on private wells, which require different plumbing maintenance than municipal water systems.",
  },
  {
    category: 'Maintenance',
    categoryColor: 'bg-[hsl(140,40%,45%,0.15)] text-[hsl(140,40%,35%)]',
    cardBg: 'bg-[hsl(140,40%,45%,0.04)]',
    icon: Calendar,
    q: "How often should I get my drains cleaned?",
    a: "For Cape Cod homes, professional drain cleaning every 1–2 years helps prevent buildup, especially in older homes with cast iron or galvanized pipes.",
    visual: <FrequencyBadge />,
  },
  {
    category: 'Coastal',
    categoryColor: 'bg-[hsl(var(--sand)/0.6)] text-[hsl(30,30%,35%)]',
    cardBg: 'bg-[hsl(var(--sand)/0.25)]',
    icon: Wind,
    q: "Is salt air really bad for my plumbing?",
    a: "Yes. Salt air accelerates corrosion on exposed pipes, fittings, water heaters, and outdoor fixtures. Coastal Cape Cod homes need more frequent inspections.",
  },
  {
    category: 'Maintenance',
    categoryColor: 'bg-[hsl(140,40%,45%,0.15)] text-[hsl(140,40%,35%)]',
    cardBg: 'bg-[hsl(140,40%,45%,0.04)]',
    icon: Flame,
    q: "What are signs I need to replace my water heater?",
    a: "Rusty water, inconsistent temperature, strange noises, leaking around the base, or age over 10–12 years. Salt air can shorten lifespan to 8–10 years on Cape Cod.",
    visual: <LifespanBar />,
  },
];

const QuickFacts = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-10">
          <p className="text-accent font-bold text-sm uppercase tracking-widest mb-2">Quick Reference</p>
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-3">
            Cape Cod Plumbing Quick Facts
          </h2>
          <p className="text-muted-foreground text-lg">Essential info at a glance for Cape Cod homeowners.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {facts.map((fact, i) => {
            const Icon = fact.icon;
            return (
              <div
                key={i}
                className={`rounded-xl border border-border p-5 transition-all duration-300 hover:shadow-soft hover:-translate-y-1 ${fact.cardBg}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${fact.categoryColor}`}>
                    {fact.category}
                  </span>
                  <Icon className="w-5 h-5 text-muted-foreground/50" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2 leading-snug">{fact.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{fact.a}</p>
                {fact.visual}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickFacts;
