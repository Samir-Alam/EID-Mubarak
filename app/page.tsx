"use client"

import Image from "next/image";
import kitty from "../public/kitty/pwssss.gif"
import cry from "../public/kitty/cry.gif"
import cry2 from "../public/kitty/cry2.gif"
import pws from "../public/kitty/pws.gif"
import moneyKitty from "../public/kitty/moneyKitty.gif"
import noKitty from "../public/kitty/no.gif"
import eidMubarak from '../public/eid-mubarak.gif'
import { useState } from "react";
import { comic_neue } from "./fonts";
import { useRouter } from "next/navigation";


export default function Home() {

  const [count, setCount] = useState(0);
  const [buttonWidth, setButtonWidth] = useState(150);
  const [buttonHeight, setButtonHeight] = useState(75);
  const [yesButtonHeight, setYesButtonHeight] = useState(75);
  const [yesButtonWidth, setYesButtonWidth] = useState(150);
  
  const pls = [
    {word: "NO", img: kitty}, 
    {word: "PLS", img: pws}, 
    {word: "PWSSS...", img:cry},
    {word: "PWSSSSS...", img:cry2},
    {word: "PWSSSSSSS...", img:cry2},
    {word: "PWSSSSSSS...", img:cry2}
  ];

  const router = useRouter()

  const handleClick = () => {
    setCount(count+1);
    if (count === 3) {
      router.push("/rudie");
    }
    setButtonHeight(buttonHeight - 7.5);
    setButtonWidth(buttonWidth - 15);
    setYesButtonHeight(yesButtonHeight + 7.5);
    setYesButtonWidth(yesButtonWidth + 15)
    console.log(count);
    
  }
  
  return (
    <div className="flex items-center flex-col max-h-full py-6 overflow-hidden">
      <div className="font-bold font-sans text-center ">
        <Image className="size-48 lg:size-40 bg-transparent" priority src={eidMubarak} alt="cute kitty"/>
      </div>

      <div className="flex flex-col gap-8">
        <div>
          {/* <span>{pls[count].word}</span> */}
          <Image className="size-48 lg:size-40 bg-transparent mt-4" src={pls[count].img} alt="cute kitty"/>
        </div>
        <span className={`${comic_neue.className} text-xl`}>WILL YOU GIVE ME EIDI ?</span>  
      </div>


      <div className="btns flex gap-4 mt-10 w-full h-60 justify-center relative">
        <div>

        <button className="bg-green-600 py-2 rounded-lg text-center flex flex-col items-center h-auto" onClick={() => {router.push('/yay');}} style={{ width: `${yesButtonWidth}px`, height: `${yesButtonHeight}`}}>
          <span className={`${comic_neue.className} text-xl text-white min-h-min min-w-min`}>
            YES
          </span>
            <Image className="size-auto bg-transparent" src={moneyKitty} alt="cute kitty"/>
          </button>
        </div>

        <div>

        <button className="bg-red-600 py-2 w-[100px] rounded-lg flex flex-col items-center" onClick={handleClick} style={{ width: `${buttonWidth}px`, height: `${buttonHeight}`}}>
          <span className={`${comic_neue.className} text-xl text-white flex`}>
            {pls[count].word}
          </span>
          <Image className="size-full bg-transparent" src={noKitty} alt="cute kitty"/>
        </button>
        </div>
      </div>
    </div>
  );
}
