import { component$ } from "@builder.io/qwik";

export const Hero = component$(() => {
  return (
    <section class="relative min-h-screen flex items-center overflow-hidden section-wave-bottom">
      {/* Background Image with Parallax */}
      <div
        class="absolute inset-0 bg-cover bg-center bg-fixed"
        style="background-image: url('/hero-bg.webp');"
        aria-hidden="true"
      />

      {/* Gradient Overlay */}
      <div class="absolute inset-0 hero-gradient-bg bg-gradient-to-br from-[#0c4a6e]/75 via-[#0e7490]/65 to-[#164e63]/75" />

      {/* Decorative organic shapes */}
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-[#06b6d4]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 float-element" />
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0891b2]/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 float-element-delayed" />
      <div class="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-white/5 rounded-full blur-2xl float-element-delayed" />

      {/* Floating particles */}
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
        <span class="particle" style="left: 10%; top: 30%;" />
        <span class="particle" style="left: 25%; top: 60%;" />
        <span class="particle" style="left: 55%; top: 20%;" />
        <span class="particle" style="left: 75%; top: 50%;" />
        <span class="particle" style="left: 90%; top: 35%;" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        class="absolute inset-0 opacity-[0.03]"
        style="background-image: radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px); background-size: 40px 40px;"
        aria-hidden="true"
      />

      {/* Content */}
      <div class="relative z-10 max-w-6xl mx-auto text-center px-4 py-32 md:py-40">
        {/* Badge */}
        <div class="hero-badge-anim inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-10">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span class="text-cyan-100 text-sm font-medium tracking-wide">Especialista Consultor en Urología</span>
        </div>

        <h1 class="hero-title-anim text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-2xl">
          <span class="block mb-2">
            Urología de <span class="shimmer-text">excelencia</span>
          </span>
          <span class="block text-cyan-200">
            en la ciudad de La Plata
          </span>
        </h1>

        <p class="hero-subtitle-anim text-xl md:text-2xl text-cyan-100/90 mt-8 max-w-2xl mx-auto leading-relaxed font-bold">
          Más de 20 años de experiencia en el cuidado integral de la salud urológica
        </p>

        {/* Credentials */}
        <div class="hero-badge-anim flex items-center justify-center gap-6 mt-6">
          <div class="glass-dark rounded-full px-4 py-1.5 text-sm text-cyan-200 font-medium">
            MP: 111.629
          </div>
          <div class="glass-dark rounded-full px-4 py-1.5 text-sm text-cyan-200 font-medium">
            MN: 92.627
          </div>
        </div>

        {/* CTA */}
        <div class="hero-cta-anim flex items-center justify-center pt-12">
          <a
            href="https://cal.com/ruben-manassero"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary inline-flex items-center justify-center gap-3 rounded-2xl px-12 py-5 text-lg font-bold bg-white text-cyan-900 shadow-xl w-full sm:w-auto"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Solicitar turno online
          </a>
        </div>

        <a
          href="#perfil"
          class="hero-cta-anim absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer no-underline"
          aria-label="Desplazarse hacia abajo"
        >
          <span class="text-xs uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">Descubrir más</span>
          <div class="mt-2 w-10 h-10 rounded-full border border-white/40 flex items-center justify-center group-hover:border-white transition-colors animate-bounce">
            <svg class="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
});
