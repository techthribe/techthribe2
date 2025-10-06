"use client";
import { useEffect, useState } from "react";
import { useAllContext } from "../../context/allcontext";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";

export default function Modal({ }) {
    const {freeThankYouModal, toggleFreeThankYouModal} = useAllContext();

console.log(freeThankYouModal)
  // prevent background scroll when modal is open
  useEffect(() => {
    if (freeThankYouModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [freeThankYouModal]);

  if (!freeThankYouModal) return null; // don’t render if closed

  return (
    <div className={`fixed inset-0 z-50 items-center justify-center ${freeThankYouModal ? 'flex' : 'hidden' }`}>
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={toggleFreeThankYouModal}
      ></div>

      {/* modal content */}
      <div className="border border-[8px] border-b-[#F97502] border-x-0 border-t-0 relative bg-white rounded-lg shadow-lg z-10 w-[95%] md:w-[624px] min-h-[473px] rounded-[16px] p-[40px] overflow-y-auto mt-[40px]">
        <div className="flex justify-between items-center">
            <h1 className="text-[20px] sm:text-[32px] leading-[100%] tracking-[1%] text-primaryTextColor font-[600] font-clash">Join THR!BE </h1>
            <Image src="/icons/close-square.png" width={24} height={24} alt="close thribe modal" className="cursor-pointer" onClick={toggleFreeThankYouModal} />
        </div>

        <p className="leading-[150%] tracking-[1%] mt-[16px]">
        Thank you, We have received your form. Please click on the button below to join the community 
        </p>

         <div className="relative w-full md:w-[402px] h-[157px] mx-auto my-[36px]">
            <Image src="https://res.cloudinary.com/chiaka/image/upload/v1759416365/free_thank_you_eicdpk.gif" fill alt="tech community" className="cursor-pointer object-fill" />
        </div>

        <Link href="https://chat.whatsapp.com/IYB6OqDKXLOGmF8DTuR2bg" target="_blank" onClick={toggleFreeThankYouModal}>
        <Button name="Join Community" classname="w-[calc(100%-80px)] bg-[#107269] absolute bottom-[40px]  "/>
        </Link>
      </div>
    </div>
  );
}