import React from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useTranslation } from "react-i18next";

export default function AboutWarehouseUI() {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Navigation />

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16 pt-24">
        <section>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 border-b pb-2">
            {t("about.title")}
          </h1>
          <p className="text-lg leading-relaxed mb-4">{t("about.greeting")}</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t("about.intro-1")}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t("about.intro-2")}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {t("about.intro-3")}
          </p>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 border-b pb-2">
            {t("about.logisticsTitle")}
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            {t("about.logistics-1")}
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            {t("about.logistics-2")}
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            {t("about.routes", { returnObjects: true }).map((route: string, idx: number) => (
              <li key={idx}>{route}</li>
            ))}
          </ul>

          <p className="text-gray-700 leading-relaxed mb-4">
            {t("about.logistics-3")}
          </p>

          <p className="text-gray-700 leading-relaxed">
            {t("about.logistics-4")}
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
