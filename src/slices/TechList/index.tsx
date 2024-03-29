"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React, { useEffect, useRef, useState } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

gsap.registerPlugin(ScrollTrigger);

export type TechListProps = SliceComponentProps<Content.TechListSlice>;

const TechList = ({ slice }: TechListProps): JSX.Element => {
    const component = useRef(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Sunucuda ve istemcide aynı rastgele sıralamayı kullanmak için bir fonksiyon
        const randomizeItems = () => {
            const shuffledItems = slice.items.sort(() => 0.5 - Math.random());
            return shuffledItems.slice(0, 15); // İlk 15 öğeyi al
        };

        setItems(randomizeItems()); // İlk renderda rastgele öğeleri ayarla
    }, []);

    useEffect(() => {
        // @ts-ignore
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    pin: true,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 4,
                },
            });

            tl.fromTo(
                ".tech-row",
                {
                    x: (index) => index % 2 === 0 ? gsap.utils.random(600, 400) : gsap.utils.random(-600, -400),
                },
                {
                    x: (index) => index % 2 === 0 ? gsap.utils.random(-600, -400) : gsap.utils.random(600, 400),
                    ease: "power1.inOut",
                },
            );
        }, component.current);
        return () => ctx.revert();
    }, []);

    return (
        <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}
                 className="wrapper overflow-hidden" ref={component}>
            <Bounded as="div">
                <Heading size="xl" className="mb-8" as="h2">{slice.primary.title}</Heading>
            </Bounded>

            {/* Rastgele öğeleri göster */}
            <div className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700 opacity-20">
                {items.slice(0,15).map(({tech_color, tech_name}, index) => (
                    <React.Fragment key={index}>
                        <span className={"tech-item text-6xl font-extrabold uppercase tracking-tighter"}
                              style={{color: tech_color }}>{tech_name}</span>
                        <span className="text-3xl"><MdCircle/></span>
                    </React.Fragment>
                ))}
            </div>
            <div className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700 opacity-20">
                {items.slice(7,15).map(({tech_color, tech_name}, index) => (
                    <React.Fragment key={index}>
                        <span className={"tech-item text-6xl font-extrabold uppercase tracking-tighter"}
                              style={{color: tech_color }}>{tech_name}</span>
                        <span className="text-3xl"><MdCircle/></span>
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default TechList;
