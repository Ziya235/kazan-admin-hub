import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import logo from "@/assets/Logo.webp";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-primary"
          >
            <img src={logo} alt="" width="36px" height="36px" />
            Kazan Warehouse
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              className="text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-semibold"
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className="text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-semibold"
            >
              Services
            </NavLink>

            <NavLink
              to="/about"
              className="text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-semibold"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-semibold"
            >
              Contact
            </NavLink>
            <NavLink to="/admin">
              <Button variant="default" size="sm">
                Admin
              </Button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              <NavLink
                to="/"
                className="px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
                activeClassName="text-primary bg-muted font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                className="px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
                activeClassName="text-primary bg-muted font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </NavLink>
              <NavLink
                to="/about"
                className="px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
                activeClassName="text-primary bg-muted font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
                activeClassName="text-primary bg-muted font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
              <NavLink to="/admin" onClick={() => setIsMenuOpen(false)}>
                <Button variant="default" size="sm" className="w-full">
                  Admin
                </Button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
