import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/lumoscale-logo.jpg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src={logo} alt="Lumoscale" className="h-12 w-12 object-contain" />
            <span className="text-2xl font-bold gradient-text">LUMOSCALE</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {["Services", "Process", "Pricing"].map((item) => (
              <motion.button
                key={item}
                className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </motion.button>
            ))}

            {/* ✅ Updated: Opens Calendly link in new tab */}
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
          </nav>

          {/* ✅ Optional: Mobile button also opens Calendly */}
          <Button
            asChild
            className="md:hidden bg-gradient-to-r from-primary to-secondary text-background"
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
