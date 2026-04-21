import { component$ } from "@builder.io/qwik";
import { LuCheckCircle, LuGraduationCap, LuAward, LuBuilding } from "@qwikest/icons/lucide";
import { ScrollReveal } from "../scroll-reveal/scroll-reveal";

export const About = component$(() => {
  const trayectoria = [
    "Jefe de Sala XI de Urología – Hospital Interzonal General de Agudos General San Martín",
    "Instructor de Residentes de Urología – Formación de médicos especialistas",
    "Profesor Adjunto – Cátedra de Urología, Facultad de Ciencias Médicas, Universidad Nacional de La Plata",
    "Especialista Consultor – Instituto Médico Platense",
    "Especialista Consultor – Instituto Central de Medicina",
    "Presidente – Asociación Civil Urológica de Buenos Aires (ACUBA)",
    "Subdirector – Sección Regional Buenos Aires, Sociedad Argentina de Urología",
  ];

  const formacion = [
    "Especialista en Urología desde 1999",
    "Especialista Jerarquizado en Urología desde 2011",
    "Especialista Consultor en Urología desde 2017",
  ];

  const continua = [
    "Disfunciones del tracto urinario inferior",
    "Uroflujometría - Urodinamia Computarizada",
    "Urología funcional y femenina",
    "Manejo clínico quirúrgico de  patologías infravesicales",
  ];

  const stats = [
    { number: "25+", label: "Años de experiencia" },
    { number: "3", label: "Certificaciones" },
    { number: "7", label: "Cargos institucionales" },
  ];

  return (
    <section id="perfil" class="py-28 bg-slate-50 px-4 relative overflow-hidden">
      {/* Soft decorative blobs */}
      <div class="absolute top-20 right-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl -translate-x-1/2" aria-hidden="true" />
      <div class="absolute bottom-10 left-0 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl translate-x-1/4" aria-hidden="true" />

      <div class="max-w-6xl mx-auto space-y-20 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div class="text-center space-y-5 max-w-3xl mx-auto">
            <span class="inline-block text-cyan-600 text-sm font-semibold tracking-widest uppercase">Sobre el profesional</span>
            <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Perfil <span class="gradient-text">Profesional</span>
            </h2>
            <div class="w-20 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        {/* Doctor Image + Bio — Responsive Layout */}
        <ScrollReveal direction="up" delay={100}>
          <div class="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">
            {/* Doctor Image */}
            <div class="lg:col-span-2 flex justify-center">
              <div class="relative">
                {/* Decorative ring */}
                <div class="absolute -inset-3 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-3xl blur-xl" aria-hidden="true" />
                <div class="relative overflow-hidden rounded-3xl shadow-xl border-2 border-white">
                  <img
                    src="/ruben-massaro.webp"
                    alt="Dr. Rubén Manassero – Especialista Consultor en Urología"
                    class="w-full max-w-[380px] h-auto object-cover aspect-[3/4]"
                    width={380}
                    height={507}
                  />
                  {/* Gradient overlay at bottom */}
                  <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  <div class="absolute bottom-4 left-4 right-4">
                    <p class="text-white font-bold text-lg drop-shadow-md">Dr. Rubén Manassero</p>
                    <p class="text-cyan-200 text-sm font-medium drop-shadow-md">Especialista Consultor en Urología</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio text */}
            <div class="lg:col-span-3 space-y-6">
              <div class="text-lg md:text-xl text-slate-600 space-y-5 leading-relaxed">
                <p>
                  El Dr. Rubén Manassero es <b>Médico Especialista Consultor en Urología</b> con más de dos décadas de experiencia en el diagnóstico y tratamiento de patologías del sistema urinario y del aparato genital masculino, con especial dedicación al área funcional y a la urología femenina.
                </p>
                <p>
                  Desarrolla su actividad en ámbitos hospitalarios, académicos y privados, combinando la asistencia clínica con la formación de profesionales y la participación activa en instituciones científicas de la especialidad.
                </p>
              </div>

              {/* Highlighted quote */}
              <div class="relative">
                <div class="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full" />
                <p class="font-medium text-cyan-900 bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-2xl text-base md:text-lg leading-relaxed border border-cyan-100/50 shadow-sm pl-8">
                  Su enfoque se basa en una medicina personalizada, priorizando el diagnóstico preciso, el tratamiento adecuado a cada paciente y el acompañamiento continuo durante todo el proceso terapéutico.
                </p>
              </div>

              {/* Stats counters */}
              <div class="grid grid-cols-3 gap-6 pt-4">
                {stats.map((stat, idx) => (
                  <div key={idx} class="text-center counter-item">
                    <div class="text-3xl md:text-4xl font-extrabold gradient-text">{stat.number}</div>
                    <div class="text-xs sm:text-sm text-slate-500 mt-1 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Cards grid */}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Trayectoria */}
          <ScrollReveal direction="left" delay={100}>
            <div class="bg-white rounded-3xl shadow-md border border-slate-200 p-8 md:p-10 space-y-8 flex flex-col h-full card-hover card-glow">
              <div class="flex items-center gap-4 border-b border-slate-100 pb-6">
                <div class="icon-box w-14 h-14 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl flex items-center justify-center text-cyan-600 shrink-0 shadow-sm">
                  <LuBuilding class="w-7 h-7" />
                </div>
                <h3 class="text-2xl font-bold text-slate-900">Trayectoria Profesional</h3>
              </div>
              <ul class="space-y-4 flex-grow">
                {trayectoria.map((item, id) => (
                  <li key={id} class="flex items-start gap-4 group">
                    <div class="mt-1 flex-shrink-0">
                      <LuCheckCircle class="w-5 h-5 text-cyan-500 group-hover:text-cyan-600 transition-colors" />
                    </div>
                    <span class="text-slate-700 group-hover:text-slate-900 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
              <div class="bg-gradient-to-r from-cyan-50 to-blue-50 p-5 rounded-xl border border-cyan-100/50 text-sm text-cyan-800 font-medium">
                Su participación institucional refleja un compromiso activo con el desarrollo y la actualización de la urología a nivel regional y nacional.
              </div>
            </div>
          </ScrollReveal>

          {/* Formación */}
          <ScrollReveal direction="right" delay={200}>
            <div class="space-y-8 flex flex-col h-full">
              <div class="bg-white rounded-3xl shadow-md border border-slate-200 p-8 md:p-10 space-y-6 card-hover card-glow">
                <div class="flex items-center gap-4 border-b border-slate-100 pb-6">
                  <div class="icon-box w-14 h-14 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl flex items-center justify-center text-cyan-600 shrink-0 shadow-sm">
                    <LuAward class="w-7 h-7" />
                  </div>
                  <h3 class="text-2xl font-bold text-slate-900">Especializaciones</h3>
                </div>
                <ul class="space-y-4">
                  {formacion.map((item, id) => (
                    <li key={id} class="flex items-start gap-4 group">
                      <div class="mt-1 flex-shrink-0">
                        <LuGraduationCap class="w-5 h-5 text-cyan-500 group-hover:text-cyan-600 transition-colors" />
                      </div>
                      <span class="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div class="bg-white rounded-3xl shadow-md border border-slate-200 p-8 md:p-10 flex-grow flex flex-col card-hover card-glow">
                <h3 class="text-lg font-bold text-slate-900 mb-6">Formación continua en:</h3>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
                  {continua.map((item, id) => (
                    <li key={id} class="flex items-center gap-3 bg-gradient-to-r from-slate-50 to-white p-4 rounded-xl border border-slate-100/60 group hover:border-cyan-200 hover:shadow-sm transition-all duration-300">
                      <span class="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <span class="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
                <p class="text-sm text-slate-500 mt-6 border-t border-slate-100 pt-4">
                  Participa regularmente en congresos, jornadas científicas y actividades de actualización profesional.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
});
