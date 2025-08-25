import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, Calculator as CalculatorIcon, DollarSign, Percent, Calendar, Target } from "lucide-react";

const Calculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [yearlyIncrease, setYearlyIncrease] = useState(10);
  const [increaseType, setIncreaseType] = useState("percentage"); // "percentage" or "amount"
  const [interestRate, setInterestRate] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);
  const [results, setResults] = useState({
    totalInvested: 0,
    totalInterest: 0,
    finalAmount: 0,
    yearlyBreakdown: [] as Array<{
      year: number;
      yearlyInvestment: number;
      yearInterest: number;
      yearEndBalance: number;
    }>
  });

  const calculateCompoundInterest = () => {
    // Validate inputs
    if (!monthlyInvestment || !interestRate || !timePeriod || !yearlyIncrease) {
      return;
    }

    let totalInvested = 0;
    let totalInterest = 0;
    let currentBalance = 0;
    const yearlyBreakdown = [];

    for (let year = 1; year <= timePeriod; year++) {
      let yearlyInvestment = 0;
      
      // Calculate monthly investments for this year
      for (let month = 1; month <= 12; month++) {
        const currentMonthlyInvestment = monthlyInvestment + 
          (year - 1) * (increaseType === "percentage" 
            ? (monthlyInvestment * yearlyIncrease / 100)
            : yearlyIncrease);
        
        yearlyInvestment += currentMonthlyInvestment;
        currentBalance += currentMonthlyInvestment;
        
        // Apply monthly compound interest
        currentBalance *= Math.pow(1 + interestRate / 100 / 12, 1);
      }

      totalInvested += yearlyInvestment;
      const yearStartBalance = currentBalance - yearlyInvestment;
      const yearInterest = currentBalance - yearStartBalance - yearlyInvestment;
      totalInterest += yearInterest;

      yearlyBreakdown.push({
        year,
        yearlyInvestment: Math.round(yearlyInvestment),
        yearInterest: Math.round(yearInterest),
        yearEndBalance: Math.round(currentBalance)
      });
    }

    setResults({
      totalInvested: Math.round(totalInvested),
      totalInterest: Math.round(totalInterest),
      finalAmount: Math.round(currentBalance),
      yearlyBreakdown
    });
  };

  useEffect(() => {
    calculateCompoundInterest();
  }, [monthlyInvestment, yearlyIncrease, increaseType, interestRate, timePeriod]);

  const formatCurrency = (amount: number) => {
    if (!amount || isNaN(amount)) return '₹0';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Compound Interest Calculator
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plan your wealth creation journey with our advanced compound interest calculator. 
            See how your monthly investments grow over time with yearly increases.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Inputs */}
          <div className="space-y-6">
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center space-x-2">
                  <CalculatorIcon className="h-6 w-6 text-primary" />
                  <span>Investment Parameters</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0 space-y-6">
                {/* Monthly Investment */}
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span>Monthly Investment Amount</span>
                  </Label>
                  <Input
                    type="number"
                    min="0"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Math.max(0, Number(e.target.value)))}
                    className="text-lg font-semibold"
                    placeholder="Enter monthly investment"
                  />
                </div>

                {/* Yearly Increase */}
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span>Yearly Increase</span>
                  </Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Select value={increaseType} onValueChange={setIncreaseType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="percentage">Percentage (%)</SelectItem>
                          <SelectItem value="amount">Fixed Amount (₹)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Input
                        type="number"
                        min="0"
                        value={yearlyIncrease}
                        onChange={(e) => setYearlyIncrease(Math.max(0, Number(e.target.value)))}
                        className="text-lg font-semibold"
                        placeholder={increaseType === "percentage" ? "10" : "1000"}
                      />
                    </div>
                  </div>
                </div>

                {/* Interest Rate */}
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <Percent className="h-4 w-4 text-primary" />
                    <span>Expected Annual Return (%)</span>
                  </Label>
                  <Input
                    type="number"
                    min="0"
                    max="100"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Math.max(0, Math.min(100, Number(e.target.value))))}
                    className="text-lg font-semibold"
                    placeholder="12"
                  />
                </div>

                {/* Time Period */}
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Investment Period (Years)</span>
                  </Label>
                  <Input
                    type="number"
                    min="1"
                    max="50"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(Math.max(1, Math.min(50, Number(e.target.value))))}
                    className="text-lg font-semibold"
                    placeholder="10"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 bg-primary/5 border-primary/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {formatCurrency(results.totalInvested)}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Invested</div>
                </div>
              </Card>
              
              <Card className="p-4 bg-growth/5 border-growth/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-growth">
                    {formatCurrency(results.totalInterest)}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Interest</div>
                </div>
              </Card>
              
              <Card className="p-4 bg-accent/5 border-accent/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">
                    {formatCurrency(results.finalAmount)}
                  </div>
                  <div className="text-sm text-muted-foreground">Final Amount</div>
                </div>
              </Card>
            </div>

            {/* Yearly Breakdown */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-primary" />
                  <span>Yearly Breakdown</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="max-h-96 overflow-y-auto">
                  <div className="space-y-3">
                    {results.yearlyBreakdown.map((yearData) => (
                      <div key={yearData.year} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div className="font-semibold">Year {yearData.year}</div>
                        <div className="text-right space-y-1">
                          <div className="text-sm text-muted-foreground">
                            Invested: {formatCurrency(yearData.yearlyInvestment)}
                          </div>
                          <div className="text-sm text-growth">
                            Interest: {formatCurrency(yearData.yearInterest)}
                          </div>
                          <div className="text-sm font-semibold text-primary">
                            Total: {formatCurrency(yearData.yearEndBalance)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            <strong>Disclaimer:</strong> This calculator provides estimates based on the inputs provided. 
            Actual returns may vary due to market conditions, fees, and other factors. 
            Past performance does not guarantee future results. Please consult with a financial advisor 
            before making investment decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
