import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to implement my AI systems?",
    answer:
      "Most projects are fully implemented within 2–4 weeks — from audit to launch. Once deployed, your AI agents handle everything automatically 24/7.",
  },
  {
    question: "What if I don't have many leads right now?",
    answer:
      "No problem. If you’re not hitting 30+ monthly inquiries, we’ll help set up lead generation automations first to fill your pipeline before activating AI qualification.",
  },
  {
    question: "Do you use prebuilt tools or custom automations?",
    answer:
      "Every solution is custom-built around your workflows. We don’t use off-the-shelf chatbots — we create AI agents and automations that mirror how your business actually operates.",
  },
  {
    question: "Can you integrate with my CRM and existing systems?",
    answer:
      "Yes — we connect seamlessly with CRMs, calendars, payment systems, WhatsApp, Gmail, ClickUp, and more. Your current stack stays intact; AI just makes it smarter.",
  },
  {
    question: "Is there a contract or setup fee?",
    answer:
      "No long-term contracts or setup fees. Everything is month-to-month, fully flexible, and you only pay for what you actually use.",
  },
  {
    question: "What results can I expect?",
    answer:
      "We guarantee measurable outcomes — like 15+ qualified calls per month — or you don’t pay. Our systems are built to deliver ROI, not hype.",
  },
  {
    question: "Can I scale my automations later?",
    answer:
      "Absolutely. You can start small, then add more AI agents or workflows anytime as your business grows. Every system is built to scale effortlessly.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="py-24 relative overflow-hidden bg-black text-white">
      {/* Background animated orbs */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 180 + i * 150,
              height: 180 + i * 150,
              top: `${15 + i * 15}%`,
              left: `${i * 30}%`,
              background: `radial-gradient(circle, rgba(56,189,248,0.15), rgba(167,139,250,0.05))`,
            }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-6 relative z-30">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-3"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-3"
            animate={{ scale: [0.95, 1, 0.95] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <HelpCircle className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium gradient-text">Got Questions?</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about AI automation for your business
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-4xl mx-auto space-y-2"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "bg-gradient-to-br from-card via-card to-muted border-primary/50 glow"
                      : "bg-card border-border/40 hover:border-primary/20"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-5 flex items-start justify-between gap-4 text-left"
                  >
                    <span
                      className={`text-lg font-semibold transition-all duration-300 ${
                        isOpen ? "gradient-text" : "group-hover:text-primary"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown
                        className={`w-6 h-6 transition-colors duration-300 ${
                          isOpen ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -8 }}
                          animate={{ y: 0 }}
                          exit={{ y: -8 }}
                          transition={{ duration: 0.3 }}
                          className="px-8 pb-4 pt-0"
                        >
                          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-2" />
                          <p className="text-white/90 leading-relaxed text-base">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
