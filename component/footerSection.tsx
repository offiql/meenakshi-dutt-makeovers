"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "@/assests/logo.png";
import Link from "next/link";

export default function FooterSection() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      link: "https://www.facebook.com/profile.php?id=61586415744187&ref=PROFILE_EDIT_xav_ig_profile_page_web#",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/bling_by_gunjan",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Bridal Makeup",
    "Celebrity Makeup",
    "Luxury Hair Studio",
    "Skin & Facials",
    "Nail Extensions",
    "Spa & Wellness",
  ];

  return (
    <footer className="relative isolate overflow-hidden bg-[#351E2B] text-white">
      <div className="pointer-events-none absolute -left-40 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-[#A95778]/25 blur-[110px]" />

      <div className="pointer-events-none absolute -bottom-48 right-[-120px] -z-10 h-[520px] w-[520px] rounded-full bg-[#B88964]/20 blur-[120px]" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#F2C6D6_0.7px,transparent_0.7px)] bg-[size:18px_18px] opacity-[0.08]" />

      <div className="relative mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-8">
        <div className="border-b border-white/10 py-12 sm:py-16 lg:py-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.9fr_1.05fr] lg:gap-8 xl:gap-14">
            <div>
              <Link
                href="#home"
                aria-label="Meenakshi Dutt Makeovers home"
                className="inline-flex items-center gap-3.5"
              >
                <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center overflow-hidden rounded-[18px] border border-[#F2C6D6]/40 bg-white p-1 shadow-[0_10px_30px_rgba(0,0,0,0.15)] sm:h-[60px] sm:w-[60px]">
                  <img
                    src={logo.src}
                    alt="Meenakshi Dutt Makeovers logo"
                    className="h-full w-full rounded-[13px] object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <h2 className="bg-gradient-to-r from-white via-[#F5DDE6] to-[#D9A0B5] bg-clip-text text-[1.35rem] font-black leading-tight tracking-[-0.055em] text-transparent sm:text-[1.65rem]">
                    Meenakshi Dutt
                  </h2>
                  <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.32em] text-[#E8B8CB] sm:text-[9px]">
                    Makeovers - Dehradun
                  </p>
                </div>
              </Link>

              <p className="mt-6 max-w-[390px] text-[12px] leading-[2] text-white/65 sm:text-[13px] sm:leading-[2.1]">
                Where beauty meets artistry and timeless elegance. Discover
                personalized makeup and beauty experiences designed to
                celebrate your individuality.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.name}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit us on ${item.name}`}
                      className="group flex h-11 w-11 items-center justify-center rounded-[15px] border border-white/15 bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 hover:border-[#F2C6D6]/50 hover:bg-gradient-to-br hover:from-[#A95778] hover:to-[#B88964] hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] sm:h-12 sm:w-12"
                    >
                      <Icon className="text-[14px] text-white/80 transition-colors group-hover:text-white" />
                    </a>
                  );
                })}
              </div>

              <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#F2C6D6]/20 bg-white/[0.05] px-3 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E8B8CB]" />
                <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#F5DDE6]">
                  Beauty, Made Personal
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-[13px] font-black tracking-wide text-white sm:text-[14px]">
                Quick Links
              </h3>

              <div className="mt-5 h-px w-9 bg-gradient-to-r from-[#D9A0B5] to-[#B88964]" />

              <div className="mt-6 space-y-3.5">
                {quickLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex w-fit items-center text-[12px] font-medium text-white/65 transition-colors duration-300 hover:text-[#F2C6D6] sm:text-[13px]"
                  >
                    <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[#A95778] transition-all duration-300 group-hover:w-4 group-hover:bg-[#F2C6D6]" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[13px] font-black tracking-wide text-white sm:text-[14px]">
                Our Services
              </h3>

              <div className="mt-5 h-px w-9 bg-gradient-to-r from-[#D9A0B5] to-[#B88964]" />

              <div className="mt-6 space-y-3.5">
                {services.map((item) => (
                  <Link
                    key={item}
                    href="#services"
                    className="group flex w-fit items-center text-[12px] font-medium text-white/65 transition-colors duration-300 hover:text-[#F2C6D6] sm:text-[13px]"
                  >
                    <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[#A95778] transition-all duration-300 group-hover:w-4 group-hover:bg-[#F2C6D6]" />
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div id="contact" className="scroll-mt-24">
              <h3 className="text-[13px] font-black tracking-wide text-white sm:text-[14px]">
                Contact & Location
              </h3>

              <div className="mt-5 h-px w-9 bg-gradient-to-r from-[#D9A0B5] to-[#B88964]" />

              <div className="mt-6 space-y-3">
                <a
                  href="tel:+918272082489"
                  className="group flex items-start gap-3 rounded-[20px] border border-white/10 bg-white/[0.045] p-3.5 transition-all duration-300 hover:border-[#F2C6D6]/30 hover:bg-white/[0.08] sm:p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-gradient-to-br from-[#A95778] to-[#B88964] shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
                    <FaPhoneAlt className="text-[12px] text-white" />
                  </div>

                  <div className="min-w-0 pt-0.5">
                    <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#E8B8CB]">
                      Call Us
                    </p>
                    <p className="mt-1.5 text-[12px] font-bold text-white transition-colors group-hover:text-[#F5DDE6] sm:text-[13px]">
                      +91-82720-82489
                    </p>
                    <p className="mt-1 text-[10px] text-white/45">
                      Get in touch for appointments
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Dehradun%2C%20Uttarakhand%2C%20India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-[20px] border border-white/10 bg-white/[0.045] p-3.5 transition-all duration-300 hover:border-[#F2C6D6]/30 hover:bg-white/[0.08] sm:p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-gradient-to-br from-[#A95778] to-[#B88964] shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
                    <FaMapMarkerAlt className="text-[13px] text-white" />
                  </div>

                  <div className="min-w-0 pt-0.5">
                    <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#E8B8CB]">
                      Visit Our Studio
                    </p>
                    <p className="mt-1.5 text-[12px] font-bold leading-relaxed text-white sm:text-[13px]">
                      Dehradun, Uttarakhand
                    </p>
                    <p className="mt-1 text-[10px] text-white/45 transition-colors group-hover:text-[#F2C6D6]">
                      Get directions ↗
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-[10px] leading-relaxed text-white/50 sm:text-[11px]">
            © {new Date().getFullYear()} Meenakshi Dutt Makeovers. All rights
            reserved.
          </p>

          <p className="text-[9px] font-medium tracking-wide text-[#E8B8CB]/75 sm:text-[10px]">
            Crafted with elegance. Designed for beauty.
          </p>
        </div>
      </div>
    </footer>
  );
}