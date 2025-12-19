import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Phone, Mail, MapPin } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! 👋 I’m the Scepterra virtual assistant. How can I help you with IT, ERP, healthcare, or operations services today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userName, setUserName] = useState('');
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Enhanced bot responses with more comprehensive coverage
  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
// Greetings
if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good morning') || message.includes('good afternoon')) {
  return "Hello! 👋 Welcome to Scepterra. I’m here to help you with IT consulting, ERP, healthcare, and operations services. How can I assist you today?";
}

// Name introduction
if (message.includes('my name is') || message.includes('i am') || message.includes('call me')) {
  const nameMatch = message.match(/(?:my name is|i am|call me) ([a-zA-Z]+)/);
  if (nameMatch) {
    setUserName(nameMatch[1]);
    return `Nice to meet you, ${nameMatch[1]}! 🤝 How can I support your business today?`;
  }
}

// Services related queries
if (message.includes('service') || message.includes('what do you do') || message.includes('what do you offer')) {
  return "Scepterra provides consulting-led IT and operations services for small and mid-sized businesses:\n\n🔹 IT & Enterprise Application Consulting (ERP)\n🔹 Medical Billing & Healthcare Technology Services\n🔹 IT & Business Process Outsourcing (ITO / BPO)\n🔹 Staff Augmentation & Extended Teams\n🔹 Automation, AI & Digital Enablement\n🔹 Digital & Process Transformation\n\nWhich area would you like to explore?";
}

// Enterprise applications / ERP
if (message.includes('erp') || message.includes('enterprise application') || message.includes('sap') || message.includes('oracle')) {
  return "We help organizations stabilize, optimize, and support enterprise applications.\n\n✅ ERP consulting & support (SAP, Oracle)\n✅ Application stabilization & modernization\n✅ Integration, reporting & controls\n✅ Application Management Services (AMS)\n\nWould you like help with an existing system or a new initiative?";
}

// Healthcare / medical billing
if (message.includes('healthcare') || message.includes('medical') || message.includes('billing') || message.includes('rcm')) {
  return "We support healthcare practices and service providers with:\n\n🏥 Medical billing & coding\n🏥 Revenue cycle operations\n🏥 Denial management & follow-ups\n🏥 Compliance-driven processes\n🏥 Healthcare workflow automation\n\nWould you like to discuss your current challenges?";
}

// Pricing inquiries
if (message.includes('price') || message.includes('cost') || message.includes('pricing') || message.includes('budget') || message.includes('how much')) {
  return "Our pricing depends on scope and engagement model. We offer:\n\n💼 Project-based consulting\n💼 Monthly or retainer support models\n💼 Cost-effective offshore & hybrid delivery\n💼 Free initial consultation\n\nWe focus on practical, value-driven solutions. Would you like to schedule a consultation?";
}

// Contact information
if (message.includes('contact') || message.includes('reach') || message.includes('phone') || message.includes('email') || message.includes('address')) {
  return "You can reach Scepterra here:\n\n📞 Phone: +91 98765 43210\n📧 Email: info@scepterra.com\n📍 Location: Chennai, India | Global Delivery\n\nHow would you like to connect with us?";
}

// Team and company info
if (message.includes('team') || message.includes('about') || message.includes('company') || message.includes('who are you')) {
  return "Scepterra is a consulting-led firm with over 27 years of enterprise IT, operations, automation, and healthcare experience.\n\n👥 Senior consultants lead every engagement\n👥 Strong ERP & healthcare domain expertise\n👥 SMB-focused, practical delivery\n👥 Long-term partnership approach\n\nWould you like to know more about how we work?";
}

// Experience & projects
if (message.includes('portfolio') || message.includes('work') || message.includes('projects') || message.includes('examples')) {
  return "Our experience includes:\n\n✔ ERP stabilization & support programs\n✔ Medical billing & revenue operations enablement\n✔ Automation-driven efficiency initiatives\n✔ Multi-region IT & operations outsourcing\n✔ Governance and reporting frameworks\n\nI can share examples relevant to your industry if you’d like.";
}

// Technologies
if (message.includes('technology') || message.includes('tech stack') || message.includes('tools')) {
  return "We work across enterprise and operational technologies:\n\n🔧 ERP platforms (SAP, Oracle)\n🔧 Automation & workflow tools\n🔧 Analytics & reporting systems\n🔧 Healthcare technology platforms\n🔧 Cloud & managed services\n\nWhich area are you interested in?";
}

// Process and methodology
if (message.includes('process') || message.includes('how do you work') || message.includes('methodology')) {
  return "Our consulting-led engagement approach includes:\n\n1️⃣ Discovery & Assessment\n2️⃣ Strategy & Solution Design\n3️⃣ Execution & Enablement\n4️⃣ Stabilization & Managed Support\n\nThis ensures solutions that are practical, scalable, and aligned to business outcomes.";
}

// Support and maintenance
if (message.includes('support') || message.includes('maintenance') || message.includes('help') || message.includes('assistance')) {
  return "We provide ongoing support through:\n\n🛠️ Application & IT operations support\n🛠️ Business process outsourcing\n🛠️ Performance monitoring & reporting\n🛠️ Compliance and controls\n🛠️ Continuous improvement support\n\nWould you like to explore support options?";
}

// Consultation and next steps
if (message.includes('consultation') || message.includes('meeting') || message.includes('discuss') || message.includes('next step')) {
  return "We’d be happy to connect.\n\n📅 Schedule a consultation\n📋 Review your current challenges\n📊 Recommend practical, scalable solutions\n🤝 Explore engagement models\n\nShall I help you take the next step?";
}

// Gratitude responses
if (message.includes('thank') || message.includes('thanks') || message.includes('appreciate')) {
  const response = userName ? 
    `You’re welcome, ${userName}! 😊` : 
    "You’re very welcome! 😊";
  return `${response} Let me know if there’s anything else I can help you with.`;
}

// Goodbye responses
if (message.includes('bye') || message.includes('goodbye') || message.includes('see you')) {
  const response = userName ? 
    `Goodbye, ${userName}! 👋` : 
    "Goodbye! 👋";
  return `${response} Thanks for visiting Scepterra. Feel free to reach out anytime. Have a great day!`;
}

// Default helpful response
return `That’s a great question. To give you the most accurate guidance, our consultants would be happy to help.

📞 Call us: +91 98765 43210  
📧 Email us: info@scepterra.com  
🌐 Visit our Contact Page to submit your requirements

How would you like to proceed?`;
  }
  const handleSendMessage = (e) => {
    e.preventDefault?.();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, Math.random() * 1000 + 1000); // Random delay between 1-2 seconds
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Quick action buttons
  const quickActions = [
    { text: "Our Services", action: "What services do you offer?" },
    { text: "Get Quote", action: "I'd like to get a pricing quote" },
    { text: "Contact Info", action: "How can I contact you?" },
    { text: "View Portfolio", action: "Show me your portfolio" }
  ];

  const handleQuickAction = (action) => {
    setInputMessage(action);
    // Trigger send message
    setTimeout(() => {
      const event = { preventDefault: () => {} };
      handleSendMessage(event);
    }, 100);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 relative group"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
          
          {/* Notification dot */}
          {!isOpen && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
              1
            </div>
          )}
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {isOpen ? 'Close Chat' : 'Need Help? Chat with us!'}
          </div>
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 md:right-10 w-[90%] md:w-[50%]  lg:w-[25%] h-[500px] bg-white rounded-2xl shadow-2xl z-[100] flex flex-col overflow-hidden border border-gray-200 transform transition-all duration-300 scale-100 opacity-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">AI Assistant</h3>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-sm opacity-90">Online now</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === 'user' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                    : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-600'
                }`}>
                  {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                
                <div className={`max-w-xs ${message.sender === 'user' ? 'text-right' : ''}`}>
                  <div className={`inline-block p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-sm shadow-lg'
                      : 'bg-white text-gray-800 rounded-bl-sm shadow-md border border-gray-100'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 px-1">
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-600 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-bl-sm shadow-md border border-gray-100">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Actions (show only at the start) */}
            {messages.length <= 1 && (
              <div className="space-y-2">
                <p className="text-xs text-gray-500 text-center">Quick actions:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickAction(action.action)}
                      className="p-2 text-xs bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200 border border-blue-200"
                    >
                      {action.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(e)}
                placeholder="Type your message..."
                className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              We typically reply in a few minutes
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;