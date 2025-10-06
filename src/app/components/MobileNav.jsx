"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useAllContext } from "../context/allcontext";
import { usePathname } from "next/navigation";

const MobileNavigationBar = () => {
    const {toggleNavbar, toggleMobileNavbarFunction} = useAllContext();
    const [toggleEventSubLinks, setToggleEventSubLinks] = useState(true)
    const [toggleMediaSubLinks, setToggleMediaSubLinks] = useState(true)
    const pathname = usePathname();

    const eventFunction = () => {
        setToggleMediaSubLinks(true);
        setToggleEventSubLinks((prev) => !prev)
    }

    const mediaFunction = () => {
        setToggleEventSubLinks(true)
        setToggleMediaSubLinks((prev) => !prev)
    }


    
    return(
        <div className={`z-50 w-full px-[16px] md:px-[20px] py-[24px] fixed top-0 left-0 w-full h-[100vh] bg-[#fff] ${!toggleNavbar ? "hidden" : ''}`}>
        <nav className="tracking-[3%] leading-[150%] md:max-w-[1248px] mx-auto h-[48px] md:h-[88px] flex justify-between items-center md:px-[32px]  border border-l-0 md:border-l-[6px] border-t-0 border-r-[0] border-b-[0] border-l-[#E36A02]">
            <div className="relative w-[99px] md:w-[119px] h-[30px] md:h-[36px]">
            <Image 
             src="/logo.png"
             alt="thribe community logo"
             fill
             className="object-center"
             />
             </div>
            
                <div className="relative w-[24px] h-[24px]" onClick={toggleMobileNavbarFunction}>  
                <Image src="/icons/close-square.png" fill alt="thribe community menu option" className="object-center md:hidden shrink-0" />
                </div>

        </nav>

            <ul className="text-[15px] text-[#354764] tracking-[2%] space-y-[40px] py-[40px] w-full ">
                <li><Link onClick={toggleMobileNavbarFunction} href="/" className={pathname==="/" ? "text-[#087C72] font-[600]" : ""}>Home</Link></li>
                <li> <Link onClick={toggleMobileNavbarFunction} href="/about" className={pathname==="/about" ? "text-[#087C72] font-[600]" : ""}>About</Link></li>

                <div>
                <Link href="#" className={` ${pathname==="/events" ? "text-[#087C72] font-[600]" : ""} flex justify-between items-center`} onClick={eventFunction}>
                    <span>Events</span>
                     <span className="material-symbols-outlined text-[16px] ">
                        keyboard_arrow_down
                    </span>
                </Link>
                <div className={` ${toggleEventSubLinks ? "hidden" : "block"} transition-all ease-in px-[10px] space-y-[24px] mt-[24px] `}>
                    <li> <Link onClick={toggleMobileNavbarFunction} href="/events" className={pathname==="/events" ? "text-[#087C72] font-[600]" : ""}>Tech Events</Link></li>
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

                <div>
                <Link href="#" className={`${pathname==="/blog" ? "text-[#087C72] font-[600]" : ""} flex justify-between items-center`} onClick={mediaFunction}>
                    <span>Media</span>
                     <span className="material-symbols-outlined text-[16px] ">
                        keyboard_arrow_down
                    </span>
                </Link>

                <div className={` ${toggleMediaSubLinks ? "hidden" : "block"} transition-all ease-in px-[10px] space-y-[24px] mt-[24px] `}>
                        <Link href="#" className="flex space-x-[10px]">
                         <span>Blog & News</span>
                         <button className="bg-[#FEF1E6] w-[93px] h-[28px] rounded-[10px] text-[#B15301] text-[12px]">Coming soon</button>
                        </Link>
                         <Link href="#" className="flex space-x-[10px]">
                         <span>Podcasts</span>
                         <button className="bg-[#FEF1E6] w-[93px] h-[28px] rounded-[10px] text-[#B15301] text-[12px]">Coming soon</button>
                        </Link>
                </div>
                </div>


                <li> <Link href="https://paystack.shop/tech-thribe" className={pathname==="/shop" ? "text-[#087C72]" : ""}>Shop</Link></li>
                <Link href="/#price" onClick={toggleMobileNavbarFunction}>
                <Button name="Join Us" classname="w-[141px] h-[56px] bg-[#107269]"/>
                </Link>
            </ul>
    
        <div className="absolute bg-[#E36A02] w-full h-[6px] bottom-0 left-0"></div> 
        </div>
    )
}

export default MobileNavigationBar;