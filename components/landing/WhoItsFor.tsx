import type { Content } from "@/lib/content";

export function WhoItsFor({ content }: { content: Content }) {
  const { whoItsFor } = content;

  return (
    <section className="section section-soft" id="who">
      <div className="wrap">
        <div className="section-head">
          <h2>{whoItsFor.headline}</h2>
          <p>{whoItsFor.intro}</p>
        </div>

        <div className="resource-grid">
          {whoItsFor.profiles.map((profile) => (
            <div className="resource-card" key={profile.title}>
              <h3>{profile.title}</h3>
              <p>{profile.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
