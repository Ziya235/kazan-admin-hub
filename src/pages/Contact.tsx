import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const phoneNumber = "79172212144"; // only digits, no '+'
  const telegramUsername = "username"; // replace with your Telegram username

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const openTelegram = () => {
    window.open(`https://t.me/${telegramUsername}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-36 pb-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team for inquiries about our services
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name"> Name</Label>
                    <Input id="name" placeholder="John " required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Surname</Label>
                    <Input id="name" placeholder="Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (XXX) XXX-XX-XX"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your warehouse needs..."
                      rows={10}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Map */}
            <div className="space-y-6">
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold">Address</h3>
                      <a
                        target="_blank"
                        href="https://yandex.az/maps/?ll=52.492509%2C55.994747&mode=routes&rtext=~55.892678%2C48.968021&rtt=auto&ruri=~&z=6.2"
                        className="text-sm text-muted-foreground"
                      >
                        📍 Republic of Tatarstan, Pestrechinsky municipal
                        district, Shalinskoye rural settlement, Industrial Park
                        M7 Shali, land plot 1.
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-sm text-muted-foreground">
                        +7 917 221 21 44
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-sm text-muted-foreground">
                        info@kazansklad.ru
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="cursor-default">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex gap-2">
                        <h3
                          className="font-semibold cursor-pointer text-primary hover:text-primary/70 transition-colors"
                          onClick={openWhatsApp}
                        >
                          WhatsApp /
                        </h3>
                        <h3
                          className="font-semibold cursor-pointer text-primary hover:text-primary/70 transition-colors"
                          onClick={openTelegram}
                        >
                          Telegram
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        +7 917 221 21 44
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Yandex Map */}
              <Card className="h-[400px]">
                <CardContent className="p-0 h-full relative">
                  <iframe
                    src="https://yandex.com/map-widget/v1/?um=constructor%3A56abc44b4cedd2a5ae1486e319c08ba41e5f7c58f19b47eed091bcc07d1d3b01&source=constructor"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="rounded-lg"
                  />
                  <div className="absolute bottom-2 right-2 bg-white/80 text-sm text-gray-700 px-3 py-1 rounded-md shadow-md">
                    55°53'33.6"N 48°58'04.9"E
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
