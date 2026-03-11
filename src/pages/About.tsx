import { SEO } from "../components/SEO";
import { motion } from "framer-motion";
import { Target, Shield, Zap, Trophy } from "lucide-react";

export function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about the story, mission, and philosophy of FORZA FITNESS. We are dedicated to building strength and transforming lives in Kochi."
      />

      {/* Page Header */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
            alt="Gym Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4"
          >
            Our <span className="text-yellow-600">Story</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Forging strength, discipline, and community since 2014.
          </p>
        </div>
      </section>

      {/* Gym Story */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">
                The Birth of <span className="text-yellow-600">Forza</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  FORZA FITNESS was born out of a simple necessity: Kochi needed
                  a fitness facility that prioritized actual results over
                  gimmicks. We started in a modest 2,000 sq ft space with a
                  handful of dedicated members who believed in hard work.
                </p>
                <p>
                  "Forza" translates to strength and force. It represents the
                  physical power we build in the gym and the mental resilience
                  we carry into our daily lives.
                </p>
                <p>
                  Today, we operate a massive, state-of-the-art facility, but
                  our core ethos remains unchanged: we are here to help you
                  forge your strength.
                </p>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop"
                alt="Gym weights"
                className="rounded-xl object-cover h-64 w-full"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
                alt="Gym interior"
                className="rounded-xl object-cover h-64 w-full mt-8"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/5">
              <Target className="h-12 w-12 text-yellow-600 mb-6" />
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-4">
                Our Mission
              </h3>
              <p className="text-gray-400 leading-relaxed">
                To provide an unparalleled training environment that empowers
                individuals to surpass their perceived limitations, achieve
                optimal health, and build lasting physical and mental strength.
              </p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-2xl border border-white/5">
              <Shield className="h-12 w-12 text-yellow-600 mb-6" />
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-4">
                Our Vision
              </h3>
              <p className="text-gray-400 leading-relaxed">
                To be the premier fitness destination in Kerala, recognized for
                our elite coaching standards, transformative results, and a
                community that inspires greatness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-16">
            Our <span className="text-yellow-600">Philosophy</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="h-20 w-20 mx-auto bg-yellow-600/10 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-10 w-10 text-yellow-600" />
              </div>
              <h4 className="text-xl font-bold uppercase tracking-wider mb-3">
                Intensity
              </h4>
              <p className="text-gray-400">
                We believe in pushing boundaries. Growth happens outside the
                comfort zone.
              </p>
            </div>
            <div>
              <div className="h-20 w-20 mx-auto bg-yellow-600/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-10 w-10 text-yellow-600" />
              </div>
              <h4 className="text-xl font-bold uppercase tracking-wider mb-3">
                Discipline
              </h4>
              <p className="text-gray-400">
                Motivation fades, discipline remains. We teach consistency over
                quick fixes.
              </p>
            </div>
            <div>
              <div className="h-20 w-20 mx-auto bg-yellow-600/10 rounded-full flex items-center justify-center mb-6">
                <Trophy className="h-10 w-10 text-yellow-600" />
              </div>
              <h4 className="text-xl font-bold uppercase tracking-wider mb-3">
                Results
              </h4>
              <p className="text-gray-400">
                We measure success by the tangible transformations of our
                members.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
