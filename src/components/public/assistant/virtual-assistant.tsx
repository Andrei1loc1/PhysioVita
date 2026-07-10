"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { site } from "@/config/site.config";

type Message = { role: "user" | "assistant"; content: string };

function VirtualAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: "assistant", content: site.assistant.greeting }]);
    }
  }, [open]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();
      const content = data.content || "Îmi pare rău, încearcă din nou.";

      setMessages((prev) => [...prev, { role: "assistant", content }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Momentan sunt indisponibil. Te rog sună la " + site.contact.phone + " 🙏",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 flex items-center justify-center hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
            aria-label="Deschide asistent virtual"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-border overflow-hidden flex flex-col"
            style={{ maxHeight: "min(600px, calc(100dvh - 2rem))" }}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-primary to-primary/85 px-4 sm:px-5 py-3.5 flex items-center justify-between overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,oklch(0.88_0.1_155/0.2),transparent_55%)] pointer-events-none" />
              <div className="relative z-10 flex items-center gap-2.5">
                <div className="relative w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white" />
                </div>
                <div>
                  <div className="font-[family-name:var(--font-heading)] text-sm font-bold text-white tracking-tight">
                    {site.assistant.name}
                  </div>
                  <div className="text-[10px] text-white/70 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online acum
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="relative z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Închide"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-3 sm:px-4 py-4 space-y-2.5 bg-[#faf8f4]/50 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-white rounded-br-md font-medium"
                        : "bg-white border border-border text-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-border rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1.5">
                    {[0, 1, 2].map((dot) => (
                      <motion.span
                        key={dot}
                        className="w-2 h-2 rounded-full bg-primary/40"
                        animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: dot * 0.15,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Quick questions (shown only at start) */}
              {messages.length <= 1 && !loading && (
                <div className="pt-2 space-y-1.5">
                  {site.assistant.quickQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="w-full text-left px-3.5 py-2.5 rounded-xl text-[12.5px] text-primary bg-primary/5 border border-primary/10 hover:bg-primary/10 hover:border-primary/20 transition-all duration-200 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-border p-3 bg-white">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                  placeholder={site.assistant.placeholder}
                  disabled={loading}
                  className="flex-1 px-3.5 py-2.5 rounded-xl border border-border bg-[#faf8f4]/60 text-[13px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 disabled:opacity-50"
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || loading}
                  className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-md shadow-primary/25 hover:bg-primary/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 flex-shrink-0"
                  aria-label="Trimite"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="text-center mt-1.5">
                <span className="text-[9px] text-muted-foreground/40">
                  Powered by AI · Demo · Nu oferi sfaturi medicale reale
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export { VirtualAssistant };