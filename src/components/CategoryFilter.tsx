
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={`
            px-4 py-2 rounded-full transition-all duration-300
            ${selectedCategory === category 
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-purple-500/25' 
              : 'bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105'
            }
          `}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
