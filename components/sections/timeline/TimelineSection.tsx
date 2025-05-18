"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Divider } from "@heroui/divider";

import { timelineEvents } from "./data";
import TimelineCard from "./TimelineCard";
import TimelineHeaderCard from "./TimelineHeaderCard";

import { title } from "@/components/primitives";

export const TimelineSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [flippedCards, setFlippedCards] = useState<boolean[]>(
    Array(timelineEvents.length).fill(false),
  );

  useEffect(() => {
    setFlippedCards(Array(timelineEvents.length).fill(false));
  }, []);

  const handleCardClick = (index: number) => {
    const newFlippedCards = Array(timelineEvents.length).fill(false);

    if (flippedCards[index]) {
      setFlippedCards(newFlippedCards);
      setActiveIndex(-1);

      return;
    }

    newFlippedCards[index] = true;
    setFlippedCards(newFlippedCards);
    setActiveIndex(index);
  };

  return (
    <div className="w-full px-4 py-8 md:py-0 flex flex-col items-center">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2
            className={title({ size: "md", fullWidth: true, color: "yellow" })}
          >
            Career{" "}
            <span className={title({ color: "foreground" })}>Timeline</span>
          </h2>
          <p className="text-default-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            A journey through my professional experiences and future aspirations
          </p>

          <Divider className="max-w-md w-full mx-auto my-6" />
        </motion.div>

        {/* Timeline Cards in Grid Layout - Fixed with explicit classes */}
        <div className="max-w-[900px] gap-4 grid grid-cols-12 grid-rows-2 mx-auto">
          {/* First row - 3 equal cards */}
          {timelineEvents.slice(0, 3).map((event, i) => (
            <TimelineCard
              key={event.id}
              event={event}
              index={i}
              isFlipped={flippedCards[i]}
              onCardClick={handleCardClick}
            />
          ))}

          {/* Explicitly control the layout for the bottom two cards */}
          <div className="col-span-12 sm:col-span-5">
            <TimelineHeaderCard
              event={timelineEvents[3]}
              index={3}
              isFlipped={flippedCards[3]}
              position="current"
              onCardClick={handleCardClick}
            />
          </div>

          <div className="col-span-12 sm:col-span-7">
            <TimelineHeaderCard
              event={timelineEvents[4]}
              index={4}
              isFlipped={flippedCards[4]}
              position="future" 
              onCardClick={handleCardClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;