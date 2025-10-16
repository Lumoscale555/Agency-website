import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Clock, Unplug, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Wasted Time on Repetitive Tasks",
    description:
      "Your team spends countless hours on manual data entry, scheduling, follow-ups, and other repetitive work that drains productivity and creativity.",
  },
  {
    icon: Unplug,
    title: "Disconnected Tools & Workflows",
    description:
      "Critical information is scattered across multiple platforms. Tools that don’t communicate create mistakes, slow processes, and endless frustration.",
  },
  {
    icon: TrendingDown,
    title: "Missed Opportunities & Slow Growth",
    description:
      "Manual workflows create bottlenecks. Leads are lost, deals take longer, and scaling the business becomes a constant struggle.",
  },
];

const Problem = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-neutral-900 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The Problems <span className="gradient-text">Holding You Back</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
           Most businesses don’t realize how much time, energy, and money is lost to repetitive work — until it’s automated.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <TiltCard key={problem.title} problem={problem} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TiltCard = ({ problem, delay }: { problem: typeof problems[0]; delay: number }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePos({ x, y });
  };

  const resetMouse = () => setMousePos({ x: 0, y: 0 });

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMouse}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          rotateY: mousePos.x / 20,
          rotateX: -mousePos.y / 20,
        }}
        whileHover={{ scale: 1.06 }}
        className="relative bg-neutral-800 rounded-3xl p-8 shadow-lg border border-neutral-700 transition-transform duration-300 cursor-pointer overflow-hidden"
      >
        <motion.div
          className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center mb-6 shadow-md"
          whileHover={{ scale: 1.2, rotate: [0, -15, 15, 0] }}
          transition={{ duration: 0.5 }}
        >
          <problem.icon className="w-8 h-8 text-white" />
        </motion.div>

        <h3 className="text-xl font-bold mb-4">{problem.title}</h3>
        <p className="text-gray-300 leading-relaxed">{problem.description}</p>
      </motion.div>
    </motion.div>
  );
};

export default Problem;
