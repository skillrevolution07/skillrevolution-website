import {
  Award,
  BriefcaseBusiness,
  Users,
  GraduationCap,
} from "lucide-react";

export default function WhyChoose() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center px-5 py-2 rounded-full bg-purple-100 text-purple-700 font-medium">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold text-slate-900">
            Why Choose Skill Revolution
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Where Results Speak For Themselves
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-4 gap-6">

          {/* Main Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[32px] p-10 text-white shadow-2xl hover:scale-[1.02] transition-all duration-500">

            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
              <GraduationCap size={34} />
            </div>

            <h3 className="mt-8 text-7xl font-bold">
              2000+
            </h3>

            <p className="mt-3 text-2xl font-semibold">
              Students Got Trained
            </p>

            <p className="mt-5 text-white/80 leading-8">
              Thousands of students have secured successful careers
              in top healthcare and IT companies across India.
            </p>

          </div>

          {/* Card 2 */}
          <div
            className="
              bg-white/80
              backdrop-blur-xl
              border border-white/50
              rounded-[32px]
              p-8
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              hover:-translate-y-2
              transition-all
              duration-500
            "
          >
            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center">
              <Award size={30} className="text-purple-600" />
            </div>

            <h3 className="mt-6 text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              100%
            </h3>

            <p className="mt-3 text-lg font-semibold text-slate-900">
              Certified with US
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="
              bg-white/80
              backdrop-blur-xl
              border border-white/50
              rounded-[32px]
              p-8
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              hover:-translate-y-2
              transition-all
              duration-500
            "
          >
            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center">
              <BriefcaseBusiness
                size={30}
                className="text-purple-600"
              />
            </div>

            <h3 className="mt-6 text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              100%
            </h3>

            <p className="mt-3 text-lg font-semibold text-slate-900">
              Job Assistance
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="
              lg:col-span-2
              bg-white/80
              backdrop-blur-xl
              border border-white/50
              rounded-[32px]
              p-8
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              hover:-translate-y-2
              transition-all
              duration-500
            "
          >
            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center">
              <Users size={30} className="text-purple-600" />
            </div>

            <h3 className="mt-6 text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              99%
            </h3>

            <p className="mt-3 text-xl font-semibold text-slate-900">
              Happy Students
            </p>

            <p className="mt-4 text-slate-600 leading-7">
              Exceptional student satisfaction through practical
              training, mentorship, and placement support.
            </p>
          </div>

          {/* Card 5 */}
          <div className="lg:col-span-2 bg-slate-900 rounded-[32px] p-8 text-white shadow-2xl hover:-translate-y-2 transition-all duration-500">

            <h3 className="text-4xl font-bold">
              Build Your Career With Confidence
            </h3>

            <p className="mt-5 text-slate-300 leading-8">
              Learn from industry experts, earn globally recognized
              certifications, and receive complete placement
              assistance to launch your dream career.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}