"use client";

import React from "react";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";

import { Logo } from "@/components/icons";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-3 px-4 border-t border-gray-200/40 relative z-20 bg-transparent">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Logo size={24} />
          <span className="font-medium text-gray-800">ACME</span>
          <span className="text-gray-600 mx-2">•</span>
          <span className="text-gray-600 text-sm">© 2025</span>
          <span className="text-gray-600 mx-2">•</span>
          <span className="text-gray-600 text-sm">Built with HeroUI</span>
        </div>

        <div className="flex items-center gap-4">
          <Link
            className="text-gray-600 hover:text-[#FF705B] transition-all duration-200"
            href="https://github.com"
            target="_blank"
          >
            <Icon height={20} icon="mdi:github" width={20} />
          </Link>
          <Link
            className="text-gray-600 hover:text-[#FF705B] transition-all duration-200"
            href="https://twitter.com"
            target="_blank"
          >
            <Icon height={20} icon="mdi:twitter" width={20} />
          </Link>
          <Link
            className="text-gray-600 hover:text-[#FF705B] transition-all duration-200"
            href="https://instagram.com"
            target="_blank"
          >
            <Icon height={20} icon="mdi:instagram" width={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
