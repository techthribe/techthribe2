"use client";
import { useEffect, useState } from "react";
import { useAllContext } from "../../context/allcontext";
import Image from "next/image";

export default function Modal({ }) {
  const { partnerWithUs, togglePartnerMobileSideBar, togglePartnerThankYouModal, toggleLendYourVoiceThribeModal, togglePartnerWithUsModal} = useAllContext();
  const [opponent, setOpponent] = useState('play a particular opponent')
  const [errorMessage, setErrorMessage] = useState("")
     const [loading, setLoading] = useState(false)

     const [formDatas, setFormDatas] = useState({
        companyName: "",
        email: "",
        contactPerson: "",
        websiteLink: "",
        kindOfPartnership: "",
        description: "",
        scheduleChat: false,
        keepInLoop: false
    })

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     const onSubmitForm = async(e) => {
      try{
        setLoading(true)
        e.preventDefault();
        const {companyName, email, contactPerson, websiteLink, kindOfPartnership, description, scheduleChat, keepInLoop } = formDatas;

        if(!companyName || !email || !contactPerson || !kindOfPartnership){
            setLoading(false)
            return setErrorMessage("please, fill all requierd fields")
        }
        if (!emailRegex.test(email)) {
            setLoading(false)
             return setErrorMessage("Invalid Email")
        }

         const res = await fetch("/api/partner", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formDatas),
            });

              const responseData = await res.json();
           
            if(responseData.success){
                 setLoading(false)
                  setErrorMessage("")
        setFormDatas({
            companyName: "",
            email: "",
            contactPerson: "",
            websiteLink: "",
            kindOfPartnership: "",
            description: "",
            scheduleChat: false,
            keepInLoop: false
        })

        togglePartnerThankYouModal()
     }
      else{
                 setLoading(false)
               setErrorMessage("something went wrong, try again!")
        } 
      }
      catch(err){
         setErrorMessage("something went wrong, try again!")
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
    if (partnerWithUs) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [partnerWithUs]);

  if (!partnerWithUs) return null; // don’t render if closed

  return (
    <div className={`fixed inset-0 z-50 items-center justify-center ${partnerWithUs ? 'flex' : 'hidden' }`}>
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={togglePartnerWithUsModal}
      ></div>

      {/* modal content */}
      <div className="border border-[8px] border-b-[#F97502] border-x-0 border-t-0 relative bg-white rounded-lg shadow-lg z-10 w-[96%] lg:w-[1004px] max-h-[90vh] rounded-[16px] p-[20px] sm:p-[40px] overflow-y-scroll mt-[20px]">
        <div className="flex justify-between items-center">
           <h1 className="text-[20px] md:text-[32px] leading-[100%] tracking-[1%] text-primaryTextColor font-[600] font-clash hidden md:block">Explore THR!BE </h1>
            <h1 className="text-[20px] md:text-[32px] leading-[100%] tracking-[1%] text-primaryTextColor font-[600] font-clash block md:hidden">Partner with us</h1>
            <Image src="/icons/close-square.png" width={24} height={24} alt="close thribe modal" className="cursor-pointer" onClick={togglePartnerWithUsModal} />
        </div>

         {/* only show for mobile */}
                <span className="flex items-center space-x-[12px] my-[20px] w-[90px] block md:hidden" onClick={ togglePartnerMobileSideBar}>
                <Image src="/icons/arrow-left.png" width={24} height={24} alt="back arrow for tech community" className="cursor-pointer" />
                <span className="text-[20px]">Back</span>
                </span>

        <div className="mt-[36px] flex justify-between items-start">
            <div className="w-[300px] space-y-[40px] font-clash text-secondaryColor hidden md:block">
                <div className="cursor-pointer" onClick={toggleLendYourVoiceThribeModal}>Lend Your Voice</div>
                {/* <div className="cursor-pointer" onClick={toggleJoinTournamentModal}>Join The Tournament</div> */}
                <div className="font-[600] text-primaryGreen">Partner with us</div>
                {/* <div className="cursor-pointer">Buy a merch (coming soon)</div> */}
            </div>

            <form onSubmit={onSubmitForm} className="w-full md:w-[544px] overflow-y-auto h-[100%] leading-[150%] space-y-[16px] pb-[40px] pr-[5px]">
                <div className="sapce-y-[4px]">
                    <label>Name of Company / Organization / Individual<span className="text-[#FF0000]">*</span></label>
                    <input
                    name="companyName"
                    value={formDatas.companyName}
                    onChange={onChangeFormDataFunctions}
                    type="text" placeholder="What&#39;s your company name" className="outline-none placeholder-[#98A1B0] w-full h-[62px] rounded-[16px] px-[24px] border border-[#C2C7D0]" />
                </div>

                 <div className="sapce-y-[4px]">
                    <label>Email address <span className="text-[#FF0000]">*</span></label>
                    <input
                     name="email"
                    value={formDatas.email}
                    onChange={onChangeFormDataFunctions}
                    type="email" placeholder="Pease enter your email address" className="outline-none placeholder-[#98A1B0] w-full h-[62px] rounded-[16px] px-[24px] border border-[#C2C7D0]" />
                </div> 

                <div className="sapce-y-[4px]">
                    <label>Contact person&#39;s name <span className="text-[#FF0000]">*</span></label>
                    <input
                     name="contactPerson"
                    value={formDatas.contactPerson}
                    onChange={onChangeFormDataFunctions}
                    type="text" placeholder="Enter name" className="outline-none placeholder-[#98A1B0] w-full h-[62px] rounded-[16px] px-[24px] border border-[#C2C7D0]" />
                </div>

                <div className="sapce-y-[4px]">
                    <label>Website or Social Media Link </label>
                    <input
                     name="websiteLink"
                    value={formDatas.websiteLink}
                    onChange={onChangeFormDataFunctions}
                    type="text" placeholder="Enter link" className="outline-none placeholder-[#98A1B0] w-full h-[62px] rounded-[16px] px-[24px] border border-[#C2C7D0]" />
                </div>

                <div className="sapce-y-[4px]">
                    <label>What kind of partnership are you interested in? <span className="text-[#FF0000]">*</span></label>
                    <div className="relative w-full">
                      <Image src="/icons/arrow-bottom.png" width={24} height={24} alt="close thribe modal" className="absolute top-[19px] right-[24px]"/>
                        <select
                            name="kindOfPartnership"
                            value={formDatas.kindOfPartnership}
                            onChange={onChangeFormDataFunctions}
                        className={`${formDatas.kindOfPartnership == "" ? "text-[#87857f]" : ""} outline-none appearance-none placeholder-[#98A1B0] w-full h-[62px] rounded-[16px] px-[24px] border border-[#C2C7D0]`}>
                            <option value="" disabled className="">Select an option</option>
                            <option value="sponsor" className="">Sponsor</option>
                            <option value="investor" className="">Investor</option>
                            <option value="contributor" className="">Contributor</option>
                        </select> 
                    </div>
                      </div> 

                
                  <div className="sapce-y-[4px]">
                    <label>Briefly describe how you&#39;d like to partner with THR!BE</label>
                    <textarea 
                     name="description"
                    value={formDatas.description}
                    onChange={onChangeFormDataFunctions}
                    className="outline-none placeholder-[#98A1B0] w-full h-[132px] rounded-[16px] px-[24px] pt-[16px] h-[367px] border border-[#C2C7D0]" />
                </div>

                <div>
                    <label className="flex items-center space-x-[16px]">
                    <input
                    name="keepInLoop"
                    checked={formDatas.keepInLoop}
                    onChange={onChangeFormDataFunctions}                 
                    type="checkbox" className="form-checkbox h-[24px] w-[24px] text-blue-600 border border-[#B3B9C4] rounded-[4px]" />
                    <span className="text-secondaryColor">I&#39;d love to schedule a quick chat to explore this further</span>
                    </label>
                </div>

                <div>
                    <label className="flex items-center space-x-[16px]">
                    <input
                     name="scheduleChat"
                    checked={formDatas.scheduleChat}
                    onChange={onChangeFormDataFunctions}
                    type="checkbox"  
                    className="form-checkbox h-[24px] w-[24px] text-blue-600 border border-[#B3B9C4] rounded-[4px]" />
                    <span className="text-secondaryColor">Keep me in the loop about THR!BEI&#39;s future initiatives </span>
                    </label>
                </div>

                    {/* error message */}
                    {errorMessage ? <div className="text-red font-[400] p-[10px] inline bg-[#FF7F7F] text-[#FF0000]">{errorMessage}</div> : "" }
                    
                      
                     <button disabled={loading} type="submit" className={`flex justify-center items-center gap-x-[10px] bg-primaryColor mt-[20px] cursor-pointer shadow-[4px_4px_0px_0px_#003E39] font-[500] text-[18px] text-[#fff] h-[47px] md:h-[56px] w-full rounded-[100px]`}>
                        <span>{loading ? "Proceeding..." : "Proceed"}</span>
                         <Image src="/icons/arrow-white.png" width={24} height={24} alt="close thribe modal" className=""/>
                    </button>   
            </form>          
        </div>
      </div>
    </div>
  );
}