"use client";
import { useEffect, useState } from "react";
import { useAllContext } from "../../context/allcontext";
import Image from "next/image";

export default function Modal({ }) {
    const {lendYourVoiceThribeModal, togglePartnerThankYouModal, toggleLendYourVoiceMobileSideBar, toggleLendYourVoiceThribeModal, togglePartnerWithUsModal, toggleLendVoiceThankYouModal} = useAllContext();
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [formDatas, setFormDatas] = useState({
        title: "",
        story: "Type or paste your story here",
        anonymous: ""
    })

     const submitLendVoiceForm = async (e) => {
      try{
        setLoading(true)
        e.preventDefault();
        console.log("what is happening")
        const {title, story, anonymous} = formDatas;

        if(!title || !story){
          setLoading(false)
            return setErrorMessage("please, fill all required fields")
        }

      const res = await fetch("/api/lendVoice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDatas),
        });

        const responseData = await res.json();
        
        if(responseData.success){
              setLoading(false)
              setErrorMessage("")
              setFormDatas({
                  title: "",
                  story: "",
                  anonymous: ""
              })
          toggleLendVoiceThankYouModal();
        }
         else{
              setLoading(false)
            setErrorMessage("something went wrong, try again!")
        } 
      }
       catch(err){
        {
              setLoading(false)
             setErrorMessage("something went wrong, try again!")
        }
    }
  }

    const onChangeFormDataFunctions = (e) => {
        setErrorMessage("")
      const { name, type, value, checked } = e.target;

        setFormDatas((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked :  value
        }))
    }
 

  // prevent background scroll when modal is open
  useEffect(() => {
    if (lendYourVoiceThribeModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [lendYourVoiceThribeModal]);

  if (!lendYourVoiceThribeModal) return null; // don’t render if closed

  return (
    <div className={`fixed inset-0 z-50 items-center justify-center ${lendYourVoiceThribeModal ? 'flex' : 'hidden' }`}>
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={toggleLendYourVoiceThribeModal}
      ></div>

      {/* modal content */}
      <div className="border border-[8px] border-b-[#F97502] border-x-0 border-t-0 relative bg-white rounded-lg shadow-lg z-10 w-[96%] md:w-[1004px] max-h-[90vh] rounded-[16px] p-[20px] sm:p-[40px] overflow-y-auto mt-[20px]">
        <div className="flex justify-between items-center">
            <h1 className="text-[20px] md:text-[32px] leading-[100%] tracking-[1%] text-primaryTextColor font-[600] font-clash hidden md:block">Explore THR!BE </h1>
            <h1 className="text-[20px] md:text-[32px] leading-[100%] tracking-[1%] text-primaryTextColor font-[600] font-clash block md:hidden">Lend  Your Voice</h1>
            <Image src="/icons/close-square.png" width={24} height={24} alt="close thribe modal" className="cursor-pointer" onClick={toggleLendYourVoiceThribeModal} />
        </div>

        {/* only show for mobile */}
        <span className="flex items-center space-x-[12px] my-[20px] w-[90px] block md:hidden" onClick={toggleLendYourVoiceMobileSideBar}>
        <Image src="/icons/arrow-left.png" width={24} height={24} alt="back arrow for tech community" className="cursor-pointer" />
        <span className="text-[20px]">Back</span>
        </span>

        <div className="mt-[36px] flex justify-between items-start">
            <div className="w-[300px] space-y-[40px] font-clash text-secondaryColor hidden md:block">
                <div className="font-[600] text-primaryGreen">Lend Your Voice</div>
                {/* <div className="cursor-pointer" onClick={toggleJoinTournamentModal}>Join The Tournament</div> */}
                <div className="cursor-pointer" onClick={togglePartnerWithUsModal}>Partner with us</div>
                {/* <div className="cursor-pointer">Buy a merch (coming soon)</div> */}
            </div>

            <form onSubmit={submitLendVoiceForm} className="w-full md:w-[544px] overflow-y-auto leading-[150%] space-y-[16px] pb-[20px] md:pb-[40px] md:pr-[5px]">
                <div className="sapce-y-[4px]">
                    <label>Title</label>
                    <input
                     name="title"
                    value={formDatas.title}
                    onChange={onChangeFormDataFunctions}
                    type="text" placeholder="What&#39;s the title of your story?" className="outline-none placeholder-[#98A1B0] w-full h-[62px] rounded-[16px] px-[24px] border border-[#C2C7D0] text-[#98A1B0]" />
                </div>
                <div className="sapce-y-[4px]">
                    <label>Tell your story?<span className="text-[#FF0000]">*</span></label>
                    <textarea
                     name="story"
                    value={formDatas.story}
                    onChange={onChangeFormDataFunctions}
                    className="outline-none placeholder-[#98A1B0] w-full h-[62px] rounded-[16px] px-[24px] pt-[16px] h-[367px] border border-[#C2C7D0] text-[#98A1B0]" />
                </div>

                <div>
                    <label className="flex items-center space-x-[16px]">
                    <input 
                     name="anonymous"
                    checked={formDatas.anonymous}
                    onChange={onChangeFormDataFunctions}
                    type="checkbox" className="form-checkbox h-[24px] w-[24px] text-blue-600" />
                    <span className="text-secondaryColor">Keep me anonymous</span>
                    </label>
                </div>

                    {/* error message */}
                    {errorMessage ? <div className="mt-[20px] text-red font-[500] p-[10px] inline bg-[#FF7F7F] text-[#FF0000]">{errorMessage}</div> : ""}
                
                    <button disabled={loading} type="submit" className={`flex justify-center items-center gap-x-[10px] bg-primaryColor mt-[20px] cursor-pointer shadow-[4px_4px_0px_0px_#003E39] font-[500] text-[18px] text-[#fff] h-[47px] md:h-[56px] w-[98%] sm:w-full rounded-[100px]`}>
                        <span>{loading ? "Proceeding..." : "Proceed"}</span>
                          <Image src="/icons/arrow-white.png" width={24} height={24} alt="close thribe modal" className=""/>
                    </button>
            </form>
           
        </div>
      </div>
    </div>
  );
}
