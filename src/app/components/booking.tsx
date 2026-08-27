import { Reveal } from "./reveal";

const WHATSAPP =
  "https://wa.me/5511999999999?text=Oi%2C%20tenho%20uma%20ideia%20de%20tatuagem%20e%20queria%20conversar.";

export function Booking() {
  return (
    <section id="agendar" className="border-t border-border px-5 py-28 md:px-10 md:py-44">
      <div className="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <h2 className="display text-[2.6rem] leading-none sm:text-6xl lg:text-[4.4rem]">
            Tem uma ideia
            <br />
            na cabeça?
          </h2>
        </Reveal>
        <Reveal delay={140} className="self-end md:col-span-4 md:col-start-9">
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Conte um pouco sobre ela. O primeiro passo é transformar a ideia em uma conversa.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-8 inline-block border-b border-foreground pb-1 text-xs tracking-[0.22em] uppercase transition-colors hover:border-wine hover:text-wine"
          >
            Solicitar orçamento
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export { WHATSAPP };
