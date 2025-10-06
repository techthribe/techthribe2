"use client";
import { useEffect, useState } from "react";
import { useAllContext } from "../../context/allcontext";
import Image from "next/image";

export default function Modal({ }) {
    const { joinTournament, toggleLendYourVoiceMobileSideBar, toggleJoinTournamentModal, toggleLendYourVoiceThribeModal, togglePartnerWithUsModal} = useAllContext();
    const [opponent, setOpponent] = useState('play a particular opponent')

  // prevent background scroll when modal is open
  useEffect(() => {
    if (joinTournament) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [joinTournament]);

  if (!joinTournament) return null; // don’t render if closed

  return (
    <div className={`fixed inset-0 z-50 items-center justify-center ${joinTournament ? 'flex' : 'hidden' }`}>
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={toggleJoinTournamentModal}
      ></div>

      {/* modal content */}
      <div className="border border-[8px] border-b-[#F97502] border-x-0 border-t-0 relative bg-white rounded-lg shadow-lg z-10 w-[96%] md:w-[1004px] max-h-[90vh] rounded-[16px] p-[20px] md:p-[40px] overflow-y-scroll mt-[20px] md:mt-[40px]">
        <div className="flex justify-between items-center">
          <h1 className="text-[20px] md:text-[32px] leading-[100%] tracking-[1%] text-primaryTextColor font-[600] font-clash hidden md:block">Explore THR!BE </h1>
            <h1 className="text-[20px] md:text-[32px] leading-[100%] tracking-[1%] text-primaryTextColor font-[600] font-clash block md:hidden">Join The Tournament</h1>
            <Image src="/icons/close-square.png" width={24} height={24} alt="close thribe modal" className="cursor-pointer" onClick={toggleJoinTournamentModal} />
        </div>

         {/* only show for mobile */}
                <span className="flex items-center space-x-[12px] my-[20px] w-[90px]" onClick={toggleLendYourVoiceMobileSideBar}>
                <Image src="/icons/arrow-left.png" width={24} height={24} alt="back arrow for tech community" className="cursor-pointer" onClick={toggleLendYourVoiceThribeModal} />
                <span className="text-[20px]">Back</span>
                </span>

        <div className="mt-[36px] flex justify-between items-start">
            <div className="w-[300px] space-y-[40px] font-clash text-secondaryColor hidden md:block">
                <div className="cursor-pointer" onClick={toggleLendYourVoiceThribeModal}>Lend Your Voice</div>
                <div className="font-[600] text-primaryGreen">Join The Tournament</div>
                <div className="cursor-pointer" onClick={togglePartnerWithUsModal}>Partner with us</div>
                <div className="cursor-pointer">Buy a merch (coming soon)</div>
            </div>

            <form className="w-full md:w-[544px] overflow-y-auto h-[100%] leading-[150%] space-y-[16px] pb-[40px] pr-[5px]">
                <div className="sapce-y-[4px]">
                    <label>Company/Team name <span className="text-[#FF0000]">*</span></label>
                    <input type="text" placeholder="What&#39;s your company/team name" className="outline-none placeholder-[#98A1B0] w-full h-[62px] rounded-[16px] px-[24px] border border-[#C2C7D0]" />
                </div>

                 <div className="sapce-y-[4px]">
                    <label>Contact email address <span className="text-[#FF0000]">*</span></label>
                    <input type="text" placeholder="Pease enter your contact email address" className="outline-none placeholder-[#98A1B0] w-full h-[62px] rounded-[16px] px-[24px] border border-[#C2C7D0]" />
                </div> 

                <div className="sapce-y-[4px]">
                    <label>What sport would you like to join? <span className="text-[#FF0000]">*</span></label>
                    <div className="relative w-full">
                      <Image src="/icons/arrow-bottom.png" width={24} height={24} alt="close thribe modal" className="absolute top-[19px] right-[24px]"/>
                        <select className="text-[#98A1B0] outline-none appearance-none placeholder-[#98A1B0] w-full h-[62px] rounded-[16px] px-[24px] border border-[#C2C7D0]">
                            <option value="" className="text-primaryTextColor text-[18px] sm:text-[20px]">Select an option</option>
                            <option className="text-primaryTextColor text-[18px] sm:text-[20px]">Option 1</option>
                            <option className="text-primaryTextColor text-[18px] sm:text-[20px]">Option 2</option>
                            <option className="text-primaryTextColor text-[18px] sm:text-[20px]">Option 3</option>
                        </select> 
                    </div>
                      </div> 

                 <div className="sapce-y-[4px]">
                    <label>How many players do you have? <span className="text-[#FF0000]">*</span></label>
                    <input type="text" placeholder="Enter number" className="outline-none placeholder-[#98A1B0] w-full h-[62px] rounded-[16px] px-[24px] border border-[#C2C7D0]" />
                </div>

                 <div className="sapce-y-[12px]">
                    <div>Would you like to be play against a with a specific company or let us decide?</div>
                      <div className="space-y-[24px] mt-[10px]">
                      <label className="flex items-center space-x-2 cursor-pointer" onClick={() => setOpponent("love to play a particular company")}>
                        <input type="radio" name="opponent" value="love to play a particular company" className="peer hidden" />
                        <span className="w-[24px] h-[24px] border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-primaryGreen">
                          <span className={`w-[14px] h-[14px] bg-primaryGreen rounded-full ${opponent === "love to play a particular company" ? 'opacity-100' : 'opacity-0'}`}></span>
                        </span>
                        <span className="text-secondaryColor"> I&#39;d love to play a particular company </span>
                      </label>

                      <label className="flex items-center space-x-2 cursor-pointer" onClick={() => setOpponent("trust THR!BE to choose")}>
                        <input type="radio" name="opponent" value="trust THR!BE to choose" className="peer hidden" />
                        <span className="w-[24px] h-[24px] border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-primaryGreen">
                          <span className={`w-[14px] h-[14px] bg-primaryGreen rounded-full ${opponent === "trust THR!BE to choose" ? 'opacity-100' : 'opacity-0'}`}></span>
                        </span>
                        <span className="text-secondaryColor">I trust THR!BE to choose</span>
                      </label>
                    </div>            
                 </div>

                  <div className="sapce-y-[4px]">
                    <label>Select a Company</label>
                    <div className="relative w-full">
                      <Image src="/icons/arrow-bottom.png" width={24} height={24} alt="close thribe modal" className="absolute top-[19px] right-[24px]"/>
                        <select className="text-[#98A1B0] outline-none appearance-none placeholder-[#98A1B0] w-full h-[62px] rounded-[16px] px-[24px] border border-[#C2C7D0]">
                            <option value="" className="text-primaryTextColor text-[18px] sm:text-[20px]">Select an option</option>
                            <option className="text-primaryTextColor text-[18px] sm:text-[20px]">Option 1</option>
                            <option className="text-primaryTextColor text-[18px] sm:text-[20px]">Option 2</option>
                            <option className="text-primaryTextColor text-[18px] sm:text-[20px]">Option 3</option>
                        </select> 
                    </div>
                      </div> 
              

                
                     <button className={`flex justify-center items-center gap-x-[10px] bg-primaryColor mt-[20px] cursor-pointer shadow-[4px_4px_0px_0px_#003E39] font-[500] text-[18px] text-[#fff] h-[47px] md:h-[56px] w-full rounded-[100px]`}>
                        <span>Proceed</span>
                         <Image src="/icons/arrow-white.png" width={24} height={24} alt="close thribe modal" className=""/>
                    </button>   

             


            </form>
           
        </div>
      </div>
    </div>
  );
}