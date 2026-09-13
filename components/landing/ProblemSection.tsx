import { FileCheck2, Layers3, TriangleAlert } from "lucide-react";
import type { Content } from "@/lib/content";

const ICONS = [Layers3, FileCheck2, TriangleAlert];

export function ProblemSection({ content }: { content: Content }) {
  const { problem, pains } = content;

  return (
    <section className="section section-dark">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{problem.kicker}</span>
          <h2>
            {problem.headlineA} <span className="accent">{problem.headlineB}</span>
          </h2>
          <div className="problem-body">
            {problem.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="pain-grid">
          {pains.map((pain, i) => {
            const Icon = ICONS[i] ?? Layers3;
            return (
              <div className="pain-card" key={pain.title}>
                <Icon className="pain-icon" size={22} aria-hidden="true" />
                <h3>{pain.title}</h3>
                <p>{pain.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
