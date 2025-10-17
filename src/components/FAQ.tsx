import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to implement AI automation?",
    answer:
      "Typically 2-4 weeks from initial audit to full deployment. We work efficiently to get your AI systems up and running quickly, with training included to ensure smooth adoption.",
  },
  {
    question: "Do I need technical knowledge to use AI automation?",
    answer:
      "Not at all! We handle all the technical implementation and provide comprehensive training. You'll be able to manage and use your AI systems easily, focusing on coaching while AI handles the repetitive work.",
  },
  {
    question: "Can you integrate with my existing coaching tools?",
    answer:
      "Yes! We integrate with all major coaching platforms including Notion, Airtable, ClickUp, WhatsApp, Stripe, Gmail, Google Sheets, and many more. If you use it, we can connect it.",
  },
  {
    question: "What if I need changes after implementation?",
    answer:
      "We provide continuous optimization and 24/7 support. As your coaching business evolves, we refine and enhance your AI systems to ensure they always deliver maximum value.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Every solution is custom-built for your specific needs, so pricing varies. We analyze your workflows and create a transparent, flexible package that fits your budget. No fixed packages - you only pay for what you need.",
  },
  {
    question: "Will AI replace my personal coaching touch?",
    answer:
      "Never! AI handles the repetitive admin work - scheduling, follow-ups, data entry - so you can focus more time on actual coaching. It amplifies your impact, not replaces it.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="py-28 relative overflow-hidden bg-background text-white">
      {/* Background glow & animated circles */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full`}
            style={{
              width: 200 + i * 150,
              height: 200 + i * 150,
              top: `${10 + i * 20}%`,
              left: `${i * 30}%`,
              background: `radial-gradient(circle, rgba(56,189,248,0.2), rgba(167,139,250,0.1))`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i,
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-6 relative z-30">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-4"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-4"
            animate={{ scale: [0.95, 1, 0.95] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <HelpCircle className="w-5 h-5 text-primary animate-float" />
            <span className="text-sm font-medium gradient-text">Got Questions?</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about AI automation for your coaching business
          </p>
        </motion.div>

        {/* FAQ items */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "0px 10px 25px rgba(0,0,0,0.05)" }}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "bg-gradient-to-br from-card via-card to-muted border-primary/50 glow"
                      : "bg-card border-border/50 hover:border-primary/30"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 flex items-start justify-between gap-4 text-left"
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
                          isOpen
                            ? "text-primary"
                            : "text-muted-foreground group-hover:text-primary"
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
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          exit={{ y: -10 }}
                          transition={{ duration: 0.4 }}
                          className="px-8 pb-6 pt-0"
                        >
                          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-4" />
                          <p className="text-white leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.div
            className="inline-block p-8 rounded-2xl bg-gradient-to-br from-card to-muted border border-primary/20 glow"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-lg mb-2">Still have questions?</p>
            <p className="text-white">
              <a href="#contact" className="gradient-text font-semibold hover:underline">
                Get in touch with us
              </a>{" "}
              and we'll help you out!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
