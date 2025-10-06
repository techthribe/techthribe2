import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const EventBanner = ({img, type, description, background, btnClassname, name, role, date, time, btnText, btnLink, venue,}) => {
    return(
         <div className="scroll-fade opacity-0 text-[18px] md:text-[20px] leading-[150%] tracking-[1%]">
                    <div className={`p-[16px] md:p-[40px] w-full rounded-[40px] ${background} flex flex-col md:flex-row justify-between gap-x-[20px] xl:gap-x-[40px] items-center`}>
                        <div className="w-full md:w-[150px] rounded-[20px] md:rounded-0 h-[440px] md:h-[212px] bg-[#fff] flex justify-center items-center p-[20px] md:p-0"> 
                            <div className="relative w-full md:w-[129px] h-[398px] md:h-[192px]">
                            <Image src={img} fill alt="thribe community event" className="bg-cover rounded-[10px] md:rounded-[5px]"/>
                            </div>
                        </div>

                        <div className="w-full md:w-[547px] mt-[24px] md:mt-0">
                            <h2 className="font-[700] text-[#0A1A18]">{type}</h2>
                            <p className="mt-[12px] text-secondaryColor"> 
                            {description}
                            </p>
                             <div className="mt-[24px]">
                            <h5 className="font-[500] text-[#0A1A18]">{name}</h5>
                            <p className="text-[18px] text-secondaryColor">{role}</p>
                        </div>
                        </div>

                        <div className="flex flex-col gap-y-[12px] text-secondaryColor text-left md:text-right mb-[24px] md:mb-0 mt-[12px] md:mt-0 w-full md:w-[149px]">
                            <h3 className="font-[600] text-[26px] md:text-[32px] text-[#0A1A18]">{date}</h3>
                            <span>{time}</span>
                            <span>{venue}</span>
                        </div>

                        <div className="w-full md:w-[190px]">
                        <Link href={btnLink}>
                        <Button name={btnText} classname={`${btnClassname} w-full md:w-[190px]`}/>
                        </Link>
                        </div>
                    </div>

                </div>
    )
}

export default EventBanner;