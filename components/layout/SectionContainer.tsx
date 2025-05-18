"use client";

import React from "react";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      {React.Children.map(children, (child, index) => (
        <>
          <div
            key={`section-${index}`}
            className="min-h-screen w-full flex items-center justify-center py-12 md:py-16"
          >
            <div className="w-full">{child}</div>
          </div>

          {index < React.Children.count(children) - 1 && (
            <div
              key={`divider-${index}`}
              className="w-full flex justify-center py-4"
            >
              <div className="w-1/3 h-1 bg-gray-200 rounded-full" />
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default SectionContainer;
