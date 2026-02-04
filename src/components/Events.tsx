export default function Events() {
  return (
    <section className="w-full bg-[#d9dcd8] py-8 sm:py-10 md:py-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-start">
        
        {/* Left large vertical image */}
        <div className="order-2 lg:order-1">
          <img
            src="/main/pic1.png"
            alt="Wedding couple"
            className="w-full h-[400px] sm:h-[500px] md:h-[620px] object-cover object-[center_100%] rounded-sm shadow-lg"
          />
        </div>

        {/* Right column */}
        <div className="order-1 lg:order-2 flex flex-col gap-6 sm:gap-8 md:gap-10">
          
          {/* Top horizontal image */}
          <img
            src="/main/pic2.png"
            alt="Outdoor dining event"
            className="w-full h-[200px] sm:h-[230px] md:h-[260px] object-cover rounded-sm shadow-lg"
          />

          {/* Bottom text */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#0f1720] leading-tight">
              A <em className="italic font-normal">Refined Venue</em> for{" "}
              <em className="italic font-normal">Memorable Events</em>
            </h2>

            <p className="mt-3 sm:mt-2 text-sm sm:text-base md:text-lg text-[#2f3a42] max-w-xl leading-relaxed sm:leading-loose">
              We offer an elegant and intimate setting for meetings, celebrations,
              and private events—designed for comfort, style, and seamless gatherings.
            </p>

            <div className="text-center sm:text-right mt-6 sm:mt-8 md:mt-10">
              <button className="text-base sm:text-lg md:text-xl bg-[#2f4656] text-white px-8 sm:px-10 md:px-12 py-2 sm:py-2.5 md:py-3 tracking-wide hover:bg-[#243946] transition-colors shadow-md w-full sm:w-auto">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}