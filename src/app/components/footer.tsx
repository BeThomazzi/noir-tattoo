export function Footer() {
  return (
    <footer className="border-t border-border px-5 pt-12 pb-28 md:px-10 md:pb-10">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <div>
          <p className="display text-3xl tracking-[0.14em] uppercase">Noir Tattoo</p>
          <p className="mt-3 text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Custom tattoos. Personal stories.
          </p>
        </div>
        <nav className="flex gap-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">
          <a href="#trabalhos" className="hover:text-foreground">
            Trabalhos
          </a>
          <a href="#artista" className="hover:text-foreground">
            Artista
          </a>
          <a href="#agendar" className="hover:text-foreground">
            Agendar
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-foreground"
          >
            Instagram
          </a>
        </nav>
      </div>
      <div className="flex justify-between mt-12">
        <p className=" text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
          © {new Date().getFullYear()} Noir Tattoo
        </p>
        <p className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
          Feito por <a href="https://devoxlabs.dev" target="_blank" rel="noreferrer noopener" className="hover:text-foreground">
            Bernardo Thomazzi
          </a>
        </p>
      </div>
        
    </footer>
  );
}
