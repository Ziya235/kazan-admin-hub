import { Package, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/Logo.webp";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" width="36px" height="36px" />
              <span className="text-xl font-bold">Kazan Warehouse</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Your trusted partner for professional warehouse and logistics
              solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-accent transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-accent transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Warehouse Storage</li>
              <li>Logistics Management</li>
              <li>Distribution Services</li>
              <li>Inventory Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Kazan, Russia
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  +7 917 221 21 44
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  info@kazanwarehouse.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Kazan Warehouse. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
