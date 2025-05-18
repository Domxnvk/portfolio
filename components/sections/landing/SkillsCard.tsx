"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Progress } from "@heroui/progress";

import { skillsList } from "./data";

interface SkillsCardProps {
  delay?: number;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ delay = 0.3 }) => {
  const [progressValues, setProgressValues] = useState<number[]>([0, 0, 0]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const animateProgress = () => {
      skillsList.forEach((skill, index) => {
        setTimeout(() => {
          setProgressValues((prev) => {
            const newValues = [...prev];

            newValues[index] = skill.percentage;

            return newValues;
          });
        }, index * 300);
      });
    };

    const timer = setTimeout(animateProgress, 500);

    return () => clearTimeout(timer);
  }, [isMounted]);

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
              My Skills
            </h2>
            <p className="text-default-600 text-xs md:text-sm">
              Technologies I work with on a daily basis
            </p>
          </div>
          <div className="py-4">
            <div className="space-y-4 md:space-y-6">
              {skillsList.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-1 md:space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs md:text-sm font-medium tracking-wider text-default-700">
                      {skill.name}
                    </span>
                    <span className="text-xs md:text-sm text-default-600">
                      {progressValues[index]}%
                    </span>
                  </div>
                  <Progress
                    aria-label={`${skill.name} proficiency`}
                    classNames={{
                      track: "drop-shadow-sm bg-default-100",
                      indicator: `bg-gradient-to-r ${skill.gradient}`,
                      value: "text-default-700",
                    }}
                    radius="sm"
                    showValueLabel={false}
                    size="md"
                    value={progressValues[index]}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsCard;
