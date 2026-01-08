import { motion } from "framer-motion";
import { childVariants } from "../Slideshow/Slide";

export function LearningsSlide() {
  return (
    <div className="slide__content">
      <motion.p className="slide-eyebrow" variants={childVariants}>
        Reflection
      </motion.p>

      <motion.h1 className="slide-title" variants={childVariants}>
        <span className="slide-title--accent">Learnings</span>
      </motion.h1>

      <motion.div className="slide-grid" variants={childVariants}>
        {/* AI Technologies */}
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
            AI Technologies
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
            I've grown considerably in my understanding and adoption of AI
            technologies throughout the past year. These tools have become an
            integral part of my development workflow, improving both speed and
            quality of output.
          </p>
        </div>

        {/* Platform-Agnostic Design */}
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
            Platform-Agnostic Architecture
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
            I've developed a deeper understanding of how to build systems that
            are technology- and infrastructure-agnostic—designing solutions that
            aren't tightly coupled to specific vendors, frameworks, or
            deployment environments.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
