"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { BookOpen, Database, FileText, FlaskConical, FolderOpen } from "lucide-react";
import type { Content } from "@/lib/content";

const SOURCE_ICONS: Record<string, typeof Database> = {
  publications: BookOpen,
  trials: FlaskConical,
  studyData: Database,
  providerReports: FileText,
  internalData: FolderOpen,
};

type NodeStyle = {
  border: string;
  opacity: number;
  shadow?: string;
};

type Dims = {
  width: number;
  height: number;
  sourcePaths: Record<string, string>;
  outputPaths: Record<string, string>;
};

// Cubic-bezier from a node's edge (x0,y0) to the center card's edge
// (x1,y1), pulled flat at both ends so the curve visibly starts and
// ends flush against each rectangle instead of floating nearby.
function edgePath(x0: number, y0: number, x1: number, y1: number) {
  const midX = (x0 + x1) / 2;
  return `M${x0} ${y0} C ${midX} ${y0}, ${midX} ${y1}, ${x1} ${y1}`;
}

export function DataFlowVisual({ flow }: { flow: Content["flow"] }) {
  const [active, setActive] = useState<string | null>(null);
  const [dims, setDims] = useState<Dims | null>(null);

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const centerRef = useRef<HTMLDivElement | null>(null);
  const sourceRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const outputRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const center = centerRef.current;
    if (!wrap || !center) return;

    function measure() {
      const wrap = wrapRef.current;
      const center = centerRef.current;
      if (!wrap || !center) return;
      const wrapRect = wrap.getBoundingClientRect();
      const centerRect = center.getBoundingClientRect();
      if (wrapRect.width === 0 || wrapRect.height === 0) return;

      const centerLeftX = centerRect.left - wrapRect.left;
      const centerRightX = centerRect.right - wrapRect.left;
      const centerMidY = centerRect.top - wrapRect.top + centerRect.height / 2;

      const sourcePaths: Record<string, string> = {};
      for (const s of flow.sources) {
        const el = sourceRefs.current[s.id];
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const x0 = r.right - wrapRect.left;
        const y0 = r.top - wrapRect.top + r.height / 2;
        sourcePaths[s.id] = edgePath(x0, y0, centerLeftX, centerMidY);
      }

      const outputPaths: Record<string, string> = {};
      for (const o of flow.outputs) {
        const el = outputRefs.current[o.id];
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const x1 = r.left - wrapRect.left;
        const y1 = r.top - wrapRect.top + r.height / 2;
        outputPaths[o.id] = edgePath(centerRightX, centerMidY, x1, y1);
      }

      setDims({ width: wrapRect.width, height: wrapRect.height, sourcePaths, outputPaths });
    }

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wrap);
    window.addEventListener("resize", measure);
    document.fonts?.ready?.then(measure).catch(() => {});

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [flow]);

  const isSource = flow.sources.some((s) => s.id === active);
  const isOutput = flow.outputs.some((o) => o.id === active);

  const activeSource = isSource ? flow.sources.find((s) => s.id === active) : undefined;
  const activeOutput = isOutput ? flow.outputs.find((o) => o.id === active) : undefined;

  const relatedIds = useMemo(() => {
    if (activeSource) return new Set(activeSource.outputs);
    if (activeOutput) return new Set(activeOutput.sources);
    return new Set<string>();
  }, [activeSource, activeOutput]);

  function pick(id: string) {
    setActive((cur) => (cur === id ? null : id));
  }

  function sourceNodeStyle(id: string): NodeStyle {
    const isActive = active === id;
    const dim = active !== null && !isActive && !(isOutput && relatedIds.has(id));
    return {
      border: isActive ? "var(--brand-dark)" : "var(--border)",
      opacity: dim ? 0.32 : 1,
      shadow: isActive ? "0 6px 16px -8px rgba(0,112,112,.35)" : "none",
    };
  }

  function outputNodeStyle(id: string): NodeStyle & { bg: string } {
    const isActive = active === id;
    const lit = isActive || (isSource && relatedIds.has(id));
    const dim = active !== null && !isActive && !lit;
    return {
      bg: lit ? "var(--brand-soft)" : "var(--brand-faint)",
      border: isActive ? "var(--brand-dark)" : "var(--brand-soft)",
      opacity: dim ? 0.32 : 1,
    };
  }

  function sourcePathStyle(id: string) {
    const lit = active === id || (isOutput && relatedIds.has(id));
    return {
      stroke: lit ? "#007070" : "#D9DEE3",
      strokeWidth: lit ? 2 : 1.4,
      opacity: active ? (lit ? 1 : 0.15) : 0.6,
    };
  }

  function outputPathStyle(id: string) {
    const lit = active === id || (isSource && relatedIds.has(id));
    return {
      stroke: lit ? "#007070" : "#B9DEDC",
      strokeWidth: lit ? 2 : 1.4,
      opacity: active ? (lit ? 1 : 0.15) : 0.6,
    };
  }

  const panelItem = activeSource ?? activeOutput;
  const relatedLabel = activeSource ? flow.relatedLabelSource : flow.relatedLabelOutput;
  const relatedItems = activeSource
    ? activeSource.outputs.map((id) => flow.outputs.find((o) => o.id === id)?.label).filter(Boolean)
    : activeOutput
      ? activeOutput.sources.map((id) => flow.sources.find((s) => s.id === id)?.label).filter(Boolean)
      : [];

  return (
    <div>
      <div className="flow-title">{flow.title}</div>

      <div className="flow-col-labels" aria-hidden="true">
        <span>{flow.colLeft}</span>
        <span className="center" />
        <span className="right">{flow.colRight}</span>
      </div>

      <div className="flow-wrap" ref={wrapRef}>
        {dims && (
          <svg
            width="100%"
            height={dims.height}
            viewBox={`0 0 ${dims.width} ${dims.height}`}
            style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
            aria-hidden="true"
            className="hidden lg:block"
          >
            {flow.sources.map((s) => {
              const d = dims.sourcePaths[s.id];
              if (!d) return null;
              const style = sourcePathStyle(s.id);
              return (
                <path
                  key={s.id}
                  d={d}
                  fill="none"
                  stroke={style.stroke}
                  strokeWidth={style.strokeWidth}
                  opacity={style.opacity}
                  style={{ transition: "stroke .18s ease, opacity .18s ease" }}
                />
              );
            })}
            {flow.outputs.map((o) => {
              const d = dims.outputPaths[o.id];
              if (!d) return null;
              const style = outputPathStyle(o.id);
              return (
                <path
                  key={o.id}
                  d={d}
                  fill="none"
                  stroke={style.stroke}
                  strokeWidth={style.strokeWidth}
                  opacity={style.opacity}
                  style={{ transition: "stroke .18s ease, opacity .18s ease" }}
                />
              );
            })}
          </svg>
        )}

        <div className="flow-grid">
          <div className="flow-nodes">
            {flow.sources.map((s) => {
              const Icon = SOURCE_ICONS[s.id] ?? Database;
              const style = sourceNodeStyle(s.id);
              return (
                <button
                  type="button"
                  className="flow-node"
                  key={s.id}
                  ref={(el) => {
                    sourceRefs.current[s.id] = el;
                  }}
                  onClick={() => pick(s.id)}
                  aria-pressed={active === s.id}
                  style={{ borderColor: style.border, opacity: style.opacity, boxShadow: style.shadow }}
                >
                  <Icon size={15} aria-hidden="true" />
                  <span>{s.label}</span>
                </button>
              );
            })}
          </div>

          <div
            className="flow-center"
            ref={centerRef}
            style={{
              borderColor: active ? "var(--brand-dark)" : "var(--border)",
              boxShadow: active ? "0 10px 24px -10px rgba(0,112,112,.32)" : undefined,
            }}
          >
            <div>
              Therapeutics <span>Data</span>
            </div>
          </div>

          <div className="flow-nodes align-end">
            {flow.outputs.map((o) => {
              const style = outputNodeStyle(o.id);
              return (
                <button
                  type="button"
                  className="flow-out"
                  key={o.id}
                  ref={(el) => {
                    outputRefs.current[o.id] = el;
                  }}
                  onClick={() => pick(o.id)}
                  aria-pressed={active === o.id}
                  style={{ background: style.bg, borderColor: style.border, opacity: style.opacity }}
                >
                  {o.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flow-panel">
        {panelItem ? (
          <>
            <div className="flow-panel-head">
              <span className="flow-panel-dot" aria-hidden="true" />
              <span className="flow-panel-label">{panelItem.label}</span>
            </div>
            <p className="flow-panel-desc">{panelItem.desc}</p>
            <div className="flow-panel-row">
              <span className="flow-panel-row-label">{flow.controlsLabel}</span>
              {panelItem.controls.map((c) => (
                <span className="chip" key={c}>
                  {c}
                </span>
              ))}
            </div>
            <div className="flow-panel-row">
              <span className="flow-panel-row-label">{relatedLabel}</span>
              {relatedItems.map((label) => (
                <span className="chip ghost" key={label}>
                  {label}
                </span>
              ))}
            </div>
            <div className="flow-panel-example">
              <span className="example-tag">{flow.exampleTag}</span>
              <span>{panelItem.example}</span>
            </div>
          </>
        ) : (
          <p className="flow-panel-hint">{flow.hint}</p>
        )}
      </div>
    </div>
  );
}
