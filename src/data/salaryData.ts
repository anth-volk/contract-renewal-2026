/**
 * Salary Market Data
 * All figures sourced from major salary databases
 * Data retrieved: January 6, 2026
 *
 * IMPORTANT: Every salary claim must have source attribution
 */

export interface SalarySource {
  name: string;
  url: string;
  salary: number;
  notes: string;
}

export interface SalaryRange {
  percentile25: number;
  median: number;
  percentile75: number;
  source: string;
  sourceUrl: string;
}

// US National Average Data
export const usNationalSalaries: SalarySource[] = [
  {
    name: "Indeed",
    url: "https://www.indeed.com/career/full-stack-developer/salaries",
    salary: 132282,
    notes: "+ $5,500 bonus, based on 10.6k salaries, updated Dec 29, 2025",
  },
  {
    name: "Glassdoor",
    url: "https://www.glassdoor.com/Salaries/full-stack-developer-salary-SRCH_KO0,20.htm",
    salary: 132219,
    notes: "2025 average",
  },
  {
    name: "ZipRecruiter",
    url: "https://www.ziprecruiter.com/Salaries/Full-Stack-Developer-Salary",
    salary: 123262,
    notes: "As of Dec 17, 2025",
  },
  {
    name: "Coursera",
    url: "https://www.coursera.org/articles/full-stack-developer-salary",
    salary: 119000,
    notes: "Median total, Sep 2025",
  },
  {
    name: "PayScale",
    url: "https://www.payscale.com/research/US/Job=Full_Stack_Software_Developer/Salary",
    salary: 84177,
    notes: "1-4 years experience bracket",
  },
];

export const usNationalRange: SalaryRange = {
  percentile25: 91779,
  median: 123262, // Using ZipRecruiter as reference
  percentile75: 155142,
  source: "ZipRecruiter",
  sourceUrl: "https://www.ziprecruiter.com/Salaries/Full-Stack-Developer-Salary",
};

// Washington DC Data
export const dcSalaries: SalarySource[] = [
  {
    name: "Indeed DC",
    url: "https://www.indeed.com/career/full-stack-developer/salaries/Washington--DC",
    salary: 135549,
    notes: "+ $5,500 bonus, based on 238 salaries",
  },
  {
    name: "Glassdoor DC",
    url: "https://www.glassdoor.com/Salaries/washington-dc-full-stack-developer-salary-SRCH_IL.0,13_IM911_KO14,34.htm",
    salary: 128475,
    notes: "8% higher than national average",
  },
  {
    name: "Built In DC",
    url: "https://builtin.com/salaries/us/washington-dc/full-stack-developer",
    salary: 94245,
    notes: "+ $5,489 avg bonus, total $99,734",
  },
  {
    name: "PayScale DC",
    url: "https://www.payscale.com/research/US/Job=Full_Stack_Software_Developer/Salary/ca790f0f/Washington-DC",
    salary: 82938,
    notes: "1-4 years experience bracket, 2025",
  },
];

export const dcRange: SalaryRange = {
  percentile25: 101639,
  median: 128475,
  percentile75: 163975,
  source: "Glassdoor DC",
  sourceUrl:
    "https://www.glassdoor.com/Salaries/washington-dc-full-stack-developer-salary-SRCH_IL.0,13_IM911_KO14,34.htm",
};

// Your current and target rates
// Note: 2,000 hours/year assumes 50 working weeks (52 weeks - 2 weeks vacation)
export const currentRate = {
  hourly: 42.5,
  annual: 85000, // Based on 2000 hours (includes 2 weeks vacation)
  hoursPerYear: 2000,
  vacationWeeks: 2,
};

export const targetRate = {
  hourlyMin: 49.5,
  hourlyMax: 53.5,
  annualMin: 99000,
  annualMax: 107000,
};

// Calculated comparisons
export const comparisons = {
  currentVsNational25th: {
    difference: usNationalRange.percentile25 - currentRate.annual,
    percentBelow:
      ((usNationalRange.percentile25 - currentRate.annual) /
        usNationalRange.percentile25) *
      100,
  },
  currentVsDC25th: {
    difference: dcRange.percentile25 - currentRate.annual,
    percentBelow:
      ((dcRange.percentile25 - currentRate.annual) / dcRange.percentile25) *
      100,
  },
  currentVsDCMedian: {
    difference: dcRange.median - currentRate.annual,
    percentBelow:
      ((dcRange.median - currentRate.annual) / dcRange.median) * 100,
  },
  targetVsDCMedian: {
    // Even target max is below DC median
    stillBelowBy: dcRange.median - targetRate.annualMax,
    percentBelowMedian:
      ((dcRange.median - targetRate.annualMax) / dcRange.median) * 100,
  },
};

// For chart display
export const salaryChartData = [
  {
    label: "Your Current Rate",
    value: currentRate.annual,
    type: "current" as const,
  },
  {
    label: "Your Target (Low)",
    value: targetRate.annualMin,
    type: "target" as const,
  },
  {
    label: "Your Target (High)",
    value: targetRate.annualMax,
    type: "target" as const,
  },
  {
    label: "US 25th Percentile",
    value: usNationalRange.percentile25,
    type: "market" as const,
  },
  {
    label: "DC 25th Percentile",
    value: dcRange.percentile25,
    type: "market" as const,
  },
  {
    label: "DC Median",
    value: dcRange.median,
    type: "market" as const,
  },
  {
    label: "DC 75th Percentile",
    value: dcRange.percentile75,
    type: "market" as const,
  },
];
