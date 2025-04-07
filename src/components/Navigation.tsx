"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import MobileNav from "./MobileNav";

const Navigation = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const locations = [
    "Placerville",
    "El Dorado Hills",
    "Folsom",
    "Auburn",
    "Napa Valley",
    "Sacramento",
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2 text-xl font-semibold"
        >
          <Image
            src="/assets/logo.webp"
            alt="EDC Web Design logo"
            width={40}
            height={40}
            priority
          />
          <span>EDC Web Design</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/services"
            className={`${isActive("/services") ? "text-primary" : "text-secondary"} hover:text-primary transition-colors`}
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className={`${isActive("/portfolio") ? "text-primary" : "text-secondary"} hover:text-primary transition-colors`}
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className={`${isActive("/about") ? "text-primary" : "text-secondary"} hover:text-primary transition-colors`}
          >
            About
          </Link>
          <Link
            href="/pricing"
            className={`${isActive("/pricing") ? "text-primary" : "text-secondary"} hover:text-primary transition-colors`}
          >
            Pricing
          </Link>
          <div className="relative inline-block">
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center ${isActive("/locations") ? "text-primary" : "text-secondary"} hover:text-primary transition-colors`}
              >
                Locations <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="bg-white shadow-md border border-border rounded-md p-2 w-48 absolute z-50"
                align="center"
              >
                {locations.map((location) => (
                  <DropdownMenuItem
                    key={location}
                    asChild
                    className="px-4 py-2 cursor-pointer hover:bg-secondary/10 rounded-sm"
                  >
                    <Link
                      href={`/locations/${location.toLowerCase().replace(/\s+/g, "-")}`}
                      className="w-full"
                    >
                      {location}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Link
            href="/blog"
            className={`${isActive("/blog") ? "text-primary" : "text-secondary"} hover:text-primary transition-colors`}
          >
            Blog
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button className="bg-accent text-primary hover:text-accent" asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <MobileNav locations={locations} />
      </div>
    </nav>
  );
};

export default Navigation;
