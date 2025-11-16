import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import img1 from "@/assets/Warehouse/img1.jpeg";
import img2 from "@/assets/Warehouse/img2.jpeg";
import img3 from "@/assets/Warehouse/img3.jpeg";
import img4 from "@/assets/Warehouse/img4.jpeg";
import img5 from "@/assets/Warehouse/img5.jpeg";
import img6 from "@/assets/Warehouse/img6.jpeg";
import img7 from "@/assets/Warehouse/img7.jpeg";
import img8 from "@/assets/Warehouse/img8.jpeg";
import img9 from "@/assets/Warehouse/img9.jpeg";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const galleryItems = [
  { type: "image", src: img1 },
  { type: "image", src: img2 },
  { type: "image", src: img3 },
  { type: "image", src: img4 },
  { type: "image", src: img5 },
  { type: "image", src: img6 },
  { type: "image", src: img7 },
  { type: "image", src: img8 },
  { type: "image", src: img9 },
];

export default function Gallery() {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Navigation />

      <section className="max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            {t("gallery.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("gallery.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-2xl shadow-md relative group bg-white"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Warehouse ${index + 1}`}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  className="h-64 w-full object-cover rounded-2xl"
                />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
