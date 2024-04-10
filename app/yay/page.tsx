"use client"

import Image from "next/image"
import hug2 from "../../public/kitty/hug2.gif"
import thank from "../../public/ty.gif"
import cutie from "../../public/cutie.gif"
import dance from "../../public/kitty/dance.gif"
import love from "../../public/kitty/love.gif"
import { comic_neue } from "../fonts"
import { useRouter } from "next/navigation"

export default function yay () {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    return (
        <div className="flex flex-col gap-3 items-center mt-16">
            <div className="flex flex-row align-middle items-center justify-center">
                <Image src={thank} alt="thank you" className="size-36" unoptimized/>
                <Image src={cutie} alt="cutie patootie" className="size-24 " unoptimized/>
            </div>
            <Image src={hug2} alt="My Cutie Pies" className="size-3/4 lg:size-1/6" unoptimized/>
            <button className="bg-gray-500 rounded-lg w-36 flex mt-32 lg:mt-36" onClick={() => router.push("/")}>
                <span className={`${comic_neue.className} text-xl text-white`}>
                    Let&apos;s go back
                </span>
                <Image src={dance} alt="Cute button" className="size-20" unoptimized/>
            </button>
        <div className="flex flex-row gap-1 align-middle items-center mt-6">
            <span className={`${comic_neue.className} text-lg`}>
                MADE WITH LOVE 💖
            </span>
            <Image src={love} alt="love" className="size-8" unoptimized/> 
            <span className={`${comic_neue.className} text-lg`}>
                BY SAMIR
            </span>
        </div>
        </div>
    )
}