"use client";

import { useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { Content } from "@/lib/content";
import { demoStudy } from "@/lib/demo-data";

export function KPISection({ content }: { content: Content }) {
  const { kpiSection, demo } = content;
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  function openDetail(i: number) {
    if (detailsRef.current) detailsRef.current.open = true;
    itemRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <section className="section section-soft">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{kpiSection.kicker}</span>
          <h2>{kpiSection.headline}</h2>
          <p>{kpiSection.text}</p>
        </div>

        <div className="kpi-context">
          <span>{demoStudy.id}</span>
          <span className="kpi-context-sep" aria-hidden="true">
            ·
          </span>
          <span>{demo.studyLabel}</span>
          <span className="kpi-context-sep" aria-hidden="true">
            ·
          </span>
          <span>{demo.dataCut}</span>
          <span className="kpi-context-sep" aria-hidden="true">
            ·
          </span>
          <span className="kpi-context-pill">{demo.syntheticLabel}</span>
        </div>

        <div className="dimension-grid cols-2">
          {kpiSection.items.map((item, i) => (
            <div className="kpi-card" key={item.title}>
              <h3>{item.title}</h3>
              <div className="kpi-value">{item.value}</div>
              {item.context && <div className="kpi-context-line">{item.context}</div>}
              {item.delta && <div className={`kpi-delta ${item.deltaTone ?? ""}`}>{item.delta}</div>}
              <p className="kpi-summary">{item.summary}</p>
              <button type="button" className="kpi-how-link" onClick={() => openDetail(i)}>
                {kpiSection.ctaLabel}
                <ArrowRight size={14} aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>

        <details className="definitions" ref={detailsRef}>
          <summary>
            {kpiSection.accordionTitle}
            <ChevronDown size={15} aria-hidden="true" />
          </summary>
          <div className="definitions-list">
            {kpiSection.items.map((item, i) => (
              <div
                className="definitions-item"
                key={item.title}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
              >
                <h5>{item.title}</h5>

                {item.glossary && (
                  <p className="kpi-glossary">
                    <b>{item.glossary.term}:</b> {item.glossary.body}
                  </p>
                )}

                <div className="kpi-label">{kpiSection.labels.whatItMeasures}</div>
                <p>{item.whatItMeasures}</p>

                <div className="kpi-label">{kpiSection.labels.calculation}</div>
                <div className="formula">
                  {item.calculation.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
                {item.calcNote && <p className="kpi-note">{item.calcNote}</p>}

                {item.secondaryCalculation?.map((sec) => (
                  <div key={sec.label}>
                    <div className="kpi-label">{sec.label}</div>
                    <div className="formula">
                      {sec.lines.map((line) => (
                        <div key={line}>{line}</div>
                      ))}
                    </div>
                  </div>
                ))}

                {item.example && (
                  <>
                    <div className="kpi-label">{kpiSection.labels.example}</div>
                    <div className="formula">
                      {item.example.map((line) => (
                        <div key={line}>{line}</div>
                      ))}
                    </div>
                  </>
                )}

                {item.explanationNote && <p className="kpi-note">{item.explanationNote}</p>}
              </div>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
