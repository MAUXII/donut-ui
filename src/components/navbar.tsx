"use client"
 import Image from "next/image"
import * as React from "react"
import Link from "next/link"
 
import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from "./ui/mode-toggle"
import { IoMenu } from "react-icons/io5"


export const Navbar = () =>{
    return(
        <nav className="fixed justify-center min-h-[64px] backdrop-blur-2xl bg-white dark:bg-black top-0 w-full py-3 px-6 lg:px-8 z-[120] items-center flex left-0 ring-[0.25px] ring-black/20 dark:ring-white/20">
            <div className="flex justify-between max-w-[1280px] w-full">
            <div className="flex items-center justify-center gap-6">
                <Link href="/">
                <Image width={80} height={80} alt="logo" src="/donut.svg" className="w-[45px]"/>
                </Link>
                
        </div>
        <div className="items-center sm:flex hidden ">
        <Link href="/components" className="w-fit">
            <span className="group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-normal transition-colors  hover:text-black/80  focus:text-black/80 focus:outline-none disabled:pointer-events-none disabled:opacity-50    dark:hover:text-white/80  dark:focus:text-white/80">Docs</span>
        </Link>
        <Link href="/components" className="w-fit">
            <span className="group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-normal transition-colors  hover:text-black/80  focus:text-black/80 focus:outline-none disabled:pointer-events-none disabled:opacity-50    dark:hover:text-white/80  dark:focus:text-white/80">Components</span>
        </Link>
        <Link href="/components" className="w-fit">
            <span className="group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-normal transition-colors  hover:text-neutral-900  focus:text-neutral-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50    dark:hover:text-white/80  dark:focus:text-white/80">Prebuilds</span>
        </Link>
        <Link href="/components" className="w-fit">
            <span className="group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-normal transition-colors  hover:text-neutral-900  focus:text-neutral-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50    dark:hover:text-white/80  dark:focus:text-white/80">Github</span>
        </Link>
        </div>
        <Sheet>
  <SheetTrigger className="sm:hidden flex"><IoMenu className="text-xl text-black dark:text-white" /></SheetTrigger>
  <SheetContent side="top" className="z-[900] bg-white dark:bg-black/70 w-full backdrop-blur-xl sm:w-auto border-0 ring-[0.25px] ring-gray-600">
  <div className="flex w-full z-[30] justify-center flex-col  md:h-screen ">
  <Link href="/components" className="w-fit">
            <span className="group inline-flex h-10 items-center justify-center rounded-md py-2 text-sm font-normal transition-colors  hover:text-black/80  focus:text-black/80 focus:outline-none disabled:pointer-events-none disabled:opacity-50    dark:hover:text-white/80  dark:focus:text-white/80">Docs</span>
        </Link>
        <Link href="/components" className="w-fit">
            <span className="group inline-flex h-10 items-center justify-center rounded-md py-2 text-sm font-normal transition-colors  hover:text-black/80  focus:text-black/80 focus:outline-none disabled:pointer-events-none disabled:opacity-50    dark:hover:text-white/80  dark:focus:text-white/80">Components</span>
        </Link>
        <Link href="/components" className="w-fit">
            <span className="group inline-flex h-10 items-center justify-center rounded-md py-2 text-sm font-normal transition-colors  hover:text-neutral-900  focus:text-neutral-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50    dark:hover:text-white/80  dark:focus:text-white/80">Prebuilds</span>
        </Link>
        <Link href="/components" className="w-fit">
            <span className="group inline-flex h-10 items-center justify-center rounded-md py-2 text-sm font-normal transition-colors  hover:text-neutral-900  focus:text-neutral-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50    dark:hover:text-white/80  dark:focus:text-white/80">Github</span>
        </Link>
</div>
<ModeToggle className="sm:hidden flex" />     
  </SheetContent>
</Sheet>

        <ModeToggle className="sm:flex hidden" />
        </div>
        </nav>
        
    )
}
