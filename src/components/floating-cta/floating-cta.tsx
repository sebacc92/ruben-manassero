import { component$ } from "@builder.io/qwik";
import { LuMessageCircle } from "@qwikest/icons/lucide";

export const FloatingCta = component$(() => {
  return (
    <a
      href="https://wa.me/542214231042"
      target="_blank"
      rel="noopener noreferrer"
      class="cta-floating fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-2xl shadow-2xl hover:scale-110 hover:rounded-xl transition-all duration-300 cursor-pointer group"
      aria-label="Contactar por WhatsApp"
    >
      <LuMessageCircle class="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
    </a>
  );
});
