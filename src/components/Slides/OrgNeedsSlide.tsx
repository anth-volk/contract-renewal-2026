import { motion } from "framer-motion";
import { childVariants } from "../Slideshow/Slide";

export function OrgNeedsSlide() {
  const orgNeeds = [
    {
      title: "Dedicated technical ownership",
      description:
        "As PolicyEngine grows, the tech stack requires strengthened accountability for architectural decisions and technical direction.",
    },
    {
      title: "Technical roadmapping",
      description:
        "A new organizational alignment and modified mission will require new technical roadmapping and strategy.",
    },
    {
      title: "Advising and mentorship",
      description:
        "Direct mentorship for current developers, while laying the groundwork for an expanded team if organizational changes eventually necessitate it.",
    },
  ];

  return (
    <div className="slide__content">
      <motion.p className="slide-eyebrow" variants={childVariants}>
        Organizational change
      </motion.p>

      <motion.h1 className="slide-title" variants={childVariants}>
        A <span className="slide-title--accent">new need</span> for leadership
      </motion.h1>

      <motion.p className="slide-subtitle" variants={childVariants}>
        PolicyEngine's new organizational direction creates new technical
        leadership needs.
      </motion.p>

      <motion.div className="slide-grid" variants={childVariants}>
        {orgNeeds.map((need, index) => (
          <div
            key={index}
            className={index === 0 ? "slide-card slide-card--accent" : "slide-card"}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: index === 0 ? "var(--pe-teal-700)" : "var(--pe-gray-600)",
                marginBottom: "0.75rem",
              }}
            >
              {need.title}
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                color: "var(--pe-gray-700)",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              {need.description}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
