"use client"

import Image from "next/image";
import kitty from "../public/kitty/pwssss.gif"
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
  
  const router = useRouter()

  const handleClick = () => {
    setCount(count+1);
    if (count === 3) {
      router.push("/rudie");
    }
    setButtonHeight(buttonHeight + 10);
    setButtonWidth(buttonWidth + 20);
    setYesButtonHeight(yesButtonHeight - 10);
    setYesButtonWidth(yesButtonWidth - 20)
    console.log(count);
    
  }
  
  return (
    <div className="flex items-center flex-col max-h-full py-10 overflow-hidden">
      <div className="font-bold font-sans text-center "><Image className="size-48 lg:size-40 bg-transparent" priority src={eidMubarak} alt="cute kitty"/></div>

      <div className="flex flex-col gap-8">
        <Image className="size-48 lg:size-40 bg-transparent mt-4" src={kitty} alt="cute kitty"/>
        <span className={`${comic_neue.className} text-xl`}>WILL YOU GIVE ME EIDI ?</span>  
      </div>


      <div className="btns flex gap-4 mt-10 w-full h-60 justify-center relative">
        <div>

        <button className="bg-green-600 py-2 rounded-lg text-center flex flex-col items-center h-auto" onClick={() => {router.push('/yay');}} style={{ width: `${yesButtonWidth}px`, height: `${yesButtonHeight}`}}>
          <span className={`${comic_neue.className} text-xl text-white`}>
            YES
          </span>
            <Image className="size-auto bg-transparent" src={moneyKitty} alt="cute kitty"/>
          </button>
        </div>

        <div>

        <button className="bg-red-600 py-2 w-[100px] rounded-lg flex flex-col items-center" onClick={handleClick} style={{ width: `${buttonWidth}px`, height: `${buttonHeight}`}}>
          <span className={`${comic_neue.className} text-xl text-white`}>
            NO
          </span>
          <Image className="size-full bg-transparent" src={noKitty} alt="cute kitty"/>
        </button>
        </div>
      </div>
    </div>
  );
}
