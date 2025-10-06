"use client"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import NavigationBar from "./components/navigation";
import MobileNav from "./components/MobileNav"
import Button from "./components/Button";
import Community from "./components/community";
import Activities from "./components/Activities";
import PricingList from "./components/pricingList";
import JoinCommunity from "./components/joinCommunity";
import Testimaonial from "./components/testimonials";
import Collaborate from "./components/collaborate";
import Footer from "./components/Footer";
import Link from "next/link";
import { useAllContext } from "./context/allcontext";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



export default function Home() {
   const {togglePremiumMemberModal} = useAllContext();

  const outerCircle = useRef(null);
  const innerCircle = useRef(null)
  const contentRef = useRef(null);
   const mobileContentRef = useRef(null);
    const tweenRef = useRef(null);

    const prices = {monthly: "N10,000/Month", quaterly: "N28,500/Quater", yearly: "N102,000/Year"}
    const [selectedPrice, setSelectedPrice] = useState('yearly')


  useEffect(() => {
    const contentWidth = contentRef.current.scrollWidth / 2;
     const mobileContentWidth = mobileContentRef.current.scrollWidth / 2;

     setSelectedPrice('yearly')

    // Infinite scroll animation for desktop
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

     // Infinite scroll animation for mobile
    tweenRef.current = gsap.to(mobileContentRef.current, {
      x: -mobileContentWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const xNum = parseFloat(x);
          return (xNum % mobileContentWidth) + "px";
        },
      },
    });
  }, []);

  useEffect(() => {
    if (outerCircle.current && innerCircle.current) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      tl.to(
        outerCircle.current,
        {
          scale: 1.5,
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut",
        },
        0 // sync start
      );

      tl.to(
        innerCircle.current,
        {
          scale: 1.3,
          duration: 1.5,
          ease: "power2.inOut",
        },
        0 // sync with outer
      );
    }
  }, []);

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
   <div className="overflow-x-hidden">
    <NavigationBar />
    <MobileNav />
    <section className="fade-box opacity-0 text-[#354764] tracking-[1%] leading-[150%] max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 pt-[20px] md:pt-[105px] text-center">
      <div className="space-y-[16px] tracking-[1%] ">
      <h2 className="text-[16px] md:text-[18px] font-[400] ">Belong<span className="text-[#F97502]">.</span> Share<span className="text-[#F97502]">.</span> Thrive!</h2>
      
      <div className="flex space-x-[16px] items-center justify-center">
        {/* pulsating circles */}
        <div className="hidden sm:flex justify-center items-center w-[40px] h-[40px] relative ">
              <div
                ref={outerCircle}
                className="absolute w-[30px] h-[30px] rounded-full bg-[#FFE198] opacity-0"
              ></div>
              <div
                ref={innerCircle}
                className="relative bg-[#F97502] w-[20px] h-[20px] rounded-full"
              ></div>
        </div>
        <h1 className="font-clash font-[600] leading-[100%] text-[32px] md:text-[66px] text-[#107269] flex justify-center">
        <span>Welcome to</span>
        <div className="relative w-[126px] md:w-[260px] h-[32px] md:h-[69px]">
          <Image src="/img/thribe.png" fill alt="thribe community" className="object-center" />
        </div>
         </h1>
      </div>

         <div className="font-[400] max-w-[590px] mx-auto">
          A vibrant, inclusive community for tech minds to share wins, struggles, 
          lessons and real talk. We connect professionals, 
          create safe spaces, and even kick ball together.
         </div>

    <div className="mt-[32px] flex justify-center w-full">
      <Link href="#price" className="w-full sm:w-[244px] md:w-[284px]">
     <button className={`flex items-center space-x-[5px] justify-center bg-[#107269] w-full sm:w-[244px] md:w-[284px] h-[47px] md:h-[56px] cursor-pointer shadow-[4px_4px_0px_0px_#003E39] hover:shadow-[4px_4px_0px_0px_#64C0B7] font-[500] text-[18px] text-[#fff] rounded-[100px]`}>
        <span>Join The Community</span>
        <Image src="/img/arrow-right.png" width={24} height={24} alt="thribe community" className="" />
     </button>
     </Link>
     </div>  
      </div>

      {/* image collage for mobile view */}
      <div className="fade-section flex flex-col md:hidden justify-between gap-y-[16px] mt-[40px]">
        <div className="flex gap-x-[7px] w-full">
        <div className="relative w-[50%] h-[182px]">
          <Image src="/img/frame1.png" fill alt="thribe community" className="object-fit" />
        </div>    
        <div className="relative w-[50%] h-[182px]">
          <Image src="/img/frame3.png" fill alt="thribe community" className="object-fit" />
        </div>
        </div>
        <div className="relative w-full h-[182px]">
          <Image src="/img/frame2.png" fill alt="thribe community" className="object-fit" />
        </div>
      </div>
      {/* end of image collage for mobile view */}

      {/* image collage for desktop view */}
      <div className="fade-section hidden md:flex justify-between space-x-[24px] items-end mt-[-56px]">
        <div className="relative w-[360px] h-[392px]">
          <Image src="/img/frame1.png" fill alt="thribe community" className="object-fit" />
        </div>
        <div className="relative w-[480px] h-[256px]">
          <Image src="/img/frame2.png" fill alt="thribe community" className="object-fit" />
        </div>
        <div className="relative w-[360px] h-[392px]">
          <Image src="/img/frame3.png" fill alt="thribe community" className="object-fit" />
        </div>
      </div>
      {/* image collage for desktop view ends here */}
    </section>

    <div ref={mobileContentRef} className=" w-[2250px] overflow-hidden flex md:hidden ">
      <div className="slide relative w-[750px] h-[62px] mt-[40px]">
        <Image src="/img/carousel_gif_mobile.gif" fill alt="thribe community" className="" unoptimized />
      </div>
      <div className="slide relative w-[750px] h-[62px] mt-[40px]">
        <Image src="/img/carousel_gif_mobile.gif" fill alt="thribe community" className="" unoptimized />
      </div>
      <div className="slide relative w-[750px] h-[62px] mt-[40px]">
        <Image src="/img/carousel_gif_mobile.gif" fill alt="thribe community" className="" unoptimized />
      </div>
    </div>

    <div ref={contentRef} className="md:flex w-[4320px] overflow-hidden hidden">
      <div className="slide relative w-[1440px] h-[122px] mt-[40px] md:mt-[120px] ">
        <Image src="/img/carousel-gif.gif" fill alt="thribe community" className="" unoptimized />
      </div>
      <div className="slide relative w-[1440px] h-[122px] mt-[40px] md:mt-[120px]">
        <Image src="/img/carousel-gif.gif" fill alt="thribe community" className="" unoptimized />
      </div>
      <div className="slide relative w-[1440px] h-[122px] mt-[40px] md:mt-[120px]">
        <Image src="/img/carousel-gif.gif" fill alt="thribe community" className="" unoptimized />
      </div>
    </div>


    {/* what is thribe */}
    <section className="scroll-fade opacity-0 py-[40px] md:py-[120px] max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 flex flex-col xl:flex-row gap-[40px]">
      <div className="w-full xl:w-[600px] space-y-[24px]">
        <div className="font-clash font-[600]">
          <h1 className="text-primaryColor font-[400] text-[16px]">WHAT IS THR!BE?</h1>
          <h2 className="text-[26px] md:text-[46px] leading-[100%] tracking-[3%] mt-[16px]">THR!BE is more than a </h2>
          <h2 className="leading-[120%] text-[26px] md:text-[48px] tracking-[1%] text-primaryColor flex space-x-[12px] mt-[8px]">
            <span>Tech Community</span>
            <div className="relative w-[32px] md:w-[66px] h-[22px] md:h-[46px]">
            <Image src="/img/community.png" fill alt="thribe community" className="object-fit" />
            </div>
            </h2>
        </div>
        <div className="mt-[24px] tracking-[2%] text-secondaryColor">
          <p>It is built on connection, growth and collaboration. This is not just another tech group.</p>

        <p className="mt-[24px]">This is your THR!BE - The tribe that thrives.</p>
        </div>
        <Link href="/#price" className="w-full md:w-[236px]">
        <Button name="Join The Tribe Now" classname="w-full sm:w-[196px] md:w-[236px] h-[47px] md:h-[56px] bg-primaryColor" />
        </Link>
      </div>

      <div className="w-full xl:w-[600px]">
        <div className="w-full grid-container gap-[40px]">
         <Community
          number="01"
          heading="Expression"
          paragraph="We give techies a voice to share their wins, struggles, failures or dreams. This is the couch where it&#39;s safe to talk."
          />
         <Community
          number="02"
          heading="Guidance"
          paragraph="We help people find their path, connect them with the right resources, and pivot when needed."
          />
           <Community
          number="03"
          heading="Belong"
          paragraph="THR!BE is an actual tribe for humans in tech. Real bonds, real collaborations, real people who lift each other up."
          />
         <Community
          number="04"
          heading="Balance"
          paragraph="Because life is more than work - from football to games, we create joy, play, and wellness for thriving humans."
          />
          </div>
      </div>
    </section>

    {/* why TRibe */}
    <section className="py-[40px] md:py-[120px] w-full bg-[#FEF1E6]">
      <div className="scroll-fade max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0">
        <div className="space-y-[16px]">
          <h2 className="text-[16px] font-[400] leading-[150%] tracking-[16%] text-[#E36A02]">WHY THR!BE?</h2>
          <h1 className="font-clash text-[26px] md:text-[46px] leading-[100%] font-[600] tracking-[3%]">Why <span className="text-[#E36A02]">THR!BE</span> Exists</h1>
        </div>

       
        <div className="flex flex-col md:flex-row mt-[24px] md:mt-[48px] justify-between md:gap-x-[24px] gap-y-[24px] md:gap-y-0 items-center">
  {/* Video Section */}
  {/* <div className="relative w-[343px] md:w-[711px] h-[173px] md:h-[360px] rounded-[16px] overflow-hidden"> */}
  <video
    className="w-[343px] md:w-[711px] h-[173px] md:h-[360px] object-cover"
    muted
    controls
    playsInline
  >
    <source
      src="https://res.cloudinary.com/chiaka/video/upload/f_auto,q_auto/v1759511250/0929_wiyzum.mov"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
{/* </div> */}

  {/* Text Section */}
  <div className="w-full md:w-[513px] leading-[150%] tracking-[2%] text-[#354764]">
    <p className="mb-[24px]">
      Working in tech can feel cold, competitive, and isolating — we&#39;re here to change that. THR!BE was built for humans first, 
      not hustle culture. Tech isn&#39;t just about work — it&#39;s about people. At THR!BE, you&#39;ll find a tribe that gets it. 
      We mix learning with laughter, growth with community, and celebration with impact. We laugh, play, grow, and thrive — together.
    </p>
    <Link href="/#price">
      <Button
        name="Join THR!BE"
        classname="bg-[#B15301] w-full md:w-[184px] h-[47px] md:h-[56px] shadow-[4px_4px_0px_0px_#693101] hover:shadow-[4px_4px_0px_0px_#FBA355]"
      />
    </Link>
  </div>
</div>

      </div>
    </section>

    {/* what we do inside thribe */}
    <section className="py-[40px] md:py-[120px] w-full bg-[#013D37]">
      <div className="scroll-fade max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 fade-section">
        <div className="space-y-[16px] text-[#C2C7D0] leading-[150%]">
        <h1 className=" text-[16px] tracking-[16%] ">WHAT WE DO INSIDE THR!BE</h1>
        <h2 className="flex items-center gap-x-[12px] font-clash font-[600] text-[26px] md:text-[46px] leading-[100%] tracking-[3%] text-[#fff]">
          <span>Community Activities</span>
            <div className="relative w-[32px] md:w-[46px] h-[32px] md:h-[46px] rounded-full">
            <Image src="/img/community2.png" fill alt="thribe community" className="object-fit rounded-full" />
            </div>
          
          </h2>
          <h3 className="tracking-[2%]">There&#39;s never a dull moment in here. We keep it real. We keep it moving. We learn. We laugh. We have fun. </h3>
        </div>

        <div className="mt-[40] md:mt-[80px] flex flex-row flex-wrap px-0 md:px-[30px] justify-between gap-y-[40px] md:gap-y-[120px]">
          <Activities 
            image="/img/microphone.png"
            title="Media & Voice"
          />
           <Activities 
            image="/img/ball.png"
            title="Balance & Fun"
          />
           <Activities 
            image="/img/chat.png"
            title="Chit-Chat Fridays"
          />
          <Activities 
            image="/img/group.png"
            title="Community-Led Events"
          />
          <Activities 
            image="/img/mentorship.png"
            title="Career Guidance"
          />
          <Activities 
            image="/img/hut.png"
            title="Hut Conversations"
          />

        </div>
      </div>
    </section>

    {/* testimonials */}
    <Testimaonial />

    {/* pricing */}
    <section className="py-[40px] md:py-[120px] leading-[150%]" id="price">
      <div className="scroll-fade opacity-0 mx-auto max-w-[1248px] px-[16px] md:px-[20px] xl:px-0 fade-section">
        
        <h1 className="text-[16px] tracking-[16%] text-[#107269]">PRICING</h1>
        <h3 className="font-clash font-[600] my-[16px] text-[#0A1A18] text-[26px] md:text-[46px] leading-[100%] tracking-[3%] flex text-left flex-row flex-wrap md:items-center gap-y-[16px] gap-y-0 sm:gap-x-[12px] ">
          <span>Choose Your THR!BE </span>
          <div className="flex gap-x-[12px]">
            <span>Experience</span>
          <div className="relative w-[32px] md:w-[46px] h-[32px] md:h-[46px] rounded-full shrink-0">
            <Image src="/img/pricing.png" fill alt="thribe community" className="object-fit rounded-full shrink-0" />
            </div>
            </div>
        </h3>

        <div className="mt-[24px] md:mt-[80px] flex flex-col gap-y-[24px]  md:flex-row gap-x-[28px] justify-between">
          <div>
            <h3 className="font-[600] tracking-[3%] text-[#354764]">Payment frequency</h3>
            {/* for desktop view */}
            <ul className="mt-[40px] text-secondaryColor space-y-[24px] hidden md:block">
              <li className="">
                 <label className="flex items-center space-x-[24px] cursor-pointer" onClick={() => setSelectedPrice("monthly")}>
                    <input type="radio" name="price" value="monthly" className="peer hidden" />
                    <span className={`w-[24px] h-[24px] border rounded-full flex items-center justify-center ${selectedPrice === 'monthly' ? 'border-primaryGreen bg-primaryGreen' : 'border-[#AEACA3]'}`}>
                      <span className={`w-[10px] h-[10px] bg-[#fff] border border-[#fff] rounded-full`}></span>
                    </span>
                    <span className={`${selectedPrice === 'monthly' ? 'text-primaryGreen font-[500]' : ''}`}>Monthly </span>
                  </label>
              </li>
               <li className="flex items-center gap-x-[24px]">
                 <label className="flex items-center space-x-[24px] cursor-pointer" onClick={() => setSelectedPrice("quaterly")}>
                    <input type="radio" name="price" value="monthly" className="peer hidden" />
                    <span className={`w-[24px] h-[24px] border border-[#AEACA3]  rounded-full flex items-center justify-center ${selectedPrice === 'quaterly' ? 'border-primaryGreen bg-primaryGreen' : 'border-[#AEACA3]'}`}>
                      <span className={`w-[10px] h-[10px] bg-[#fff] border border-[#fff] rounded-full`}></span>
                    </span>
                    <span className={`${selectedPrice === 'quaterly' ? 'text-primaryGreen font-[500]' : ''}`}>Quaterly (save 5%) </span>
                  </label>
              </li>
              <li className="flex items-center gap-x-[24px]">
                <label className="flex items-center space-x-[24px] cursor-pointer" onClick={() => setSelectedPrice("yearly")}>
                    <input type="radio" name="price" value="monthly" className="peer hidden" />
                    <span className={`w-[24px] h-[24px] border border-[#AEACA3]  rounded-full flex items-center justify-center ${selectedPrice === 'yearly' ? 'border-primaryGreen bg-primaryGreen' : 'border-[#AEACA3]'}`}>
                      <span className={`w-[10px] h-[10px] bg-[#fff] border border-[#fff] rounded-full`}></span>
                    </span>
                    <span className={`${selectedPrice === 'yearly' ? 'text-primaryGreen font-[500]' : ''}`}>Yearly (save 15%) </span>
                  </label>
              </li>
            </ul>

            {/* for mobile view */}
              <ul className="mt-[16px] flex justify-between text-[16px] leading-[150%] tracking-[1%] text-secondaryColor block md:hidden">
                <li onClick={() => setSelectedPrice("monthly")} className={`px-[8px] py-[4px] ${selectedPrice === 'monthly' ? 'text-primaryGreen font-[600] border-[2px] border-b-primaryGreen border-x-0 border-t-0' : ''} `}>Monthly</li>
                <li onClick={() => setSelectedPrice("quaterly")} className={`px-[8px] py-[4px] ${selectedPrice === 'quaterly' ? 'text-primaryGreen font-[600] border-[2px] border-b-primaryGreen border-x-0 border-t-0' : ''} `}>Quarterly (-5%)</li>
                <li onClick={() => setSelectedPrice("yearly")} className={`px-[8px] py-[4px] ${selectedPrice === 'yearly' ? 'text-primaryGreen font-[600] border-[2px] border-b-primaryGreen border-x-0 border-t-0' : ''} `}>Yearly (-15%)</li>
              </ul>
          </div>

           <div className="relative bg-[#E8F6F4] p-[24px] sm:p-[60px] rounded-[20px] md:rounded-[40px] w-full md:w-[480px] min-h-[485px] sm:min-h-[650px]">
            <div className="space-y-[24px] md:space-y-[40px]">
              <h2 className="font-[600] leading-[120%] tracking-[3%] text-[#0A1A18]">Premium Membership</h2>
              <h3 className="text-[26px] sm:text-[32px] font-clash font-[600] text-[#107269] leading-[100%] tracking-[3%]">
                {Object.keys(prices).includes(selectedPrice) && prices[selectedPrice]}
                </h3>
              <h4 className="leading-[100%] tracking-[2%] text-secondaryColor">The premium  plan includes:</h4>

              <ul className="space-y-[16px] md:mt-[24px]">
                <PricingList title="Everything in free plan" />
                <PricingList title="Monthly Masterclasses" />
                <PricingList title="Discounts on external paid events" />
                <PricingList title="Legal employment contract reviews and advise." />
                <PricingList title="Yearly merch & rewards" />
              </ul>
            </div>

            {/* <div className="absolute bottom-[24px] sm:bottom-[60px] left-[24px] sm:left-[60px] w-[calc(100%-48px)] sm:w-[calc(100%-120px)]"> */}
             <div className="mt-[40px] w-full" onClick={togglePremiumMemberModal}>
               <Button  name="Be a Premium Member" classname="bg-primaryColor w-full shadow-[4px_4px_0px_0px_#003E39]" />
            </div>
          </div>

          <div className="relative bg-[#FEF1E6] p-[24px] sm:p-[60px] rounded-[20px] md:rounded-[40px] w-full md:w-[480px] min-h-[485px] sm:min-h-[650px]">
            <div className="space-y-[24px] sm:space-y-[40px]">
              <h2 className="font-[600] leading-[120%] tracking-[3%] text-[#0A1A18]">Free Membership</h2>
              <h3 className="text-[26px] sm:text-[32px] font-clash font-[600] text-[#F97502] leading-[100%] tracking-[3%]">Always Free</h3>
              <h4 className="leading-[100%] tracking-[2%] text-secondaryColor">The free  plan includes:</h4>

              <ul className="space-y-[16px] md:mt-[24px]">
                <PricingList title="Access to the main community" />
                <PricingList title="Join all general lives & chats" />
                <PricingList title="Access blog/podcast content" />
                <PricingList title="Participate in challenges & general community activities" />
                <PricingList title="Access to collaboration" />
                {/* <PricingList title="Access to job listings & posts" /> */}
              </ul>
            </div>
            <Link href="/#joinCommunity">
             <div className="mt-[40px] w-full">
               <Button name="Join THR!BE for free" classname="bg-[#B15301] w-[100%] shadow-[4px_4px_0px_0px_#693101] hover:shadow-[4px_4px_0px_0px_#FBA355]" />
            </div>
            </Link>
          </div>

         

        </div>
      </div> 
    </section>

      <Collaborate />    
      <JoinCommunity />
      <Footer />
   </div>
  );
}
