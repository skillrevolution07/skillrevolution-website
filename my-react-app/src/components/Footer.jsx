import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] text-white">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo Section */}
          <div>
             <Link to="/" onClick={scrollToTop}>
    <img
      src="https://res.cloudinary.com/deyfsl3w8/image/upload/v1781027902/logo_skill_oudfjs.jpg"
      alt="Skill Revolution"
      className="
        w-60
        bg-white
        p-3
        rounded-2xl
        shadow-xl
        hover:scale-105
        transition-all
        duration-300
        cursor-pointer
      "
    />
  </Link>

            <p className="mt-6 text-slate-300 leading-8">
              India's trusted training academy offering Medical Billing & Coding, Azure Data Engineering, DevOps with Multi-Cloud, and Cybersecurity programs.
 
              
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">

              <a
                href="https://www.facebook.com/profile.php?id=61587118714811"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-white/10
                  p-3
                  rounded-xl
                  hover:bg-[#1877F2]
                  hover:scale-110
                  transition-all
                  duration-300
                "
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/skill_revolution_07/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-white/10
                  p-3
                  rounded-xl
                  hover:bg-pink-600
                  hover:scale-110
                  transition-all
                  duration-300
                "
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/company/skill-revolution/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-white/10
                  p-3
                  rounded-xl
                  hover:bg-[#0A66C2]
                  hover:scale-110
                  transition-all
                  duration-300
                "
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-white/10
                  p-3
                  rounded-xl
                  hover:bg-[#FF0000]
                  hover:scale-110
                  transition-all
                  duration-300
                "
              >
                <FaYoutube />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Courses", "/courses"],
                ["Certifications", "/certifications"],
                ["Placements", "/placements"],
                ["Contact", "/contact"],
              ].map(([name, path]) => (
                <li key={name}>
                  <Link
                    to={path}
                    onClick={scrollToTop}
                    className="text-slate-300 hover:text-purple-400 transition duration-300"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         {/* Courses */}
<div>
  <h3 className="text-xl font-bold mb-6">
    Courses
  </h3>

  <ul className="space-y-4">

    <li>
      <Link
        to="/courses"
        onClick={scrollToTop}
        className="text-slate-300 hover:text-purple-400 transition"
      >
        Azure Data Engineer
      </Link>
    </li>

    <li>
      <Link
        to="/courses"
        onClick={scrollToTop}
        className="text-slate-300 hover:text-purple-400 transition"
      >
        DevOps with Multiple Cloud
      </Link>
    </li>

    <li>
      <Link
        to="/courses"
        onClick={scrollToTop}
        className="text-slate-300 hover:text-purple-400 transition"
      >
        Cyber Security
      </Link>
    </li>

    <li>
      <Link
        to="/courses"
        onClick={scrollToTop}
        className="text-slate-300 hover:text-purple-400 transition"
      >
        Medical Billing
      </Link>
    </li>

    <li>
      <Link
        to="/courses"
        onClick={scrollToTop}
        className="text-slate-300 hover:text-purple-400 transition"
      >
        Medical Coding
      </Link>
    </li>

    <li>
      <Link
        to="/courses"
        onClick={scrollToTop}
        className="text-slate-300 hover:text-purple-400 transition"
      >
        Electrical Engineering
      </Link>
    </li>

  </ul>
</div>
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Get In Touch
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <FaMapMarkerAlt />
                </div>

                <p className="text-slate-300 leading-7">
                  1st Floor, Ramakrshina Nivas, Flat #103 (beside Vyjayanthi Hospitals, SR Nagar), 
                  Hyderabad, Telangana, India
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <FaPhoneAlt />
                </div>

                <a
                  href="tel:+917337280838"
                  className="text-slate-300 hover:text-purple-400 transition"
                >
                  +91 7337280838
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <FaEnvelope />
                </div>

                <a
                  href="mailto:info@sredu.tech"
                  className="text-slate-300 hover:text-purple-400 transition"
                >
                  info@sredu.tech
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-slate-400 text-center md:text-left">
              © 2026 Skill Revolution. All Rights Reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-white transition"
              >
                Terms & Conditions
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}