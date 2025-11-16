import { Package, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "@/assets/Logo.webp";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" width="36px" height="36px" />
              <span className="text-xl font-bold">
                {t("footer.brand.name")}
              </span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              {t("footer.brand.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">
              {t("footer.quickLinks.title")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  {t("footer.quickLinks.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-accent transition-colors"
                >
                  {t("footer.quickLinks.services")}
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-accent transition-colors"
                >
                  {t("navigation.gallery")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-accent transition-colors"
                >
                  {t("footer.quickLinks.about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-accent transition-colors"
                >
                  {t("footer.quickLinks.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.services.title")}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>{t("footer.services.service-1")}</li>
              <li>{t("footer.services.service-2")}</li>
              <li>{t("footer.services.service-3")}</li>
              <li>{t("footer.services.service-4")}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.contact.title")}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  {t("footer.contact.address")}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href={`tel:${t("footer.contact.phone")}`}
                  className="text-primary-foreground/80 hover:underline"
                >
                  {t("footer.contact.phone")}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href={`mailto:${t("footer.contact.email")}`}
                  className="text-primary-foreground/80 hover:underline"
                >
                  {t("footer.contact.email")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p
            dangerouslySetInnerHTML={{
              __html: t("footer.copyright", { year: new Date().getFullYear() }),
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
