"use client";

import { useId, useState } from "react";
import { ChevronDown, TriangleAlert } from "lucide-react";
import type { Content } from "@/lib/content";
import { demoStudy, demoKpis, DEMO_RULES, type FindingStatus, type ReviewPriority } from "@/lib/demo-data";
import { DemoSiteChart } from "./DemoSiteChart";
import { DemoTrendChart } from "./DemoTrendChart";

type Tab = "study" | "sites" | "providers" | "findings";

const priorityTagClass: Record<ReviewPriority, string> = {
  high: "high",
  medium: "medium",
  low: "low",
};

const providerStatusPillClass = {
  onTime: "stable",
  late: "review",
  pending: "watch",
} as const;

export function DemoDashboard({ content }: { content: Content }) {
  const [tab, setTab] = useState<Tab>("study");
  const demo = content.demo;
  const tablistId = useId();
  const siteWord = content.htmlLang === "es" ? "Centro " : "Site ";

  const tabs: { id: Tab; label: string }[] = [
    { id: "study", label: demo.tabs.study },
    { id: "sites", label: demo.tabs.sites },
    { id: "providers", label: demo.tabs.providers },
    { id: "findings", label: demo.tabs.findings },
  ];

  return (
    <section className="section section-soft">
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: 40 }}>
          <span className="kicker">{demo.kicker}</span>
          <h2>{demo.headline}</h2>
          <p>{demo.intro}</p>
        </div>

        <div className="demo-shell">
          <div className="demo-topbar">
            <div className="demo-study">
              <span className="dot" aria-hidden="true" />
              <b>{demoStudy.id}</b>
              <span>{demo.studyLabel}</span>
            </div>

            <div className="demo-tabs" role="tablist" aria-label={demo.headline}>
              {tabs.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  id={`${tablistId}-tab-${t.id}`}
                  aria-selected={tab === t.id}
                  aria-controls={`${tablistId}-panel-${t.id}`}
                  tabIndex={tab === t.id ? 0 : -1}
                  onClick={() => setTab(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <span className="synthetic-label">
              <TriangleAlert size={12} aria-hidden="true" />
              {demo.syntheticLabel}
            </span>
          </div>

          <div className="data-cut-note">{demo.dataCut}</div>

          {tab === "study" && (
            <div
              className="demo-body"
              role="tabpanel"
              id={`${tablistId}-panel-study`}
              aria-labelledby={`${tablistId}-tab-study`}
            >
              <div className="metrics-row">
                <div className="metric-tile">
                  <div className="label">{demo.kpis.forms.label}</div>
                  <div className="value">{Math.round(demoKpis.formsCompletePct * 100)}%</div>
                  <div className="trend">{demo.kpis.forms.sub}</div>
                </div>
                <div className="metric-tile">
                  <div className="label">{demo.kpis.queries.label}</div>
                  <div className="value">{demoKpis.agedQueries}</div>
                  <div className="trend warn">{demo.kpis.queries.sub}</div>
                </div>
                <div className="metric-tile">
                  <div className="label">{demo.kpis.sites.label}</div>
                  <div className="value">{demoKpis.sitesWithFindings}</div>
                  <div className="trend warn">{demo.kpis.sites.sub}</div>
                </div>
                <div className="metric-tile">
                  <div className="label">{demo.kpis.deliveries.label}</div>
                  <div className="value">
                    {Math.round((demoKpis.onTimeDeliveries / demoKpis.providersTotal) * 100)}%
                  </div>
                  <div className="trend warn">{demo.kpis.deliveries.sub}</div>
                </div>
              </div>

              <div className="demo-main-grid">
                <div className="demo-charts-col">
                  <div className="panel">
                    <h4 className="panel-title">{demo.panels.bySite.title}</h4>
                    <p className="panel-subtitle">{demo.panels.bySite.subtitle}</p>
                    <DemoSiteChart content={content} />
                  </div>

                  <div className="panel">
                    <h4 className="panel-title">{demo.panels.trend.title}</h4>
                    <DemoTrendChart content={content} />
                  </div>
                </div>

                <div className="panel">
                  <h4>{demo.panels.findings.toUpperCase()}</h4>
                  <div className="issue-list">
                    {demoStudy.findings.map((f) => (
                      <div className="issue-row" key={f.id}>
                        <span className="issue-text">{demo.findings.items[f.id].compact}</span>
                        <span className={`tag ${priorityTagClass[f.priority]}`}>
                          {demo.findings.priority[f.priority]}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="priority-note">{demo.findings.priorityNote}</p>
                </div>
              </div>

              <details className="definitions">
                <summary>
                  {demo.definitionsToggle}
                  <ChevronDown size={15} aria-hidden="true" />
                </summary>
                <div className="definitions-list">
                  {demo.definitions.map((d) => (
                    <div className="definitions-item" key={d.term}>
                      <h5>{d.term}</h5>
                      <dl>
                        <div>
                          <dt>{demo.definitionsLabels.whatItMeasures}</dt>
                          <dd>{d.whatItMeasures}</dd>
                        </div>
                        <div>
                          <dt>{demo.definitionsLabels.howCalculated}</dt>
                          <dd>{d.howCalculated}</dd>
                        </div>
                        <div>
                          <dt>{demo.definitionsLabels.source}</dt>
                          <dd>{d.source}</dd>
                        </div>
                        <div>
                          <dt>{demo.definitionsLabels.howToInterpret}</dt>
                          <dd>{d.howToInterpret}</dd>
                        </div>
                      </dl>
                    </div>
                  ))}
                </div>
              </details>

              <div className="panel" style={{ marginTop: 18 }}>
                <h4 className="panel-title">{demo.meetingQuestions.title}</h4>
                <div className="meeting-questions-list">
                  {demo.meetingQuestions.items.map((item) => (
                    <div className="meeting-questions-item" key={item.context}>
                      <div className="site">{item.context}</div>
                      <p>{item.question}</p>
                    </div>
                  ))}
                </div>
                <p className="priority-note" style={{ marginTop: 14 }}>
                  <b>{demo.meetingQuestions.glossary.term}:</b> {demo.meetingQuestions.glossary.body}
                </p>
              </div>
            </div>
          )}

          {tab === "sites" && (
            <div
              className="demo-body"
              role="tabpanel"
              id={`${tablistId}-panel-sites`}
              aria-labelledby={`${tablistId}-tab-sites`}
            >
              <div className="sites-table-wrap">
                <table className="sites-table">
                  <thead>
                    <tr>
                      {demo.sites.tableHeaders.map((h) => (
                        <th key={h}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {demoStudy.sites.map((site) => (
                      <tr key={site.id}>
                        <td>{siteWord + site.id}</td>
                        <td>{site.activeParticipants}</td>
                        <td>{Math.round(site.formsCompletePct * 100)}%</td>
                        <td>{site.entryLagDaysMedian.toLocaleString(content.htmlLang, { minimumFractionDigits: 1 })}d</td>
                        <td>{site.agedQueries}</td>
                        <td>{site.externalDiscrepancies}</td>
                        <td>
                          <span className={`status-pill ${site.status}`}>{demo.sites.status[site.status]}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="site-cards">
                {demoStudy.sites.map((site) => (
                  <div className="site-card" key={site.id}>
                    <div className="site-card-head">
                      <b>{siteWord + site.id}</b>
                      <span className={`status-pill ${site.status}`}>{demo.sites.status[site.status]}</span>
                    </div>
                    <ul>
                      <li>
                        <b>{site.activeParticipants}</b> {demo.sites.mobileLabels.participants}
                      </li>
                      <li>
                        <b>{Math.round(site.formsCompletePct * 100)}%</b> {demo.sites.mobileLabels.forms}
                      </li>
                      <li>
                        <b>{site.entryLagDaysMedian.toLocaleString(content.htmlLang, { minimumFractionDigits: 1 })}</b>{" "}
                        {demo.sites.mobileLabels.lag}
                      </li>
                      <li>
                        <b>{site.agedQueries}</b> {demo.sites.mobileLabels.queries}
                      </li>
                      <li>
                        <b>{site.externalDiscrepancies}</b> {demo.sites.mobileLabels.discrepancies}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>

              <p className="priority-note" style={{ marginTop: 20 }}>
                {content.htmlLang === "es"
                  ? `Regla ilustrativa: se marca “${demo.sites.status.review}” cuando formularios completos < ${Math.round(DEMO_RULES.lowFormCompletionPct * 100)}%, consultas >14 días ≥ 10, retraso mediano > ${DEMO_RULES.highEntryLagDays} días, o discrepancias entre fuentes ≥ ${DEMO_RULES.highExternalDiscrepancies}.`
                  : `Illustrative rule: a site is flagged “${demo.sites.status.review}” when forms complete < ${Math.round(DEMO_RULES.lowFormCompletionPct * 100)}%, queries >14 days ≥ 10, median lag > ${DEMO_RULES.highEntryLagDays} days, or cross-source discrepancies ≥ ${DEMO_RULES.highExternalDiscrepancies}.`}
              </p>
            </div>
          )}

          {tab === "providers" && (
            <div
              className="demo-body"
              role="tabpanel"
              id={`${tablistId}-panel-providers`}
              aria-labelledby={`${tablistId}-tab-providers`}
            >
              <div className="sites-table-wrap">
                <table className="sites-table">
                  <thead>
                    <tr>
                      {demo.providers.tableHeaders.map((h, i) => (
                        <th key={h} style={i === 1 ? { textAlign: "left" } : undefined}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {demoStudy.providers.map((provider) => {
                      const copy = demo.providers.items[provider.id];
                      return (
                        <tr key={provider.id}>
                          <td style={{ textAlign: "left" }}>{copy.name}</td>
                          <td style={{ textAlign: "left" }}>{copy.dataType}</td>
                          <td>
                            {new Date(provider.lastDelivery).toLocaleDateString(content.htmlLang, {
                              day: "2-digit",
                              month: "short",
                              timeZone: "UTC",
                            })}
                          </td>
                          <td>
                            <span className={`status-pill ${providerStatusPillClass[provider.status]}`}>
                              {demo.providers.status[provider.status]}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="site-cards">
                {demoStudy.providers.map((provider) => {
                  const copy = demo.providers.items[provider.id];
                  return (
                    <div className="site-card" key={provider.id}>
                      <div className="site-card-head">
                        <b>{copy.name}</b>
                        <span className={`status-pill ${providerStatusPillClass[provider.status]}`}>
                          {demo.providers.status[provider.status]}
                        </span>
                      </div>
                      <ul>
                        <li>
                          <b>{copy.dataType}</b> — {demo.providers.mobileLabels.dataType}
                        </li>
                        <li>
                          <b>
                            {new Date(provider.lastDelivery).toLocaleDateString(content.htmlLang, {
                              day: "2-digit",
                              month: "short",
                              timeZone: "UTC",
                            })}
                          </b>{" "}
                          {demo.providers.mobileLabels.lastDelivery}
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>

              <p className="priority-note" style={{ marginTop: 20 }}>
                {demo.providers.note}
              </p>
            </div>
          )}

          {tab === "findings" && (
            <div
              className="demo-body"
              role="tabpanel"
              id={`${tablistId}-panel-findings`}
              aria-labelledby={`${tablistId}-tab-findings`}
            >
              <div className="findings-cards">
                {demoStudy.findings.map((f) => {
                  const copy = demo.findings.items[f.id];
                  return (
                    <div className="finding-card" key={f.id}>
                      <div className="finding-card-head">
                        <span className="finding-id">{f.id}</span>
                        <span className={`tag ${priorityTagClass[f.priority]}`}>{demo.findings.priority[f.priority]}</span>
                      </div>
                      <p className="finding-desc">{copy.description}</p>
                      <div className="finding-meta">
                        <div>
                          <span>{demo.findings.tableHeaders[2]}</span>
                          <span>{demo.findings.category[f.category]}</span>
                        </div>
                        <div>
                          <span>{demo.findings.tableHeaders[3]}</span>
                          <span>{siteWord + f.siteId}</span>
                        </div>
                        <div>
                          <span>{demo.findings.tableHeaders[4]}</span>
                          <span>{f.participantId ?? "—"}</span>
                        </div>
                        <div>
                          <span>{demo.findings.tableHeaders[5]}</span>
                          <span>
                            {f.ageDays} {content.htmlLang === "es" ? "días" : "days"}
                          </span>
                        </div>
                        <div>
                          <span>{demo.findings.tableHeaders[6]}</span>
                          <span>{demo.findings.status[f.status as FindingStatus]}</span>
                        </div>
                        <div>
                          <span>{content.htmlLang === "es" ? "Fuente" : "Source"}</span>
                          <span>{copy.source}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="priority-note" style={{ marginTop: 20 }}>
                {demo.findings.priorityNote}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
