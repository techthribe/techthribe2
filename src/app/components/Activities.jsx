import Image from "next/image";

const Activities = ({image, title}) => {
    return(
        <div className="w-[159px] md:w-[300px] text-center">
            <div className="flex justify-center items-center w-[60px] sm:w-[100px] h-[60px] sm:h-[100px] rounded-full mx-auto bg-[#FFE198]">
                <div className="relative w-[36px] sm:w-[60px] h-[36px] sm:h-[60px]">
                <Image src={image} fill alt="thribe tech community" className="object-center" />
                </div>
            </div>
            <h3 className="text-[16px] sm:text-[20px] mt-[24px] font-[600] text-[#fff] leading-[120%] tracking-[2%] text-clash">
                {title}
            </h3>
        </div>
    )
}

export default Activities;