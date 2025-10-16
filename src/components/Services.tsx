import { motion } from "framer-motion";
import { MessageSquare, Workflow, BarChart3, Boxes } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "AI Chat & Voice Assistants",
    description: "Intelligent chatbots and voice agents that handle customer inquiries, provide instant support, and engage users 24/7 with natural conversations.",
  },
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    description: "Automate repetitive tasks across sales, support, and operations. Connect all tools into one seamless system to save time, reduce errors, and boost efficiency. Let AI handle the repetitive work while you focus on strategy.",
  },
  {
    icon: BarChart3,
    title: "AI Data Insights",
    description: "Summarize emails, reports, and documents instantly. Highlight trends, uncover opportunities, and make smarter, faster business decisions.",
  },
  {
    icon: Boxes,
    title: "Custom AI Workflows",
    description: "Tailored automation solutions designed specifically for your unique business needs. We build exactly what you need, integrated perfectly with your systems.",
  },
];

const sparkleVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: [0, 1, 0], scale: [0, 1, 0], rotate: [0, 90, 180] },
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-card/20 relative overflow-hidden">
      {/* Background sparkles */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            variants={sparkleVariants}
            animate="animate"
            transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, repeatType: "mirror", delay: Math.random() * 2 }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What We <span className="gradient-text">Build For You</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive AI solutions tailored to transform your business operations
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, rotateY: 5, y: -4 }}
              className="group relative perspective-1000"
            >
              {/* Happy shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-200/10 via-pink-200/10 to-cyan-200/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-80 transition-opacity"
                whileHover={{ scale: 1.1 }}
              />

              <div className="relative bg-background border border-border rounded-2xl p-8 hover:border-primary/50 transition-all h-full overflow-hidden">
                <motion.div
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center mb-6 group-hover:from-yellow-400 group-hover:to-pink-400 transition-all"
                  whileHover={{ scale: 1.2, rotate: [0, -15, 15, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </motion.div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                {/* Floating sparkles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-white"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 + Math.random() * 1.5, delay: Math.random() * 0.5 }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
