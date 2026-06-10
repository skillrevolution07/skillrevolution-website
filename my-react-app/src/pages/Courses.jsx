import { useNavigate } from "react-router-dom";

export default function Courses() {
  const navigate = useNavigate(); 
  return (
    <div className="bg-gray-50">

      {/* Hero */}
      <section className="bg-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Professional Training Programs
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            Industry-focused training programs designed to help students and
            professionals build successful careers with practical skills,
            certification guidance, and placement support.
          </p>
        </div>
      </section>

{/* Azure Data Engineering */}
<section className="py-16 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-purple-700 mb-6">
      Azure Data Engineer
    </h2>

    <p className="text-gray-700 leading-8 mb-12">
      Azure Data Engineering is one of the fastest-growing IT career fields.
      Learn to design, build, and manage scalable data solutions using Microsoft Azure.
    </p>

    {/* 1 - Course Overview (UPDATED) */}
    <div className="flex flex-col md:flex-row items-center gap-10 mb-12">

      <div className="flex-1">

        <h3 className="text-2xl font-semibold mb-2">
          Course Overview
        </h3>

        {/* ONE LINE COURSE DETAILS */}
        <p className="text-gray-700 mb-4">
          <span className="font-semibold text-purple-700">
            Course Overview:
          </span>{" "}
          Duration: 06-08 Weeks | Mode: Online | Level: Beginner to Advanced
        </p>

        {/* NEW INDUSTRY HEADING */}
        <h4 className="text-xl font-semibold text-gray-800 mb-3">
          Industries Using Azure Data Engineering
        </h4>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Banking & Finance</li>
          <li>IT Companies</li>
          <li>Logistic</li>
          <li>Healthcare</li>
          <li>Telecom</li>
          <li>E-commerce</li>
          <li>Retail</li>
        </ul>

      </div>

      <img
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
        alt="Azure Overview"
        className="flex-1 h-[280px] object-cover rounded-2xl shadow-lg"
      />

    </div>

    {/* 2 - Curriculum Modules */}
    <div className="flex flex-col md:flex-row items-center  justify-end gap-14 mb-12">

      <img
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
        alt="Azure Curriculum"
        className="flex-1 h-[280px] object-cover rounded-2xl shadow-lg"
      />

      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-4">
          Curriculum Modules
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Introduction to Azure Data Engineering</li>
          <li>Azure Data Lake Storage</li>
          <li>Azure Data Factory</li>
          <li>Azure Synapse Analytics</li>
          <li>Azure Databricks</li>
          <li>Data Security & Governance</li>
          <li>Real-Time Analytics</li>
          <li>Performance Optimization</li>
          <li>DP-203 Certification Preparation</li>
        </ul>
      </div>

    </div>

    {/* Highlight Cards */}
    <div className="grid md:grid-cols-2 gap-8 mt-12">

      <div className="bg-gradient-to-br from-purple-700 to-indigo-800 text-white p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
        <h3 className="text-2xl font-bold mb-4">
          Azure Live Industry Projects
        </h3>

        <p className="mb-5 text-purple-100 leading-7">
          Gain practical, hands-on experience through real-time Azure industry projects designed to simulate actual business environments.
        </p>

        <ul className="space-y-3">
          <li>✓ Azure Data Factory Projects</li>
          <li>✓ Azure Synapse Analytics Solutions</li>
          <li>✓ Azure Databricks Implementations</li>
          <li>✓ Azure Data Lake Management</li>
          <li>✓ ETL & Data Integration Pipelines</li>
          <li>✓ Cloud Deployment & Data Engineering Projects</li>
        </ul>

        <p className="mt-5 text-purple-100">
          Build an industry-ready portfolio while strengthening problem-solving skills and gaining confidence.
        </p>
      </div>

      <div className="bg-white border-2 border-purple-700 p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
        <h3 className="text-2xl font-bold text-purple-700 mb-4">
          Placement Assistance
        </h3>

        <p className="text-gray-600 mb-5">
          Skill Revolution provides dedicated career support to help students launch successful data engineering careers.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li>✓ Professional Resume Building</li>
          <li>✓ LinkedIn Profile Optimization</li>
          <li>✓ Mock Technical Interviews</li>
          <li>✓ Career Guidance Sessions</li>
          <li>✓ Job Referrals</li>
          <li>✓ Interview Preparation with Azure Experts</li>
        </ul>
      </div>

    </div>

  </div>
</section>

  {/* DevOps */}
<section className="bg-white py-16">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-purple-700 mb-6">
      DevOps with Multi-Cloud (Azure, AWS and GCP)
    </h2>

    <p className="text-gray-700 leading-8 mb-12">
      DevOps is all about automating software development & deployment, reducing manual work,
      faster application delivery, and continuous monitoring & updates. Multi-Cloud means using more
      than one cloud platform (AWS + Azure + GCP), avoiding dependency on a single provider, and achieving
      better flexibility & reliability.
    </p>

    {/* 1 - Course Overview */}
    <div className="flex flex-col md:flex-row items-center gap-10 mb-12">

      <div className="flex-1">

        <h3 className="text-2xl font-semibold mb-2">
          Course Overview
        </h3>

        {/* ONE LINE HIGHLIGHT */}
        <p className="text-gray-700 mb-4">
          <span className="font-semibold text-purple-700">
            Course Overview:
          </span>{" "}
          Duration: 06-08 Weeks | Mode: Online | Level: Beginner to Advanced
        </p>

        {/* INDUSTRIES HEADING */}
        <h4 className="text-xl font-semibold text-gray-800 mb-3">
          Industries Using DevOps
        </h4>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Banking & Finance</li>
          <li>IT Companies</li>
          <li>Healthcare</li>
          <li>Telecom</li>
          <li>E-commerce</li>
          <li>Retail</li>
          <li>Manufacturing</li>
        </ul>

      </div>

      <img
        src="https://res.cloudinary.com/deyfsl3w8/image/upload/v1780923497/devop_2_rwia8z.jpg"
        alt="DevOps Overview"
        className="flex-1 h-[280px] object-cover rounded-2xl shadow-lg"
      />
    </div>

    {/* 2 - Modules Covered */}
    <div className="flex flex-col md:flex-row items-center justify-end gap-14 mb-12">

      <img
        src="https://res.cloudinary.com/deyfsl3w8/image/upload/v1780923499/devop_satcxa.jpg"
        alt="DevOps Modules"
        className="flex-1 h-[280px] object-cover rounded-2xl shadow-lg"
      />

      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-4">
          Modules Covered
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Modern DevOps Fundamentals</li>
          <li>Multi-Cloud Strategy</li>
          <li>Cloud Operations Management</li>
          <li>Docker</li>
          <li>Kubernetes</li>
          <li>CI/CD Automation</li>
          <li>Terraform & Ansible</li>
          <li>Python for Cloud Automation</li>
          <li>Monitoring with Prometheus & Grafana</li>
          <li>Cloud Migration & Optimization</li>
        </ul>
      </div>

    </div>

    {/* Highlight Cards */}
    <div className="grid md:grid-cols-2 gap-8 mt-12">

      <div className="bg-gradient-to-br from-purple-700 to-indigo-800 text-white p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
        <h3 className="text-2xl font-bold mb-4">
          Live Industry Projects
        </h3>

        <ul className="space-y-3">
          <li>✓ Multi-Cloud Infrastructure Deployment</li>
          <li>✓ Kubernetes Cluster Management</li>
          <li>✓ CI/CD Pipeline Implementation</li>
          <li>✓ Terraform & Ansible Automation</li>
          <li>✓ Cloud Monitoring Solutions</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-purple-700 p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
        <h3 className="text-2xl font-bold text-purple-700 mb-4">
          Placement Assistance
        </h3>

        <p className="text-gray-600 mb-5">
          Skill Revolution provides dedicated career support to help students secure opportunities in DevOps & Cloud industry.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li>✓ Resume Preparation</li>
          <li>✓ LinkedIn Optimization</li>
          <li>✓ Mock Technical Interviews</li>
          <li>✓ Career Guidance Sessions</li>
          <li>✓ Job Referrals & Placement Assistance</li>
        </ul>
      </div>

    </div>

  </div>
</section>

   {/* Cyber Security */}
<section className="py-16 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-purple-700 mb-6">
      Cyber Security
    </h2>

    <p className="text-gray-700 leading-8 mb-12">
      Cybersecurity is the practice of protecting systems, networks, programs, devices, and
      data from digital attacks. These cyberattacks are usually aimed at accessing, changing,
      or destroying sensitive information, extorting money, or interrupting business operations.
    </p>

    {/* 1 - Course Overview */}
    <div className="flex flex-col md:flex-row items-center gap-10 mb-12">

      <div className="flex-1">

        <h3 className="text-2xl font-semibold mb-2">
          Course Overview
        </h3>

        {/* ONE LINE HIGHLIGHT */}
        <p className="text-gray-700 mb-4">
          <span className="font-semibold text-purple-700">
            Course Overview:
          </span>{" "}
          Duration: 06-08 Weeks | Mode: Online | Level: Beginner to Advanced
        </p>

        {/* INDUSTRIES */}
        <h4 className="text-xl font-semibold text-gray-800 mb-3">
          Industries Using Cyber Security
        </h4>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Banking & Finance</li>
          <li>IT Companies</li>
          <li>Healthcare</li>
          <li>Telecom</li>
          <li>Government Sector</li>
          <li>E-commerce</li>
          <li>Retail</li>
        </ul>

      </div>

      <img
        src="https://res.cloudinary.com/deyfsl3w8/image/upload/v1780923339/cyber_iqly9f.jpg"
        alt="Cyber Security Overview"
        className="flex-1 h-[280px] object-cover rounded-2xl shadow-lg"
      />
    </div>

    {/* 2 - Topics Covered */}
    <div className="flex flex-col md:flex-row items-center justify-end gap-14 mb-12">

      <img
        src="https://res.cloudinary.com/deyfsl3w8/image/upload/v1780923498/cyber_2_dcjz7n.jpg"
        alt="Cyber Security Topics"
        className="flex-1 h-[280px] object-cover rounded-2xl shadow-lg"
      />

      <div className="flex-1">

        <h3 className="text-2xl font-semibold mb-4">
          Topics Covered
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Cyber Security Fundamentals</li>
          <li>Networking Fundamentals</li>
          <li>Operating System Security</li>
          <li>Ethical Hacking</li>
          <li>Vulnerability Assessment</li>
          <li>Incident Response</li>
          <li>Cloud Security</li>
          <li>Data Protection</li>
          <li>Security Tools & Technologies</li>
          <li>Career Preparation</li>
        </ul>

      </div>
    </div>

    {/* Highlight Cards */}
    <div className="grid md:grid-cols-2 gap-8 mt-12">

      <div className="bg-gradient-to-br from-purple-700 to-indigo-800 text-white p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">

        <h3 className="text-2xl font-bold mb-4">
          Live Projects & Practical Labs
        </h3>

        <ul className="space-y-3">
          <li>✓ Network Security Assessments</li>
          <li>✓ Vulnerability Analysis Projects</li>
          <li>✓ Security Monitoring Exercises</li>
          <li>✓ Incident Response Simulations</li>
          <li>✓ Cloud Security Implementations</li>
          <li>✓ Real-World Cyber Security Case Studies</li>
        </ul>

      </div>

      <div className="bg-white border-2 border-purple-700 p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">

        <h3 className="text-2xl font-bold text-purple-700 mb-4">
          Placement Assistance
        </h3>

        <p className="text-gray-600 mb-5">
          Skill Revolution provides dedicated career support including:
        </p>

        <ul className="space-y-3 text-gray-700">
          <li>✓ Resume Development</li>
          <li>✓ LinkedIn Optimization</li>
          <li>✓ Mock Interviews</li>
          <li>✓ Career Mentorship</li>
          <li>✓ Job Referrals & Placement Assistance</li>
        </ul>

      </div>

    </div>

  </div>
</section>

{/* Medical Billing */}
<section className="max-w-7xl mx-auto px-6 py-16">

  <h2 className="text-4xl font-bold text-purple-700 mb-6">
    Medical Billing
  </h2>

  <p className="text-gray-700 leading-8 mb-12">
    Medical billing isn't just sending a single invoice; it is a
    multi-step cycle designed to ensure insurance companies pay
    fairly and patients are billed accurately.
  </p>

  {/* 1 - Course Overview (Text Left + Image Right) */}
  <div className="flex flex-col md:flex-row items-center gap-10 mb-12">

    <div className="flex-1">
      <h3 className="text-2xl font-semibold mb-4">
        Course Overview
      </h3>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Duration: 06 Weeks</li>
        <li>Mode: Online / Classroom</li>
        <li>Certification Focus: AAPC</li>
        <li>Level: Beginner to Advanced</li>
      </ul>
    </div>

    <img
      src="https://res.cloudinary.com/deyfsl3w8/image/upload/v1780923943/billing_8_kmf9gh.jpg"
      alt="Course Overview"
      className="flex-1 h-[280px] object-cover rounded-2xl shadow-lg"
    />
  </div>

  {/* 2 - Course Coverage (Image Left + Text Right) */}
  <div className="flex flex-col md:flex-row items-center gap-14 justify-end mb-12">

    <img
      src="https://res.cloudinary.com/deyfsl3w8/image/upload/v1773044040/entrepreneur-working-with-bills_exdtnw.jpg"
      alt="Course Coverage"
      className="flex-1 h-[280px] object-cover rounded-2xl shadow-lg"
    />

    <div className="flex-1">
      <h3 className="text-2xl font-semibold mb-4">
        Course Coverage
      </h3>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Introduction to Medical Billing and Revenue Cycle Management</li>
        <li>Healthcare Insurance Fundamentals</li>
        <li>Claim Life Cycle Management</li>
        <li>Charge Entry and Claim Submission</li>
        <li>Payment Posting and Reconciliation</li>
        <li>Denial Analysis and AR Follow-Ups</li>
        <li>HIPAA Compliance</li>
        <li>Real-Time Medical Billing Case Studies</li>
      </ul>
    </div>
  </div>

  {/* 3 - Training Includes (Text Left + Image Right) */}
  <div className="flex flex-col md:flex-row items-center gap-10 mb-12">

    <div className="flex-1">
      <h3 className="text-2xl font-semibold mb-4">
        Training Includes
      </h3>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Live Interactive Training Sessions</li>
        <li>Practical Medical Billing Exercises</li>
        <li>Mock Billing Projects</li>
        <li>RCM Workflow Simulations</li>
        <li>Expert Mentorship</li>
      </ul>
    </div>

    <img
      src="https://res.cloudinary.com/deyfsl3w8/image/upload/v1780923758/billing_4_cxju8l.jpg"
      alt="Training"
      className="flex-1 h-[280px] object-cover rounded-2xl shadow-lg"
    />
  </div>

  {/* 4 - Career Opportunities (Image Left + Text Right) */}
  <div className="flex flex-col md:flex-row items-center gap-14 justify-end">

    <img
      src="https://res.cloudinary.com/deyfsl3w8/image/upload/v1780923758/billing_1_nn1a0t.jpg"
      alt="Career Opportunities"
      className="flex-1 h-[280px] object-cover rounded-2xl shadow-lg"
    />

    <div className="flex-1">
      <h3 className="text-2xl font-semibold mb-4">
        Career Opportunities
      </h3>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Medical Billing Executive</li>
        <li>RCM Analyst</li>
        <li>AR Caller</li>
        <li>Denial Management Specialist</li>
        <li>Healthcare Billing Analyst</li>
      </ul>
    </div>
  </div>

</section>

{/* Medical Coding */}
<section className="bg-gray-50 py-16">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-purple-700 mb-6">
      Medical Coding
    </h2>

    <p className="text-gray-700 leading-8 mb-12">
      Medical coding is the process of taking that complex medical narrative and 
      transforming it into standardized, alphanumeric codes.
    </p>

    {/* 1 - Course Overview (Text Left + Image Right) */}
    <div className="flex flex-col md:flex-row items-center gap-10 mb-12">

      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-4">
          Course Overview
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Duration: 08 Weeks</li>
          <li>Mode: Online / Classroom</li>
          <li>Certification Focus: CPC</li>
          <li>Level: Beginner to Advanced</li>
        </ul>
      </div>

      <img
        src="https://res.cloudinary.com/deyfsl3w8/image/upload/v1773044102/medical-banner-with-doctor-working-laptop_yeavvt.jpg"
        alt="Medical Coding Overview"
        className="flex-1 h-[280px] object-cover rounded-2xl shadow-lg"
      />
    </div>

    {/* 2 - Industry Training (Image Left + Text Right) */}
    <div className="flex flex-col md:flex-row items-center gap-14 justify-end mb-12">

      <img
        src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=1200&auto=format&fit=crop"
        alt="Coding Training"
        className="flex-1 h-[280px] object-cover rounded-2xl shadow-lg"
      />

      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-4">
          Industry-Focused Training
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Interactive Live Training Sessions</li>
          <li>Real-Time Medical Coding Practice</li>
          <li>Medical Case Study Analysis</li>
          <li>ICD-10-CM, CPT and HCPCS Exercises</li>
          <li>Mock Certification Tests</li>
          <li>Industry Expert Mentorship</li>
        </ul>
      </div>

    </div>

    {/* 3 - Career Opportunities (Text Left + Image Right) */}
    <div className="flex flex-col md:flex-row items-center gap-10">

      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-4">
          Career Opportunities
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Medical Coder</li>
          <li>Certified Professional Coder</li>
          <li>Risk Adjustment Coder</li>
          <li>Coding Quality Analyst</li>
          <li>Medical Coding Auditor</li>
        </ul>
      </div>

      <img
        src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop"
        alt="Career Opportunities"
        className="flex-1 h-[280px] object-cover rounded-2xl shadow-lg"
      />

    </div>

  </div>

</section>

    {/* Electrical Engineering */}
<section className="py-16 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-purple-700 mb-6">
      Electrical Engineering Training
    </h2>

    <p className="text-gray-700 leading-8 mb-12">
      Build your electrical career with real industrial practicals. SR Electrical
      Training Center provides practical-oriented industrial electrical training
      designed for B.Tech, Diploma, ITI Electrical students, freshers, and
      professionals who want to gain industry-ready skills.
    </p>

    {/* 1 - Course Overview */}
    <div className="flex flex-col md:flex-row items-center gap-10 mb-12">

      <div className="flex-1">

        <h3 className="text-2xl font-semibold mb-2">
          Course Overview
        </h3>

        <p className="text-gray-700 mb-4">
          <span className="font-semibold text-purple-700">
            Training Highlights:
          </span>{" "}
          45+ Industrial Training Modules | 36+ Live Practicals | 100% Practical Learning
        </p>

        <h4 className="text-xl font-semibold text-gray-800 mb-3">
          Who Can Join?
        </h4>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>B.Tech Electrical Students</li>
          <li>Diploma Electrical Students</li>
          <li>ITI Electrician Students</li>
          <li>Freshers & Job Seekers</li>
          <li>Electrical Technicians</li>
          <li>Working Professionals</li>
          <li>Self-Employment Aspirants</li>
          <li>Overseas Job Aspirants</li>
        </ul>

      </div>

      <img
        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
        alt="Electrical Engineering"
        className="flex-1 h-[280px] object-cover rounded-2xl shadow-lg"
      />

    </div>

    {/* 2 - Training Modules */}
    <div className="flex flex-col md:flex-row items-center justify-end gap-14 mb-12">

      <img
        src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop"
        alt="Electrical Training"
        className="flex-1 h-[280px] object-cover rounded-2xl shadow-lg"
      />

      <div className="flex-1">

        <h3 className="text-2xl font-semibold mb-4">
          Training Methodology
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Electrical Components Working Principles</li>
          <li>Industrial Diagram Explanation</li>
          <li>DOL & Star Delta Starters</li>
          <li>Forward Reverse Control Circuits</li>
          <li>VFD Wiring & Applications</li>
         
          <li>Control Panel Wiring</li>
          <li>Industrial Power Circuits</li>
          <li>Troubleshooting & Fault Rectification</li>
          <li>Real-Time Live Industrial Practicals</li>
        </ul>

      </div>

    </div>

    {/* Highlight Cards */}
    <div className="grid md:grid-cols-2 gap-8 mt-12">

      <div className="bg-gradient-to-br from-purple-700 to-indigo-800 text-white p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">

        <h3 className="text-2xl font-bold mb-4">
          Live Industrial Practicals
        </h3>

        <p className="mb-5 text-purple-100 leading-7">
          Students perform practicals exactly as used in industries, helping
          them gain confidence and real-world troubleshooting skills.
        </p>

        <ul className="space-y-3">
          <li>✓ 36+ Live Industrial Practicals</li>
          <li>✓ Contactors, Relays & Timers</li>
          <li>✓ MCCB, MCB & Protection Systems</li>
          <li>✓ Transformers & Motors</li>
          <li>✓ VFD Practical Applications</li>
          <li>✓ Industrial Control Panel Wiring</li>
          <li>✓ Fault Finding & Rectification</li>
        </ul>

        <p className="mt-5 text-purple-100">
          Gain hands-on industrial exposure and become job-ready with practical
          electrical engineering skills.
        </p>

      </div>

      <div className="bg-white border-2 border-purple-700 p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">

        <h3 className="text-2xl font-bold text-purple-700 mb-4">
          Placement Assistance
        </h3>

        <p className="text-gray-600 mb-5">
          We provide complete career support to help students secure jobs in
          industries, maintenance departments, projects, and overseas opportunities.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li>✓ Resume Building Support</li>
          <li>✓ Mock Technical Interviews</li>
          <li>✓ Placement Guidance</li>
          <li>✓ Job Referrals</li>
          <li>✓ Foreign Country Job Preparation</li>
          <li>✓ Self-Employment Guidance</li>
          <li>✓ Industry-Oriented Certification</li>
        </ul>

      </div>

    </div>

    {/* Career Opportunities */}
    <div className="mt-16 bg-gray-50 rounded-2xl p-8">

      <h3 className="text-3xl font-bold text-purple-700 mb-6">
        Career Opportunities
      </h3>

      <div className="grid md:grid-cols-2 gap-4 text-gray-700">

        <div>✓ Electrical Maintenance Engineer</div>
        <div>✓ Electrical Technician</div>
        <div>✓ Panel Wiring Technician</div>
        <div>✓ Industrial Electrician</div>
        <div>✓ Electrical Supervisor</div>
        <div>✓ Service Engineer</div>
        <div>✓ Automation Technician</div>
        <div>✓ Project Site Engineer</div>

      </div>

      <p className="mt-6 text-gray-700 leading-7">
        Students can also start their own electrical service business and
        create self-employment opportunities after completing the training.
      </p>

    </div>

  </div>

  {/* Digital Marketing */}
<section id="digital-marketing" className="py-16 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-purple-700 mb-6">
      Digital Marketing
    </h2>

    <p className="text-gray-700 leading-8 mb-12">
      Digital Marketing is one of the fastest-growing career fields.
      Learn SEO, Social Media Marketing, Google Ads, Content Marketing,
      Email Marketing, and Analytics to build successful online marketing campaigns.
    </p>

    {/* 1 - Course Overview */}
    <div className="flex flex-col md:flex-row items-center gap-10 mb-12">

      <div className="flex-1">

        <h3 className="text-2xl font-semibold mb-2">
          Course Overview
        </h3>

        <p className="text-gray-700 mb-4">
          <span className="font-semibold text-purple-700">
            Course Overview:
          </span>{" "}
          Duration: 06-08 Weeks | Mode: Offline | Level: Beginner to Advanced
        </p>

        <h4 className="text-xl font-semibold text-gray-800 mb-3">
          Industries Using Digital Marketing
        </h4>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>E-Commerce</li>
          <li>IT Companies</li>
          <li>Healthcare</li>
          <li>Education</li>
          <li>Retail</li>
          <li>Real Estate</li>
          <li>Media & Entertainment</li>
        </ul>

      </div>

      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
        alt="Digital Marketing Overview"
        className="flex-1 h-[280px] object-cover rounded-2xl shadow-lg"
      />

    </div>

    {/* 2 - Curriculum Modules */}
    <div className="flex flex-col md:flex-row items-center justify-end gap-14 mb-12">

      <img
        src="https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1200&auto=format&fit=crop"
        alt="Digital Marketing Curriculum"
        className="flex-1 h-[280px] object-cover rounded-2xl shadow-lg"
      />

      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-4">
          Curriculum Modules
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Digital Marketing Fundamentals</li>
          <li>Search Engine Optimization (SEO)</li>
          <li>Google Ads & PPC Campaigns</li>
          <li>Social Media Marketing</li>
          <li>Content Marketing</li>
          <li>Email Marketing</li>
          <li>Google Analytics</li>
          <li>Lead Generation Strategies</li>
          <li>Marketing Automation</li>
        </ul>
      </div>

    </div>

    {/* Highlight Cards */}
    <div className="grid md:grid-cols-2 gap-8 mt-12">

      <div className="bg-gradient-to-br from-purple-700 to-indigo-800 text-white p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
        <h3 className="text-2xl font-bold mb-4">
          Live Marketing Projects
        </h3>

        <p className="mb-5 text-purple-100 leading-7">
          Gain practical experience through real-time projects and campaigns used by businesses.
        </p>

        <ul className="space-y-3">
          <li>✓ SEO Optimization Projects</li>
          <li>✓ Google Ads Campaign Management</li>
          <li>✓ Social Media Strategy Projects</li>
          <li>✓ Content Marketing Campaigns</li>
          <li>✓ Lead Generation Projects</li>
          <li>✓ Analytics & Reporting Dashboards</li>
        </ul>

        <p className="mt-5 text-purple-100">
          Build a professional portfolio and gain confidence with real-world marketing experience.
        </p>
      </div>

      <div className="bg-white border-2 border-purple-700 p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
        <h3 className="text-2xl font-bold text-purple-700 mb-4">
          Placement Assistance
        </h3>

        <p className="text-gray-600 mb-5">
          Dedicated career support to help students start successful careers in Digital Marketing.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li>✓ Resume Building</li>
          <li>✓ LinkedIn Profile Optimization</li>
          <li>✓ Mock Interviews</li>
          <li>✓ Career Guidance Sessions</li>
          <li>✓ Job Referrals</li>
          <li>✓ Interview Preparation</li>
        </ul>
      </div>

    </div>

  </div>

</section>

</section>
      {/* CTA */}
      <section className="bg-purple-800 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Start Your Career Journey Today
          </h2>

          <p className="text-lg mb-8">
            Join Skill Revolution and gain industry-ready skills through
            practical learning, certification support and placement assistance.
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