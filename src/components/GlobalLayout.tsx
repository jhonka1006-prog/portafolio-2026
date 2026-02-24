import { Outlet, useLocation } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import HeroSection from "@/components/HeroSection";

const sectionMap: Record<string, { title: string; sectionNumber: string }> = {
  "/": { title: "INICIO", sectionNumber: "00" },
  "/sobre-mi": { title: "SOBRE MÍ", sectionNumber: "01" },
  "/prensa": { title: "MI PRENSA", sectionNumber: "02" },
  "/trayectoria": { title: "TRAYECTORIA", sectionNumber: "03" },
  "/iniciodesesion": { title: "INICIAR SESIÓN", sectionNumber: "04" },
};

const normalizePath = (pathname: string) => (pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname);

const GlobalLayout = () => {
  const location = useLocation();
  const current = sectionMap[normalizePath(location.pathname)] ?? { title: "SECCIÓN", sectionNumber: "00" };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 w-full z-50 h-[68px] border-b border-g700 bg-black/90 backdrop-blur-md">
        <div className="h-full max-w-[var(--container-max)] mx-auto px-[var(--px)] flex items-center justify-between">
          <NavLink to="/" className="font-display text-[clamp(1rem,2vw,1.35rem)] tracking-[0.18em] uppercase">
            JHONKARLY ALVAREZ
          </NavLink>

          <nav className="flex items-center gap-8" aria-label="Navegación principal">
            <NavLink to="/sobre-mi" className="text-[0.72rem] tracking-[0.2em] uppercase text-g300" activeClassName="text-foreground border-b border-foreground pb-1">
              Sobre mí
            </NavLink>
            <NavLink to="/prensa" className="text-[0.72rem] tracking-[0.2em] uppercase text-g300" activeClassName="text-foreground border-b border-foreground pb-1">
              Mi Prensa
            </NavLink>
            <NavLink to="/trayectoria" className="text-[0.72rem] tracking-[0.2em] uppercase text-g300" activeClassName="text-foreground border-b border-foreground pb-1">
              Trayectoria
            </NavLink>
            <NavLink to="/iniciodesesion" className="text-[0.72rem] tracking-[0.2em] uppercase text-g300" activeClassName="text-foreground border-b border-foreground pb-1">
              Iniciar Sesión
            </NavLink>
          </nav>
        </div>
      </header>

      <main>
        <div className="pt-[68px]">
          <HeroSection title={current.title} sectionNumber={current.sectionNumber} />
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default GlobalLayout;
