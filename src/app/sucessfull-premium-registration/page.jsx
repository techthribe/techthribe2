"use client"
import { useEffect, useRef } from "react";
import NavigationBar from "../components/navigation";
import MobileNavigationBar from "../components/MobileNav";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";

const RegistrationSuccessfull = () => {
    return(
  <main className="overflow-x-none min-h-screen relative">
            <section className=" w-full pb-[94px] sm:pb-[142px] relative h-screen">
                <NavigationBar />
                <MobileNavigationBar/>
                 <div className="border border-[#DFE2E6] relative bg-white rounded-lg shadow-lg z-10 w-[95%] md:w-[624px] min-h-[473px] rounded-[16px] p-[40px] overflow-y-auto mt-[50px] xl:mt-[80px] mx-auto">
                <div className="">
                        <h1 className="text-center text-[20px] sm:text-[32px] leading-[100%] tracking-[1%] text-primaryTextColor font-[600] font-clash">Join THR!BE </h1>
                    </div>

                    <p className="leading-[150%] tracking-[1%] mt-[16px]">
                    Thank you, We have received your form. Please click on the button below to join the community 
                    </p>

                    <div className="relative w-full md:w-[402px] h-[157px] mx-auto my-[36px]">
                        <Image src="https://res.cloudinary.com/chiaka/image/upload/v1759416365/free_thank_you_eicdpk.gif" fill alt="thank you techthribe" className="cursor-pointer object-fill" />
                    </div>
            
                    <Link href="https://chat.whatsapp.com/I7NAlsMabR1IpQFGnSb6VB" target="_blank">
                    <Button name="Join Community" classname="w-[calc(100%-80px)] bg-[#107269] absolute bottom-[40px]  "/>
                    </Link>
                </div>
            </section>

            <div className="w-full h-[110px] relative 2xl:absolute bottom-0 left-0 mt-[30px]">
                        <Image src="/img/carousel-gif.gif" fill alt="thribe community" className="" unoptimized />
                      </div>
    </main>
    )
}

export default RegistrationSuccessfull;