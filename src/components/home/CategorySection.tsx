import { Link } from 'react-router-dom';
import { categories, articles } from '@/data/articles';

const CategorySection = () => {
  const getArticleCount = (categorySlug: string) => {
    return articles.filter((article) => article.category === categorySlug).length;
  };

  const pillColors = [
    'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground',
    'bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground',
    'bg-navy/10 text-navy hover:bg-navy hover:text-white',
    'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground',
    'bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground',
  ];

  return (
    <section className="py-10 md:py-14 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-5">
            Browse by Topic
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                to={`/blog/category/${category.slug}`}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${pillColors[index % pillColors.length]}`}
              >
                {category.name} ({getArticleCount(category.slug)})
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
