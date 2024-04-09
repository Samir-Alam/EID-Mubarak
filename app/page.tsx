import Image from "next/image";
import kitty from "../public/kitty//pwssss.gif"

export default function Home() {
  return (
    <div>
      <div className="font-bold font-sans text-center bottom-10">EID MUBARAK</div>
      <Image src={kitty}
      alt="Picture of the author"/>
      
    </div>
  );
}
