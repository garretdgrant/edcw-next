import { Button } from "./ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

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
        <Link href="/" className="text-xl font-semibold">
          EDC Web Design
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
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Contact
          </Button>
          <Button className="text-white">Get a Quote</Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full py-6">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/services"
                  className="text-lg font-medium py-2 border-b border-border"
                >
                  Services
                </Link>
                <Link
                  href="/portfolio"
                  className="text-lg font-medium py-2 border-b border-border"
                >
                  Portfolio
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium py-2 border-b border-border"
                >
                  About
                </Link>
                <Link
                  href="/pricing"
                  className="text-lg font-medium py-2 border-b border-border"
                >
                  Pricing
                </Link>

                <div className="py-2 border-b border-border">
                  <p className="text-lg font-medium mb-2">Locations</p>
                  <div className="pl-4 flex flex-col space-y-2">
                    {locations.map((location) => (
                      <Link
                        key={location}
                        href={`/locations/${location.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-secondary hover:text-primary"
                      >
                        {location}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <Button className="w-full text-white bg-accent hover:bg-accent/90">
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
