import { component$, useSignal } from "@builder.io/qwik";
import { LuMapPin, LuPhone, LuCalendar, LuAlertTriangle, LuInfo, LuGlobe, LuClock, LuShield, LuSend, LuUser, LuMail, LuMessageSquare } from "@qwikest/icons/lucide";
import { ScrollReveal } from "../scroll-reveal/scroll-reveal";

export const Contact = component$(() => {
  const formName = useSignal("");
  const formEmail = useSignal("");
  const formPhone = useSignal("");
  const formMessage = useSignal("");
  const formSent = useSignal(false);

  return (
    <section id="contacto" class="py-28 bg-slate-50 px-4 relative overflow-hidden">
      {/* Decorative blobs */}
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl" aria-hidden="true" />
      <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl" aria-hidden="true" />

      <div class="max-w-5xl mx-auto space-y-16 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div class="text-center space-y-5">
            <span class="inline-block text-cyan-600 text-sm font-semibold tracking-widest uppercase">Reservá tu consulta</span>
            <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Atención y <span class="gradient-text">Consultas</span>
            </h2>
            <p class="text-lg text-slate-500 max-w-xl mx-auto">Revisá las modalidades de atención y reservá tu turno</p>
            <div class="w-20 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Card: Información General */}
          <ScrollReveal direction="left" delay={100}>
            <div class="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-slate-200 card-hover card-glow h-full">
              <h3 class="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span class="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white text-sm font-bold shadow-md">
                  1
                </span>
                Información de Contacto
              </h3>

              <div class="space-y-7">
                <div class="flex items-start gap-4 group">
                  <div class="icon-box w-11 h-11 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <LuMapPin class="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <strong class="block text-slate-900 text-lg">Instituto Central de Medicina</strong>
                    <span class="text-slate-500">Consultorio 16</span>
                  </div>
                </div>

                <div class="flex items-start gap-4 group">
                  <div class="icon-box w-11 h-11 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <LuGlobe class="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <strong class="block text-slate-900 text-lg">Turnos Online</strong>
                    <a href="http://www.icmsalud.com.ar:8080/Turnos" target="_blank" rel="noopener noreferrer" class="text-cyan-600 hover:text-cyan-700 animated-underline transition-colors font-medium">
                      Solicitar turno en ICM Salud
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-4 group">
                  <div class="icon-box w-11 h-11 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <LuPhone class="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <strong class="block text-slate-900 text-lg">Teléfonos</strong>
                    <div class="space-y-1.5 mt-1">
                      <a href="tel:+542214231042" class="text-slate-500 hover:text-cyan-600 transition-colors block font-medium">(221) 423-1042</a>
                      <a href="tel:+542214231099" class="text-slate-500 hover:text-cyan-600 transition-colors block font-medium">(221) 423-1099</a>
                    </div>
                  </div>
                </div>

                <div class="flex items-start gap-4 group">
                  <div class="icon-box w-11 h-11 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <LuMessageSquare class="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <strong class="block text-slate-900 text-lg">WhatsApp</strong>
                    <div class="space-y-1.5 mt-1">
                      <a href="https://wa.me/5492215706394" target="_blank" rel="noopener noreferrer" class="text-slate-500 hover:text-cyan-600 transition-colors block font-medium">+54 9 221 570-6394</a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-r from-red-50 to-rose-50 p-5 rounded-2xl flex items-start gap-4 mt-10 border border-red-100/60">
                <div class="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
                  <LuAlertTriangle class="w-5 h-5 text-red-500" />
                </div>
                <div class="text-sm text-red-900">
                  <strong class="block font-bold text-base mb-1">Urgencias</strong>
                  Las urgencias urológicas se atienden a través del sistema de guardia hospitalaria correspondiente.
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card: Modalidades de Atención */}
          <ScrollReveal direction="right" delay={200}>
            <div class="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-slate-200 card-hover card-glow h-full">
              <h3 class="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span class="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white text-sm font-bold shadow-md">
                  2
                </span>
                Modalidades de Atención
              </h3>

              <div class="space-y-8">
                <div class="flex gap-4">
                  <div class="icon-box w-11 h-11 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <LuCalendar class="w-5 h-5 text-cyan-600" />
                  </div>
                  <div class="w-full">
                    <div class="mb-4">
                      <strong class="block text-slate-900 text-lg">Turnos Programados</strong>
                      <span class="inline-flex items-center gap-1.5 bg-gradient-to-r from-cyan-50 to-cyan-100/50 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold mt-1.5 mb-3 border border-cyan-100/50">
                        <LuShield class="w-3 h-3" />
                        Obra Social / Prepaga
                      </span>
                    </div>
                    <ul class="space-y-3 text-slate-600">
                      <li class="flex justify-between items-center bg-gradient-to-r from-slate-50 to-white p-4 rounded-xl border border-slate-100/60 hover:shadow-sm transition-shadow">
                        <div class="flex items-center gap-3">
                          <LuClock class="w-4 h-4 text-cyan-500" />
                          <span class="font-semibold text-slate-900">Martes</span>
                        </div>
                        <span class="text-cyan-700 font-medium text-sm bg-cyan-50 px-3 py-1 rounded-full">13:00 – 17:30</span>
                      </li>
                      <li class="flex justify-between items-center bg-gradient-to-r from-slate-50 to-white p-4 rounded-xl border border-slate-100/60 hover:shadow-sm transition-shadow">
                        <div class="flex items-center gap-3">
                          <LuClock class="w-4 h-4 text-cyan-500" />
                          <span class="font-semibold text-slate-900">Jueves</span>
                        </div>
                        <span class="text-cyan-700 font-medium text-sm bg-cyan-50 px-3 py-1 rounded-full">17:30 – 20:30</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="pt-6 border-t border-slate-100">
                  <div class="mb-4">
                    <strong class="block text-slate-900 text-lg flex items-center gap-2">
                      <LuInfo class="w-5 h-5 text-amber-500" />
                      Sobreturnos
                    </strong>
                    <span class="inline-block bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold mt-1.5 mb-3 border border-amber-100/50">Consulta particular</span>
                  </div>
                  <ul class="space-y-3 text-slate-500 text-sm">
                    <li class="flex items-center gap-3">
                      <span class="w-2 h-2 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full" />
                      Martes a partir de las 17:30 hs
                    </li>
                    <li class="flex items-center gap-3">
                      <span class="w-2 h-2 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full" />
                      Atención por orden de llegada
                    </li>
                    <li class="flex items-center gap-3">
                      <span class="w-2 h-2 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full" />
                      Exclusivamente consulta privada (sin cobertura)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Contact Form */}
        <ScrollReveal direction="up" delay={150}>
          <div class="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-slate-200 card-glow relative overflow-hidden">
            {/* Decorative accent */}
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500" />

            <div class="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Left: Form info */}
              <div class="lg:col-span-2 space-y-6">
                <div>
                  <h3 class="text-2xl font-bold text-slate-900 mb-3">Envianos tu consulta</h3>
                  <p class="text-slate-500 leading-relaxed">
                    Completá el formulario y nos pondremos en contacto con vos a la brevedad. También podés comunicarte directamente por teléfono o WhatsApp.
                  </p>
                </div>
                <div class="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100/50">
                  <p class="text-sm text-cyan-800 font-medium">
                    <strong class="block text-cyan-900 mb-1">Importante:</strong>
                    Este formulario es solo para consultas generales. Para urgencias, dirigirse a la guardia hospitalaria.
                  </p>
                </div>
              </div>

              {/* Right: Form */}
              <div class="lg:col-span-3">
                {formSent.value ? (
                  <div class="flex flex-col items-center justify-center h-full text-center py-8 space-y-4">
                    <div class="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center">
                      <svg class="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 class="text-xl font-bold text-slate-900">¡Mensaje enviado!</h4>
                    <p class="text-slate-500">Nos pondremos en contacto pronto.</p>
                    <button
                      type="button"
                      onClick$={() => {
                        formSent.value = false;
                        formName.value = "";
                        formEmail.value = "";
                        formPhone.value = "";
                        formMessage.value = "";
                      }}
                      class="text-cyan-600 hover:text-cyan-700 font-medium text-sm mt-2"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                ) : (
                  <form
                    preventdefault:submit
                    onSubmit$={() => {
                      formSent.value = true;
                    }}
                    class="space-y-5"
                  >
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label for="contact-name" class="block text-sm font-semibold text-slate-700 mb-2">
                          Nombre completo
                        </label>
                        <div class="relative">
                          <LuUser class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            id="contact-name"
                            type="text"
                            required
                            value={formName.value}
                            onInput$={(_, el) => (formName.value = el.value)}
                            placeholder="Tu nombre"
                            class="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all duration-300 text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label for="contact-email" class="block text-sm font-semibold text-slate-700 mb-2">
                          Email
                        </label>
                        <div class="relative">
                          <LuMail class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            id="contact-email"
                            type="email"
                            required
                            value={formEmail.value}
                            onInput$={(_, el) => (formEmail.value = el.value)}
                            placeholder="tu@email.com"
                            class="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all duration-300 text-sm"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label for="contact-phone" class="block text-sm font-semibold text-slate-700 mb-2">
                        Teléfono
                      </label>
                      <div class="relative">
                        <LuPhone class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          id="contact-phone"
                          type="tel"
                          value={formPhone.value}
                          onInput$={(_, el) => (formPhone.value = el.value)}
                          placeholder="(221) 000-0000"
                          class="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all duration-300 text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label for="contact-message" class="block text-sm font-semibold text-slate-700 mb-2">
                        Mensaje
                      </label>
                      <div class="relative">
                        <LuMessageSquare class="absolute left-4 top-4 w-4 h-4 text-slate-400" />
                        <textarea
                          id="contact-message"
                          required
                          rows={4}
                          value={formMessage.value}
                          onInput$={(_, el) => (formMessage.value = el.value)}
                          placeholder="Describí brevemente tu consulta..."
                          class="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all duration-300 text-sm resize-none"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl px-8 py-3.5 font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300"
                    >
                      <LuSend class="w-4 h-4" />
                      Enviar consulta
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Info Extra */}
        <ScrollReveal direction="up" delay={200}>
          <div class="relative bg-gradient-to-br from-[#0c4a6e] via-[#0e7490] to-[#164e63] rounded-3xl p-8 md:p-12 text-cyan-100 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between overflow-hidden shadow-xl">
            {/* Decorative circles */}
            <div class="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-xl" aria-hidden="true" />
            <div class="absolute -bottom-16 -left-16 w-48 h-48 bg-cyan-400/10 rounded-full blur-xl" aria-hidden="true" />

            <div class="flex gap-6 items-start relative z-10">
              <div class="bg-white/10 backdrop-blur-sm p-4 rounded-2xl shrink-0 border border-white/10">
                <LuInfo class="w-8 h-8 text-cyan-200" />
              </div>
              <div>
                <p class="font-bold text-xl text-white mb-5">Información importante para pacientes</p>
                <ul class="space-y-2 text-sm md:text-base grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shrink-0" />
                    <span>No se otorgan turnos ni sobreturnos por este medio.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shrink-0" />
                    <span>Asistir con estudios previos y medicación habitual.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shrink-0" />
                    <span>En caso de estudios urodinámicos, consultar indicaciones específicas.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shrink-0" />
                    <span>Llegar con anticipación al turno asignado.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
});
