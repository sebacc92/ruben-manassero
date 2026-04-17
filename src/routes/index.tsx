import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Header } from "~/components/header/header";
import { Hero } from "~/components/hero/hero";
import { Institutions } from "~/components/institutions/institutions";
import { About } from "~/components/about/about";
import { Specialties } from "~/components/specialties/specialties";
import { Contact } from "~/components/contact/contact";
import { Footer } from "~/components/footer/footer";
import { WhatsAppButton } from "~/components/whatsapp-button/whatsapp-button";
import { ScrollToTop } from "~/components/scroll-to-top/scroll-to-top";
import { doctorSchema } from "~/lib/seo";

export default component$(() => {
  return (
    <main class="font-sans text-slate-900 overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Institutions />
      <Specialties />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify(doctorSchema)}
      />
    </main>
  );
});

export const head: DocumentHead = {
  title: "Dr. Rubén Manassero | Urólogo en La Plata",
  meta: [
    {
      name: "description",
      content: "Dr. Rubén Manassero, Especialista Consultor en Urología en La Plata. Atención personalizada, urodinamia, uro-ginecología y cirugía urológica.",
    },
  ],
};
