import Image from "next/image";

const PricingList = ({title}) => {
    return(
    <li className="flex gap-x-[16px] block items-start text-[16px] sm:text-[20px]">
        <div className="shrink-0 w-[20px] h-[20px] relative">
            <Image src="/img/check.png" fill alt="thribe community pricing" className="shrink-0 object-cover" />
            </div>
        <div className="mt-[-3px]">{title}</div>
    </li>
    )
}

export default PricingList;