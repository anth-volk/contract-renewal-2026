# Contract Renewal Slideshow App - Planning Document

## Project Overview

Create a React-based slideshow application to present a compelling case for a pay increase during contract renewal. The target is to move from **$42.50/hour** to an hourly rate equivalent to **$94,000 - $108,000 annually** (spread over 2,000 hours = **$47.00 - $54.00/hour**).

---

## Phase 1: Environment Setup

### 1.1 Frontend Design Plugin Status

**Status: INSTALLED**

The `frontend-design` plugin is already available and will be used to create distinctive, production-grade UI components that avoid generic AI aesthetics.

### 1.2 Initialize Git Repository

```bash
git init
git branch -M main
```

### 1.3 Create React + Vite Project

```bash
npm create vite@latest . -- --template react-ts
npm install
```

**Additional dependencies to install:**
- `recharts` - for data visualization charts
- `framer-motion` - for smooth slide transitions
- `@mantine/core` and `@mantine/hooks` - to align with PolicyEngine's design system

```bash
npm install recharts framer-motion @mantine/core @mantine/hooks
```

---

## Phase 2: Design System Integration

### 2.1 PolicyEngine Color Palette (from `policyengine-app-v2`)

The app will use PolicyEngine's official color constants:

#### Primary Brand Colors (Teal)
| Shade | Hex Code |
|-------|----------|
| 50 | `#E6FFFA` |
| 100 | `#B2F5EA` |
| 200 | `#81E6D9` |
| 300 | `#4FD1C5` |
| 400 | `#38B2AC` |
| **500 (Main)** | **`#319795`** |
| 600 | `#2C7A7B` |
| 700 | `#285E61` |
| 800 | `#234E52` |
| 900 | `#1D4044` |

#### Secondary Colors (Gray Scale)
| Shade | Hex Code |
|-------|----------|
| 50 | `#F0F9FF` |
| 100 | `#F2F4F7` |
| 200 | `#E2E8F0` |
| 500 | `#64748B` |
| 700 | `#344054` |
| 900 | `#101828` |

#### Semantic Colors
- Success: `#22C55E`
- Warning: `#FEC601`
- Error: `#EF4444`
- Info: `#1890FF`

#### Background Colors
- Primary: `#FFFFFF`
- Secondary: `#F5F9FF`
- Tertiary: `#F1F5F9`

#### Text Colors
- Primary: `#000000`
- Secondary: `#5A5A5A`
- Tertiary: `#9CA3AF`

#### Legacy/Key Exports
- `TEAL_PRIMARY`: `#319795`
- `TEAL_ACCENT`: `#39C6C0`

---

## Phase 3: Market Research Data

> **IMPORTANT: Source Attribution Required**
>
> All salary figures in this section and in the final presentation MUST include clickable source links. Do not present any salary claim without a direct citation. Each chart/slide showing salary data must include a "Sources" footer.

### 3.1 Full-Stack Developer Salary Data (3 Years Experience)

*Data retrieved: January 6, 2026*

#### United States (National Average)

| Source | Average Salary | Notes |
|--------|----------------|-------|
| [Indeed](https://www.indeed.com/career/full-stack-developer/salaries) | $132,282/year | + $5,500 bonus, based on 10.6k salaries, updated Dec 29, 2025 |
| [Glassdoor](https://www.glassdoor.com/Salaries/full-stack-developer-salary-SRCH_KO0,20.htm) | $132,219/year | 2025 average |
| [ZipRecruiter](https://www.ziprecruiter.com/Salaries/Full-Stack-Developer-Salary) | $123,262/year | As of Dec 17, 2025 |
| [Coursera](https://www.coursera.org/articles/full-stack-developer-salary) | $119,000/year | Median total, Sep 2025 |
| [PayScale](https://www.payscale.com/research/US/Job=Full_Stack_Software_Developer/Salary) | $84,177/year | 1-4 years experience bracket |

**National Range:** $91,779 (25th percentile) to $155,142 (75th percentile) — Source: [ZipRecruiter](https://www.ziprecruiter.com/Salaries/Full-Stack-Developer-Salary)

#### Washington, DC

| Source | Average Salary | Notes |
|--------|----------------|-------|
| [Indeed DC](https://www.indeed.com/career/full-stack-developer/salaries/Washington--DC) | $135,549/year | + $5,500 bonus, based on 238 salaries |
| [Glassdoor DC](https://www.glassdoor.com/Salaries/washington-dc-full-stack-developer-salary-SRCH_IL.0,13_IM911_KO14,34.htm) | $128,475/year | 8% higher than national average |
| [Built In DC](https://builtin.com/salaries/us/washington-dc/full-stack-developer) | $94,245/year | + $5,489 avg bonus, total $99,734 |
| [PayScale DC](https://www.payscale.com/research/US/Job=Full_Stack_Software_Developer/Salary/ca790f0f/Washington-DC) | $82,938/year | 1-4 years experience bracket, 2025 |

**DC Range:** $101,639 (25th percentile) to $163,975 (75th percentile) — Source: [Glassdoor DC](https://www.glassdoor.com/Salaries/washington-dc-full-stack-developer-salary-SRCH_IL.0,13_IM911_KO14,34.htm)

### 3.2 Key Salary Insights for Your Case

Your current rate: **$42.50/hour = $85,000/year** (at 2,000 hours)

Your target range: **$94,000 - $108,000/year = $47.00 - $54.00/hour**

**Market Position Analysis (with source citations):**
- Your current rate ($85k) is **below the 25th percentile** nationally ($91,779) — [ZipRecruiter](https://www.ziprecruiter.com/Salaries/Full-Stack-Developer-Salary)
- Your target range aligns with **early-career market rates** (1-4 years: $84,177) — [PayScale](https://www.payscale.com/research/US/Job=Full_Stack_Software_Developer/Salary)
- For DC, the 25th percentile is $101,639, which is **above** your target range — [Glassdoor DC](https://www.glassdoor.com/Salaries/washington-dc-full-stack-developer-salary-SRCH_IL.0,13_IM911_KO14,34.htm)
- The DC median ($128,475) is **51% higher** than your current rate — [Glassdoor DC](https://www.glassdoor.com/Salaries/washington-dc-full-stack-developer-salary-SRCH_IL.0,13_IM911_KO14,34.htm)

---

## Phase 4: GitHub Contributions Analysis (anth-volk)

> **Source:** All GitHub contribution data was retrieved via the [GitHub GraphQL API](https://docs.github.com/en/graphql) and [GitHub REST API](https://docs.github.com/en/rest) on January 6, 2026. Profile: [github.com/anth-volk](https://github.com/anth-volk)

### 4.1 Overall Contribution Summary

| Metric | 2024 | 2025 | Total (Last Year) |
|--------|------|------|-------------------|
| **Total Contributions** | 2,987 | 3,612 | 3,595 |
| **Commits** | 1,737 | 2,386 | 2,380 |
| **Pull Requests** | 366 | 256 | 254 |
| **Code Reviews** | 206 | 226 | 222 |
| **Issues** | 670 | 635 | 630 |

**Total PRs to PolicyEngine (all time): 664** — via `gh api search/issues?q=author:anth-volk+org:PolicyEngine+type:pr`

### 4.2 Year-over-Year Growth

The data shows **sustained, high-volume contribution** with growth in key areas:
- **+21% increase in total contributions** (2,987 → 3,612)
- **+37% increase in commits** (1,737 → 2,386)
- **+10% increase in code reviews** (206 → 226)
- Consistent issue engagement across both years

### 4.3 Repository Breakdown

#### 2025 Contributions (257 PRs)
| Repository | PRs | Focus Area |
|------------|-----|------------|
| **policyengine-app-v2** | 63 | Core frontend development |
| policyengine-api | 11 | Backend infrastructure |
| policyengine-api-v2 | 11 | Next-gen API architecture |
| policyengine.py | 5 | Python library |
| policyengine-api-v2-alpha | 3 | Experimental API work |
| uk-autumn-budget-dashboard | 3 | UK policy tools |
| policyengine-app | 2 | Legacy app maintenance |
| policyengine-household-api | 1 | Household calculations |
| policyengine-us | 1 | US tax-benefit rules |

#### 2024 Contributions (366 PRs)
| Repository | PRs | Focus Area |
|------------|-----|------------|
| **policyengine-us** | 27 | US tax-benefit rules |
| **policyengine-app** | 25 | Frontend application |
| policyengine-api | 19 | Backend infrastructure |
| policyengine-core | 10 | Core simulation engine |
| policyengine-us-data | 10 | US microdata processing |
| givecalc | 3 | Charitable giving calculator |
| microdf | 2 | Data analysis library |
| policyengine-household-api | 2 | Household calculations |
| policyengine-uk | 2 | UK tax-benefit rules |

### 4.4 Key Strategic Contributions

**Architecture-Level Work:**
- Led development of **policyengine-app-v2** (63 PRs in 2025 alone)
- Contributed to **policyengine-api-v2** architecture (11 PRs)
- Worked on experimental **api-v2-alpha** features
- Cross-repository contributions spanning **17+ repositories**

**Notable 2025 Achievements:**
- Refactored calculation infrastructure
- Added UK local authority/constituency features
- Implemented Congressional district support
- Created simulation flow architecture
- Built report generation system
- Deployed Vercel workflow automation
- Added SVG export capabilities

**Breadth of Knowledge:**
- Frontend (React, TypeScript, Vite)
- Backend (Python, Flask, FastAPI)
- Infrastructure (GCP, Docker, Terraform, CI/CD)
- Data (microsimulation datasets, Hugging Face)
- Policy modeling (US, UK tax-benefit systems)

### 4.5 Evidence of Senior-Level Trajectory

1. **Architectural ownership**: Leading app-v2 development
2. **Cross-cutting concerns**: API versioning, deployment automation
3. **Technical breadth**: 17+ repos across frontend, backend, infra
4. **Code review participation**: 222+ reviews demonstrating mentorship capacity
5. **Initiative**: Creating new repos (api-v2-alpha, uk-autumn-budget-dashboard)

---

## Phase 5: Slideshow Structure

### Slide 1: Title
- Name and role
- Contract renewal period
- Professional tagline emphasizing growth trajectory

### Slide 2: Executive Summary
- Current rate vs. proposed rate
- Key value proposition
- Three pillars: Technical depth, Strategic vision, Team leadership

### Slide 3: Market Context
- Salary comparison chart (US National, Washington DC)
- Current rate positioned against market data
- Target rate shown as reasonable/conservative ask

### Slide 4: Contribution Overview
- Total contributions summary
- Repository breadth
- Contribution timeline chart

### Slide 5: Code Impact
- Lines of code / complexity metrics
- Key features delivered
- Technical achievements

### Slide 6: Pull Request Analysis
- PR volume and quality
- Code review participation
- Collaboration patterns

### Slide 7: Growth Trajectory
- Journey from contributor to emerging technical leader
- Architecture-level contributions
- Strategic understanding demonstrated

### Slide 8: Future Value Proposition
- Vision for senior role
- Mentorship capabilities
- Architectural leadership potential
- Long-term organizational value

### Slide 9: The Ask
- Clear presentation of target range: $94,000 - $108,000
- Justification summary
- ROI for the organization

### Slide 10: Q&A / Discussion
- Contact information
- Openness to discussion
- Thank you

---

## Phase 6: Chart Specifications

> **IMPORTANT: Every chart displaying salary data MUST include a "Sources" section at the bottom listing the specific URLs where data was obtained.**

### Chart 1: Market Salary Comparison
- **Type:** Horizontal bar chart
- **Data:** Average salaries by location (US National, Washington DC)
- **Highlight:** Your current rate vs. target range vs. market rates
- **Colors:** Use PolicyEngine teal palette
- **Required footer:** List sources (Indeed, Glassdoor, ZipRecruiter, etc.) with links

### Chart 2: Contribution Timeline
- **Type:** Area chart or line chart
- **Data:** Monthly/quarterly contributions over time
- **Highlight:** Growth trend, sustained engagement
- **Colors:** Teal gradient

### Chart 3: Repository Breakdown
- **Type:** Pie or donut chart
- **Data:** Contributions by repository
- **Highlight:** Breadth of codebase knowledge
- **Colors:** Teal/blue color scheme

### Chart 4: Contribution Types
- **Type:** Stacked bar chart
- **Data:** Features vs. bug fixes vs. refactoring vs. reviews
- **Highlight:** Balance and versatility
- **Colors:** Semantic colors (success green, info blue, etc.)

### Chart 5: Growth Over Time
- **Type:** Combined line + annotation chart
- **Data:** Contribution volume + complexity milestones
- **Highlight:** Progression toward senior-level work
- **Colors:** Teal with accent highlights

### Chart 6: Value Proposition
- **Type:** Comparison chart
- **Data:** Current rate vs. requested rate vs. market rate
- **Highlight:** The ask is below market median
- **Colors:** Error red (current), Success green (target), Gray (market)

---

## Phase 7: Implementation Checklist

### Setup
- [ ] Initialize git repository
- [ ] Create Vite + React + TypeScript project
- [ ] Install dependencies (recharts, framer-motion, mantine)
- [ ] Configure PolicyEngine color theme

### Data Collection
- [x] Identify your GitHub username (anth-volk)
- [x] Run GitHub API queries for contribution data
- [x] Export and process contribution metrics
- [x] Prepare salary comparison data

### Design & Build
- [ ] Use `frontend-design` plugin for slide components
- [ ] Create slide navigation system
- [ ] Build individual slide components
- [ ] Implement charts with recharts
- [ ] Add smooth transitions with framer-motion

### Content
- [ ] Write slide copy
- [ ] Integrate real GitHub data
- [ ] Fine-tune chart visualizations
- [ ] Review and polish narrative

### Final
- [ ] Test presentation flow
- [ ] Responsive design check
- [ ] Final commit and deployment preparation

---

## Technical Architecture

```
src/
├── components/
│   ├── Slideshow/
│   │   ├── Slideshow.tsx       # Main slideshow container
│   │   ├── Slide.tsx           # Individual slide wrapper
│   │   └── Navigation.tsx      # Slide navigation controls
│   ├── Charts/
│   │   ├── SalaryComparisonChart.tsx
│   │   ├── ContributionTimelineChart.tsx
│   │   ├── RepositoryBreakdownChart.tsx
│   │   └── GrowthChart.tsx
│   └── Slides/
│       ├── TitleSlide.tsx
│       ├── MarketContextSlide.tsx
│       ├── ContributionsSlide.tsx
│       └── ... (one per slide)
├── data/
│   ├── salaryData.ts           # Market salary figures
│   ├── contributionData.ts     # GitHub metrics
│   └── colors.ts               # PolicyEngine palette
├── hooks/
│   └── useSlideshow.ts         # Slideshow state management
├── App.tsx
└── main.tsx
```

---

## Next Steps

1. **Approve this plan** to proceed with implementation
2. **Provide any additional context** about specific achievements or projects you want highlighted
3. Once approved, we will:
   - Initialize the git repository (local only, not pushed to GitHub)
   - Create the Vite + React + TypeScript project
   - Use the `frontend-design` plugin to build the slideshow
   - Integrate your real GitHub contribution data

---

## Key Talking Points for Your Case

Based on the data gathered, here are the strongest arguments:

### 1. You Are Currently Underpaid
- Your current rate ($85k/year) is **below the 25th percentile** nationally ($91,779) — [ZipRecruiter](https://www.ziprecruiter.com/Salaries/Full-Stack-Developer-Salary)
- PayScale reports $84,177 for 1-4 years experience — [PayScale](https://www.payscale.com/research/US/Job=Full_Stack_Software_Developer/Salary)
- In DC, you're well below even the 25th percentile ($101,639) — [Glassdoor DC](https://www.glassdoor.com/Salaries/washington-dc-full-stack-developer-salary-SRCH_IL.0,13_IM911_KO14,34.htm)

### 2. Your Ask Is Conservative
- Target range: $94k - $108k
- DC median: $128,475 — [Glassdoor DC](https://www.glassdoor.com/Salaries/washington-dc-full-stack-developer-salary-SRCH_IL.0,13_IM911_KO14,34.htm)
- DC 25th percentile ($101,639) is still above your target range
- You're asking for early-career rates despite senior-level output

### 3. You Deliver Exceptional Value
- **664 PRs** to PolicyEngine repositories
- **3,600+ contributions** in the past year alone
- **Leading app-v2 development** - the organization's core product
- Cross-stack expertise: frontend, backend, infrastructure, policy modeling
- **222+ code reviews** showing mentorship capacity

### 4. You're Growing Into a Senior Role
- From general contributor (2024) to **architectural owner** (2025)
- Leading next-generation systems (app-v2, api-v2)
- Building deployment automation and infrastructure
- Demonstrated initiative in creating new repositories

### 5. The ROI Is Clear
- A 10-27% raise for someone delivering **top-tier output**
- Retaining institutional knowledge across 17+ repositories
- Continued leadership on critical v2 migrations
- Future mentorship of junior developers

---

*Document created: January 6, 2026*
*GitHub data pulled: January 6, 2026*
*Username: anth-volk*
