import { HelpCircle } from 'lucide-react';
import { useState } from 'react';

const facts = [
  {
    q: "What's the average cost of a plumber on Cape Cod?",
    a: "Most plumbing service calls on Cape Cod range from $150–$450 depending on the job. Water heater replacements typically run $1,200–$3,000 installed.",
  },
  {
    q: "Why do Cape Cod homes have so many frozen pipe issues?",
    a: "Cape Cod's combination of older construction, crawl spaces, shallow foundations, and harsh coastal winters makes pipes especially vulnerable to freezing.",
  },
  {
    q: "Do most Cape Cod homes use well water or town water?",
    a: "It varies by town. Many homes in mid and outer Cape towns rely on private wells, which require different plumbing maintenance than municipal water systems.",
  },
  {
    q: "How often should I get my drains cleaned?",
    a: "For Cape Cod homes, professional drain cleaning every 1–2 years helps prevent buildup, especially in older homes with cast iron or galvanized pipes.",
  },
  {
    q: "Is salt air really bad for my plumbing?",
    a: "Yes. Salt air accelerates corrosion on exposed pipes, fittings, water heaters, and outdoor fixtures. Coastal Cape Cod homes need more frequent inspections.",
  },
  {
    q: "When should I winterize my vacation home?",
    a: "Winterize before the first hard freeze, typically by late October on Cape Cod. This includes draining pipes, shutting off the water supply, and protecting the water heater.",
  },
  {
    q: "What are signs I need to replace my water heater?",
    a: "Rusty water, inconsistent temperature, strange noises, leaking around the base, or age over 10–12 years. Salt air can shorten lifespan to 8–10 years on Cape Cod.",
  },
  {
    q: "Do I need a permit for plumbing work on Cape Cod?",
    a: "Most towns on Cape Cod require permits for significant plumbing work. Your licensed plumber should handle the permitting process.",
  },
];

const QuickFacts = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 bg-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <p className="text-accent font-bold text-sm uppercase tracking-widest mb-2">Quick Reference</p>
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-8">
            Cape Cod Plumbing Quick Facts
          </h2>

          <div className="space-y-3">
            {facts.map((fact, i) => (
              <div
                key={i}
                className="bg-card rounded-lg border border-border overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center gap-3 p-5 text-left hover:bg-secondary/30 transition-colors"
                >
                  <HelpCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-bold text-foreground">{fact.q}</span>
                  <span className={`ml-auto text-muted-foreground transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                    ▾
                  </span>
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5 pl-13 animate-fade-in">
                    <p className="text-muted-foreground leading-relaxed pl-8">{fact.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickFacts;
