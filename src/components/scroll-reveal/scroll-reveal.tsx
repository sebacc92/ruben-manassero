import { component$, Slot, useSignal, useVisibleTask$ } from "@builder.io/qwik";

interface ScrollRevealProps {
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  class?: string;
  threshold?: number;
}

export const ScrollReveal = component$<ScrollRevealProps>(
  ({ delay = 0, direction = "up", class: className = "", threshold = 0.15 }) => {
    const ref = useSignal<HTMLDivElement>();
    const isVisible = useSignal(false);

    useVisibleTask$(
      ({ cleanup }) => {
        const el = ref.value;
        if (!el) return;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                isVisible.value = true;
              }, delay);
              observer.unobserve(el);
            }
          },
          { threshold },
        );

        observer.observe(el);
        cleanup(() => observer.disconnect());
      },
      { strategy: "document-idle" },
    );

    const directionClass = {
      up: "reveal-up",
      down: "reveal-down",
      left: "reveal-left",
      right: "reveal-right",
      none: "reveal-fade",
    }[direction];

    return (
      <div
        ref={ref}
        class={`${directionClass} ${isVisible.value ? "revealed" : ""} ${className}`}
      >
        <Slot />
      </div>
    );
  },
);
