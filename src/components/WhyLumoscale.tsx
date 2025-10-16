import { motion } from "framer-motion";
import { X, Check, Zap, Shield, Clock, TrendingUp, Users, Award } from "lucide-react";

const comparisons = [
  { feature: "Custom AI Solutions", icon: Zap },
  { feature: "24/7 Support", icon: Clock },
  { feature: "Training", icon: Shield },
  { feature: "No Fixed Packages", icon: TrendingUp },
  { feature: "End-to-End", icon: Users },
  { feature: "Growth", icon: Award },
];

const WhyLumoscale = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      {/* Subtle glowing background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,255,0.15),transparent_40%)]" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 text-white">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Lumoscale</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-body">
            The difference between <span className="text-white font-medium">average automation</span> and <span className="text-cyan-400 font-medium">AI excellence.</span>
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-3xl border border-cyan-500/30 bg-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(0,255,255,0.15)]">
          <div className="grid grid-cols-3 border-b border-cyan-500/20 text-center py-5">
            <div></div>
            <div className="text-xl font-semibold text-gray-400">Others</div>
            <div className="text-xl font-semibold text-cyan-400">Lumoscale</div>
          </div>

          {comparisons.map((item, index) => (
            <motion.div
              key={item.feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.01, backgroundColor: "rgba(0,255,255,0.05)" }}
              className="grid grid-cols-3 border-b border-cyan-500/10 items-center text-center py-6 px-4 last:border-none"
            >
              {/* Feature */}
              <div className="flex items-center gap-4 justify-start pl-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center"
                >
                  <item.icon className="w-5 h-5 text-cyan-400" />
                </motion.div>
                <div className="text-left">
                  <h4 className="text-white font-medium text-lg">{item.feature}</h4>
                </div>
              </div>

              {/* Others */}
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center"
                >
                  <X className="w-6 h-6 text-red-400" />
                </motion.div>
              </div>

              {/* Lumoscale */}
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_25px_rgba(0,255,255,0.6)]"
                >
                  <Check className="w-6 h-6 text-white" strokeWidth={3} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
      {/* CTA */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.5 }}
  className="mt-16 text-center"
>
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(0,255,255,0.6)" }}
    className="inline-block px-10 py-5 rounded-full border border-cyan-400/40 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-md overflow-hidden relative"
  >
    {/* Animated gradient text */}
    <h2 className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x">
      <span className="font-bold">Ready to scale?</span> Let’s automate your success.
    </h2>

    <style jsx>{`
      .animate-gradient-x {
        background-size: 200% auto;
        animation: gradient-x 3s linear infinite;
      }
      @keyframes gradient-x {
        0% {
          background-position: 0% center;
        }
        100% {
          background-position: 200% center;
        }
      }
    `}</style>
  </motion.div>
</motion.div>

      </div>
    </section>
  );
};

export default WhyLumoscale;
