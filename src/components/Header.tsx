import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/lumoscale-logo.jpg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-[0_0_20px_hsl(190,100%,50%_/_0.15)]"
          : "bg-card/70 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src={logo}
              alt="Lumoscale"
              className="h-12 w-12 rounded-full object-contain border border-border shadow-[0_0_15px_hsl(190,100%,50%_/_0.4)]"
            />
            <span className="text-2xl font-heading text-white font-bold tracking-wide">
              LUMOSCALE
            </span>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["Services", "Process", "Pricing"].map((item) => (
              <motion.button
                key={item}
                className="text-foreground/80 hover:text-foreground text-sm font-medium transition-all"
                whileHover={{ scale: 1.08 }}
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </motion.button>
            ))}

            {/* ✅ Same design, just animated */}
            <motion.div
              whileHover={{
                scale: 1.08,
                boxShadow:
                  "0 0 25px hsl(190, 100%, 50% / 0.5), 0 0 40px hsl(75, 100%, 50% / 0.3)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="animate-pulse-glow rounded-full"
            >
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-secondary text-background font-semibold hover:opacity-90 transition-opacity"
              >
                <a
                  href="https://calendly.com/lumoscale/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Demo
                </a>
              </Button>
            </motion.div>
          </nav>

          {/* Mobile CTA */}
          <Button
            asChild
            className="md:hidden bg-gradient-to-r from-primary to-secondary text-background rounded-full font-semibold"
          >
            <a
              href="https://calendly.com/lumoscale/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
