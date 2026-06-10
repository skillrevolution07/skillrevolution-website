export default function Hero() {
  return (
    <section
      className="
        relative
        h-[750px]
        overflow-hidden
        bg-cover
        bg-[center_right_35%]
        md:bg-center
      "
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/deyfsl3w8/image/upload/v1780934554/hero_pic_yvwzwy.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content */}
      <div className="relative h-full flex items-center px-6 md:px-20">
        <div
          className="uppercase"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          <h1 className="text-white leading-none">
            <span className="block text-[60px] sm:text-[75px] md:text-[140px]">
              AI
            </span>

            <span className="block h-2"></span>

            <span className="block text-[32px] sm:text-[45px] md:text-[80px]">
              CANNOT BEAT
            </span>

            <span className="block h-3"></span>

            <span
              className="
                block
                text-[35px]
                sm:text-[50px]
                md:text-[90px]
                bg-gradient-to-b
                from-[#c8f4ff]
                via-[#57bfff]
                to-[#0b4dbd]
                bg-clip-text
                text-transparent
              "
            >
              SKILL REVOLUTION
            </span>
          </h1>

          {/* WHY */}
          <div className="mt-8 flex items-center">
            <div className="w-12 md:w-28 h-[2px] bg-white"></div>

            <h2 className="mx-4 text-[28px] sm:text-[40px] md:text-[70px] text-white leading-none">
              WHY?
            </h2>

            <div className="w-12 md:w-28 h-[2px] bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
}