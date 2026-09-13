import { ArrowRight, Check } from "lucide-react";
import type { Content } from "@/lib/content";
import { CONTACT_HREF } from "@/lib/config";

export function SmallStart({ content }: { content: Content }) {
  const { smallStart } = content;

  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{smallStart.kicker}</span>
          <h2>{smallStart.headline}</h2>
          <p>{smallStart.text}</p>
        </div>

        <div className="small-start-grid">
          {smallStart.items.map((item) => (
            <div className="small-start-card" key={item.label}>
              <div className="label">{item.label}</div>
              <p className="text">{item.text}</p>
              <div className="receives-label">{smallStart.receivesLabel}</div>
              <ul>
                {item.receives.map((r) => (
                  <li key={r}>
                    <Check size={14} aria-hidden="true" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40 }}>
          <a className="btn btn-primary" href={CONTACT_HREF}>
            {smallStart.cta}
            <ArrowRight size={16} className="cta-arrow" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
