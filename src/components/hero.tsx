import Image from "next/image";
export default function Hero(){
 return(
  <div>
   <Image className="sm:h-screen sm:w-screen " height={2000} width={2000} src="/hero.png" alt="hero">
   </Image>
  </div>


 )
}