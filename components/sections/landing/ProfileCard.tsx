"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Avatar } from "@heroui/avatar";
import { Divider } from "@heroui/divider";
import { Icon } from "@iconify/react";

import { HeroSectionProps } from "./types";

export const ProfileCard: React.FC<HeroSectionProps> = ({ onExplore }) => {
  return (
    <motion.div
      animate={{ opacity: 1, x: 0 }}
      className="lg:col-span-5"
      initial={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="p-6 h-full rounded-lg backdrop-blur-[2px]">
        <div className="flex flex-col items-center h-full">
          {/* Avatar with animation */}
          <motion.div
            className="mb-4 md:mb-6"
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <Avatar
              isBordered
              showFallback
              className="w-24 h-24 md:w-32 md:h-32"
              classNames={{
                base: "ring-2 ring-[#FF705B]/30",
              }}
              fallback={
                <span className="text-xl md:text-2xl font-bold text-white">
                  DO
                </span>
              }
              src="/avatardom.png"
            />
          </motion.div>

          {/* Headline */}
          <div className="text-center mb-2">
            <h1 className="tracking-tight font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF705B] to-[#FFB457]">
                Dominik
              </span>
            </h1>
            <h2 className="text-default-600 text-lg md:text-xl mt-1">
              Senior Frontend Engineer
            </h2>
          </div>

          {/* Description */}
          <div className="text-center mb-4 md:mb-6">
            <p className="text-default-600 text-base md:text-lg max-w-md">
              Passionate about creating stunning, accessible, and performant web
              applications. I specialize in React, HeroUI, and TailwindCSS to
              build modern user interfaces that delight users.
            </p>
          </div>

          <Divider className="max-w-xs w-full my-4" />

          {/* Action buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-auto">
            <Button
              className="bg-gray-300 text-gray-700 border-none"
              radius="full"
              size="sm"
              startContent={<Icon icon="lucide:download" width="16" />}
              variant="flat"
            >
              Resume
            </Button>
            <Button
              className="bg-gray-300 text-gray-700 border-none"
              radius="full"
              size="sm"
              startContent={<Icon icon="lucide:mail" width="16" />}
              variant="flat"
            >
              Contact Me
            </Button>
            <Button
              className="bg-gray-300 text-gray-700 border-none"
              endContent={<Icon icon="lucide:arrow-right" width="16" />}
              radius="full"
              size="sm"
              variant="flat"
              onPress={onExplore}
            >
              Explore Work
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;