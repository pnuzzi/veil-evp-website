'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BeamsBackground } from './components/ui/beams-background';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { ActivityIcon, SlidersIcon, MessageSquareIcon, TicketIcon, HistoryIcon, BugIcon } from 'lucide-react';

const HomePage = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <BeamsBackground intensity="strong">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto mb-8"
          >
            <Image
              src="/images/Veil-EVP-Logo---Big.png"
              alt="Veil EVP Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mt-4 text-zinc-300"
          >
            EVP Ghost Communicator
          </motion.p>
        </div>
      </BeamsBackground>

      {/* Company Overview Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative h-[500px] w-full"
              >
                <Image
                  src="/images/website-phone-image.png"
                  alt="Website on phone display"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">Get to know about Veil EVP</h2>
              <div className="h-1 w-24 bg-[#00ff00]"></div>
              <p className="text-zinc-400">
              Unlock the secrets of the spirit world with Veil EVP, the ultimate tool for paranormal investigators, psychics, spiritualists, and ghost hunters. This app uses advanced EVP (Electronic Voice Phenomenon) technology to detect and interpret mysterious energy fluctuations, helping you connect with spirits beyond the veil.
              </p>
              <p className="text-zinc-400">
              Veil EVP measures changes in the electromagnetic field (EMF) using real sensors in your device. The changes in the EMFs around your device are used to select words, construct sentences, and select lottery numbers. This app uses real changes in EMFs and raw readings from your device only.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services & Testimonial Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-5xl font-bold"
              >
                Words and Sentences
              </motion.h3>
              <div className="h-1 w-24 bg-[#00ff00]"></div>
              <p className="text-zinc-400">
              This app utilizes real-time fluctuations in electromagnetic fields (EMFs) and raw sensor readings from your device to generate words and sentences. By analyzing these subtle energy changes, the app provides an interactive experience Whether you&apos;re a paranormal enthusiast or just curious about the unknown, this tool offers a fun and intriguing way to explore EVP phenomena.
              </p>
              <ul className="list-disc list-inside text-zinc-400">
                <li>
                  There are thousands of words, nouns, verbs, adjectives, and more.
                </li>
                <li>
                  There are also thousands of sentences that can be constructed.
                </li>
              </ul>
            </div>
            <div className="flex gap-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative h-[400px] w-full"
              >
                <Image
                  src="/images/website-screen-images-words.png"
                  alt="Website screen with words"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-[400px] w-full"
              >
                <Image
                  src="/images/website-screen-images-sentences.png"
                  alt="Website screen with sentences"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-5xl font-bold"
              >
                Lottery and History
              </motion.h3>
              <div className="h-1 w-24 bg-[#00ff00]"></div>
              <p className="text-zinc-400">
                Using the same EMF technology, Veil EVP can help generate potential lottery numbers based on spiritual energy readings. Keep track of all your sessions and communications with our comprehensive history feature, allowing you to review past interactions and patterns.
              </p>
              <ul className="list-disc list-inside text-zinc-400">
                <li>
                  Generate lottery numbers influenced by spiritual energies. The lotteries are Powerball, Mega Millions, Lotto America, Cash4Life, and Lucky for Life.
                </li>
                <li>
                  You can also review and analyze your complete session history
                </li>
              </ul>
            </div>
            <div className="flex gap-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative h-[400px] w-full"
              >
                <Image
                  src="/images/website-screen-images-lottery.png"
                  alt="Website screen with lottery"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-[400px] w-full"
              >
                <Image
                  src="/images/website-screen-images-history.png"
                  alt="Website screen with history"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-5xl font-bold"
              >
                Information and Settings
              </motion.h3>
              <div className="h-1 w-24 bg-[#00ff00]"></div>
              <p className="text-zinc-400">
              This entertainment app captures words, sentences, and even lottery numbers by analyzing fluctuations in the electromagnetic field (EMF). The concept is based on the idea that spirits can influence these energy changes, potentially guiding the app&apos;s word and number generators to produce meaningful statements. Whether used for fun, curiosity, or paranormal exploration, this app offers an engaging and mysterious experience.
              </p>

              <p className="mt-4 text-zinc-400">
              Disclaimer: EVP (Electronic Voice Phenomenon) recordings are intended for entertainment purposes only and should not be considered scientific evidence of paranormal activity. Results may vary, and interpretations are subjective. Use responsibly and have fun exploring the unknown!
              </p>
            </div>
            <div className="space-y-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="emf" className="py-2">
                  <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline flex w-full justify-between">
                    <span className="flex items-center gap-3">
                      <ActivityIcon
                        size={16}
                        strokeWidth={2}
                        className="shrink-0 opacity-60"
                        aria-hidden="true"
                      />
                      <span>EMF Fluctuation Box</span>
                    </span>
                    <i className="fas fa-chevron-down transition-transform duration-200 ease-out data-[state=open]:rotate-180" />
                  </AccordionTrigger>
                  <AccordionContent className="pb-2 ps-7 text-muted-foreground">
                    The EMF Fluctuation box shows the current EMF reading (ex: 60.14). This reading will fluctuate based on EMF fields, going higher or lower based on the energy around you. The EMF sensor in your device is effected by magnets and magnetic things. Keep your device away from magnetic equipment or fields. Also, moving the device around effects the EMF sensor and will change the EMF Fluctuation. Both magnetic fields and moving your device around will generate false positives and it is recommended that you keep your device still and stay away from magnetic things.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="sensitivity" className="py-2">
                  <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline flex w-full justify-between">
                    <span className="flex items-center gap-3">
                      <SlidersIcon
                        size={16} 
                        strokeWidth={2}
                        className="shrink-0 opacity-60"
                        aria-hidden="true"
                      />
                      <span>Sensitivity Slider Box</span>
                    </span>
                    <i className="fas fa-chevron-down transition-transform duration-200 ease-out data-[state=open]:rotate-180" />
                  </AccordionTrigger>
                  <AccordionContent className="pb-2 ps-7 text-muted-foreground">
                    <p>
                      This box changes the sensitivity of the EMF Fluctuation. The EMF Fluctuation will, for example, read 60.14. If the sensitivity is set to 1.00, the EMF Fluctuation will need to move up to 61.14 or above, and it can also move down to 59.14 and below to create a significant event.
                    </p>

                    <p className="mt-4">
                      When the EMF Fluctuation moves above or below the set sensitivity a significant event will occur and the app will generate a word, sentence, or lottery number.
                    </p>

                    <p className="mt-4">
                      The Sensitivity slider will go from 0.25 to 3.00 in intervals of 0.25.
                    </p>

                    <p className="mt-4">
                      It is recommended to keep the sensitivity at a rate where you are generating significant events every so often. If you are getting significant events frequently the EMF Fluctuation could be getting offset by the natural EMF in your area and will not be a ethereal significant event but a false positive.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="generated" className="py-2">
                  <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline flex w-full justify-between">
                    <span className="flex items-center gap-3">
                      <MessageSquareIcon
                        size={16}
                        strokeWidth={2}
                        className="shrink-0 opacity-60"
                        aria-hidden="true"
                      />
                      <span>Generated Word/Sentence Box</span>
                    </span>
                    <i className="fas fa-chevron-down transition-transform duration-200 ease-out data-[state=open]:rotate-180" />
                  </AccordionTrigger>
                  <AccordionContent className="pb-2 ps-7 text-muted-foreground">
                    This is where the generated word or sentence will appear. The word list is full of nouns, adjectives, and verbs. The sentence word list is also full of nouns, adjectives, verbs, but also objects and other words that help create sentence structure. When a word is generated it will be spoken and saved to the History page.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="lottery" className="py-2">
                  <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline flex w-full justify-between">
                    <span className="flex items-center gap-3">
                      <TicketIcon
                        size={16}
                        strokeWidth={2}
                        className="shrink-0 opacity-60"
                        aria-hidden="true"
                      />
                      <span>Lottery Page</span>
                    </span>
                    <i className="fas fa-chevron-down transition-transform duration-200 ease-out data-[state=open]:rotate-180" />
                  </AccordionTrigger>
                  <AccordionContent className="pb-2 ps-7 text-muted-foreground">
                    <p>
                      This page is full of different lottery games where the EMF Fluctuation will generate lottery numbers based on the game selected. Same basic premise of the Words and Sentences pages, the EMF Fluctuation will find significant events and then generate numbers.
                    </p>

                    <p className="mt-4">
                      You can select from 5 different lottery games:
                    </p>

                    <ul className="mt-2 space-y-1">
                      <li>Powerball (in the color Red)</li>
                      <li>Mega Millions (in the color Yellow)</li>
                      <li>Lotto America (in the color Blue)</li>
                      <li>Cash4Life (in the color Green)</li>
                      <li>Lucky for Life (in the color Pink)</li>
                    </ul>

                    <p className="mt-4">
                      The numbers will automatically sort from lowest to highest number after being selected. The last number selected is the special ball and is indicated by a white outline. After the numbers are selected they will be announced and then stored in the History page.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="history" className="py-2">
                  <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline flex w-full justify-between">
                    <span className="flex items-center gap-3">
                      <HistoryIcon
                        size={16}
                        strokeWidth={2}
                        className="shrink-0 opacity-60"
                        aria-hidden="true"
                      />
                      <span>History Page</span>
                    </span>
                    <i className="fas fa-chevron-down transition-transform duration-200 ease-out data-[state=open]:rotate-180" />
                  </AccordionTrigger>
                  <AccordionContent className="pb-2 ps-7 text-muted-foreground">
                    <p>
                      This is where all generated words, sentences and lottery numbers are stored. The stored generated readings will show what was generated, the time and date, the EMF Fluctuation when recorded and also the type of generated content.
                    </p>

                    <p className="mt-4">
                      Everything is color coded:
                    </p>

                    <ul className="mt-2 space-y-1">
                      <li>Green is the generated words and also Cash4Life</li>
                      <li>Sky Blue is the generated sentences</li>
                      <li>Red is the generated powerball</li>
                      <li>Yellow is the generated Mega Millions</li>
                      <li>Dark Blue is the generated Lotto America</li>
                      <li>Pink is the generated Lucky for Life</li>
                    </ul>

                    <p className="mt-4">
                      There is a delete button at the top right of the History page that will prompt you to delete all recorded generations. It is recommended to take a screenshot of generated you want to save.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="bug" className="py-2">
                  <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline flex w-full justify-between">
                    <span className="flex items-center gap-3">
                      <BugIcon
                        size={16}
                        strokeWidth={2}
                        className="shrink-0 opacity-60 text-red-500"
                        aria-hidden="true"
                      />
                      <span className="text-red-500">Known Bugs</span>
                    </span>
                    <i className="fas fa-chevron-down transition-transform duration-200 ease-out data-[state=open]:rotate-180" />
                  </AccordionTrigger>
                  <AccordionContent className="pb-2 ps-7 text-muted-foreground">
                    <p>
                    Sometimes the EMF Fluctuation doesn&apos;t work with the sensor. This happens most times when opening the app from the background. A quick fix is to adjust the sensitivity by sliding it back and forth then putting it at the setting you want.
                    </p>
                    <p className="mt-4">
                    There is a bug that will stop the magnetometer from sensing and the EMF Fluctuation will be set to 0.00. To fix you need to shake your device to get the sensor to start working again. Weird fix, but it&apos;s what works.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center"
          >
            <a
              href="/privacy-policy"
              className="px-6 py-3 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-md border border-neutral-800 hover:border-[#00ff00] transition-colors"
            >
              Privacy Policy
            </a>
          </motion.div>
          <motion.a
            href="mailto:infinitelegacycompany@gmail.com"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold hover:text-[#00ff00] transition-colors break-all"
          >
            infinitelegacycompany@gmail.com
          </motion.a>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
