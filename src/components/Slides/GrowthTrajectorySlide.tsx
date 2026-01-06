import { motion } from "framer-motion";
import { childVariants } from "../Slideshow/Slide";
import { growthIntentions, technicalBreadth } from "../../data/contributionData";

export function GrowthTrajectorySlide() {
  return (
    <div className="slide__content">
      <motion.p className="slide-eyebrow" variants={childVariants}>
        Vision & growth
      </motion.p>

      <motion.h1 className="slide-title" variants={childVariants}>
        Where I'm <span className="slide-title--accent">headed</span>
      </motion.h1>

      <motion.p className="slide-subtitle" variants={childVariants}>
        My growth trajectory aligns with PolicyEngine's technical needs and
        organizational direction.
      </motion.p>

      <motion.div className="slide-grid" variants={childVariants}>
        {/* Technical Growth */}
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
            {growthIntentions.technicalGrowth.title}
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            {growthIntentions.technicalGrowth.areas.map((area, index) => (
              <div
                key={index}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  color: "var(--pe-gray-700)",
                  paddingLeft: "1rem",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "0.5rem",
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "var(--pe-teal-400)",
                  }}
                />
                {area}
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Leadership */}
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
            {growthIntentions.strategicLeadership.title}
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            {growthIntentions.strategicLeadership.areas.map((area, index) => (
              <div
                key={index}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  color: "var(--pe-gray-700)",
                  paddingLeft: "1rem",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "0.5rem",
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "var(--pe-gray-400)",
                  }}
                />
                {area}
              </div>
            ))}
          </div>
        </div>

        {/* Team Leadership */}
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
            {growthIntentions.teamLeadership.title}
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            {growthIntentions.teamLeadership.areas.map((area, index) => (
              <div
                key={index}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  color: "var(--pe-gray-700)",
                  paddingLeft: "1rem",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "0.5rem",
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "var(--pe-gray-400)",
                  }}
                />
                {area}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Technical Breadth - compact version */}
      <motion.div variants={childVariants} style={{ marginTop: "1.5rem" }}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--pe-gray-500)",
            marginBottom: "0.75rem",
          }}
        >
          Current technical foundation
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          {Object.entries(technicalBreadth)
            .flatMap(([, skills]) => skills)
            .slice(0, 12)
            .map((skill, index) => (
              <span
                key={index}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  color: "var(--pe-gray-600)",
                  background: "var(--pe-gray-100)",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "100px",
                }}
              >
                {skill}
              </span>
            ))}
        </div>
      </motion.div>
    </div>
  );
}
