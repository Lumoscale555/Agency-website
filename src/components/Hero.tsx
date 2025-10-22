import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const phrases = ["Gets Results", "Drives ROI", "15+ Calls Booked/Month"];
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const speed = 120; // normal speed

    let timeout: NodeJS.Timeout;

    if (!deleting && charIndex < currentPhrase.length) {
      timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
    } else if (!deleting && charIndex === currentPhrase.length) {
      setDeleting(true);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, speed);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Bubble Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, hsl(190, 100%, 50%), transparent)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, hsl(75, 100%, 50%), transparent)" }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              AI Automation Agency
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Become an AI‑First Business That {" "}
            <span className="gradient-text">{text}</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Stop coaching the wrong people. Let our AI qualification system deliver your ideal clients straight to your calendar — every week, guaranteed.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-background font-semibold text-lg px-8 hover:opacity-90 transition-opacity group"
            >
              <a
                href="https://calendly.com/lumoscale/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Qualified Leads
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8"
              onClick={() => scrollToSection("process")}
            >
              Watch the System
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
