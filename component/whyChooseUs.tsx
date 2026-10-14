export default function WhyChooseUsSection() {
  const features = [
    "12+ Years of Beauty Expertise",
    "Celebrity Makeup Artist Led Brand",
    "Premium International Products",
    "Luxury Salon Ambience",
    "Personalized Beauty Consultations",
    "Hygiene & Professional Excellence",
    "Dedicated Bridal Studio",
    "Skilled & Certified Professionals",
  ];

  return (
    <section className="relative overflow-hidden bg-[#fff8f6] py-16 sm:py-20 lg:py-28">

      <div className="absolute left-[-180px] top-[-140px] h-[420px] w-[420px] rounded-full bg-[#7e4b56]/10 blur-3xl"></div>

      <div className="absolute bottom-[-220px] right-[-220px] h-[520px] w-[520px] rounded-full bg-[#b97885]/12 blur-3xl"></div>

      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[radial-gradient(#7e4b56_0.7px,transparent_0.7px)] bg-[size:14px_14px]"></div>

      <div className="mx-auto max-w-[1750px] px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2 xl:gap-24">

          <div className="relative">

            <div className="inline-flex items-center rounded-full border border-[#7e4b56]/10 bg-white/80 px-5 py-2.5 shadow-[0_12px_35px_rgba(126,75,86,0.08)] backdrop-blur-xl">

              <span className="mr-2 h-2.5 w-2.5 rounded-full bg-[#8c5360]"></span>

              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#8c5360] sm:text-[11px]">
                Luxury Beauty Experience
              </span>
            </div>

            <h2 className="mt-7 max-w-[760px] text-[2.7rem] font-black leading-[0.9] tracking-[-0.09em] text-[#130e0f] sm:text-[4rem] lg:text-[5.3rem] xl:text-[5.8rem]">

              Why Choose

              <span className="mt-2 block bg-gradient-to-r from-[#7e4b56] via-[#b97885] to-[#efc4bc] bg-clip-text text-transparent">
                Bling by Gunjan?
              </span>
            </h2>

            <p className="mt-8 max-w-[720px] text-[15px] leading-[2] text-[#5d4f52] sm:text-[16px] lg:text-[18px]">
              Experience luxury beauty artistry crafted with precision,
              elegance, and personalized care. At Bling by Gunjan Luxe
              Salon, every detail is thoughtfully designed to create
              sophisticated, timeless, and unforgettable transformations.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">

              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start rounded-[28px] border border-[#7e4b56]/10 bg-white/85 p-5 shadow-[0_18px_50px_rgba(126,75,86,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(126,75,86,0.12)]"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#7e4b56] via-[#b97885] to-[#efc4bc] shadow-[0_18px_35px_rgba(126,75,86,0.24)]">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                  </div>

                  <div className="ml-4">

                    <h4 className="text-[15px] font-black leading-[1.6] tracking-[-0.02em] text-[#130e0f] sm:text-[16px]">
                      {feature}
                    </h4>

                  </div>

                </div>
              ))}

            </div>

          </div>

          <div className="relative">

            <div className="relative mx-auto max-w-[760px]">

              <div className="absolute -left-4 top-10 hidden rounded-[32px] border border-white/40 bg-white/85 p-6 shadow-[0_30px_80px_rgba(126,75,86,0.14)] backdrop-blur-2xl lg:block">

                <h4 className="text-[2.3rem] font-black text-[#8c5360]">
                  Elite
                </h4>

                <p className="mt-1 text-sm font-semibold text-[#5d4f52]">
                  Luxury Beauty Experience
                </p>
              </div>

              <div className="absolute -bottom-6 -right-2 hidden rounded-[32px] border border-white/40 bg-white/85 p-6 shadow-[0_30px_80px_rgba(126,75,86,0.14)] backdrop-blur-2xl lg:block">

                <h4 className="text-[2.3rem] font-black text-[#8c5360]">
                  Luxe
                </h4>

                <p className="mt-1 text-sm font-semibold text-[#5d4f52]">
                  Premium Beauty Destination
                </p>
              </div>

              <div className="overflow-hidden rounded-[42px] border border-white/50 bg-white p-3 shadow-[0_45px_120px_rgba(126,75,86,0.18)]">

                <img
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop"
                  alt="Luxury Salon"
                  className="h-[420px] w-full rounded-[34px] object-cover sm:h-[560px] lg:h-[760px]"
                />
              </div>

            </div>

          </div>

        </div>

        <div className="mt-16 rounded-[38px] border border-[#7e4b56]/10 bg-white/85 p-8 shadow-[0_30px_90px_rgba(126,75,86,0.08)] backdrop-blur-xl sm:p-10 lg:p-14">

          <div className="grid gap-10 lg:grid-cols-3">

            <div className="rounded-[30px] border border-[#7e4b56]/10 bg-[#fff8f6] p-7 shadow-[0_18px_50px_rgba(126,75,86,0.05)]">

              <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#7e4b56] via-[#b97885] to-[#efc4bc] shadow-[0_18px_35px_rgba(126,75,86,0.22)]">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.4 15A7.968 7.968 0 0020 12a8 8 0 10-8 8 7.968 7.968 0 003-.6L20 20l-.6-5z"
                  />
                </svg>

              </div>

              <h3 className="mt-6 text-[1.5rem] font-black tracking-[-0.04em] text-[#130e0f]">
                Personalized Consultations
              </h3>

              <p className="mt-4 text-[15px] leading-[2] text-[#5d4f52]">
                Every client receives tailored beauty guidance and luxury
                services designed specifically for their style, features,
                and preferences.
              </p>

            </div>

            <div className="rounded-[30px] border border-[#7e4b56]/10 bg-[#fff8f6] p-7 shadow-[0_18px_50px_rgba(126,75,86,0.05)]">

              <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#7e4b56] via-[#b97885] to-[#efc4bc] shadow-[0_18px_35px_rgba(126,75,86,0.22)]">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

              </div>

              <h3 className="mt-6 text-[1.5rem] font-black tracking-[-0.04em] text-[#130e0f]">
                Professional Excellence
              </h3>

              <p className="mt-4 text-[15px] leading-[2] text-[#5d4f52]">
                From hygiene standards to luxury artistry, every service is
                delivered with professionalism, precision, and exceptional
                attention to detail.
              </p>

            </div>

            <div className="rounded-[30px] border border-[#7e4b56]/10 bg-[#fff8f6] p-7 shadow-[0_18px_50px_rgba(126,75,86,0.05)]">

              <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#7e4b56] via-[#b97885] to-[#efc4bc] shadow-[0_18px_35px_rgba(126,75,86,0.22)]">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2"
                  />
                </svg>

              </div>

              <h3 className="mt-6 text-[1.5rem] font-black tracking-[-0.04em] text-[#130e0f]">
                Timeless Luxury Experience
              </h3>

              <p className="mt-4 text-[15px] leading-[2] text-[#5d4f52]">
                We create beauty experiences that feel elegant, modern,
                relaxing, and unforgettable — crafted to leave a lasting
                impression.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}