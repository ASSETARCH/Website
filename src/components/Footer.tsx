import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import assetarchLogo from "@/assets/assetarch.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Mutual Funds",
    "Stocks & Equity",
    "Bonds & Fixed Income",
    "Insurance Products"
  ];

  const legalLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Disclaimer",
    "Risk Disclosure"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img 
                src={assetarchLogo} 
                alt="AssetArch" 
                className="h-20 w-auto object-contain filter brightness-110 contrast-110 hover:scale-105 transition-transform duration-200"
              />
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Your trusted partner for comprehensive investment solutions. 
              Building wealth through professional guidance and strategic planning.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 7710053612</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span className="text-sm">assetarch27@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm">
                  5/36, Motilal Nagar No.3, M.G Road<br />
                  Goregaon (West), Mumbai - 400104
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Our Products</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-sm text-primary-foreground/80">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-primary-foreground/80">
              Subscribe to our newsletter for market insights and investment tips.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" className="w-full">
                Subscribe
              </Button>
            </div>
            
            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Follow Us</h4>
              <div className="flex space-x-3">
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary-foreground/10" onClick={() => window.open('https://www.facebook.com/share/1BGQk8h7K4/', '_blank')}>
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary-foreground/10" onClick={() => window.open('https://x.com/assetarch27', '_blank')}>
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary-foreground/10" onClick={() => window.open('https://www.linkedin.com/in/asset-arch-a05887379', '_blank')}>
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary-foreground/10" onClick={() => window.open('https://www.instagram.com/_assetarch_', '_blank')}>
                  <Instagram className="h-4 w-4" />
                </Button>
              </div>******
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-primary-foreground/80">
            © 2024 AssetArch. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <p className="text-xs text-primary-foreground/60 leading-relaxed">
            <strong>Disclaimer:</strong> Mutual Fund investments are subject to market risks. 
            Please read all scheme related documents carefully before investing. Past performance 
            is not indicative of future returns. AssetArch is a AMFI registered mutual fund distributor 
            and IRDA licensed insurance agent. All investment decisions should be made in consultation 
            with a qualified financial advisor.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;