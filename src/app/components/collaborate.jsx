

"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useAllContext } from "../context/allcontext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Collaborate = () => {
  const { toggleLendYourVoiceThribeModal, toggleJoinTournamentModal } = useAllContext();

  const intervalRef = useRef(null);
  const jerseyIntervalRef = useRef(null);

  const [hoverLendVoice, setHoverLendVoice] = useState(false);
  const [hoverJoinTournament, setHoverJoinTournament] = useState(false);
  const [hoverJerseyContainer, setHoverJerseyContainer] = useState(false);
  const [activeJerseyImage, setActiveJerseyImage] = useState(0);
  const [currentImg, setCurrentImg] = useState(0);

  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);

  const animationImages = [
    "/img/tote1.png",
    "https://res.cloudinary.com/chiaka/image/upload/v1759018554/Property_1_Stickers_Packaging_ffaa1y.png",
    "https://res.cloudinary.com/chiaka/image/upload/v1759018553/Property_1_Component_64_yq1t1a.png",
  ];

  const jerseyImages = [
    "https://res.cloudinary.com/chiaka/image/upload/v1759018514/shirt_ih6qka.png",
    "https://res.cloudinary.com/chiaka/image/upload/v1759022875/Property_1_Component_128_so16jm.png",
  ];

  // ✅ ScrollTrigger for Card 1
  useEffect(() => {
    if (!cardRef1.current) return;

    const handleResize = () => {
      const isMobile = window.innerWidth < 800;

      ScrollTrigger.getById("card1Trigger")?.kill();

      if (isMobile) {
        ScrollTrigger.create({
          id: "card1Trigger",
          trigger: cardRef1.current,
          start: "top 80%",  
          end: "bottom+=100 bottom",     // End when bottom hits bottom of viewport
          onEnter: () => setHoverLendVoice(true),
          onLeave: () => setHoverLendVoice(false),
          onEnterBack: () => setHoverLendVoice(true),
          onLeaveBack: () => setHoverLendVoice(false),
          markers: false,
        });
        ScrollTrigger.refresh(); 
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getById("card1Trigger")?.kill();
    };
  }, []);

  // ✅ ScrollTrigger for Card 2
  useEffect(() => {
    if (!cardRef2.current) return;

    const handleResize = () => {
      const isMobile = window.innerWidth < 800;

      ScrollTrigger.getById("card2Trigger")?.kill();

      if (isMobile) {
        ScrollTrigger.create({
          id: "card2Trigger",
          trigger: cardRef2.current,
          start: "top 80%",
          end: "bottom+=100 bottom",
          onEnter: () => {
            setHoverJoinTournament(true),
            startInterval()
          },
          onLeave: () => {
            setHoverJoinTournament(false),
            stopInterval()
          },
          onEnterBack: () => {
            setHoverJoinTournament(true),
            startInterval()
          },
          onLeaveBack: () => {
            setHoverJoinTournament(false),
            stopInterval()
          },
          markers: false,
        });
         ScrollTrigger.refresh();
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getById("card2Trigger")?.kill();
    };
  }, []);

  // ✅ Jersey hover animation
  useEffect(() => {
    if (hoverJerseyContainer) {
      jerseyIntervalRef.current = setInterval(() => {
        setActiveJerseyImage((prev) => (prev === 0 ? 1 : 0));
      }, 1000);
    } else {
      clearInterval(jerseyIntervalRef.current);
      jerseyIntervalRef.current = null;
      setActiveJerseyImage(0);
    }

    return () => clearInterval(jerseyIntervalRef.current);
  }, [hoverJerseyContainer]);

  // ✅ Interval for tote bag animation
  const startInterval = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % animationImages.length);
    }, 1000);
  };

  const stopInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setCurrentImg(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="py-[40px] md:py-[120px] w-full">
      <div className="scroll-fade opacity-0 max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0">
        {/* Heading */}
        <h1 className="text-[16px] tracking-[16%] text-[#354764] uppercase">
          SUPPORT, PARTNER, COLLABORATE
        </h1>

        <h3 className="font-clash font-[600] my-[16px] text-[#0A1A18] text-[26px] md:text-[46px] leading-[100%] tracking-[3%] flex text-left flex-row flex-wrap md:items-center gap-y-[11px] md:gap-y-0 gap-x-[5px]">
          <span>Let&#39;s Build Something</span>
          <div className="flex gap-x-[12px]">
            <span>Together</span>
            <div className="relative w-[32px] md:w-[46px] h-[32px] md:h-[46px] rounded-full shrink-0">
              <Image
                src="/img/build.png"
                fill
                alt="thribe community"
                className="object-fit rounded-full shrink-0"
              />
            </div>
          </div>
        </h3>

        <h3 className="tracking-[2%] text-secondaryColor mt-[8px]">
         Every voice adds to the culture we&#39;re shaping. Lend Your Voice and rep the brand
        </h3>

        {/* Cards */}
        <div className="mt-[40px] md:mt-[80px] flex flex-wrap lg:flex-nowrap justify-between gap-[40px]">
          {/* Card 1 */}
          <div
            ref={cardRef1}
            onMouseEnter={() => setHoverLendVoice(true)}
            onMouseLeave={() => setHoverLendVoice(false)}
            onClick={toggleLendYourVoiceThribeModal}
            className={`${
              !hoverLendVoice
                ? "bg-[#B7E2DE]"
                : "shadow-[7px_7px_0px_0px_#64C0B7] bg-primaryGreen text-[#fff]"
            } min-h-[459px] sm:min-h-[653px] w-full sm:w-[600px] mx-auto cursor-pointer rounded-[16px] sm:rounded-[40px] border border-[#17A194] p-[24px] sm:p-[40px]`}
          >
            <div className="relative w-full h-[213px] sm:h-[373px] rounded-[20px] mx-auto">
              <Image
                src={
                  !hoverLendVoice
                    ? "https://res.cloudinary.com/chiaka/image/upload/v1759018854/8AB6934A-95F6-4001-BEF2-A717D6879770_hdyvtd.png"
                    : "https://res.cloudinary.com/chiaka/image/upload/v1759018853/552F5143-0D49-4536-93FC-5CA6E8520604_1_snuv8v.png"
                }
                fill
                alt="build with thribe community"
                className="object-cover rounded-[20px]"
              />
            </div>

            <div className="mt-[16px] sm:mt-[24px] space-y-[13px] sm:space-y-[24px] text-[#0A1A18]">
              <h2
                className={`font-clash leading-[120%] tracking-[3%] font-[600] ${
                  hoverLendVoice ? "text-[#fff]" : ""
                }`}
              >
                Lend Your Voice
              </h2>
              <p className={`tracking-[2%] leading-[150%] ${hoverLendVoice ? "text-[#fff]" : ""}`}>
                Add your perspective, share your story, or spark a conversation.
                Every voice helps shape a tech culture that feels more human.
              </p>

              <button
                className={`${
                  !hoverLendVoice ? "bg-[#107269] w-[104px] text-[#fff]" : "w-[284px] bg-[#fff]"
                } transition-all duration-500 ease-in-out shadow-[4px_4px_0px_0px_#003E39] flex justify-center items-center cursor-pointer font-[500] text-[18px] h-[44px] sm:h-[56px] rounded-[100px]`}
              >
                {!hoverLendVoice ? (
                  <Image src="/icons/arrow-white.png" width={24} height={24} alt="arrow" />
                ) : (
                  <div className="flex justify-center items-center space-x-[14px] text-primaryGreen">
                    <div className="min-w-[180px] transition-all duration-500 ease-in-out">
                      Start the Conversation
                    </div>
                    <span className="material-symbols-outlined text-[24px]">Arrow_forward</span>
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <Link href="https://paystack.shop/tech-thribe">
          <div
            ref={cardRef2}
            onMouseEnter={() => {
              setHoverJoinTournament(true);
              startInterval();
            }}
            onMouseLeave={() => {
              setHoverJoinTournament(false);
              stopInterval();
            }}
            className={`${
              !hoverJoinTournament
                ? "bg-[#FFF1D0]"
                : "shadow-[7px_7px_0px_0px_#F97502] bg-[#FFE198] text-[#fff]"
            } cursor-pointer rounded-[16px] sm:rounded-[40px] border border-[#E8CD8A] p-[24px] sm:p-[40px] min-h-full sm:min-h-[653px] w-full sm:w-[600px] mx-auto`}
          >
            <div
              className={`relative w-full h-[213px] sm:h-[373px] rounded-[20px] mx-auto ${
                !hoverJoinTournament ? "bg-[#D3D7DA]" : "bg-[#fff]"
              }`}
            >
              <Image
                src={
                  !hoverJoinTournament ? "https://res.cloudinary.com/chiaka/image/upload/v1759653376/Gemini_Generated_Image_8ulrf68ulrf68ulr_2_1_wdqzug.png" : animationImages[currentImg]
                }
                fill
                alt="build with thribe community"
                className="transition-all duration-1000 ease-in-out object-center rounded-[20px]"
              />
            </div>

            <div className="mt-[16px] sm:mt-[24px] space-y-[13px] sm:space-y-[24px] text-[#0A1A18]">
              <h2 className="leading-[120%] tracking-[3%] font-clash font-[600]">Rep the Brand</h2>
              <p className="tracking-[2%]">
                Wear the spirit of THRIBE everywhere you go. Grab your merch, rep the tribe, and
                show the world that thriving is more than work - it's a lifestyle.
              </p>

              <button
                className={`${
                  !hoverJoinTournament ? "w-[104px]" : "w-[284px]"
                } transition-all duration-500 ease-in-out text-[#fff] shadow-[4px_4px_0px_0px_#003E39] bg-[#107269] flex justify-center items-center cursor-pointer font-[500] text-[18px] h-[44px] sm:h-[56px] rounded-[100px]`}
              >
                {!hoverJoinTournament ? (
                  <Image src="/icons/arrow-white.png" width={24} height={24} alt="arrow" />
                ) : (
                  <div className="flex justify-center items-center space-x-[14px]">
                    <div className="min-w-[40px] transition-all duration-500 ease-in-out">
                      Rep the Brand
                    </div>
                    <span className="material-symbols-outlined text-[24px]">Arrow_forward</span>
                  </div>
                )}
              </button>
            </div>
          </div>
          </Link>
        </div>

        {/* Coming Soon Section */}
        <div
          onMouseEnter={() => setHoverJerseyContainer(true)}
          onMouseLeave={() => setHoverJerseyContainer(false)}
          className={`flex flex-col md:flex-row items-center justify-between gap-[24px] mt-[48px] ${
            !hoverJerseyContainer
              ? "border border-[#FCC08B] bg-[#FEF1E6] text-primaryTextColor"
              : "text-[#EBEDF0] border border-t-0 border-l-0 border-b-[6px] border-r-[6px] border-[#F97502] bg-[#693101]"
          } rounded-[40px] p-[24px] sm:p-[40px] w-full`}
        >
          {/* Images */}
          <div className="relative w-full sm:w-[520px] h-[213px] sm:h-[373px] rounded-[20px] overflow-hidden">
            {!hoverJerseyContainer ? (
              <Image
                src="https://res.cloudinary.com/chiaka/image/upload/v1758798676/tournament_sdfcge.png"
                fill
                alt="tech community in Nigeria"
                className="object-cover"
              />
            ) : (
              jerseyImages.map((src, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ease-in-out rounded-[20px] ${
                    activeJerseyImage === i ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))
            )}
          </div>

          {/* Text */}
          <div className="w-full md:w-[620px] space-y-[14px] sm:space-y-[24px]">
            <h1 className="font-[600] font-clash leading-[120%] tracking-[3%]">
              Join the Tournament
            </h1>
            <div>
              Step off the screen and onto the field. Play, cheer, or rep your team/company
              because thriving means balance, fun, and community spirit.
              <p className="hidden md:block">
                This isn&#39;t just a game, it&#39;s where techies swap keyboards for jerseys,
                competition meets collaboration, and friendships are built beyond the screen.
                Whether you&#39;re scoring goals, cheering from the sidelines, or rocking your
                team colors, you&#39;re part of something bigger. Get ready to connect, sweat,
                laugh, and thrive together.
              </p>
            </div>

            <button
              className={`cursor-pointer rounded-[100px] w-[174px] sm:w-[190px] h-[47px] sm:h-[56px] ${
                !hoverJerseyContainer
                  ? "border border-[#F97502] text-[#F97502]"
                  : "border border-[#FFFFFF] text-[#FFFFFF]"
              } px-[29px] sm:px-[40px] font-[500] text-[18px] leading-[150%] tracking-[3%]`}
            >
              <span>Coming soon</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;



