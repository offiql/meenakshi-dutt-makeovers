import founder from "@/assests/founder.jpeg";
export default function FounderSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7EFE5] py-12 sm:py-16 lg:py-20 xl:py-24">

      <div className="absolute left-[-160px] top-[-120px] h-[340px] w-[340px] rounded-full bg-[#5B1E2D]/10 blur-3xl"></div>

      <div className="absolute bottom-[-180px] right-[-180px] h-[360px] w-[360px] rounded-full bg-[#D4A373]/10 blur-3xl"></div>

      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[radial-gradient(#5B1E2D_0.8px,transparent_0.8px)] bg-[size:14px_14px]"></div>

      <div className="mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] xl:gap-16">

          <div className="relative order-2 flex justify-center lg:order-1">

            <div className="relative w-full max-w-[500px]">

              <div className="absolute -left-4 top-8 h-[110px] w-[110px] rounded-[28px] border border-[#5B1E2D]/10 bg-white/60 backdrop-blur-2xl"></div>

              <div className="absolute -right-5 bottom-10 h-[130px] w-[130px] rounded-full border border-[#D4A373]/20 bg-[#D4A373]/10 backdrop-blur-2xl"></div>

              <div className="absolute left-[-18px] top-[28%] hidden h-[90px] w-[90px] rounded-full border border-[#5B1E2D]/10 lg:block"></div>

              <div className="absolute right-[-18px] top-[10%] hidden h-[58px] w-[58px] rotate-12 rounded-[18px] border border-[#D4A373]/30 bg-white/40 lg:block"></div>

              <div className="relative overflow-hidden rounded-[30px] border border-white/80 bg-white p-2.5 shadow-[0_25px_80px_rgba(91,30,45,0.12)] sm:rounded-[38px]">

                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.5),transparent)]"></div>

                <img
                  src={founder.src}
                  alt="Gunjan Sajwan"
                  className="relative h-[360px] w-full rounded-[24px] object-cover sm:h-[500px] sm:rounded-[30px] lg:h-[650px] lg:rounded-[34px]"
                />

                <div className="absolute inset-x-5 bottom-5 rounded-[22px] border border-white/10 bg-white/10 p-4 shadow-[0_15px_35px_rgba(0,0,0,0.14)] backdrop-blur-2xl sm:inset-x-6 sm:p-5">

                  <div className="flex items-center justify-between gap-5">

                    <div>

                      <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#F7EFE5]/75">
                        Experience
                      </p>

                      <h4 className="mt-1 text-[1.7rem] font-black text-white">
                        12+
                      </h4>

                      <p className="text-[11px] text-white/70">
                        Years Expertise
                      </p>

                    </div>

                    <div className="h-12 w-[1px] bg-white/10"></div>

                    <div>

                      <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#F7EFE5]/75">
                        Clients
                      </p>

                      <h4 className="mt-1 text-[1.7rem] font-black text-white">
                        5K+
                      </h4>

                      <p className="text-[11px] text-white/70">
                        Happy Clients
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="relative order-1 lg:order-2">

            <div className="inline-flex items-center rounded-full border border-[#5B1E2D]/10 bg-white/80 px-4 py-2 shadow-[0_8px_20px_rgba(91,30,45,0.04)] backdrop-blur-xl">

              <span className="mr-2 h-2 w-2 rounded-full bg-[#D4A373]"></span>

              <span className="text-[7px] font-bold uppercase tracking-[0.3em] text-[#5B1E2D] sm:text-[8px]">
                Founder & Artist
              </span>

            </div>

            <h2 className="mt-4 max-w-[760px] pb-2 text-[2rem] font-black leading-[1] tracking-[-0.08em] text-[#1E1616] sm:text-[3rem] lg:text-[4.2rem] xl:text-[5rem]">

              Meet The Artist
              <span className="mt-1.5 block bg-gradient-to-r from-[#5B1E2D] via-[#7B2D42] to-[#D4A373] bg-clip-text text-transparent">
                Behind The Luxury
              </span>

            </h2>

            <p className="mt-4 max-w-[640px] text-[12px] font-semibold italic leading-[1.85] text-[#7B2D42] sm:text-[13px] lg:text-[14px]">
              Celebrity makeup artistry blended with timeless elegance,
              luxury beauty, and personalized perfection.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">

              {[
                "Celebrity Makeup Artist",
                "Luxury Beauty Expert",
                "Founder",
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-full border border-[#5B1E2D]/10 bg-white/80 px-3 py-1.5 text-[7px] font-bold uppercase tracking-[0.15em] text-[#5B1E2D] shadow-[0_8px_18px_rgba(91,30,45,0.04)] backdrop-blur-xl sm:px-4 sm:text-[8px]"
                >
                  {item}
                </div>
              ))}

            </div>

            <div className="mt-6 space-y-3.5">

              <p className="text-[12px] leading-[1.9] text-[#5C4A4A] sm:text-[13px] lg:text-[14px]">
                With over a decade of expertise, Gunjan Sajwan has become
                a trusted name in luxury bridal and celebrity beauty
                transformations known for elegance, precision,
                and sophistication.
              </p>

              <p className="text-[12px] leading-[1.9] text-[#5C4A4A] sm:text-[13px] lg:text-[14px]">
                Her signature artistry beautifully combines glamour,
                modern techniques, and natural elegance to create timeless
                looks for brides, influencers, and luxury clientele.
              </p>

              <p className="text-[12px] leading-[1.9] text-[#5C4A4A] sm:text-[13px] lg:text-[14px]">
                Through Bling by Gunjan Luxe Salon, she brings premium
                beauty experiences to Dehradun with personalized care,
                luxury ambience, and flawless artistry.
              </p>

            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">

              <div className="rounded-[22px] border border-[#5B1E2D]/10 bg-white/80 p-4 shadow-[0_12px_35px_rgba(91,30,45,0.05)] backdrop-blur-xl">

                <h4 className="text-[1.5rem] font-black text-[#5B1E2D]">
                  12+
                </h4>

                <p className="mt-1.5 text-[11px] leading-[1.6] text-[#5C4A4A]">
                  Years Beauty Expertise
                </p>

              </div>

              <div className="rounded-[22px] border border-[#5B1E2D]/10 bg-white/80 p-4 shadow-[0_12px_35px_rgba(91,30,45,0.05)] backdrop-blur-xl">

                <h4 className="text-[1.5rem] font-black text-[#5B1E2D]">
                  5K+
                </h4>

                <p className="mt-1.5 text-[11px] leading-[1.6] text-[#5C4A4A]">
                  Bridal Transformations
                </p>

              </div>

              <div className="rounded-[22px] border border-[#5B1E2D]/10 bg-white/80 p-4 shadow-[0_12px_35px_rgba(91,30,45,0.05)] backdrop-blur-xl">

                <h4 className="text-[1.5rem] font-black text-[#5B1E2D]">
                  Luxe
                </h4>

                <p className="mt-1.5 text-[11px] leading-[1.6] text-[#5C4A4A]">
                  Premium Beauty Experience
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}