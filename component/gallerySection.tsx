"use client";

import gallery_1 from "@/assests/gallery/gallery_1.jpeg";
import gallery_2 from "@/assests/gallery/gallery_7.jpeg";
import gallery_3 from "@/assests/gallery/gallery_3.jpeg";
import gallery_4 from "@/assests/gallery/gallery_4.jpeg";
import gallery_5 from "@/assests/gallery/gallery_5.jpeg";
import gallery_6 from "@/assests/gallery/gallery_6.jpeg";

export default function GallerySection() {
  const galleryItems = [
    {
      type: "image",
      image: gallery_1,
      title: "Celebrity Glam",
      position: "top",
      height: "aspect-[3/4]",
    },
    {
      type: "image",
      image: gallery_2,
      title: "Beauty Studio",
      position: "center",
      height: "aspect-[4/5]",
    },
    {
      type: "video",
      video: "/galleryv3.mp4",
      title: "Luxury Hair",
      position: "top",
      height: "aspect-[3/4]",
    },
    {
      type: "image",
      image: gallery_3,
      title: "Signature Makeup",
      position: "top",
      height: "aspect-[4/5]",
    },
    {
      type: "image",
      image: gallery_4,
      title: "Luxury Experience",
      position: "center",
      height: "aspect-[3/4]",
    },
    {
      type: "video",
      video: "/gallery_v_1.mp4",
      title: "Timeless Beauty",
      position: "top",
      height: "aspect-[4/5]",
    },
    {
      type: "image",
      image: gallery_5,
      title: "Luxury Salon",
      position: "center",
      height: "aspect-[3/4]",
    },
    {
      type: "video",
      video: "/gallery_v2.mp4",
      title: "Luxury Moments",
      position: "center",
      height: "aspect-[4/5]",
    },
    {
      type: "image",
      image: gallery_6,
      title: "Beauty Elegance",
      position: "top",
      height: "aspect-[3/4]",
    },
  ];

  const highlights = [
    {
      title: "Bridal",
      subtitle: "Artistry",
      desc: "Elegant bridal transformations designed to make your most special moments unforgettable.",
    },
    {
      title: "Luxury",
      subtitle: "Experience",
      desc: "A refined beauty experience where premium care meets exceptional attention to detail.",
    },
    {
      title: "Timeless",
      subtitle: "Beauty",
      desc: "Personalized beauty looks that celebrate your individuality, confidence, and style.",
    },
  ];

  return (
    <section
      id="gallery"
      className="relative isolate overflow-hidden bg-[#FFF5F8] py-14 sm:py-18 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-40 -top-32 -z-10 h-[360px] w-[360px] rounded-full bg-[#E8AFC4]/30 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-48 -right-40 -z-10 h-[420px] w-[420px] rounded-full bg-[#D9A0B5]/25 blur-[110px]" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#C9859F_0.7px,transparent_0.7px)] bg-[size:18px_18px] opacity-[0.13]" />

      <div className="mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[860px] text-center">
          <div className="inline-flex items-center rounded-full border border-[#D9A0B5]/50 bg-white/80 px-4 py-2 shadow-[0_8px_24px_rgba(151,76,105,0.08)] backdrop-blur-xl">
            <span className="mr-2 h-2 w-2 rounded-full bg-[#C9859F]" />
            <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#96516D] sm:text-[9px]">
              The Beauty Collection
            </span>
          </div>

          <h2 className="mt-5 pb-2 text-[2.15rem] font-black leading-[1.05] tracking-[-0.065em] text-[#422633] sm:text-[3.2rem] lg:text-[4.4rem] xl:text-[5rem]">
            Beauty In Every
            <span className="mt-2 block bg-gradient-to-r from-[#A95778] via-[#C9859F] to-[#B88964] bg-clip-text pb-2 text-transparent">
              Luxury Detail
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-[700px] text-[12px] leading-[1.95] text-[#795D69] sm:text-[13px] lg:text-[14px]">
            Discover the artistry of Meenakshi Dutt Makeovers through
            beautiful transformations, signature makeup, and unforgettable
            beauty experiences crafted with elegance.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {["Bridal Artistry", "Signature Glam", "Luxury Beauty"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C9859F]" />
                  <span className="text-[9px] font-semibold tracking-wide text-[#96516D] sm:text-[10px]">
                    {item}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        <div className="mx-auto mt-10 columns-2 gap-3 space-y-3 sm:columns-3 sm:gap-4 sm:space-y-4 lg:mt-12 lg:gap-5 lg:space-y-5">
          {galleryItems.map((item:any) => (
            <div
              key={item.title}
              className="group relative mb-3 break-inside-avoid overflow-hidden rounded-[24px] border border-[#E8C4D2]/80 bg-white p-1.5 shadow-[0_14px_38px_rgba(130,70,94,0.09)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(130,70,94,0.17)] sm:mb-4 sm:rounded-[28px] sm:p-2 lg:mb-5"
            >
              <div className="relative overflow-hidden rounded-[19px] bg-[#F5DDE6] sm:rounded-[22px]">
                {item.type === "video" ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={item.title}
                    style={{ objectPosition: item.position }}
                    className={`block w-full object-cover transition-transform duration-700 group-hover:scale-105 ${item.height}`}
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={item.image.src}
                    alt={item.title}
                    loading="lazy"
                    style={{ objectPosition: item.position }}
                    className={`block w-full object-cover transition-transform duration-700 group-hover:scale-105 ${item.height}`}
                  />
                )}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#28151F]/80 via-[#28151F]/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 sm:p-4 lg:p-5">
                  <span className="inline-flex rounded-full border border-white/30 bg-white/15 px-2.5 py-1 text-[7px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md sm:text-[8px]">
                    Meenakshi Dutt
                  </span>

                  <h3 className="mt-2 text-[12px] font-bold tracking-wide text-white sm:text-[14px] lg:text-[16px]">
                    {item.title}
                  </h3>

                  <div className="mt-2 h-px w-7 bg-gradient-to-r from-[#F2C6D6] to-[#D9B18C] transition-all duration-500 group-hover:w-12" />
                </div>

                <div className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/15 opacity-0 backdrop-blur-lg transition-all duration-500 group-hover:opacity-100 sm:right-4 sm:top-4 sm:h-10 sm:w-10">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F2C6D6]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4 lg:mt-10">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[24px] border border-[#E8C4D2]/80 bg-white/75 p-5 shadow-[0_12px_35px_rgba(130,70,94,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#C9859F]/70 hover:shadow-[0_18px_42px_rgba(130,70,94,0.12)] sm:p-6"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#F5DDE6]/70 blur-2xl transition-transform duration-500 group-hover:scale-150" />

              <div className="relative">
                <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#A95778]">
                  {item.subtitle}
                </span>

                <h3 className="mt-2 text-[1.4rem] font-black leading-tight tracking-[-0.05em] text-[#422633] sm:text-[1.65rem]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[11px] leading-[1.9] text-[#795D69] sm:text-[12px]">
                  {item.desc}
                </p>

                <div className="mt-4 h-px w-8 bg-gradient-to-r from-[#C9859F] to-[#B88964] transition-all duration-500 group-hover:w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}