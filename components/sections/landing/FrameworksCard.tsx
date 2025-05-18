"use client";

import React from "react";
import { motion } from "framer-motion";
import { Chip } from "@heroui/chip";
import { Avatar } from "@heroui/avatar";
import { Icon } from "@iconify/react";

import { frameworksList, getChipGradient } from "./data";

interface FrameworksCardProps {
  delay?: number;
}

const FrameworksCard: React.FC<FrameworksCardProps> = ({ delay = 0.5 }) => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="flex-1"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      <div className="h-full p-6 rounded-lg backdrop-blur-[2px]">
        <div className="flex flex-col h-full">
          <div className="pb-0 pt-2 flex-col items-start">
            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF705B] to-[#FFB457]">
              Frameworks & Tools
            </h2>
            <p className="text-default-600 text-xs md:text-sm">
              Technologies in my development ecosystem
            </p>
          </div>
          <div className="py-4">
            <div className="flex flex-wrap gap-2">
              {frameworksList.map((framework, index) => (
                <motion.div
                  key={framework.name}
                  animate={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.6 + index * 0.05,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Chip
                    avatar={
                      <Avatar
                        icon={
                          <Icon
                            className="md:w-5"
                            icon={framework.icon}
                            width="16"
                          />
                        }
                        size="sm"
                      />
                    }
                    className="cursor-pointer transition-shadow hover:shadow-md text-xs md:text-sm"
                    classNames={{
                      base: getChipGradient(framework.color),
                      content: "text-default-700 font-medium",
                    }}
                    radius="full"
                    size="sm"
                    variant="flat"
                  >
                    {framework.name}
                  </Chip>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FrameworksCard;
