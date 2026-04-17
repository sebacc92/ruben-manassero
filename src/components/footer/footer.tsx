import { component$ } from "@builder.io/qwik";
import { LuMapPin, LuPhone, LuGlobe, LuHeart } from "@qwikest/icons/lucide";

export const Footer = component$(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 overflow-hidden">
      {/* Decorative top border */}
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      {/* Decorative circles */}
      <div class="absolute top-10 right-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" aria-hidden="true" />
      <div class="absolute bottom-10 left-10 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div class="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          <div class="space-y-5">
            <div class="mb-6">
              <img
                src="/logos/logo-rubben-blanco.png"
                alt="Logo Dr. Rubén Manassero"
                class="h-14 w-auto mb-2"
                width={220}
                height={55}
              />
              <p class="text-cyan-400 text-base font-medium mt-1 pl-1">Especialista Consultor en Urología</p>
            </div>
            <p class="text-slate-400 text-base leading-relaxed">
              Más de 20 años de experiencia en el diagnóstico y tratamiento de patologías urológicas, con especial dedicación a la urología funcional y femenina.
            </p>
            <div class="flex gap-3">
              <span class="text-xs bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 font-medium">MP: 111.629</span>
              <span class="text-xs bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 font-medium">MN: 92.627</span>
            </div>
          </div>

          {/* Quick Links */}
          <div class="space-y-5">
            <h4 class="text-sm font-semibold uppercase tracking-widest text-slate-500">Navegación</h4>
            <nav class="space-y-3">
              <a href="#perfil" class="block text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-base animated-underline w-fit">Perfil Profesional</a>
              <a href="#especialidades" class="block text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-base animated-underline w-fit">Áreas de Atención</a>
              <a href="#contacto" class="block text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-base animated-underline w-fit">Atención y Consultas</a>
              <a
                href="https://cal.com/ruben-manassero"
                target="_blank"
                rel="noopener noreferrer"
                class="block text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-base font-medium"
              >
                Solicitar turno online →
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div class="space-y-5">
            <h4 class="text-sm font-semibold uppercase tracking-widest text-slate-500">Contacto</h4>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <LuMapPin class="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <div class="text-base">
                  <p class="text-slate-300 font-medium">Instituto Central de Medicina</p>
                  <p class="text-slate-500">Consultorio 16</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <LuPhone class="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <div class="text-base space-y-1">
                  <a href="tel:+542214231042" class="block text-slate-400 hover:text-cyan-400 transition-colors">(221) 423-1042</a>
                  <a href="tel:+542214231099" class="block text-slate-400 hover:text-cyan-400 transition-colors">(221) 423-1099</a>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <LuGlobe class="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <a
                  href="https://cal.com/ruben-manassero"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-base text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Solicitar turno online
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-base text-slate-500">
            © {currentYear} Dr. Rubén Manassero. Todos los derechos reservados.
          </p>
          <p class="text-sm text-slate-500 flex items-center gap-1.5">
            Hecho con <LuHeart class="w-3 h-3 text-rose-500" /> por{" "}
            <a
              href="https://indesign.ar/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
            >
              indesign
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
});
