/**
 * GitHub Contribution Data for anth-volk
 * Source: GitHub GraphQL API and REST API
 * Data retrieved: January 6, 2026
 * Profile: https://github.com/anth-volk
 */

export const githubProfile = {
  username: "anth-volk",
  profileUrl: "https://github.com/anth-volk",
  dataRetrieved: "January 6, 2026",
};

export const apiSources = {
  graphql: "https://docs.github.com/en/graphql",
  rest: "https://docs.github.com/en/rest",
  query: "gh api search/issues?q=author:anth-volk+org:PolicyEngine+type:pr",
};

// Overall contribution summary
export const contributionSummary = {
  totalPRsAllTime: 666,
  totalReposContributed: 17,
  year2023: {
    pullRequests: 38,
  },
  year2024: {
    totalContributions: 2987,
    commits: 1737,
    pullRequests: 378,
    codeReviews: 206,
    issues: 670,
  },
  year2025: {
    totalContributions: 3612,
    commits: 2386,
    pullRequests: 262,
    codeReviews: 226,
    issues: 635,
  },
  lastYear: {
    totalContributions: 3595,
    commits: 2380,
    pullRequests: 254,
    codeReviews: 222,
    issues: 630,
  },
};

// Year-over-year growth
export const yearOverYearGrowth = {
  totalContributions: {
    change: 625,
    percentChange: 21,
  },
  commits: {
    change: 649,
    percentChange: 37,
  },
  codeReviews: {
    change: 20,
    percentChange: 10,
  },
};

// Repository breakdown - 2025 (ALL repos, no "Other" category)
export const repos2025 = [
  { name: "policyengine-app-v2", prs: 98, focus: "Core frontend v2 development" },
  { name: "policyengine-api", prs: 52, focus: "Backend infrastructure" },
  { name: "policyengine-household-api", prs: 30, focus: "Household calculations" },
  { name: "policyengine-api-v2", prs: 24, focus: "Next-gen simulations API" },
  { name: "policyengine-app", prs: 23, focus: "Legacy app maintenance" },
  { name: "policyengine-us", prs: 12, focus: "US tax-benefit rules" },
  { name: "policyengine.py", prs: 10, focus: "Python library" },
  { name: "uk-autumn-budget-dashboard", prs: 3, focus: "UK policy tools" },
  { name: "policyengine-us-data", prs: 3, focus: "US microdata processing" },
  { name: "policyengine-api-v2-alpha", prs: 3, focus: "Experimental API work" },
  { name: "policyengine-uk", prs: 1, focus: "UK tax-benefit rules" },
  { name: "policyengine-core", prs: 1, focus: "Core simulation engine" },
  { name: "microdf", prs: 1, focus: "Data analysis library" },
  { name: "household-api-analytics", prs: 1, focus: "Analytics dashboard" },
];

// Repository breakdown - 2024 (ALL repos)
export const repos2024 = [
  { name: "policyengine-app", prs: 153, focus: "Frontend application" },
  { name: "policyengine-api", prs: 55, focus: "Backend infrastructure" },
  { name: "policyengine-us", prs: 32, focus: "US tax-benefit rules" },
  { name: "policyengine-household-api", prs: 32, focus: "Household calculations" },
  { name: "policyengine-it", prs: 21, focus: "Italy tax-benefit rules" },
  { name: "policyengine-us-data", prs: 19, focus: "US microdata processing" },
  { name: "policyengine-uk", prs: 17, focus: "UK tax-benefit rules" },
  { name: "policyengine-core", prs: 17, focus: "Core simulation engine" },
  { name: "household-api-analytics", prs: 11, focus: "Analytics dashboard" },
  { name: "policyengine-api-demo", prs: 3, focus: "API demo application" },
  { name: "givecalc", prs: 3, focus: "Charitable giving calculator" },
  { name: "microdf", prs: 2, focus: "Data analysis library" },
  { name: "uk-2024-manifestos-comparison", prs: 1, focus: "UK election analysis" },
];

// Repository breakdown - 2023
export const repos2023 = [
  { name: "policyengine-app", prs: 13, focus: "Frontend application" },
  { name: "policyengine-api", prs: 13, focus: "Backend infrastructure" },
  { name: "policyengine-household-api", prs: 9, focus: "Household calculations" },
  { name: "policyengine-us", prs: 3, focus: "US tax-benefit rules" },
];

// For charts - ALL repos combined (no "Other" category)
export const repoChartData = [
  { name: "policyengine-app", value: 105, year: "all-time" },
  { name: "policyengine-app-v2", value: 98, year: "all-time" },
  { name: "policyengine-api", value: 85, year: "all-time" },
  { name: "policyengine-household-api", value: 44, year: "all-time" },
  { name: "policyengine-us", value: 43, year: "all-time" },
  { name: "policyengine-api-v2", value: 24, year: "all-time" },
  { name: "policyengine-us-data", value: 22, year: "all-time" },
  { name: "policyengine-it", value: 21, year: "all-time" },
  { name: "policyengine-uk", value: 17, year: "all-time" },
  { name: "policyengine-core", value: 17, year: "all-time" },
  { name: "policyengine.py", value: 10, year: "all-time" },
  { name: "household-api-analytics", value: 12, year: "all-time" },
  { name: "uk-autumn-budget-dashboard", value: 3, year: "all-time" },
  { name: "policyengine-api-v2-alpha", value: 3, year: "all-time" },
  { name: "microdf", value: 3, year: "all-time" },
  { name: "givecalc", value: 3, year: "all-time" },
  { name: "uk-2024-manifestos-comparison", value: 1, year: "all-time" },
];

// Key achievements - specific and measurable
export const keyAchievements = {
  appV2Leadership: {
    title: "Leading PolicyEngine App v2 development",
    description: "Primary developer driving the ground-up rebuild of PolicyEngine's core frontend application",
    metrics: "98 PRs in 2025 alone",
    impact: "Building the next generation of PolicyEngine's user-facing product",
  },
  apiV2Migration: {
    title: "Society-wide simulations API migration",
    description: "Contributing to the migration of society-wide simulations to the new api-v2 architecture",
    metrics: "24 PRs to api-v2 in 2025",
    impact: "Enabling faster, more scalable policy simulations",
  },
  apiCostReduction: {
    title: "API cost reduction via auto-untagging",
    description: "Implemented automatic untagging of deprecated API versions to reduce cloud costs",
    repo: "policyengine-api-v2",
    impact: "Reduced infrastructure costs by removing unused resources",
  },
};

// Growth intentions for future development
export const growthIntentions = {
  technicalGrowth: {
    title: "Advanced technical concepts",
    areas: [
      "Parallelization and concurrent processing",
      "Multithreading for compute-intensive simulations",
      "Concurrency patterns for API scalability",
    ],
  },
  strategicLeadership: {
    title: "Strategic & architectural leadership",
    areas: [
      "System design and architecture decisions",
      "Technical roadmap planning",
      "Cross-team technical coordination",
    ],
  },
  teamLeadership: {
    title: "Team leadership",
    areas: [
      "Currently leading Sakshi's development work",
      "Positioned to mentor additional junior developers",
      "Code review and knowledge transfer",
    ],
  },
};

// Technical breadth
export const technicalBreadth = {
  frontend: ["React", "TypeScript", "Vite", "Next.js"],
  backend: ["Python", "Flask", "FastAPI"],
  infrastructure: ["GCP", "Docker", "Terraform", "CI/CD", "Vercel"],
  data: ["Microsimulation datasets", "Hugging Face"],
  domain: ["US tax-benefit systems", "UK tax-benefit systems", "Italy tax-benefit systems"],
};

// Contribution type breakdown (for pie/bar chart)
export const contributionTypes = [
  { type: "Commits", count: 2380, color: "#319795" },
  { type: "Pull Requests", count: 254, color: "#2C7A7B" },
  { type: "Code Reviews", count: 222, color: "#38B2AC" },
  { type: "Issues", count: 630, color: "#4FD1C5" },
];

// Year comparison for chart
export const yearComparisonData = [
  {
    metric: "Total Contributions",
    year2024: 2987,
    year2025: 3612,
  },
  {
    metric: "Commits",
    year2024: 1737,
    year2025: 2386,
  },
  {
    metric: "Pull Requests",
    year2024: 378,
    year2025: 262,
  },
  {
    metric: "Code Reviews",
    year2024: 206,
    year2025: 226,
  },
];
