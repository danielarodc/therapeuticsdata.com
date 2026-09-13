import type { Content } from "@/lib/content";
import { AreaCard } from "./AreaCard";

export function AreasSection({ content }: { content: Content }) {
  const { areas } = content;

  return (
    <section className="section section-soft" id="solutions">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{areas.kicker}</span>
          <h2>{areas.headline}</h2>
          <p>{areas.sub}</p>
        </div>

        <div className="product-grid">
          {areas.items.map((item, i) => (
            <AreaCard item={item} featured={i === 0} key={item.name} />
          ))}
        </div>

        <p className="product-note">{areas.note}</p>
      </div>
    </section>
  );
}
