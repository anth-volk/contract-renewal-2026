import { motion } from "framer-motion";
import { childVariants } from "../Slideshow/Slide";
import { ContributionChart } from "../Charts/ContributionChart";
import { RepositoryChart } from "../Charts/RepositoryChart";
import {
  contributionSummary,
  yearOverYearGrowth,
  githubProfile,
} from "../../data/contributionData";

export function ContributionOverviewSlide() {
  return (
    <div className="slide__content">
      <motion.p className="slide-eyebrow" variants={childVariants}>
        Contribution overview
      </motion.p>

      <motion.h1 className="slide-title" variants={childVariants}>
        <span className="slide-title--accent">
          {contributionSummary.totalPRsAllTime}
        </span>{" "}
        pull requests
      </motion.h1>

      <motion.p className="slide-subtitle" variants={childVariants}>
        Sustained, high-volume contribution with year-over-year growth across
        the entire PolicyEngine ecosystem.
      </motion.p>

      <motion.div variants={childVariants} className="stat-group">
        <div className="stat">
          <span className="stat__value stat__value--positive">
            +{yearOverYearGrowth.totalContributions.percentChange}%
          </span>
          <span className="stat__label">Total Contributions</span>
          <span className="stat__context">
            {contributionSummary.year2024.totalContributions.toLocaleString()} →{" "}
            {contributionSummary.year2025.totalContributions.toLocaleString()}
          </span>
        </div>
        <div className="stat">
          <span className="stat__value stat__value--positive">
            +{yearOverYearGrowth.commits.percentChange}%
          </span>
          <span className="stat__label">Commits</span>
          <span className="stat__context">
            {contributionSummary.year2024.commits.toLocaleString()} →{" "}
            {contributionSummary.year2025.commits.toLocaleString()}
          </span>
        </div>
        <div className="stat">
          <span className="stat__value stat__value--positive">
            +{yearOverYearGrowth.codeReviews.percentChange}%
          </span>
          <span className="stat__label">Code Reviews</span>
          <span className="stat__context">
            {contributionSummary.year2024.codeReviews} →{" "}
            {contributionSummary.year2025.codeReviews}
          </span>
        </div>
      </motion.div>

      <motion.div
        className="slide-grid"
        variants={childVariants}
        style={{ marginTop: "1rem" }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--pe-gray-600)",
              marginBottom: "0.5rem",
            }}
          >
            Year-over-year comparison
          </p>
          <ContributionChart />
        </div>
        <div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--pe-gray-600)",
              marginBottom: "0.5rem",
            }}
          >
            2025 repository breakdown
          </p>
          <RepositoryChart />
        </div>
      </motion.div>

      <motion.div className="slide-sources" variants={childVariants}>
        <p className="slide-sources__title">Source</p>
        <div className="slide-sources__list">
          <a
            href={githubProfile.profileUrl}
            className="slide-sources__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile ({githubProfile.username})
          </a>
          <span style={{ color: "var(--pe-gray-400)" }}>
            Data retrieved via GitHub API on {githubProfile.dataRetrieved}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
