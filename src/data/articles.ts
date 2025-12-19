export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'seasonal' | 'emergency' | 'maintenance' | 'older-homes' | 'coastal';
  town?: string;
  readTime: number;
  publishedAt: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: '1',
    slug: 'common-plumbing-problems-older-falmouth-homes',
    title: 'Common Plumbing Problems in Older Falmouth Homes',
    excerpt: 'Historic Falmouth homes have unique plumbing challenges. Learn what to watch for and how to protect your vintage property.',
    content: `
# Common Plumbing Problems in Older Falmouth Homes

Falmouth is home to many beautiful historic properties, some dating back to the 18th and 19th centuries. While these homes have incredible charm and character, they often come with plumbing systems that have seen better days.

## The Age Factor

Many older Falmouth homes still have original plumbing infrastructure, including:

- **Galvanized steel pipes** that corrode from the inside out
- **Cast iron drain lines** prone to rust and buildup
- **Outdated fixtures** that waste water and energy
- **Tree root intrusion** in sewer lines from mature landscaping

## Signs of Trouble

If you own an older home in Falmouth, watch for these warning signs:

1. **Discolored water** - Rusty or brown water indicates pipe corrosion
2. **Low water pressure** - Often caused by mineral buildup or failing pipes
3. **Slow drains** - Could signal sewer line issues
4. **Frequent clogs** - May indicate pipe deterioration

## Preventive Measures

To protect your older Falmouth home:

- Schedule annual plumbing inspections
- Consider pipe relining for aging sewer lines
- Upgrade to modern fixtures gradually
- Address small issues before they become emergencies

## When to Call a Professional

If you're dealing with persistent plumbing issues in your older Falmouth home, it's important to work with a plumber who understands historic properties.

For professional plumbing help in Falmouth, [Blue Pacific Cape Cod](https://bluepacificcapecod.com/plumbing-falmouth-ma/) provides expert services throughout the area.
    `,
    category: 'older-homes',
    town: 'falmouth',
    readTime: 5,
    publishedAt: '2024-01-15',
    featured: true,
  },
  {
    id: '2',
    slug: 'why-cape-cod-homes-prone-frozen-pipes',
    title: 'Why Cape Cod Homes Are Prone to Frozen Pipes',
    excerpt: 'The unique Cape Cod climate and home construction styles create perfect conditions for frozen pipes. Here\'s what you need to know.',
    content: `
# Why Cape Cod Homes Are Prone to Frozen Pipes

Cape Cod's position as a peninsula surrounded by the Atlantic Ocean creates unique weather patterns that can wreak havoc on home plumbing systems, especially during winter months.

## The Perfect Storm

Several factors combine to make Cape Cod homes particularly vulnerable:

### 1. Temperature Fluctuations

The maritime climate means Cape Cod experiences:
- Rapid temperature swings
- Nor'easters bringing extreme cold
- Wind chill effects from ocean exposure

### 2. Home Construction Styles

Traditional Cape Cod architecture often includes:
- Crawl spaces with exposed pipes
- Exterior walls with minimal insulation
- Seasonal cottages not designed for winter
- Pipes running through unheated areas

## High-Risk Areas

Pipes most likely to freeze include those in:

- Exterior walls facing the ocean
- Uninsulated basements and crawl spaces
- Garages and outdoor structures
- Kitchen and bathroom cabinets on exterior walls

## Prevention Strategies

Protect your Cape Cod home with these steps:

1. **Insulate vulnerable pipes** with foam sleeves or heat tape
2. **Seal air leaks** around pipes where they enter walls
3. **Keep cabinets open** during cold snaps
4. **Maintain consistent heating** even when away
5. **Know your shut-off valve** location for emergencies

## What to Do If Pipes Freeze

If you suspect frozen pipes:
- Never use open flame to thaw
- Apply gentle heat with a hair dryer
- Open faucets to relieve pressure
- Check for cracks as pipes thaw

If you're dealing with frozen pipes and need professional assistance, trusted local plumbing experts like [Blue Pacific Cape Cod](https://bluepacificcapecod.com/plumbing-falmouth-ma/) can help prevent costly water damage.
    `,
    category: 'seasonal',
    readTime: 6,
    publishedAt: '2024-01-20',
    featured: true,
  },
  {
    id: '3',
    slug: 'plumbing-freezes-mashpee-what-to-do',
    title: 'What to Do When Your Plumbing Freezes in Mashpee',
    excerpt: 'A step-by-step emergency guide for Mashpee homeowners dealing with frozen or burst pipes during Cape Cod winters.',
    content: `
# What to Do When Your Plumbing Freezes in Mashpee

Mashpee's location on the south shore of Cape Cod doesn't exempt it from harsh winter conditions. When temperatures plummet, frozen pipes become a real concern for local homeowners.

## Immediate Steps

If you discover frozen pipes in your Mashpee home, act quickly:

### 1. Locate the Frozen Section

- Check for frost on exposed pipes
- Feel for unusually cold sections
- Look for bulges indicating ice blockage

### 2. Turn Off the Water

Before attempting to thaw:
- Locate your main shut-off valve
- Turn off water to prevent flooding if pipes have cracked

### 3. Open Faucets

- Open affected faucets slightly
- This allows water to flow as ice melts
- Relieves pressure buildup

## Safe Thawing Methods

**DO use:**
- Hair dryers on low heat
- Heating pads wrapped around pipes
- Space heaters (kept away from flammables)
- Warm towels applied to frozen areas

**DON'T use:**
- Blowtorches or open flames
- Propane heaters indoors
- Heat guns at high settings

## Signs of Burst Pipes

Watch for:
- Water stains on walls or ceilings
- Unusually high water meter readings
- Sounds of running water when none should be on
- Decreased water pressure

## Preventing Future Freezes

Mashpee homeowners should:
- Insulate all exposed pipes
- Keep garage doors closed
- Disconnect outdoor hoses before winter
- Consider smart water sensors

If you experience a plumbing emergency in Mashpee, professional help is just a call away. [Blue Pacific Cape Cod](https://bluepacificcapecod.com/plumbing-falmouth-ma/) serves homeowners throughout the region.
    `,
    category: 'emergency',
    town: 'mashpee',
    readTime: 5,
    publishedAt: '2024-02-01',
  },
  {
    id: '4',
    slug: 'salt-air-plumbing-corrosion-cape-cod',
    title: 'Salt Air & Plumbing Corrosion on Cape Cod',
    excerpt: 'Living near the ocean has its perks, but salt air can accelerate plumbing deterioration. Learn how to protect your system.',
    content: `
# Salt Air & Plumbing Corrosion on Cape Cod

One of the joys of Cape Cod living is the proximity to the ocean. However, that salty maritime air that makes summer evenings so refreshing can be tough on your home's plumbing system.

## How Salt Air Affects Plumbing

### Exterior Components

Salt air accelerates corrosion of:
- Outdoor faucets and hose bibs
- Exposed pipe fittings
- Water heater venting
- Sump pump discharge lines

### Interior Effects

Even indoor plumbing isn't immune:
- Faucets and fixtures develop mineral deposits
- Water heaters work harder due to salt-laden air
- Copper pipes can develop pinhole leaks faster

## Towns Most Affected

Coastal communities see the most salt damage:
- **Falmouth** - Extensive shoreline exposure
- **Sandwich** - Canal-adjacent properties
- **Bourne** - Canal and bay exposure
- **Osterville** - South shore vulnerability

## Protection Strategies

### For Exterior Plumbing
- Install stainless steel or brass fixtures
- Apply marine-grade protective coatings
- Rinse outdoor fixtures regularly with fresh water
- Cover outdoor fixtures during winter

### For Interior Systems
- Use water softeners if needed
- Flush water heaters annually
- Inspect under sinks for early corrosion signs
- Consider corrosion-resistant pipe materials for renovations

## When to Replace vs. Repair

Signs it's time for replacement:
- Multiple fixtures showing corrosion
- Recurring leaks despite repairs
- Visible pitting on pipe surfaces
- Water quality changes

For a professional assessment of salt-related plumbing issues, local experts understand Cape Cod's unique challenges. [Blue Pacific Cape Cod](https://bluepacificcapecod.com/plumbing-falmouth-ma/) specializes in serving coastal homes.
    `,
    category: 'coastal',
    readTime: 6,
    publishedAt: '2024-02-10',
    featured: true,
  },
  {
    id: '5',
    slug: 'spring-plumbing-checklist-cape-cod',
    title: 'Spring Plumbing Checklist for Cape Cod Homeowners',
    excerpt: 'After a harsh New England winter, spring is the perfect time to inspect and maintain your plumbing system.',
    content: `
# Spring Plumbing Checklist for Cape Cod Homeowners

As the snow melts and temperatures rise across Cape Cod, it's the ideal time to assess any winter damage and prepare your plumbing for the busy summer season ahead.

## Exterior Inspection

### Check Outdoor Faucets
1. Turn on each hose bib
2. Check for leaks at the handle and spout
3. Look for signs of frost damage
4. Ensure proper drainage

### Inspect Visible Pipes
- Look under decks and porches
- Check crawl space access points
- Note any new stains or wet spots

### Sump Pump Testing
- Pour water into the pit
- Verify pump activates
- Check discharge line is clear
- Test backup power if equipped

## Interior Checks

### Water Heater Maintenance
- Check for rust or leaks
- Test pressure relief valve
- Drain a few gallons to remove sediment
- Note the age of your unit

### Under-Sink Inspection
- Look for moisture or water damage
- Check P-traps for leaks
- Test shut-off valves

### Toilet Function
- Check for running or leaking
- Test flush mechanisms
- Look for base leaks

## Seasonal Transitions

### Opening Seasonal Properties
Many Cape Cod homes are seasonal. When opening:
- Turn water on slowly
- Check all fixtures systematically
- Run each faucet to clear lines
- Test water heater before regular use

## Professional Inspection

Spring is an excellent time for a professional plumbing inspection, especially for older Cape Cod homes. [Blue Pacific Cape Cod](https://bluepacificcapecod.com/plumbing-falmouth-ma/) offers comprehensive assessments for local homeowners.
    `,
    category: 'maintenance',
    readTime: 5,
    publishedAt: '2024-03-01',
  },
  {
    id: '6',
    slug: 'sandwich-historic-home-plumbing-guide',
    title: 'Plumbing Guide for Sandwich Historic Homes',
    excerpt: 'Sandwich is one of Cape Cod\'s oldest towns. Here\'s how to maintain plumbing in its historic properties.',
    content: `
# Plumbing Guide for Sandwich Historic Homes

As the oldest town on Cape Cod, Sandwich is home to numerous historic properties, many dating back to the 1600s and 1700s. These beautiful homes require special consideration when it comes to plumbing maintenance and updates.

## Understanding Historic Plumbing

### Common Characteristics
- Lead or galvanized steel supply lines
- Clay or cast iron drain pipes
- Original well and septic systems
- Hand-dug wells with limited capacity

### Preservation Considerations
When updating plumbing in historic Sandwich homes:
- Work with the Historical Commission when required
- Preserve original features where possible
- Choose materials that complement the home's age
- Document changes for future owners

## Common Issues in Sandwich Historic Homes

### Water Supply Problems
- Well yield reduction over time
- Lead service line concerns
- Outdated pressure tanks
- Mineral buildup in old pipes

### Drainage Concerns
- Tree root intrusion in old clay pipes
- Bellied or sagging sewer lines
- Inadequate venting
- Septic system capacity issues

## Upgrade Options

### Minimally Invasive Solutions
- Pipe relining instead of replacement
- Point repairs rather than full replacement
- Modern fixtures with vintage aesthetics
- Trenchless sewer repair

### When Full Replacement Is Needed
- Lead pipe removal for safety
- Failed septic system replacement
- Complete re-piping for water quality

## Working with Local Experts

Historic home plumbing requires expertise and sensitivity. For Sandwich homeowners needing professional help, [Blue Pacific Cape Cod](https://bluepacificcapecod.com/plumbing-falmouth-ma/) understands the unique needs of historic Cape properties.
    `,
    category: 'older-homes',
    town: 'sandwich',
    readTime: 6,
    publishedAt: '2024-03-15',
  },
];

export const towns = [
  {
    slug: 'falmouth',
    name: 'Falmouth',
    description: 'Coastal community with historic homes and modern developments',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
  },
  {
    slug: 'mashpee',
    name: 'Mashpee',
    description: 'Growing community with diverse housing stock',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
  },
  {
    slug: 'sandwich',
    name: 'Sandwich',
    description: 'Cape Cod\'s oldest town with many historic properties',
    image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800',
  },
  {
    slug: 'bourne',
    name: 'Bourne',
    description: 'Gateway to Cape Cod with canal-adjacent properties',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800',
  },
  {
    slug: 'osterville',
    name: 'Osterville',
    description: 'Upscale village with waterfront estates',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
  },
  {
    slug: 'hyannis',
    name: 'Hyannis',
    description: 'Commercial center with varied residential areas',
    image: 'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=800',
  },
];

export const categories = [
  { slug: 'seasonal', name: 'Seasonal Tips', icon: '❄️' },
  { slug: 'emergency', name: 'Emergency Guides', icon: '🚨' },
  { slug: 'maintenance', name: 'Maintenance', icon: '🔧' },
  { slug: 'older-homes', name: 'Older Homes', icon: '🏠' },
  { slug: 'coastal', name: 'Coastal Living', icon: '🌊' },
];
