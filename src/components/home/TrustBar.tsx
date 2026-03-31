import { MapPin, BookOpen, Shield } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: MapPin, title: 'Local Focus', desc: 'Cape Cod expertise' },
    { icon: BookOpen, title: 'Free Resources', desc: 'Educational guides' },
    { icon: Shield, title: 'Trusted Advice', desc: 'From local pros' },
  ];

  return (
    <section className="py-10 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
          {items.map((item) => (
            <div key={item.title} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
