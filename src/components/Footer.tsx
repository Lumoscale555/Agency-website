import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Send, Sparkles } from "lucide-react";
import { send } from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    company: "",
    message: "",
  });
  const [step, setStep] = useState<"form" | "countdown" | "thankyou">("form");
  const [count, setCount] = useState(3);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep("countdown");
    setSending(true);

    // Start countdown
    setCount(3);

    const countdownInterval = setInterval(() => {
      setCount((prev) => {
        if (prev === 1) {
          clearInterval(countdownInterval);
          setStep("thankyou");
        }
        return prev - 1;
      });
    }, 1000);

    // Send email in background
    try {
      await send(
        "service_duxnlp8",
        "template_on7mffm",
        formData,
        "tco2ucJ538Fatdokp"
      );
      setFormData({
        name: "",
        email: "",
        website: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
    } finally {
      setSending(false);
    }
  };

  // --- COUNTDOWN PAGE ---
  if (step === "countdown") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white text-center">
        <motion.div
          key={count}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          className="text-8xl md:text-9xl font-bold"
        >
          {count > 0 ? count : ""}
        </motion.div>
      </div>
    );
  }

  // --- THANK YOU PAGE ---
  if (step === "thankyou") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white p-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Sparkles className="w-16 h-16 mx-auto mb-4 animate-bounce" />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2">🎉 Thank You!</h1>
          <p className="text-lg md:text-xl mb-6">
            We received your message and will get back to you fast 🚀
          </p>
          <Button
            className="bg-white text-black font-bold px-6 py-3 rounded-full"
            onClick={() => setStep("form")}
          >
            Back to Form
          </Button>
        </motion.div>
      </div>
    );
  }

  // --- FORM PAGE ---
  return (
    <section className="min-h-screen bg-background flex items-center justify-center p-6">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl bg-card border border-border rounded-2xl p-8 shadow-lg"
      >
        <h2 className="text-3xl font-heading font-bold text-center mb-8 gradient-text">
          Let’s Talk About Your Project
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground">Name</label>
              <Input
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background/50"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Website (optional)</label>
              <Input
                placeholder="https://yourwebsite.com"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="bg-background/50"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground">Email</label>
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background/50"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Company</label>
              <Input
                placeholder="Your company name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="bg-background/50"
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <label className="text-sm text-muted-foreground">Message</label>
          <Textarea
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={4}
            className="bg-background/50 resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={sending}
          className={`w-full mt-6 flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-background font-heading font-bold transition-all ${
            sending ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {sending ? "Sending..." : "Send Message"}
          {!sending && <Send className="ml-2 w-4 h-4" />}
        </Button>
      </motion.form>
    </section>
  );
};

export default ContactForm;
