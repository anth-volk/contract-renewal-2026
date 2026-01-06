import { motion } from "framer-motion";
import { childVariants } from "../Slideshow/Slide";
import { currentRate, targetRate } from "../../data/salaryData";
import { contributionSummary } from "../../data/contributionData";

export function ExecutiveSummarySlide() {
  return (
    <div className="slide__content">
      <motion.p className="slide-eyebrow" variants={childVariants}>
        Executive Summary
      </motion.p>

      <motion.h1 className="slide-title" variants={childVariants}>
        The Proposal
      </motion.h1>

      <motion.div className="slide-grid" variants={childVariants}>
        {/* Current vs Proposed */}
        <div className="slide-card">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              marginBottom: "1.5rem",
            }}
          >
            <div className="stat">
              <span className="stat__value stat__value--negative">
                ${currentRate.hourly}
              </span>
              <span className="stat__label">Current Hourly</span>
            </div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--pe-gray-300)"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <div className="stat">
              <span className="stat__value stat__value--positive">
                ${targetRate.hourlyMin}–${targetRate.hourlyMax}
              </span>
              <span className="stat__label">Proposed Hourly</span>
            </div>
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9375rem",
              color: "var(--pe-gray-600)",
              margin: 0,
            }}
          >
            Equivalent to{" "}
            <strong>
              ${targetRate.annualMin.toLocaleString()}–$
              {targetRate.annualMax.toLocaleString()}
            </strong>{" "}
            annually at 2,000 hours
          </p>
        </div>

        {/* Key Numbers */}
        <div className="slide-card slide-card--accent">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--pe-teal-700)",
              marginBottom: "1rem",
            }}
          >
            At a Glance
          </p>
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            <div className="stat">
              <span className="stat__value">
                {contributionSummary.totalPRsAllTime}
              </span>
              <span className="stat__label">Total PRs</span>
            </div>
            <div className="stat">
              <span className="stat__value">
                {(
                  contributionSummary.year2025.totalContributions / 1000
                ).toFixed(1)}
                k
              </span>
              <span className="stat__label">2025 Contributions</span>
            </div>
            <div className="stat">
              <span className="stat__value">17+</span>
              <span className="stat__label">Repositories</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div variants={childVariants}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: "0.875rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--pe-gray-700)",
            marginBottom: "1rem",
            marginTop: "2rem",
          }}
        >
          Three Pillars of Value
        </p>
        <div className="slide-grid" style={{ marginTop: "0.5rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                color: "var(--pe-teal-400)",
                lineHeight: 1,
              }}
            >
              1
            </span>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  color: "var(--pe-gray-800)",
                  margin: "0 0 0.25rem 0",
                }}
              >
                Technical Depth
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  color: "var(--pe-gray-600)",
                  margin: 0,
                }}
              >
                Full-stack mastery across frontend, backend, and infrastructure
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                color: "var(--pe-teal-400)",
                lineHeight: 1,
              }}
            >
              2
            </span>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  color: "var(--pe-gray-800)",
                  margin: "0 0 0.25rem 0",
                }}
              >
                Strategic Vision
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  color: "var(--pe-gray-600)",
                  margin: 0,
                }}
              >
                Leading architecture decisions for v2 systems
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                color: "var(--pe-teal-400)",
                lineHeight: 1,
              }}
            >
              3
            </span>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  color: "var(--pe-gray-800)",
                  margin: "0 0 0.25rem 0",
                }}
              >
                Team Leadership
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  color: "var(--pe-gray-600)",
                  margin: 0,
                }}
              >
                222+ code reviews, ready to mentor junior developers
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
