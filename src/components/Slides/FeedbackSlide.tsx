import { motion } from "framer-motion";
import { childVariants } from "../Slideshow/Slide";

export function FeedbackSlide() {
  return (
    <div className="slide__content">
      <motion.p className="slide-eyebrow" variants={childVariants}>
        Feedback
      </motion.p>

      <motion.h1 className="slide-title" variants={childVariants}>
        Being more <span className="slide-title--accent">effective</span>
      </motion.h1>

      <motion.div className="slide-grid" variants={childVariants}>
        {/* What would help me */}
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
            What would help me
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "var(--pe-gray-700)",
              margin: 0,
              lineHeight: 1.7,
            }}
          >
            Clearer long-term deliverable prioritization and deadline setting
            with a clearer connection to the grants/funding underpinning them
            (where necessary).
          </p>
        </div>

        {/* What would help PolicyEngine */}
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
            What would help PolicyEngine
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "var(--pe-gray-700)",
              margin: 0,
              lineHeight: 1.7,
            }}
          >
            Clearer project and/or tech stack ownership.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
