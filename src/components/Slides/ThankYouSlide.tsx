import { motion } from "framer-motion";
import { childVariants } from "../Slideshow/Slide";
import { targetRate } from "../../data/salaryData";
import { contributionSummary } from "../../data/contributionData";

export function ThankYouSlide() {
  return (
    <div className="slide__content" style={{ textAlign: "center" }}>
      <motion.p className="slide-eyebrow" variants={childVariants}>
        Thank you
      </motion.p>

      <motion.h1 className="slide-title" variants={childVariants}>
        Let's discuss
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        variants={childVariants}
        style={{ margin: "1rem auto 3rem", maxWidth: "600px" }}
      >
        I'm excited to continue growing with PolicyEngine and contributing to
        our mission of making policy analysis accessible to everyone.
      </motion.p>

      <motion.div
        variants={childVariants}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          flexWrap: "wrap",
          marginBottom: "3rem",
        }}
      >
        <div className="stat" style={{ alignItems: "center" }}>
          <span className="stat__value">
            {contributionSummary.totalPRsAllTime}
          </span>
          <span className="stat__label">Pull Requests</span>
        </div>
        <div className="stat" style={{ alignItems: "center" }}>
          <span className="stat__value">17+</span>
          <span className="stat__label">Repositories</span>
        </div>
        <div className="stat" style={{ alignItems: "center" }}>
          <span className="stat__value stat__value--positive">
            ${targetRate.annualMin / 1000}k–${targetRate.annualMax / 1000}k
          </span>
          <span className="stat__label">Target Range</span>
        </div>
      </motion.div>

      <motion.div
        variants={childVariants}
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          padding: "1.5rem 2.5rem",
          background: "var(--pe-gray-50)",
          borderRadius: "12px",
          border: "1px solid var(--pe-gray-100)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.125rem",
            fontWeight: 600,
            color: "var(--pe-gray-800)",
            margin: 0,
          }}
        >
          Anthony Volk
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9375rem",
            color: "var(--pe-gray-500)",
            margin: 0,
          }}
        >
          Full-Stack Software Developer
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "0.5rem",
          }}
        >
          <a
            href="https://github.com/anth-volk"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              color: "var(--pe-teal-600)",
              textDecoration: "none",
            }}
          >
            GitHub
          </a>
        </div>
      </motion.div>

      <motion.p
        variants={childVariants}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.875rem",
          color: "var(--pe-gray-400)",
          marginTop: "3rem",
        }}
      >
        I'm open to discussing any aspect of this proposal
      </motion.p>
    </div>
  );
}
