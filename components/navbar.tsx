"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import NextLink from "next/link";
import { Icon } from "@iconify/react";

import { Logo } from "@/components/icons";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className = "" }: NavbarProps) => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Timeline", href: "#timeline" },
  ];

  const socialLinks = [
    { icon: "mdi:github", href: "https://github.com", ariaLabel: "GitHub" },
    {
      icon: "mdi:linkedin",
      href: "https://linkedin.com",
      ariaLabel: "LinkedIn",
    },
    { icon: "mdi:twitter", href: "https://twitter.com", ariaLabel: "Twitter" },
  ];

  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [manuallySelected, setManuallySelected] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
    
    const handleResize = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      if (manuallySelected !== null) return;

      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + navbarHeight + 20; // Adding offset for navbar plus a small buffer

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [manuallySelected, navbarHeight]);

  useEffect(() => {
    if (manuallySelected !== null) {
      const timer = setTimeout(() => {
        setManuallySelected(null);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [manuallySelected]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    
    setActiveSection(targetId);
    
    setManuallySelected(targetId);

    if ((window as any).scrollToSection) {
      (window as any).scrollToSection(targetId);
    }

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const isActive = (itemId: string) => {
    if (manuallySelected !== null) {
      return manuallySelected === itemId;
    }

    return activeSection === itemId;
  };

  return (
    <HeroUINavbar
      ref={navbarRef}
      shouldHideOnScroll
      className={`${className} fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled || isMenuOpen 
          ? "bg-background/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      } border-0`}
      isBlurred={isMenuOpen}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="static"
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Left side - Logo */}
      <NavbarContent className="basis-1/4" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-1"
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            <Logo />
            <p className="font-bold text-inherit">ACME</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Middle - Navigation Items */}
      <NavbarContent className="hidden basis-1/2 sm:flex" justify="center">
        <ul className="flex gap-6 justify-center">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={`hover:text-[#FF705B] transition-all duration-200 ${
                  isActive(item.href.replace("#", ""))
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-[#FF705B] to-[#FFB457] font-medium"
                    : "text-default-600"
                }`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* Right side - Social Links */}
      <NavbarContent className="hidden basis-1/4 sm:flex gap-4" justify="end">
        {socialLinks.map((link) => (
          <NavbarItem key={link.href}>
            <Button
              isIconOnly
              aria-label={link.ariaLabel}
              as={Link}
              className="text-default-600 hover:text-[#FF705B] transition-all duration-200 bg-transparent"
              href={link.href}
              size="sm"
              target="_blank"
              variant="light"
            >
              <Icon height={20} icon={link.icon} width={20} />
            </Button>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile menu toggle */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu className="pt-6 bg-background/90 backdrop-blur-md">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {navItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                className={
                  isActive(item.href.replace("#", ""))
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-[#FF705B] to-[#FFB457] font-medium"
                    : ""
                }
                color={
                  isActive(item.href.replace("#", ""))
                    ? "warning"
                    : "foreground"
                }
                href={item.href}
                size="lg"
                onClick={(e: any) => handleNavClick(e, item.href)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}

          <div className="flex mt-4 gap-4 justify-center">
            {socialLinks.map((link) => (
              <Button
                key={link.href}
                isIconOnly
                aria-label={link.ariaLabel}
                as={Link}
                className="text-default-600 hover:text-[#FF705B] transition-all duration-200"
                href={link.href}
                size="sm"
                target="_blank"
                variant="light"
              >
                <Icon height={20} icon={link.icon} width={20} />
              </Button>
            ))}
          </div>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

export default Navbar;