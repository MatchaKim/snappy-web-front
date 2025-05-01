"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "../AnimatedText";

export interface EditorPreviewUnitProps {
  imageUrl: string;
  description: string;
}

export function EditorPreviewUnit({
  imageUrl,
  description,
}: EditorPreviewUnitProps) {
  return (
    <div className="flex h-120 w-full flex-col items-center justify-center">
      <motion.div
        initial={{
          y: -45,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          ease: "easeIn",
          duration: 0.4,
        }}
      >
        <img src={imageUrl} alt="logo" className="h-full max-h-40" />
      </motion.div>
      <section className="flex flex-col items-center justify-center p-6">
        <AnimatedText>{description}</AnimatedText>
      </section>
    </div>
  );
}
