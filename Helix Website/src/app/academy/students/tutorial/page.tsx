"use client";

import React from "react";
import { motion } from "framer-motion";
import { Book, Wrench, Zap, Code, Shield, Lightbulb, Keyboard } from 'lucide-react';

type SectionProps = {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  id: string;
};

function Section({ icon, title, content, id }: SectionProps) {
  return (
    <motion.section 
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id={id}
    >
      <h2 className="text-2xl font-semibold text-[#e77948] flex items-center group">
        {icon}
        <span className="ml-2">{title}</span>
      </h2>
      <motion.div 
        className="bg-[#111]/80 p-6 rounded-2xl shadow-lg border border-[#e77948]/20"
        whileHover={{ scale: 1.02, borderColor: 'rgba(231, 121, 72, 0.5)' }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {content}
      </motion.div>
    </motion.section>
  );
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="bg-[#1a1a1a] p-4 rounded-lg overflow-x-auto">
      <code className="text-sm text-white">{children}</code>
    </pre>
  );
}

export default function AcademyTutorial() {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold flex items-center justify-center mb-4">
            <Book className="mr-2 text-[#e77948]" /> Helix Tech Academy
          </h1>
          <p className="text-xl text-white/70">Master Discord Bot Development</p>
        </motion.div>
        
        <div className="space-y-12">
          <motion.div 
            className="text-lg text-white/90 bg-[#111]/80 p-6 rounded-2xl shadow-lg border border-[#e77948]/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="mb-4">Welcome to the Helix Academy Bot Handler! 🚀</p>
            <p className="mb-4">Our academy teaches you how to create advanced Discord bots from scratch, using organized code structures and efficient handling.</p>
            <p className="text-[#e77948] font-semibold">⚠️ Notice: This handler is for Helix students only. Unauthorized use or distribution is strictly prohibited.</p>
          </motion.div>

          <Section
            icon={<Wrench className="text-[#e77948]" />}
            title="Installation & Setup"
            id="installation"
            content={
              <div className="space-y-4">
                <p className="font-semibold text-[#e77948]">Follow these steps to get your bot up and running:</p>
                <ol className="list-decimal list-inside space-y-4">
                  <li>
                    <p className="font-semibold">Initialize Your Project</p>
                    <CodeBlock>npm init -y</CodeBlock>
                  </li>
                  <li>
                    <p className="font-semibold">Install Necessary Packages</p>
                    <CodeBlock>npm install discord.js @discordjs/builders dotenv</CodeBlock>
                  </li>
                  <li>
                    <p className="font-semibold">Set Up ESLint (Optional)</p>
                    <CodeBlock>npx eslint --init</CodeBlock>
                  </li>
                  <li>
                    <p className="font-semibold">Running the Bot</p>
                    <CodeBlock>node index.js</CodeBlock>
                    <p className="text-sm text-white/70 mt-2">Or use nodemon for development: <code className="bg-[#1a1a1a] px-1 rounded">nodemon index.js</code></p>
                  </li>
                </ol>
              </div>
            }
          />

          <Section
            icon={<Zap className="text-[#e77948]" />}
            title="Understanding Sharding"
            id="sharding"
            content={
              <div className="space-y-4">
                <p>Sharding divides your bot's processes across multiple servers, essential for bots in 2,500+ servers. It ensures each process remains responsive by splitting the workload.</p>
                <p className="text-[#e77948] font-semibold">Note: If sharding is required, set your entry point to index.js. Otherwise, use app.js as the entry point.</p>
              </div>
            }
          />

          <Section
            icon={<Code className="text-[#e77948]" />}
            title="Command Handlers"
            id="handlers"
            content={
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Slash Command Example</h3>
                  <CodeBlock>{`
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    dev: true,
    guilds: [''],
    roles: [''],
    users: [''],
    cooldown: 0,
    userPerms: [''],
    clientPerms: [''],
    data: new SlashCommandBuilder()
        .setName('YOUR_COMMAND_NAME')
        .setDescription('YOUR_COMMAND_DESCRIPTION'),
    async execute(interaction) {
        // Command logic here
    },
};`}</CodeBlock>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Context Menu Command Example</h3>
                  <CodeBlock>{`
const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('YOUR_COMMAND_NAME')
        .setType(ApplicationCommandType.Message),
    async execute(interaction, client) {
        // Context menu logic here
    }
};`}</CodeBlock>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Button Handler Example</h3>
                  <CodeBlock>{`
module.exports = {
    customID: 'YOUR_CUSTOM_ID',
    execute: async function(interaction) {
        // Button interaction logic here
    }
};`}</CodeBlock>
                </div>
              </div>
            }
          />

          <Section
            icon={<Lightbulb className="text-[#e77948]" />}
            title="Tips & Tricks"
            id="tips"
            content={
              <ul className="list-disc list-inside space-y-2">
                <li>Use descriptive command names for clarity</li>
                <li>Set appropriate cooldowns to prevent spamming</li>
                <li>Whitelist permissions for sensitive commands</li>
                <li>Organize your code into modules for better maintainability</li>
                <li>Use async/await for cleaner asynchronous code</li>
              </ul>
            }
          />

          <Section
            icon={<Keyboard className="text-[#e77948]" />}
            title="Visual Studio Code Shortcuts"
            id="shortcuts"
            content={
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1a1a1a] p-2 rounded">
                  <span className="font-semibold">Open Command Palette:</span> Ctrl + Shift + P
                </div>
                <div className="bg-[#1a1a1a] p-2 rounded">
                  <span className="font-semibold">Quick Open:</span> Ctrl + P
                </div>
                <div className="bg-[#1a1a1a] p-2 rounded">
                  <span className="font-semibold">Toggle Terminal:</span> Ctrl + `
                </div>
                <div className="bg-[#1a1a1a] p-2 rounded">
                  <span className="font-semibold">Comment/Uncomment Line:</span> Ctrl + /
                </div>
                <div className="bg-[#1a1a1a] p-2 rounded">
                  <span className="font-semibold">Duplicate Line:</span> Shift + Alt + Down Arrow
                </div>
                <div className="bg-[#1a1a1a] p-2 rounded">
                  <span className="font-semibold">Move Line Up/Down:</span> Alt + Up/Down Arrow
                </div>
              </div>
            }
          />

          <motion.div 
            className="text-white text-center font-semibold bg-[#111]/80 p-6 rounded-2xl shadow-lg border border-[#e77948]/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4">Happy coding, and enjoy learning with Helix Academy!</p>
            <p className="text-[#e77948]">Remember to check our documentation for more in-depth guides and examples.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
