const Prensa = () => {
  return (
    <section className="border-t border-border py-[var(--section-py)] px-[var(--px)]">
      <div className="max-w-[var(--container-max)] mx-auto">
        <span className="font-body text-[0.68rem] font-semibold tracking-[0.38em] uppercase text-g300 block mb-6">
          Cobertura
        </span>
        <h2 className="font-display text-[clamp(2.8rem,6vw,6rem)] leading-[0.9] mb-8 text-foreground">
          Mi prensa
        </h2>
        <p className="font-body font-light text-[clamp(0.88rem,1.1vw,0.98rem)] leading-[1.85] text-g300 max-w-[640px]">
          Esta sección reúne entrevistas, reportajes y menciones sobre el proceso deportivo de Jhonkarly ALVAREZ.
        </p>
      </div>
    </section>
  );
};

export default Prensa;
