import { Link } from 'react-router-dom';
import { categories, articles } from '@/data/articles';

const categoryColors: Record<string, string> = {
  seasonal: 'bg-[hsl(200,60%,50%,0.12)] text-[hsl(200,60%,40%)] hover:bg-[hsl(200,60%,50%)] hover:text-white',
  emergency: 'bg-[hsl(0,65%,55%,0.12)] text-[hsl(0,65%,45%)] hover:bg-[hsl(0,65%,55%)] hover:text-white',
  coastal: 'bg-[hsl(174,55%,36%,0.12)] text-[hsl(var(--ocean-teal))] hover:bg-[hsl(var(--ocean-teal))] hover:text-white',
  'older-homes': 'bg-[hsl(30,30%,50%,0.12)] text-[hsl(30,30%,40%)] hover:bg-[hsl(30,30%,50%)] hover:text-white',
  'well-water': 'bg-[hsl(190,55%,50%,0.12)] text-[hsl(190,55%,40%)] hover:bg-[hsl(190,55%,50%)] hover:text-white',
  'cost-guide': 'bg-[hsl(var(--warm-orange)/0.12)] text-[hsl(var(--warm-orange))] hover:bg-[hsl(var(--warm-orange))] hover:text-white',
  'homeowner-guide': 'bg-[hsl(var(--navy)/0.12)] text-[hsl(var(--navy))] hover:bg-[hsl(var(--navy))] hover:text-white',
  septic: 'bg-[hsl(140,40%,45%,0.12)] text-[hsl(140,40%,35%)] hover:bg-[hsl(140,40%,45%)] hover:text-white',
  rental: 'bg-[hsl(var(--sand)/0.5)] text-[hsl(var(--sand-dark))] hover:bg-[hsl(var(--sand-dark))] hover:text-white',
  maintenance: 'bg-[hsl(220,10%,50%,0.12)] text-[hsl(220,10%,40%)] hover:bg-[hsl(220,10%,50%)] hover:text-white',
};

const CategorySection = () => {
  const getArticleCount = (categorySlug: string) => {
    return articles.filter((article) => article.category === categorySlug).length;
  };

  return (
    <section className="py-6 bg-sand border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/blog/category/${category.slug}`}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${categoryColors[category.slug] || categoryColors.maintenance}`}
            >
              {category.name} ({getArticleCount(category.slug)})
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
