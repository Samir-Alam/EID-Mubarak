import Image from "next/image"
import hug2 from "../../public/kitty/hug2.gif"
import thank from "../../public/ty.gif"
import cutie from "../../public/cutie.gif"
import dance from "../../public/kitty/dance.gif"

export default function yay () {
    return (
        <div className="flex flex-col gap-3 items-center">
            <div className="flex flex-row align-middle items-center justify-center">
                <Image src={thank} alt="thank you" className="size-36"/>
                <Image src={cutie} alt="cutie patootie" className="size-24 "/>
            </div>
            <Image src={hug2} alt="My Cutie Pies"/>
            <button className="bg-gray-500 rounded-lg w-28">
                <span>Let&apos;s go back</span>
                <Image src={dance} alt="Cute button" className="size-20"/>
            </button>
        </div>
    )
}