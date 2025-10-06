import NavigationBar from "@/app/components/navigation";
import MobileNavigationBar from "@/app/components/MobileNav";
import Image from "next/image";

const Post = () => {
    return(
        <main>
            <NavigationBar />
            <MobileNavigationBar />
            <section className="relative max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 pt-[24px] tracking-[1%] space-y-[24px] leading-[150%]">
            <div className="flex gap-x-[40px]"> 
                <Image src="/icons/arrow-left.png" width={24} height={24} alt="thribe community" />
                <span className="text-[#000] leading">Back</span>
            </div>

            <section className="w-full relative min-h-screen">
                <div className="absolute left-[-270px] top-[287px] -translate-y-1/2 transform -rotate-90 flex gap-x-[24px] items-center px-4 py-2">
                    <div className="w-[160px] h-[1px] bg-[#FFE198]"></div>
                    <span className="uppercase font-[600] text-[16px] tracking-[16%] text-[#107269]">THR!BE Blog post</span>
                    <div className="w-[160px] h-[1px] bg-[#FFE198]"></div>
                </div>

                <div className="flex justify-between gap-[40px] mt-[24px] w-full pl-[55px]">
                    <div className="w-[480px]">
                        <div className="relative w-full min-h-[560px] rounded-[40px]">
                            <Image src="/img/ai.png" fill alt="thribe community" className="object-cover rounded-[40px]" />
                        </div>
                        <div className="mt-[14px] flex justify-between items-start">
                            <div className="leading-[150%] tracking-[1%]">
                                <h2 className="text-[#0A1A18]">By Thanau Abbas</h2>
                                <h4 className="text-[16px] text-secondaryColor">THR!BE Member</h4>
                            </div>

                            <div className="flex items-center gap-x-[40px]">
                                <div className="text-[#107269] leading-[150%] tracking-[1%] flex items-start gap-[8px]">
                                     <Image src="/icons/Share.png" width={24} height={24} alt="thribe community" className="object-cover" />
                                     <span>Share</span>
                                </div>
                                <div className="text-[#0A1A18] leading-[150%] tracking-[1%] flex items-center gap-[8px]">
                                     <Image src="/icons/heart.png" width={24} height={24} alt="thribe community" className="object-cover" />
                                     <span>123</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[656px] leading-[150%] tracking-[1%] space-y-[24px]">
                        <h1 className="text-[#0A1A18] font-[600] font-clash text-[46px] leading-[100%] tracking-[3%]">AI and The Reality</h1>
                        <div className="flex items-center gap-x-[24px] text-[16px]">
                            <button className="W-[70px] h-[32px] bg-[#FFE198] px-[12px] rounded-[10px]">NEWS</button>
                            <span>Posted July 19,2025</span>
                            <div className="flex items-start gap-x-[5px]"><span>.</span> <span>3 mins read</span></div>
                        </div>
                        <p>
                           Members retain ownership of content they create but grant THR!BE a non-exclusive license to share or promote member-contributed content within and outside the community, 
                           with appropriate credit. THR!BE&#39;s name, logo, design assets, educational materials, and branded content may not be used, copied, distributed, or resold without prior written 
                           permission. Members retain ownership of content they create but grant THR!BE a non-exclusive license to share or promote member-contributed content within and outside the community, 
                           with appropriate credit. THR!BE&#39;s name, logo, design assets, educational materials, and branded content may not be used, copied, distributed, or resold without 
                           prior written permission.Members retain ownership of content they create but grant THR!BE a non-exclusive license to share or promote member-contributed content within and outside 
                           the community, with appropriate credit. 
                           THR!BE&#39;s name, logo, design assets, educational materials, and branded content may not be used, copied, distributed, or resold without prior written permission. 
                        </p>

                         <p>
                           Members retain ownership of content they create but grant THR!BE a non-exclusive license to share or promote member-contributed content within and outside the community, 
                           with appropriate credit. THR!BE&#39;s name, logo, design assets, educational materials, and branded content may not be used, copied, distributed, or resold without prior written 
                           permission. Members retain ownership of content they create but grant THR!BE a non-exclusive license to share or promote member-contributed content within and outside the community, 
                           with appropriate credit. THR!BE&#39;s name, logo, design assets, educational materials, and branded content may not be used, copied, distributed, or resold without 
                           prior written permission.Members retain ownership of content they create but grant THR!BE a non-exclusive license to share or promote member-contributed content within and outside 
                           the community, with appropriate credit. 
                           THR!BE&#39;s name, logo, design assets, educational materials, and branded content may not be used, copied, distributed, or resold without prior written permission. 
                        </p>


                    </div>

                </div>
                 
            </section>
            </section>
        </main>
    )
}

export default Post;