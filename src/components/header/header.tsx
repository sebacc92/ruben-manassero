import { $, component$, useOnWindow, useSignal } from "@builder.io/qwik";

export const Header = component$(() => {
  const isScrolled = useSignal(false);
  const isMenuOpen = useSignal(false);

  useOnWindow(
    "scroll",
    $(() => {
      requestAnimationFrame(() => {
        isScrolled.value = window.scrollY > 50;
      });
    }),
  );

  const navLinks = [
    { label: "Perfil", href: "#perfil" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      class={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled.value
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-900/5 border-b border-slate-100/50"
          : "bg-transparent"
      }`}
    >
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#" class="flex-shrink-0 flex items-center group" aria-label="Inicio">
            <img
              src={isScrolled.value ? "/logos/logo-rubben-negro.png" : "/logos/logo-rubben-blanco.png"}
              alt="Logo Dr. Rubén Manassero"
              class="h-16 w-auto transition-all duration-500"
              width={260}
              height={65}
            />
          </a>

          {/* Desktop Nav */}
          <nav class="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                class={`px-4 py-2 rounded-xl text-lg font-medium transition-all duration-300 ${
                  isScrolled.value
                    ? "text-slate-600 hover:text-cyan-600 hover:bg-cyan-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right: Social + CTA */}
          <div class="hidden lg:flex items-center gap-4">
            {/* Social Icons */}
            <div class="flex items-center gap-2">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                class={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isScrolled.value
                    ? "text-slate-400 hover:text-pink-500 hover:bg-pink-50"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
                aria-label="Instagram"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                class={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isScrolled.value
                    ? "text-slate-400 hover:text-blue-600 hover:bg-blue-50"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
                aria-label="LinkedIn"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            {/* CTA Button */}
            <a
              href="https://cal.com/ruben-manassero"
              target="_blank"
              rel="noopener noreferrer"
              class={`btn-primary flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold transition-all duration-300 ${
                isScrolled.value
                  ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-md shadow-cyan-500/20"
                  : "bg-white text-cyan-900 shadow-lg"
              }`}
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Solicitar turno
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick$={() => (isMenuOpen.value = !isMenuOpen.value)}
            class={`lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isScrolled.value
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={isMenuOpen.value ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen.value}
          >
            <div class="w-5 h-4 relative flex flex-col justify-between">
              <span
                class={`block h-0.5 rounded-full transition-all duration-300 origin-center ${
                  isScrolled.value ? "bg-slate-700" : "bg-white"
                } ${isMenuOpen.value ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              <span
                class={`block h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled.value ? "bg-slate-700" : "bg-white"
                } ${isMenuOpen.value ? "opacity-0 scale-0" : ""}`}
              />
              <span
                class={`block h-0.5 rounded-full transition-all duration-300 origin-center ${
                  isScrolled.value ? "bg-slate-700" : "bg-white"
                } ${isMenuOpen.value ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        class={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMenuOpen.value ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick$={() => (isMenuOpen.value = false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        class={`lg:hidden fixed top-0 right-0 h-full w-[380px] max-w-[90vw] bg-white z-50 shadow-2xl transition-transform duration-400 ease-out ${
          isMenuOpen.value ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div class="p-6 h-full flex flex-col">
          {/* Close button */}
          <div class="flex justify-end mb-8">
            <button
              type="button"
              onClick$={() => (isMenuOpen.value = false)}
              class="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
              aria-label="Cerrar menú"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Logo */}
          <div class="mb-10 px-8">
            <img
              src="/logos/logo-rubben-negro.png"
              alt="Logo Dr. Rubén Manassero"
              class="h-16 w-auto object-contain"
              width={280}
              height={70}
            />
          </div>

          {/* Mobile Nav Links */}
          <nav class="space-y-1 flex-grow">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick$={() => (isMenuOpen.value = false)}
                class="flex items-center gap-4 px-4 py-4 rounded-xl text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-300 font-semibold text-xl"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Social */}
          <div class="pt-6 border-t border-slate-100">
            <p class="text-xs text-slate-400 uppercase tracking-wider mb-4 font-semibold">Redes</p>
            <div class="flex items-center gap-3 mb-6">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-pink-50 hover:text-pink-500 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile CTA */}
          <a
            href="https://cal.com/ruben-manassero"
            target="_blank"
            rel="noopener noreferrer"
            onClick$={() => (isMenuOpen.value = false)}
            class="btn-primary block text-center bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl py-3.5 font-semibold shadow-lg shadow-cyan-500/20"
          >
            Solicitar turno
          </a>
        </div>
      </div>
    </header>
  );
});
