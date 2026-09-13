// Synthetic demo dataset for the "sample deliverable" dashboard.
// All values are fictional and designed to reconcile with each other
// (site-level breakdowns sum to the top-line KPIs) so the demo holds up
// to scrutiny from a data-literate visitor. See DEMO_RULES for the
// illustrative thresholds used to derive site status.

export type ReviewPriority = "high" | "medium" | "low";

export type FindingCategory =
  | "completeness"
  | "consistency"
  | "chronology"
  | "reconciliation"
  | "agedQuery";

export type FindingStatus = "open" | "inReview";

export type SiteStatus = "review" | "watch" | "stable";

export type ProviderStatus = "onTime" | "late" | "pending";

export type ProviderDelivery = {
  id: string;
  lastDelivery: string;
  status: ProviderStatus;
};

export type SiteMetric = {
  id: string;
  activeParticipants: number;
  formsCompletePct: number; // 0-1
  entryLagDaysMedian: number;
  agedQueries: number; // open >14 days
  agedQueriesPer100Forms: number;
  externalDiscrepancies: number;
  status: SiteStatus;
};

export type Finding = {
  id: string;
  priority: ReviewPriority;
  category: FindingCategory;
  siteId: string;
  participantId: string | null;
  ageDays: number;
  status: FindingStatus;
};

export type TrendPoint = {
  week: number;
  agedQueries: number;
};

export const DEMO_RULES = {
  agedQueryDays: 14,
  lowFormCompletionPct: 0.9,
  highEntryLagDays: 3,
  highExternalDiscrepancies: 4,
};

// Threshold used specifically by the "aged queries by site" chart to flag a
// site for review — narrower than DEMO_RULES (which also folds in form
// completion, entry lag and discrepancies for the Sites tab's overall status).
export const SITE_QUERY_REVIEW_THRESHOLD = {
  agedQueries: 10,
  ratePer100Forms: 3.0,
};

export const demoStudy = {
  id: "TD-101",
  synthetic: true as const,

  sites: [
    {
      id: "03",
      activeParticipants: 28,
      formsCompletePct: 0.88,
      entryLagDaysMedian: 4.2,
      agedQueries: 14,
      agedQueriesPer100Forms: 3.8,
      externalDiscrepancies: 5,
      status: "review",
    },
    {
      id: "07",
      activeParticipants: 18,
      formsCompletePct: 0.91,
      entryLagDaysMedian: 2.8,
      agedQueries: 12,
      agedQueriesPer100Forms: 5.1,
      externalDiscrepancies: 3,
      status: "review",
    },
    {
      id: "11",
      activeParticipants: 31,
      formsCompletePct: 0.96,
      entryLagDaysMedian: 1.6,
      agedQueries: 8,
      agedQueriesPer100Forms: 2.4,
      externalDiscrepancies: 1,
      status: "watch",
    },
    {
      id: "02",
      activeParticipants: 22,
      formsCompletePct: 0.98,
      entryLagDaysMedian: 0.9,
      agedQueries: 3,
      agedQueriesPer100Forms: 1.0,
      externalDiscrepancies: 0,
      status: "stable",
    },
    {
      id: "09",
      activeParticipants: 16,
      formsCompletePct: 0.97,
      entryLagDaysMedian: 1.1,
      agedQueries: 2,
      agedQueriesPer100Forms: 1.3,
      externalDiscrepancies: 1,
      status: "stable",
    },
  ] satisfies SiteMetric[],

  // Sum of aged queries across all sites: 14+12+8+3+2 = 39 (matches the
  // top-line "open queries >14 days" KPI and the trend chart endpoint).
  findings: [
    {
      id: "TD-F-001",
      priority: "high",
      category: "reconciliation",
      siteId: "07",
      participantId: "045",
      ageDays: 6,
      status: "open",
    },
    {
      id: "TD-F-002",
      priority: "medium",
      category: "completeness",
      siteId: "03",
      participantId: null,
      ageDays: 8,
      status: "open",
    },
    {
      id: "TD-F-003",
      priority: "medium",
      category: "chronology",
      siteId: "11",
      participantId: "081",
      ageDays: 3,
      status: "inReview",
    },
    {
      id: "TD-F-004",
      priority: "low",
      category: "reconciliation",
      siteId: "02",
      participantId: "102",
      ageDays: 2,
      status: "open",
    },
    {
      id: "TD-F-005",
      priority: "high",
      category: "agedQuery",
      siteId: "11",
      participantId: "093",
      ageDays: 21,
      status: "open",
    },
  ] satisfies Finding[],

  // 12-week trend, ending at the current aged-query total (39). The final
  // step (35 -> 39) is the +4 reported as "new since the last cut".
  queryTrend: [
    22, 24, 23, 27, 26, 29, 28, 32, 31, 35, 35, 39,
  ].map((agedQueries, i) => ({ week: i + 1, agedQueries })) satisfies TrendPoint[],

  // Provider deliveries reviewed for the "on-time deliveries" top-line KPI —
  // 3 of 4 on time reconciles with demoKpis.onTimeDeliveriesPct below.
  providers: [
    { id: "lab", lastDelivery: "2026-08-25", status: "onTime" },
    { id: "cro", lastDelivery: "2026-08-20", status: "onTime" },
    { id: "imaging", lastDelivery: "2026-08-14", status: "late" },
    { id: "epro", lastDelivery: "2026-08-27", status: "onTime" },
  ] satisfies ProviderDelivery[],
};

// Derived, reconciled top-line KPIs — computed once here so the UI never
// hardcodes a number that could drift from the underlying dataset.
export const demoKpis = {
  formsCompletePct: 0.94, // whole-study rate; not a straight average of the site table above (that table is a filtered "sites to review" view, not every site in the study)
  formsCompleteTrendPts: 2.1,
  agedQueries: demoStudy.queryTrend[demoStudy.queryTrend.length - 1].agedQueries,
  agedQueriesNew:
    demoStudy.queryTrend[demoStudy.queryTrend.length - 1].agedQueries -
    demoStudy.queryTrend[demoStudy.queryTrend.length - 2].agedQueries,
  sitesWithFindings: new Set(demoStudy.findings.map((f) => f.siteId)).size,
  sitesWithHighPriorityFindings: new Set(
    demoStudy.findings.filter((f) => f.priority === "high").map((f) => f.siteId)
  ).size,
  onTimeDeliveries: demoStudy.providers.filter((p) => p.status === "onTime").length,
  providersTotal: demoStudy.providers.length,
};
