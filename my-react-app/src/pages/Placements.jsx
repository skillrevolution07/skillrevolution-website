import { useState } from "react";
import { FaBriefcase, FaUsers, FaBuilding, FaCheckCircle } from "react-icons/fa";

export default function Placements() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const companies = [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Capgemini",
    "Cognizant",
    "Tech Mahindra",
    "HCL",
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Placements & Career Support
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            We help students transform their skills into successful careers
            through industry-focused training and placement assistance.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6">

          {/* CARD 1 */}
          <div
            className="relative bg-white p-6 rounded-lg shadow text-center cursor-pointer transition duration-300 hover:shadow-2xl hover:-translate-y-2"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <FaUsers className="text-4xl text-purple-700 mx-auto mb-3" />
            <h2 className="text-3xl font-bold">1200+</h2>
            <p>Students Placed</p>

            {hoveredCard === 1 && (
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 bg-purple-700 text-white text-sm px-4 py-2 rounded-lg shadow-xl w-56 z-50">
                Thousands of students trained & successfully placed 🎓
              </div>
            )}
          </div>

          {/* CARD 2 */}
          <div
            className="relative bg-white p-6 rounded-lg shadow text-center cursor-pointer transition duration-300 hover:shadow-2xl hover:-translate-y-2"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <FaBuilding className="text-4xl text-purple-700 mx-auto mb-3" />
            <h2 className="text-3xl font-bold">80+</h2>
            <p>Hiring Companies</p>

            {hoveredCard === 2 && (
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 bg-purple-700 text-white text-sm px-4 py-2 rounded-lg shadow-xl w-56 z-50">
                Top MNCs actively hiring our students 🏢
              </div>
            )}
          </div>

          {/* CARD 3 */}
          <div
            className="relative bg-white p-6 rounded-lg shadow text-center cursor-pointer transition duration-300 hover:shadow-2xl hover:-translate-y-2"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <FaBriefcase className="text-4xl text-purple-700 mx-auto mb-3" />
            <h2 className="text-3xl font-bold">100%</h2>
            <p>Placement Assistance</p>

            {hoveredCard === 3 && (
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 bg-purple-700 text-white text-sm px-4 py-2 rounded-lg shadow-xl w-56 z-50">
                Strong support until you get placed 💼
              </div>
            )}
          </div>

          {/* CARD 4 */}
          <div
            className="relative bg-white p-6 rounded-lg shadow text-center cursor-pointer transition duration-300 hover:shadow-2xl hover:-translate-y-2"
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <FaCheckCircle className="text-4xl text-purple-700 mx-auto mb-3" />
            <h2 className="text-3xl font-bold">6 LPA</h2>
            <p>Average Package</p>

            {hoveredCard === 4 && (
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 bg-purple-700 text-white text-sm px-4 py-2 rounded-lg shadow-xl w-56 z-50">
                Competitive salary packages for freshers 💰
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Placement Process */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Placement Process
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Skill Training",
            "Resume Building",
            "Mock Interviews",
            "Job Placement",
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow text-center transition hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="text-3xl font-bold text-purple-700 mb-3">
                {index + 1}
              </div>
              <h3 className="font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
         Our Top Hiring Partners
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow text-center font-semibold transition hover:shadow-2xl hover:-translate-y-2"
            >
              {company}
            </div>
          ))}
        </div>
      </section>

      {/* Student Success */}
<section className="py-20 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-5xl font-bold text-center mb-14 text-gray-800">
      Student Success Stories
    </h2>

    <div className="relative overflow-hidden">
      <div className="flex gap-8 animate-testimonials w-max">

        {[
          {
            name: "Rahul Kumar",
            role: "Medical Coder - Ags Healthcare",
            msg: "I had a fantastic experience at Skill Revolution. The curriculum is incredibly practical and aligned perfectly with current industry standards.",
          },
          {
            name: "Priya Sharma",
            role: "Associate Data Engineer - Accenture",
            msg: "Excellent institute with a well-structured curriculum and highly professional trainers. The hands-on assignments made learning easier.",
          },
          {
            name: "Vinay",
            role: "Cyber Security Analyst - Infosys",
            msg: "The trainers are highly knowledgeable, patient, and bring genuine industry expertise to the classroom.",
          },
          {
            name: "Mani Kumar",
            role: "AWS DevOps Engineer - Infosys",
            msg: "The learning environment is incredibly supportive. Mentors provide excellent guidance throughout the journey.",
          },
          {
            name: "Shiva Kumar Yadav",
            role: "Azure DevOps Engineer - HCL",
            msg: "The batch sizes are well-managed, ensuring every student gets personal attention and support.",
          },
          {
            name: "Akshita",
            role: "RCM Specialist - Optum Healthcare",
            msg: "Great institute with an excellent learning environment. Trainers are highly knowledgeable and friendly.",
          },
          {
            name: "Deepika",
            role: "Azure Data Engineer - Infosys",
            msg: "The training quality is top-notch, and mentors genuinely care about student progress.",
          },
          {
            name: "Satyarth",
            role: "Electrical Engineer - Symed Labs",
            msg: "Perfect place for beginners. Complex topics are broken down into simple step-by-step modules.",
          },

          // Duplicate for Infinite Loop
          {
            name: "Rahul Kumar",
            role: "Medical Coder - Ags Healthcare",
            msg: "I had a fantastic experience at Skill Revolution. The curriculum is incredibly practical and aligned perfectly with current industry standards.",
          },
          {
            name: "Priya Sharma",
            role: "Associate Data Engineer - Accenture",
            msg: "Excellent institute with a well-structured curriculum and highly professional trainers. The hands-on assignments made learning easier.",
          },
          {
            name: "Vinay",
            role: "Cyber Security Analyst - Infosys",
            msg: "The trainers are highly knowledgeable, patient, and bring genuine industry expertise to the classroom.",
          },
          {
            name: "Mani Kumar",
            role: "AWS DevOps Engineer - Infosys",
            msg: "The learning environment is incredibly supportive. Mentors provide excellent guidance throughout the journey.",
          },
        ].map((student, i) => (
          <div
            key={i}
            className="w-[420px] bg-white rounded-3xl p-8 shadow-lg border border-purple-100 hover:shadow-2xl transition-all duration-500 flex-shrink-0"
          >
            <div className="text-6xl text-purple-200 font-serif leading-none">
              ❝
            </div>

            <p className="italic text-gray-600 text-lg leading-8 my-5">
              {student.msg}
            </p>

            <div className="flex items-center mt-8">
              <div className="w-14 h-14 rounded-full bg-purple-700 text-white flex items-center justify-center text-xl font-bold">
                {student.name.charAt(0)}
              </div>

              <div className="ml-4">
                <h3 className="font-bold text-lg text-gray-800">
                  {student.name}
                </h3>
                <p className="text-purple-600 text-sm">
                  {student.role}
                </p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  </div>
</section>

    </div>
  );
}