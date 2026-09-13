import { Cpu, UserCheck } from "lucide-react";
import type { Content } from "@/lib/content";

export function TechAI({ content }: { content: Content }) {
  const { techAI } = content;
  const labels = [techAI.labelTech, techAI.labelHuman];
  const icons = [Cpu, UserCheck];

  return (
    <section className="section section-soft">
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: 32 }}>
          <h2>{techAI.headline}</h2>
        </div>

        <div className="tech-human-grid">
          {techAI.paragraphs.map((body, i) => {
            const Icon = icons[i] ?? Cpu;
            return (
              <div className="trust-item" key={labels[i]}>
                <h3>
                  <Icon size={16} aria-hidden="true" />
                  <span>{labels[i]}</span>
                </h3>
                <p>{body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
