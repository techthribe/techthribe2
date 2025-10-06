"use client";
import { useEffect, useState } from "react";
import { useAllContext } from "../../context/allcontext";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";

export default function Modal({ }) {
    const { lendVoiceThankYouModal, toggleLendVoiceThankYouModal} = useAllContext();


  // prevent background scroll when modal is open
  useEffect(() => {
    if (lendVoiceThankYouModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [lendVoiceThankYouModal]);

  if (!lendVoiceThankYouModal) return null; // don’t render if closed

  return (
    <div className={`fixed inset-0 z-50 items-center justify-center ${lendVoiceThankYouModal ? 'flex' : 'hidden' }`}>
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={toggleLendVoiceThankYouModal}
      ></div>

      {/* modal content */}
      <div className="border border-[8px] border-b-[#F97502] border-x-0 border-t-0 relative bg-white rounded-lg shadow-lg z-10 w-[96%] md:w-[624px] min-h-[473px] rounded-[16px] p-[40px] overflow-y-auto mt-[40px]">
        <div className="flex justify-between items-center">
            <h1 className="text-[20px] sm:text-[32px] leading-[100%] tracking-[1%] text-primaryTextColor font-[600] font-clash">Thank You!</h1>
            <Image src="/icons/close-square.png" width={24} height={24} alt="close thribe modal" className="cursor-pointer" onClick={toggleLendVoiceThankYouModal} />
        </div>

        <p className="leading-[150%] tracking-[1%] mt-[16px]">
        We have received your story. Thanks for sharing with us.
        </p>

        <div className="relative w-[150px] h-[150px] mx-auto my-[36px]">
         <Image src="/icons/lendvoice.gif" fill alt="tech community" className="cursor-pointer object-fill" />
        </div>

        <Link href="/" onClick={toggleLendVoiceThankYouModal}>
        <Button name="Back Home" classname="w-[calc(100%-80px)] bg-[#107269] absolute bottom-[40px]  "/>
        </Link>
      </div>
    </div>
  );
}