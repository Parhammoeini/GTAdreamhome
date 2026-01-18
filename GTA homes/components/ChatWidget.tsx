import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, User, Bot, Loader2, Calendar } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface LeadInfo {
  name: string;
  email: string;
  phone: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'greeting' | 'lead_capture' | 'chatting'>('greeting');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [leadInfo, setLeadInfo] = useState<LeadInfo>({ name: '', email: '', phone: '' });
  const [selectedTopic, setSelectedTopic] = useState('');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, step]);

  const handleOptionClick = (topic: string) => {
    setSelectedTopic(topic);
    setStep('lead_capture');
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadInfo.name || !leadInfo.email) return;

    // Simulate sending lead to CRM/Email System
    console.log("New Lead Captured via Chat:", { ...leadInfo, topic: selectedTopic });
    
    setStep('chatting');
    setMessages([
      { role: 'assistant', content: `Thank you, ${leadInfo.name}! I've noted your interest in ${selectedTopic}. How can I specifically help you today?` }
    ]);
  };

  const sendMessage = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      // Initialize AI client with production environment key
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, { role: 'user', content: userMessage }].map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        })),
        config: {
          systemInstruction: `You are the GTA Dream Homes AI Assistant. 
          Company: GTA Dream Homes Inc.
          Location: Richmond Hill, Ontario.
          Divisions: 
          1. Realty (Thom Mazinani): Residential/Commercial, buying, selling, investing in GTA. Powered by eXp Realty.
          2. Build & Renovation: Custom homes, kitchen/bath remodels, basement finishing.
          3. Short Stay: Premium luxury rentals in Richmond Hill and Markham.
          
          Guidelines:
          - Be professional, luxury-oriented, and helpful.
          - Team Members: Thom (Director), Sam (Investment), Marcus (Operations), Patrick (Sales).
          - Always mention that we can schedule a free 15-minute consultation.
          - Keep answers concise and direct.`,
          temperature: 0.7,
        }
      });

      const aiResponse = response.text || "I'm sorry, I couldn't process that. Please try again or contact us directly.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error("AI Chat Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm having trouble connecting right now. Please feel free to call us at 647-450-7567 or email gtadreamhome.inc@gmail.com." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gold-500 hover:bg-gold-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center gap-2 group"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-bold uppercase tracking-widest text-xs">Chat with us</span>
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-[350px] md:w-[400px] h-[550px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-navy-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-sm">GTA Dream Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-gray-300 uppercase tracking-widest">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-gold-500 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Chat Content */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50/50">
            {/* Initial Greeting */}
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-navy-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-navy-900" />
              </div>
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 border border-gray-100 max-w-[85%]">
                Hello! I’m your GTA Dream Homes Assistant. How can I help you today?
              </div>
            </div>

            {step === 'greeting' && (
              <div className="pl-10 flex flex-col gap-2">
                {['Real Estate', 'Renovation', 'Short Stay', 'General Question'].map(opt => (
                  <button
                    key={opt}
                    onClick={() => handleOptionClick(opt)}
                    className="text-left px-4 py-2 rounded-full border border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white transition-all text-xs font-bold uppercase tracking-wider"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {step === 'lead_capture' && (
              <div className="bg-white p-4 rounded-xl shadow-md border-t-4 border-gold-500 animate-in fade-in zoom-in-95 duration-300">
                <h4 className="text-navy-900 font-bold text-sm mb-3">Almost there!</h4>
                <p className="text-xs text-gray-500 mb-4">Before we continue, may I have your details so I can send you full information?</p>
                <form onSubmit={handleLeadSubmit} className="space-y-3">
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-gold-500"
                    value={leadInfo.name}
                    onChange={(e) => setLeadInfo({...leadInfo, name: e.target.value})}
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-gold-500"
                    value={leadInfo.email}
                    onChange={(e) => setLeadInfo({...leadInfo, email: e.target.value})}
                  />
                  <input
                    type="tel"
                    placeholder="Phone (Optional)"
                    className="w-full p-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-gold-500"
                    value={leadInfo.phone}
                    onChange={(e) => setLeadInfo({...leadInfo, phone: e.target.value})}
                  />
                  <button className="w-full py-2 bg-navy-900 text-white rounded-md text-xs font-bold uppercase tracking-widest hover:bg-gold-600 transition-colors">
                    Start Chatting
                  </button>
                </form>
              </div>
            )}

            {step === 'chatting' && messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'assistant' ? 'bg-navy-100 text-navy-900' : 'bg-gold-500 text-white'}`}>
                  {msg.role === 'assistant' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>
                <div className={`p-3 rounded-2xl shadow-sm text-sm max-w-[85%] ${
                  msg.role === 'assistant' 
                    ? 'bg-white text-gray-700 rounded-tl-none border border-gray-100' 
                    : 'bg-navy-900 text-white rounded-tr-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-navy-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-navy-900" />
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-400 border border-gray-100 flex items-center gap-1">
                  <Loader2 className="w-4 h-4 animate-spin" /> Thinking...
                </div>
              </div>
            )}

            {step === 'chatting' && messages.length > 2 && !isTyping && (
               <div className="pt-4 flex justify-center">
                  <a 
                    href="#contact" 
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gold-500 hover:text-white transition-all"
                  >
                    <Calendar className="w-3 h-3" /> Book 15-min Consult
                  </a>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="relative">
              <input
                disabled={step !== 'chatting' || isTyping}
                type="text"
                placeholder={step === 'chatting' ? "Ask me anything..." : "Please complete the form above"}
                className="w-full pr-12 pl-4 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-gold-500 disabled:opacity-50"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button
                disabled={step !== 'chatting' || isTyping || !input.trim()}
                onClick={sendMessage}
                className="absolute right-2 top-1.5 p-1.5 bg-gold-500 text-white rounded-full hover:bg-gold-600 transition-colors disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-3 uppercase tracking-[0.2em]">GTA Dream Homes Assistant</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
