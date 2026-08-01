import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

interface PolicyPageProps {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}

export function PolicyPage({ eyebrow, title, updated, children }: PolicyPageProps) {
  return (
    <div className="min-h-screen bg-paper text-ink font-body">
      <header className="border-b border-ink/15">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
          <Link to="/" className="eyebrow">
            ← Back to Studio
          </Link>
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/gak-logo.png" alt="GAK Creations" className="h-8 w-auto" />
            <span className="font-display text-xl tracking-wide md:text-2xl">
              GAK <span className="italic font-light">Creations</span>
            </span>
          </Link>
          <span className="eyebrow hidden md:inline-block opacity-0">.</span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 md:px-12 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-6 font-display text-4xl leading-tight md:text-6xl">{title}</h1>
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-ink-soft">
          Last updated: {updated}
        </p>
        <div className="rule-line mt-8 w-16" />

        <div className="prose-policy mt-10 space-y-6 text-base leading-relaxed text-ink-soft md:text-[1.05rem]">
          {children}
        </div>
      </main>

      <footer className="bg-ink text-paper">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 py-8 text-[0.7rem] uppercase tracking-[0.25em] text-paper/50 md:px-12">
          <span>© {new Date().getFullYear()} GAK Creations</span>
          <Link to="/" className="hover:text-paper">
            Return to home →
          </Link>
        </div>
      </footer>
    </div>
  );
}

export function PolicyH2({ children }: { children: ReactNode }) {
  return <h2 className="mt-10 font-display text-2xl text-ink md:text-3xl">{children}</h2>;
}
