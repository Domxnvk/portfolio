"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { Image } from "@heroui/image";

import { ProjectInterface } from "./types";

interface ProjectCardProps {
  project: ProjectInterface;
  index: number;
  onOpenModal: (project: ProjectInterface) => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onOpenModal,
}) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      variants={cardVariants}
      viewport={{ once: true, amount: 0.1 }}
      whileInView="visible"
    >
      <Card
        className={`h-full ${project.bgColor} ${project.textColor} border-none shadow-none overflow-hidden rounded-2xl`}
        style={{ minHeight: "500px" }}
      >
        <CardHeader className="flex-col items-start p-6 z-10">
          <h3 className="text-lg font-medium">{project.title}</h3>
          <p className="text-2xl font-bold mt-1">{project.tagline}</p>
        </CardHeader>
        <CardBody className="p-0 relative" style={{ minHeight: "180px" }}>
          {/* Project Card Image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-[1]" />
              <div className="w-full h-full overflow-hidden">
                <Image
                  removeWrapper
                  alt={project.title}
                  className="w-full h-full"
                  classNames={{
                    wrapper: "w-full h-full !overflow-hidden",
                    img: "object-contain object-center p-8 w-full h-full",
                  }}
                  radius="none"
                  src={project.image}
                />
              </div>
            </div>
          </div>

          <Button
            isIconOnly
            aria-label="View Details"
            className="absolute bottom-4 right-4 backdrop-blur-md z-10"
            color="default"
            radius="full"
            size="sm"
            variant="shadow"
            onPress={() => onOpenModal(project)}
          >
            <Icon icon="mdi:plus" width="18" />
          </Button>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
