"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Users, XCircle, Edit, AlertTriangle, XOctagon } from 'lucide-react';

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

export default function AcademyLicense() {
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
            <Shield className="mr-2 text-[#e77948]" /> Helix License
          </h1>
          <p className="text-xl text-white/70">Version 0.1, November 2024</p>
        </motion.div>
        
        <div className="space-y-12">
          <motion.div 
            className="text-lg text-white/90 bg-[#111]/80 p-6 rounded-2xl shadow-lg border border-[#e77948]/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="mb-4">The Helix Academy Bot Handler (the "Software") is intended exclusively for use by authorized members within the Helix Academy Discord server.</p>
            <p>Only users with specific roles as outlined below are permitted to access, use, or modify this Software under the terms and conditions of this license.</p>
          </motion.div>

          <Section
            icon={<Users className="text-[#e77948]" />}
            title="1. Authorized Usage"
            id="authorized-usage"
            content={
              <div className="space-y-4">
                <p>This Software may only be used by members with one of the following roles:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><span className="font-semibold">Student:</span> Users enrolled in a Helix Academy course.</li>
                  <li><span className="font-semibold">Course Instructor:</span> Helix Academy instructors authorized to access and teach with this Software.</li>
                  <li><span className="font-semibold">Helix System Team Member:</span> Official members involved in Helix Academy's development, support, or administration.</li>
                </ul>
                <p>Authorized Users may use this Software for educational purposes within Helix Academy only.</p>
              </div>
            }
          />

          <Section
            icon={<XCircle className="text-[#e77948]" />}
            title="2. Restrictions on Distribution"
            id="distribution-restrictions"
            content={
              <div className="space-y-4">
                <p>The Software may NOT be shared, distributed, or published, in part or in full, to any individual or organization outside Helix Academy's authorized members as defined above.</p>
                <p className="font-semibold text-[#e77948]">The following actions are strictly prohibited:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Sharing code with unauthorized users</li>
                  <li>Publicly publishing code (e.g., on GitHub, forums, social media)</li>
                  <li>Redistributing this Software without written approval from Helix Academy</li>
                </ul>
              </div>
            }
          />

          <Section
            icon={<Edit className="text-[#e77948]" />}
            
            title="3. Modification Permissions"
            id="modification-permissions"
            content={
              <div className="space-y-4">
                <p>Authorized Users may modify this Software only for their personal use within the educational context of Helix Academy.</p>
                <p>Modified versions of the Software are also subject to all terms in this license, including restrictions on sharing or publication.</p>
              </div>
            }
          />

          <Section
            icon={<AlertTriangle className="text-[#e77948]" />}
            title="4. Warranty Disclaimer"
            id="warranty-disclaimer"
            content={
              <p>This Software is provided "as is," without any warranty of any kind, express or implied. Helix Academy is not responsible for any issues, damages, or liabilities arising from the use or misuse of this Software.</p>
            }
          />

          <Section
            icon={<XOctagon className="text-[#e77948]" />}
            title="5. Termination of Rights"
            id="termination-of-rights"
            content={
              <div className="space-y-4">
                <p>Violation of any terms in this license will result in immediate termination of access to the Software.</p>
                <p>Helix Academy reserves the right to enforce this license and may pursue legal action if necessary.</p>
              </div>
            }
          />

          <motion.div 
            className="text-white text-center font-semibold bg-[#111]/80 p-6 rounded-2xl shadow-lg border border-[#e77948]/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4">By using the Helix Academy Bot Handler, you acknowledge and accept all terms of this license.</p>
            <p className="text-[#e77948]">Thank you for respecting the guidelines and helping us maintain a secure and productive learning environment!</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}