import {
  Dumbbell,
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 text-white">
              <Dumbbell className="h-8 w-8 text-yellow-600" />
              <span className="text-2xl font-bold tracking-tighter uppercase">
                Forza<span className="text-yellow-600">Fitness</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Forge your strength at Kochi's premium fitness destination. We
              provide world-class equipment, expert trainers, and a motivating
              environment to help you achieve your goals.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/trainers"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Expert Trainers
                </Link>
              </li>
              <li>
                <Link
                  to="/memberships"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Memberships
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6">
              Programs
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/programs"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Personal Training
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Strength Training
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-gray-400 hover:text-yellow-600 transition-colors"
                >
                  Group Bootcamp
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-gray-400 hover:text-yellow-600 transition-colors"
                >
                  Weight Loss
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  123 Fitness Street, Vyttila, Kochi, Kerala 682019
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-600 shrink-0" />
                <span className="text-gray-400">+91 79949 98878</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-600 shrink-0" />
                <span className="text-gray-400">info@forzafitness.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FORZA FITNESS. All rights
            reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
