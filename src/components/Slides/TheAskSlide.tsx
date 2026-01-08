import { motion } from "framer-motion";
import { childVariants } from "../Slideshow/Slide";
import {
  currentRate,
  targetRate,
  dcRange,
  usNationalRange,
} from "../../data/salaryData";

export function TheAskSlide() {
  return (
    <div className="slide__content">
      <motion.p className="slide-eyebrow" variants={childVariants}>
        Compensation
      </motion.p>

      <motion.h1 className="slide-title" variants={childVariants}>
        Proposed <span className="slide-title--accent">adjustment</span>
      </motion.h1>

      <motion.p className="slide-subtitle" variants={childVariants}>
        Aligning compensation with market rates and demonstrated value.
      </motion.p>

      <motion.div className="slide-grid" variants={childVariants}>
        {/* Rate Comparison */}
        <div className="slide-card">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--pe-gray-600)",
              marginBottom: "1rem",
            }}
          >
            Proposed range
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.5rem",
                color: "var(--pe-teal-600)",
                lineHeight: 1,
              }}
            >
              ${targetRate.hourlyMin}–${targetRate.hourlyMax}
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "var(--pe-gray-500)",
              }}
            >
              /hour
            </span>
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9375rem",
              color: "var(--pe-gray-600)",
              margin: 0,
            }}
          >
            ${targetRate.annualMin.toLocaleString()}–$
            {targetRate.annualMax.toLocaleString()} annually
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8125rem",
              color: "var(--pe-gray-500)",
              margin: "0.5rem 0 0 0",
              fontStyle: "italic",
            }}
          >
            Based on {currentRate.hoursPerYear.toLocaleString()} hours/year
            (includes {currentRate.vacationWeeks} weeks vacation)
          </p>
        </div>

        {/* Market Context */}
        <div className="slide-card slide-card--accent">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--pe-teal-700)",
              marginBottom: "0.75rem",
            }}
          >
            Market reference
          </p>
          <table
            style={{
              width: "100%",
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr>
                <td style={{ padding: "0.4rem 0", color: "var(--pe-gray-600)" }}>
                  Current Rate
                </td>
                <td
                  style={{
                    padding: "0.4rem 0",
                    textAlign: "right",
                    fontWeight: 500,
                    color: "var(--pe-gray-700)",
                  }}
                >
                  ${currentRate.annual.toLocaleString()}
                </td>
              </tr>
              <tr>
                <td style={{ padding: "0.4rem 0", color: "var(--pe-gray-600)" }}>
                  US National 25th %ile
                </td>
                <td
                  style={{
                    padding: "0.4rem 0",
                    textAlign: "right",
                    fontWeight: 500,
                    color: "var(--pe-gray-700)",
                  }}
                >
                  ${usNationalRange.percentile25.toLocaleString()}
                </td>
              </tr>
              <tr>
                <td style={{ padding: "0.4rem 0", color: "var(--pe-gray-600)" }}>
                  US National Median
                </td>
                <td
                  style={{
                    padding: "0.4rem 0",
                    textAlign: "right",
                    fontWeight: 500,
                    color: "var(--pe-gray-700)",
                  }}
                >
                  ${usNationalRange.median.toLocaleString()}
                </td>
              </tr>
              <tr>
                <td style={{ padding: "0.4rem 0", color: "var(--pe-gray-600)" }}>
                  DC 25th %ile
                </td>
                <td
                  style={{
                    padding: "0.4rem 0",
                    textAlign: "right",
                    fontWeight: 500,
                    color: "var(--pe-gray-700)",
                  }}
                >
                  ${dcRange.percentile25.toLocaleString()}
                </td>
              </tr>
              <tr>
                <td style={{ padding: "0.4rem 0", color: "var(--pe-gray-600)" }}>
                  DC Median
                </td>
                <td
                  style={{
                    padding: "0.4rem 0",
                    textAlign: "right",
                    fontWeight: 500,
                    color: "var(--pe-gray-700)",
                  }}
                >
                  ${dcRange.median.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8125rem",
              color: "var(--pe-gray-500)",
              margin: "0.75rem 0 0 0",
              fontStyle: "italic",
              lineHeight: 1.5,
            }}
          >
            Full Stack Developer salaries from ZipRecruiter and Glassdoor (2025
            data, retrieved January 2026). Figures represent reported salary
            distributions across job postings and self-reported compensation.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={childVariants}
        style={{
          marginTop: "1.5rem",
          padding: "1rem 1.25rem",
          background: "var(--pe-gray-50)",
          borderRadius: "8px",
          border: "1px solid var(--pe-gray-200)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9375rem",
            color: "var(--pe-gray-700)",
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          The proposed range of ${targetRate.annualMin.toLocaleString()}–$
          {targetRate.annualMax.toLocaleString()} positions compensation closer
          to the US national 25th percentile ($
          {usNationalRange.percentile25.toLocaleString()}) while remaining below
          DC market rates.
        </p>
      </motion.div>

      <motion.div className="slide-sources" variants={childVariants}>
        <p className="slide-sources__title">Sources</p>
        <div className="slide-sources__list">
          <a
            href="https://www.ziprecruiter.com/Salaries/Full-Stack-Developer-Salary"
            className="slide-sources__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            ZipRecruiter (National)
          </a>
          <a
            href="https://www.glassdoor.com/Salaries/washington-dc-full-stack-developer-salary-SRCH_IL.0,13_IM911_KO14,34.htm"
            className="slide-sources__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Glassdoor (DC)
          </a>
          <a
            href="https://www.indeed.com/career/full-stack-developer/salaries/Washington--DC"
            className="slide-sources__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Indeed (DC)
          </a>
        </div>
      </motion.div>
    </div>
  );
}
