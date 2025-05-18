"use client";

import React, { useEffect } from "react";

import HeroSection from "@/components/sections/landing/HeroSection";
import ProjectsSection from "@/components/sections/projects/ProjectsSection";
import TimeLineSection from "@/components/sections/timeline/TimelineSection";
import SectionContainer from "@/components/layout/SectionContainer";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const section = document.getElementById(sectionId);

    if (section) {
      const navbar = document.querySelector("nav");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;

      const sectionTop = section.offsetTop;

      window.scrollTo({
        top: sectionTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  const handleExploreClick = () => {
    scrollToSection("projects");
  };

  useEffect(() => {
    (window as any).scrollToSection = scrollToSection;

    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);

      setTimeout(() => scrollToSection(sectionId), 100);
    }

    return () => {
      delete (window as any).scrollToSection;
    };
  }, []);

  return (
    <div className="relative">
      <div className="fixed inset-0 bg-gradient-to-b from-white via-gray-50 to-white pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-full h-2/3 bg-gradient-radial from-[#FF705B]/8 via-[#FF705B]/3 to-transparent blur-[100px] rounded-full transform -translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="fixed top-0 right-0 w-full h-2/3 bg-gradient-radial from-[#5EA2EF]/8 via-[#5EA2EF]/3 to-transparent blur-[100px] rounded-full transform translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="fixed top-1/2 left-1/2 w-full h-full bg-gradient-radial from-purple-500/3 via-transparent to-transparent blur-[150px] rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="fixed top-1/4 right-1/3 w-1/3 h-1/3 bg-gradient-radial from-yellow-400/5 to-transparent blur-[80px] rounded-full pointer-events-none" />
      <div className="fixed bottom-1/4 left-1/3 w-1/3 h-1/3 bg-gradient-radial from-teal-400/5 to-transparent blur-[80px] rounded-full pointer-events-none" />

      <SectionContainer>
        <section id="home">
          <HeroSection onExplore={handleExploreClick} />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="timeline">
          <TimeLineSection />
        </section>
      </SectionContainer>
    </div>
  );
}