"use client";
import { useEffect, useRef } from "react";
import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Shapes } from "@/slices/Hero/Shapes";
import Bounded from "@/components/Bounded";
import gsap from "gsap";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      gsap
        .timeline()
        .fromTo(
          ".name-animation",
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,

            ease: "elastic.out(1,0.3)",
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "random" },
          },
        )
        .fromTo(
          ".job-title",
          {
            y: 20,
            opacity: 0,
            scale: 1.2,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scale: 1,
            ease: "elastic.out(1,0.3)",
          },
        );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

    const renderLetters = (name: KeyTextField, key: string) => {
        if (!name) return;
        return name.split("").map((letter, index) => (
            <span
                key={index}
                className={` inline-block `}
            >
      {letter === " " ? "\u00A0" : letter}
    </span>
        ));
    };

  return (
      <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          ref={component}
      >
          <div className="grid grid-cols-12 min-h-[35vh] items-center">

              <div className="lg:col-span-8" data-speed=".2">

                  <h1

                      className="mb-8 text-[clamp(4rem,11vmin,11rem)] font-semibold leading-none tracking-tighter"
                      aria-label={
                          slice.primary.first_name
                      }
                  >
            <span className="block text-slate-100 ">
              {renderLetters(slice.primary.first_name, "first")}
            </span>

                  </h1>


                  <span
                      className="job-title  block bg-gradient-to-tr from-purple-500 via-pink-200 to-purple-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
            {slice.primary.tag_line}
          </span>
                  <p
                      className="description text-slate-200 font-medium mt-6 lg:mt-12">
            {slice.primary.text}
          </p>

              </div>

          </div>
      </Bounded>
  );
};

export default Hero;
