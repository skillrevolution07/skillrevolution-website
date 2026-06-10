import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-[#6c2bd9] text-white">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Social Media Icons */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://www.facebook.com/profile.php?id=61587118714811"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/skill_revolution_07/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/company/skill-revolution/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Call Us Button */}
        <a
          href="tel:+9173372280838"
          className="bg-white text-black px-4 py-1 rounded font-medium hover:bg-gray-100 transition"
        >
          CALL US
        </a>
      </div>
    </div>
  );
}