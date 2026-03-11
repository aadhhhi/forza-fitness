import { SEO } from "../components/SEO";
import { Hero3D } from "../components/Hero3D";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { BMICalculator } from "../components/BMICalculator";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Forge your strength at FORZA FITNESS, the best gym in Kochi. Join us for premium equipment, expert trainers, and transformative results."
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Hero3D />

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6"
          >
            Forge Your <span className="text-yellow-600">Strength</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium"
          >
            Experience Kochi's most elite training facility. Transform your
            body, mind, and life with our expert guidance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/memberships"
              className="bg-yellow-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-yellow-500 transition-all hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] flex items-center justify-center group"
            >
              Join Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/programs"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white/20 transition-all flex items-center justify-center"
            >
              View Programs
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gym Introduction */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
                Welcome to <span className="text-yellow-600">Forza Fitness</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                We are more than just a gym; we are a community dedicated to
                helping you achieve your ultimate fitness goals. Located in the
                heart of Kochi, FORZA FITNESS offers state-of-the-art equipment,
                world-class trainers, and an atmosphere that breeds success.
              </p>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Whether you're a beginner taking your first steps or an elite
                athlete pushing your limits, we have the tools, knowledge, and
                passion to guide your journey.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-yellow-600 font-bold uppercase tracking-wider hover:text-yellow-500 transition-colors group"
              >
                Discover Our Story
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
                  alt="Forza Fitness Gym Interior"
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-yellow-600 p-8 rounded-2xl shadow-2xl hidden md:block">
                <p className="text-4xl font-black text-white mb-1">10+</p>
                <p className="text-sm font-bold uppercase tracking-wider text-yellow-100">
                  Years of
                  <br />
                  Excellence
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl md:text-6xl font-black text-yellow-600 mb-2">
                <AnimatedCounter end={2500} suffix="+" />
              </p>
              <p className="text-sm font-bold uppercase tracking-wider text-gray-400">
                Members Trained
              </p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-black text-yellow-600 mb-2">
                <AnimatedCounter end={15} suffix="+" />
              </p>
              <p className="text-sm font-bold uppercase tracking-wider text-gray-400">
                Expert Trainers
              </p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-black text-yellow-600 mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </p>
              <p className="text-sm font-bold uppercase tracking-wider text-gray-400">
                Transformations
              </p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-black text-yellow-600 mb-2">
                <AnimatedCounter end={98} suffix="%" />
              </p>
              <p className="text-sm font-bold uppercase tracking-wider text-gray-400">
                Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Our <span className="text-yellow-600">Programs</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Tailored fitness solutions designed to push your limits and
              deliver guaranteed results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Training",
                desc: "One-on-one coaching tailored to your specific goals and fitness level.",
                img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop",
              },
              {
                title: "Strength Training",
                desc: "Build muscle, increase power, and forge an unbreakable physique.",
                img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop",
              },
              {
                title: "Group Bootcamp",
                desc: "High-energy group sessions that combine cardio and strength.",
                img: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1470&auto=format&fit=crop",
              },
            ].map((program, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-zinc-900"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={program.img}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <h3 className="text-2xl font-bold uppercase tracking-wider mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {program.desc}
                  </p>
                  <Link
                    to="/programs"
                    className="inline-flex items-center text-yellow-500 font-bold uppercase tracking-wider hover:text-yellow-300 transition-colors"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/programs"
              className="inline-block border-2 border-yellow-600 text-yellow-600 px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-yellow-600 hover:text-white transition-colors"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* BMI & Contact Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-900/50 skew-x-12 translate-x-32 hidden lg:block" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
                Know Your <span className="text-yellow-600">Numbers</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Understanding your Body Mass Index (BMI) is the first step
                towards a healthier you. Use our quick calculator to find out
                where you stand and let our experts guide you to your ideal
                fitness level.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 shrink-0" />
                  <span>Personalized workout plans based on your BMI</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 shrink-0" />
                  <span>Customized nutrition guidance</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 shrink-0" />
                  <span>Track your progress effectively</span>
                </li>
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <BMICalculator />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Member <span className="text-yellow-600">Stories</span>
            </h2>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {[
              {
                name: "Rahul M.",
                review:
                  "Dropped 15kg in 4 months. The trainers here don't just guide you, they push you beyond what you thought was possible.",
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
              },
              {
                name: "Sneha K.",
                review:
                  "Best gym in Kochi! The equipment is top-notch and the group bootcamps are incredibly energetic and fun.",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
              },
              {
                name: "Arjun V.",
                review:
                  "Transformed my physique completely. The personal training program is worth every penny. Highly recommended.",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
              },
              {
                name: "Priya D.",
                review:
                  "A very welcoming environment for beginners. I never felt intimidated, and the progress I've made is amazing.",
                img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
              },
            ].map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-zinc-900 p-8 rounded-2xl border border-white/5 h-full">
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold uppercase tracking-wider">
                        {testimonial.name}
                      </h4>
                      <div className="flex text-yellow-500 text-sm">{"★★★★★"}</div>
                    </div>
                  </div>
                  <p className="text-gray-400 italic">"{testimonial.review}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-600" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-white">
            Stop Wishing.
            <br />
            Start Working.
          </h2>
          <p className="text-xl text-yellow-100 mb-10 font-medium max-w-2xl mx-auto">
            Your transformation begins the moment you decide to try. Join FORZA
            FITNESS today and forge the best version of yourself.
          </p>
          <Link
            to="/memberships"
            className="inline-block bg-black text-white px-10 py-5 rounded-full text-lg font-black uppercase tracking-widest hover:bg-zinc-900 transition-all hover:scale-105 shadow-2xl"
          >
            Join Now
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Get In <span className="text-yellow-600">Touch</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Ready to start? Have questions? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
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
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-black p-8 md:p-10 rounded-3xl border border-white/5"
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
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-600 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-600 transition-colors"
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
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-600 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-600 transition-colors"
                    placeholder="+91 79949 98878"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-600 transition-colors resize-none"
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
