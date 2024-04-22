import Link from "next/link"

type CardProps ={
        emoji: string,
        title: string,
        number: string,
        link: string,
        
}

export const Card = (card: CardProps) =>{
    return(
        <Link href={card.link}className="relative transition-colors flex w-full  group">
        <div className="flex relative z-[10] dark:bg-black bg-white p-6 py-8 dark:group-hover:bg-[#030303] group-hover:bg-[#f0f0f0] transition-all  rounded-lg w-full flex-col group-hover:-translate-x-3 group-hover:-translate-y-3 ring-1 ring-black/10 dark:ring-white/10 h-full">
            <span className="text-xl font-normal mb-2">{card.emoji}</span>
            <h2 className="text-xl font-medium">{card.title}</h2>
            <p className="dark:text-gray-400/80 text-gray-600/80 font-light text-sm">{card.number} Components</p>
            
        </div>
        <div className="absolute w-full h-full space-x-32    dashed-border">
  <div className=""></div>
</div>
        </Link>
    )
}