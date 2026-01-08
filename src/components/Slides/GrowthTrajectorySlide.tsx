import { motion } from "framer-motion";
import { childVariants } from "../Slideshow/Slide";
import { growthIntentions } from "../../data/contributionData";

export function GrowthTrajectorySlide() {
  const titleOptions = ["Technical Lead", "Lead Developer", "Lead Engineer"];

  return (
    <div className="slide__content">
      <motion.p className="slide-eyebrow" variants={childVariants}>
        A new direction
      </motion.p>

      <motion.h1 className="slide-title" variants={childVariants}>
        Pitching a <span className="slide-title--accent">new role</span>
      </motion.h1>

      <motion.p className="slide-subtitle" variants={childVariants}>
        PolicyEngine has a new need for dedicated technical leadership. I'd like
        to step into that role.
      </motion.p>

      <motion.div className="slide-grid" variants={childVariants}>
        {/* Technical Leadership - Primary focus */}
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
            {growthIntentions.technicalLeadership.title}
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            {growthIntentions.technicalLeadership.areas.map((area, index) => (
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

      {/* Title Change Request */}
      <motion.div
        variants={childVariants}
        style={{
          marginTop: "1.5rem",
          padding: "1rem 1.25rem",
          background: "var(--pe-teal-50)",
          borderRadius: "8px",
          border: "1px solid var(--pe-teal-200)",
        }}
      >
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
          Proposed title change
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9375rem",
            color: "var(--pe-gray-700)",
            margin: "0 0 0.75rem 0",
            lineHeight: 1.6,
          }}
        >
          To reflect this expanded role, I'd like to propose a title change.
          Options that could fit:
        </p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {titleOptions.map((title, index) => (
            <span
              key={index}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--pe-teal-700)",
                background: "white",
                padding: "0.375rem 0.875rem",
                borderRadius: "100px",
                border: "1px solid var(--pe-teal-300)",
              }}
            >
              {title}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
