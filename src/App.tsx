import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Towns from "./pages/Towns";
import TownDetail from "./pages/TownDetail";
import Blog from "./pages/Blog";
import BlogCategory from "./pages/BlogCategory";
import ArticleDetail from "./pages/ArticleDetail";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/towns" element={<Towns />} />
            <Route path="/towns/:townSlug" element={<TownDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/category/:categorySlug" element={<BlogCategory />} />
            <Route path="/blog/:slug" element={<ArticleDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
