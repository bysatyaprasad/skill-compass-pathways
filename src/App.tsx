
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Index from "./pages/Index";
import Skills from "./pages/Skills";
import FoundationalSkills from "./pages/FoundationalSkills";
import FinancialFreedom from "./pages/FinancialFreedom";
import AIPrompts from "./pages/AIPrompts";
import CareerPaths from "./pages/CareerPaths";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen w-full">
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/foundational-skills" element={<FoundationalSkills />} />
            <Route path="/financial-freedom" element={<FinancialFreedom />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/ai-prompts" element={<AIPrompts />} />
            <Route path="/career-paths" element={<CareerPaths />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
