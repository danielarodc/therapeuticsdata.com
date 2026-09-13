import type { Content } from "@/lib/content";

export function ResourcesSection({ content }: { content: Content }) {
  const { resources } = content;

  return (
    <section className="section section-soft" id="resources">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{resources.kicker}</span>
          <h2>{resources.headline}</h2>
          <p>{resources.body}</p>
        </div>

        <div className="resource-grid">
          {resources.items.map((item) => (
            <div className="resource-card" key={item.title}>
              <span className="badge">{resources.badge}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
