"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
    I am a full-stack web developer, trained at <span className="font-medium">App Academy</span>, and I have a passion for solving problems. I excel in using <span className="font-medium">React, Next.js, Node.js,</span> and <span className="font-medium">MongoDB,</span> and I am always eager to learn and explore new technologies such as <span className="font-medium">TypeScript, PostgreSQL,</span> and <span className="font-medium">React Native.</span> When I am not coding, I enjoy playing my guitar with friends. I am actively seeking a <span className="font-medium">full-time</span> position in software development.
</p>


    </motion.section>
  );
}
