"use client";

import Link from "next/link";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineClock,
  HiOutlineSparkles,
} from "react-icons/hi";
import { location } from "./helperData";
import { HiArrowUpRight } from "react-icons/hi2";

const HERO_CONFIG = {
  brandName: "Meenakshi Dutt Makeovers",
  headline: "Where Beauty Meets",
  highlightedHeadline: "Luxury & Timeless Glamour",
  videoSrc: "/hero1_ba.mp4",
  highlights: [
    "Celebrity Makeup Artist",
    "Luxury Bridal Studio",
    "Premium Beauty Experience",
  ],
  address: "Dehradun, Uttarakhand",
  phone: "+91-82720-82489",
  phoneLink: "tel:+918272082489",
  openingHours: "10 AM — 9 PM",
  openingSubtitle: "Open all days",
  theme: {
    berry: "#57263C",
    blush: "#F8C8DC",
    roseGold: "#D9A0B5",
    light: "#FFF4F8",
  },
};

export default function HeroSection() {
  const { theme } = HERO_CONFIG;

  const cards = [
    {
      title: "Visit Salon",
      heading: "Get Directions",
      subtitle: HERO_CONFIG.address,
      icon: HiOutlineLocationMarker,
      href: location,
      external: true,
    },
    {
      title: "Contact Us",
      heading: HERO_CONFIG.phone,
      subtitle: "Luxury beauty consultations",
      icon: HiOutlinePhone,
      href: HERO_CONFIG.phoneLink,
      external: false,
    },
    {
      title: "Opening Hours",
      heading: HERO_CONFIG.openingHours,
      subtitle: HERO_CONFIG.openingSubtitle,
      icon: HiOutlineClock,
    },
  ];

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-[#57263C]"
      style={{ backgroundColor: theme.berry }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={HERO_CONFIG.videoSrc} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[#351522]/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#351522]/30 via-transparent to-[#351522]/55" />

      <div className="pointer-events-none absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-[#F4BFD2]/10 blur-[90px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#D99CB4]/10 blur-[100px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col items-center px-4 pb-7 pt-28 sm:px-6 sm:pb-8 sm:pt-32 md:pt-28 lg:px-8 lg:pt-32 xl:pb-10 xl:pt-36">
        <div className="flex items-center gap-2 rounded-full border border-[#F8DCE7]/35 bg-[#57263C]/20 px-3.5 py-2 backdrop-blur-sm sm:px-5 sm:py-2.5">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F8C8DC]/60" />
            <span className="relative h-2 w-2 rounded-full bg-[#F8C8DC]" />
          </span>

          <span className="text-center text-[8px] font-semibold uppercase tracking-[0.18em] text-white sm:text-[10px] sm:tracking-[0.3em] md:text-[11px]">
            {HERO_CONFIG.brandName}
          </span>

          <HiOutlineSparkles
            size={14}
            className="shrink-0 text-[#F8C8DC]"
          />
        </div>

        <h1 className="mx-auto my-5 max-w-[1150px] text-center text-[2.35rem] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:my-6 sm:text-[3.5rem] md:text-[4.4rem] lg:my-5 lg:text-[5rem] xl:text-[5.8rem] 2xl:text-[6.3rem]">
          {HERO_CONFIG.headline}
          <span className="mt-1 block bg-gradient-to-r from-[#FFF4F8] via-[#F8C8DC] to-[#E7B0C5] bg-clip-text pb-1 font-serif italic text-transparent">
            {HERO_CONFIG.highlightedHeadline}
          </span>
        </h1>

        <div className="mb-5 flex items-center gap-3 sm:mb-6">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#E8B3C7] sm:w-14" />
          <span className="h-1.5 w-1.5 rotate-45 border border-[#F3C3D5] bg-[#F3C3D5]/30" />
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#E8B3C7] sm:w-14" />
        </div>

        <div className="flex w-full flex-wrap items-center justify-center gap-2">
          {HERO_CONFIG.highlights.map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/25 bg-[#57263C]/20 px-3 py-2 text-center text-[8px] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm transition-colors duration-300 hover:border-[#F8C8DC]/70 hover:bg-[#57263C]/35 sm:px-4 sm:text-[9px] sm:tracking-[0.14em] md:text-[10px]"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-6 grid w-full max-w-[1000px] grid-cols-1 gap-2.5 sm:mt-7 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;

            const cardContent = (
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#F8DCE7]/35 bg-[#F8C8DC]/15 text-[#FFEAF2] transition-colors duration-300 group-hover:bg-[#F8C8DC]/25 sm:h-11 sm:w-11">
                  <Icon size={21} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#F8C8DC] sm:text-[9px]">
                    {card.title}
                  </p>

                  <h2 className="mt-1 truncate text-[13px] font-semibold text-white sm:text-[14px]">
                    {card.heading}
                  </h2>

                  <p className="mt-0.5 truncate text-[11px] leading-relaxed text-white/80 sm:text-xs">
                    {card.subtitle}
                  </p>
                </div>

                {"href" in card && card.external && (
                  <HiArrowUpRight
                    size={17}
                    className="shrink-0 text-[#F8C8DC] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                )}
              </div>
            );

            const cardClass =
              "group relative overflow-hidden rounded-[18px] border border-white/25 bg-[#57263C]/25 p-3.5 shadow-[0_8px_24px_rgba(30,10,20,0.08)] backdrop-blur-[3px] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F8C8DC]/60 hover:bg-[#57263C]/35 sm:p-4";

            if ("href" in card && card.href) {
              return (
                <Link
                  key={card.title}
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className={cardClass}
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <div key={card.title} className={cardClass}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}