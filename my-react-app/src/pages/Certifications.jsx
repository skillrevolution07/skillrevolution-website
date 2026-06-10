import { useNavigate } from "react-router-dom";

export default function Certifications() {

 const navigate = useNavigate();
 const certifications = [
  {
    title: "Azure Data Engineering Certification",
    points: [
      "Azure Data Factory",
      "Azure Synapse Analytics",
      "Azure Databricks",
      "Data Lake Storage"
    ]
  },
  {
    title: "DevOps with Multi Cloud Certification",
    points: [
      "CI/CD Pipelines",
      "Docker & Kubernetes",
      "Jenkins Automation",
      "AWS & Azure Deployment"
    ]
  },
  {
    title: "Cyber Security Certification",
    points: [
      "CompTIA Security+",
      "ISC2 Certified in Cybersecurity (CC)",
      "EC-Council Certified SOC Analyst (CSA)",
      "GIAC Certified Incident Handler (GCIH)",
      "OffSec Offensive Security Certified Professional (OSCP)",
      "ISC2 CISSP",
      "ISC2 CCSP"
    ]
  },
  {
    title: "Medical Coding Certification",
    points: [
      "ICD-10 Coding",
      "CPT Coding",
      "HCPCS Standards",
      "Healthcare Documentation"
    ]
  },
  {
    title: "Electrical Engineering Certification",
    points: [
      "For B.Tech Electrical Students - 33 kV Supervisor Licence",
      "For Diploma Electrical Students - 11 kV Supervisor Licence",
      "For ITI Electrical Students - Wireman Licence"
      
    ]
  }
];
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Certifications
          </h1>

          <p className="text-lg max-w-3xl mx-auto">
            Earn industry-recognized certifications that validate your skills
            and enhance your career opportunities.
          </p>
        </div>
      </section>

     {/* Certification Overview */}
<section className="max-w-7xl mx-auto px-6 py-16">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold mb-4">
      Why Our Certifications Matter
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto">
      Our certifications are awarded after successful completion of
      training, projects, and assessments. They demonstrate practical
      skills and industry readiness to employers.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Card 1 */}
    <div className="bg-white shadow-lg rounded-lg p-6 text-center transition duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border hover:border-purple-700">
      <h3 className="text-2xl font-semibold text-purple-700 mb-3">
        Industry Relevant
      </h3>
      <p className="text-gray-600">
        Designed according to current industry standards and employer expectations.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white shadow-lg rounded-lg p-6 text-center transition duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border hover:border-purple-700">
      <h3 className="text-2xl font-semibold text-purple-700 mb-3">
        Project Based
      </h3>
      <p className="text-gray-600">
        Certifications reflect practical knowledge gained through real-world projects.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white shadow-lg rounded-lg p-6 text-center transition duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border hover:border-purple-700">
      <h3 className="text-2xl font-semibold text-purple-700 mb-3">
        Career Focused
      </h3>
      <p className="text-gray-600">
        Helps strengthen resumes and improve job opportunities.
      </p>
    </div>

  </div>
</section>

      {/* Certifications */}
<section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-12">
      Available Certifications Guidance
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {certifications.map((cert, index) => (
        <div
          key={index}
          className="bg-white border border-gray-100 shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300"
        >
          <h3 className="text-xl font-bold text-purple-700 mb-5">
            {cert.title}
          </h3>

          <ul className="space-y-3">
            {cert.points.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-700"
              >
                <span className="text-green-600 font-bold text-lg">
                  ✓
                </span>

                <span>{point}</span>
              </li>
            ))}
          </ul>

        </div>
      ))}

    </div>

  </div>
</section>

     {/* Benefits */}
<section className="py-16">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12">
      Benefits of Certification
    </h2>

    <div className="grid md:grid-cols-4 gap-6">

      {/* Card 1 */}
      <div className="bg-white shadow-lg rounded-lg p-6 text-center transition duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border hover:border-purple-700">
        <h3 className="font-bold text-xl mb-3">
          Resume Value
        </h3>
        <p className="text-gray-600">
          Add credibility and professional recognition.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-lg rounded-lg p-6 text-center transition duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border hover:border-purple-700">
        <h3 className="font-bold text-xl mb-3">
          Skill Validation
        </h3>
        <p className="text-gray-600">
          Demonstrate your practical expertise confidently.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-lg rounded-lg p-6 text-center transition duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border hover:border-purple-700">
        <h3 className="font-bold text-xl mb-3">
          Better Opportunities
        </h3>
        <p className="text-gray-600">
          Improve your chances of securing interviews.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white shadow-lg rounded-lg p-6 text-center transition duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border hover:border-purple-700">
        <h3 className="font-bold text-xl mb-3">
          Career Growth
        </h3>
        <p className="text-gray-600">
          Stand out in competitive job markets.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* CTA */}
      <section className="bg-purple-700 text-white py-16">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Earn Your Certification Today
          </h2>

          <p className="text-lg mb-8">
            Complete your training, showcase your skills, and receive a
            certificate that supports your professional journey.
          </p>

         <button
  onClick={() => navigate("/contact")}
  className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold"
>
  Enroll Now
</button>
        </div>
      </section>
    </div>
  );
}