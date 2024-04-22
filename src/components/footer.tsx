"use client"
 import Image from "next/image"
import * as React from "react"
import Link from "next/link"
import { SocialItem } from "./socialitem"
import { FaInstagram } from "react-icons/fa"
import { SlSocialLinkedin } from "react-icons/sl"
import { RxDiscordLogo } from "react-icons/rx"
import { FiGithub } from "react-icons/fi"

export const Footer = () =>{
    return(
        <footer className="absolute px-6 lg:px-8  backdrop-blur-2xl justify-center bg-white/10 dark:bg-black/10 bottom-0  w-full z-[120] flex left-0 right-0 ring-1 ring-black/20 dark:ring-white/20">
            <div className="py-8 flex-wrap gap-y-6   flex justify-between w-full items-end max-w-[1280px]">
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
            <Link href="/">
                <Image width={80} height={80} alt="logo" src="/donut.svg" className="w-[45px]"/>
                </Link>
                <p className="text-xl  font-semibold dark:text-white text-black">donut/ui - 2024</p>
                </div>
                <p className="text-gray-800/90 font-normal text-sm w-full max-w-[404.08px] dark:text-gray-300/90">Free open source Tailwind CSS components for marketing and eCommerce websites, as well as application UI.</p>
                <div className="flex text-gray-500 mt-2  gap-3 items-center ">
                <SocialItem icone={<FaInstagram />} link="https://www.instagram.com/mauxxll" tool="Insta"></SocialItem>
                         <SocialItem icone={<SlSocialLinkedin />} link="https://www.linkedin.com/in/mauricio-leandro-309759253/" tool="LinkedIn"></SocialItem>
                         <SocialItem icone={<RxDiscordLogo />} link="https://discord.com/users/1060434214622871572" tool="Discord"></SocialItem>
                         <SocialItem icone={<FiGithub />} link="https://www.github.com/MAUXII" tool="Github"></SocialItem>
                </div>
            </div>
        <div>
            <p className="text-sm">Created by <a className="font-semibold hover:underline" href="https://www.linkedin.com/in/mauricio-leandro-309759253/" target="_blank">Mauricio Leandro</a></p>
        </div>
        </div>
        </footer>
        
    )
}
