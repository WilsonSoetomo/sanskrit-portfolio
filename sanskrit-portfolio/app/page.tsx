"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [scrapedData, setScrapedData] = useState([]);

  // Fetch project data from backend API
  useEffect(() => {
    axios.get("https://your-backend-api.com/projects") // Change to your actual backend API
      .then(response => setProjects(response.data))
      .catch(error => console.error("Error fetching project data:", error));
  }, []);

  // Fetch scraped data from backend API
  useEffect(() => {
    axios.get("https://your-backend-api.com/scraper") // Change to your actual backend API
      .then(response => setScrapedData(response.data))
      .catch(error => console.error("Error fetching scraper data:", error));
  }, []);

  return (
    <div className="min-h-screen bg-cream text-textPrimary flex flex-col items-center p-8">
      {/* Header Section */}
      <motion.h1 
        className="text-4xl font-bold mt-10 font-serif"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Wilson Soetomo
      </motion.h1>
      <p className="text-textSecondary mt-2 font-serif">
        Full-Stack Engineer | Minimalist Sanskrit-Inspired Portfolio
      </p>
      
      {/* Projects Section */}
      <section className="w-full max-w-4xl mt-12">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <ProjectCard key={index} title={project.title} description={project.description} />
            ))
          ) : (
            <p className="text-textSecondary">Loading projects...</p>
          )}
        </div>
      </section>

      {/* Web Scraper Showcase */}
      <section className="w-full max-w-4xl mt-12">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Live Web Scraper</h2>
        <div className="bg-cardBackground p-4 rounded-lg w-full">
          {scrapedData.length > 0 ? (
            <ul>
              {scrapedData.map((item, index) => (
                <li key={index} className="border-b py-2">{item.title} - {item.link}</li>
              ))}
            </ul>
          ) : (
            <p className="text-textSecondary">Fetching latest scraped data...</p>
          )}
        </div>
      </section>
    </div>
  );
}

// Reusable Project Card Component
function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <motion.div 
      className="bg-cardBackground p-4 rounded-lg"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-textSecondary mt-1">{description}</p>
    </motion.div>
  );
}
