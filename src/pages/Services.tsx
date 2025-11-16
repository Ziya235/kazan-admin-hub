import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import logisticsImage from "@/assets/logistics-service.jpg";
import storageImage from "@/assets/storage-service.jpg";
import distributionImage from "@/assets/distribution-service.jpg";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { data: services, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  // Default services if none in database
  const defaultServices = [
    {
      id: "1",
      title: "Logistics Management",
      description:
        "Comprehensive logistics solutions including transportation, route optimization, and delivery coordination to ensure your goods reach their destination efficiently.",
      image_url: logisticsImage,
    },
    {
      id: "2",
      title: "Warehouse Storage",
      description:
        "Secure, climate-controlled storage facilities with advanced inventory management systems. We handle everything from small parcels to large pallets.",
      image_url: storageImage,
    },
    {
      id: "3",
      title: "Distribution Services",
      description:
        "Efficient distribution network with real-time tracking, quality control, and flexible scheduling to meet your business requirements.",
      image_url: distributionImage,
    },
  ];

  const { t } = useTranslation();

  const displayServices =
    services && services.length > 0 ? services : defaultServices;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {" "}
            {t("services.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description || ""}
                  imageUrl={service.image_url || ""}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
