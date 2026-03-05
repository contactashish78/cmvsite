import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! 👋 I'm here to help you with any questions about Comvinity. How can I assist you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, userMessage]);
    setMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: "Thanks for your message! Our team will get back to you shortly. For immediate assistance, please email support@comvinity.com or call us during business hours.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-2xl transition-all hover:scale-110 group"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            1
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border-2 border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">Comvinity Support</div>
                <div className="text-xs text-blue-100">We typically reply in minutes</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-lg p-2 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    msg.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      msg.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 bg-white border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setMessage('How does Comvinity work?')}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
              >
                How it works
              </button>
              <button
                onClick={() => setMessage('What are the pricing plans?')}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => setMessage('Book a demo')}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
              >
                Book demo
              </button>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white rounded-lg px-4 py-2 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
