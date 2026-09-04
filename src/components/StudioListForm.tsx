import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";

type Status = "idle" | "saving" | "done" | "error";

export function StudioListForm({
  source,
  variant = "full",
}: {
  source: string;
  variant?: "full" | "compact";
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "saving") return;

    setStatus("saving");
    setMessage("");

    const { error } = await supabase.from("studio_signups").insert({
      email: email.trim().toLowerCase(),
      name: name.trim() || null,
      source,
    });

    if (error) {
      const alreadyOnList = error.code === "23505";
      setStatus(alreadyOnList ? "done" : "error");
      setMessage(
        alreadyOnList
          ? "You're already on the studio list — thank you."
          : "Something went wrong. Please try again in a moment.",
      );
      if (alreadyOnList) {
        setEmail("");
        setName("");
      }
      return;
    }

    setStatus("done");
    setMessage("Thank you — you're on the studio list.");
    setEmail("");
    setName("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-xl">
      <div className="flex flex-col gap-3 sm:flex-row">
        {variant === "full" && (
          <label className="flex-1">
            <span className="sr-only">Your name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name (optional)"
              autoComplete="name"
              className="w-full border border-ink/25 bg-transparent px-4 py-3 text-sm text-ink placeholder:text-ink-soft focus:border-ink focus:outline-none"
            />
          </label>
        )}
        <label className="flex-1">
          <span className="sr-only">Email address</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            autoComplete="email"
            className="w-full border border-ink/25 bg-transparent px-4 py-3 text-sm text-ink placeholder:text-ink-soft focus:border-ink focus:outline-none"
          />
        </label>
        <button
          type="submit"
          disabled={status === "saving"}
          className="bg-ink px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-paper transition hover:bg-ink-soft disabled:opacity-60"
        >
          {status === "saving" ? "Joining…" : "Join"}
        </button>
      </div>
      <p
        role="status"
        aria-live="polite"
        className={`mt-3 min-h-5 text-xs ${status === "error" ? "text-ink" : "text-ink-soft"}`}
      >
        {message}
      </p>
    </form>
  );
}

export function StudioListSection({ source }: { source: string }) {
  return (
    <section className="border-b border-ink/15 bg-paper-warm">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-24">
        <p className="eyebrow">Studio list</p>
        <h2 className="mt-6 font-display text-4xl md:text-5xl">
          Join the <em className="font-light">studio list</em>
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
          New drawings, travel notes from Europe and the Atlantic islands, and early word on new
          prints. A few letters a year — no noise.
        </p>
        <StudioListForm source={source} />
      </div>
    </section>
  );
}
