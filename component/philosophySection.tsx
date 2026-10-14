export default function PhilosophySection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">

      <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#7e4b56]/6 blur-3xl"></div>

      <div className="absolute bottom-[-220px] right-[-220px] h-[520px] w-[520px] rounded-full bg-[#b97885]/8 blur-3xl"></div>

      <div className="mx-auto max-w-[1750px] px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-[42px] border border-[#7e4b56]/10 bg-[#fff8f6] shadow-[0_40px_120px_rgba(126,75,86,0.08)]">

          <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[radial-gradient(#7e4b56_0.7px,transparent_0.7px)] bg-[size:14px_14px]"></div>

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div className="relative p-8 sm:p-10 lg:p-16 xl:p-20">

              <div className="inline-flex items-center rounded-full border border-[#7e4b56]/10 bg-white/80 px-5 py-2.5 shadow-[0_12px_35px_rgba(126,75,86,0.06)] backdrop-blur-xl">

                <span className="mr-2 h-2.5 w-2.5 rounded-full bg-[#8c5360]"></span>

                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#8c5360] sm:text-[11px]">
                  Our Philosophy
                </span>

              </div>

              <h2 className="mt-7 max-w-[720px] text-[2.7rem] font-black leading-[0.9] tracking-[-0.09em] text-[#130e0f] sm:text-[4rem] lg:text-[5.3rem] xl:text-[5.8rem]">

                Beauty Beyond

                <span className="mt-2 block bg-gradient-to-r from-[#7e4b56] via-[#b97885] to-[#efc4bc] bg-clip-text text-transparent">
                  Transformation
                </span>

              </h2>

              <p className="mt-8 max-w-[720px] text-[15px] leading-[2] text-[#5d4f52] sm:text-[16px] lg:text-[18px]">
                At Bling by Gunjan Luxe Salon, beauty is more than a service —
                it is an emotion, an experience, and a celebration of
                individuality.
              </p>

              <p className="mt-6 max-w-[720px] text-[15px] leading-[2] text-[#5d4f52] sm:text-[16px] lg:text-[18px]">
                We are committed to helping every client look radiant,
                feel confident, and leave with a touch of luxury that feels
                timeless, elegant, and unforgettable.
              </p>

              <div className="mt-12 grid gap-5 sm:grid-cols-2">

                <div className="rounded-[30px] border border-[#7e4b56]/10 bg-white/85 p-6 shadow-[0_18px_50px_rgba(126,75,86,0.06)] backdrop-blur-xl">

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

                  <h3 className="mt-6 text-[1.4rem] font-black tracking-[-0.04em] text-[#130e0f]">
                    Personalized Beauty
                  </h3>

                  <p className="mt-4 text-[15px] leading-[2] text-[#5d4f52]">
                    Every service is tailored to reflect your personality,
                    elegance, and individual beauty journey.
                  </p>

                </div>

                <div className="rounded-[30px] border border-[#7e4b56]/10 bg-white/85 p-6 shadow-[0_18px_50px_rgba(126,75,86,0.06)] backdrop-blur-xl">

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

                  <h3 className="mt-6 text-[1.4rem] font-black tracking-[-0.04em] text-[#130e0f]">
                    Luxury Experience
                  </h3>

                  <p className="mt-4 text-[15px] leading-[2] text-[#5d4f52]">
                    From ambience to artistry, every detail is thoughtfully
                    crafted to create a premium salon experience.
                  </p>

                </div>

              </div>

            </div>

            <div className="relative h-full min-h-[420px] lg:min-h-[760px]">

              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1600&auto=format&fit=crop"
                alt="Luxury Beauty Experience"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#130e0f]/70 via-[#130e0f]/10 to-transparent"></div>

              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 lg:p-10">

                <div className="max-w-[520px] rounded-[32px] border border-white/20 bg-white/10 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.16)] backdrop-blur-2xl sm:p-8">

                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-white/80">
                    Bling by Gunjan Luxe Salon
                  </p>

                  <h3 className="mt-4 text-[2rem] font-black leading-[1] tracking-[-0.05em] text-white sm:text-[2.6rem]">
                    Timeless Luxury
                    <span className="mt-2 block">
                      Crafted With Elegance
                    </span>
                  </h3>

                  <p className="mt-5 text-[15px] leading-[1.9] text-white/80 sm:text-[16px]">
                    A modern luxury salon experience where artistry,
                    confidence, sophistication, and beauty come together
                    seamlessly.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}