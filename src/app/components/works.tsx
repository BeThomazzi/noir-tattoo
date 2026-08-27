"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { works, type Work } from "../data/works";
import { PhotoSlot } from "./photo-slot";
import { Reveal } from "./reveal";

function Caption({ work }: { work: Work }) {
  return (
    <div className="mt-3 flex items-baseline justify-between gap-4 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
      <span>{work.style}</span>
      <span>{work.placement ?? work.artist}</span>
    </div>
  );
}

function Item({ work, onOpen }: { work: Work; onOpen: () => void }) {
  return (
    <button type="button" onClick={onOpen} className="group block w-full text-left">
      <PhotoSlot ratio={work.ratio} src={work.image} alt={work.title} label={work.title} className="cursor-pointer" />
      <Caption work={work} />
    </button>
  );
}

export function Works() {
  const [open, setOpen] = useState<Work | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const [a, b, c, d, e, f, g] = works as [Work, Work, Work, Work, Work, Work, Work];

  return (
    <section id="trabalhos" className="px-5 pb-28 md:px-10 md:pb-44">
      <Reveal>
        <div className="flex items-baseline justify-between border-t border-border pt-5">
          <h2 className="eyebrow">Trabalhos selecionados</h2>
          <span className="eyebrow">2021 — 2026</span>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-16 md:mt-24 md:grid-cols-12 md:gap-x-6 md:gap-y-32">
        <Reveal className="col-span-2 md:col-span-5">
          <Item work={a} onOpen={() => setOpen(a)} />
        </Reveal>
        <Reveal delay={120} className="col-span-1 md:col-span-4 md:col-start-8 md:mt-56">
          <Item work={b} onOpen={() => setOpen(b)} />
        </Reveal>
        <Reveal className="col-span-1 md:col-span-3 md:col-start-2">
          <Item work={c} onOpen={() => setOpen(c)} />
        </Reveal>
        <Reveal delay={100} className="col-span-2 md:col-span-6 md:col-start-6 md:mt-24">
          <Item work={d} onOpen={() => setOpen(d)} />
        </Reveal>
        <Reveal className="col-span-1 md:col-span-4">
          <Item work={e} onOpen={() => setOpen(e)} />
        </Reveal>
        <Reveal delay={140} className="col-span-1 md:col-span-3 md:col-start-9 md:mt-40">
          <Item work={f} onOpen={() => setOpen(f)} />
        </Reveal>
        <Reveal className="col-span-2 md:col-span-3 md:col-start-3">
          <Item work={g} onOpen={() => setOpen(g)} />
        </Reveal>
        <Reveal delay={120} className="col-span-2 self-end md:col-span-3 md:col-start-8">
          <p className="max-w-xs text-md leading-relaxed text-muted-foreground">
            Portfólio completo e projetos em andamento no Instagram do estúdio.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-5 inline-block border-b border-foreground pb-1 text-xs tracking-[0.22em] uppercase hover:border-wine hover:text-wine"
          >
            @noirtattoo
          </a>
        </Reveal>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-[2px] md:p-10"
        >
          <div
            className="flex max-h-[90vh] w-fit max-w-[90vw] flex-col items-center overflow-hidden"
            onClick={(ev) => ev.stopPropagation()}
          >
            {/* Container da imagem ajustável em proporção original */}
            <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden">
              {open.image ? (
                <Image
                  src={open.image}
                  alt={open.title}
                  className="h-full w-auto max-w-full rounded-xs object-contain"
                  style={{ maxHeight: "calc(90vh - 100px)" }}
                  priority
                />
              ) : (
                <div className="plate flex aspect-square h-64 items-end p-4">
                  <span className="eyebrow">{open.title}</span>
                </div>
              )}
            </div>

            {/* Descrição na parte inferior com largura total acompanhando o contêiner */}
            <div className="mt-4 flex w-full shrink-0 flex-wrap items-baseline justify-between gap-4 pt-2">
              <div>
                <h3 className="display text-xl md:text-2xl">{open.title}</h3>
                <p className="mt-1 max-w-md text-xs text-muted-foreground md:text-sm">
                  {open.description ?? `${open.style} — ${open.artist}`}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(null)}
                className="cursor-pointer text-xs tracking-[0.22em] text-muted-foreground uppercase hover:text-foreground"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}