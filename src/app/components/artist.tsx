import artistPortrait from "@/assets/fundador.jpeg";
import { PhotoSlot } from "./photo-slot";
import { Reveal } from "./reveal";

export function Artist() {
  return (
    <section id="artista" className="px-5 py-28 md:px-10 md:py-40">
      <div className="grid gap-12 md:grid-cols-12 md:gap-6">
        <Reveal className="md:col-span-4 md:col-start-2">
          <PhotoSlot 
            ratio="portrait" 
            src={artistPortrait} 
            alt="Retrato de Ravi Alcântara, fundador e tatuador sorrindo em seu estúdio." 
            label="Retrato do artista" 
            eager // Carrega com prioridade por ser uma imagem de destaque
          />
          <p className="mt-3 eyebrow">Ravi Alcântara — fundador</p>
        </Reveal>

        <div className="md:col-span-5 md:col-start-7 md:pt-24">
          <Reveal>
            <p className="display text-[1.9rem] leading-[1.15] sm:text-4xl">
              “Antes de tatuar, eu quero entender por que você quer levar aquela imagem com você.”
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-10 max-w-md text-sm leading-relaxed text-muted-foreground">
              Comecei desenhando em papel manteiga no fundo de uma gráfica, em 2013. Abri o Noir três
              anos depois, com uma máquina emprestada e a ideia de que ninguém deveria escolher uma
              tatuagem de um catálogo. Hoje atendo com hora marcada, um projeto por período.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <dl className="mt-12 space-y-4 border-t border-border pt-6 text-sm">
              <div className="flex justify-between gap-6">
                <dt className="eyebrow">Especialidades</dt>
                <dd className="text-right text-muted-foreground">
                  Blackwork, ornamental, projetos fechados
                </dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="eyebrow">Atendimento</dt>
                <dd className="text-right text-muted-foreground">Sob agendamento, sessão única</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
