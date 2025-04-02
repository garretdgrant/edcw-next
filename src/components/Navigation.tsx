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
  const locations = [
    "Sacramento",
    "Lake Tahoe",
    "San Francisco",
    "San Jose",
    "Napa Valley",
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
            className="text-secondary hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="text-secondary hover:text-primary transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="text-secondary hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="/pricing"
            className="text-secondary hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <div className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-secondary hover:text-primary transition-colors">
                Locations <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background shadow-md border border-border rounded-md p-2 w-48">
                {locations.map((location) => (
                  <DropdownMenuItem
                    key={location}
                    asChild
                    className="px-4 py-2 cursor-pointer hover:bg-secondary/10 rounded-xs"
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
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
          <Button className="text-white" asChild>
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
