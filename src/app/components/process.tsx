import { Reveal } from "./reveal";

const steps = [
    { n: "01", t: "Conversa", d: "Você conta a ideia. Falamos de referência, tamanho e local." },
    { n: "02", t: "Ideia", d: "Definimos o que fica e o que sai. Menos costuma ser melhor." },
    { n: "03", t: "Desenho", d: "Feito para a sua anatomia. Ajustes até estar certo." },
    { n: "04", t: "Sessão", d: "Data marcada, estúdio fechado, sem plateia." },
    { n: "05", t: "Tatuagem", d: "Cicatrização acompanhada nas semanas seguintes." },
];

export function Process() {
    return (
        <section className="px-5 py-24 md:px-10 md:py-36">
            <p className="eyebrow">Como funciona</p>
            <div className="mt-12 md:mt-16 md:pl-[28%]">
                {steps.map((s, i) => (
                    <Reveal key={s.n} delay={i * 90}>
                        <div className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-t border-border py-6 md:grid-cols-[5rem_10rem_1fr] md:gap-8 md:py-8">
                        <span className="text-sm tracking-[0.2em] text-wine">{s.n}</span>
                        <span className="display text-2xl md:text-4xl">{s.t}</span>
                        <span className="col-span-2 text-md leading-relaxed text-muted-foreground md:col-span-1">
                            {s.d}
                        </span>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
