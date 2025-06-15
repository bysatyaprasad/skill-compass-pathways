
import { useState, useMemo } from "react";
import { SkillCard } from "./SkillCard";
import { CategoryFilter } from "./CategoryFilter";
import { allSkills, skillCategories, getSkillsByCategory, type Skill } from "@/data/skillsData";
import { Input } from "@/components/ui/input";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SkillsGridProps {
  skillsPerPage?: number;
}

export const SkillsGrid = ({ skillsPerPage = 12 }: SkillsGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All Skills");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(skillsPerPage);
  const [selectedDemand, setSelectedDemand] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const filteredSkills = useMemo(() => {
    let skills = getSkillsByCategory(selectedCategory);
    
    // Search filter
    if (searchTerm) {
      skills = skills.filter(skill =>
        skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Demand level filter
    if (selectedDemand !== "All") {
      skills = skills.filter(skill => skill.demandLevel === selectedDemand);
    }

    // Status filter
    if (selectedStatus !== "All") {
      skills = skills.filter(skill => skill.status === selectedStatus);
    }

    // Difficulty filter
    if (selectedDifficulty !== "All") {
      skills = skills.filter(skill => skill.difficulty === selectedDifficulty);
    }
    
    return skills;
  }, [selectedCategory, searchTerm, selectedDemand, selectedStatus, selectedDifficulty]);

  const totalPages = Math.ceil(filteredSkills.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentSkills = filteredSkills.slice(startIndex, startIndex + itemsPerPage);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  return (
    <div className="space-y-8">
      {/* Search and Filter Controls */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400"
            />
          </div>
          
          {/* Items per page selector */}
          <div className="flex items-center gap-2 text-white">
            <span className="text-sm">Show:</span>
            <select
              value={itemsPerPage}
              onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
              className="bg-white/10 border border-white/20 text-white rounded-lg px-3 py-1 text-sm"
            >
              <option value={8} className="bg-gray-800">8 per page</option>
              <option value={12} className="bg-gray-800">12 per page</option>
              <option value={24} className="bg-gray-800">24 per page</option>
              <option value={48} className="bg-gray-800">48 per page</option>
            </select>
          </div>
        </div>
        
        <CategoryFilter
          categories={skillCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          selectedDemand={selectedDemand}
          onDemandChange={(demand) => {
            setSelectedDemand(demand);
            handleFilterChange();
          }}
          selectedStatus={selectedStatus}
          onStatusChange={(status) => {
            setSelectedStatus(status);
            handleFilterChange();
          }}
          selectedDifficulty={selectedDifficulty}
          onDifficultyChange={(difficulty) => {
            setSelectedDifficulty(difficulty);
            handleFilterChange();
          }}
        />
      </div>

      {/* Results Summary */}
      <div className="text-center">
        <p className="text-gray-300">
          Showing {currentSkills.length} of {filteredSkills.length} skills
          {selectedCategory !== "All Skills" && ` in ${selectedCategory}`}
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentSkills.map((skill, index) => (
          <SkillCard 
            key={skill.id} 
            skill={skill} 
            index={startIndex + index}
          />
        ))}
      </div>

      {/* Enhanced Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
          <div className="text-sm text-gray-300">
            Page {currentPage} of {totalPages} 
            ({filteredSkills.length} total skills)
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 disabled:opacity-50"
            >
              First
            </Button>
            
            <Button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <Button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    size="sm"
                    className={`${
                      currentPage === pageNum
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                    }`}
                  >
                    {pageNum}
                  </Button>
                );
              })}
            </div>
            
            <Button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 disabled:opacity-50"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            
            <Button
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 disabled:opacity-50"
            >
              Last
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
