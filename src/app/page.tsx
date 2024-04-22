"use client"

import { Star } from "@/components/giveastar";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { IoRocketOutline } from "react-icons/io5";

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/lamp";
import { Card } from "@/components/card";

import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { Footer } from "@/components/footer";
import { GithubIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaqCard } from "@/components/faq-card";

export default function Home() {

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
 
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div className="relative items-center h-full justify-center dark:bg-black bg-[#f8f8f8]">
    <main className="relative flex flex-col pb-[300px] items-center h-full  px-6 lg:px-8 justify-center dark:bg-black bg-[#f8f8f8]">
      <Navbar />
      <Star />
      <section className="w-full flex justify-center z-[100]  items-center min-h-screen">
        <div className="flex flex-col mt-[128px] gap-6 w-full max-w-[1280px]">

          <div className=" justify-center items-center flex flex-col gap-3  text-center">
            <p className="text-[54px] leading-none sm:text-6xl md:text-8xl font-semibold ">Create Anything</p> 
            <div className="w-full flex xl:flex-row flex-col text-center lg:justify-center lg:items-center gap-x-6 gap-y-2 ">
              <p className="text-[54px] leading-none sm:text-6xl md:text-8xl  font-semibold lg:whitespace-nowrap ">in minutes</p>
              <div className="flex  gap-x-6 gap-y-2  justify-center">
              <p className="text-[54px] leading-none sm:text-6xl md:text-8xl font-semibold">with</p>
              <div className="flex z-[99] gap-2 items-center justify-center">
                <p className="font-semibold text-[54px] leading-none sm:text-6xl md:text-8xl bg-gradient-to-b from-black to-red-500/70 dark:from-white dark:to-red-200 bg-clip-text text-transparent">d</p>
                      <Image width={80} height={80} alt="logo" src="/donut.svg" className="md:mt-[15px] sm:mt-[10px] mt-[10px] max-w-[5.5rem] w-[2.5rem] sm:w-[3.5rem] md:w-[5.5rem] "/>
                      <div className="flex-row flex gap-1 items-end justify-center h-fit">
                        <p className="font-semibold text-[54px] leading-none sm:text-6xl md:text-8xl bg-gradient-to-b from-black to-red-500/70 dark:from-white dark:to-red-200 bg-clip-text text-transparent">nut</p>
                      <p className="font-semibold text-lg sm:text-xl md:text-2xl bg-gradient-to-b from-black to-red-500/70 dark:from-white dark:to-red-200 bg-clip-text text-transparent">/ui</p>
                </div>
                  </div>
            </div>
            </div>
             </div>
             <div className="flex gap-4 items-center justify-center my-4">
             <Link href="/components" className="z-[90] py-4 px-8 self-center bg-red-500/80 hover:bg-red-600/100 text-white backdrop-blur-lg rounded-lg ring-1 ring-black/10 dark:ring-white/10 text-xs cursor-pointer  transition-colors items-center justify-center text-center w-fit flex gap-3 whitespace-nowrap ">See Components <IoRocketOutline className=" text-base"/></Link>
             <Link href="/components" className="z-[90] py-4 px-8 self-center  backdrop-blur-lg rounded-lg ring-1 ring-black/10 dark:ring-white/10 text-xs cursor-pointer hover:text-black/70 dark:hover:text-white/70 transition-colors items-center justify-center text-center w-fit flex gap-3 whitespace-nowrap ">Github <FaGithub className=" text-base"/></Link>
             </div>
             <div className="relative mt-[-50px]">
              <div className="w-full bg-gradient-to-b from-transparent to-white dark:to-black bg-contain h-full bg-center absolute "></div>
             <div className="w-full bg-contain bg-no-repeat aspect-video bg-bottom " style={{backgroundImage: "url('/hero.svg')"}}></div>
             </div>

        </div>
      </section>
      <div className="w-full hidden flex z-[100] h-screen pt-[108px]  items-center justify-center flex-col">
      <LampContainer>
      <motion.h1
        initial={{ scale: 0.5, y: 0 }}
        whileInView={{ scale: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col justify-center items-center"
      >
         <div className="flex z-[99] gap-2 items-center justify-center">
  <p className="font-semibold text-8xl bg-gradient-to-b from-black to-red-500/70 dark:from-white dark:to-red-200 bg-clip-text text-transparent">d</p>
  <Image width={80} height={80} alt="logo" src="/donut.svg" className="mt-[15px] max-w-[5.5rem] w-[5.5rem] "/>
  <div className="flex-row flex gap-1 items-end justify-center h-fit">
    <p className="font-semibold text-8xl bg-gradient-to-b from-black to-red-500/70 dark:from-white dark:to-red-200 bg-clip-text text-transparent">nut</p>
    <p className="font-semibold text-2xl bg-gradient-to-b from-black to-red-500/70 dark:from-white dark:to-red-200 bg-clip-text text-transparent">/ui</p>
  </div>
</div>
<p className="text-center max-w-[520px] mt-1 text-[13px] text-gray-600/90 font-light dark:text-gray-300/90 z-[90]">DonutUI offers a diverse array of free Tailwind CSS components for your projects. Whether youre creating websites, dashboards, stores, or more.</p>
<Link href="/components" className="z-[90] mt-6 py-4 px-8 self-center bg-transparent backdrop-blur-lg rounded-lg ring-1 ring-black/10 dark:ring-white/10 text-xs cursor-pointer hover:text-black/70 dark:hover:text-white/70 transition-colors items-center justify-center text-center w-fit flex gap-3 whitespace-nowrap ">See Components <IoRocketOutline className=" text-base"/></Link>
      </motion.h1>
    </LampContainer>
      


</div>
<section className="w-full max-w-[1280px] mt-[128px]  ">
  <div className="flex flex-row gap-4 items-center">
  <h2 className="text-black dark:text-white text-2xl font-medium">Components</h2>
  <FaqCard title="Components" subtitle="Reusable UI elements" text={`"Components" are modular blocks that constitute the user interface of your applications. From buttons to navigation bars, they help developers create visually appealing and functional interfaces with ease.`}/>
  </div>
        <div className="mt-8 grid md:gap-5 gap-4 grid-cols-[repeat(auto-fit,minmax(256px,1fr))]"> 
          <Card emoji="🎇" title="Sidebar" number="2" link="/" />
          <Card emoji="🎡" title="Sidebar" number="2" link="/" />
          <Card emoji="🎪" title="Sidebar" number="2" link="/" />
          <Card emoji="🎈" title="Sidebar" number="2" link="/" />
        </div>
</section >

<section className="w-full mt-32 max-w-[1280px]  ">
<div className="flex flex-row gap-4 items-center">
  <h2 className="text-black dark:text-white text-2xl font-medium">Prebuilds</h2>
  <FaqCard title="Prebuilds" subtitle="Ready-made templates" text={`"Pre-builds" are complete and pre-designed templates, such as dashboards and note-taking apps. They offer ready-made solutions for common application requirements, accelerating development with a solid foundation.`}/>
  </div>
        <div className="mt-8 grid md:gap-5 gap-4 grid-cols-[repeat(auto-fit,minmax(310px,1fr))]"> 
          <Card emoji="🍱" title="Sidebar" number="2" link="/" />
          <Card emoji="🎓" title="Sidebar" number="2" link="/" />
          <Card emoji="🪁" title="Sidebar" number="2" link="/" />
          
    
        </div>
</section >

<section className="h-[100vh] hidden mt-64 bg-black w-full  rounded-md relative pt-40 overflow-clip" ref={ref}>
<GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
</section>
    </main>

    <Footer/>
    </div>
  );
}
