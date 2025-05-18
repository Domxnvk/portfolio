"use client";

import React from "react";
import { motion } from "framer-motion";
import { Divider } from "@heroui/divider";

import ProfileCard from "./ProfileCard";
import SkillsCard from "./SkillsCard";
import FrameworksCard from "./FrameworksCard";

interface HeroSectionProps {
  onExplore?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onExplore }) => {
  return (
    <div className="w-full px-4 py-8 md:py-0 flex flex-col items-center">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#FF705B] to-[#FFB457] text-4xl md:text-5xl font-bold mb-3 px-2 md:px-0 leading-normal pb-1">
            Welcome to my Portfolio
          </h2>
          <p className="text-default-600 mt-4 max-w-2xl mx-auto text-center text-sm md:text-base">
            Bringing creative ideas to life with modern web technologies and
            thoughtful design
          </p>

          <Divider className="max-w-md w-full mx-auto my-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Introduction Section - Left Side */}
          <ProfileCard onExplore={onExplore} />

          {/* Skills and Frameworks - Right Side */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <SkillsCard delay={0.3} />
            <FrameworksCard delay={0.5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;