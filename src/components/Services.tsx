import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { TrendingUp, PieChart, Shield, Target, Briefcase, ArrowRight, X, Coins } from "lucide-react";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    {
      icon: TrendingUp,
      title: "Stocks & Equity",
      description: "Direct equity investments with research-backed recommendations for long-term wealth creation.",
      features: ["Market Analysis", "Portfolio Tracking", "Risk Assessment"],
      color: "growth"
    },
    {
      icon: PieChart,
      title: "Mutual Funds",
      description: "Diversified mutual fund portfolios tailored to your risk profile and investment goals.",
      features: ["SIP Planning", "Fund Selection", "Goal Mapping"],
      color: "primary"
    },
    {
      icon: Shield,
      title: "Bonds & Fixed Income",
      description: "Stable income through government and corporate bonds with guaranteed returns.",
      features: ["Government Bonds", "Corporate Bonds", "Fixed Deposits"],
      color: "accent"
    },
    
    {
      icon: Briefcase,
      title: "Insurance Products",
      description: "Comprehensive insurance solutions for life, health, and wealth protection.",
      features: ["Life Insurance", "Health Cover", "Wealth Protection"],
      color: "secondary"
    },
    {
      icon: Coins,
      title: "Alternate Investments",
      description: "Diversify your portfolio with alternative investment options beyond traditional markets.",
      features: ["Real Estate", "Commodities", "Private Equity"],
      color: "destructive"
    }
  ];

  const productDetails = {
    "Stocks & Equity": {
      detailedDescription: "Stocks and equities represent ownership in a company, giving investors a share in its profits and growth. They are traded on major exchanges like the National Stock Exchange of India (NSE) and the Bombay Stock Exchange (BSE). Prices fluctuate based on company performance, market sentiment, and economic factors. Investors can choose short-term trading or long-term wealth creation, with high liquidity enabling easy buying and selling during market hours.Our comprehensive stock and equity investment service provides you with expert analysis, real-time market insights, and personalized portfolio management. We help you build a diversified equity portfolio that aligns with your risk tolerance and financial goals.",
      benefits: [
        "Higher Returns Potential – Equities have historically delivered higher long-term returns than most other investments.",
        "Capital Growth – Share prices can rise as companies expand and generate more profits.",
        "Dividend Income – Many companies pay dividends, offering a regular income stream.",
        "Liquidity – Stocks can be easily bought or sold on exchanges like NSE and BSE.",
        "Beating Inflation – Equity growth often outpaces inflation over the long term.",
        "Flexible Investment Styles – Choose between long-term investing or short-term trading strategies."
      ],
      minimumInvestment: "₹10,000",
      expectedReturns: "12-18% annually (historical)",
      riskLevel: "Moderate to High"
    },
    "Mutual Funds": {
      detailedDescription: "A mutual fund pools money from many investors to buy a diversified mix of stocks, bonds, and other assets. Mutual funds are a smart way to grow your money, offering diversification and professional management. They are also easily accessible, even with small investment amounts. Professional fund managers handle these investments, aiming for strong returns while controlling risk. Mutual funds can suit goals like long-term wealth creation, regular income, or capital preservation. Access a wide range of mutual funds carefully selected by our experts. From equity funds to debt funds, we help you choose the right mix based on your investment horizon and risk appetite.",
      benefits: [
        "Professional Management – Expert fund managers handle research and investment decisions.",
        "Affordability – Start investing with small amounts through SIPs (Systematic Investment Plans).",
        "Liquidity – Easy to buy or sell most mutual funds whenever needed.",
        "Goal-based Planning – Suitable for long-term growth, retirement planning, education, or wealth preservation.",
        "Compounding Benefits – Reinvesting returns over time helps wealth grow faster."
      ],
      minimumInvestment: "₹500 (SIP)",
      expectedReturns: "8-15% annually (varies by fund type)",
      riskLevel: "Low to Moderate"
    },
    "Bonds & Fixed Income": {
      detailedDescription: "A bond is a fixed-income investment product where individuals lend money to a government or company at a specified interest rate for a predetermined period. Much like an IOU, a bond represents a financial debt obligation. Borrowers issue bonds to raise funds from investors willing to lend for a specific duration. Bonds are issued by both corporate and government entities to finance various projects and activities. In return, the issuing entity agrees to pay the investor regular interest payments and, at the end of the bond term, return the original face value of the bond. Bonds, as fixed-income instruments, offer greater stability compared to equities. This makes them a preferred choice for conservative investors or those aiming to balance risk in a diversified portfolio.Secure your financial future with our fixed income solutions. We offer government bonds, corporate bonds, and fixed deposits that provide stable returns with lower risk compared to equity investments.",
      benefits: [
        "Stable Income – Provide regular interest payments, creating a predictable cash flow.",
        "Lower Risk – Generally less volatile than stocks, suitable for conservative investors.",
        "Capital Capital Preservation – Return of the original investment (face value) at maturity.",
        "Fixed Returns – Predefined interest rates make future earnings more predictable.",
        "Liquidity – Many bonds can be sold in the secondary market before maturity.",
        "Safety with Government Bonds – Sovereign bonds have minimal default risk."
      ],
      minimumInvestment: "₹100,000",
      expectedReturns: "7-12% annually",
      riskLevel: "Low"
    },
    "Insurance Products": {
      detailedDescription: "Insurance products are financial tools designed to protect individuals, families, or businesses against specific risks and uncertainties. Offered by insurance companies, these products provide financial compensation or benefits when unexpected events such as accidents, illnesses, property damage, or death occur. By choosing the right insurance plan, you can safeguard your financial stability and ensure peace of mind in times of crisis. Insurance not only acts as a protective shield but also, in some cases, serves as an investment or savings avenue.Protect your family's future with our comprehensive insurance solutions. We offer life insurance, health insurance, and wealth protection products that provide financial security and peace of mind.",
      benefits: [
        "Financial Protection – Provides a safety net for your family or business in case of unexpected events.",
        "Risk Coverage – Protects against risks like accidents, illnesses, property damage, or death.",
        "Peace of Mind – Ensures you and your loved ones are financially secure during emergencies.",
        "Long-Term Security – Supports retirement planning, children’s education, and other future financial goals.",
        "Lifetime Coverage – Whole Life Plans ensure financial protection for your entire lifetime."
      ],
      
    },
    "Alternate Investments": {
      detailedDescription: "Alternative Investment Funds (AIFs) are specialised investment vehicles that are privately pooled and invested in non-traditional asset classes such as venture capital, private equity, hedge funds, commodities, real estate, and derivatives. They are distinctly different from conventional investment options like mutual funds, fixed deposits, or equities. An AIF collects money from a group of investors and strategically allocates it to alternative asset classes that are often less correlated with public markets. This approach allows investors to diversify their portfolios beyond traditional avenues, potentially enhancing returns while managing risk differently. AIFs are particularly suited for investors seeking unique investment opportunities, access to emerging markets, or participation in projects and ventures not typically available through standard investment products.Explore alternative investment opportunities that can provide portfolio diversification and potentially higher returns. Our alternate investment solutions include real estate, commodities, and private equity options.",
      benefits: [
        "Portfolio Diversification – Access to asset classes beyond traditional stocks, bonds, and mutual funds.",
        "Higher Return Potential – Opportunities to invest in high-growth sectors like private equity, venture capital, and real estate.",
        "Access to Unique Opportunities – Participate in exclusive projects and investments not available in public markets.",
        "Reduced Market Correlation – Alternative assets often move independently of stock market trends, helping manage volatility.",
        "Professional Management – Expert fund managers identify, evaluate, and manage high-potential investments.",
        "Inflation Hedge – Certain alternative assets, like real estate and commodities, can help protect against inflation.",
        "Long-Term Growth Focus – Designed for patient investors aiming to build wealth over a longer horizon."
      ],
      minimumInvestment: "1 crore",
      expectedReturns: "15-25% annually (varies by asset)",
      riskLevel: "High"
    }
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Investment Solutions Under One Roof
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From traditional investments to modern financial products, we offer comprehensive 
            solutions to help you achieve your financial goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-${product.color}/10 flex items-center justify-center mb-4`}>
                    <IconComponent className={`h-6 w-6 text-${product.color}`} />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{product.description}</p>
                  
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => {
                      setSelectedProduct(product);
                      setIsModalOpen(true);
                    }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Product Details Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProduct && (
              <>
                <DialogHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-xl bg-${selectedProduct.color}/10 flex items-center justify-center`}>
                      {React.createElement(selectedProduct.icon, { className: `h-8 w-8 text-${selectedProduct.color}` })}
                    </div>
                    <div>
                      <DialogTitle className="text-2xl font-bold">{selectedProduct.title}</DialogTitle>
                      <p className="text-muted-foreground">{selectedProduct.description}</p>
                    </div>
                  </div>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Detailed Description */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Overview</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {productDetails[selectedProduct.title]?.detailedDescription}
                    </p>
                  </div>

                  {/* Key Benefits */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Key Benefits</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {productDetails[selectedProduct.title]?.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Investment Details */}
                  {selectedProduct.title !== "Insurance Products" && (
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-secondary/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-sm text-muted-foreground mb-1">Minimum Investment</h4>
                        <p className="text-lg font-bold">{productDetails[selectedProduct.title]?.minimumInvestment}</p>
                      </div>
                      <div className="bg-secondary/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-sm text-muted-foreground mb-1">Expected Returns</h4>
                        <p className="text-lg font-bold">{productDetails[selectedProduct.title]?.expectedReturns}</p>
                      </div>
                      <div className="bg-secondary/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-sm text-muted-foreground mb-1">Risk Level</h4>
                        <p className="text-lg font-bold">{productDetails[selectedProduct.title]?.riskLevel}</p>
                      </div>
                    </div>
                  )}

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Features</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedProduct.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex justify-center pt-4">
                    <Button 
                      className="px-8"
                      onClick={() => window.open('https://mosl.co/MOSWEB/Ly9XgjxIvP', '_blank')}
                    >
                      Get Started Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Products;