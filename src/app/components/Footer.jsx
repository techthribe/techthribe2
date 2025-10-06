'use client'
import Image from "next/image";
import Link from "next/link";
import { useAllContext } from "../context/allcontext";

const Footer = () => {
    const {toggleLendYourVoiceThribeModal, togglePartnerWithUsModal} = useAllContext()
      const scrollToTop = () => {
            window.scrollTo({
            top: 0,
            behavior: "smooth", // this makes it smooth
            });
        };

    return (
        <div className="text-[20px]">
        <section className="bg-[#FFF] pt-[40px] md:pt-[120px] pb-[40px] md:pb-[74px]">
          <div className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0">
            <div className="flex flex-col gap-y-[40px] md:gap-y-0 md:flex-row justify-between  items-start">
                <div className="mr-[80px]">
                    <Link href="/">
                    <div className="relative w-[119px] h-[36px]">
                        <Image 
                        src="/logo.png"
                        alt="thribe community logo"
                        fill
                        className="object-center"
                        />
                    </div>
                    </Link>
                    <div className="mt-[40px] md:mt-[150px] ">
                        <p>
                            <a href="mailto:hello@techthribe.com" className="">
                            hello@techthribe.com
                            </a>            
                        </p>
                        <div className="flex gap-x-[14px] mt-[24px]">
                            <Link href="https://www.tiktok.com/@tech_thribe?_t=ZN-902wl3rVUO3&_r=1" target="_blank">
                            <div className="w-[32px] h-[32px] rounded-full shrink-0 bg-[#0A1A18] flex items-center justify-center cursor-pointer">
                                 <Image 
                                    src="/img/tiktok.png"
                                    width={11}
                                    height={13}
                                    alt="thribe tech community tit-tok account"
                                    className="object-center"
                                    />
                            </div>
                            </Link>
                            <Link href="https://x.com/techthribe" target="_blank">
                            <div className="w-[32px] h-[32px] rounded-full shrink-0 bg-[#0A1A18] flex items-center justify-center cursor-pointer">
                                 <Image 
                                    src="/img/xlogo.png"
                                    width={11}
                                    height={13}
                                    alt="thribe tech community x account"
                                    className="object-center"
                                    />
                            </div>
                            </Link>
                            <Link href="https://www.instagram.com/thribe_hq?igsh=eDRudXpkd3N3MTh5&utm_source=qr" target="_blank">
                            <div className="w-[32px] h-[32px] rounded-full shrink-0 bg-[#0A1A18] flex items-center justify-center cursor-pointer">
                                 <Image 
                                    src="/img/Instagram.png"
                                    width={11}
                                    height={11}
                                    alt="thribe tech community instagram account"
                                    className="object-center"
                                    />
                            </div>
                            </Link>
                            <Link href="https://www.linkedin.com/company/tech-thribe/" target="_blank">
                            <div className="w-[32px] h-[32px] rounded-full shrink-0 bg-[#0A1A18] flex items-center justify-center cursor-pointer">
                                 <Image 
                                    src="/icons/linkedin.png"
                                    width={14}
                                    height={14}
                                    alt="thribe tech community linkedin account"
                                    className="object-center"
                                    />
                            </div>
                            </Link>

                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-[#6B788E] leading-[150%] tracking-[2%] md:px-[10px]">Home</h3>
                    <div className="mt-[38px] text-[#354764] tracking-[2%] flex flex-col gap-y-[28px]">
                        <span>
                        <Link href="/about" className="navLinkFooter md:p-[10px]">About</Link>
                        </span>
                        <span>
                        <Link href="/events" className="navLinkFooter md:p-[10px]">Events</Link>
                        </span>
                        <span onClick={togglePartnerWithUsModal}>
                        <span className="navLinkFooter md:p-[10px] cursor-pointer">Partner with Us</span>
                        </span>
                        <span>
                        <Link href="/#price" className="navLinkFooter md:p-[10px]">
                        Join the community
                        </Link>
                        </span>
                        
                        
                    </div>
                </div>
                <div>
                    <h3 className="text-[#6B788E] leading-[150%] tracking-[2%] md:px-[10px]">EXPLORE</h3>
                    <div className="mt-[38px] text-[#354764] tracking-[2%] flex flex-col gap-y-[18px]">
                        
                        <span>
                        <Link href="https://paystack.shop/tech-thribe" className="navLinkFooter md:p-[10px] cursor-pointer">Shop</Link>
                         </span>
                        <span className="md:p-[10px] cursor-pointer" onClick={toggleLendYourVoiceThribeModal} >
                        Lend Your Voice
                        </span>
                          <span>
                        <span className="md:px-[10px] flex space-x-[10px] cursor-pointer">
                        <span>Outdoor Fun</span>
                         <button className="bg-[#FEF1E6] w-[93px] h-[28px] rounded-[10px] text-[#B15301] text-[12px]">Coming soon</button>
                        </span>
                        </span>
                        
                        <span>
                        <span className="md:p-[10px] flex space-x-[10px] cursor-pointer">
                        <span>Join The Tournament</span>
                         <button className="bg-[#FEF1E6] w-[93px] h-[28px] rounded-[10px] text-[#B15301] text-[12px]">Coming soon</button>
                        </span>
                        </span>
                    </div>
                </div>
                <div>
                    <h3 className="text-[#6B788E] text-[20px] leading-[150%] tracking-[2%] md:px-[10px]">MEDIA</h3>
                    <div className="mt-[38px] text-[#354764] text-[20px] tracking-[2%] flex flex-col gap-y-[18px]">
                        <span>
                        <span className="md:px-[10px] flex items-center space-x-[10px] cursor-pointer">
                        <span>Blog & News</span>
                         <button className="bg-[#FEF1E6] w-[93px] h-[28px] rounded-[10px] text-[#B15301] text-[12px]">Coming soon</button>
                        </span>
                        </span>
                        <span>
                        <span href="#" className="md:p-[10px] flex space-x-[10px] cursor-pointer">
                        <span>Podcast</span>
                         <button className="bg-[#FEF1E6] w-[93px] h-[28px] rounded-[10px] text-[#B15301] text-[12px]">Coming soon</button>
                        </span>
                        </span>
                    </div>
                </div>
                <div>
                    <h3 className="text-[#6B788E] text-[20px] leading-[150%] tracking-[2%] md:px-[10px]">LEGAL</h3>
                    <div className="mt-[38px] text-[#354764] text-[20px] tracking-[2%] flex flex-col gap-y-[18px]">
                        <span>
                        <Link href="/legal/privacy-policy" className="navLinkFooter md:px-[10px] ">Privacy policy</Link>
                        </span>
                        <Link href="/legal/terms-of-service" className="navLinkFooter md:p-[10px]">Terms of service</Link>
                    </div>
                </div>

            </div>

            <div className="flex w-full">
                <div 
                    onClick={scrollToTop}
                    className="group cursor-pointer w-[76px] h-[76px] rounded-full bg-[#fff] hover:bg-[#107269] shadow-[0px_4px_40px_0px_#00000014] ml-auto flex items-center justify-center">
                      {/* <Image src="/icons/arrow-up.png" width={32} height={32} alt="thribe community banner" className="obejct-cover" /> */}
                      <span className="material-symbols-outlined text-[32px] text-[#107269] group-hover:text-[#fff]">
                        arrow_upward_alt
                        </span>
                </div>

            </div>

            <div className="border border-t-[#DFE2E6] border-b-0 border-l-0 border-r-0 mt-[20px] pt-[80px] hidden md:block">
                <div className="flex justify-center items-center font-[400] text-[20px] leading-[150%] tracking-[3%] text-secondaryColor">
                    <span>Copyright Ⓒ 2025 THR!BE</span>
                </div>
            </div>
            </div>
        </section>
            {/* mobile image */}
            <div className="relative w-full h-[167px] block md:hidden">
            <Image src="/img/footer-mobile.png" fill alt="thribe community banner" className="obejct-cover" />
          </div>
          <div className="relative w-full h-[167px] md:h-[247px] hidden md:block">
            <Image src="/img/footer.png" fill alt="thribe community banner" className="obejct-cover" />
          </div>
        </div>
    )
}

export default Footer;