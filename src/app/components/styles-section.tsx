"use client"
import { useState } from "react";
import { Reveal } from "./reveal";

const styles = [
  { name: "Blackwork", note: "Preto sólido, contraste alto." },
  { name: "Fine Line", note: "Traço fino, quase respiração." },
  { name: "Minimalista", note: "O mínimo que ainda diz algo." },
  { name: "Ornamental", note: "Desenho que segue o corpo." },
  { name: "Realismo", note: "Cinza, textura, paciência." },
  { name: "Custom", note: "Projetos longos, feitos do zero." },
];

export function StylesSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="border-y border-border px-5 py-20 md:px-10 md:py-28">
      <p className="eyebrow">O que fazemos</p>
      <ul className="mt-10 md:mt-14">
        {styles.map((s, i) => (
          <li key={s.name}>
            <Reveal delay={i * 60}>
              <div
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="flex flex-wrap items-baseline gap-x-8 gap-y-1 border-b border-border/60 py-4 transition-colors md:py-6"
              >
                <span
                  className="display text-4xl transition-all duration-500 sm:text-6xl lg:text-7xl"
                  style={{
                    color: active === i ? "var(--wine)" : undefined,
                    transform: active === i ? "translateX(14px)" : "none",
                    opacity: active !== null && active !== i ? 0.45 : 1,
                  }}
                >
                  {s.name}
                </span>
                <span className="text-sm tracking-[0.12em] text-muted-foreground uppercase">
                  {s.note}
                </span>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
