"use client"

import Image from "next/image"
import rude from "../../public/kitty/rude.gif"
import angry from "../../public/kitty/angry.gif"
import love from "../../public/kitty/love.gif"
import bad from "../../public/kitty/bad.gif"
import { comic_neue } from "../fonts"
import { useRouter } from "next/navigation"

export default function rudie() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    
    return (
        <div className="flex flex-col gap-6 items-center mt-24 lg:mt-12">
            <Image src={rude} alt="rudie" className="size-2/3 lg:size-1/6"/>
            <Image src={bad} alt="bad bad" className="size-1/3 mt-24 lg:size-1/12 lg:mt-12"/>
            <button className="bg-gray-500 rounded-lg w-36 flex mt-4" onClick={() => router.push("/")}>
                <span className={`${comic_neue.className} text-xl text-white`}>
                    Say yes SILLY
                </span>
                <Image src={angry} alt="Cute button" className="size-20"/>
            </button>

        <div className="flex flex-row gap-1 align-middle items-center mt-6">
            <span className={`${comic_neue.className} text-lg`}>
                MADE WITH LOVE 💖
            </span>
            <Image src={love} alt="love" className="size-8"/> 
            <span className={`${comic_neue.className} text-lg`}>
                BY SAMIR
            </span>
        </div>
        </div>
    )
}