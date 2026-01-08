import { motion } from "framer-motion";
import { childVariants } from "../Slideshow/Slide";

export function MovingTo2026Slide() {
  return (
    <div className="slide__content" style={{ textAlign: "center" }}>
      <motion.p className="slide-eyebrow" variants={childVariants}>
        Part II
      </motion.p>

      <motion.h1
        className="slide-title"
        variants={childVariants}
        style={{ marginBottom: "0.5rem" }}
      >
        Moving to
        <br />
        <span className="slide-title--accent">2026</span>
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        variants={childVariants}
        style={{ margin: "1.5rem auto", maxWidth: "600px" }}
      >
        Proposing a new role and title.
      </motion.p>
    </div>
  );
}
