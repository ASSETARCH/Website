import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, TrendingUp, Clock } from "lucide-react";
import ketanImage from "@/assets/ketan.png";

const About = () => {
  const stats = [
    
  ];

  const certifications = [
    "AMFI Registered Mutual Fund Distributor",
    "IRDA Licensed Insurance Agent",
    "NISM Certified Investment Advisor",
    "CFP - Certified Financial Planner"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content - 50% width */}
          <div className="space-y-8 lg:w-full">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About Ketan Kadam & AssetArch
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  With over 15 years of experience in financial markets, Ketan Kadam has been 
                  helping individuals and families achieve their financial goals through strategic 
                  investment planning and wealth management.
                </p>
                <p>
                  AssetArch was founded with a simple vision: to make quality investment advice 
                  accessible to everyone. We believe that every investor, regardless of their 
                  investment size, deserves professional guidance and personalized attention.
                </p>
                <p>
                  Our approach combines traditional investment wisdom with modern technology to 
                  provide you with the best possible outcomes for your financial future.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Certifications & Licenses
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="justify-start p-3 text-sm">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Ketan Image - 50% width, centered */}
          <div className="flex justify-center lg:justify-center w-full">
            <div className="relative">
              <img 
                src={ketanImage} 
                alt="Ketan Kadam - Investment Advisor" 
                className="w-full max-w-2xl h-[500px] object-cover rounded-2xl shadow-2xl" 
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-full p-3 shadow-lg">
                <TrendingUp className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To democratize access to professional investment advice and help every Indian 
              build long-term wealth through disciplined investing, comprehensive financial 
              planning, and continuous education.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-growth/10 rounded-full flex items-center justify-center mx-auto">
              <TrendingUp className="h-8 w-8 text-growth" />
            </div>
            <h4 className="text-xl font-semibold text-foreground">Transparency</h4>
            <p className="text-muted-foreground">
              Clear, honest communication about fees, risks, and expected returns
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold text-foreground">Client-First</h4>
            <p className="text-muted-foreground">
              Your financial goals and interests are always our top priority
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <Award className="h-8 w-8 text-accent-foreground" />
            </div>
            <h4 className="text-xl font-semibold text-foreground">Excellence</h4>
            <p className="text-muted-foreground">
              Continuous learning and improvement to deliver the best outcomes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;