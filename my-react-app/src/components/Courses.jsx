import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaFileInvoice,
  FaStethoscope,
  FaBolt,
  FaComments,
  FaBullhorn
} from "react-icons/fa";

const courses = [
  {
    icon: <FaDatabase />,
    title: "Azure Data Engineering",
    slug: "azure-data-engineering",
    desc: "Learn data pipelines, ETL, and cloud data solutions using Azure."
  },
  {
    icon: <FaCloud />,
    title: "DevOps with Multi Cloud",
    slug: "devops",
    desc: "Master CI/CD, Docker, Kubernetes and multi-cloud deployment."
  },
  {
    icon: <FaShieldAlt />,
    title: "Cyber Security",
    slug: "cyber-security",
    desc: "Learn network security, ethical hacking, and system protection."
  },
  {
    icon: <FaFileInvoice />,
    title: "Medical Billing",
    slug: "medical-billing",
    desc: "Learn billing, claims processing, and revenue cycle management."
  },
  {
    icon: <FaStethoscope />,
    title: "Medical Coding",
    slug: "medical-coding",
    desc: "AAPC & AHIMA aligned coding with real-time practice."
  },
  {
    icon: <FaBolt />,
    title: "Electrical Engineering",
    slug: "electrical-engineering",
    desc: "Core electrical concepts, circuits, and practical applications."
  },
  {
    icon: <FaComments />,
    title: "Spoken English Classes",
    slug: "spoken-english",
    desc: "Improve communication, fluency, and interview skills."
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    slug: "digital-marketing",
    desc: "SEO, social media marketing, and online branding strategies."
  }
];

export default function Courses() {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-b from-[#f7f8fc] to-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#1d2355]">
            Courses We Provide
          </h2>

          <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
            Industry-focused training programs designed to build real careers
            in IT, Healthcare & Engineering domains.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {courses.map((course, index) => (
            <motion.div
              key={index}
              onClick={() => navigate(`/courses#${course.slug}`)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl border border-slate-100 transition-all duration-300 cursor-pointer"
            >

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xl shadow-md group-hover:rotate-6 transition">
                {course.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-xl font-bold text-[#1d2355] group-hover:text-indigo-600 transition">
                {course.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-slate-600 leading-6">
                {course.desc}
              </p>

              {/* Bottom line */}
              <div className="mt-5 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"></div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}