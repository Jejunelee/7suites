import Image from "next/image";

const amenities = [
  {
    title: "Billiards Table",
    description:
      "Our billiards table offers a relaxed setting for casual play, perfect for unwinding and enjoying.",
    image: "/amenities/billiards.jpg"  // Updated path
  },
  {
    title: "Swimming Pool",
    description:
      "Provides a refreshing space for guests to relax, unwind, and enjoy quiet moments throughout their stay.",
    image: "/amenities/pool.webp"  // Updated path
  }
];

export default function Amenities() {
  return (
    <section className="bg-[#dde2e2] pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      {/* HERO - Keep left-aligned like original */}
      <div className="relative h-[240px] sm:h-[280px] md:h-[320px]">
        <Image
          src="/hero/7.webp"
          alt="Amenities"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/70" />

        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-3xl text-[#1f2c34]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-2 sm:mb-3 md:mb-4">
            Amenities
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-90 max-w-full sm:max-w-xl">
            Guests may enjoy leisure amenities providing relaxed entertainment
            and moments of downtime throughout their stay.
          </p>
        </div>
      </div>

      {/* AMENITIES SECTIONS - CENTERED */}
      <div className="max-w-7xl mx-auto mt-6 sm:mt-8 md:mt-10 lg:mt-12 space-y-6 sm:space-y-8 md:space-y-10 px-4 sm:px-6 md:px-8">
        {amenities.map((item, i) => (
          <div
            key={i}
            className="flex justify-center"
          >
            {/* ENLARGED RECTANGLE CONTAINER */}
            <div className="flex flex-col lg:flex-row overflow-hidden shadow-xl sm:shadow-2xl w-full max-w-7xl rounded-lg">
              
              {/* TEXT PANEL - BIGGER */}
              <div className="bg-[#4A5D6A] text-white p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 lg:w-2/5 flex flex-col justify-center order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic mb-4 sm:mb-5 md:mb-6 text-center lg:text-left">
                  {item.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-95 text-center lg:text-left">
                  {item.description}
                </p>
              </div>

              {/* IMAGE PANEL - BIGGER */}
              <div className="relative h-[220px] sm:h-[280px] md:h-[320px] lg:h-[380px] xl:h-[420px] lg:w-3/5 order-1 lg:order-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}