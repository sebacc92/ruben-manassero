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
    }
  ];

  return (
    <section class="bg-white py-20 border-b border-slate-100">
      <div class="max-w-6xl mx-auto px-4">
        <ScrollReveal direction="up">
          <div class="flex flex-wrap justify-center items-center gap-16 md:gap-32 transition-opacity duration-500">
            {logos.map((logo, idx) => (
              <div key={idx} class="group relative flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-110">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  class="h-24 md:h-32 w-auto object-contain"
                />
                <span class="text-xs font-bold text-slate-500 transition-colors group-hover:text-cyan-600 whitespace-nowrap uppercase tracking-wider">
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
