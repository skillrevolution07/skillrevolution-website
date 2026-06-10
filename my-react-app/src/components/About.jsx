import { Rocket, Flag, Pause } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
          alt=""
          className="rounded-xl"
        />

        <div>
          <p className="text-lg text-indigo-900">
            Best Medical Coding Institute In Hyderabad
          </p>

          <h2 className="text-5xl font-bold text-pink-700 mt-4">
            Welcome to Clouds N Codes
          </h2>

          <p className="mt-6 text-gray-600">
            Industry aligned training with placement support.
          </p>

          <div className="space-y-8 mt-10">
            <div className="flex items-center gap-4">
              <Rocket className="text-blue-500" />
              <h3 className="font-semibold text-2xl">
                Expert Trainers
              </h3>
            </div>

            <div className="flex items-center gap-4">
              <Flag className="text-blue-500" />
              <h3 className="font-semibold text-2xl">
                Flexible Scheduling
              </h3>
            </div>

            <div className="flex items-center gap-4">
              <Pause className="text-blue-500" />
              <h3 className="font-semibold text-2xl">
                Online Learning Modules
              </h3>
            </div>
          </div>

          <button className="mt-10 bg-pink-600 text-white px-8 py-3 rounded-lg">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}