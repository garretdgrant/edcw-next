"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { Menu } from "lucide-react";

interface MobileNavProps {
  locations: string[];
}

const MobileNav = ({ locations }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold text-center sm:text-left">
            Main Menu
          </SheetTitle>
        </SheetHeader>

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

            <div className="py-2 border-b border-border">
              <p className="text-lg font-medium mb-2">Locations</p>
              <div className="pl-4 flex flex-col space-y-2">
                {locations.map((location) => (
                  <Link
                    key={location}
                    href={`/locations/california/${location.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-secondary hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {location}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <Button
              className="w-full text-white bg-primary hover:bg-accent/90"
              onClick={() => setIsOpen(false)}
            >
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
