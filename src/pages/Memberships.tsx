import { SEO } from "../components/SEO";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export function Memberships() {
  const plans = [
    {
      name: "Basic Plan",
      price: "₹1,999",
      period: "/month",
      desc: "Perfect for beginners looking to start their fitness journey.",
      features: [
        "Access to gym floor",
        "Basic equipment usage",
        "Locker room access",
        "Free initial fitness assessment",
      ],
      recommended: false,
    },
    {
      name: "Premium Plan",
      price: "₹3,499",
      period: "/month",
      desc: "Our most popular plan. Get full access to all facilities and classes.",
      features: [
        "Everything in Basic",
        "Unlimited Group Classes",
        "1 Personal Training session/mo",
        "Sauna & Steam room access",
        "Customized diet plan",
      ],
      recommended: true,
    },
    {
      name: "Elite Annual",
      price: "₹29,999",
      period: "/year",
      desc: "For the truly dedicated. Best value for long-term commitment.",
      features: [
        "Everything in Premium",
        "Save ₹11,989 annually",
        "Priority class booking",
        "Free FORZA merchandise",
        "Guest passes (2/month)",
      ],
      recommended: false,
    },
  ];

  return (
    <>
      <SEO
        title="Memberships"
        description="Choose the right membership plan for your fitness goals at FORZA FITNESS. Affordable pricing with premium facilities."
      />

      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4"
          >
            Membership <span className="text-yellow-600">Plans</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Invest in yourself. Transparent pricing, no hidden fees.
          </p>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative bg-zinc-900 rounded-3xl p-8 border ${plan.recommended ? "border-yellow-600 shadow-[0_0_30px_rgba(234,179,8,0.15)]" : "border-white/5"} flex flex-col`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Recommended
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold uppercase tracking-wider mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm h-10">{plan.desc}</p>
                </div>

                <div className="mb-8">
                  <span className="text-5xl font-black text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 font-medium">
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-yellow-600 mr-3 shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full block text-center py-4 rounded-xl font-bold uppercase tracking-wider transition-colors ${
                    plan.recommended
                      ? "bg-yellow-600 text-white hover:bg-yellow-500"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Select Plan
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-10 text-center">
            Frequently Asked <span className="text-yellow-600">Questions</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Is there a joining fee?",
                a: "No, we believe in transparent pricing. The price you see is the price you pay.",
              },
              {
                q: "Can I freeze my membership?",
                a: "Yes, Premium and Elite members can freeze their membership for up to 2 months per year for medical or travel reasons.",
              },
              {
                q: "Do you offer a free trial?",
                a: "Yes, we offer a 1-day free trial pass for local residents to experience our facilities.",
              },
              {
                q: "Are personal trainers included?",
                a: "Basic and Premium plans include an initial assessment. Ongoing personal training is an add-on service, though Premium includes 1 session per month.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-zinc-900 p-6 rounded-2xl border border-white/5"
              >
                <h4 className="text-lg font-bold mb-2">{faq.q}</h4>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
