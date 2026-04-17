import { $, component$, useOnWindow, useSignal } from "@builder.io/qwik";

export const ScrollToTop = component$(() => {
  const show = useSignal(false);

  useOnWindow(
    "scroll",
    $(() => {
      requestAnimationFrame(() => {
        show.value = window.scrollY > 300;
      });
    }),
  );

  return (
    <button
      type="button"
      aria-label="Volver arriba"
      onClick$={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      class={`fixed right-6 bottom-6 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-xl shadow-cyan-500/25 transition-all duration-300 ease-out hover:scale-110 hover:shadow-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
        show.value
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-10 opacity-0"
      }`}
      style={{ contain: "layout paint" }}
    >
      <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
});
