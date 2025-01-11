import Link from "next/link";
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import {
 Sheet,
 SheetContent,
 SheetTrigger,
} from "@/components/ui/sheet";

export default function Header(){
 return(
<div className="flex justify-between items-center px-4 py-3  shadow-md sticky ">
<section className=" flex items-center justify-between w-full  " >

 <div className="flex items-center gap-4 ">
<Image className="h-auto w-auto" height={60} width={70} src="/logo.png" alt="hamlogo"></Image>
<h1 className="text-xl  sm:text-2xl md:text-4xl font-bold text-black "><span className="text-blue-950">Tech<b>Blog</b></span></h1>
</div>

<div className=" gap-6 items-center hidden md:flex ">
<Link href="/"><button className="text-lg  hover:text-blue-800    hover:underline-offset-auto  text-blue-950"><b>Home</b></button></Link>
<Link href="/"><button className="text-lg  hover:text-blue-800  hover:underline-offset-2 text-blue-950"><b>Articles</b></button></Link>
<Link href="/"><button  className="text-lg  hover:text-blue-800  text-blue-950"><b>About</b></button></Link>
<Link href="/"><button className="text-lg   hover:text-blue-800  text-blue-950"> <b>Pages</b></button></Link>
</div>
<div className=" hidden md:flex items-center gap-4 ">
 
<Link href="/apply"><button className="text-lg    py-2 px-4 rounded bg-blue-950 text-white sm:h-10 sm:w-30 hover:scale-110 hover:bg-blue-800"><b className="my-1 mx-2">Sign up</b></button></Link>
<Link href="/contact"><button className="text-lg py-2 px-4 rounded     bg-blue-950 text-white sm:h-10 sm:w-30 hover:scale-110 hover:bg-blue-800"><b className="my-1 mx-2">Contact</b></button></Link>

</div>
</section>

<Sheet>
  <SheetTrigger className="md:hidden text-3xl  text-blue-950 ">
  <TiThMenu />
   </SheetTrigger>
  <SheetContent  className="bg-blue-950 text-white">
  
  <div className="flex-col  flex gap-4 px-6 py-4   ">
<Link href="/"><button className="text-xl  hover:scale-110 hover:underline-offset-1"><b>Home</b></button></Link>
<Link href="/about"><button className="text-xl    hover:scale-110  hover:underline"><b>About</b></button></Link>
<Link href="/events"><button  className="text-xl hover:scale-110"><b>Articles</b></button></Link>
<Link href="/faculty"><button className="text-xl   hover:scale-110"> <b>Pages</b></button></Link>


<Link href="/apply"><button className="text-xl  hover:scale-110 "><b>Sign up</b></button></Link>
<Link href="/contact"><button className="text-xl    hover:scale-110 "><b >Contact</b></button></Link>
</div>

  </SheetContent>
</Sheet>

</div>
 )
}
