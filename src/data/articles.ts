// Town images - using local Cape Cod imagery
import falmouthImg from '@/assets/towns/falmouth.jpg';
import mashpeeImg from '@/assets/towns/mashpee.jpg';
import sandwichImg from '@/assets/towns/sandwich.jpg';
import bourneImg from '@/assets/towns/bourne.jpg';
import ostervilleImg from '@/assets/towns/osterville.jpg';
import hyannisImg from '@/assets/towns/hyannis.jpg';

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
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
    metaDescription: 'Discover the most common plumbing issues in older Falmouth, MA homes. Expert tips on galvanized pipes, cast iron drains, and maintaining vintage Cape Cod properties.',
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
    excerpt: "The unique Cape Cod climate and home construction styles create perfect conditions for frozen pipes. Here's what you need to know.",
    metaDescription: 'Learn why Cape Cod homes are especially vulnerable to frozen pipes. Expert guide on maritime climate effects, construction factors, and prevention strategies for MA homeowners.',
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
    metaDescription: 'Emergency guide for Mashpee, MA homeowners with frozen pipes. Step-by-step thawing instructions, burst pipe prevention, and when to call a professional plumber.',
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
    metaDescription: 'How salt air affects plumbing on Cape Cod. Protect your coastal MA home from corrosion with expert tips on materials, maintenance, and replacement strategies.',
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
    metaDescription: 'Complete spring plumbing checklist for Cape Cod homeowners. Post-winter inspection guide for outdoor faucets, sump pumps, water heaters, and seasonal property opening.',
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
    excerpt: "Sandwich is one of Cape Cod's oldest towns. Here's how to maintain plumbing in its historic properties.",
    metaDescription: 'Expert plumbing guide for Sandwich, MA historic homes. Tips for maintaining antique pipes, wells, septic systems, and updating plumbing in Cape Cod heritage properties.',
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
  {
    id: '7',
    slug: 'winterizing-cape-cod-vacation-home-plumbing',
    title: 'How to Winterize Your Cape Cod Vacation Home Plumbing',
    excerpt: 'Protect your seasonal Cape Cod property from costly freeze damage with this complete winterization guide.',
    metaDescription: 'Complete guide to winterizing vacation home plumbing on Cape Cod. Step-by-step instructions for draining pipes, protecting fixtures, and preventing freeze damage in MA.',
    content: `
# How to Winterize Your Cape Cod Vacation Home Plumbing

Many Cape Cod homes serve as summer retreats, left unoccupied during the harsh New England winter months. Proper winterization is essential to prevent catastrophic pipe bursts and water damage.

## Why Winterization Matters

Cape Cod winters bring:
- Temperatures well below freezing
- Extended cold snaps lasting weeks
- Nor'easters with extreme wind chill
- Power outages that disable heating

An unheated home with water in the pipes is a disaster waiting to happen.

## Step-by-Step Winterization

### 1. Shut Off the Water Supply
- Locate the main shut-off valve
- Close it completely
- For homes on wells, also turn off the pump breaker

### 2. Drain the System
- Open all faucets (hot and cold)
- Flush all toilets
- Drain the water heater
- Open drain valves at low points in the system

### 3. Blow Out Remaining Water
- Use an air compressor set to 30-50 PSI
- Attach to a hose bib
- Blow through each fixture until only air comes out

### 4. Add Antifreeze to Traps
- Use RV antifreeze (NOT automotive)
- Pour into all drain traps
- Include toilets, sinks, showers, and floor drains
- Don't forget the washing machine

### 5. Protect Outdoor Fixtures
- Disconnect and drain all hoses
- Shut off and drain exterior faucets
- Cover outdoor fixtures with insulated covers

## Common Mistakes to Avoid

- Leaving water heater on with empty tank
- Forgetting the dishwasher drain line
- Skipping the ice maker supply line
- Not draining outdoor showers

## Spring Reopening Tips

When returning to your Cape Cod property:
- Turn water on gradually
- Check for leaks at every fixture
- Run water heater carefully
- Test sump pumps if applicable

If you need professional help winterizing or have questions about your system, [Blue Pacific Cape Cod](https://bluepacificcapecod.com/plumbing-falmouth-ma/) assists seasonal homeowners throughout the Cape.
    `,
    category: 'seasonal',
    readTime: 7,
    publishedAt: '2024-04-01',
    featured: true,
  },
  {
    id: '8',
    slug: 'well-water-issues-barnstable-county',
    title: 'Well Water Issues Common in Barnstable County',
    excerpt: 'Understanding and addressing the unique well water challenges faced by Cape Cod homeowners on private wells.',
    metaDescription: 'Common well water problems in Barnstable County, MA. Expert guide on iron, manganese, low yield, and contamination issues affecting Cape Cod private well owners.',
    content: `
# Well Water Issues Common in Barnstable County

Many Cape Cod homes, particularly in less developed areas, rely on private wells for their water supply. Understanding local well water challenges helps homeowners maintain safe, quality water.

## Cape Cod's Unique Groundwater

### The Sole Source Aquifer
Cape Cod sits atop a sole source aquifer, meaning:
- All freshwater comes from underground
- The water table is relatively shallow
- Contamination risks require vigilance
- Salt water intrusion is a coastal concern

## Common Well Water Problems

### Iron and Manganese
Symptoms include:
- Orange or brown staining on fixtures
- Metallic taste in water
- Stained laundry
- Clogged pipes and appliances

### Low pH (Acidic Water)
Can cause:
- Blue-green stains (copper corrosion)
- Pinhole leaks in pipes
- Shortened fixture life
- Metallic taste

### Hard Water
Results in:
- Scale buildup in water heaters
- Reduced soap effectiveness
- Spotted dishes and glassware
- Dry skin and hair

### Low Yield
Causes include:
- Drought conditions
- Aging wells
- Increased neighborhood development
- Seasonal water table changes

## Solutions for Cape Cod Well Owners

### Water Treatment Options
- Iron filters for mineral removal
- Acid neutralizers for pH correction
- Water softeners for hardness
- Sediment filters for particulates

### Well Maintenance
- Annual water testing
- Regular pump inspections
- Wellhead protection
- Proper septic system maintenance

### When to Consider a New Well
- Persistent yield problems
- Contamination that can't be treated
- Major property renovations
- Failed well components

## Professional Testing and Services

Annual testing is recommended for private wells on Cape Cod. For plumbing issues related to well water, [Blue Pacific Cape Cod](https://bluepacificcapecod.com/plumbing-falmouth-ma/) understands local water conditions and treatment needs.
    `,
    category: 'maintenance',
    readTime: 6,
    publishedAt: '2024-04-15',
  },
  {
    id: '9',
    slug: 'bourne-canal-area-plumbing-considerations',
    title: 'Plumbing Considerations for Bourne Canal-Area Homes',
    excerpt: 'Living near the Cape Cod Canal presents unique plumbing challenges. Learn what Bourne homeowners need to know.',
    metaDescription: 'Plumbing guide for Bourne, MA homes near the Cape Cod Canal. Address unique challenges from humidity, tidal influences, and coastal exposure in the canal gateway area.',
    content: `
# Plumbing Considerations for Bourne Canal-Area Homes

Bourne serves as the gateway to Cape Cod, with many homes located near the famous Cape Cod Canal. This proximity to the waterway creates specific plumbing considerations for local homeowners.

## Canal-Area Challenges

### High Water Table
Homes near the canal often experience:
- Sump pump necessity
- Basement moisture issues
- Septic system complications
- Foundation waterproofing needs

### Salt Air and Humidity
The canal environment means:
- Accelerated fixture corrosion
- Outdoor plumbing deterioration
- Increased mold potential
- Marine-grade materials recommended

### Tidal Influence
Some areas experience:
- Groundwater level fluctuations
- Septic system performance variations
- Drainage challenges during high tides

## Sump Pump Essentials

For canal-area Bourne homes, sump pumps are often critical:

### Primary Pump Requirements
- Adequate capacity for water volume
- Reliable float switch
- Quality check valve
- Proper discharge routing

### Backup Systems
Consider:
- Battery backup pumps
- Water-powered backup options
- Alarm systems for pump failure
- Generator compatibility

## Septic System Considerations

### High Water Table Impacts
- Raised or mound systems may be needed
- More frequent pumping required
- Careful landscaping to prevent saturation
- Regular inspections essential

### Maintenance Tips
- Pump every 2-3 years
- Conserve water during wet periods
- Avoid garbage disposals
- Use septic-safe products

## Outdoor Plumbing Protection

### Materials Matter
- Choose stainless steel or brass
- Avoid galvanized in exposed locations
- Use marine-grade components when possible
- Apply protective coatings

### Seasonal Preparation
- Winterize thoroughly
- Inspect after major storms
- Check for salt damage regularly

For professional plumbing services in Bourne and the canal area, [Blue Pacific Cape Cod](https://bluepacificcapecod.com/plumbing-falmouth-ma/) has the local expertise you need.
    `,
    category: 'coastal',
    town: 'bourne',
    readTime: 6,
    publishedAt: '2024-05-01',
  },
  {
    id: '10',
    slug: 'emergency-water-shutoff-cape-cod-guide',
    title: 'Emergency Water Shut-Off Guide for Cape Cod Homeowners',
    excerpt: 'Know how to quickly shut off your water in an emergency. This guide covers every type of Cape Cod home.',
    metaDescription: 'Emergency water shut-off guide for Cape Cod homes. Locate and operate main valves, well pumps, and individual fixture shutoffs to prevent flood damage in MA.',
    content: `
# Emergency Water Shut-Off Guide for Cape Cod Homeowners

When a pipe bursts or a major leak occurs, every second counts. Knowing how to quickly shut off your water can prevent thousands of dollars in damage.

## Why Speed Matters

A typical broken pipe can release:
- 4-8 gallons per minute for supply lines
- Hundreds of gallons within an hour
- Catastrophic damage to floors, walls, and belongings
- Mold growth within 24-48 hours

## Locating Your Main Shut-Off

### Municipal Water (Town Supply)

The main valve is typically located:
- In the basement near the front foundation wall
- In a utility closet or mechanical room
- Near the water meter
- At the point where the service line enters

### Private Well Systems

For well-supplied homes:
- Main valve near the pressure tank
- Electrical shutoff at the breaker panel
- Pressure switch on the tank
- Some have inline valves after the tank

## Types of Shut-Off Valves

### Gate Valves
- Round wheel handle
- Turn clockwise to close
- May require multiple turns
- Can be stiff if rarely used

### Ball Valves
- Lever handle
- Quarter-turn operation
- More reliable long-term
- Easy to see if open or closed

### Curb Stops
- Located at the property line
- Requires special key to operate
- Backup if interior valve fails
- Call water department if needed

## Individual Fixture Shut-Offs

Know these locations:
- Under sinks (hot and cold)
- Behind toilets
- Behind washing machine
- Near dishwasher
- At water heater

## Emergency Action Steps

1. **Locate the active leak** if safe to do so
2. **Shut off the nearest valve** to the leak
3. **If unclear, shut the main valve**
4. **Open faucets** to drain remaining water
5. **Turn off water heater** if draining significantly
6. **Call for professional help**

## Prevention Tips

- Label all shut-off valves clearly
- Test valves annually to ensure operation
- Replace corroded or stuck valves
- Show family members valve locations

For plumbing emergencies on Cape Cod, [Blue Pacific Cape Cod](https://bluepacificcapecod.com/plumbing-falmouth-ma/) provides responsive professional service.
    `,
    category: 'emergency',
    readTime: 5,
    publishedAt: '2024-05-15',
  },
  {
    id: '11',
    slug: 'osterville-luxury-home-plumbing-features',
    title: 'Plumbing Features in Osterville Luxury Homes',
    excerpt: 'High-end Osterville properties often include sophisticated plumbing systems. Learn what makes them special.',
    metaDescription: 'Guide to luxury plumbing features in Osterville, MA waterfront estates. Understand radiant heating, whole-house filtration, and premium fixtures in upscale Cape Cod homes.',
    content: `
# Plumbing Features in Osterville Luxury Homes

Osterville is known for its elegant waterfront estates and upscale properties. These luxury homes often include sophisticated plumbing systems that require specialized knowledge for maintenance and repair.

## Common Luxury Plumbing Features

### Radiant Floor Heating
Many Osterville homes feature:
- Hydronic heating systems
- Zone-controlled comfort
- Integration with high-efficiency boilers
- Specialized maintenance requirements

### Multiple Water Heaters
Large homes often have:
- Tankless water heater networks
- Dedicated units for different zones
- Recirculating hot water systems
- Smart temperature controls

### Whole-House Water Treatment
Premium systems include:
- Multi-stage filtration
- Water softening
- UV purification
- Automatic backwash systems

## Outdoor Living Systems

### Pool and Spa Plumbing
- Complex circulation systems
- Chemical treatment integration
- Heating equipment
- Winter preparation needs

### Outdoor Kitchens
- Hot and cold water supply
- Proper drainage systems
- Freeze protection
- Gas line connections

### Irrigation Systems
- Zone-controlled watering
- Rain sensors
- Backflow prevention
- Winterization requirements

## Waterfront Considerations

### Salt Exposure
Osterville's coastal location means:
- Premium corrosion-resistant materials
- Regular fixture inspection
- Marine-grade outdoor components
- Protected mechanical rooms

### Dock and Boat Systems
Some properties include:
- Water supply to docks
- Boat wash stations
- Fish cleaning stations
- Outdoor showers

## Maintaining Luxury Systems

### Regular Professional Service
- Quarterly inspections recommended
- Annual system flushing
- Water quality testing
- Equipment calibration

### Documentation
- Keep records of all components
- Maintain warranty information
- Document service history
- Update as upgrades occur

For luxury home plumbing services in Osterville, [Blue Pacific Cape Cod](https://bluepacificcapecod.com/plumbing-falmouth-ma/) has experience with high-end systems and sophisticated features.
    `,
    category: 'maintenance',
    town: 'osterville',
    readTime: 6,
    publishedAt: '2024-06-01',
  },
  {
    id: '12',
    slug: 'hyannis-commercial-residential-plumbing-differences',
    title: 'Plumbing Differences: Hyannis Commercial vs Residential',
    excerpt: 'Hyannis features both busy commercial districts and residential neighborhoods. Understand the plumbing distinctions.',
    metaDescription: 'Understanding plumbing differences between commercial and residential properties in Hyannis, MA. Code requirements, system scales, and maintenance needs explained.',
    content: `
# Plumbing Differences: Hyannis Commercial vs Residential

As the commercial and transportation hub of Cape Cod, Hyannis features a diverse mix of properties from downtown businesses to residential neighborhoods. Understanding the plumbing differences helps property owners maintain their systems effectively.

## Commercial Plumbing Characteristics

### Scale and Complexity
Commercial buildings typically have:
- Larger pipe diameters
- Multiple water meters
- Complex drainage systems
- Commercial-grade fixtures

### Code Requirements
Business properties must meet:
- More stringent health codes
- ADA accessibility requirements
- Fire sprinkler integration
- Backflow prevention mandates

### Specialized Systems
Many businesses require:
- Grease traps (restaurants)
- Floor drains (retail)
- Break room facilities
- Customer restrooms

## Residential Plumbing Characteristics

### Typical Systems
Hyannis homes generally have:
- Standard residential fixtures
- Single water service
- Traditional drain/waste/vent
- Water heater (tank or tankless)

### Common Configurations
- Municipal water supply
- Town sewer connection
- Standard bathroom counts
- Kitchen and laundry facilities

## Mixed-Use Considerations

Hyannis has many properties that combine:
- Ground-floor retail with upper apartments
- Home-based businesses
- Live-work spaces
- Converted properties

These require understanding of both commercial and residential requirements.

## Maintenance Differences

### Commercial Frequency
- More frequent inspections
- Grease trap pumping schedules
- Drain cleaning requirements
- Water heater service

### Residential Frequency
- Annual inspections recommended
- As-needed maintenance
- Preventive care focus
- Seasonal preparations

## Choosing the Right Plumber

For both commercial and residential plumbing needs in Hyannis, [Blue Pacific Cape Cod](https://bluepacificcapecod.com/plumbing-falmouth-ma/) serves property owners throughout the area with professional expertise.
    `,
    category: 'maintenance',
    town: 'hyannis',
    readTime: 5,
    publishedAt: '2024-06-15',
  },
];

export interface Town {
  slug: string;
  name: string;
  description: string;
  metaDescription: string;
  image: string;
}

export const towns: Town[] = [
  {
    slug: 'falmouth',
    name: 'Falmouth',
    description: 'Coastal community with historic homes and modern developments',
    metaDescription: 'Plumbing resources for Falmouth, MA homeowners. Expert tips for historic homes, coastal properties, and seasonal residences on Cape Cod.',
    image: falmouthImg,
  },
  {
    slug: 'mashpee',
    name: 'Mashpee',
    description: 'Growing community with diverse housing stock',
    metaDescription: 'Plumbing guidance for Mashpee, MA residents. Tips for frozen pipes, well water, and home maintenance on the south shore of Cape Cod.',
    image: mashpeeImg,
  },
  {
    slug: 'sandwich',
    name: 'Sandwich',
    description: "Cape Cod's oldest town with many historic properties",
    metaDescription: 'Plumbing tips for Sandwich, MA historic homes. Preserve your antique property while maintaining modern plumbing standards on Cape Cod.',
    image: sandwichImg,
  },
  {
    slug: 'bourne',
    name: 'Bourne',
    description: 'Gateway to Cape Cod with canal-adjacent properties',
    metaDescription: 'Plumbing resources for Bourne, MA homeowners. Address unique challenges near the Cape Cod Canal including high water tables and sump pumps.',
    image: bourneImg,
  },
  {
    slug: 'osterville',
    name: 'Osterville',
    description: 'Upscale village with waterfront estates',
    metaDescription: 'Luxury plumbing guide for Osterville, MA properties. Maintain sophisticated systems in upscale waterfront homes on Cape Cod.',
    image: ostervilleImg,
  },
  {
    slug: 'hyannis',
    name: 'Hyannis',
    description: 'Commercial center with varied residential areas',
    metaDescription: 'Plumbing resources for Hyannis, MA commercial and residential properties. Expert guidance for Cape Cod main hub.',
    image: hyannisImg,
  },
];

export const categories = [
  { slug: 'seasonal', name: 'Seasonal Tips', icon: '❄️', description: 'Prepare your plumbing for every Cape Cod season' },
  { slug: 'emergency', name: 'Emergency Guides', icon: '🚨', description: 'What to do when plumbing problems strike' },
  { slug: 'maintenance', name: 'Maintenance', icon: '🔧', description: 'Keep your system running smoothly year-round' },
  { slug: 'older-homes', name: 'Older Homes', icon: '🏠', description: 'Special considerations for historic Cape properties' },
  { slug: 'coastal', name: 'Coastal Living', icon: '🌊', description: 'Address salt air and waterfront challenges' },
];
