import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Send, CheckCircle, Clock, Mail, Phone, Linkedin, Instagram, Facebook } from "lucide-react";
import { send } from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    company: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [countdownIndex, setCountdownIndex] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const countdownItems = ["Hold tight...", "Almost there...", "Boom!"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setCountdownIndex(0);

    try {
      await send(
        "service_duxnlp8",
        "template_on7mffm",
        formData,
        "tco2ucJ538Fatdokp"
      );

      setFormData({ name: "", email: "", website: "", company: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
    }
  };

  useEffect(() => {
    if (countdownIndex === null) return;
    if (countdownIndex >= countdownItems.length) {
      setCountdownIndex(null);
      setSubmitted(true);
      setSending(false);
      return;
    }
    const timer = setTimeout(() => setCountdownIndex(countdownIndex + 1), 1000);
    return () => clearTimeout(timer);
  }, [countdownIndex]);

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto p-12 rounded-3xl bg-card border-2 border-primary/30 glow-strong text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="mx-auto mb-8 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-strong"
          >
            <CheckCircle className="w-12 h-12 text-background" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Awesome! Your AI System Audit is Booked
          </h1>
          <p className="text-xl text-muted-foreground mb-10">
            We'll reach out soon to discuss how we can transform your business with AI automation.
          </p>

          <Button
            size="lg"
            onClick={() => setSubmitted(false)}
            className="bg-gradient-to-r from-primary to-secondary text-background font-semibold px-10 py-6 text-lg glow-strong hover:glow-strong transition-all"
          >
            Back to Form
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      {/* HEADLINE */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
          Let's Hire Us
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Partner with us to automate your business with AI and save time, money, and effort.
        </p>
      </motion.div>

      {/* FORM + INFO */}
      <div className="container mx-auto flex flex-col md:flex-row gap-8 w-full h-[70vh]">
        {/* LEFT SIDE: FORM */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-8 shadow-lg flex flex-col gap-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              {/* NAME */}
              <div className="flex flex-col">
                <label className="mb-1 font-semibold">Name *</label>
                <Input
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="py-3 px-4 text-base"
                />
              </div>

              {/* WEBSITE */}
              <div className="flex flex-col">
                <label className="mb-1 font-semibold">Website</label>
                <Input
                  placeholder="Enter your website"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="py-3 px-4 text-base"
                />
              </div>

              {/* EMAIL */}
              <div className="flex flex-col">
                <label className="mb-1 font-semibold">Email *</label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="py-3 px-4 text-base"
                />
              </div>

              {/* COMPANY */}
              <div className="flex flex-col">
                <label className="mb-1 font-semibold">Company</label>
                <Input
                  placeholder="Enter your company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="py-3 px-4 text-base"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col mt-4">
              <label className="mb-1 font-semibold">Message *</label>
              <Textarea
                placeholder="Write your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="p-3 text-base"
              />
            </div>

            {/* ANIMATED BUTTON */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-4"
            >
              <Button
                type="submit"
                disabled={sending || countdownIndex !== null}
                className="w-full flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-background font-bold overflow-hidden relative"
              >
                {countdownIndex !== null ? (
                  countdownItems[countdownIndex]
                ) : sending ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
                  >
                    Sending...
                  </motion.div>
                ) : (
                  <>
                    <span>Send Message</span>
                    <motion.span
                      initial={{ x: 0 }}
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                    >
                      <Send className="ml-2 w-4 h-4" />
                    </motion.span>
                  </>
                )}
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>

        {/* RIGHT SIDE: CONTACT + SOCIAL */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col gap-6"
        >
          {/* CONTACT CARD */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-card border border-border rounded-2xl p-6 shadow-lg flex flex-col gap-3"
          >
            <h3 className="font-bold text-lg mb-2">Contact</h3>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <p>contact@lumoscale.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <div className="flex flex-col">
                <span>+91 8919053970</span>
                <span>+91 8074328526</span>
              </div>
            </div>
          </motion.div>

          {/* BUSINESS HOURS */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-card border border-border rounded-2xl p-6 shadow-lg flex items-start gap-4"
          >
            <Clock className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="font-bold">Business Hours</h3>
              <p>Mon–Sat: 9am – 7pm IST</p>
              <p className="text-sm text-muted-foreground">We’re based in IST and serve clients globally 🌍</p>
            </div>
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-card border border-border rounded-2xl p-6 shadow-lg flex flex-col gap-3"
          >
            <h3 className="font-bold">Social</h3>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/lumoscale" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 text-primary" />
              </a>
              <a href="https://www.instagram.com/lumoscale.ai/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 text-primary" />
              </a>
              <a href="https://www.facebook.com/share/1Hwz9Yv69z/" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 text-primary" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
