"use client";

import { ArrowRight } from "lucide-react";
import type { Content } from "@/lib/content";
import { SectionMarker } from "./SectionMarker";
import { DataFlowVisual } from "./DataFlowVisual";
import { useContactModal } from "./ContactModalContext";

export function Hero({ content }: { content: Content }) {
  const { hero, flow } = content;
  const { openModal } = useContactModal();

  return (
    <section className="hero" id="top">
      <div className="hero-left">
        <SectionMarker />
        <span className="kicker fade-in">{hero.kicker}</span>
        <h1 className="fade-in d1">{hero.headline}</h1>
        <p className="sub fade-in d2">{hero.sub}</p>
        <p className="sub fade-in d2">{hero.subSecondary}</p>
        <div className="hero-ctas fade-in d3">
          <button type="button" className="btn btn-primary" onClick={openModal}>
            {hero.ctaPrimary}
            <ArrowRight size={16} className="cta-arrow" aria-hidden="true" />
          </button>
          <a className="btn btn-secondary" href="#solutions">
            {hero.ctaSecondary}
          </a>
        </div>
        <p className="microcopy fade-in d3">{hero.microcopy}</p>
      </div>

      <div className="hero-right">
        <DataFlowVisual flow={flow} />
      </div>
    </section>
  );
}
