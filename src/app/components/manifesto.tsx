import { Reveal } from "./reveal";

export function Manifesto() {
    return (
        <section className="px-5 py-28 md:px-10 md:py-48">
            <div className="mx-auto max-w-5xl">
                <Reveal>
                    <p className="display text-[2rem] leading-[1.12] sm:text-5xl lg:text-[3.6rem] lg:leading-[1.08]">
                        “Uma tatuagem não precisa apenas ocupar espaço na pele.{" "}
                        <span className="text-muted-foreground italic">Ela precisa fazer sentido nela.”</span>
                    </p>
                </Reveal>
                <Reveal delay={160}>
                    <p className="mt-16 max-w-md text-sm leading-relaxed text-muted-foreground md:ml-auto">
                        Trabalhamos com poucos projetos por semana. Cada desenho nasce de uma conversa, é
                        construído sobre a anatomia de quem vai levá-lo e não se repete em outra pele.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
