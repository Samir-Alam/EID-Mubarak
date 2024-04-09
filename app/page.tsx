"use client"; 

import Image from "next/image";
import kitty from "../public/kitty/pwssss.gif"
import moneyKitty from "../public/kitty/moneyKitty.gif"
import noKitty from "../public/kitty/no.gif"
import eidMubarak from '../public/eid-mubarak.gif'
import { useState } from "react";

export default function Home() {

  const [count, setCount] = useState(0);
  const [buttonWidth, setButtonWidth] = useState(100);
  const [buttonHeight, setButtonHeight] = useState(50)

  const handleClick = () => {
    setCount(count+1);

    console.log(count);
    
  }
  
  return (
    <div className="flex items-center flex-col max-h-full bg-yellow-500 py-10">
      <div className="font-bold font-sans text-center mt-4"><Image className="size-48 bg-transparent" src={eidMubarak} alt="cute kitty"/></div>
      <Image className="size-48 bg-transparent mt-16" src={kitty} alt="cute kitty"/>
      <div className="btns flex gap-4 mt-16">
        <button className="bg-green-600 py-2 w-[100px] rounded-lg text-center flex flex-col items-center" >
          <span>
            YES
          </span>
          <Image className="size-16 bg-transparent" src={moneyKitty} alt="cute kitty"/></button>
        <button className="bg-red-600 py-2 w-[100px] rounded-lg flex flex-col items-center" onClick={handleClick} style={{ width: `${buttonWidth}px`, minHeight: `${buttonHeight}px` }}>
          <span>
            NO
          </span>
        <Image className="size-16 bg-transparent" src={noKitty} alt="cute kitty"/></button>
      </div>
    </div>
  );
}
