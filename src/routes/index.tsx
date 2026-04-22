import { component$ } from "@builder.io/qwik";
import { routeAction$, zod$, z, type DocumentHead } from "@builder.io/qwik-city";
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

export const useSendContactEmail = routeAction$(async (datos, { env, fail, request }) => {
  const token = (datos as any)['cf-turnstile-response'];

  if (!token) {
    return fail(400, { message: 'Por favor, completa la verificación de seguridad.' });
  }

  const secretKey = env.get('TURNSTILE_SECRET_KEY');
  if (!secretKey) {
    console.error('Falta TURNSTILE_SECRET_KEY en .env.local');
    return fail(500, { message: 'Error de configuración del servidor' });
  }

  const formData = new FormData();
  formData.append('secret', secretKey);
  formData.append('response', token);
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('cf-connecting-ip');
  if (ip) formData.append('remoteip', ip);

  const verifyResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: formData,
  });

  const verifyResult = await verifyResponse.json();
  if (!verifyResult.success) {
    console.error('Turnstile verification failed:', verifyResult);
    return fail(400, { message: 'Verificación de seguridad fallida. Intenta nuevamente.' });
  }

  const apiKey = env.get('RESEND_API_KEY');
  if (!apiKey) {
    console.error('Falta la API Key de Resend en .env.local');
    return fail(500, { message: 'Error de configuración del servidor' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'comercial@enlacesalud.com.ar',
        subject: `Nuevo contacto de: ${datos.nombre}`,
        html: `
          <h1>Nuevo mensaje desde la web de Dr. Rubén Manassero</h1>
          <p><strong>Nombre:</strong> ${datos.nombre}</p>
          <p><strong>Email:</strong> ${datos.email}</p>
          <p><strong>Teléfono:</strong> ${datos.telefono}</p>
          <p><strong>Mensaje:</strong></p>
          <blockquote style="background: #f9f9f9; padding: 10px; border-left: 5px solid #ccc;">
            ${datos.mensaje}
          </blockquote>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error Resend API:', errorData);
      return fail(500, { message: 'No se pudo enviar el correo.' });
    }

    return { success: true };

  } catch (error) {
    console.error('Error interno:', error);
    return fail(500, { message: 'Ocurrió un error inesperado.' });
  }
}, zod$({
  nombre: z.string().min(2, 'Tu nombre es muy corto'),
  email: z.string().email('Ingresa un email válido'),
  telefono: z.string().min(8, 'Ingresa un teléfono válido'),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  'cf-turnstile-response': z.string().optional()
}));

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
