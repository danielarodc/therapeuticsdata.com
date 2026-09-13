import { useState } from "react";
import type { Content } from "@/lib/content";
import { demoStudy, demoKpis } from "@/lib/demo-data";

const VIEW_W = 600;
const VIEW_H = 210;
const MARGIN = { top: 14, right: 16, bottom: 34, left: 42 };
const PLOT_W = VIEW_W - MARGIN.left - MARGIN.right;
const PLOT_H = VIEW_H - MARGIN.top - MARGIN.bottom;
const Y_MAX = 40;
const Y_TICKS = [0, 10, 20, 30, 40];

export function DemoTrendChart({ content }: { content: Content }) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const { trendChart, siteChart } = content.demo;
  const weekTick = trendChart.weekLabel.charAt(0).toUpperCase();

  const values = demoStudy.queryTrend.map((p) => p.agedQueries);
  const points = values.map((v, i) => ({
    x: MARGIN.left + (i / (values.length - 1)) * PLOT_W,
    y: MARGIN.top + PLOT_H - (v / Y_MAX) * PLOT_H,
    v,
  }));
  const last = points[points.length - 1];

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x} ${p.y}`).join(" ");
  const areaPath = `${linePath} L${last.x} ${MARGIN.top + PLOT_H} L${points[0].x} ${MARGIN.top + PLOT_H} Z`;

  const labeledIndices = new Set([0, Math.floor((values.length - 1) / 2), values.length - 1]);

  function handlePointer(e: React.PointerEvent<SVGSVGElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const scale = rect.width / VIEW_W;
    const localX = (e.clientX - rect.left) / scale;
    let nearest = 0;
    let best = Infinity;
    points.forEach((p, i) => {
      const d = Math.abs(p.x - localX);
      if (d < best) {
        best = d;
        nearest = i;
      }
    });
    setHoverIndex(nearest);
  }

  const hovered = hoverIndex !== null ? points[hoverIndex] : null;

  return (
    <div className="trendchart">
      <div className="trendchart-plot">
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          style={{ width: "100%", height: "auto", display: "block" }}
          onPointerMove={handlePointer}
          onPointerLeave={() => setHoverIndex(null)}
          role="img"
          aria-label={`${trendChart.currentLabel}: ${last.v}`}
        >
          {Y_TICKS.map((t) => {
            const y = MARGIN.top + PLOT_H - (t / Y_MAX) * PLOT_H;
            return (
              <g key={t}>
                <line
                  x1={MARGIN.left}
                  x2={VIEW_W - MARGIN.right}
                  y1={y}
                  y2={y}
                  stroke="var(--border)"
                  strokeWidth={1}
                />
                <text x={MARGIN.left - 8} y={y + 3} textAnchor="end" className="trendchart-axis-label">
                  {t}
                </text>
              </g>
            );
          })}

          {points.map((p, i) =>
            labeledIndices.has(i) ? (
              <text
                key={i}
                x={p.x}
                y={VIEW_H - 20}
                textAnchor={i === 0 ? "start" : i === points.length - 1 ? "end" : "middle"}
                className="trendchart-axis-label"
              >
                {weekTick}
                {i + 1}
              </text>
            ) : null
          )}

          <text
            x={MARGIN.left + PLOT_W / 2}
            y={VIEW_H - 4}
            textAnchor="middle"
            className="trendchart-axis-title"
          >
            {trendChart.weekLabel}
          </text>
          <text
            x={-(MARGIN.top + PLOT_H / 2)}
            y={12}
            textAnchor="middle"
            transform="rotate(-90)"
            className="trendchart-axis-title"
          >
            {trendChart.axisLabel}
          </text>

          <path d={areaPath} fill="var(--brand-dark)" opacity={0.08} stroke="none" />
          <path d={linePath} fill="none" stroke="var(--brand-dark)" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />

          {hovered && (
            <line
              x1={hovered.x}
              x2={hovered.x}
              y1={MARGIN.top}
              y2={MARGIN.top + PLOT_H}
              stroke="var(--muted)"
              strokeWidth={1}
            />
          )}
          {hovered && hoverIndex !== points.length - 1 && (
            <circle cx={hovered.x} cy={hovered.y} r={4} fill="var(--brand-dark)" stroke="var(--surface)" strokeWidth={2} />
          )}

          <circle cx={last.x} cy={last.y} r={5} fill="var(--brand-dark)" stroke="var(--surface)" strokeWidth={2} />
        </svg>

        <div
          className="trendchart-annotation"
          style={{ left: `${(last.x / VIEW_W) * 100}%`, top: `${(last.y / VIEW_H) * 100}%` }}
        >
          <span className="trendchart-annotation-value">{last.v}</span>
          <span className="trendchart-annotation-label">{trendChart.currentLabel}</span>
          <span className="trendchart-annotation-delta">
            +{demoKpis.agedQueriesNew} {trendChart.deltaLabel}
          </span>
        </div>

        {hovered && hoverIndex !== points.length - 1 && (
          <div
            className="trendchart-tooltip"
            style={{ left: `${(hovered.x / VIEW_W) * 100}%`, top: `${(hovered.y / VIEW_H) * 100}%` }}
            role="tooltip"
          >
            {trendChart.weekLabel} {hoverIndex! + 1} — <b>{hovered.v}</b> {siteChart.countUnit}
          </div>
        )}
      </div>
    </div>
  );
}
