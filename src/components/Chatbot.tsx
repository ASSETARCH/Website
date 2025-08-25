import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      message: "Hello! I'm AssetBot, your investment assistant. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const quickQuestions = [
    "How to start investing?",
    "Best mutual funds",
    "SIP calculator",
    "Tax saving options",
    "Portfolio review"
  ];

  const botResponses = {
    "how to start investing": "Great question! Starting your investment journey is easier than you think. Here are the key steps:\n\n1. Set clear financial goals\n2. Assess your risk tolerance\n3. Start with a small SIP in mutual funds\n4. Gradually diversify your portfolio\n\nWould you like me to connect you with our advisor Ketan Kadam for a personalized consultation?",
    "best mutual funds": "The best mutual funds depend on your investment goals and risk profile. Here are some popular categories:\n\n• Large Cap Funds (Low Risk)\n• Mid Cap Funds (Medium Risk)\n• Small Cap Funds (High Risk)\n• ELSS Funds (Tax Saving)\n\nI recommend speaking with our certified advisor for personalized fund recommendations. Shall I schedule a call?",
    "sip calculator": "SIP (Systematic Investment Plan) is a great way to build wealth! Here's a quick example:\n\n₹5,000/month for 10 years at 12% returns:\n• Total Investment: ₹6,00,000\n• Expected Value: ₹11,61,695\n• Wealth Created: ₹5,61,695\n\nWould you like a detailed SIP calculation for your goals?",
    "tax saving options": "Here are the top tax-saving investment options under Section 80C:\n\n• ELSS Mutual Funds (Best returns)\n• PPF (15-year lock-in)\n• NSC (5-year lock-in)\n• ULIP (Insurance + Investment)\n• Tax Saver FDs\n\nELSS funds offer the shortest lock-in period (3 years) with potential for higher returns!",
    "portfolio review": "A regular portfolio review is crucial for optimal returns! We analyze:\n\n• Asset allocation\n• Performance vs benchmarks\n• Risk assessment\n• Rebalancing needs\n• Goal alignment\n\nOur expert Ketan Kadam offers free portfolio reviews. Would you like to schedule one?"
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      type: "user",
      message: inputMessage,
      timestamp: new Date()
    };

    const botResponse = getBotResponse(inputMessage.toLowerCase());
    const botMessage = {
      type: "bot",
      message: botResponse,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setInputMessage("");
  };

  const getBotResponse = (message: string) => {
    const keywords = Object.keys(botResponses);
    const matchedKeyword = keywords.find(keyword => 
      message.includes(keyword) || keyword.includes(message.split(' ')[0])
    );

    if (matchedKeyword) {
      return botResponses[matchedKeyword as keyof typeof botResponses];
    }

    return "Thank you for your question! For detailed information about investment strategies, portfolio management, or specific financial products, I'd recommend speaking directly with our certified advisor Ketan Kadam. Would you like me to schedule a consultation for you?";
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        size="lg"
        className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg h-14 w-14 p-0"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 z-50 w-96 h-[600px] flex flex-col shadow-2xl">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 bg-primary text-primary-foreground rounded-t-lg">
        <div className="flex items-center space-x-2">
          <Bot className="h-5 w-5" />
          <CardTitle className="text-lg">AssetBot</CardTitle>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(false)}
          className="h-8 w-8 p-0 text-primary-foreground hover:bg-primary-foreground/20"
        >
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-0">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-lg p-3 ${
                msg.type === 'user' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-foreground'
              }`}>
                <div className="flex items-start space-x-2">
                  {msg.type === 'bot' && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                  {msg.type === 'user' && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                  <div className="text-sm whitespace-pre-line">{msg.message}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Questions */}
        {messages.length === 1 && (
          <div className="p-4 border-t">
            <p className="text-sm text-muted-foreground mb-2">Quick questions:</p>
            <div className="space-y-2">
              {quickQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-full justify-start text-xs h-8"
                  onClick={() => handleQuickQuestion(question)}
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about investments..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} size="sm">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Chatbot;