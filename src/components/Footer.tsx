import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Send, CheckCircle, Home, Sparkles } from "lucide-react";
import { send } from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    company: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false); // track submission

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

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
      setSubmitted(true); // show Thank You
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
    } finally {
      setSending(false);
    }
  };

  // --- THANK YOU SCREEN ---
  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center p-12 rounded-3xl bg-card border-2 border-primary/30 glow-strong"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto mb-8 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-strong"
            >
              <CheckCircle className="w-12 h-12 text-background" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium gradient-text">Success!</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="gradient-text">Awesome!</span> Your AI System Audit is Booked
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-muted-foreground mb-10"
            >
              We'll reach out soon to discuss how we can transform your coaching business with AI automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={() => {
                  setSubmitted(false); // go back to form
                }}
                className="bg-gradient-to-r from-primary to-secondary text-background font-semibold px-10 py-6 text-lg glow-strong hover:glow-strong transition-all"
              >
                <Home className="mr-2 w-5 h-5" />
                Back to Form
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  // --- FORM SCREEN ---
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
