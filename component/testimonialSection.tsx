export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Aarushi Mehta",
      role: "Bridal Client",
      type: "image",
      media:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop",
      review:
        "Gunjan transformed my bridal look beyond imagination. Every detail felt luxurious, elegant, and absolutely flawless.",
    },
    {
      name: "Riya Kapoor",
      role: "Luxury Makeup Client",
      type: "video",
      media:
        "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1400&auto=format&fit=crop",
      review:
        "The salon ambience, professionalism, and artistry made the entire experience unforgettable and premium.",
    },
    {
      name: "Simran Arora",
      role: "Celebrity Client",
      type: "image",
      media:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1400&auto=format&fit=crop",
      review:
        "Bling by Gunjan truly understands luxury beauty. The attention to detail and elegance is unmatched.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fff8f6] py-16 sm:py-20 lg:py-28">

      <div className="absolute left-[-180px] top-[-140px] h-[420px] w-[420px] rounded-full bg-[#7e4b56]/10 blur-3xl"></div>

      <div className="absolute bottom-[-220px] right-[-220px] h-[520px] w-[520px] rounded-full bg-[#b97885]/12 blur-3xl"></div>

      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[radial-gradient(#7e4b56_0.7px,transparent_0.7px)] bg-[size:14px_14px]"></div>

      <div className="mx-auto max-w-[1750px] px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-[980px] text-center">

          <div className="inline-flex items-center rounded-full border border-[#7e4b56]/10 bg-white/80 px-5 py-2.5 shadow-[0_12px_35px_rgba(126,75,86,0.08)] backdrop-blur-xl">

            <span className="mr-2 h-2.5 w-2.5 rounded-full bg-[#8c5360]"></span>

            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#8c5360] sm:text-[11px]">
              Client Experiences
            </span>

          </div>

          <h2 className="mt-7 text-[2.7rem] font-black leading-[0.9] tracking-[-0.09em] text-[#130e0f] sm:text-[4rem] lg:text-[5.4rem] xl:text-[6rem]">

            Luxury Loved By

            <span className="mt-2 block bg-gradient-to-r from-[#7e4b56] via-[#b97885] to-[#efc4bc] bg-clip-text text-transparent">
              Our Clients
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-[820px] text-[15px] leading-[2] text-[#5d4f52] sm:text-[16px] lg:text-[18px]">
            Discover heartfelt experiences from brides, beauty lovers,
            and luxury clientele who trusted Bling by Gunjan Luxe Salon
            for their most special moments.
          </p>

        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[36px] border border-[#7e4b56]/10 bg-white/90 shadow-[0_25px_80px_rgba(126,75,86,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_38px_110px_rgba(126,75,86,0.14)]"
            >

              <div className="relative overflow-hidden">

                {testimonial.type === "image" ? (
                  <img
                    src={testimonial.media}
                    alt={testimonial.name}
                    className="h-[320px] w-full object-cover transition-all duration-700 group-hover:scale-105 sm:h-[380px]"
                  />
                ) : (
                  <div className="relative">

                    <video
                      controls
                      poster={testimonial.thumbnail}
                      className="h-[320px] w-full object-cover sm:h-[380px]"
                    >
                      <source
                        src={testimonial.media}
                        type="video/mp4"
                      />
                    </video>

                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#130e0f]/80 via-[#130e0f]/10 to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-full p-6">

                  <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl">

                    <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white">
                      Verified Client
                    </span>

                  </div>

                </div>

              </div>

              <div className="p-6 sm:p-8">

                <div className="flex items-center">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#d49aa5]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}

                </div>

                <p className="mt-6 text-[15px] leading-[2] text-[#5d4f52] sm:text-[16px]">
                  “{testimonial.review}”
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-[#7e4b56]/10 pt-6">

                  <div>

                    <h4 className="text-[1.15rem] font-black tracking-[-0.03em] text-[#130e0f]">
                      {testimonial.name}
                    </h4>

                    <p className="mt-1 text-[12px] font-black uppercase tracking-[0.18em] text-[#8c5360]">
                      {testimonial.role}
                    </p>

                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#7e4b56] via-[#b97885] to-[#efc4bc] shadow-[0_18px_35px_rgba(126,75,86,0.22)]">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.4}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4v-4z"
                      />
                    </svg>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

        <div className="mt-16 rounded-[38px] border border-[#7e4b56]/10 bg-white/90 p-8 shadow-[0_30px_90px_rgba(126,75,86,0.08)] backdrop-blur-xl sm:p-10 lg:p-14">

          <div className="grid gap-8 lg:grid-cols-3">

            <div className="rounded-[30px] border border-[#7e4b56]/10 bg-[#fff8f6] p-7 shadow-[0_18px_50px_rgba(126,75,86,0.05)]">

              <h3 className="text-[2.3rem] font-black text-[#8c5360]">
                5K+
              </h3>

              <p className="mt-3 text-[15px] font-semibold leading-[1.9] text-[#5d4f52]">
                Happy luxury beauty and bridal clients across premium experiences.
              </p>

            </div>

            <div className="rounded-[30px] border border-[#7e4b56]/10 bg-[#fff8f6] p-7 shadow-[0_18px_50px_rgba(126,75,86,0.05)]">

              <h3 className="text-[2.3rem] font-black text-[#8c5360]">
                4.9★
              </h3>

              <p className="mt-3 text-[15px] font-semibold leading-[1.9] text-[#5d4f52]">
                Exceptional client satisfaction built through luxury artistry and trust.
              </p>

            </div>

            <div className="rounded-[30px] border border-[#7e4b56]/10 bg-[#fff8f6] p-7 shadow-[0_18px_50px_rgba(126,75,86,0.05)]">

              <h3 className="text-[2.3rem] font-black text-[#8c5360]">
                Luxe
              </h3>

              <p className="mt-3 text-[15px] font-semibold leading-[1.9] text-[#5d4f52]">
                Timeless beauty experiences designed with elegance, glamour, and care.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}