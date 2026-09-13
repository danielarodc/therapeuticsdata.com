import type { Content } from "@/lib/content";

export function ScientificDemo({ content }: { content: Content }) {
  const { scientificDemo } = content;

  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: 40 }}>
          <span className="kicker">{scientificDemo.kicker}</span>
          <h2>{scientificDemo.headline}</h2>
        </div>

        <div className="panel">
          <span className="badge">{scientificDemo.illustrativeLabel}</span>
          <p className="panel-subtitle" style={{ marginTop: 16, fontSize: 13 }}>
            {scientificDemo.questionLabel}
          </p>
          <p className="finding-desc" style={{ marginBottom: 0 }}>
            {scientificDemo.question}
          </p>

          <div className="metrics-row" style={{ marginTop: 24 }}>
            {scientificDemo.stats.map((s) => (
              <div className="metric-tile" key={s.label}>
                <div className="value">{s.value}</div>
                <div className="label" style={{ marginTop: 6 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="dimension-grid cols-3" style={{ marginTop: 24 }}>
            {scientificDemo.columns.map((col) => (
              <div className="dimension-card" key={col.title}>
                <h3>{col.title}</h3>
                <ul className="kpi-plain-list">
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="priority-note" style={{ marginTop: 20 }}>
            {scientificDemo.note}
          </p>
        </div>
      </div>
    </section>
  );
}
