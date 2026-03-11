import { SEO } from "../components/SEO";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export function Programs() {
  const programs = [
    {
      id: "personal-training",
      title: "Personal Training",
      desc: "Experience 1-on-1 coaching tailored specifically to your body type, fitness level, and goals. Our elite trainers provide undivided attention, custom programming, and nutritional guidance.",
      benefits: [
        "Customized workout plans",
        "Nutritional guidance & tracking",
        "Form correction & injury prevention",
        "Accountability & motivation",
      ],
      img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: "strength-training",
      title: "Strength & Muscle Building",
      desc: "A program designed to increase raw power, build lean muscle mass, and improve overall body composition using proven progressive overload techniques.",
      benefits: [
        "Hypertrophy focused routines",
        "Powerlifting fundamentals",
        "Advanced lifting techniques",
        "Muscle recovery protocols",
      ],
      img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: "weight-loss",
      title: "Weight Loss Program",
      desc: "A comprehensive approach to fat loss combining high-intensity interval training (HIIT), steady-state cardio, and strength training to maximize calorie burn.",
      benefits: [
        "Sustainable fat loss",
        "Metabolic conditioning",
        "Cardiovascular endurance",
        "Dietary planning",
      ],
      img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: "group-classes",
      title: "Group Bootcamp",
      desc: "High-energy, community-driven workouts that push you to your limits. Perfect for those who thrive in a competitive, team-oriented environment.",
      benefits: [
        "Community support",
        "High calorie burn",
        "Dynamic daily workouts",
        "Fun & engaging atmosphere",
      ],
      img: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: "functional",
      title: "Functional Fitness",
      desc: "Train your body for real-life activities. This program focuses on mobility, agility, core strength, and multi-joint movements.",
      benefits: [
        "Improved mobility & flexibility",
        "Core stabilization",
        "Better posture",
        "Enhanced athletic performance",
      ],
      img: "https://images.unsplash.com/photo-1599058945522-28d584b6f4ff?q=80&w=1469&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <SEO
        title="Training Programs"
        description="Explore our comprehensive training programs including Personal Training, Strength Building, Weight Loss, and Group Bootcamps at FORZA FITNESS."
      />

      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4"
          >
            Training <span className="text-yellow-600">Programs</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose your path. We provide the expertise, equipment, and
            environment to get you there.
          </p>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {programs.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group">
                  <img
                    src={program.img}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">
                  {program.title}
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {program.desc}
                </p>

                <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                  Key Benefits
                </h4>
                <ul className="space-y-3 mb-8">
                  {program.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-yellow-600 mr-3 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-flex items-center bg-yellow-600 text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-yellow-500 transition-colors"
                >
                  Start Program <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
