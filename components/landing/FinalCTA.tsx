"use client";

import type { Content } from "@/lib/content";
import { useContactModal } from "./ContactModalContext";

export function FinalCTA({ content }: { content: Content }) {
  const { finalCta } = content;
  const { openModal } = useContactModal();

  return (
    <div className="final-cta">
      <div className="wrap">
        <span className="kicker" style={{ color: "var(--brand)" }}>
          {finalCta.kicker}
        </span>
        <h2 style={{ marginTop: 16 }}>{finalCta.headline}</h2>
        <p>{finalCta.body}</p>
        <div className="actions">
          <button type="button" className="btn btn-on-dark" onClick={openModal}>
            {finalCta.cta}
          </button>
          <a className="link" href="#solutions">
            {finalCta.secondary}
          </a>
        </div>
      </div>
    </div>
  );
}
