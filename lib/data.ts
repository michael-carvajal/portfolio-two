import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import jamifyScreenshot from "@/public/jamify-screenshot.png";
import foxTrot from "@/public/foxtrot-screenshot.png";
import stayBnb from "@/public/staybnb-screenshot.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated App Academy",
    location: "Remote",
    description:
      "I honed my skills in creating full-stack web applications using React, Express, PostgreSQL, and Node.JS",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Lead Software Engineer - Mioym Equities",
    location: "White Plains, NY",
    description:
      "I developed and maintained an internal data scraping tool using Puppeteer and third-party APIs to extract property insights and house value estimates for employees. This resulted in a 30% increase in lead generation efficiency. I also managed multiple AWS servers, utilized PostgreSQL on RDS, and optimized data storage and accessibility via S3 buckets, reducing data retrieval time by 15%.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "Frontend Software Engineer - Ultra Golf Pro",
    location: "New York, NY",
    description:
      "I've utilized Flutter and Python to create an intuitive gulf game tracking application. I integrated Google authentication to streamline user access and reduced app loading time by 25%. Material Design widgets ensure a visually appealing UI, while Flask with PostgreSQL integration facilitates efficient data management",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
  {
    title: "Software Developer - Freelance",
    location: "New York, NY",
    description:
      "I have successfully gained clients and arranged deals for website design projects that cater to a diverse range of clients, including artists, local businesses, and software startups. I use React and Tailwind CSS to create websites that are both visually appealing and user-friendly.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Jamify",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Redux", "PostgreSQL", "Tailwind", "Flask", "Python", "AWS", "S3"],
    imageUrl: jamifyScreenshot,
  },
  {
    title: "Foxtrot",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "Redux", "SQLAlchemy", "Github", "Agile", "Finance"],
    imageUrl: foxTrot,
  },
  {
    title: "Stay BnB",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: stayBnb,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Amazon Web Services",
  "OAuth",
  "Bash",
  "Flutter",
  "Web Development",
  "Mobile",


  "Git",
  "Tailwind",
  "HTML",
  "CSS",
  "MongoDB",
  "GraphQL",
  "Apollo",
  "Express",
  "Python",
] as const;
