
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedDemand: string;
  onDemandChange: (demand: string) => void;
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  selectedDifficulty: string;
  onDifficultyChange: (difficulty: string) => void;
}

export const CategoryFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  selectedDemand,
  onDemandChange,
  selectedStatus,
  onStatusChange,
  selectedDifficulty,
  onDifficultyChange
}: CategoryFilterProps) => {
  const getActiveFiltersCount = () => {
    let count = 0;
    if (selectedDemand !== "All") count++;
    if (selectedStatus !== "All") count++;
    if (selectedDifficulty !== "All") count++;
    return count;
  };

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
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

      {/* Advanced Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-white font-medium">Filters:</span>
          {getActiveFiltersCount() > 0 && (
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
              {getActiveFiltersCount()} active
            </Badge>
          )}
        </div>
        
        <div className="flex flex-wrap gap-3">
          {/* Demand Level Filter */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-400 uppercase tracking-wider">Demand Level</label>
            <Select value={selectedDemand} onValueChange={onDemandChange}>
              <SelectTrigger className="w-32 bg-white/10 border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="All" className="text-white">All Levels</SelectItem>
                <SelectItem value="high" className="text-white">High Demand</SelectItem>
                <SelectItem value="medium" className="text-white">Medium Demand</SelectItem>
                <SelectItem value="low" className="text-white">Low Demand</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Status Filter */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-400 uppercase tracking-wider">Status</label>
            <Select value={selectedStatus} onValueChange={onStatusChange}>
              <SelectTrigger className="w-32 bg-white/10 border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="All" className="text-white">All Status</SelectItem>
                <SelectItem value="emerging" className="text-white">Emerging</SelectItem>
                <SelectItem value="stable" className="text-white">Stable</SelectItem>
                <SelectItem value="declining" className="text-white">Declining</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Difficulty Filter */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-400 uppercase tracking-wider">Difficulty</label>
            <Select value={selectedDifficulty} onValueChange={onDifficultyChange}>
              <SelectTrigger className="w-32 bg-white/10 border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="All" className="text-white">All Levels</SelectItem>
                <SelectItem value="beginner" className="text-white">Beginner</SelectItem>
                <SelectItem value="intermediate" className="text-white">Intermediate</SelectItem>
                <SelectItem value="advanced" className="text-white">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Clear Filters */}
        {getActiveFiltersCount() > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              onDemandChange("All");
              onStatusChange("All");
              onDifficultyChange("All");
            }}
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            Clear Filters
          </Button>
        )}
      </div>
    </div>
  );
};
