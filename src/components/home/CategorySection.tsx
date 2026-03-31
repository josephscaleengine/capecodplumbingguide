import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories, articles } from '@/data/articles';

const CategorySection = () => {
  const getArticleCount = (categorySlug: string) => {
    return articles.filter((article) => article.category === categorySlug).length;
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse by Topic
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the information you need, organized by common plumbing concerns.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              to={`/blog/category/${category.slug}`}
              className="card-double-border p-5 group animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-3xl mb-3">{category.icon}</div>
              <h3 className="font-heading text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {getArticleCount(category.slug)} {getArticleCount(category.slug) === 1 ? 'article' : 'articles'}
              </p>
              <div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Explore</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
