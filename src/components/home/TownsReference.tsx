import { Link } from 'react-router-dom';
import { towns } from '@/data/articles';

// Approximate positions on a simplified Cape Cod map (percentage-based)
const townPositions: Record<string, { x: number; y: number; size: 'lg' | 'md' | 'sm' }> = {
  bourne: { x: 8, y: 50, size: 'md' },
  sandwich: { x: 18, y: 32, size: 'md' },
  falmouth: { x: 14, y: 75, size: 'lg' },
  mashpee: { x: 24, y: 68, size: 'md' },
  barnstable: { x: 32, y: 40, size: 'lg' },
  hyannis: { x: 36, y: 58, size: 'lg' },
  osterville: { x: 30, y: 72, size: 'md' },
  yarmouth: { x: 44, y: 42, size: 'md' },
  dennis: { x: 52, y: 38, size: 'md' },
  brewster: { x: 56, y: 28, size: 'sm' },
  harwich: { x: 56, y: 52, size: 'sm' },
  chatham: { x: 64, y: 58, size: 'md' },
  orleans: { x: 66, y: 36, size: 'md' },
  eastham: { x: 72, y: 26, size: 'sm' },
  wellfleet: { x: 76, y: 16, size: 'sm' },
  truro: { x: 82, y: 10, size: 'sm' },
  provincetown: { x: 88, y: 18, size: 'md' },
};

const sizeClasses = {
  lg: 'text-sm font-black',
  md: 'text-xs font-bold',
  sm: 'text-[11px] font-semibold',
};

const TownsReference = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-3">
            Serving All of Cape Cod
          </h2>
          <p className="text-lg text-muted-foreground">
            Plumbing resources for every Cape Cod community.
          </p>
        </div>

        {/* Cape Cod Map Visualization */}
        <div className="relative w-full max-w-5xl" style={{ aspectRatio: '2.8/1' }}>
          {/* Simplified Cape Cod silhouette via SVG */}
          <svg viewBox="0 0 1000 360" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M30,200 Q60,160 120,150 Q180,130 240,120 Q300,110 360,115 Q420,120 480,130 Q540,135 600,125 Q640,118 680,100 Q720,75 760,55 Q800,35 840,45 Q870,55 890,80 Q910,110 880,130 Q860,145 840,140 Q810,132 790,145 Q770,160 760,180 Q740,165 710,175 Q690,190 670,210 Q650,225 620,230 Q580,238 550,220 Q520,210 490,220 Q460,230 430,240 Q400,248 370,260 Q340,268 310,275 Q280,280 250,290 Q220,298 190,300 Q160,300 130,290 Q100,278 70,265 Q40,250 30,220 Z"
              fill="hsl(var(--sand))"
              stroke="hsl(var(--border))"
              strokeWidth="2"
            />
          </svg>

          {/* Town labels positioned on the map */}
          {towns.map((town) => {
            const pos = townPositions[town.slug];
            if (!pos) return null;
            return (
              <Link
                key={town.slug}
                to={`/towns/${town.slug}`}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 text-foreground hover:text-accent transition-all duration-200 hover:scale-110 cursor-pointer whitespace-nowrap ${sizeClasses[pos.size]}`}
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                title={town.description}
              >
                <span className="relative">
                  <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent/60" />
                  <span className="pl-1.5">{town.name}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TownsReference;
