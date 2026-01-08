import { motion } from "framer-motion";
import { childVariants } from "../Slideshow/Slide";

export function ReflectOn2025Slide() {
  return (
    <div className="slide__content" style={{ textAlign: "center" }}>
      <motion.p className="slide-eyebrow" variants={childVariants}>
        Part I
      </motion.p>

      <motion.h1
        className="slide-title"
        variants={childVariants}
        style={{ marginBottom: "0.5rem" }}
      >
        Reflecting on
        <br />
        <span className="slide-title--accent">2025</span>
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        variants={childVariants}
        style={{ margin: "1.5rem auto", maxWidth: "600px" }}
      >
        Reviewing contributions, achievements, and growth over the past year.
      </motion.p>
    </div>
  );
}
