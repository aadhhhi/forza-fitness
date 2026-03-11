import { SEO } from "../components/SEO";
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

export function Transformations() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const transformations = [
    {
      name: "Arjun V.",
      duration: "6 Months",
      desc: "Lost 18kg and built significant muscle mass through our Strength & Conditioning program.",
      img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop", // Placeholder for before/after
    },
    {
      name: "Sneha K.",
      duration: "4 Months",
      desc: "Dropped 12kg and improved overall cardiovascular health via Group Bootcamps.",
      img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Rahul M.",
      duration: "8 Months",
      desc: "Complete body recomposition. Gained 8kg of lean muscle.",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Priya D.",
      duration: "3 Months",
      desc: "Post-pregnancy weight loss of 10kg with specialized personal training.",
      img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Kiran S.",
      duration: "1 Year",
      desc: "From skinny to shredded. A true testament to consistency and proper nutrition.",
      img: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Meera T.",
      duration: "5 Months",
      desc: "Overcame injuries and built functional strength for daily life.",
      img: "https://images.unsplash.com/photo-1599058945522-28d584b6f4ff?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <SEO
        title="Transformations"
        description="See real results from real members at FORZA FITNESS. View our before and after gallery and read inspiring transformation stories."
      />

      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4"
          >
            Real <span className="text-yellow-600">Results</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hard work pays off. Witness the incredible journeys of our dedicated
            members.
          </p>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformations.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 cursor-pointer group"
                onClick={() => setSelectedImg(item.img)}
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={`${item.name} Transformation`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-yellow-600 text-white px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm">
                      View Full
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold uppercase tracking-wider">
                      {item.name}
                    </h3>
                    <span className="text-yellow-500 text-sm font-bold uppercase tracking-wider bg-yellow-500/10 px-3 py-1 rounded-full">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-yellow-500 transition-colors"
            onClick={() => setSelectedImg(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImg}
            alt="Transformation Full View"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </>
  );
}
