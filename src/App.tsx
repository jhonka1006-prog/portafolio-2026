import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalLayout from "./components/GlobalLayout";
import Index from "./pages/Index";
import SobreMi from "./pages/SobreMi";
import Prensa from "./pages/Prensa";
import Trayectoria from "./pages/Trayectoria";
import InicioDeSesion from "./pages/InicioDeSesion";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<GlobalLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/sobre-mi/" element={<SobreMi />} />
            <Route path="/prensa" element={<Prensa />} />
            <Route path="/prensa/" element={<Prensa />} />
            <Route path="/trayectoria" element={<Trayectoria />} />
            <Route path="/trayectoria/" element={<Trayectoria />} />
            <Route path="/iniciodesesion" element={<InicioDeSesion />} />
            <Route path="/iniciodesesion/" element={<InicioDeSesion />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
