"use client";

export default function LuxuryServicesSection() {
  const services = [
    {
      title: "Bridal & Celebrity Makeup",
      description:
        "Luxury bridal artistry, HD makeup, engagement glam, and destination wedding beauty tailored exclusively for you.",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop",
      large: true,
    },
    {
      title: "Luxury Hair Studio",
      description:
        "Precision haircuts, balayage, keratin, global coloring, and luxury styling.",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "Skin & Facial Lounge",
      description:
        "Glow therapies, hydration rituals, anti-aging facials, and premium skincare.",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "Nails & Beauty Bar",
      description:
        "Luxury manicures, gel extensions, lash enhancements, and signature nail artistry.",
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "Spa & Wellness",
      description:
        "Relaxing spa therapies and wellness rituals crafted for complete rejuvenation.",
      image:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1400&auto=format&fit=crop",
    },
  ];

  const stats = [
    { title: "12+", desc: "Years of Expertise" },
    { title: "5K+", desc: "Happy Clients" },
    { title: "Luxe", desc: "Premium Products" },
    { title: "Elite", desc: "Personalized Experience" },
  ];

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#FFF5F8] py-14 sm:py-18 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-40 -top-32 -z-10 h-[360px] w-[360px] rounded-full bg-[#E8AFC4]/30 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-48 -right-40 -z-10 h-[420px] w-[420px] rounded-full bg-[#D9A0B5]/25 blur-[110px]" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#C9859F_0.7px,transparent_0.7px)] bg-[size:18px_18px] opacity-[0.13]" />

      <div className="mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[900px] text-center">
          <div className="inline-flex items-center rounded-full border border-[#D9A0B5]/50 bg-white/80 px-4 py-2 shadow-[0_8px_24px_rgba(151,76,105,0.08)] backdrop-blur-xl">
            <span className="mr-2 h-2 w-2 rounded-full bg-[#C9859F]" />
            <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#96516D] sm:text-[9px]">
              Signature Services
            </span>
          </div>

          <h2 className="mt-5 pb-2 text-[2.15rem] font-black leading-[1.05] tracking-[-0.065em] text-[#422633] sm:text-[3.2rem] lg:text-[4.4rem] xl:text-[5rem]">
            Signature Beauty
            <span className="mt-2 block bg-gradient-to-r from-[#A95778] via-[#C9859F] to-[#B88964] bg-clip-text pb-2 text-transparent">
              Crafted With Luxury
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-[680px] text-[12px] leading-[1.9] text-[#795D69] sm:text-[13px] lg:text-[14px]">
            Every experience at Meenakshi Dutt Makeovers is thoughtfully
            curated to celebrate your individuality with confidence,
            elegance, and timeless beauty.
          </p>
        </div>

        <div className="mt-9 grid auto-rows-[250px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden rounded-[26px] border border-white/70 bg-[#F5DDE6] shadow-[0_16px_45px_rgba(130,70,94,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(130,70,94,0.2)] ${
                service.large ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#28151F]/90 via-[#28151F]/25 to-transparent transition-opacity duration-500 group-hover:from-[#28151F]/95" />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6">
                <div className="inline-flex rounded-full border border-white/25 bg-white/15 px-3 py-1 backdrop-blur-md">
                  <span className="text-[7px] font-bold uppercase tracking-[0.16em] text-white sm:text-[8px]">
                    Meenakshi Dutt Makeovers
                  </span>
                </div>

                <h3 className="mt-3 max-w-[95%] pb-1 text-[1.25rem] font-black leading-[1.08] tracking-[-0.04em] text-white sm:text-[1.5rem] lg:text-[1.7rem]">
                  {service.title}
                </h3>

                <p
                  className={`mt-2 max-w-[95%] text-[11px] leading-[1.8] text-white/85 sm:text-[12px] ${
                    service.large ? "lg:max-w-[75%]" : ""
                  }`}
                >
                  {service.description}
                </p>

                <div className="mt-4 h-px w-10 bg-gradient-to-r from-[#F2C6D6] to-[#D9B18C] transition-all duration-500 group-hover:w-20" />
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-8 overflow-hidden rounded-[28px] border border-[#E8C4D2]/70 bg-white/75 p-5 shadow-[0_18px_50px_rgba(130,70,94,0.08)] backdrop-blur-xl sm:p-7 lg:p-9">
          <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#F5DDE6]/70 blur-3xl" />

          <div className="relative grid gap-7 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 text-[#A95778]">
                <span className="h-px w-7 bg-[#C9859F]" />
                <span className="text-[8px] font-bold uppercase tracking-[0.25em] sm:text-[9px]">
                  The Art of Beauty
                </span>
              </div>

              <h3 className="max-w-[700px] pb-2 text-[1.9rem] font-black leading-[1.05] tracking-[-0.06em] text-[#422633] sm:text-[2.6rem] lg:text-[3.5rem]">
                Beauty Beyond
                <span className="mt-2 block bg-gradient-to-r from-[#A95778] via-[#C9859F] to-[#B88964] bg-clip-text pb-2 text-transparent">
                  Ordinary Luxury
                </span>
              </h3>

              <p className="mt-3 max-w-[600px] text-[12px] leading-[1.95] text-[#795D69] sm:text-[13px] lg:text-[14px]">
                Beauty is more than appearance — it is confidence, elegance,
                and individuality. At Meenakshi Dutt Makeovers, every
                transformation is designed to make you feel exceptional,
                celebrated, and beautifully yourself.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Personalized Artistry", "Premium Care", "Timeless Beauty"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#E8C4D2] bg-[#FFF5F8] px-3 py-2 text-[9px] font-semibold text-[#96516D] sm:text-[10px]"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {stats.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-[20px] border border-[#E8C4D2]/80 bg-gradient-to-br from-white to-[#FFF1F6] p-4 shadow-[0_10px_28px_rgba(130,70,94,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C9859F]/70 hover:shadow-[0_15px_35px_rgba(130,70,94,0.12)] sm:p-5"
                >
                  <h4 className="bg-gradient-to-r from-[#A95778] to-[#B88964] bg-clip-text text-[1.5rem] font-black text-transparent sm:text-[1.8rem]">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-[10px] leading-[1.7] text-[#795D69] sm:text-[11px]">
                    {item.desc}
                  </p>
                  <div className="mt-3 h-px w-7 bg-[#D9A0B5] transition-all duration-300 group-hover:w-12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}