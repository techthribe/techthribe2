import NavigationBar from "../components/navigation2";
import MobileNavigationBar from "../components/MobileNav";
import Image from "next/image";
import JoinCommunity from "../components/joinCommunity";
import Footer from "../components/Footer";

const Events = () => {
    return(
        <main >
            <div className="bg-[#0A1A18]">
            <NavigationBar />
            <MobileNavigationBar />
            <section className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 pt-[80px] md:pt-[148px] pb-[92px] md:pb-[120px] tracking-[1%] space-y-[40px]">
            <div className="max-w-[1170px]">
                <h1 className="text-[16px] leading-[150%] tracking-[16%] text-[#FFE198]">BLOGS & NEWS</h1>
                <h2 className="font-[600] leading-[120%] text-[#fff] text-[32px] md:text-[66px] tracking-[1%] font-clash mt-[16px] mb-[24px]">Where <span className="text-[#FFE198]">THR!BE</span> Speaks Loud, Real & Unfiltered</h2>
                <p className="w-full leading-[150%] tracking-[1%] text-[#C2C7D0]">
                Thoughts, truths, tech, and all the things we&#39;re not supposed to say out loud - we say them here.
                </p>
            </div>
            </section>
            </div>
           
            <JoinCommunity />
             <Footer />
           
        </main>
    )
}

export default Events;