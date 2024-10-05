import React from "react";
import { CgWorkAlt, CgUser } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import jamifyScreenshot from "@/public/jamify-screenshot.png";
import smokehouseScreenshot from "@/public/smokehouse-screenshot.png";
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
    date: "2024",
  },
  {
    title: "Software Developer - Freelance",
    location: "New York, NY",
    description:
      "I have successfully gained clients and arranged deals for website design projects that cater to a diverse range of clients, including artists, local businesses, and software startups. I use React and Tailwind CSS to create websites that are both visually appealing and user-friendly.",
    icon: React.createElement(CgUser),
    date: "2023 - present",
  },
  {
    title: "Software Developer - Mavis Tire",
    location: "White Plains, NY",
    description:
      "I led the development of the Hybrid Order System using React.js, Node.js, .NET, and Microsoft SQL Server, which improved tire order processing times by 80%. By automating data extraction across multiple vendor websites with Playwright, I enhanced web scraping efficiency by 40%. Additionally, I reduced employee cognitive load by 50% and increased daily sourcing efficiency from 40 to 100 through automation. My implementation of an intuitive system design led to a 99% reduction in human errors, significantly optimizing the workflow.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Jamify",
    description:
      "My capsotne project is a clone of Ultimateguitar.com. Users can search up chords for songs, upload audio files, and share reviews.",
    tags: [
      "React",
      "Redux",
      "PostgreSQL",
      "Tailwind",
      "Flask",
      "Python",
      "AWS",
      "S3",
    ],
    imageUrl: jamifyScreenshot,
    url: "https://jamify-dhs9.onrender.com",
  },
  {
    title: "Foxtrot",
    description:
      "I co-created this clone of Robinhood.com. Users can add funds into thier digital wallet and buy stocks from public companies.",
    tags: ["React", "Redux", "SQLAlchemy", "Github", "Agile", "Finance"],
    imageUrl: foxTrot,
    url: "https://foxtrot.onrender.com/",
  },
  {
    title: "Mt. Kisco Smokehouse",
    description:
      "Developed a website for a local smokehouse using Next.js, featuring a comprehensive CMS that allows the owners to easily customize and manage content.",
    tags: [
      "React",
      "NextJS",
      "PostgreSQL",
      "Tailwind",
      "AWS",
      "E-Commerce",
    ],
    imageUrl: smokehouseScreenshot,
    url: "https://jamify-dhs9.onrender.com",
  },
  {
    title: "Stay BnB",
    description:
      "A clone of Airbnb. This Project harnesses the power of the PERN stack to dynamically disaply data of locations users can book.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: stayBnb,
    url: "https://staybnb-17az.onrender.com",
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
