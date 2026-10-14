"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "@/assests/logo.png";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/",
    label: "Instagram",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-[9999] w-full px-2 pt-2 sm:px-4 sm:pt-3 lg:px-6">
      <nav className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[22px] border border-[#F0C8D8]/80 bg-[#FFF7FA]/90 shadow-[0_12px_45px_rgba(132,62,91,0.12)] backdrop-blur-2xl sm:rounded-[28px]">
        {/* Baby pink glass background */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FBE3ED]/90 via-[#FFF9FB]/95 to-[#F8DCE7]/90" />

        <div className="pointer-events-none absolute -left-20 -top-24 h-52 w-52 rounded-full bg-[#F3BDD1]/30 blur-3xl" />

        <div className="pointer-events-none absolute -right-12 -bottom-28 h-56 w-56 rounded-full bg-[#DDA2B8]/20 blur-3xl" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#B76E79_0.7px,transparent_0.7px)] [background-size:15px_15px]" />

        <div className="relative mx-auto flex min-h-[76px] items-center justify-between gap-3 px-3 sm:min-h-[86px] sm:px-5 lg:min-h-[96px] lg:px-8 2xl:px-10">
          {/* Brand */}
          <Link
            href="#home"
            onClick={() => setOpen(false)}
            className="group relative z-10 flex min-w-0 items-center gap-2.5 sm:gap-3.5"
          >
            <div className="relative h-[48px] w-[48px] shrink-0 overflow-hidden rounded-[17px] border border-[#E5B3C5] bg-white p-[3px] shadow-[0_6px_20px_rgba(139,65,96,0.13)] transition-all duration-500 group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_28px_rgba(139,65,96,0.20)] sm:h-[57px] sm:w-[57px] lg:h-[65px] lg:w-[65px]">
              <div className="relative h-full w-full overflow-hidden rounded-[13px]">
                <Image
                  src={logo}
                  alt="Meenakshi Dutt Makeovers Logo"
                  fill
                  priority
                  sizes="(max-width: 640px) 48px, (max-width: 1024px) 57px, 65px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="min-w-0">
              <h1 className="truncate bg-gradient-to-r from-[#652940] via-[#9C506D] to-[#B76E79] bg-clip-text pb-1 text-[1.05rem] font-black leading-none tracking-[-0.065em] text-transparent sm:text-[1.4rem] md:text-[1.65rem] lg:text-[1.9rem] xl:text-[2.05rem] 2xl:text-[2.2rem]">
                Meenakshi Dutt
              </h1>

              <p className="mt-1.5 text-[7px] font-bold uppercase tracking-[0.25em] text-[#89566B] sm:text-[8px] md:text-[9px] lg:text-[10px] lg:tracking-[0.38em]">
                Makeovers <span className="text-[#B76E79]">✦</span> Luxury
                Beauty
              </p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="relative z-10 hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative rounded-full px-4 py-3 text-[13px] font-bold tracking-wide text-[#754158] transition-all duration-300 hover:bg-white/60 hover:text-[#A44F70] 2xl:px-6 2xl:text-[14px]"
              >
                <span className="relative z-10">{item.name}</span>

                <span className="absolute bottom-[5px] left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#E8ADC2] via-[#B76E79] to-[#E8ADC2] transition-all duration-300 group-hover:w-8" />
              </Link>
            ))}
          </div>

          {/* Social links and brand tagline */}
          <div className="relative z-10 hidden items-center gap-3 lg:flex">
            <div className="hidden items-center gap-2 md:flex">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="group flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#E9C3D1] bg-white/65 text-[#89506A] shadow-[0_5px_15px_rgba(139,65,96,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#C98BA5] hover:bg-[#F5D5E1] hover:text-[#652940] hover:shadow-[0_10px_25px_rgba(139,65,96,0.15)]"
                  >
                    <Icon size={14} />
                  </Link>
                );
              })}
            </div>

            <div className="hidden rounded-[18px] border border-[#E9C3D1]/80 bg-white/55 px-4 py-3 shadow-[0_6px_20px_rgba(139,65,96,0.06)] backdrop-blur-xl 2xl:block">
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#B76E79]">
                Luxury Beauty Experience
              </p>

              <p className="mt-1 text-[12px] font-bold text-[#652940]">
                Makeup Artistry & Elegance
              </p>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((previous) => !previous)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative z-10 flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-2xl border border-[#E8C0CF] bg-white/70 text-[#783A54] shadow-[0_5px_15px_rgba(139,65,96,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-[#C98BA5] hover:bg-[#F5D5E1] xl:hidden"
          >
            {open ? (
              <HiX className="text-[25px]" />
            ) : (
              <HiOutlineMenuAlt3 className="text-[25px]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`mx-auto max-w-[1600px] overflow-hidden transition-all duration-500 ease-in-out xl:hidden ${
          open
            ? "mt-2 max-h-[500px] translate-y-0 opacity-100"
            : "pointer-events-none mt-0 max-h-0 -translate-y-2 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="relative overflow-hidden rounded-[24px] border border-[#EBC4D3] bg-[#FFF7FA]/95 shadow-[0_20px_60px_rgba(104,39,65,0.16)] backdrop-blur-3xl">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#FBE2EC]/80 via-white/70 to-[#F6D5E2]/70" />

          <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:radial-gradient(#B76E79_0.7px,transparent_0.7px)] [background-size:15px_15px]" />

          <div className="relative px-4 py-5 sm:px-6 sm:py-6">
            {/* Original mobile brand introduction */}
            <div className="mb-5 rounded-[20px] border border-[#EAC3D2]/80 bg-white/55 p-4 shadow-[0_8px_24px_rgba(139,65,96,0.06)] backdrop-blur-xl sm:p-5">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#B76E79]">
                Meenakshi Dutt Makeovers
              </p>

              <h3 className="mt-2 text-[1.25rem] font-black leading-tight tracking-[-0.045em] text-[#652940] sm:text-[1.5rem]">
                Timeless Beauty, Effortless Elegance
              </h3>

              <p className="mt-2 text-[13px] leading-[1.85] text-[#89566B] sm:text-[14px]">
                Professional makeup artistry, bridal beauty, and luxury
                makeover experiences crafted with sophistication and care.
              </p>
            </div>

            {/* Original navigation items */}
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between rounded-[17px] border border-[#EBCBD7]/80 bg-white/65 px-5 py-4 text-[14px] font-bold text-[#754158] shadow-[0_4px_12px_rgba(139,65,96,0.04)] transition-all duration-300 hover:translate-x-1 hover:border-[#D6A0B5] hover:bg-[#FBE5ED]"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F7DFE8] text-[10px] font-black text-[#A45A76]">
                      0{index + 1}
                    </span>

                    {item.name}
                  </span>

                  <span className="text-lg text-[#B76E79] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ))}
            </div>

            {/* Original social links */}
            <div className="mt-5 flex items-center justify-between border-t border-[#EBCBD7] pt-5">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#B76E79]">
                  Follow Us
                </p>

                <p className="mt-1 text-xs text-[#89566B]">
                  Discover our beauty world
                </p>
              </div>

              <div className="flex items-center gap-2">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      tabIndex={open ? 0 : -1}
                      className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#E8C0CF] bg-white/75 text-[#89506A] transition-all duration-300 hover:border-[#C98BA5] hover:bg-[#F5D5E1] hover:text-[#652940]"
                    >
                      <Icon size={14} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}