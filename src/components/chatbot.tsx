"use client"
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot } from 'lucide-react';
import { Button } from './ui/button';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  type: 'text' | 'card' | 'welcome_card' | 'booking_form';
  text: string;
  image?: string;
  buttons?:Array<{ label: string, payload: string }>;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hasInitialized = useRef(false);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Initial Welcome Message
  useEffect(() => {
    if (isOpen && !hasInitialized.current) {
      handleSendMessage("INIT_CHAT", true); // Hidden system message
      hasInitialized.current = true;
    }
  }, [isOpen]);

  const handleSendMessage = async (text: string, isSystemMessage = false) => {
    if (!text.trim()) return;

    // 1. Add User Message to UI (unless hidden system trigger)
    if (!isSystemMessage) {
      const userMsg: Message = { 
        id: Date.now().toString(), 
        sender: 'user', 
        type: 'text', 
        text 
      };
      setMessages(prev => [...prev, userMsg]);
    }

    setInputValue("");
    setIsLoading(true);

    try {
      // 2. Prepare History for Context
      const history = messages
        .filter(m => m.type === 'text') // Only send text history to save tokens
        .map(m => `${m.sender === 'user' ? 'User' : 'Assistant'}: ${m.text}`);

      // 3. Call API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history }),
      });

      const data = await response.json();

      // 4. Add Bot Response to UI
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        type: data.type || 'text',
        text: data.text,
        image: data.image,
        buttons: data.buttons
      };

      setMessages(prev => [...prev, botMsg]);

    } catch (error) {
      console.error("Chat Error", error);
      const errorMsg: Message = { 
        id: Date.now().toString(), 
        sender: 'bot', 
        type: 'text', 
        text: "Sorry, I'm having trouble connecting right now." 
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Button Clicks from Bot
  const handleOptionClick = (payload: string, label: string) => {
    handleSendMessage(payload === "ACTION_TRIGGER_BOOKING" ? "ACTION_TRIGGER_BOOKING" : label);
  };

  // Render Logic for different message types
  const renderMessageContent = (msg: Message) => {
    switch (msg.type) {
      case 'card':
      case 'welcome_card':
        return (
          <div className="flex flex-col gap-3 w-full">
            {msg.image && (
              <div className="relative w-full h-32 rounded-lg overflow-hidden mb-1">
                <img src={msg.image} alt="Doctor" className="w-full h-full object-cover" />
              </div>
            )}
            <div className="whitespace-pre-wrap">{msg.text}</div>
            {msg.buttons && (
              <div className="flex flex-wrap gap-2 mt-2">
                {msg.buttons.map((btn, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(btn.payload, btn.label)}
                    className="text-xs bg-[#18181B] text-white px-3 py-2 rounded-md hover:bg-black transition-colors flex-grow text-center"
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        );

      case 'booking_form':
        return (
          <div className="flex flex-col gap-3 w-full">
            <div className="whitespace-pre-wrap font-medium">{msg.text}</div>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                // In a real app, capture form data here
                handleSendMessage("FORM_SUBMITTED_DETAILS");
              }}
              className="flex flex-col gap-2 mt-2"
            >
              <input type="text" placeholder="Your Name" className="w-full text-xs p-2 rounded border border-gray-200 bg-gray-50" required />
              <input type="tel" placeholder="Phone Number" className="w-full text-xs p-2 rounded border border-gray-200 bg-gray-50" required />
              <button type="submit" className="w-full bg-green-600 text-white text-xs py-2 rounded hover:bg-green-700 font-medium">
                Confirm Appointment
              </button>
            </form>
          </div>
        );

      default:
        // Standard Text
        return (
          <div className="flex flex-col gap-2">
             <div className="whitespace-pre-wrap">{msg.text}</div>
             {msg.buttons && (
              <div className="flex flex-wrap gap-2 mt-1">
                {msg.buttons.map((btn, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(btn.payload, btn.label)}
                    className="text-xs border border-gray-300 text-gray-700 px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-300 font-sans">
          
          {/* Header */}
          <div className="bg-[#18181B] p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                   <img src="/logo.png" alt="" width={50} height={50} />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#18181B] rounded-full"></div>
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">Smile Science</h3>
                <p className="text-gray-400 text-xs">AI Powered • Online</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-[400px] bg-[#FDFBF0] p-5 overflow-y-auto flex flex-col gap-4">
            
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`self-start max-w-[85%] ${msg.sender === 'user' ? 'self-end' : ''}`}
              >
                 <div 
                    className={`
                      p-4 rounded-2xl shadow-sm border text-sm leading-relaxed
                      ${msg.sender === 'user' 
                        ? 'bg-[#18181B] text-white rounded-tr-none border-[#18181B]' 
                        : 'bg-white text-gray-600 rounded-tl-none border-gray-100'
                      }
                    `}
                 >
                    {renderMessageContent(msg)}
                 </div>
                 {/* Timestamp / Label */}
                 <span className={`text-[10px] text-gray-400 mt-1 block ${msg.sender === 'user' ? 'text-right' : 'ml-2'}`}>
                    {msg.sender === 'user' ? 'You' : 'Assistant'}
                 </span>
              </div>
            ))}

            {isLoading && (
              <div className="self-start max-w-[85%]">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 flex gap-2 items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <form 
              className="relative"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
            >
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..." 
                disabled={isLoading}
                className="w-full bg-gray-50 border border-gray-200 rounded-full pl-5 pr-12 py-3 text-sm focus:outline-none focus:border-gray-300 focus:ring-0 transition-colors disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#18181B] rounded-full text-white hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <Button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-[#18181B] hover:bg-black text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all hover:scale-105 flex items-center justify-center"
      >
        {isOpen ? <X className="w-7 h-7" /> : <MessageSquare className="w-7 h-7" />}
      </Button>
    </div>
  );
};