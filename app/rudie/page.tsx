"use client"

import Image from "next/image"
import rude from "../../public/kitty/rude.gif"
import angry from "../../public/kitty/angry.gif"
import { comic_neue } from "../fonts"
import { useRouter } from "next/navigation"

export default function rudie() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    
    return (
        <div className="flex flex-col gap-3 items-center mt-16">
            <Image src={rude} alt="" className="size-2/3"/>
            <button className="bg-gray-500 rounded-lg w-36 flex mt-48" onClick={() => router.push("/")}>
                <span className={`${comic_neue.className} text-xl text-white`}>
                    Say yes SILLY
                </span>
                <Image src={angry} alt="Cute button" className="size-20"/>
            </button>
        </div>
    )
}