import { motion } from "framer-motion";
import { childVariants } from "../Slideshow/Slide";
import { keyAchievements } from "../../data/contributionData";

export function SpecificAchievementsSlide() {
  return (
    <div className="slide__content">
      <motion.p className="slide-eyebrow" variants={childVariants}>
        Key achievements
      </motion.p>

      <motion.h1 className="slide-title" variants={childVariants}>
        Concrete <span className="slide-title--accent">impact</span>
      </motion.h1>

      <motion.p className="slide-subtitle" variants={childVariants}>
        Specific contributions that have shaped PolicyEngine's technical
        direction and capabilities.
      </motion.p>

      <motion.div className="slide-grid" variants={childVariants}>
        {/* App v2 Leadership */}
        <div className="slide-card slide-card--accent">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            <span
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "var(--pe-teal-100)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.25rem",
              }}
            >
              1
            </span>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "1rem",
                color: "var(--pe-gray-800)",
                margin: 0,
              }}
            >
              {keyAchievements.appV2Leadership.title}
            </p>
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9375rem",
              color: "var(--pe-gray-600)",
              margin: "0 0 0.75rem 0",
              lineHeight: 1.6,
            }}
          >
            {keyAchievements.appV2Leadership.description}
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "var(--pe-teal-700)",
                background: "var(--pe-teal-50)",
                padding: "0.25rem 0.75rem",
                borderRadius: "100px",
              }}
            >
              {keyAchievements.appV2Leadership.metrics}
            </span>
          </div>
        </div>

        {/* API v2 Migration */}
        <div className="slide-card">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            <span
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "var(--pe-gray-100)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.25rem",
                color: "var(--pe-gray-600)",
              }}
            >
              2
            </span>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "1rem",
                color: "var(--pe-gray-800)",
                margin: 0,
              }}
            >
              {keyAchievements.apiV2Migration.title}
            </p>
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9375rem",
              color: "var(--pe-gray-600)",
              margin: "0 0 0.75rem 0",
              lineHeight: 1.6,
            }}
          >
            {keyAchievements.apiV2Migration.description}
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "var(--pe-teal-700)",
                background: "var(--pe-teal-50)",
                padding: "0.25rem 0.75rem",
                borderRadius: "100px",
              }}
            >
              {keyAchievements.apiV2Migration.metrics}
            </span>
          </div>
        </div>

        {/* Tech Team Management */}
        <div className="slide-card">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            <span
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "var(--pe-gray-100)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.25rem",
                color: "var(--pe-gray-600)",
              }}
            >
              3
            </span>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "1rem",
                color: "var(--pe-gray-800)",
                margin: 0,
              }}
            >
              {keyAchievements.techTeamManagement.title}
            </p>
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9375rem",
              color: "var(--pe-gray-600)",
              margin: "0 0 0.75rem 0",
              lineHeight: 1.6,
            }}
          >
            {keyAchievements.techTeamManagement.description}
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8125rem",
              color: "var(--pe-gray-500)",
              margin: 0,
              fontStyle: "italic",
            }}
          >
            {keyAchievements.techTeamManagement.impact}
          </p>
        </div>

        {/* API Cost Reduction */}
        <div className="slide-card">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            <span
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "var(--pe-gray-100)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.25rem",
                color: "var(--pe-gray-600)",
              }}
            >
              4
            </span>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "1rem",
                color: "var(--pe-gray-800)",
                margin: 0,
              }}
            >
              {keyAchievements.apiCostReduction.title}
            </p>
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9375rem",
              color: "var(--pe-gray-600)",
              margin: "0 0 0.75rem 0",
              lineHeight: 1.6,
            }}
          >
            {keyAchievements.apiCostReduction.description}
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8125rem",
              color: "var(--pe-gray-500)",
              margin: 0,
              fontStyle: "italic",
            }}
          >
            {keyAchievements.apiCostReduction.impact}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
