import {
  FaAward,
  FaBalanceScale,
  FaHandsHelping,
  FaChartLine,
  FaCheckCircle,
  FaUsers
} from "react-icons/fa";

export default function About() {
  const coreValues = [
    {
      icon: <FaAward />,
      title: "Excellence",
      description: "We strive for excellence in training, mentoring, and student success."
    },
    {
      icon: <FaBalanceScale />,
      title: "Integrity",
      description: "We deliver ethical, transparent, and responsible training with trust and honesty."
    },
    {
      icon: <FaHandsHelping />,
      title: "Commitment",
      description: "Dedicated support and continuous guidance for every learner’s success."
    },
    {
      icon: <FaChartLine />,
      title: "Growth Mindset",
      description: "Continuous improvement and innovation to keep learners future-ready."
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality",
      description: "Industry-standard training with practical, job-ready skills."
    },
    {
      icon: <FaUsers />,
      title: "Collaboration",
      description: "Strong partnerships with learners and companies for shared success."
    }
  ];

  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">About Skill Revolution</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Empowering students and professionals with industry-ready skills,
            practical experience, and career opportunities.
          </p>
        </div>
      </section>

      {/* About Company */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Training Institute"
              className="rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8 text-[#1d2355]">
              Who We Are
            </h2>

            <div className="space-y-5 text-gray-600 leading-7">

              <p>
                At Skill Revolution, we are committed to shaping successful careers
                through high-quality, industry-focused training and professional development.
                With over 10 years of experience, we empower learners with real-world skills.
              </p>

              <p>
                Our programs bridge academic learning and industry expectations with practical training.
              </p>

              <p>
                We offer courses in Medical Billing & Coding, Azure Data Engineering,
                DevOps, Cyber Security, and Electrical Engineering.
              </p>

              <p>
                We mentor, guide, and support learners throughout their career journey
                to ensure long-term success.
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* Mission Vision Goal */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">

            <div className="shadow-lg rounded-xl p-8 bg-white hover:shadow-2xl transition">
              <h2 className="text-2xl font-bold text-purple-700 mb-3">Our Mission</h2>
              <p className="text-gray-600">
                To deliver industry-focused training that builds job-ready skills through practical learning and expert mentorship.
              </p>
            </div>

            <div className="shadow-lg rounded-xl p-8 bg-white hover:shadow-2xl transition">
              <h2 className="text-2xl font-bold text-purple-700 mb-3">Our Vision</h2>
              <p className="text-gray-600">
                To become a trusted global training institute empowering learners to achieve career excellence through innovation.
              </p>
            </div>

            <div className="shadow-lg rounded-xl p-8 bg-white hover:shadow-2xl transition">
              <h2 className="text-2xl font-bold text-purple-700 mb-3">Our Goal</h2>
              <p className="text-gray-600">
                To create a skilled workforce by delivering high-quality training and career opportunities for long-term success.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition group"
              >
                <div className="text-3xl text-purple-600 group-hover:scale-110 transition">
                  {value.icon}
                </div>

                <h3 className="text-2xl font-semibold text-purple-700 mt-4 mb-3">
                  {value.title}
                </h3>

                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Skill Revolution?
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            <div className="shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <h3 className="font-bold text-xl mb-2">Expert Trainers</h3>
              <p className="text-gray-600">
                Learn from industry professionals with real-world experience.
              </p>
            </div>

            <div className="shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <h3 className="font-bold text-xl mb-2">Real-Time Projects</h3>
              <p className="text-gray-600">
                Gain practical exposure through hands-on project work.
              </p>
            </div>

            <div className="shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <h3 className="font-bold text-xl mb-2">Placement Assistance</h3>
              <p className="text-gray-600">
                Dedicated support for interviews, resumes, and job placement.
              </p>
            </div>

            <div className="shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <h3 className="font-bold text-xl mb-2">Industry Curriculum</h3>
              <p className="text-gray-600">
                Courses designed according to current market demands.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-4xl font-bold">2000+</h2>
              <p>Students Trained</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">100+</h2>
              <p>Hiring Partners</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">50+</h2>
              <p>Professional Courses</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">95%</h2>
              <p>Student Satisfaction</p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}