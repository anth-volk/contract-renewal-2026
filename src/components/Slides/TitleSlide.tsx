import { motion } from "framer-motion";
import { childVariants } from "../Slideshow/Slide";

export function TitleSlide() {
  return (
    <div className="slide__content" style={{ textAlign: "center" }}>
      <motion.p className="slide-eyebrow" variants={childVariants}>
        Contract Renewal 2026
      </motion.p>

      <motion.h1
        className="slide-title"
        variants={childVariants}
        style={{ marginBottom: "0.5rem" }}
      >
        Looking Back,
        <br />
        <span className="slide-title--accent">Moving Forward</span>
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        variants={childVariants}
        style={{ margin: "1.5rem auto", maxWidth: "600px" }}
      >
        A year in review and a proposal for what's next
      </motion.p>

      <motion.div
        variants={childVariants}
        style={{
          marginTop: "3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.25rem",
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
            fontSize: "1rem",
            color: "var(--pe-gray-500)",
            margin: 0,
          }}
        >
          Full-Stack Software Developer
        </p>
      </motion.div>

      <motion.div
        variants={childVariants}
        style={{
          marginTop: "4rem",
          display: "flex",
          justifyContent: "center",
          gap: "0.5rem",
          alignItems: "center",
          color: "var(--pe-gray-400)",
          fontSize: "0.875rem",
          fontFamily: "var(--font-body)",
        }}
      >
        <span>Press</span>
        <kbd
          style={{
            background: "var(--pe-gray-100)",
            padding: "0.25rem 0.5rem",
            borderRadius: "4px",
            fontSize: "0.75rem",
            border: "1px solid var(--pe-gray-200)",
          }}
        >
          {"\u2192"}
        </kbd>
        <span>or</span>
        <kbd
          style={{
            background: "var(--pe-gray-100)",
            padding: "0.25rem 0.5rem",
            borderRadius: "4px",
            fontSize: "0.75rem",
            border: "1px solid var(--pe-gray-200)",
          }}
        >
          Space
        </kbd>
        <span>to continue</span>
      </motion.div>
    </div>
  );
}
