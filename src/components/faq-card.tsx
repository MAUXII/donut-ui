import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  
  import { FaQuestion } from "react-icons/fa6";


type FaqCardProps = {
    
        title: string,
        subtitle: string
        text: string,
 
   

}

export const FaqCard = (card: FaqCardProps) =>{
    return(
        <HoverCard>
  <HoverCardTrigger>
    <div className="flex w-5 h-5 cursor-pointer rounded-full items-center justify-center text-xs shadow-sm shadow-red-500/100 ring-1 ring-red-500 text-red-500">
        <FaQuestion/>
    </div>
  </HoverCardTrigger>
  <HoverCardContent className="flex flex-col gap-1 bg-white/20 dark:bg-black/20 backdrop-blur-xl">
    <div className="flex flex-col gap-0">
    <h2 className="text-black dark:text-white text-xl font-semibold">{card.title}</h2>
    <h3 className="text-red-500 dark:text-red-500 text-base -mt-[5px] font-light">{card.subtitle}</h3>
    </div>
    <p className="text-gray-600/90 font-normal text-sm dark:text-gray-300/90">{card.text}</p>
  </HoverCardContent>
</HoverCard>

    )
}