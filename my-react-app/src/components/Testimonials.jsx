import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    name: "Ashwini Shetty",
    company: "OPTUM",
    image:
      "https://res.cloudinary.com/deyfsl3w8/image/upload/v1773044844/7_u2zwuh.png",
    review:
      "The trainers explained every concept clearly and the placement team guided me throughout the interview process. I'm grateful for the support and mentorship.",
  },
  {
    name: "Ambika",
    company: "COGNIZANT",
    image:
      "https://res.cloudinary.com/deyfsl3w8/image/upload/v1773044843/6_modmhu.png",
    review:
      "Excellent learning environment with practical sessions and real-time projects. The training boosted my confidence and technical skills significantly.",
  },
  {
    name: "Prathap Chowdary",
    company: "ACCENTURE",
    image:
      "https://res.cloudinary.com/deyfsl3w8/image/upload/v1773044842/5_fe7u2i.png",
    review:
      "The mock interviews and resume preparation sessions helped me crack multiple interviews. A great place to start your career journey.",
  },
  {
    name: "Anwar Syed",
    company: "HCL",
    image:
      "https://res.cloudinary.com/deyfsl3w8/image/upload/v1773044841/4_zhtpyu.jpg",
    review:
      "The faculty members are highly experienced and always ready to help. Their industry insights made learning much more effective.",
  },
  {
    name: "Acharya",
    company: "WIPRO",
    image:
      "https://res.cloudinary.com/deyfsl3w8/image/upload/v1773044840/3_hhm0cp.png",
    review:
      "I joined with very little knowledge, but the structured curriculum and hands-on training helped me secure a job in a reputed company.",
  },
  {
    name: "Guru Naik",
    company: "HCL",
    image:
      "https://res.cloudinary.com/deyfsl3w8/image/upload/v1773044839/2_cwgwpx.png",
    review:
      "The institute provided excellent career guidance, technical training, and interview preparation. It played a major role in my success.",
  },
  {
    name: "Devi Goud",
    company: "ACCENTURE",
    image:
      "https://res.cloudinary.com/deyfsl3w8/image/upload/v1773044631/1_bb19i1.png",
    review:
      "From training to placement support, everything was handled professionally. The mentors genuinely care about student growth and success.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="px-5 py-2 rounded-full bg-purple-100 text-purple-700 font-medium">
            Success Stories
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#1d2355]">
            Student Success Stories
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Our students are placed in top companies
          </p>
        </div>

        {/* Auto Moving Testimonials */}
        <Swiper
          slidesPerView={4}
          spaceBetween={40}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="text-center px-4">

                {/* Profile Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-28
                    h-28
                    rounded-full
                    mx-auto
                    object-cover
                    border-4
                    border-purple-500
                    shadow-lg
                    transition
                    duration-300
                    hover:scale-110
                  "
                />

                {/* Name */}
                <h3 className="mt-5 text-2xl font-bold text-[#1d2355]">
                  {item.name}
                </h3>

                {/* Company */}
                <p className="mt-1 text-purple-600 font-semibold">
                  {item.company}
                </p>

                {/* Rating */}
                <div className="mt-2 text-yellow-400 text-lg">
                  ⭐⭐⭐⭐⭐
                </div>

                {/* Review */}
                <div className="mt-4 max-w-xs mx-auto">
                  <div className="text-4xl text-purple-200">❝</div>

                  <p className="text-gray-600 italic leading-7 text-sm">
                    {item.review}
                  </p>

                  <div className="text-4xl text-purple-200">❞</div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}