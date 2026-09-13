import { ArrowRight, Check } from "lucide-react";
import type { Content } from "@/lib/content";

type Area = Content["areas"]["items"][number];

export function AreaCard({ item, featured }: { item: Area; featured?: boolean }) {
  return (
    <div className={`product-card${featured ? " featured" : ""}`}>
      <span className="badge">{item.badge}</span>
      <h3>{item.name}</h3>
      <p className="desc">{item.desc}</p>
      <ul>
        {item.capabilities.map((capability) => (
          <li key={capability}>
            <Check size={15} aria-hidden="true" />
            {capability}
          </li>
        ))}
      </ul>
      {item.note ? <p className="product-card-note">{item.note}</p> : null}
      <a className="product-link" href="#how-it-works">
        {item.cta}
        <ArrowRight size={15} aria-hidden="true" />
      </a>
    </div>
  );
}
