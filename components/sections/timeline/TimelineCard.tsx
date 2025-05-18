"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import Image from "next/image";

import { TimelineEvent } from "./types";

interface TimelineCardProps {
  event: TimelineEvent;
  index: number;
  isFlipped: boolean;
  onCardClick: (index: number) => void;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
  event,
  index,
  isFlipped,
  onCardClick,
}) => {
  return (
    <motion.div
      key={event.id}
      className="col-span-12 sm:col-span-4 h-[300px]"
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      onClick={() => onCardClick(index)}
    >
      <Card className="w-full h-full shadow-lg overflow-hidden border-none">
        <CardHeader className="absolute z-10 top-0 left-0 flex-col !items-start p-4 w-full bg-gradient-to-b from-black/10 to-transparent">
          <div className="flex flex-col items-start">
            <p className="text-xs text-black uppercase font-bold">
              {event.year}
            </p>
            <h4 className="text-black font-medium text-large">{event.title}</h4>
          </div>
        </CardHeader>
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="w-full h-full relative">
            <Image
              alt={`${event.title} background`}
              className="p-8 pt-16"
              layout="fill"
              objectFit="contain"
              src={event.image}
            />
          </div>
        </div>
        {isFlipped && (
          <motion.div
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/80 z-20 p-4 flex flex-col"
            initial={{ opacity: 0 }}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-white font-medium text-lg">{event.year}</h3>
              <Button
                isIconOnly
                className="text-white/70 p-0"
                size="sm"
                variant="light"
                onClick={(e) => {
                  e.stopPropagation();
                  onCardClick(index);
                }}
              >
                <Icon icon="lucide:x" width={16} />
              </Button>
            </div>
            <p className="text-white/80 text-sm mb-3">{event.description}</p>
            <div className="flex flex-wrap gap-1 mt-auto">
              {event.tags.map((tag) => (
                <Chip
                  key={tag}
                  className="text-xs"
                  classNames={{
                    base: "bg-white/10",
                    content: "text-white font-medium",
                  }}
                  radius="sm"
                  size="sm"
                  variant="flat"
                >
                  {tag}
                </Chip>
              ))}
            </div>
          </motion.div>
        )}
      </Card>
    </motion.div>
  );
};

export default TimelineCard;
