import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7710053612",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      value: "assetarch27@gmail.com",
      description: "Send us your queries"
    },
    {
      icon: MapPin,
      title: "Office",
      value: "5/36, Motilal Nagar No.3, M.G Road",
      description: "Goregaon (West), Mumbai - 400104"
    },
    {
      icon: Clock,
      title: "Hours",
      value: "Mon - Sat: 9:00 AM - 7:00 PM",
      description: "Sunday: By appointment only"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your investment journey? Contact us for a free consultation 
            and personalized investment strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Contact Information
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="font-medium text-sm">{info.value}</p>
                        <p className="text-xs text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <Card 
              className="p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.open('https://maps.app.goo.gl/VoQnrZbMp2my5uG2A?g_st=aw', '_blank')}
            >
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center justify-between">
                  Visit Our Office
                  <MapPin className="h-4 w-4 text-primary" />
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="bg-muted rounded-lg h-48 flex items-center justify-center group">
                  <div className="text-center text-muted-foreground group-hover:text-primary transition-colors">
                    <MapPin className="h-12 w-12 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm font-medium">Office Location Map</p>
                    <p className="text-xs">Goregaon (West), Mumbai</p>
                    <p className="text-xs mt-2 text-primary font-medium">Click to open in Google Maps</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      First Name *
                    </label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Last Name *
                    </label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="+91 XXXXX XXXXX" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Investment Interest
                  </label>
                  <select className="w-full p-3 border border-input rounded-md bg-background">
                    <option value="">Select your interest</option>
                    <option value="mutual-funds">Mutual Funds</option>
                    <option value="stocks">Stocks & Equity</option>
                    <option value="bonds">Bonds & Fixed Income</option>
                    <option value="ulips">ULIPs</option>
                    <option value="insurance">Insurance Products</option>
                    <option value="portfolio">Portfolio Review</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Tell us about your investment goals and how we can help you..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;