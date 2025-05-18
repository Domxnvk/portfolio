"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Divider } from "@heroui/divider";

import { projects } from "./data";
import { ProjectInterface } from "./types";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import CallToAction from "./CallToAction";

import { title } from "@/components/primitives";

interface ProjectsSectionProps {
  contactEmail?: string;
  customTitle?: string;
  customDescription?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  contactEmail,
  customTitle,
  customDescription,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] =
    useState<ProjectInterface | null>(null);

  const openModal = (project: ProjectInterface) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full px-4 py-8 md:py-0 flex flex-col items-center">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          className="mb-8 md:mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2
            className={title({ size: "md", fullWidth: true, color: "yellow" })}
          >
            {customTitle ? (
              customTitle
            ) : (
              <>
                Featured{" "}
                <span className={title({ color: "foreground" })}>Projects</span>
              </>
            )}
          </h2>
          <p className="text-default-600 mt-4 max-w-2xl mx-auto text-center text-sm md:text-base">
            {customDescription ||
              "Explore my development skills and expertise through these showcase projects. Each project demonstrates my ability to create exceptional user experiences with modern web technologies."}
          </p>

          <Divider className="max-w-md w-full mx-auto my-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              index={i}
              project={project}
              onOpenModal={openModal}
            />
          ))}
        </div>

        <CallToAction emailAddress={contactEmail} />
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={closeModal}
      />
    </div>
  );
};

export default ProjectsSection;
