import { SEO } from "../components/SEO";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with FORZA FITNESS. Find our location in Kochi, contact details, and working hours."
      />

      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4"
          >
            Contact <span className="text-yellow-600">Us</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to start? Have questions? We're here to help.
          </p>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">
                Get In <span className="text-yellow-600">Touch</span>
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-yellow-600/10 rounded-full flex items-center justify-center shrink-0 mr-6">
                    <MapPin className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wider mb-1">
                      Location
                    </h4>
                    <p className="text-gray-400">
                      123 Fitness Street, Vyttila
                      <br />
                      Kochi, Kerala 682019
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 bg-yellow-600/10 rounded-full flex items-center justify-center shrink-0 mr-6">
                    <Phone className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wider mb-1">
                      Phone
                    </h4>
                    <p className="text-gray-400">
                      +91 79949 98878
                      <br />
                      +91 98765 43211
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 bg-yellow-600/10 rounded-full flex items-center justify-center shrink-0 mr-6">
                    <Mail className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wider mb-1">
                      Email
                    </h4>
                    <p className="text-gray-400">info@forzafitness.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 bg-yellow-600/10 rounded-full flex items-center justify-center shrink-0 mr-6">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wider mb-1">
                      Working Hours
                    </h4>
                    <p className="text-gray-400">
                      Mon - Sat: 5:00 AM - 11:00 PM
                      <br />
                      Sunday: 6:00 AM - 12:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="h-64 rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.324225000578!2d76.3155!3d9.9745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTgnMjguMiJOIDc2wrAxOCw1NS44IkU!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="Gym Location"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-zinc-900 p-8 md:p-10 rounded-3xl border border-white/5"
            >
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-6">
                Send a Message
              </h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-600 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-600 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-600 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-600 transition-colors"
                    placeholder="+91 79949 98878"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-600 transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-4 rounded-xl transition-colors uppercase tracking-wider flex items-center justify-center"
                >
                  Send Message <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
