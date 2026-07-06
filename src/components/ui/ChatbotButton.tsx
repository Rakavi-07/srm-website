import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot } from 'lucide-react';

const quickReplies = [
  'Tell me about admissions',
  'What are the fees?',
  'Courses offered',
  'Placement details',
  'Hostel facilities',
];

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const botResponses: Record<string, string> = {
  default: "Thanks for reaching out! I'm the SRM AI Assistant. How can I help you today?",
  admissions: "Admissions are open for 2025–26! You can apply at srmist.edu.in. The SRMJEEE exam is the primary entrance test. Shall I share more details?",
  fees: "Fees vary by program. B.Tech starts at ₹2.5 Lakh/year. Scholarships are available for merit students. Visit our fees page for complete details.",
  courses: "SRM offers 110+ programs across Engineering, Management, Medicine, Science, Law & Arts. Which department are you interested in?",
  placements: "SRM has a 92% placement rate with 500+ recruiters. Highest package: 44 LPA. Average: 8 LPA. Companies like Google, Microsoft, Amazon recruit here.",
  hostel: "We have separate AC hostels for boys and girls with Wi-Fi, mess, recreation rooms, and 24/7 security on campus.",
};

function getBotReply(text: string): string {
  const lower = text.toLowerCase();
  if (lower.includes('admission')) return botResponses.admissions;
  if (lower.includes('fee') || lower.includes('cost')) return botResponses.fees;
  if (lower.includes('course') || lower.includes('program')) return botResponses.courses;
  if (lower.includes('place') || lower.includes('job')) return botResponses.placements;
  if (lower.includes('hostel')) return botResponses.hostel;
  return botResponses.default;
}

export default function ChatbotButton() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hello! 👋 I'm your AI assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState('');

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: 'user', text };
    setMessages(m => [...m, userMsg]);
    setInput('');
    setTimeout(() => {
      setMessages(m => [...m, { role: 'bot', text: getBotReply(text) }]);
    }, 800);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(s => !s)}
        animate={{ scale: open ? 0.9 : 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-srm-navy rounded-full shadow-2xl flex items-center justify-center border-2 border-srm-gold"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={22} className="text-white" />
            </motion.div>
          ) : (
            <motion.div key="bot" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <Bot size={22} className="text-srm-gold" />
            </motion.div>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-srm-navy px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-srm-gold/20 border border-srm-gold/40 flex items-center justify-center">
                <Bot size={18} className="text-srm-gold" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">AI Assistant</div>
                <div className="flex items-center gap-1.5 text-green-400 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Online
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="bg-white h-64 overflow-y-auto p-3 space-y-2">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                    m.role === 'user'
                      ? 'bg-srm-navy text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-700 rounded-bl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Replies */}
            <div className="bg-gray-50 px-3 py-2 flex gap-1.5 overflow-x-auto">
              {quickReplies.map(q => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="flex-shrink-0 text-xs bg-white border border-gray-200 rounded-full px-2.5 py-1 text-gray-600 hover:bg-srm-navy hover:text-white hover:border-srm-navy transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="bg-white border-t border-gray-100 flex items-center gap-2 px-3 py-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send(input)}
                placeholder="Type your message..."
                className="flex-1 text-sm outline-none placeholder-gray-400 py-1"
              />
              <button
                onClick={() => send(input)}
                className="w-8 h-8 bg-srm-navy rounded-full flex items-center justify-center hover:bg-srm-gold transition-colors"
              >
                <Send size={14} className="text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
