import type { Content } from "@/lib/content";

export function HowItWorks({ content }: { content: Content }) {
  const { howItWorks } = content;

  return (
    <section className="section" id="how-it-works">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{howItWorks.kicker}</span>
          <h2>{howItWorks.headline}</h2>
        </div>

        <div className="steps-grid">
          {howItWorks.steps.map((step, i) => (
            <div className="step" key={step.title}>
              <div className="num">{String(i + 1).padStart(2, "0")}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>

        <p className="steps-note">{howItWorks.note}</p>
      </div>
    </section>
  );
}
