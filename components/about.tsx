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
        <span className="font-bold">Hello, I'm Michael.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with a proven track record of dominating the fields I've worked in. With experience at{" "}
        <span className="font-bold">Mavis Tire, Ultra Golf Pro,</span> and{" "}
        <span className="font-bold">Mioym Equities,</span> I have consistently delivered innovative solutions that improve efficiency and reduce costs. I specialize in{" "}
        <span className="font-bold">React, Next.js, Node.js,</span> and{" "}
        <span className="font-bold">MongoDB,</span> and I’ve mastered technologies such as{" "}
        <span className="font-bold">TypeScript, PostgreSQL, and React Native.</span> Whether it's leading the development of complex systems or enhancing performance across web and mobile platforms, I am always ready to push boundaries.

      </p>


    </motion.section>
  );
}
