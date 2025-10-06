"use client"
import { useEffect } from "react";
import gsap from "gsap";
import NavigationBar from "../components/navigation";
import MobileNavigationBar from "../components/MobileNav";
import Image from "next/image";
import Event_banner from "../components/Event_banner"
import JoinCommunity from "../components/joinCommunity";
import Footer from "../components/Footer";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Events = () => {
    useEffect(() => {
     gsap.fromTo(
    ".fade-box",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
  );

  // return () => {
  //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  // };
}, []);

// fade on scroll
 useEffect(() => {
    gsap.utils.toArray(".scroll-fade").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

    return(
        <main>
            <NavigationBar />
            <MobileNavigationBar />
            <section className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 pt-[80px] md:pt-[148px] pb-[92px] md:pb-[159px] tracking-[1%] space-y-[40px]">
            <div className="fade-box opacity-0 max-w-[1170px]">
                <h1 className="text-[16px] leading-[150%] tracking-[16%] text-[#087C72]">THR!BE EVENTS</h1>
                <h2 className="font-[600] leading-[120%] text-[#0A1A18] text-[32px] md:text-[66px] tracking-[1%] font-clash mt-[16px] mb-[24px]">Events That Make Tech Feel Human</h2>
                <p className="max-w-[760px] text-[18px] md:text-[20px] leading-[150%] tracking-[1%] text-secondaryColor">
                Not just panels. Not just vibes. 
                These are conversations, masterclasses, and challenges designed to bring real techies together.
                </p>

                <div className="mt-[40px]">
                    <Link href="#events">
                   <button className={`flex gap-x-[24px] items-center justify-center w-[292px] bg-[#107269] cursor-pointer shadow-[4px_4px_0px_0px_#003E39] font-[500] text-[18px] text-[#fff] h-[56px] rounded-[100px]`}>
                    <span>See What&#39;s Coming</span>
                    <Image src="/icons/arrow-white.png" width={24} height={24} alt="thribe community" className="object-center" />
                  </button> 
                  </Link>
                </div>
            </div>
            </section>
            <div className="w-full h-[12px] relative">
                <Image src="/img/legal-nav.png" fill alt="navigation" />
            </div> 
            <main className="w-full bg-[#0A1A18]" id="events">
            <section className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 py-[40px] md:py-[120px] tracking-[1%]">
               <div className="scroll-fade opacity-0">
               <h3 className="text-[16px] leading-[150%] tracking-[16%] text-[#C2C7D0]">NEW!</h3>
                <h2 className="mt-[16px] flex items-center gap-x-[12px] font-clash font-[600] text-[26px] md:text-[48px] leading-[100%] md:leading-[120%] tracking-[1%] text-[#fff]">
                <span>Upcoming Events</span>
                <div className="relative w-[26px] md:w-[46px] h-[26px] md:h-[46px]">
                <Image src="/icons/calender.png" fill alt="thribe community" className="object-center" />
                </div>
                </h2>
                </div>

                <div className="mt-[24px] md:mt-[48px] ">
                <Event_banner
                img="/img/event-banner1.png"
                type="Webinar"
                description="From freelancers to founders, salaries to side gigs - tax changes in 2025 will affect us all. Let&#39;s break it down so you know what&#39;s changing, what&#39;s at stake, and how to prepare."
                background="bg-[#E8F6F4]" 
                btnClassname="bg-[#107269]" 
                 btnText="Attend Event"
                 btnLink="https://luma.com/erdi3s5w"
                name="Yunus Omotosho" 
                role="Tax Consultant" 
                date="Oct 5" 
                time="2025 | 5pm WAT" 
                venue="Google meet"
                />
                </div>

                <div className="mt-[80px]">
                    <div className="scroll-fade opacity-0">
                    <h3 className="text-[16px] leading-[150%] tracking-[16%] text-[#C2C7D0]">YOU MISSED...</h3>
                    <h2 className="mt-[16px] flex items-center gap-x-[12px] font-clash font-[600] text-[26px] md:text-[48px] leading-[100%] md:leading-[120%] tracking-[1%] text-[#fff]">
                    <span>Past Events</span>
                    <div className="relative w-[26px] md:w-[46px] h-[26px] md:h-[46px]">
                    <Image src="/img/clock.png" fill alt="thribe community" className="object-center" />
                    </div>
                    </h2>
                    </div>
                    <div className="mt-[48px] space-y-[40px]">
                     <Event_banner
                    img="/img/event-banner8.png"
                    type="Webinar"
                    description="Ever wondered why some products just click and others frustrate you? The secret is simple: they were (or weren&#39;t) made for humans."
                    background="bg-[#F5F6F7]" 
                    btnClassname="bg-[#8AA6A3] shadow-[4px_4px_0px_0px_#64C0B7]" 
                    btnText="View Event"
                    btnLink="#"
                    name="Emiola Omotolani" 
                    role="UX Designer" 
                    date="Sept 19" 
                    time="2025 | 6pm WAT" 
                    venue="Google meet"
                    />

                    <Event_banner
                    img="https://res.cloudinary.com/chiaka/image/upload/v1759654216/frame3_gl2xtm.png"
                    type="Webinar"
                    description="We all know the grind: long hours in a chair, eyes glued to a screen. It's a rite of passage for techies, but it comes with a real physical toll - the dreaded stiff neck."
                    background="bg-[#F5F6F7]" 
                    btnClassname="bg-[#8AA6A3] shadow-[4px_4px_0px_0px_#64C0B7]" 
                    btnText="View Event"
                    btnLink="#"
                    name="Dr. Ebenezer G." 
                    role="Medical Doctor" 
                    date="August 23" 
                    time="2025 | 6pm WAT" 
                    venue="Google meet"
                    />
                     <Event_banner
                    img="https://res.cloudinary.com/chiaka/image/upload/v1759654216/frame1_gj7qsh.png"
                    type="Webinar"
                    description="Tech isn&#39;t lawless. Know your rights - on leave, remote work, termination, and more. It&#39;s legal survival. From Offer Letters to NDAs - Don't Just Sign It. Understand It."
                    background="bg-[#F5F6F7]" 
                    btnClassname="bg-[#8AA6A3] shadow-[4px_4px_0px_0px_#64C0B7]" 
                    btnText="View Event"
                    btnLink="#"
                    name="Abayomi Olushesan" 
                    role="Tech Lawyer" 
                    date="August 12" 
                    time="2025 | 6pm WAT" 
                    venue="TikTok Live"
                    />

                    <Event_banner
                    img="https://res.cloudinary.com/chiaka/image/upload/v1759654216/frame2_hpj619.png"
                    type="Webinar"
                    description="Your digital footprint speaks louder than your captions. Protect it, shape it, and let it work for you - not against you."
                    background="bg-[#F5F6F7]" 
                    btnClassname="bg-[#8AA6A3] shadow-[4px_4px_0px_0px_#64C0B7]" 
                    btnText="View Event"
                    btnLink="#"
                    name="K.S.A" 
                    role="Tech Consultant" 
                    date="August 5" 
                    time="2025 | 6pm WAT" 
                    venue="Google meet"
                    />

                     <Event_banner
                    img="/img/event-banner5.png"
                    type="Webinar"
                    description="Struggling with messy frames in Figma? Learn how to use auto-layout like a pro. Clean, responsive, and stress-free designs every time."
                    background="bg-[#F5F6F7]" 
                    btnClassname="bg-[#8AA6A3] shadow-[4px_4px_0px_0px_#64C0B7]" 
                    btnText="View Event"
                    btnLink="#"
                    name="Desmond Ajimuda" 
                    role="Senior Product Designer" 
                    date="July 12" 
                    time="2025 | 6pm WAT" 
                    venue="Google meet"
                    />

                     <Event_banner
                    img="/img/event-banner4.png"
                    type="Webinar"
                    description="Struggling with what to charge? Let&#39;s talk about pricing your skills confidently, setting value, and getting paid what you&#39;re worth - no more guesswork."
                    background="bg-[#F5F6F7]" 
                    btnClassname="bg-[#8AA6A3] shadow-[4px_4px_0px_0px_#64C0B7]" 
                    btnText="View Event"
                    btnLink="#"
                    name="Desmond Ajimuda" 
                    role="Senior Product Designer" 
                    date="July 8" 
                    time="2025 | 6pm WAT" 
                    venue="Google meet"
                    />
                </div>
                </div>
            </section> 
            <JoinCommunity />
             <Footer />
            </main>
        </main>
    )
}

export default Events;