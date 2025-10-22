import { motion } from "framer-motion";
import { Search, Lightbulb, Hammer, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Audit",
    description: "We review current workflows to spot automation opportunities and identify pain points slowing your business.",
  },
  {
    icon: Lightbulb,
    title: "Research & Plan",
    description: "Design a custom AI strategy aligned with your business goals, ensuring the solution delivers real impact.",
  },
  {
    icon: Hammer,
    title: "Build",
    description: "Build and set up AI agents to take over repetitive tasks exactly how your business works.",
  },
  {
    icon: Rocket,
    title: "Launch & Train",
    description: "Deploy the solution and train your team to fully leverage AI, ensuring smooth adoption and maximum ROI.",
  },
  {
    icon: TrendingUp,
    title: "Optimize Continuously",
    description: "Monitor performance, gather insights, and refine AI systems for ongoing improvement and growth.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute left-0 top-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          animate={{
            scaleX: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
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
            Working<span className="gradient-text"> with us is easy</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            A streamlined journey from <b>Ideation to Continuous Optimization</b>
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-20 flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </motion.div>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center border-4 border-background">
                    <step.icon className="w-10 h-10 text-background" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-xs font-bold text-background">
                    {index + 1}
                  </div>
                </motion.div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>

          {/* Timeline Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 border-2 border-primary/30 rounded-2xl p-8 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 animate-pulse" />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 gradient-text">
                 Timeline: Hand it to us for 2–4 weeks
                </h3>
                <p className="text-lg text-foreground/80 font-body">
                  then watch AI take over while you grab a coffee.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
