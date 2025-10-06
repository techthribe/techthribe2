"use client";
import { useEffect } from "react";
import { useAllContext } from "../../context/allcontext";
import Image from "next/image";

export default function Modal({ }) {
    const { togglePartnerMobileSideBar, partnerMobileSideBar, toggleLendYourVoiceMobileSideBar, toggleLendYourVoiceThribeModal, togglePartnerWithUsModal} = useAllContext();

  // prevent background scroll when modal is open
  useEffect(() => {
    if (partnerMobileSideBar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [partnerMobileSideBar]);

  if (!partnerMobileSideBar) return null; // don’t render if closed

  return (
    <div className={`fixed inset-0 z-50 items-center justify-center ${partnerMobileSideBar ? 'flex' : 'hidden' }`}>
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={togglePartnerMobileSideBar}
      ></div>

      {/* modal content */}
      <div className="border border-[8px] border-b-[#F97502] border-x-0 border-t-0 relative bg-white rounded-lg shadow-lg z-10 w-[96%] md:w-[1004px] h-[90vh] rounded-[16px] p-[20px] sm:p-[40px] overflow-y-auto mt-[20px]">
        <div className="flex justify-between items-center">
            <h1 className="text-[20px] md:text-[32px] leading-[100%] tracking-[1%] text-primaryTextColor font-[600] font-clash">Explore THR!BE </h1>
            <Image src="/icons/close-square.png" width={24} height={24} alt="close thribe modal" className="cursor-pointer" onClick={togglePartnerMobileSideBar} />
        </div>

        <div className="mt-[36px]">
            <div className="w-full space-y-[40px] font-clash text-secondaryColor md:block">
                <div className={`font-[600] cursor-poinnter`} onClick={toggleLendYourVoiceThribeModal}>Lend Your Voice</div>
                <div className={`font-[600] text-primaryGreen cursor-poinnter`} onClick={togglePartnerWithUsModal}>Partner with us</div>
                {/* <div className="cursor-pointer">Buy a merch (coming soon)</div> */}
            </div>
           
        </div>
      </div>
    </div>
  );
}