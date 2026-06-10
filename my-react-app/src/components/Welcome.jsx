import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
          alt="Skill Revolution"
          className="rounded-2xl shadow-xl h-full object-cover"
        />

        <div>
          <p className="text-purple-700 font-semibold uppercase tracking-wider">
            Empowering Careers Through Industry-Focused Training
          </p>

          <h2 className="text-5xl font-bold text-[#1d2355] mt-4 leading-tight">
            Welcome To Skill Revolution
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Skill Revolution provides industry-oriented training programs
            designed to help students and professionals build successful
            careers in IT, Healthcare, Engineering, and Digital Technologies.
            Learn from experienced mentors, gain practical knowledge through
            real-time projects, and receive dedicated placement support.
          </p>

          <div className="space-y-6 mt-10">
            <div>
              <h3 className="font-bold text-xl text-[#1d2355]">
                Expert Trainers
              </h3>
              <p className="text-gray-600">
                Learn from experienced industry professionals and certified experts.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl text-[#1d2355]">
                Placement Assistance
              </h3>
              <p className="text-gray-600">
                Resume building, mock interviews, career guidance, and job support.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl text-[#1d2355]">
                Flexible Learning
              </h3>
              <p className="text-gray-600">
                Online and offline training with weekday and weekend batches.
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/courses")}
            className="mt-8 bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            VIEW MORE
          </button>
        </div>

      </div>
    </section>
  );
}