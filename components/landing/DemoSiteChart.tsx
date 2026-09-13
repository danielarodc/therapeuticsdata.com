import { useState } from "react";
import type { Content } from "@/lib/content";
import { demoStudy, SITE_QUERY_REVIEW_THRESHOLD } from "@/lib/demo-data";

const DOMAIN_MAX = 15;
const TICKS = [0, 5, 10, 15];

export function DemoSiteChart({ content }: { content: Content }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { siteChart } = content.demo;
  const isEs = content.htmlLang === "es";
  const siteWord = isEs ? "Centro" : "Site";

  const sites = [...demoStudy.sites].sort((a, b) => b.agedQueries - a.agedQueries);
  const thresholdPct = (SITE_QUERY_REVIEW_THRESHOLD.agedQueries / DOMAIN_MAX) * 100;

  return (
    <div className="dotplot">
      <div className="dotplot-legend">
        <span className="dotplot-legend-item">
          <span className="dotplot-swatch review" aria-hidden="true" />
          {siteChart.legendReview}
        </span>
        <span className="dotplot-legend-item">
          <span className="dotplot-swatch ok" aria-hidden="true" />
          {siteChart.legendOk}
        </span>
      </div>

      <div className="dotplot-rows">
        {sites.map((site) => {
          const needsReview =
            site.agedQueries >= SITE_QUERY_REVIEW_THRESHOLD.agedQueries ||
            site.agedQueriesPer100Forms > SITE_QUERY_REVIEW_THRESHOLD.ratePer100Forms;
          const pct = (site.agedQueries / DOMAIN_MAX) * 100;
          const rate = site.agedQueriesPer100Forms.toLocaleString(content.htmlLang, {
            minimumFractionDigits: 1,
          });
          const isHovered = hoveredId === site.id;

          return (
            <div
              className="dotplot-row"
              key={site.id}
              tabIndex={0}
              onMouseEnter={() => setHoveredId(site.id)}
              onMouseLeave={() => setHoveredId((v) => (v === site.id ? null : v))}
              onFocus={() => setHoveredId(site.id)}
              onBlur={() => setHoveredId((v) => (v === site.id ? null : v))}
            >
              <span className="dotplot-label">
                {siteWord} {site.id}
              </span>
              <span className="dotplot-track">
                <span className="dotplot-threshold" style={{ left: `${thresholdPct}%` }} aria-hidden="true" />
                <span
                  className={`dotplot-stem${needsReview ? " review" : ""}`}
                  style={{ width: `${pct}%` }}
                  aria-hidden="true"
                />
                <span
                  className={`dotplot-dot${needsReview ? " review" : ""}`}
                  style={{ left: `${pct}%` }}
                  aria-hidden="true"
                />
                {isHovered && (
                  <span className="dotplot-tooltip" style={{ left: `${pct}%` }} role="tooltip">
                    <b>{site.agedQueries}</b> {siteChart.countUnit} · {rate}
                    {siteChart.rateUnit}
                    {needsReview ? ` · ${siteChart.legendReview}` : ""}
                  </span>
                )}
              </span>
              <span className="dotplot-value">{site.agedQueries}</span>
              <span className="dotplot-rate">
                {rate}
                {siteChart.rateUnit}
              </span>
            </div>
          );
        })}

        <div className="dotplot-axis" aria-hidden="true">
          <span className="dotplot-label" />
          <span className="dotplot-track">
            {TICKS.map((t) => (
              <span
                key={t}
                className={`dotplot-tick${t === SITE_QUERY_REVIEW_THRESHOLD.agedQueries ? " threshold" : ""}`}
                style={{ left: `${(t / DOMAIN_MAX) * 100}%` }}
              >
                {t}
              </span>
            ))}
          </span>
          <span className="dotplot-value" />
          <span className="dotplot-rate" />
        </div>
      </div>

      <p className="dotplot-note">{siteChart.thresholdNote}</p>
    </div>
  );
}
