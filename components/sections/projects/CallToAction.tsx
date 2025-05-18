"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";

interface CallToActionProps {
  emailAddress?: string;
}

const testimonials = [
  { text: "Exceptional work!", stars: 5, name: "Maria S." },
  { text: "Incredible results", stars: 5, name: "Alex T." },
  { text: "Outstanding quality", stars: 4, name: "James K." },
  { text: "Highly recommended", stars: 5, name: "Sarah P." },
  { text: "Professional service", stars: 4, name: "David M." },
];

export const CallToAction: React.FC<CallToActionProps> = ({
  emailAddress = "your.email@example.com",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <motion.div
      className="mt-4 mb-12"
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Container for the two elements with fixed widths */}
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-3xl">
            {/* Testimonial Container with fixed width */}
            <div className="w-full md:w-72 h-8 flex justify-center md:justify-end shrink-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  animate={{ opacity: 1 }}
                  className="flex items-center"
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        className={
                          i < currentTestimonial.stars
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }
                        icon="mdi:star"
                        width={16}
                      />
                    ))}
                  </div>
                  <span className="text-default-600 italic whitespace-nowrap">
                    &quot;{currentTestimonial.text}&quot;{" "}
                    <span className="font-medium text-default-500 not-italic">
                      — {currentTestimonial.name}
                    </span>
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Button Container with fixed position */}
            <div className="shrink-0">
              <Button
                as="a"
                className="bg-gray-300 text-gray-700 border-none"
                href={`mailto:${emailAddress}`}
                radius="full"
                size="sm"
                startContent={<Icon icon="lucide:mail" width={16} />}
                variant="flat"
              >
                Let&apos;s collaborate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CallToAction;
