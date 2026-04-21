import { component$ } from "@builder.io/qwik";
import { ScrollReveal } from "../scroll-reveal/scroll-reveal";

export const Institutions = component$(() => {
  const logos = [
    {
      src: "/logos/IC-LaPlata.png",
      alt: "Instituto Central de Medicina - La Plata",
      name: "Instituto Central de Medicina"
    },
    {
      src: "/logos/IMP-Logo.png",
      alt: "Instituto Médico Platense",
      name: "Instituto Médico Platense"
    },
    {
      src: "/logos/HSanMartin.jpeg",
      alt: "Hospital San Martín de La Plata",
      name: "Hospital San Martín"
    },
    {
      src: "/logos/urologia-femenina-laplata.webp",
      alt: "Urología Femenina La Plata",
      name: "Urología Femenina La Plata"
    }
  ];

  return (
    <section class="bg-white py-20 border-b border-slate-100">
      <div class="max-w-6xl mx-auto px-4">
        <ScrollReveal direction="up">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 lg:gap-24 items-center justify-items-center transition-opacity duration-500">
            {logos.map((logo, idx) => (
              <div key={idx} class="group relative flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-110">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  class="h-24 md:h-28 lg:h-32 w-auto object-contain"
                />
                <span class="text-xs font-bold text-slate-500 transition-colors group-hover:text-cyan-600 text-center uppercase tracking-wider">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
});
