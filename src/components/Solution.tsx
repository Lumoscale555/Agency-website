import { motion } from "framer-motion";
import { Brain, Link2, TrendingUp } from "lucide-react";

const solutions = [
  {
    icon: Brain,
    title: "AI That Only Works for You",
    description: "Custom AI agents qualify leads, nurture prospects, and book discovery calls automatically so you never waste time on tire-kickers..",
  },
  {
    icon: Link2,
    title: "All Your Tools, One System",
    description: "Our AI handles your entire lead journey, qualifying prospects, booking discovery calls, and managing follow-ups so your business runs smoothly 24/7.",
  },
  {
    icon: TrendingUp,
    title: "Results You Can Measure",
    description: "Track qualified calls booked, time saved, and revenue growth with clear analytics — see exactly how automation transforms your business.",
  },
];

const Solution = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, hsl(190, 100%, 50%), transparent)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">AI-Powered Solution</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We built a system that qualifies leads 24/7, books only 
perfect-fit prospects on your calendar, and handles all 
the follow-up automatically.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all">
                <motion.div
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <solution.icon className="w-8 h-8 text-background" />
                </motion.div>
                <h3 className="text-xl font-bold mb-4 gradient-text">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
