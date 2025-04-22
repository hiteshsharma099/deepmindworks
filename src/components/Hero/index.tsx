"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap, Power4 } from "gsap";

gsap.defaults({ ease: Power4.easeInOut }); // Set global defaults once

const Hero = () => {
  const lineRef = useRef<HTMLDivElement[]>([]); // Type-safe refs

  useEffect(() => {
    const lines = lineRef.current.filter(Boolean);
    if (!lines.length) return;
  
    const time = 1.9;
    const y = 100;
  
    const tl = gsap.timeline({
      onComplete: () => {
        tl.restart(false, false);
      },
    });
  
    tl.add(
      gsap.fromTo(
        lines,
        { opacity: 0, y },
        { opacity: 1, y: 0, stagger: time }
      ),
      2
    ).add(
      gsap.to(lines, {
        delay: time,
        opacity: 0,
        y: -y,
        stagger: time,
      }),
      0.2
    );
  
    return () => {
      tl.kill(); // ✅ clean up without returning the timeline
    };
  }, []);
  

  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                We specialize in crafting 
                High-quality:{" "}
                <div className="inline-flex flex-col h-[43px] w-[300px] relative">
                  {[
                    "Websites",
                    "Web Apps",
                    "Mobile Apps",
                    "E-Commerce",
                    "Digital Products",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="line absolute opacity-0 text-primary"
                      ref={(el) => {
                        if (el) lineRef.current[i] = el;
                      }}
                    >
                      {text}
                    </div>
                  ))}
                </div>
              </h1>
              <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                Deepmind Works: Elevating IT Services to New Heights. Experience
                our cutting-edge solutions crafted with precision and passion,
                propelling your business forward into the future.
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="#"
                  className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  🔥 Free Quote
                </Link>
                <Link
                  href="#"
                  className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                >
                  ⏭️ Start Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keep your SVG decorations here as you had them originally... */}
      {/* I trimmed them from this code for clarity, but you can paste them right back in. */}
    </section>
  );
};

export default Hero;
