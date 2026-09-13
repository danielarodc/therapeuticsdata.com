import { ArrowRight, ClipboardCheck, FileText, UsersRound } from "lucide-react";
import type { Content } from "@/lib/content";

const ICONS = [FileText, ClipboardCheck, UsersRound];

export function HowWeComplement({ content }: { content: Content }) {
  const { complement } = content;

  return (
    <section className="section section-compact">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{complement.kicker}</span>
          <h2>{complement.headline}</h2>
          <p>{complement.text}</p>
        </div>

        <div className="dimension-grid cols-3">
          {complement.cards.map((card, i) => {
            const Icon = ICONS[i] ?? FileText;
            return (
              <div className="complement-card" key={card.title}>
                <Icon className="complement-card-icon" size={22} aria-hidden="true" />
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <ul className="kpi-plain-list">
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {card.cta && (
                  <a className="product-link" href="#solutions">
                    {card.cta}
                    <ArrowRight size={15} aria-hidden="true" />
                  </a>
                )}
              </div>
            );
          })}
        </div>

        <p className="scope-note">
          <b>{complement.note.lead}</b> {complement.note.body}
        </p>
      </div>
    </section>
  );
}
