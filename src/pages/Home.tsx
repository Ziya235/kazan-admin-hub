import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Truck, Package, BarChart3, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import sklad1 from "@/assets/sklad1.webp";
import sklad2 from "@/assets/sklad2.webp";
import sklad3 from "@/assets/sklad3.webp";
import sklad4 from "@/assets/sklad4.webp";

const Home = () => {
  const features = [
    {
      icon: Package,
      title: "Secure Storage",
      description:
        "State-of-the-art warehouse facilities with 24/7 security monitoring",
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

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-blue-700 text-center mb-4">
              Welcome to Kazan Warehouse
            </h1>
            <p className="text-center text-gray-600 text-lg">
              We provide modern solutions in the field of responsible storage in
              a warehouse.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <img
                  src={sklad1}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  All types of loading and unloading operations
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  We perform a full range of loading and unloading services
                  using both manual labor and specialized equipment.
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Our team ensures fast, safe, and accurate handling of goods
                  during receiving, shipping, and movement.
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  We handle any packaging: pallets, boxes, and individual items.
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  The temperature regime is maintained at all stages of
                  unloading.
                </p>
                <p className="text-gray-600 text-sm">
                  Operations are carried out using reach trucks, hydraulic carts
                  and other modern equipment.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <img
                  src={sklad2}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  Address storage using modern racking equipment
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  We offer targeted warehousing using multi-tier shelving
                  systems. This approach ensures quick access to each item and
                  maximum efficiency of warehouse space.
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-gray-700 mb-2">
                    ✓ Advantages
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Multi-level metal shelving</li>
                    <li>• Party delineation and space optimization</li>
                    <li>• Possibility of piece and pallet accounting</li>
                    <li>• Accounting by expiration dates and series</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <img
                  src={sklad3}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  Mechanized docking system
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  We organize cross-docking—the rapid transfer of goods from
                  incoming to outgoing shipments without long-term storage.
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-gray-700 mb-2">
                    ✓ Features of our system
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Mechanized and manual cargo handling</li>
                    <li>
                      • Movement between zones without intermediate storage
                    </li>
                    <li>• Processing of consignments within 24 hours</li>
                    <li>• Minimizing transport downtime and reducing costs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <img
                  src={sklad4}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  Packaging, sorting, rejection
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  We provide a full range of services for packaging, sorting,
                  and culling goods.
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Our specialists ensure visual inspection, assembly, and
                  preparation of products for shipment.
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-gray-700 mb-2">
                    ⚙ Includes:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      • Checking the integrity, markings and quality of
                      packaging
                    </li>
                    <li>• Sorting products manually and using machinery</li>
                    <li>
                      • Identification and removal of defective or expired goods
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <a
          href="https://wa.me/79172212144"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose Kazan Warehouse?
            </h2>
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
          <h2 className="text-4xl font-bold mb-6">
            Ready to Optimize Your Supply Chain?
          </h2>
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
