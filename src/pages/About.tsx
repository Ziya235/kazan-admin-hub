import React, { useRef } from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function AboutWarehouseUI() {
  const inputRef = useRef(null);

  const focusInput = () => {
    // ref vasitəsilə input elementinə fokus veririk
    inputRef.current.focus();
  };
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Navigation />



      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16 pt-24">
        <section>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 border-b pb-2">About the Company</h1>
          <p className="text-lg leading-relaxed mb-4">Dear partners and future clients!</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome on behalf of our company specializing in secure storage. We are pleased to announce a major
            expansion of our capabilities and the start of construction on a modern <strong>2.5-hectare warehouse complex</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The first phase of construction is a <strong>freezer warehouse</strong> with temperatures ranging from <strong>-18°C to -25°C</strong>. The second
            phase is a <strong>general-purpose warehouse</strong> without temperature control.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are confident that our new warehouse complex will be a reliable and efficient solution for your business.
            <br />We invite you to collaborate!
          </p>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 border-b pb-2">Infrastructure and Logistics Advantages</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Our company is located in the <strong>M-7 Shali Industrial Park</strong>, one of the largest industrial clusters in the region,
            covering a total area of <strong>34.5 hectares</strong>. The park is designed to accommodate commercial and industrial
            facilities and features a perimeter fence, a secure area, and 24-hour access control through a checkpoint.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The warehouse complex is located on the first line of the <strong>M-7 federal highway</strong>, providing excellent access and
            efficient logistics. The site is located at the intersection of important transportation routes:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Moscow - Ufa</li>
            <li>Kazan - Naberezhnye Chelny</li>
            <li>Kazan - Chistopol</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-4">
            The new <strong>M-12 "Vostok"</strong> toll road runs nearby, and the <strong>Moscow-Beijing highway</strong> is also being designed,
            which significantly increases the strategic importance of this logistics hub.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The site also has all the necessary communications and the possibility of further infrastructure expansion.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
