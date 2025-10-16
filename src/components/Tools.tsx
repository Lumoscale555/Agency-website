import { motion } from "framer-motion";

const tools = [
  { name: "n8n", icon: " " },  // n8n icon
  { name: "Telegram", icon: "https://img.icons8.com/color/48/000000/telegram-app.png" },
  { name: "WhatsApp", icon: "https://img.icons8.com/color/48/000000/whatsapp.png" },
  { name: "Zapier", icon: "https://img.icons8.com/color/48/000000/zapier.png" },
  { name: "OpenAI", icon: "https://img.icons8.com/color/48/000000/chatgpt.png" }, // ChatGPT / OpenAI icon
  { name: "Slack", icon: "https://img.icons8.com/color/48/000000/slack-new.png" },
  { name: "Gmail", icon: "https://img.icons8.com/color/48/000000/gmail.png" },
  { name: "Notion", icon: "https://img.icons8.com/color/48/000000/notion.png" },
  { name: "Airtable", icon: "https://img.icons8.com/color/48/000000/airtable.png" },
  { name: "Google Drive", icon: "https://img.icons8.com/color/48/000000/google-drive.png" },
  { name: "Google Sheets", icon: "https://img.icons8.com/color/48/000000/google-sheets.png" },
  { name: "Gemini AI", icon: "https://img.icons8.com/color/48/000000/gemini-ai.png" },
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
            Connect all tools into one <span className="gradient-text">smooth system</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Connect with your favorite tools and let AI handle the rest.
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
                  y: [0, -10, 0, 10, 0], // floating
                  rotate: [0, 5, -5, 5, 0], // gentle rotation
                  scale: [1, 1.05, 1], // subtle pulsing
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
