import { motion } from "framer-motion";
import { childVariants } from "../Slideshow/Slide";

export function ReflectionSlide() {
  return (
    <div className="slide__content">
      <motion.p className="slide-eyebrow" variants={childVariants}>
        Reflection
      </motion.p>

      <motion.h1 className="slide-title" variants={childVariants}>
        Looking <span className="slide-title--accent">forward</span>
      </motion.h1>

      <motion.div className="slide-grid" variants={childVariants}>
        {/* What I'll keep doing */}
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
            What I'll keep doing
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
            Adapting to developments in AI technologies. I've done a lot of
            learning around these tools throughout the last year and feel better
            equipped to employ them in my work.
          </p>
        </div>

        {/* What I'd like to develop */}
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
            What I'd like to develop
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  color: "var(--pe-gray-800)",
                  margin: "0 0 0.25rem 0",
                }}
              >
                Advanced software development concepts
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  color: "var(--pe-gray-600)",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                A better understanding of parallelization, multi-threaded
                processes and concurrency, and broader architectural design that
                will likely shape the PolicyEngine codebase in the coming year.
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  color: "var(--pe-gray-800)",
                  margin: "0 0 0.25rem 0",
                }}
              >
                Project and team management
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  color: "var(--pe-gray-600)",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                I hope to work more closely with Sakshi (and hopefully other
                developers) to manage and deliver new features. I'd also love to
                have more opportunity to guide the strategy and direction that
                our application takes long-term.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
