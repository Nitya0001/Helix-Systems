"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Shield, DollarSign, MessageSquare, Clock, Edit, Bell, Eye, UserCheck, RefreshCcw, FileText, Lock, AlertTriangle, Package, Calendar, Link, Check, X, Database } from 'lucide-react';

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
        className="bg-[#111]/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-[#e77948]/20"
        whileHover={{ scale: 1.02, borderColor: 'rgba(231, 121, 72, 0.5)' }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {content}
      </motion.div>
    </motion.section>
  );
}

export default function EnhancedTermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#e77948] opacity-5 mix-blend-overlay" />
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23e77948' fill-opacity='0.1'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: '400px 400px',
          animation: 'subtleMove 120s linear infinite'
        }} />
      </div>

      <style jsx>{`
        @keyframes subtleMove {
          0% { background-position: 0 0; }
          100% { background-position: 400px 400px; }
        }
      `}</style>

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
          <h2 className="text-4xl font-semibold text-[#e77948] mb-2">Terms of Service</h2>
          <p className="text-white/70">Last Updated: November 5, 2024</p>
        </motion.div>
        
        <div className="space-y-12">
          <motion.div 
            className="text-lg text-white/90 bg-[#111]/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-[#e77948]/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="mb-4">By using our services, you're agreeing to these Terms of Service. They're designed to create a clear understanding between us and ensure a smooth experience for everyone involved.</p>
            <p>If any part of these terms doesn't sit right with you, we kindly ask that you refrain from using our services. Your agreement to these terms is what allows us to provide our innovative bot solutions to you!</p>
          </motion.div>

          <motion.p 
            className="text-white/70 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Got questions? Reach out to our friendly team on Discord!
          </motion.p>

          <hr className="border-[#e77948]/30" />

          <Section
            icon={<Package className="text-[#e77948]" />}
            title="Ownership and Rights to Software"
            id="ownership"
            content={
              <div className="space-y-4">
                <p className="font-semibold text-[#e77948]">At Helix, we're all about flexibility. Here's how our ownership model works:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#1a1a1a] p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 flex items-center"><DollarSign className="mr-2 text-[#e77948]" /> Hosted Services</h3>
                    <p>Use our software as a service, without access to the source code. Perfect for those who want a hands-off approach!</p>
                  </div>
                  <div className="bg-[#1a1a1a] p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 flex items-center"><Code className="mr-2 text-[#e77948]" /> Source Code Purchase</h3>
                    <p>Buy the rights to the software, granting you complete access to the source code. Ideal for tech-savvy clients!</p>
                  </div>
                </div>
                <p className="text-sm text-white/70">Note: Post-transfer maintenance isn't included, but we offer stellar support packages for an additional fee.</p>
              </div>
            }
          />

          <Section
            icon={<MessageSquare className="text-[#e77948]" />}
            title="Order Completion and Communication"
            id="order-completion"
            content={
              <div className="space-y-4">
                <p className="font-semibold text-[#e77948]">Clear communication is key to a successful project. Here's what you need to know:</p>
                <ul className="list-none space-y-2">
                  {[
                    "Provide detailed, accurate order information",
                    "We'll send a comprehensive confirmation",
                    "Review the confirmation carefully",
                    "Alert us immediately to any discrepancies",
                    "Delivery timelines may vary based on project complexity",
                    "Post-confirmation changes may incur fees and delays"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 mt-1 flex-shrink-0 text-[#e77948]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-white/70">Remember: The clearer your instructions, the smoother the process!</p>
              </div>
            }
          />

          <Section
            icon={<DollarSign className="text-[#e77948]" />}
            title="Payment Terms"
            id="payment"
            content={
              <div className="space-y-4">
                <p className="font-semibold text-[#e77948]">We keep our payment process simple and straightforward:</p>
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Payment Options:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>USD via our secure payment gateways</li>
                    <li>Robux through Roblox platform</li>
                  </ul>
                </div>
                <p>Your order is officially confirmed once we receive your payment. This kickstarts our development process!</p>
                <p className="text-sm text-white/70">Note: While our pricing may change, rest assured that confirmed orders are locked in at their original price.</p>
              </div>
            }
          />

          <Section
            icon={<UserCheck className="text-[#e77948]" />}
            title="User Eligibility"
            id="eligibility"
            content={
              <div className="space-y-4">
                <p className="font-semibold text-[#e77948]">To use Helix services, you confirm that:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { icon: <Calendar className="text-[#e77948]" />, text: "You're at least 13 years old" },
                    { icon: <FileText className="text-[#e77948]" />, text: "Your request complies with all applicable laws" },
                    { icon: <Shield className="text-[#e77948]" />, text: "Your order isn't intended to cause harm" }
                  ].map((item, index) => (
                    <div key={index} className="bg-[#1a1a1a] p-4 rounded-lg flex flex-col items-center text-center">
                      {item.icon}
                      <p className="mt-2">{item.text}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-white/70">We reserve the right to terminate access for non-compliance with these conditions.</p>
              </div>
            }
          />

          <Section
            icon={<RefreshCcw className="text-[#e77948]" />}
            title="Cancellation and Refund Policies"
            id="cancellation"
            content={
              <div className="space-y-4">
                <p className="font-semibold text-[#e77948]">We have a strict no-refund policy, but we do our best to be fair:</p>
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Cancellation Terms:</h3>
                  <ul className="list-none space-y-2">
                    {[
                      { icon: <X />, text: "No refunds after payment is made" },
                      { icon: <AlertTriangle />, text: "Post-confirmation cancellations only by mutual agreement" },
                      { icon: <DollarSign />, text: "Fees may apply if we lose contact without prior agreement" },
                      { icon: <Lock />, text: "Non-payment results in loss of service access" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="mr-2 text-[#e77948]">{item.icon}</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-white/70">We're always here to discuss any concerns you might have about your order.</p>
              </div>
            }
          />

          <Section
            icon={<AlertTriangle className="text-[#e77948]" />}
            title="Limitations of Liability"
            id="liability"
            content={
              <div className="space-y-4">
                <p className="font-semibold text-[#e77948]">While we're committed to providing secure and reliable software, here's what you need to know about our liability:</p>
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Key Points:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>We're not responsible for any direct or indirect damages</li>
                    <li>This includes loss of profits, data, or business interruptions</li>
                    <li>You use our services at your own risk, except for security-related issues</li>
                  </ul>
                </div>
                <p className="text-sm text-white/70">Rest assured, we take security seriously and will address any security-related concerns promptly.</p>
              </div>
            }
          />

          <Section
            icon={<Calendar  className="text-[#e77948]" />}
            title="Subscription Information"
            id="subscription"
            content={
              <div className="space-y-4">
                <p className="font-semibold text-[#e77948]">For services like hosting, we offer subscription plans. Here's how they work:</p>
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Subscription Details:</h3>
                  <ul className="list-none space-y-2">
                    {[
                      { icon: <DollarSign />, text: "Full pre-payment required for service activation" },
                      { icon: <Bell />, text: "We'll notify you before your subscription expires" },
                      { icon: <RefreshCcw />, text: "Follow our provided procedures for smooth renewals" },
                      { icon: <Clock />, text: "Subscriptions ensure continuous service and support" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="mr-2 text-[#e77948]">{item.icon}</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-white/70">Need help managing your subscription? Our support team is just a message away!</p>
              </div>
            }
          />

          <Section
            icon={<FileText className="text-[#e77948]" />}
            title="Updates to the Terms"
            id="updates"
            content={
              <div className="space-y-4">
                <p className="font-semibold text-[#e77948]">Our Terms of Service may evolve over time. Here's what you should know:</p>
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Update Policy:</h3>
                  <ul className="list-none space-y-2">
                    {[
                      { icon: <Edit />, text: "We may modify these terms without prior notice" },
                      { icon: <MessageSquare />, text: "Significant changes will be communicated to you" },
                      { icon: <Check />, text: "Continued use of our services implies acceptance of updated terms" },
                      { icon: <X />, text: "If you disagree with changes, please discontinue service use" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="mr-2 text-[#e77948]">{item.icon}</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-white/70">We encourage you to review these terms periodically to stay informed about our policies.</p>
              </div>
            }
          />

          <Section
            icon={<Lock className="text-[#e77948]" />}
            title="Data Privacy Practices"
            id="privacy"
            content={
              <div className="space-y-4">
                <p className="font-semibold text-[#e77948]">Your privacy is important to us. Here's a snapshot of our data practices:</p>
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Our Commitment to Privacy:</h3>
                  <ul className="list-none space-y-2">
                    {[
                      { icon: <Database />, text: "We collect and retain necessary client information" },
                      { icon: <Shield />, text: "Data collection aligns with our comprehensive Privacy Policy" },
                      { icon: <Eye />, text: "We're transparent about how we collect, use, and protect your data" },
                      { icon: <Lock />, text: "Robust measures in place to ensure the security of your information" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="mr-2 text-[#e77948]">{item.icon}</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-white/70">For full details, please refer to our Privacy Policy document.</p>
              </div>
            }
          />

          <hr className="border-[#e77948]/30" />

          <motion.div 
            className="text-white text-center font-semibold bg-[#111]/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-[#e77948]/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4">By commissioning Helix Bot Commission, you confirm that you have read, understood, and accepted these Terms of Service.</p>
            <p className="text-[#e77948]">We appreciate your trust in Helix and look forward to delivering exceptional service!</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}