import { ListChecks, Puzzle, UserCheck } from "lucide-react";
import type { Content } from "@/lib/content";

const ICONS = [ListChecks, UserCheck, Puzzle];

export function TrustStrip({ content }: { content: Content }) {
  return (
    <div className="trust-strip">
      <div className="wrap trust-grid">
        {content.trust.map((item, i) => {
          const Icon = ICONS[i] ?? ListChecks;
          return (
            <div className="trust-item" key={item.title}>
              <h3>
                <Icon size={16} aria-hidden="true" />
                <span>{item.title}</span>
              </h3>
              <p>{item.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
