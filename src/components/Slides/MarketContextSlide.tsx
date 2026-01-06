import { motion } from "framer-motion";
import { childVariants } from "../Slideshow/Slide";
import { SalaryComparisonChart } from "../Charts/SalaryComparisonChart";
import {
  currentRate,
  targetRate,
  dcRange,
  usNationalRange,
} from "../../data/salaryData";

export function MarketContextSlide() {
  return (
    <div className="slide__content">
      <motion.p className="slide-eyebrow" variants={childVariants}>
        Market Context
      </motion.p>

      <motion.h1 className="slide-title" variants={childVariants}>
        Where I Stand <span className="slide-title--accent">vs. Market</span>
      </motion.h1>

      <motion.p className="slide-subtitle" variants={childVariants}>
        Current compensation is below the 25th percentile nationally, and
        significantly below Washington DC market rates.
      </motion.p>

      <motion.div variants={childVariants}>
        <SalaryComparisonChart />
      </motion.div>

      <motion.div
        className="slide-grid"
        variants={childVariants}
        style={{ marginTop: "1.5rem" }}
      >
        <div className="slide-card">
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
            Key Insight
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.0625rem",
              color: "var(--pe-gray-700)",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            My current rate of{" "}
            <strong style={{ color: "var(--pe-error)" }}>
              ${currentRate.annual.toLocaleString()}
            </strong>{" "}
            is{" "}
            <strong>
              ${(usNationalRange.percentile25 - currentRate.annual).toLocaleString()}
            </strong>{" "}
            below the national 25th percentile and{" "}
            <strong>
              ${(dcRange.percentile25 - currentRate.annual).toLocaleString()}
            </strong>{" "}
            below DC's 25th percentile.
          </p>
        </div>

        <div className="slide-card slide-card--accent">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--pe-teal-700)",
              marginBottom: "0.5rem",
            }}
          >
            The Ask Is Conservative
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.0625rem",
              color: "var(--pe-gray-700)",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Even my target of{" "}
            <strong style={{ color: "var(--pe-success)" }}>
              ${targetRate.annualMin.toLocaleString()}–$
              {targetRate.annualMax.toLocaleString()}
            </strong>{" "}
            remains below the DC 25th percentile of $
            {dcRange.percentile25.toLocaleString()}.
          </p>
        </div>
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
          <a
            href="https://www.payscale.com/research/US/Job=Full_Stack_Software_Developer/Salary"
            className="slide-sources__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            PayScale
          </a>
        </div>
      </motion.div>
    </div>
  );
}
