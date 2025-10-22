import { motion } from "framer-motion";

const tools = [
  { name: "Telegram", icon: "https://img.icons8.com/color/48/000000/telegram-app.png" },
  { name: "WhatsApp", icon: "https://img.icons8.com/color/48/000000/whatsapp.png" },
  { name: "Zapier", icon: "https://img.icons8.com/color/48/000000/zapier.png" },
  { name: "OpenAI", icon: "https://img.icons8.com/color/48/000000/chatgpt.png" },
  { name: "Slack", icon: "https://img.icons8.com/color/48/000000/slack-new.png" },
  { name: "Gmail", icon: "https://img.icons8.com/color/48/000000/gmail.png" },
  { name: "Notion", icon: "https://img.icons8.com/color/48/000000/notion.png" },
  { name: "Google Drive", icon: "https://img.icons8.com/color/48/000000/google-drive.png" },
  { name: "Google Sheets", icon: "https://img.icons8.com/color/48/000000/google-sheets.png" },
  { name: "Gemini AI", icon: "https://img.icons8.com/color/48/000000/gemini-ai.png" },
  { name: "LinkedIn", icon: "https://img.icons8.com/color/48/000000/linkedin.png" },
  { name: "Facebook", icon: "https://img.icons8.com/color/48/000000/facebook-new.png" },
  { name: "Lovable", icon: "https://img.icons8.com/color/48/000000/heart.png" },
];

const Tools = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Unify Your AI Stack Into <span className="gradient-text">One Smart System</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            All your tools. One smart, automated system..
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.2,
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.6, ease: "easeInOut" },
              }}
              className="flex flex-col items-center gap-3 cursor-pointer"
            >
              <motion.div
                className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center transition-all shadow-md hover:shadow-[0_0_25px_rgba(0,217,255,0.6)] hover:border-primary"
                animate={{
                  y: [0, -10, 0, 10, 0],
                  rotate: [0, 5, -5, 5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              >
                <motion.img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-12 h-12 object-contain"
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                />
              </motion.div>
              <span className="text-sm font-medium text-muted-foreground font-body">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
