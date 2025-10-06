"use client"
import { useEffect, useRef } from "react";
import NavigationBar from "../components/navigation2";
import MobileNavigationBar from "../components/MobileNav";
import Image from "next/image";
import TeamCard from "../components/teamCard";
import Testimaonial from "../components/testimonials";
import Collaborate from "../components/collaborate";
import JoinCommunity from "../components/joinCommunity";
import Footer from "../components/Footer";
import gsap from "gsap";
import Link from "next/link";
import { useAllContext } from "../context/allcontext";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const About = () => {
    const {togglePartnerWithUsModal} = useAllContext();
    const contentRef = useRef(null);
    const tweenRef = useRef(null);

    useEffect(() => {
        const contentWidth = contentRef.current.scrollWidth / 3;

        tweenRef.current = gsap.to(contentRef.current, {
            x: -contentWidth,
            duration: 20,
            ease: "none",
            repeat: -1,
            modifiers: {
                x: (x) => {
                const xNum = parseFloat(x);
                return (xNum % contentWidth) + "px";
                },
            },
            });
    },[])

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
    

    return (
        <main className="overflow-x-none">
            <section className="bg-[linear-gradient(180deg,rgba(2,18,16,0.54)_25.03%,rgba(2,18,16,0.9)_79.92%),url('https://res.cloudinary.com/chiaka/image/upload/v1758228838/thribe_banner_vqi0br.png')] sm:bg-[linear-gradient(180deg,rgba(2,18,16,0.54)_25.03%,rgba(2,18,16,0.9)_79.92%),url('https://res.cloudinary.com/chiaka/image/upload/v1757761490/thribe_hyoxv7.png')]  bg-cover w-full pb-[94px] sm:pb-[142px]">
                <NavigationBar />
                <MobileNavigationBar/>
                <div className="fade-box opacity-0 max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 text-[#fff] tracking-[1%] space-y-[24px] sm:space-y-[40px]">
                    <h2 className="font-clash mt-[346px] sm:mt-[369px] font-[600] leading-[100%] text-[32px] sm:text-[66px] flex items-center gap-x-[12px]">
                    <span>Our Goal</span>
                    <div className="relative w-[36px] sm:w-[48px] h-[36px] sm:h-[48px]">
                    <Image src="/img/goal.png" fill alt="thribe community goal" className="object-cover shrink-0" />
                    </div>
                    </h2>
                    <div className="leading-[150%] max-w-[764px]">
                        Is to build a tech-powered, value-driven community where individuals 
                        don&#39;t just exist but build valuable relationships, gain visibility, collaborate and 
                        contribute to real-world impact. 
                        A tribe of people that thrive through connection, collaboration, and collective growth.
                    </div>
                </div>
            </section>
            
            <section className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 pt-[40px] sm:pt-[120px] space-y-[40px]">
                <div className="scroll-fade opacity-0 flex flex-col-reverse md:flex-row justify-between items-center gap-x-[42px] gap-y-[24px]">
                    <div className="relative w-full md:w-[480px] h-[351px] md:h-[446px] rounded-[20px]">
                    <Image src="https://res.cloudinary.com/chiaka/image/upload/v1757778453/thribe3_sd49zi.png" fill alt="thribe community goal" className="object-center rounded-[20px]" />
                    </div>
                    <div className="w-full md:w-[726px] space-y-[24px] leading-[150%] text-secondaryColor tracking-[1%]">
                        <h2 className="font-[600] font-clash text-[26px] sm:text-[46px] text-[#0A1A18] leading-[100%]"><span className="text-primaryColor">THR!BE</span> began as a quiet escape</h2>
                        <p>A place to laugh, breathe, and break free from the chaos of work and burnout.
                            What started as one person looking for connection became a movement of techies, creatives, 
                            and builders craving something deeper: a human space in tech. We didn&#39;t want just another curated, 
                            cold community, we wanted something warm. Real. Imperfect. A village where people could grow, rest, pivot, 
                            laugh, mess up and still belong.
                        </p>

                        <p>THR!BE exists because we were never meant to do this alone. We&#39;re building the space we wish we 
                            had and leaving the door wide open for the next person. Not just to join… but to thrive.
                        </p>
                    </div>
                </div>

                {/* who we are */}
               <div className="scroll-fade opacity-0 w-full bg-[#000] flex flex-col md:flex-row justify-between gap-y-[24px] md:gap-y-0 md:gap-x-[42px] items-center p-[24px] sm:p-[40px] rounded-[16px] sm:rounded-[20px] bg-[#E8F6F4]">
                    <div className="w-full md:w-[679px] space-y-[12px]  leading-[150%] text-secondaryColor tracking-[1%]">
                        <h2 className="font-[600] font-clash text-[26px] sm:text-[46px] text-[#087C72] leading-[100%]">Who We Are</h2>
                        <div>THR!BE is not your regular tech community. We&#39;re a collective of thinkers, makers, designers, developers, 
                            product managers, and creative minds building with heart. We&#39;re creating connection. 
                            We&#39;re not just here to upskill, we&#39;re here to thrive.
                        <p>
                        This is your space to grow, laugh, collaborate, cry a little, and build work that matters. 
                        </p>
                        </div>
                    </div>
                    <div className="relative w-full md:w-[445px] h-[253px] rounded-[20px] bg-[#C2C7D0]">
                    <Image src="https://res.cloudinary.com/chiaka/image/upload/v1757778243/thribe1_n0s9i8.png" fill alt="thribe community goal" className="object-cover rounded-[20px]" />
                    </div>
                </div>

                {/* where we're headed */}
                 <div className="scroll-fade opacity-0 w-full bg-[#000] flex flex-col md:flex-row justify-between gap-y-[24px] md:gap-y-0 md:gap-x-[42px] items-center p-[24px] sm:p-[40px] rounded-[16px] sm:rounded-[20px] bg-[#FEF1E6]">
                    <div className="w-full md:w-[679px] space-y-[12px] leading-[150%] text-secondaryColor tracking-[1%]">
                        <h2 className="font-[600] font-clash text-[26px] sm:text-[46px] text-[#B15301] leading-[100%]">Where We&#39;re Headed</h2>
                        <div>We want to be the most intentional, human-first tech community on the continent. 
                            A space that doesn&#39;t just celebrate the loud wins, but sees the quiet efforts
                        <p>We&#39;re growing a network of support, learning, opportunity, and fun.</p>
                        <p>
                        THR!BE is becoming a movement and you&#39;re part of it.
                        </p>
                        </div>
                    </div>
                    <div className="relative w-full md:w-[445px] h-[253px] rounded-[20px] bg-[#C2C7D0]">
                    <Image src="https://res.cloudinary.com/chiaka/image/upload/v1757778349/thribe2_kfrqrc.png" fill alt="thribe community goal" className="object-cover rounded-[20px]" />
                    </div>
                </div>
                
                {/* our vision */}
                 <div className="scroll-fade opacity-0 w-full bg-[#000] flex flex-col md:flex-row justify-between gap-y-[24px] md:gap-y-0 md:gap-x-[42px] items-center p-[24px] sm:p-[40px] rounded-[16px] sm:rounded-[20px] bg-[#FFF6DF]">
                    <div className="w-full md:w-[679px] space-y-[12px] leading-[150%] text-secondaryColor tracking-[1%]">
                        <h2 className="font-[600] font-clash text-[26px] sm:text-[46px] text-[#6B5F40] leading-[100%]">Our Vision</h2>
                        <div>
                            To become the most empowering and connected tech tribe in Africa and beyond. 
                            A tribe of people from any background who can thrive through community, build with purpose, 
                            and rise with others. We see a future where collaboration beats competition, 
                            access replaces gatekeeping and growth is shared, not siloed.             
                        </div>
                    </div>
                    <div className="relative w-full md:w-[445px] h-[253px] rounded-[20px] bg-[#C2C7D0]">
                    <Image src="https://res.cloudinary.com/chiaka/image/upload/v1757778258/Rectangle_17083_yson1l.png" fill alt="thribe community goal" className="object-cover rounded-[20px]" />
                    </div>
                </div>
            </section>

            <div className="mt-[120px] bg-[#F5F6F7] hidden lg:block">
            <section className="scroll-fade opacity-0 overflow-x-hidden max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 py-[80px] bg-[#F5F6F7] flex flex-col items-center gap-[70px]">
                <div className="flex justify-between w-full">
                <h2 className="leading-[100%] text-[46px] font-clash font-[600] tracking-[3%] text-[#0A1A18] flex space-x-[12px]">
                <span>Our Partners</span>
                <Image src="/img/relationship.png" width={56} height={56} alt="thribe community" className="object-fit shrink-0" />
                </h2>

                <button onClick={togglePartnerWithUsModal} className="cursor-pointer flex space-x-[24px] w-[260px] h-[56px] rounded-[100px] border border-[#107269] text-[#107269] items-center justify-center">
                    <span>Partner with Us</span>
                    <Image src="/icons/line-arrow-right.png" width={24} height={24} alt="tech community in Nigeria" className="object-fit shrink-0" />
                </button>
                </div>
                
                    <div className="flex items-end justify-between w-[3725px] overflow-x-hidden" ref={contentRef} >
                    <Image src="/img/partner3.png" width={207} height={47} alt="tech community in Nigeria" className="object-fit shrink-0" /> 
                    <div className="relative w-[162px] h-[37px] object-fit shrink-0">
                    <Image src="/img/partner5.png" fill alt="tech community in Nigeria" className="object-fit" /> 
                    </div>
                    <Image src="/img/partner2.png" width={74} height={46} alt="tech community in Nigeria" className="object-fit shrink-0" /> 
                    <Image src="/img/partner4.png" width={151} height={48} alt="tech community in Nigeria" className="object-fit shrink-0" />
                     <Image src="/img/partner6.png" width={133} height={48} alt="tech community in Nigeria" className="object-fit shrink-0" />
                    <Image src="/img/partner3.png" width={207} height={47} alt="tech community in Nigeria" className="object-fit shrink-0" /> 
                    <div className="relative w-[162px] h-[37px] object-fit shrink-0">
                    <Image src="/img/partner5.png" fill alt="tech community in Nigeria" className="object-fit" /> 
                    </div> 
                    <Image src="/img/partner2.png" width={74} height={46} alt="tech community in Nigeria" className="object-fit shrink-0" /> 
                    <Image src="/img/partner4.png" width={151} height={48} alt="tech community in Nigeria" className="object-fit shrink-0" />
                     <Image src="/img/partner3.png" width={207} height={47} alt="tech community in Nigeria" className="object-fit shrink-0" /> 
                      <Image src="/img/partner6.png" width={133} height={48} alt="tech community in Nigeria" className="object-fit shrink-0" />
                    <div className="relative w-[162px] h-[37px] object-fit shrink-0">
                    <Image src="/img/partner5.png" fill alt="tech community in Nigeria" className="object-fit" /> 
                    </div>
                    <Image src="/img/partner2.png" width={74} height={46} alt="tech community in Nigeria" className="object-fit shrink-0" /> 
                    <Image src="/img/partner4.png" width={151} height={48} alt="tech community in Nigeria" className="object-fit shrink-0" />
                    <Image src="/img/partner3.png" width={207} height={47} alt="tech community in Nigeria" className="object-fit shrink-0" /> 
                    <div className="relative w-[162px] h-[37px] object-fit shrink-0">
                    <Image src="/img/partner5.png" fill alt="tech community in Nigeria" className="object-fit" /> 
                    </div>
                      <Image src="/img/partner6.png" width={133} height={48} alt="tech community in Nigeria" className="object-fit shrink-0" />
                    <Image src="/img/partner2.png" width={74} height={46} alt="tech community in Nigeria" className="object-fit shrink-0" /> 
                    <Image src="/img/partner4.png" width={151} height={48} alt="tech community in Nigeria" className="object-fit shrink-0" />


                </div>
            </section>
            </div>

            {/* meet the team */}
            <div className="bg-[#001A17] mt-[40px] lg:mt-0">
            <section className="scroll-fade opacity-0 max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 py-[40px] sm:py-[120px]">
            <div className="space-y-[16px] text-[#C2C7D0] leading-[150%]">
                <h1 className=" text-[16px] tracking-[16%] ">COMMUNITY ELDERS</h1>
                <h2 className="flex items-center gap-x-[12px] font-clash font-[600] text-[26px] sm:text-[46px] leading-[100%] tracking-[3%] text-[#fff]">
                <span>Meet The Team</span>
                <div className="relative w-[36px] sm:w-[46px] h-[36px] sm:h-[46px] rounded-full">
                <Image src="/img/meet.png" fill alt="thribe community" className="object-center rounded-full" />
                </div>
                </h2>
                <h3 className="tracking-[2%]">Our bold team holds the vision, energy, and safety of the village.</h3>
            </div>
            <div className="mt-[24px] sm:mt-[80px] flex justify-between flex-wrap gap-y-[24px] lg:gap-y-[40px] xl:gap-y-0">
             <TeamCard 
              classname="bg-[#E8F6F4]"
              classnameHover= "bg-[#0A443E]"
              hoverText="Designer. Dreamer. Spark plug. Keeps the heart of thribe alivee with direction, creativity, and intentional chaos."
              name="Thanau Abbas"
              nickname="AKA Sultana"
              role="The Vision Holder"
              img="/img/member1.png" 
            />
             <TeamCard 
                classname="bg-[#FEF1E6]" 
                classnameHover= "bg-[#693101]"
                hoverText="Product manager. The clarity architect, mindset shifter and growth partner who helps us grow with intention and win with their values intact."
                name="Jesse Croffie" 
                nickname="AKA Khing"  
                role="The Strategist" 
                img="/img/member2.png" 
            />
            <TeamCard 
            classname="bg-[#FFF6DF]" 
            classnameHover= "bg-[#6B5F40]"
            hoverText="Product manager. The keeper of peace and pulse. He ensures safety, kindness and empathy stay at the core of all we do."
            name="Mubarak Shittu" 
            nickname="AKA M.O Shittu" 
            role="The Grounder " 
            img="/img/member3.png" 
            />
            <TeamCard 
            classname="bg-[#DFE2E6]" 
            classnameHover= "bg-[#15294B]"
            hoverText="Quality Assurance engineer. The Community Vibes Curator. Keeps THRIBE warm, safe, respectful and alive. The heart of the tribe"
            name="Kehinde Qudus" 
            nickname="AKA KQ"  
            role="The Culture Guardian" 
            img="/img/member4.png" 
            />
            
            </div>
            </section>
            </div>

            {/* why join thribe */}
            <div className="bg-[#693101]">
              <section className="scroll-fade opacity-0 max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 py-[40px] sm:py-[120px]">
                <div className="flex flex-wrap justify-between items-start gap-y-[40px]">
                    <div className="w-full md:w-[448px]">
                        <h5 className="text-[16px] leading-[150%] tracking-[16%] uppercase text-[#FFE198]">WHY join THR!BE?</h5>
                        <h2 className="font-clash font-[600] text-[26px] sm:text-[46px] leading-[100%] tracking-[3%] text-[#fff] mt-[16px]">
                        Why <span className="text-[#FFE198]">THR!BE </span> Feels 
                        </h2>
                        <h2 className="flex items-center gap-x-[12px] font-clash font-[600] text-[26px] sm:text-[46px] leading-[100%] tracking-[3%] text-[#fff] mt-[24px] sm:mt-0">
                        <span>Different</span>
                        <div className="relative w-[36px] sm:w-[46px] h-[36px] sm:h-[46px] rounded-full">
                        <Image src="/img/join-team.png" fill alt="thribe community" className="object-center rounded-full" />
                        </div>
                        </h2>
                        {/* for web view */}
                        <div className="mt-[45px] hidden md:block ">
                            <Link href="/#price">
                            <button className="cursor-pointer w-[192px] h-[47px] border border-[#FFE198] text-[#FFE198] rounded-[100px] flex items-center gap-x-[24px] justify-center">
                                <span>Join THR!BE</span>
                                <Image src="/icons/arrow-right.png" width={24} height={24} alt="thribe community" className="object-center" />
                            </button>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-[731px] text-[20px] leading-[150%] tracking-[1%] text-[#fff] space-y-[24px]">
                        <p>There are a lot tech communities but very few feel like home. We don&#39;t gatekeep. We pass the mic. 
                            Come for the growth. Stay for the vibes. THR!BE is your space to:
                        </p>

                        <div className="flex gap-x-[24px] items-center">
                            <Image src="/icons/arrow-right.png" width={24} height={24} alt="thribe community" className="object-center rounded-full" />
                            <span>Connect beyond titles</span>
                        </div>
                        <div className="flex gap-x-[24px] items-center">
                            <Image src="/icons/arrow-right.png" width={24} height={24} alt="thribe community" className="object-center rounded-full" />
                            <span>Learn without shame</span>
                        </div>
                        <div className="flex gap-x-[24px] items-center">
                            <Image src="/icons/arrow-right.png" width={24} height={24} alt="thribe community" className="object-center rounded-full" />
                            <span>Laugh, grow, and build together</span>
                        </div>
                        {/* button for mobile view */}
                        <div className="block md:hidden pt-[16px]">
                            <button className="w-full md:w-[192px] h-[47px] border border-[#FFE198] text-[#FFE198] rounded-[100px] flex items-center gap-x-[24px] py-[10px] justify-center">
                                <span>Join THR!BE</span>
                                <Image src="/icons/arrow-right.png" width={24} height={24} alt="thribe community" className="object-center rounded-full" />
                            </button>
                        </div>
                    </div>
                </div>
              </section>
            </div>

            {/* testimonial */}
            <Testimaonial />

            {/* collaborate */}
            <Collaborate />

            {/* join community */}
            <JoinCommunity />

            <Footer />
        </main>
    )
}

export default About;