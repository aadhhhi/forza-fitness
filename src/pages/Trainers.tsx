import { SEO } from "../components/SEO";
import { motion } from "framer-motion";
import { Instagram, Twitter } from "lucide-react";

export function Trainers() {
  const trainers = [
    {
      name: "Vikram Singh",
      role: "Head Coach",
      specialization: "Strength & Conditioning",
      certifications: "ACE, CSCS",
      exp: "12 Years",
      img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Anjali Menon",
      role: "Senior Trainer",
      specialization: "Functional Fitness & HIIT",
      certifications: "NASM CPT",
      exp: "8 Years",
      img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "David John",
      role: "Personal Trainer",
      specialization: "Hypertrophy & Bodybuilding",
      certifications: "ISSA",
      exp: "6 Years",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop", // Using gym interior as fallback if no good trainer pic, but let's use a person
    },
    {
      name: "Sarah Thomas",
      role: "Nutritionist & Trainer",
      specialization: "Weight Loss & Diet Planning",
      certifications: "Precision Nutrition L2",
      exp: "7 Years",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Rahul Dev",
      role: "Strength Coach",
      specialization: "Powerlifting",
      certifications: "USAPL Coach",
      exp: "5 Years",
      img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Priya Sharma",
      role: "Yoga & Mobility Expert",
      specialization: "Flexibility & Recovery",
      certifications: "RYT 500",
      exp: "10 Years",
      img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
    },
  ];

  // Replacing some images with better portraits
  trainers[2].img =
    "https://images.unsplash.com/photo-1583465584740-552d8c8d6c79?q=80&w=800&auto=format&fit=crop";
  trainers[4].img =
    "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&w=800&auto=format&fit=crop";

  return (
    <>
      <SEO
        title="Expert Trainers"
        description="Meet the elite coaching team at FORZA FITNESS. Our certified trainers are here to guide, motivate, and push you to your limits."
      />

      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4"
          >
            Expert <span className="text-yellow-600">Trainers</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Learn from the best. Our certified professionals are dedicated to
            your success.
          </p>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 group"
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={trainer.img}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-bold uppercase tracking-wider text-white">
                        {trainer.name}
                      </h3>
                      <p className="text-yellow-500 font-medium uppercase tracking-wider text-sm">
                        {trainer.role}
                      </p>
                    </div>
                    <div className="flex space-x-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <a
                        href="#"
                        className="h-8 w-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors"
                      >
                        <Instagram className="h-4 w-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-gray-500 text-sm uppercase tracking-wider">
                      Specialization
                    </span>
                    <span className="text-white text-sm font-medium text-right">
                      {trainer.specialization}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-gray-500 text-sm uppercase tracking-wider">
                      Certifications
                    </span>
                    <span className="text-white text-sm font-medium text-right">
                      {trainer.certifications}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm uppercase tracking-wider">
                      Experience
                    </span>
                    <span className="text-white text-sm font-medium text-right">
                      {trainer.exp}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
