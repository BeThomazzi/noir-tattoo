import { WHATSAPP } from "./booking";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section id="contato" className="border-t border-border px-5 py-20 md:px-10 md:py-28">
      <Reveal>
        <dl className="grid gap-10 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="eyebrow">Instagram</dt>
            <dd className="mt-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-wine"
              >
                @noirtattoo
              </a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow">WhatsApp</dt>
            <dd className="mt-3">
              <a href={WHATSAPP} target="_blank" rel="noreferrer noopener" className="hover:text-wine">
                +55 11 99999-9999
              </a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow">Onde</dt>
            <dd className="mt-3 text-muted-foreground">
              Rua Harmonia, 000
              <br />
              Vila Madalena, São Paulo
            </dd>
          </div>
          <div>
            <dt className="eyebrow">Horários</dt>
            <dd className="mt-3 text-muted-foreground">
              Ter — Sáb, 12h às 20h
              <br />
              contato@noirtattoo.com
            </dd>
          </div>
        </dl>
      </Reveal>
    </section>
  );
}
