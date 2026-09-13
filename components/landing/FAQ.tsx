"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { Content } from "@/lib/content";

export function FAQ({ content }: { content: Content }) {
  const { faq } = content;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <span className="kicker">{faq.kicker}</span>
          <h2>{faq.headline}</h2>
        </div>

        <div className="faq-list">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div className="faq-item" data-open={isOpen} key={item.q}>
                <h3 style={{ margin: 0 }}>
                  <button
                    type="button"
                    className="faq-question"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <Plus size={18} aria-hidden="true" />
                  </button>
                </h3>
                <div className="faq-answer" id={panelId} role="region" aria-labelledby={buttonId}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
