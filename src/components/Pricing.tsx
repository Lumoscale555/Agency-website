import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const openCalendly = () => {
    window.open("https://calendly.com/lumoscale/30min", "_blank");
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, hsl(190, 100%, 50%), transparent)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Custom <span className="gradient-text">Pricing</span> Built For You
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            No fixed packages. Every solution is built around your workflow, goals, and budget.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="relative group"
          >
            {/* NEW Badge */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">
              <motion.span
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-background text-sm font-heading font-bold shadow-[0_0_40px_rgba(0,217,255,0.7)]"
              >
                <Sparkles className="w-4 h-4" />
                FLEXIBLE & TRANSPARENT
              </motion.span>
            </div>

            <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 border-2 border-primary rounded-3xl p-12 shadow-[0_0_60px_rgba(0,217,255,0.3)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
              
              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Zap className="w-20 h-20 mx-auto mb-6 text-primary" />
                </motion.div>

                <h3 className="text-4xl font-heading font-bold mb-4 gradient-text">
                  Smart Solutions
                </h3>
                <p className="text-xl text-muted-foreground mb-8 font-body max-w-2xl mx-auto">
                  We analyze your workflows, estimate the scope, and create a custom package that fits your business perfectly.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-background/50 rounded-2xl p-6 border border-primary/20"
                  >
                    <h4 className="font-heading font-bold text-primary text-2xl mb-2">Pay Only</h4>
                    <p className="text-sm text-muted-foreground font-body">For what you actually need</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-background/50 rounded-2xl p-6 border border-secondary/20"
                  >
                    <h4 className="font-heading font-bold text-secondary text-2xl mb-2">Scale Anytime</h4>
                    <p className="text-sm text-muted-foreground font-body">Grow up or down freely</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-background/50 rounded-2xl p-6 border border-primary/20"
                  >
                    <h4 className="font-heading font-bold text-primary text-2xl mb-2">No Surprises</h4>
                    <p className="text-sm text-muted-foreground font-body">Clear, upfront pricing</p>
                  </motion.div>
                </div>

                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    onClick={openCalendly}
                    className="bg-gradient-to-r from-primary to-secondary text-background font-heading font-bold text-lg px-12 py-6 rounded-full hover:shadow-[0_0_30px_rgba(0,217,255,0.6)] transition-all group"
                  >
                    Get Your Custom Quote
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* What's Included */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground font-body text-lg mb-4">
              Every package includes:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Custom AI Agents", "Unlimited Integrations", "24/7 Support", "Real-time Analytics", "Continuous Optimization"].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="inline-block px-6 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-body"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-10"
          >
            <p className="text-muted-foreground font-body">
              Questions about pricing?{" "}
              <button onClick={openCalendly} className="text-primary hover:underline font-heading font-semibold">
                Let's discuss your needs
              </button>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
