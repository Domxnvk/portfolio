"use client";

import React from "react";
import { Modal, ModalContent, ModalBody } from "@heroui/modal";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Icon } from "@iconify/react";
import { Image } from "@heroui/image";

import { ProjectInterface } from "./types";

interface ProjectModalProps {
  project: ProjectInterface | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;

  return (
    <Modal
      hideCloseButton
      backdrop="blur"
      classNames={{
        backdrop: "bg-black/60",
        base: "md:rounded-2xl md:max-w-4xl rounded-t-3xl rounded-b-none dark:bg-black bg-white mb-0 mt-auto mx-auto",
        wrapper: "md:flex md:items-center md:justify-center items-end h-full",
        body: "p-0",
      }}
      isOpen={isOpen}
      size="3xl"
      onClose={onClose}
    >
      <ModalContent>
        {(closeHandler) => (
          <>
            <ModalBody className="p-0 relative">
              <div className="relative">
                <Button
                  isIconOnly
                  className="absolute top-4 right-4 z-10"
                  color="default"
                  radius="full"
                  size="md"
                  variant="light"
                  onPress={closeHandler}
                >
                  <Icon icon="mdi:close" width="24" />
                </Button>

                <div className="p-6 pb-10">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-md font-medium">{project.title}</h3>
                    <h2 className="text-3xl font-bold mt-1">
                      {project.tagline}
                    </h2>
                  </div>

                  {/* Content */}
                  <div className="bg-gray-100 rounded-2xl p-6 mt-6 dark:bg-zinc-900">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Image showcase on the right */}
                      <div className="w-full md:w-1/2 order-1 md:order-2">
                        <div className="relative w-full h-60 md:h-60 rounded-2xl overflow-hidden">
                          {/* Fixed image container */}
                          <div className="w-full h-full">
                            <Image
                              removeWrapper
                              alt={`${project.title} showcase`}
                              classNames={{
                                wrapper: "w-full h-full !overflow-hidden",
                                img: "object-contain object-center p-4 w-full h-full",
                              }}
                              radius="none"
                              src={project.modalContent.showcaseImage}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Text content on the left */}
                      <div className="w-full md:w-1/2 order-2 md:order-1">
                        <h4 className="text-xl font-semibold mb-4">
                          {project.modalContent.heading}
                        </h4>
                        {project.modalContent.paragraphs.map(
                          (paragraph, index) => (
                            <p
                              key={index}
                              className="text-gray-600 dark:text-gray-300 mb-4"
                            >
                              {paragraph}
                            </p>
                          ),
                        )}

                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tags.map((tag) => (
                            <Chip
                              key={tag.name}
                              classNames={{
                                base: tag.gradient || "",
                                content:
                                  "text-white drop-shadow shadow-black text-xs",
                                avatar: "bg-transparent",
                              }}
                              size="sm"
                              startContent={
                                tag.icon === "custom-hero-ui" ? (
                                  <span className="font-bold text-white text-xs mr-1">
                                    UI
                                  </span>
                                ) : (
                                  <Icon
                                    className="mr-1 text-white"
                                    icon={tag.icon}
                                    width="16"
                                  />
                                )
                              }
                              variant="shadow"
                            >
                              {tag.name}
                            </Chip>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
