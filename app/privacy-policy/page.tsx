'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Privacy Policy
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-zinc-300"
        >
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Information Collection and Use</h2>
            <p>
              The Veil EVP app collects and uses sensor data from your device&apos;s magnetometer to detect electromagnetic field (EMF) fluctuations. This data is used solely within the app for generating words, sentences, and lottery numbers based on EMF readings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Data Storage</h2>
            <p>
              All generated content (words, sentences, and lottery numbers) is stored locally on your device. We do not collect, store, or transmit any personal information or generated content to external servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Device Permissions</h2>
            <p>
              The app requires access to your device&apos;s magnetometer sensor to function. No other device permissions are required or requested.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Third-Party Services</h2>
            <p>
              We do not use any third-party services that collect user data. The app functions entirely offline and does not require an internet connection.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Children&apos;s Privacy</h2>
            <p>
              The Veil EVP app is intended for entertainment purposes and is not specifically directed to children under 13. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify users of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <a href="mailto:infinitelegacycompany@gmail.com" className="text-[#00ff00] hover:underline ml-2">
                infinitelegacycompany@gmail.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Effective Date</h2>
            <p>
              This Privacy Policy is effective as of Feburary 25, 2025.
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
} 