"use client"
import { useEffect, useState } from "react";
import { WHATSAPP } from "./booking";

export function MobileBar() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-sm transition-transform duration-500 md:hidden"
        style={{ transform: show ? "none" : "translateY(100%)" }}
        >
        <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer noopener"
            className="block px-5 py-4 text-center text-xs tracking-[0.22em] uppercase"
        >
            Agendar conversa
        </a>
        </div>
    );
}
