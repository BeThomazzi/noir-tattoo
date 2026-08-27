import { studioShots } from "../data/works";
import { PhotoSlot } from "./photo-slot";
import { Reveal } from "./reveal";

export function Studio() {
  const [a, b, c, d] = studioShots;
  return (
    <section id="estudio" className="px-5 pb-28 md:px-10 md:pb-40">
      <div className="grid gap-10 md:grid-cols-12 md:gap-6">
        <Reveal className="md:col-span-7">
          <PhotoSlot ratio="landscape" src={a?.image} alt={a?.label} label={a?.label} />
        </Reveal>
        <Reveal delay={120} className="self-end md:col-span-3 md:col-start-9">
          <p className="text-md leading-relaxed text-muted-foreground">
            Uma sala, luz controlada, som baixo. O estúdio atende uma pessoa por vez — sem espera,
            sem vitrine.
          </p>
        </Reveal>
        <Reveal className="md:col-span-3 md:col-start-3 md:mt-16">
          <PhotoSlot ratio="portrait" src={b?.image} alt={b?.label} label={b?.label} />
        </Reveal>
        <Reveal delay={100} className="md:col-span-3 md:mt-40">
          <PhotoSlot ratio="square" src={c?.image} alt={c?.label} label={c?.label} />
        </Reveal>
        <Reveal delay={160} className="md:col-span-4 md:col-start-9 md:mt-8">
          <PhotoSlot ratio="landscape" src={d?.image} alt={d?.label} label={d?.label} />
        </Reveal>
      </div>
    </section>
  );
}
