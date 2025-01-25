"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Database, Eye, MessageSquare, Server, FileText, UserCheck, RefreshCcw, AlertTriangle, Link } from 'lucide-react';

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
        <a href={`#${id}`} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Link size={20} className="text-[#e77948]" />
        </a>
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

export default function PrivacyPolicy() {
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
            <Shield className="mr-2 text-[#e77948]" /> Helix Bot Commission
          </h1>
          <h2 className="text-4xl font-semibold text-[#e77948] mb-2">Privacy Policy</h2>
          <p className="text-white/70">Effective Date: November 5, 2024</p>
        </motion.div>
        
        <div className="space-y-12">
          <motion.div 
            className="text-lg text-white/90 bg-[#111]/80 p-6 rounded-2xl shadow-lg border border-[#e77948]/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="mb-4">Your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, and protect your information, as well as your rights and responsibilities regarding your data.</p>
            <p>By using our services, you accept the terms in this Privacy Policy. If you have any questions or need assistance, please reach out through our Discord support channel at <a href="https://discord.gg/helixsystems" className="text-[#e77948] hover:underline">Dashboard</a>.</p>
          </motion.div>

          <hr className="border-[#e77948]/30" />

          <Section
            icon={<Database className="text-[#e77948]" />}
            title="Information We Collect"
            id="information-collected"
            content={
              <div className="space-y-4">
                <p className="font-semibold text-[#e77948]">To provide efficient and personalized bot commission services, we collect:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><span className="font-semibold">Discord Profile Information:</span> Public Discord ID and profile data</li>
                  <li><span className="font-semibold">Commission Information:</span> Project details, server names, credentials, payment records, project notes, and developed code</li>
                  <li><span className="font-semibold">Hosting Details:</span> Registration date, renewal date, and relevant hosting information</li>
                  <li><span className="font-semibold">Server Interaction Logs:</span> Minimal logs for community safety</li>
                </ul>
              </div>
            }
          />

          <Section
            icon={<Eye className="text-[#e77948]" />}
            title="How We Use Your Data"
            id="data-usage"
            content={
              <div className="space-y-4">
                <p className="font-semibold text-[#e77948]">We use your data to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Identify and authenticate clients</li>
                  <li>Build and support commissioned bots</li>
                  <li>Track and manage hosting services</li>
                  <li>Enhance user experience and improve our services</li>
                </ul>
              </div>
            }
          />

          <Section
            icon={<Lock className="text-[#e77948]" />}
            title="Information Sharing Policy"
            id="information-sharing"
            content={
              <div className="space-y-4">
                <p>We do not sell, rent, or share your data with external parties without your explicit consent. Information may be disclosed only in these limited situations:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>To comply with legal requirements (e.g., subpoena or court order)</li>
                  <li>To report violations of our Terms of Service or community guidelines</li>
                </ul>
              </div>
            }
          />

          <Section
            icon={<MessageSquare className="text-[#e77948]" />}
            title="Communication Practices"
            id="communication"
            content={
              <div className="space-y-4">
                <p>We primarily use Discord for communication. We may contact you to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide order updates and project progress</li>
                  <li>Send billing and renewal notices</li>
                  <li>Offer customer support and troubleshooting</li>
                </ul>
              </div>
            }
          />

          <Section
            icon={<Shield className="text-[#e77948]" />}
            title="Security Measures"
            id="security"
            content={
              <div className="space-y-4">
                <p className="font-semibold text-[#e77948]">We implement robust security measures, including:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Data encryption during storage and transmission</li>
                  <li>Strict access control for client data</li>
                  <li>Regular security audits</li>
                  <li>Secure storage of client data and bot source code</li>
                </ul>
              </div>
            }
          />

          <Section
            icon={<Server className="text-[#e77948]" />}
            title="Use of Third-Party Services"
            id="third-party"
            content={
              <div className="space-y-4">
                <p>We collaborate with trusted third parties to provide our services:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Discord: Communication and support</li>
                  <li>Cloudflare: Domain management and CDN</li>
                  <li>Breezehost.xyz: Secure hosting of project files</li>
                  <li>Github: Secure code storage and management</li>
                </ul>
                <p className="text-sm text-white/70">These services are chosen for their commitment to data security and privacy compliance.</p>
              </div>
            }
          />

          <Section
            icon={<FileText className="text-[#e77948]" />}
            title="Data Retention"
            id="data-retention"
            content={
              <div className="space-y-4">
                <p>We retain data as needed to fulfill our service obligations and meet legal requirements:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Project files and source code: Retained for the project duration and follow-up support</li>
                  <li>Commission and payment records: Kept as required by accounting and legal standards</li>
                  <li>Interaction logs: Temporarily retained for short periods</li>
                </ul>
              </div>
            }
          />

          <Section
            icon={<UserCheck className="text-[#e77948]" />}
            title="Minors' Privacy"
            id="minors-privacy"
            content={
              <div className="space-y-4">
                <p>Helix Bot Commissions is intended for users aged 13 and above. We do not knowingly collect or store information from minors. If you believe a minor has used our services, please contact us immediately.</p>
              </div>
            }
          />

          <Section
            icon={<RefreshCcw className="text-[#e77948]" />}
            title="Your Rights and Control over Your Data"
            id="data-rights"
            content={
              <div className="space-y-4">
                <p className="font-semibold text-[#e77948]">As a client, you have the right to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Access your data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request data deletion</li>
                  <li>Control communications preferences</li>
                </ul>
                <p className="text-sm text-white/70">To exercise these rights, please contact us through Discord or your designated contact method.</p>
              </div>
            }
          />

          <Section
            icon={<AlertTriangle className="text-[#e77948]" />}
            title="Policy Updates"
            id="policy-updates"
            content={
              <div className="space-y-4">
                <p>Helix may periodically update this Privacy Policy. We will notify clients of significant updates as needed. Continued use of our services following any update constitutes acceptance of the revised terms.</p>
              </div>
            }
          />

          <hr className="border-[#e77948]/30" />

          <motion.div 
            className="text-white text-center font-semibold bg-[#111]/80 p-6 rounded-2xl shadow-lg border border-[#e77948]/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4">Thank you for choosing Helix Bot Commissions.</p>
            <p className="text-[#e77948]">We are committed to providing a secure, private, and exceptional experience.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}