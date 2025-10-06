"use client"
import { useState, useRef, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useAllContext } from "../context/allcontext";
import { usePathname } from "next/navigation";


const NavigationBar = () => {
    const closeDropdowns = useRef(null)
    const closeMediaDropdown = useRef(null)
    const {toggleMobileNavbarFunction} = useAllContext();
     const pathname = usePathname();
     const [openEvent, setOpenEvent] = useState(false);
     const [openMedia, setOpenMedia] = useState(false)

     // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (closeDropdowns.current && !closeDropdowns.current.contains(event.target)) {
        setOpenEvent(false);
      }
      if (closeMediaDropdown.current && !closeMediaDropdown.current.contains(event.target)) {
        setOpenMedia(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


     const toggleOpenEventLink = () => {
        setOpenMedia(false)
        setOpenEvent((prev) => !prev)
     }

     const toggleOpenMediaLink = () => {
        setOpenEvent(false)
        setOpenMedia((prev) => !prev)
     }


    return(
        <div className="w-full px-[16px] md:px-[20px] py-[24px] bg-[#fff] md:relative ">
        <nav className="shadow-[0px_4px_12.6px_0px_#D2D2D21F] tracking-[3%] leading-[150%] md:max-w-[1248px] mx-auto h-[48px] md:h-[88px] flex justify-between items-center md:px-[32px]  border border-l-0 md:border-l-[6px] border-t-0 border-r-[0] border-b-[0] border-l-[#E36A02]">
           <Link href="/">
            <div className="relative w-[99px] md:w-[119px] h-[30px] md:h-[36px]">
            <Image 
             src="/logo.png"
             alt="thribe community logo"
             fill
             className="object-center"
             />
             </div>
             </Link>

             <div className="hidden md:flex justify-between space-x-[40px] text-[16px] text-[#354764]  items-center">
               <Link href="/"  className={`navLink ${pathname==="/" ? "text-[#087C72] font-[600]" : ""}`}>Home</Link>

                 <Link href="/about" className={`navLink ${pathname==="/about" ? "text-[#087C72] font-[600]" : ""}`}>About</Link>

                 <div className="navLink relative" ref={closeDropdowns}>
                    <span onClick={toggleOpenEventLink} className={`flex justify-between items-center cursor-pointer ${pathname==="/events" ? "text-[#087C72] font-[600]" : ""}`}>
                    <span>Events</span>
                    <span className="material-symbols-outlined text-[24px] ">
                        keyboard_arrow_down
                    </span>
                    </span>
                    
                    <div className={`${openEvent ? "block" : "hidden"} transition-all duration-500 ease-in-out min-w-[304px] text-secondaryColor text-[16px] z-50 bg-[#fff] space-y-[16px] absolute top-[100%] left-0 rounded-[20px] p-[16px] shadow-[0px_2px_10px_0px_#0000001A]`}>
                        <div><Link href="/events" className={`cursor-pointer ${pathname==="/events" ? "text-[#087C72] font-[600]" : ""}`}>Tech Events</Link></div>
                         
                         <Link href="#" className="flex space-x-[10px]">
                         <span>Football tournament</span>
                         <button className="bg-[#FEF1E6] w-[93px] h-[28px] rounded-[10px] text-[#B15301] text-[12px]">Coming soon</button>
                        </Link>
                         <Link href="#" className="flex space-x-[10px]">
                         <span>Outdoor fun</span>
                         <button className="bg-[#FEF1E6] w-[93px] h-[28px] rounded-[10px] text-[#B15301] text-[12px]">Coming soon</button>
                        </Link>
                    </div>
                 </div>
                 
                   
                   <div className="navLink relative" ref={closeMediaDropdown}>
                    <span onClick={toggleOpenMediaLink} className={`flex justify-between items-center cursor-pointer ${pathname==="/blog" ? "text-[#087C72] font-[600]" : ""}`}>
                    <span>Media</span>
                    <span className="material-symbols-outlined text-[24px] ">
                        keyboard_arrow_down
                    </span>
                    </span>
                    
                    <div className={`${openMedia ? "block" : "hidden"} transition-all duration-500 ease-in-out min-w-[244px] text-secondaryColor text-[16px] z-50 bg-[#fff] space-y-[16px] absolute top-[100%] left-0 rounded-[20px] p-[16px] shadow-[0px_2px_10px_0px_#0000001A]`}>
                         <Link href="#" className="flex space-x-[10px]">
                         <span>Blog & News</span>
                         <button className="bg-[#FEF1E6] w-[93px] h-[28px] rounded-[10px] text-[#B15301] text-[12px]">Coming soon</button>
                        </Link>
                         
                         <Link href="#" className="flex space-x-[10px]">
                         <span>Podcast</span>
                         <button className="bg-[#FEF1E6] w-[93px] h-[28px] rounded-[10px] text-[#B15301] text-[12px]">Coming soon</button>
                        </Link>
                    </div>
                 </div>

                 <Link href="https://paystack.shop/tech-thribe" className={`navLink ${pathname==="/shop" ? "text-[#087C72] font-[600]" : ""}`}>Shop</Link>
             </div>

                <div className="flex w-[30px] md:w-[152px] justify-between items-center ">
                  <Link href="/#price">
                 <Button name="Join Us" classname="w-[101px] h-[47px] md:w-[141px] bg-[#107269] hidden md:block"/>
                  </Link>
                <div className="relative w-[24px] h-[24px]" onClick={toggleMobileNavbarFunction} >
                     <Image src="/img/open_menu.png" fill alt="thribe community menu option" className="object-center md:hidden shrink-0" /> 
                </div>
                </div>
        </nav>
        </div>
    )
}

export default NavigationBar;