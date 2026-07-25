// Fundo ambiente único e contínuo atrás de todas as seções — em vez de
// blobs isolados por seção, um só cenário que acompanha a rolagem inteira.
// É isso que elimina os "cortes" visuais entre uma seção e outra.
// No mobile fica só o brilho estático (sem blur animado), por performance.
export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      {/* grade de pontos esvaindo a partir do topo */}
      <div
        className="absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,black,transparent)]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* auroras lentas — apenas em telas médias para cima */}
      <div className="animate-aurora absolute -top-32 left-[8%] hidden size-[30rem] rounded-full bg-aro-accent/[0.1] blur-[100px] md:block" />
      <div className="animate-aurora-slow absolute top-1/3 right-[4%] hidden size-[28rem] rounded-full bg-aro-accent/[0.09] blur-[110px] md:block" />

      {/* brilho estático leve para o mobile */}
      <div className="absolute inset-x-0 top-0 h-[55vh] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(0,217,163,0.12),transparent_70%)] md:hidden" />
    </div>
  );
}
