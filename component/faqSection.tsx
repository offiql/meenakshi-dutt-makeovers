"use client";

import { useState } from "react";
import faq1 from "@/assests/faq/faq1.jpeg";
import faq2 from "@/assests/faq/faq2.jpeg";
import faq3 from "@/assests/faq/faq3.jpeg";

const faqs = [
  {
    question: "Do you provide bridal makeup services?",
    answer:
      "Yes, we specialize in luxury bridal makeup, including HD makeup, airbrush makeup, engagement looks, destination weddings, and celebrity-inspired bridal transformations. Every look is thoughtfully customized to complement your features and occasion.",
  },
  {
    question: "Do I need an appointment before visiting?",
    answer:
      "We recommend contacting our team before visiting so we can guide you regarding consultations, bridal bookings, and service availability. Booking in advance helps us give you a more personalized experience.",
  },
  {
    question: "Which beauty services are available at the salon?",
    answer:
      "Our services include bridal and celebrity makeup, luxury hair styling, facials, skincare therapies, nail services, spa treatments, and personalized beauty consultations.",
  },
  {
    question: "Do you use premium beauty products?",
    answer:
      "We focus on quality products and carefully selected beauty essentials to create beautiful results and a comfortable client experience. Product selection may vary depending on your service and individual needs.",
  },
  {
    question: "Where is Meenakshi Dutt Makeovers located?",
    answer:
      "Meenakshi Dutt Makeovers is located in Dehradun, Uttarakhand, offering personalized beauty services in an elegant salon environment.",
  },
  {
    question: "Do you offer personalized beauty consultations?",
    answer:
      "Absolutely. We tailor our recommendations to your preferred look, occasion, skin needs, and personal style so your beauty experience feels uniquely yours.",
  },
];

export default function FAQSection() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden bg-[#FFF5F8] py-14 sm:py-18 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-40 -top-32 -z-10 h-[360px] w-[360px] rounded-full bg-[#E8AFC4]/30 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 -z-10 h-[420px] w-[420px] rounded-full bg-[#D9A0B5]/25 blur-[110px]" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#C9859F_0.7px,transparent_0.7px)] bg-[size:18px_18px] opacity-[0.12]" />

      <div className="relative mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 xl:gap-16">
          <div className="lg:sticky lg:top-8">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#E8C4D2] bg-white/80 px-4 py-2.5 shadow-[0_8px_24px_rgba(151,76,105,0.07)] backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9859F] opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A95778]" />
              </span>

              <span className="text-[8px] font-bold uppercase tracking-[0.24em] text-[#96516D] sm:text-[9px]">
                Frequently Asked Questions
              </span>
            </div>

            <h2 className="mt-5 max-w-[650px] text-[2.3rem] font-black leading-[1.02] tracking-[-0.07em] text-[#422633] sm:text-[3.2rem] lg:text-[3.7rem] xl:text-[4.4rem]">
              Everything You
              <span className="mt-2 block bg-gradient-to-r from-[#A95778] via-[#C9859F] to-[#B88964] bg-clip-text pb-2 text-transparent">
                Need To Know
              </span>
            </h2>

            <p className="mt-4 max-w-[500px] text-[12px] leading-[2] text-[#795D69] sm:text-[13px] lg:text-[14px]">
              Have questions before your beauty appointment? Find everything
              you need to know about our services, bridal bookings, and
              personalized beauty experiences.
            </p>

            <div className="relative mt-7 overflow-hidden rounded-[30px] border border-[#E8C4D2] bg-white p-2 shadow-[0_20px_60px_rgba(130,70,94,0.1)] sm:mt-8 sm:rounded-[34px] sm:p-2.5">
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                <div className="group relative overflow-hidden rounded-[22px]">
                  <img
                    src={faq1.src}
                    alt="Beauty and makeup artistry"
                    loading="lazy"
                    className="h-[190px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[245px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#28151F]/45 to-transparent" />
                </div>

                <div className="group relative overflow-hidden rounded-[22px]">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label="Beauty salon experience"
                    className="h-[190px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[245px]"
                  >
                    <source src="/faq_v-1.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#28151F]/45 to-transparent" />
                </div>

                <div className="group relative col-span-2 overflow-hidden rounded-[22px]">
                  <img
                    src={faq3.src}
                    alt="Elegant salon interior"
                    loading="lazy"
                    className="h-[155px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 sm:h-[190px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#28151F]/60 via-transparent to-transparent" />

                  <div className="absolute inset-y-0 left-0 flex max-w-[85%] flex-col justify-center p-4 sm:p-6">
                    <span className="text-[8px] font-semibold uppercase tracking-[0.23em] text-white/80 sm:text-[9px]">
                      Meenakshi Dutt Makeovers
                    </span>
                    <h3 className="mt-2 text-[1.25rem] font-black leading-tight tracking-[-0.04em] text-white sm:text-[1.8rem]">
                      Your Beauty,
                      <span className="block text-[#F5C8D9]">
                        Your Signature.
                      </span>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-4 sm:px-3 sm:pt-5">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#96516D]">
                    Your beauty journey
                  </p>
                  <p className="mt-1 text-[11px] text-[#795D69]">
                    Thoughtful care, personalized for you.
                  </p>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E8C4D2] bg-[#FFF1F6]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 text-[#A95778]"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Bridal Beauty", "Personalized Care", "Premium Experience"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#E8C4D2] bg-white/70 px-3 py-2 text-[9px] font-semibold text-[#96516D] sm:text-[10px]"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="mb-5 flex items-end justify-between gap-3 px-1 sm:mb-6">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#A95778]">
                  We are here to help
                </p>
                <h3 className="mt-1 text-[1.2rem] font-black tracking-[-0.04em] text-[#422633] sm:text-[1.45rem]">
                  Common Questions
                </h3>
              </div>

              <span className="shrink-0 rounded-full border border-[#E8C4D2] bg-white/80 px-3 py-1.5 text-[9px] font-semibold text-[#96516D]">
                {String(faqs.length).padStart(2, "0")} Answers
              </span>
            </div>

            {faqs.map((faq, index) => {
              const isOpen = activeFAQ === index;
              const answerId = `faq-answer-${index}`;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-[23px] border transition-all duration-300 sm:rounded-[26px] ${
                    isOpen
                      ? "border-[#D9A0B5] bg-white shadow-[0_16px_45px_rgba(130,70,94,0.1)]"
                      : "border-[#E8C4D2]/80 bg-white/70 shadow-[0_8px_25px_rgba(130,70,94,0.035)] hover:border-[#D9A0B5] hover:bg-white"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setActiveFAQ(isOpen ? null : index)}
                    className="flex w-full items-center gap-3.5 p-4 text-left sm:gap-4 sm:p-5 lg:p-5"
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] text-[10px] font-black transition-all duration-300 sm:h-11 sm:w-11 sm:rounded-[16px] ${
                        isOpen
                          ? "bg-gradient-to-br from-[#A95778] via-[#C9859F] to-[#B88964] text-white shadow-[0_8px_20px_rgba(169,87,120,0.22)]"
                          : "border border-[#E8C4D2] bg-[#FFF5F8] text-[#A95778]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-[12px] font-bold leading-[1.65] tracking-[-0.015em] transition-colors duration-300 sm:text-[13px] lg:text-[14px] ${
                          isOpen ? "text-[#96516D]" : "text-[#422633]"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-9 sm:w-9 ${
                        isOpen
                          ? "rotate-45 border-[#C9859F] bg-[#A95778] text-white"
                          : "border-[#E8C4D2] bg-[#FFF5F8] text-[#A95778]"
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 5v14M5 12h14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={undefined}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                    inert={!isOpen}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="mx-4 border-t border-[#F0DCE4] pb-5 pt-4 sm:mx-5 sm:pb-6">
                        <p className="text-[11px] leading-[1.95] text-[#795D69] sm:text-[12px] lg:text-[13px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="mt-5 rounded-[24px] border border-[#E8C4D2]/80 bg-gradient-to-r from-[#FBE8EF] via-white to-[#FFF1F6] p-5 sm:p-6">
              <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#A95778]">
                Still have questions?
              </p>
              <h3 className="mt-2 text-[1.1rem] font-black tracking-[-0.04em] text-[#422633] sm:text-[1.3rem]">
                Let’s talk about your beauty goals.
              </h3>
              <p className="mt-2 text-[11px] leading-[1.8] text-[#795D69] sm:text-[12px]">
                Get in touch with our team for service information,
                consultations, and appointment availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}