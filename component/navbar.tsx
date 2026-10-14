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
    <header className="fixed inset-x-0 top-0 z-[9999] w-full">
      <nav className="relative isolate w-full overflow-hidden border-b border-[#D9A0B5]/45 bg-[#FFF5F8]/65 shadow-[0_8px_35px_rgba(101,41,64,0.08)] backdrop-blur-2xl backdrop-saturate-150">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#F8DCE7]/65 via-[#FFF9FB]/55 to-[#F5D6E2]/65" />

        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16] [background-image:radial-gradient(#B76E79_0.6px,transparent_0.6px)] [background-size:18px_18px]" />

        <div className="pointer-events-none absolute -left-20 -top-28 -z-10 h-48 w-48 rounded-full bg-[#E8ADC2]/25 blur-3xl" />

        <div className="pointer-events-none absolute -right-16 -top-28 -z-10 h-48 w-48 rounded-full bg-[#D9A0B5]/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-[72px] w-full items-center justify-between gap-3 px-4 sm:min-h-[82px] sm:px-6 lg:min-h-[90px] lg:px-8 xl:px-12 2xl:px-16">
          <Link
            href="#home"
            onClick={() => setOpen(false)}
            className="group flex min-w-0 items-center gap-2.5 sm:gap-3.5"
          >
            <div className="relative h-[46px] w-[46px] shrink-0 overflow-hidden rounded-full border border-[#D9A0B5]/70 bg-white/60 p-[2px] shadow-[0_4px_18px_rgba(139,65,96,0.12)] transition duration-500 group-hover:scale-105 group-hover:shadow-[0_7px_25px_rgba(139,65,96,0.20)] sm:h-[55px] sm:w-[55px] lg:h-[62px] lg:w-[62px]">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src={logo}
                  alt="Meenakshi Dutt Makeovers Logo"
                  fill
                  priority
                  sizes="(max-width: 640px) 46px, (max-width: 1024px) 55px, 62px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="min-w-0">
              <h1 className="truncate bg-gradient-to-r from-[#652940] via-[#9C506D] to-[#B76E79] bg-clip-text pb-1 text-[1.05rem] font-black leading-none tracking-[-0.055em] text-transparent sm:text-[1.4rem] md:text-[1.65rem] lg:text-[1.85rem]">
                Meenakshi Dutt
              </h1>

              <p className="mt-1.5 whitespace-nowrap text-[7px] font-bold uppercase tracking-[0.20em] text-[#89566B] sm:text-[8px] sm:tracking-[0.28em] md:text-[9px] lg:text-[10px]">
                Makeovers <span className="text-[#B76E79]">✦</span> Luxury Beauty
              </p>
            </div>
          </Link>

          <div className="relative hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative rounded-full px-4 py-3 text-[13px] font-semibold tracking-wide text-[#754158] transition duration-300 hover:bg-white/45 hover:text-[#A44F70] 2xl:px-6 2xl:text-[14px]"
              >
                <span>{item.name}</span>
                <span className="absolute bottom-[5px] left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#E8ADC2] via-[#B76E79] to-[#E8ADC2] transition-all duration-300 group-hover:w-7" />
              </Link>
            ))}
          </div>

          <div className="relative hidden items-center gap-3 lg:flex">
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
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9A0B5]/55 bg-white/35 text-[#89506A] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#C98BA5] hover:bg-white/70 hover:text-[#652940]"
                  >
                    <Icon size={14} />
                  </Link>
                );
              })}
            </div>

            <div className="hidden border-l border-[#D9A0B5]/50 pl-4 2xl:block">
              <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#B76E79]">
                Luxury Beauty Experience
              </p>
              <p className="mt-1 text-[12px] font-semibold text-[#652940]">
                Makeup Artistry & Elegance
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen((previous) => !previous)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D9A0B5]/60 bg-white/35 text-[#783A54] backdrop-blur-xl transition duration-300 hover:bg-white/70 xl:hidden"
          >
            {open ? (
              <HiX className="text-[25px]" />
            ) : (
              <HiOutlineMenuAlt3 className="text-[25px]" />
            )}
          </button>
        </div>

        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out xl:hidden ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
          aria-hidden={!open}
          inert={!open}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="border-t border-[#D9A0B5]/35 bg-[#FFF5F8]/65 px-4 pb-5 pt-4 backdrop-blur-2xl sm:px-6">
              <div className="mb-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B76E79]">
                  Meenakshi Dutt Makeovers
                </p>
                <h2 className="mt-2 text-xl font-bold tracking-tight text-[#652940] sm:text-2xl">
                  Timeless Beauty, Effortless Elegance
                </h2>
                <p className="mt-2 max-w-md text-[13px] leading-6 text-[#89566B]">
                  Professional makeup artistry, bridal beauty, and luxury
                  makeover experiences crafted with sophistication and care.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    tabIndex={open ? 0 : -1}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between rounded-xl border border-[#D9A0B5]/35 bg-white/30 px-4 py-3.5 text-sm font-semibold text-[#754158] transition duration-300 hover:border-[#D9A0B5]/70 hover:bg-white/65"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[10px] font-bold tracking-wider text-[#B76E79]">
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

              <div className="mt-4 flex items-center justify-between border-t border-[#D9A0B5]/35 pt-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#B76E79]">
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
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9A0B5]/50 bg-white/35 text-[#89506A] transition duration-300 hover:bg-white/75 hover:text-[#652940]"
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
      </nav>
    </header>
  );
}