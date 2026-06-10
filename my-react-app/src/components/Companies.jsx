import { motion } from "framer-motion";

export default function Companies() {
  const logos = [
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780747149/gen_gmambq.png",
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780747149/omega_xyege0.png",
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780747149/ibm_rg13er.png",
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780747149/anian_a2kuk5.jpg",
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780747149/tcs_hewcpe.png",
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780747149/accenture_rzqeha.png",

    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780748441/inf_h0e6cq.jpg",
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780747150/delootie_ngckjy.png",
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780747150/cog_h8ab8f.png",
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780748116/su_v6u5z3.png",
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780748252/data_bqbiv1.jpg",
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780748308/cor_owe2kc.png",

    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780747694/gebbs_by2dht.jpg",
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780748373/am_cl2evq.png",
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780748903/e_avgt8r.png",
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780748674/r1_ngk3lz.png",
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780748674/sag_oty2pj.png",
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780748674/ags_ybuevg.jpg",

    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780747695/access_t5hva7.jpg",
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780748817/el_jsfxpc.jpg",
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780748673/opt_l54ije.png",
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780749044/cis_fz07si.png",
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780749043/lt_tryzyr.png",
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780749176/hcl_vs3k4j.png",

    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780841842/SALES_s8zoud.png",
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780841842/AIR_yc28tu.png",
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780841875/LEE_jzr4xl.png",
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780841875/NEU_t5ngwz.png",
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780841876/MSN_pd3xle.jpg",
    "https://res.cloudinary.com/deyfsl3w8/image/upload/v1780842079/SYMED_iwemak.jpg",
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-purple-100 text-purple-700 font-medium">
            Trusted By Industry Leaders
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold text-[#1d2355]">
            Our Hiring Partners
          </h2>

          <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
            Connecting students with leading healthcare,
            IT and multinational companies worldwide.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.04,
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.1,
                },
              }}
              whileHover={{
                scale: 1.08,
                y: -10,
                rotate: 1,
              }}
              className="
                h-28
                rounded-3xl
                bg-white
                border
                border-slate-100
                shadow-md
                hover:shadow-2xl
                hover:border-purple-200
                transition-all
                duration-500
                flex
                items-center
                justify-center
                p-5
              "
            >
              <img
                src={logo}
                alt="Company Logo"
                className="
                  max-h-14
                  w-auto
                  object-contain
                  transition-all
                  duration-500
                  hover:scale-110
                "
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}