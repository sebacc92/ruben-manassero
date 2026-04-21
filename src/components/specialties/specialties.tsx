import { component$ } from "@builder.io/qwik";
import { LuActivity, LuStethoscope, LuUser, LuMicroscope, LuCheck, LuHeart } from "@qwikest/icons/lucide";
import { ScrollReveal } from "../scroll-reveal/scroll-reveal";

export const Specialties = component$(() => {
  const specialties = [
    {
      title: "Urología General",
      description: "Evaluación, diagnóstico y tratamiento de patologías frecuentes:",
      items: [
        "Infecciones urinarias agudas y recurrentes",
        "Patología urogenital y control de fertilidad (vasectomías VSB)",
        "Trastornos miccionales (dificultad para orinar, urgencia)",
        "Hematuria (presencia de sangre en orina)",
        "Control prostático preventivo"
      ],
      icon: LuStethoscope,
      gradient: "from-cyan-500 to-cyan-600",
      lightBg: "from-cyan-50 to-cyan-100/50",
    },
    {
      title: "Uro-ginecología",
      description: "Atención especializada en patologías urológicas femeninas:",
      items: [
        "Disfunciones del piso pélvico",
        "Alteraciones en la dinámica miccional",
        "Evaluación inicial de prolapsos",
        "Coordinación interdisciplinaria requerida"
      ],
      icon: LuUser,
      gradient: "from-teal-500 to-teal-600",
      lightBg: "from-teal-50 to-teal-100/50",
    },
    {
      title: "Incontinencia Femenina",
      description: "Abordaje integral de la incontinencia de esfuerzo, de urgencia, deficiencias esfinterianas y vejiga hiperactiva:",
      items: [
        "Tratamiento médico quirúrgico (técnicas mínimamente invasivas) y farmacológicas (Botox ®)",
        "Reeducación vesical",
        "Indicaciones de rehabilitación del piso pélvico",
        "Evaluación para tratamientos especializados"
      ],
      icon: LuActivity,
      gradient: "from-sky-500 to-sky-600",
      lightBg: "from-sky-50 to-sky-100/50",
    },
    {
      title: "Estudios Urodinámicos",
      description: "Estudios funcionales clave (bajo indicación médica y preparación):",
      items: [
        "Evaluación de la función vesical y uretral",
        "Diagnóstico de incontinencia urinaria",
        "Estudio de retención urinaria",
        "Evaluación prequirúrgica"
      ],
      icon: LuMicroscope,
      gradient: "from-blue-500 to-blue-600",
      lightBg: "from-blue-50 to-blue-100/50",
    },
  ];

  const enfoque = [
    "Escucha activa y evaluación clínica detallada",
    "Explicación clara y accesible de cada diagnóstico",
    "Elección de tratamientos basados en evidencia",
    "Seguimiento personalizado"
  ];

  const cuandoConsultar = [
    "Pérdidas de orina involuntarias",
    "Dolor o ardor al orinar",
    "Aumento de la frecuencia urinaria",
    "Dificultad para orinar",
    "Infecciones urinarias repetidas",
    "Sangre en la orina",
    "Controles prostáticos en hombres mayores de 50 años (o antes según antecedentes)",
    "Control de Fertilidad (Vasectomia Sin Bisturi)"
  ];

  return (
    <section id="especialidades" class="py-28 bg-white px-4 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        class="absolute inset-0 opacity-[0.015]"
        style="background-image: radial-gradient(circle, #0e7490 1px, transparent 1px); background-size: 32px 32px;"
        aria-hidden="true"
      />

      <div class="max-w-7xl mx-auto space-y-20 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div class="text-center space-y-5 max-w-2xl mx-auto">
            <span class="inline-block text-cyan-600 text-base font-semibold tracking-widest uppercase">Servicios médicos</span>
            <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Áreas de <span class="gradient-text">Atención</span>
            </h2>
            <p class="text-lg text-slate-500 leading-relaxed">
              Soluciones médicas de vanguardia para la salud urológica de hombres y mujeres.
            </p>
            <div class="w-20 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        {/* Specialties Cards */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((spec, id) => (
            <ScrollReveal key={id} direction="up" delay={id * 120}>
              <div class="group rounded-3xl bg-white p-7 shadow-md border border-slate-200 flex flex-col h-full card-hover card-glow relative overflow-hidden">
                {/* Top gradient bar */}
                <div class={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${spec.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div class={`icon-box w-14 h-14 bg-gradient-to-br ${spec.lightBg} rounded-2xl flex items-center justify-center mb-6 shrink-0 shadow-sm`}>
                  <spec.icon class="w-7 h-7 text-cyan-600" />
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-700 transition-colors duration-300">{spec.title}</h3>
                <p class="text-slate-500 mb-5 text-base font-medium leading-relaxed">{spec.description}</p>
                <ul class="space-y-3 flex-grow">
                  {spec.items.map((item, itemId) => (
                    <li key={itemId} class="flex items-start gap-2.5 text-base text-slate-600">
                      <LuCheck class="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Enfoque y Cuándo Consultar */}
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">

          <ScrollReveal direction="left" delay={100} class="md:col-span-5">
            <div class="bg-white border border-slate-200 rounded-3xl p-8 shadow-md card-hover h-full">
              <div class="flex items-center gap-3 mb-8">
                <div class="icon-box bg-gradient-to-br from-rose-50 to-rose-100/80 p-3 rounded-xl text-rose-500 shadow-sm">
                  <LuHeart class="w-6 h-6" />
                </div>
                <h3 class="text-2xl font-bold text-slate-900">Enfoque de Atención</h3>
              </div>
              <p class="text-slate-500 mb-8 leading-relaxed">Se busca que cada paciente comprenda su situación y participe activamente en las decisiones terapéuticas.</p>
              <ul class="space-y-5">
                {enfoque.map((item, id) => (
                  <li key={id} class="flex items-center gap-4 text-slate-700 font-medium group">
                    <span class="w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 shrink-0 group-hover:scale-125 transition-transform duration-300 shadow-sm" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200} class="md:col-span-7">
            <div class="bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 border border-cyan-200 rounded-3xl p-8 shadow-md relative overflow-hidden h-full">
              {/* Decorative circle */}
              <div class="absolute -top-16 -right-16 w-48 h-48 bg-cyan-200/20 rounded-full blur-2xl" aria-hidden="true" />

              <h3 class="text-2xl font-bold text-cyan-900 mb-3 relative z-10">¿Cuándo consultar?</h3>
              <p class="text-cyan-800/80 text-lg mb-8 relative z-10">Se recomienda una pronta evaluación urológica ante la presencia de:</p>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {cuandoConsultar.map((item, idx) => (
                  <li key={idx} class="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-cyan-100/50 text-cyan-900 text-base group hover:bg-white hover:shadow-sm transition-all duration-300 hover:-translate-y-0.5">
                    <LuCheck class="w-5 h-5 text-cyan-600 shrink-0 group-hover:scale-110 transition-transform" />
                    <span class="pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
});
