import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Truck, Package, BarChart3, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: Package,
      title: "Secure Storage",
      description: "State-of-the-art warehouse facilities with 24/7 security monitoring",
    },
    {
      icon: Truck,
      title: "Fast Logistics",
      description: "Efficient distribution network ensuring timely deliveries",
    },
    {
      icon: BarChart3,
      title: "Inventory Management",
      description: "Advanced tracking systems for real-time inventory control",
    },
    {
      icon: Shield,
      title: "Insured Services",
      description: "Comprehensive insurance coverage for your peace of mind",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Kazan Warehouse?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry-leading warehouse solutions backed by years of experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Supply Chain?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how our warehouse solutions can benefit your business
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
