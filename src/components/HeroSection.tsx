import heroImage from "@/assets/sobre-mi-hero.jpg";

interface HeroSectionProps {
  title: string;
  sectionNumber: string;
  backgroundImage?: string;
}

const HeroSection = ({ title, sectionNumber, backgroundImage = heroImage }: HeroSectionProps) => {
  return (
    <section className="relative w-full h-[70svh] min-h-[400px] flex items-end overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <img src={backgroundImage} alt="Jhonkarly ALVAREZ, atleta paralímpico colombiano" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[var(--container-max)] mx-auto px-[var(--px)] pb-16">
        <span className="font-body text-[0.68rem] font-semibold tracking-[0.38em] uppercase text-g300 block mb-6">
          {sectionNumber} — Sección
        </span>
        <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-foreground">{title}</h1>
      </div>
    </section>
  );
};

export default HeroSection;
