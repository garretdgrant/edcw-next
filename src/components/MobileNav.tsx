"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

interface MobileNavProps {
  _locations: string[];
}

const MobileNav = ({ _locations }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full py-6">
          <div className="flex flex-col space-y-4">
            {[
              { href: "/services", label: "Services" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/about", label: "About" },
              { href: "/pricing", label: "Pricing" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium py-2 border-b border-border"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* <div className="py-2 border-b border-border">
              <p className="text-lg font-medium mb-2">Locations</p>
              <div className="pl-4 flex flex-col space-y-2">
                {locations.map((location) => (
                  <Link
                    key={location}
                    href={`/locations/${location.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-secondary hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {location}
                  </Link>
                ))}
              </div>
            </div> */}
          </div>

          <div className="mt-auto">
            <Button
              className="w-full text-white bg-accent hover:bg-accent/90"
              onClick={() => setIsOpen(false)}
            >
              Get a Free Quote
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
