import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <motion.div
      id="Projects"
      className="p-10 md:p-24 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-2xl md:text-4xl text-white font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h1>
      <motion.div
        className="py-12 px-8 flex flex-wrap gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <ProjectCard
          title="Portfolio Website"
          main="✅ Frontend Development – Creating beautiful, responsive, and interactive UI with React.js, Tailwind CSS."
          githubLink="https://github.com/pushkarpawar01/portfolio"
        />
        <ProjectCard
          title="AI Powered Quiz Application"
          main="✅ Developed an AI powered quiz application which generates questions based on the topic entered by the user. Integrated Sambanova API for generation of questions."
          githubLink="https://github.com/pushkarpawar01/quizApplication"
        />
        <ProjectCard
          title="Waste2Worth"
          main="✅ Developed a web based platform for managing the surplus food.This platform is designed to connect the surplus food sources with the NGOs.Integrated the Razorpay payment gateway for donation of money to NGOs."
          githubLink="https://github.com/pushkarpawar01/donate1"
        />
      </motion.div>
    </motion.div>
  );
};

export default Projects;
