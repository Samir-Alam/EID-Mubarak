"use client"

import Image from "next/image"
import hug2 from "../../public/kitty/hug2.gif"
import thank from "../../public/ty.gif"
import cutie from "../../public/cutie.gif"
import dance from "../../public/kitty/dance.gif"
import { comic_neue } from "../fonts"
import { useRouter } from "next/navigation"

export default function yay () {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    return (
        <div className="flex flex-col gap-3 items-center mt-16">
            <div className="flex flex-row align-middle items-center justify-center">
                <Image src={thank} alt="thank you" className="size-36"/>
                <Image src={cutie} alt="cutie patootie" className="size-24 "/>
            </div>
            <Image src={hug2} alt="My Cutie Pies" className="size-1/2 lg:size-1/6"/>
            <button className="bg-gray-500 rounded-lg w-36 flex mt-48 lg:mt-36" onClick={() => router.push("/")}>
                <span className={`${comic_neue.className} text-xl text-white`}>
                    Let&apos;s go back
                </span>
                <Image src={dance} alt="Cute button" className="size-20"/>
            </button>
        </div>
    )
}