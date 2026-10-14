"use client";

import { location } from "./helperData";
import saloon_1 from "@/assests/aboutSalon/salon_1.jpeg";
import saloon_2 from "@/assests/aboutSalon/salon_2.jpeg";
import Link from "next/link";
import {
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineSparkles,
} from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";

const ABOUT_CONFIG = {
  eyebrow: "About Our Salon",
  heading: "Luxury Beauty",
  highlightedHeading: "Crafted With Elegance",
  tagline:
    "Where luxury meets artistry, and beauty becomes an unforgettable experience.",
  description1:
    "Meenakshi Dutt Makeovers is a destination for bridal artistry, luxury makeovers, and timeless beauty experiences.",
  description2:
    "From bridal transformations to professional makeup and beauty services, every experience is designed to celebrate confidence, elegance, and individuality.",
  experience: "12+",
  experienceLabel: "Years Expertise",
  clients: "5K+",
  clientsLabel: "Happy Clients",
  location: "Dehradun, Uttarakhand",
  openingHours: "10 AM — 9 PM",
  openingSubtitle: "Open all days",
  highlights: [
    "Luxury Bridal Studio",
    "Celebrity Makeup Artist",
    "Premium Beauty Services",
  ],
  videos: {
    first: "/salon_3_v.mp4",
    second: "/salon_4_v.mp4",
  },
};

const highlights = ABOUT_CONFIG.highlights;

export default function LuxuryAboutSection() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#FFF5F8] py-12 sm:py-16 lg:py-20 xl:py-24"
    >
      <div className="pointer-events-none absolute -left-40 -top-32 h-[360px] w-[360px] rounded-full bg-[#F4C4D5]/30 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[420px] w-[420px] rounded-full bg-[#D9A0B5]/20 blur-[110px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#B76E79_0.6px,transparent_0.6px)] [background-size:18px_18px]" />

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12 xl:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="group overflow-hidden rounded-[22px] border border-white bg-white p-1.5 shadow-[0_16px_45px_rgba(132,62,91,0.12)] sm:rounded-[28px] sm:p-2">
                  <img
                    src={saloon_1.src}
                    alt="Meenakshi Dutt Makeovers beauty artistry"
                    loading="lazy"
                    className="h-[180px] w-full rounded-[17px] object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-[250px] sm:rounded-[21px] lg:h-[310px] xl:h-[380px]"
                  />
                </div>

                <div className="group relative overflow-hidden rounded-[22px] border border-white bg-white p-1.5 shadow-[0_16px_45px_rgba(132,62,91,0.12)] sm:rounded-[28px] sm:p-2">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label="Beauty studio video"
                    className="h-[145px] w-full rounded-[17px] object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-[200px] sm:rounded-[21px] lg:h-[240px] xl:h-[270px]"
                  >
                    <source
                      src={ABOUT_CONFIG.videos.first}
                      type="video/mp4"
                    />
                  </video>

                  <div className="pointer-events-none absolute inset-1.5 rounded-[17px] bg-gradient-to-t from-[#57263C]/25 to-transparent sm:inset-2 sm:rounded-[21px]" />
                </div>
              </div>

              <div className="space-y-3 pt-6 sm:space-y-4 sm:pt-10 lg:pt-16">
                <div className="group relative overflow-hidden rounded-[22px] border border-white bg-white p-1.5 shadow-[0_16px_45px_rgba(132,62,91,0.12)] sm:rounded-[28px] sm:p-2">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label="Makeover studio video"
                    className="h-[145px] w-full rounded-[17px] object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-[200px] sm:rounded-[21px] lg:h-[240px] xl:h-[270px]"
                  >
                    <source
                      src={ABOUT_CONFIG.videos.second}
                      type="video/mp4"
                    />
                  </video>

                  <div className="pointer-events-none absolute inset-1.5 rounded-[17px] bg-gradient-to-t from-[#57263C]/25 to-transparent sm:inset-2 sm:rounded-[21px]" />
                </div>

                <div className="group overflow-hidden rounded-[22px] border border-white bg-white p-1.5 shadow-[0_16px_45px_rgba(132,62,91,0.12)] sm:rounded-[28px] sm:p-2">
                  <img
                    src={saloon_2.src}
                    alt="Professional beauty and makeover services"
                    loading="lazy"
                    className="h-[180px] w-full rounded-[17px] object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-[250px] sm:rounded-[21px] lg:h-[310px] xl:h-[380px]"
                  />
                </div>
              </div>

              <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 xl:block">
                <div className="rounded-[25px] border border-white/80 bg-[#FFF8FA]/95 px-6 py-5 shadow-[0_20px_60px_rgba(132,62,91,0.18)] backdrop-blur-md">
                  <div className="flex items-center gap-6">
                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#B76E79]">
                        Experience
                      </p>
                      <h3 className="mt-1 text-[2rem] font-semibold text-[#652940]">
                        {ABOUT_CONFIG.experience}
                      </h3>
                      <p className="text-[11px] text-[#87566B]">
                        {ABOUT_CONFIG.experienceLabel}
                      </p>
                    </div>

                    <div className="h-12 w-px bg-[#D9A0B5]/50" />

                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#B76E79]">
                        Clients
                      </p>
                      <h3 className="mt-1 text-[2rem] font-semibold text-[#652940]">
                        {ABOUT_CONFIG.clients}
                      </h3>
                      <p className="text-[11px] text-[#87566B]">
                        {ABOUT_CONFIG.clientsLabel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E9C3D1] bg-white/75 px-4 py-2 shadow-[0_5px_18px_rgba(132,62,91,0.06)]">
              <HiOutlineSparkles className="text-[#B76E79]" size={15} />
              <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#87506A]">
                {ABOUT_CONFIG.eyebrow}
              </span>
            </div>

            <h2 className="mt-5 max-w-[760px] pb-2 text-[2.4rem] font-semibold leading-[1.06] tracking-[-0.055em] text-[#57263C] sm:text-[3.3rem] lg:text-[4rem] xl:text-[4.7rem]">
              {ABOUT_CONFIG.heading}
              <span className="mt-1 block bg-gradient-to-r from-[#773951] via-[#B76E79] to-[#D9A0B5] bg-clip-text font-serif italic text-transparent">
                {ABOUT_CONFIG.highlightedHeading}
              </span>
            </h2>

            <p className="mt-4 max-w-[650px] text-[13px] font-medium italic leading-[1.85] text-[#A05D78] sm:text-[14px] lg:text-[15px]">
              {ABOUT_CONFIG.tagline}
            </p>

            <div className="mt-5 space-y-3">
              <p className="text-[13px] leading-[1.9] text-[#765664] sm:text-[14px] lg:text-[15px]">
                {ABOUT_CONFIG.description1}
              </p>

              <p className="text-[13px] leading-[1.9] text-[#765664] sm:text-[14px] lg:text-[15px]">
                {ABOUT_CONFIG.description2}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-[#E9C3D1] bg-white/80 px-3.5 py-2 text-[8px] font-bold uppercase tracking-[0.1em] text-[#754158] shadow-[0_5px_16px_rgba(132,62,91,0.05)] sm:px-4 sm:text-[9px]"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Link
                href={location}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-[20px] border border-[#E9C3D1] bg-white/85 p-4 shadow-[0_10px_30px_rgba(132,62,91,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D9A0B5] hover:shadow-[0_16px_35px_rgba(132,62,91,0.12)] sm:p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-gradient-to-br from-[#773951] to-[#B76E79] text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                    <HiOutlineLocationMarker size={19} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#B76E79]">
                      Visit Salon
                    </p>
                    <h3 className="mt-1 text-[13px] font-semibold text-[#57263C]">
                      Get Directions
                    </h3>
                    <p className="mt-1 text-[11px] text-[#87566B]">
                      {ABOUT_CONFIG.location}
                    </p>
                  </div>

                  <HiArrowUpRight
                    size={17}
                    className="shrink-0 text-[#B76E79] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </Link>

              <div className="rounded-[20px] border border-[#E9C3D1] bg-white/85 p-4 shadow-[0_10px_30px_rgba(132,62,91,0.06)] sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-gradient-to-br from-[#773951] to-[#B76E79] text-white shadow-md">
                    <HiOutlineClock size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#B76E79]">
                      Opening Hours
                    </p>
                    <h3 className="mt-1 text-[13px] font-semibold text-[#57263C]">
                      {ABOUT_CONFIG.openingHours}
                    </h3>
                    <p className="mt-1 text-[11px] text-[#87566B]">
                      {ABOUT_CONFIG.openingSubtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}