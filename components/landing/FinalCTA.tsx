import type { Content } from "@/lib/content";
import { CONTACT_HREF } from "@/lib/config";

export function FinalCTA({ content }: { content: Content }) {
  const { finalCta } = content;

  return (
    <div className="final-cta">
      <div className="wrap">
        <span className="kicker" style={{ color: "var(--brand)" }}>
          {finalCta.kicker}
        </span>
        <h2 style={{ marginTop: 16 }}>{finalCta.headline}</h2>
        <p>{finalCta.body}</p>
        <div className="actions">
          <a className="btn btn-on-dark" href={CONTACT_HREF}>
            {finalCta.cta}
          </a>
          <a className="link" href="#solutions">
            {finalCta.secondary}
          </a>
        </div>
      </div>
    </div>
  );
}
