"use client"
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-artist.jpg";
import Image from "next/image";

export function Hero() {
    const [ready, setReady] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setReady(true), 80);
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
        clearTimeout(t);
        window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const step = (i: number) => ({
        opacity: ready ? 1 : 0,
        transform: ready ? "none" : "translateY(24px)",
        transition: `opacity 1.1s cubic-bezier(.22,1,.36,1) ${i * 220}ms, transform 1.2s cubic-bezier(.22,1,.36,1) ${i * 220}ms`,
    });

    return (
        <header className="relative min-h-svh overflow-hidden px-5 pt-8 pb-16 md:px-10">
            <nav className="flex items-baseline justify-between">
                <span className="display text-xl tracking-[0.16em] uppercase">Noir</span>
                <div className="hidden gap-8 text-xs tracking-[0.2em] text-muted-foreground uppercase md:flex">
                    <a href="#trabalhos" className="hover:text-foreground">
                        Trabalhos
                    </a>
                    <a href="#artista" className="hover:text-foreground">
                        Artista
                    </a>
                    <a href="#estudio" className="hover:text-foreground">
                        Estúdio
                    </a>
                    <a href="#contato" className="hover:text-foreground">
                        Contato
                    </a>
                </div>
            </nav>

            <div className="grid items-center gap-10 md:mt-8 md:grid-cols-12 md:gap-6">
                <div className="md:col-span-6 md:pb-6">
                    <p className="eyebrow" style={step(0)}>
                        Tattoo • Custom • Private Studio
                    </p>
                    <h1
                        className="display mt-6 text-[3.1rem] leading-[0.92] sm:text-7xl lg:text-[5.6rem]"
                        style={step(1)}
                    >
                        Tinta que permanece.
                        <br />
                        <span className="italic text-muted-foreground">Identidade</span> que também.
                    </h1>
                    <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground" style={step(2)}>
                        Tatuagem autoral, feita com intenção e atenção aos detalhes.
                    </p>
                    <div className="mt-10 flex flex-wrap items-center gap-6" style={step(3)}>
                        <a
                            href="#trabalhos"
                            className="border-b border-foreground pb-1 text-xs tracking-[0.22em] uppercase transition-colors hover:border-wine hover:text-wine"
                        >
                            Conhecer os trabalhos
                        </a>
                        <a
                            href="#agendar"
                            className="pb-1 text-xs tracking-[0.22em] text-muted-foreground uppercase transition-colors hover:text-foreground"
                        >
                            Agendar conversa
                        </a>
                    </div>
                </div>

                <div className="md:col-span-6 md:col-start-7" style={step(0)}>
                    <Image
                        src={heroImg}
                        width={1280}
                        height={1600}
                        alt="Tatuador trabalhando no estúdio Noir"
                        fetchPriority="high"
                        className="h-[52vh] w-full object-cover object-center md:h-[76vh]"
                    />
                    <div className="mt-3 flex justify-between text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase">
                        <span>São Paulo — Vila Madalena</span>
                        <span>Est. 2016</span>
                    </div>
                </div>
            </div>

            <div
                aria-hidden
                className="pointer-events-none absolute bottom-17 left-5 text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase transition-opacity duration-700 md:left-10"
                style={{ opacity: scrolled ? 0 : 1 }}
            >
                <span className="inline-block h-8 w-px translate-y-2 bg-border align-middle" /> Role
            </div>
        </header>
    );
}
