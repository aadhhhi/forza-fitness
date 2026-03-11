import { useState } from "react";
import { Calculator } from "lucide-react";

export function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (height && weight) {
      const h = parseFloat(height) / 100; // convert cm to m
      const w = parseFloat(weight);
      const bmiValue = w / (h * h);
      setBmi(parseFloat(bmiValue.toFixed(1)));

      if (bmiValue < 18.5) setCategory("Underweight");
      else if (bmiValue >= 18.5 && bmiValue < 24.9)
        setCategory("Normal weight");
      else if (bmiValue >= 25 && bmiValue < 29.9) setCategory("Overweight");
      else setCategory("Obese");
    }
  };

  return (
    <div className="bg-zinc-900 p-8 rounded-2xl border border-white/5 shadow-2xl">
      <div className="flex items-center space-x-3 mb-6">
        <Calculator className="h-6 w-6 text-yellow-600" />
        <h3 className="text-2xl font-bold uppercase tracking-wider">
          Calculate Your BMI
        </h3>
      </div>

      <form onSubmit={calculateBMI} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Height (cm)
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-600 transition-colors"
            placeholder="e.g. 175"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Weight (kg)
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-600 transition-colors"
            placeholder="e.g. 70"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-3 rounded-lg transition-colors uppercase tracking-wider mt-4"
        >
          Calculate
        </button>
      </form>

      {bmi !== null && (
        <div className="mt-6 p-4 bg-black rounded-lg border border-white/10 text-center">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">
            Your BMI is
          </p>
          <p className="text-4xl font-bold text-white mb-2">{bmi}</p>
          <p
            className={`text-sm font-medium uppercase tracking-wider ${
              category === "Normal weight"
                ? "text-green-500"
                : category === "Underweight"
                  ? "text-yellow-600"
                  : "text-yellow-500"
            }`}
          >
            {category}
          </p>
        </div>
      )}
    </div>
  );
}
