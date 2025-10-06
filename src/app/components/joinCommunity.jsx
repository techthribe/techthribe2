"use client"
import { useState } from "react";
import { useAllContext } from "../context/allcontext";
import Image from "next/image";
import Button from "./Button";

const JoinCommunity = () => {
    const { toggleFreeThankYouModal} = useAllContext();
    const [errorMessage, setErrorMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        fullname: "",
        role: "",
        email:"",
        reason_to_join: ""

    })

     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     const onSubmitForm = async (e) => {
        try{
        e.preventDefault();
        setLoading(true)
        const {fullname, role, email, reason_to_join} = data;

        if(!fullname || !role || !email){
            setLoading(false)
            return setErrorMessage("please, fill all required fields")
        }
        if (!emailRegex.test(email)) {
            setLoading(false)
             return setErrorMessage("Invalid Email")
        }
      

         const res = await fetch("/api/join-free", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            });

            const responseData = await res.json();
            if(responseData.success){
                 setLoading(false)
                  setErrorMessage("")
                  setData({
                    fullname: "",
                    role: "",
                    email: "",
                    reason_to_join: ""
                    })
                 toggleFreeThankYouModal();
            }
            else{
                 setLoading(false)
               setErrorMessage("please check your network and try again")
            }
        }
        catch(err){
            setLoading(false)
            setErrorMessage("please check your network and try again")
        }
    }

     const onChangeFormDataFunction = (e) => {
        setErrorMessage("")
        const { name, value,} = e.target;

        setData((prev) => ({
            ...prev,
            [name]:  value
        }))
    }

    return (
        <section className="bg-[#FFF6DF] py-[40px] md:py-[120px]" id="joinCommunity">
          <div className="scroll-fade opacity-0 max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0">
           <h1 className="text-[16px] leading-[150%] tracking-[16%] text-[#107269]">THR!BE WITH US FOR FREE</h1>
                <h3 className="font-clash font-[600] my-[16px] text-[#0A1A18] text-[26px] md:text-[48px] leading-[100%] tracking-[3%] flex items-center gap-x-[12px]">
                <span>Join the Community</span>
                <div className="relative w-[26px] md:w-[46px] h-[26px] md:h-[46px]">
                <Image src="/img/join.png" fill alt="thribe community testimonial" className="object-fit shrink-0" />
                </div>
            </h3>
            <form onSubmit={onSubmitForm}>
                {/* mobile */}
            <div className="leading-[150%] tracking-[3%] w-full mb-[20px] mt-[24px] md:mt-[48px] flex gap-x-[24px] gap-y-[24px] md:gap-y-[40px] flex-wrap items-end block md:hidden">
                    <div className="flex flex-col md:flex-row gap-y-[16px] md:gap-y-0 md:gap-x-[24px]">
                    <label htmlFor="names" className="">My name is</label>
                    <input
                     name="fullname"
                    value={data.fullname}
                    onChange={onChangeFormDataFunction}
                    id="names" type="text" placeholder="Enter your full name"  className="w-[278px] placeholder-[#87857F] text-[16px] md:text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/>
                    </div>
                    <div className="flex flex-col md:flex-row gap-y-[16px] md:gap-y-0 md:gap-x-[24px] w-full md:w-[542px]">
                    <label htmlFor="role" className="">and I am a </label>
                    <div className="relative md:flex md:gap-x-[3px]">
                        <Image src="/icons/arrow-bottom-black.png" width={20} height={20} alt="thribe community" className="object-fit absolute bottom-0 right-0" />
                    <select id="role" 
                        name="role"
                        value={data.role}
                        onChange={onChangeFormDataFunction}
                        className={`appearance-none cursor-pointer bg-[#FFF6DF] w-[98%] placeholder-[#87857F] ${data.role == "" ? "text-[#87857f]" : ""} text-[16px] md:text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none`}
                        >
                        <option value="" disabled>What field are you in? (developer, designer...)</option>
                        <option value="Product Designer" className="hover:bg-[#fff] cursor-pointer">Product Designer</option>
                        <option value="Product MAanager" className="hover:bg-[#fff] cursor-pointer">Product Manager</option>
                        <option value="Unit Tester" className="hover:bg-[#fff] cursor-pointer">Unit Tester</option>
                        <option value="Frontend Developer" className="hover:bg-[#fff] cursor-pointer">Frontend Developer</option>
                        <option value="Backend Developer" className="hover:bg-[#fff] cursor-pointer">Backend Developer</option>
                        <option value="Graphic Designer" className="hover:bg-[#fff] cursor-pointer">Graphic Designer</option>
                        <option value="Graphic Designer" className="hover:bg-[#fff] cursor-pointer">Others</option>
                    </select>
                        <div className="absolute md:relative bottom-[-7px] right-0">.</div>
                    </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-y-[16px] md:gap-y-0 md:gap-x-[24px] w-full">
                    <label htmlFor="email" className="">My email address is</label>
                    <div className="relative">
                        <input
                         name="email"
                        value={data.email}
                        onChange={onChangeFormDataFunction}
                        id="email" type="text" placeholder="Enter your email address?"  className="w-[98%] md:w-[396px] placeholder-[#87857F] text-[16px] md:text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/>
                        <div className="absolute bottom-[-7px] right-0">.</div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-y-[16px] md:gap-y-0 md:gap-x-[24px] w-full">
                    <label htmlFor="reason" className="">I will love to join THRIBE because </label>
                    <div>
                    <input
                    name="reason_to_join"
                    value={data.reason_to_join}
                    onChange={onChangeFormDataFunction}
                    id="reason" 
                    type="text" 
                    placeholder="Tell us why you would love to join THR!BE"  
                    className="w-full md:w-[502px] placeholder-[#87857F] text-[16px] md:text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/></div>
                    {/* <div className="block min-w-[100%]"><input id="job" type="text" placeholder="Tell us why you would love to join THR!BE"  className="w-[100%] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/></div> */}
                    </div>
            </div>

            {/* website */}
            <div className="leading-[150%] tracking-[3%] w-full mt-[48px] mb-[20px] hidden md:flex gap-x-[24px] gap-y-[40px] flex-wrap items-end ">
                    <label htmlFor="names" className="">My name is</label>
                    <input 
                    name="fullname"
                    value={data.fullname}
                    onChange={onChangeFormDataFunction}
                    id="names" 
                    type="text" 
                    placeholder="Enter your full name"  
                    className="w-[278px] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"
                    />
                    <label htmlFor="job" className="">and I am a </label>
                    <div className="relative w-[400px]">
                    <Image src="/icons/arrow-bottom-black.png" width={20} height={20} alt="thribe community" className="object-fit absolute bottom-0 right-0" />
                    <select id="role" 
                        name="role"
                        value={data.role}
                        onChange={onChangeFormDataFunction}
                        className={`appearance-none cursor-pointer bg-[#FFF6DF] w-[400px] placeholder-[#87857F] ${data.role == "" ? "text-[#87857f]" : ""} text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none`}
                    >
                        <option value="" disabled>What field are you in? (developer, designer...)</option>
                        <option value="Product Designer" className="hover:bg-[#fff] cursor-pointer">Product Designer</option>
                        <option value="Product MAanager" className="hover:bg-[#fff] cursor-pointer">Product Manager</option>
                        <option value="Unit Tester" className="hover:bg-[#fff] cursor-pointer">Unit Tester</option>
                        <option value="Frontend Developer" className="hover:bg-[#fff] cursor-pointer">Frontend Developer</option>
                        <option value="Backend Developer" className="hover:bg-[#fff] cursor-pointer">Backend Developer</option>
                        <option value="Graphic Designer" className="hover:bg-[#fff] cursor-pointer">Graphic Designer</option>
                        <option value="Others" className="hover:bg-[#fff] cursor-pointer">Others</option>
                    </select>
                    </div>
                    <label htmlFor="email" className="">My email address is</label>
                    <div>
                    <input
                      name="email"
                    value={data.email}
                    onChange={onChangeFormDataFunction}
                    id="email" 
                    type="text" 
                    placeholder="Enter your email address?"  
                    className="w-[396px] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/> 
                    .</div>
                    <label htmlFor="reason_for_joining" className="">I will love to join THRIBE because </label>
                    <div><input
                    name="reason_to_join"
                    value={data.reason_to_join}
                    onChange={onChangeFormDataFunction}
                    id="reason_for_joining" 
                    type="text" 
                    placeholder="Tell us why you would love to join THR!BE" 
                    className="w-[502px] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/>
                    </div>
            </div>
            {/* error message */}
            {errorMessage ? <div className="text-red font-[500] p-[10px] inline bg-[#FF7F7F] text-[#FF0000]">{errorMessage}</div> : "" }
            <div className="mt-[48px]">
             <Button name={loading ? "sending..." : "Submit"} classname="w-full md:w-[141px] bg-[#107269]"/>
             </div>
             </form>
          </div>
        </section>
    )
}

export default JoinCommunity;