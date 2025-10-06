"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TeamCard = ({
  classname,
  classnameHover,
  hoverText,
  name,
  nickname,
  role,
  img,
}) => {
  const [hoverCard, setHoverCard] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setHoverCard((prev) => !prev);
    }
  };

  useEffect(() => {
    if (isMobile && cardRef.current) {
      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: cardRef.current,
          start: "top 80%",
          end: "bottom 20%",
          onEnter: () => setHoverCard(true),
          onLeave: () => setHoverCard(false),
          onEnterBack: () => setHoverCard(true),
          onLeaveBack: () => setHoverCard(false),
        });
      }, cardRef);

      return () => ctx.revert();
    }
  }, [isMobile]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={!isMobile ? () => setHoverCard(true) : undefined}
      onMouseLeave={!isMobile ? () => setHoverCard(false) : undefined}
      onClick={handleClick}
      className="w-full md:w-[48%] lg:w-[30%] xl:w-[280px] h-[354px] sm:h-[420px]"
    >
      {/* Front */}
      <div
        className={`${
          hoverCard ? "hidden" : "block"
        } ${classname} text-center text-[#0A1A18] rounded-[20px] p-[40px] space-y-[24px]`}
      >
        <div className="relative w-[140px] sm:w-[200px] mx-auto h-[140px] sm:h-[200px] rounded-full">
          <Image
            src={img}
            fill
            alt="thribe community team"
            className="object-cover rounded-full"
          />
        </div>
        <div>
          <h1 className="font-[600] font-clash tracking-[3%] leading-[120%] text-[20px]">
            {name}
          </h1>
          <h5 className="tracking-[1%] leading-[150%]">{nickname}</h5>
        </div>
        <h5 className="font-[400] sm:font-[500]">{role}</h5>
      </div>

      {/* Back */}
      <div
        className={`${
          hoverCard ? "block" : "hidden"
        } ${classnameHover} text-left text-[#fff] rounded-[20px] h-full p-[40px] space-y-[24px]`}
      >
        <div className="relative w-[80px] sm:w-[50px] h-[80px] sm:h-[50px] rounded-full">
          <Image
            src={img}
            fill
            alt="thribe community team"
            className="object-cover rounded-full"
          />
        </div>
        <h1 className="font-[600] font-clash tracking-[3%] leading-[120%] text-[20px]">
          {name}
        </h1>
        <div>{hoverText}</div>
      </div>
    </div>
  );
};

export default TeamCard;
