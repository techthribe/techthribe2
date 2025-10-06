import Link from "next/link";

const Privacy = () => {
    return(
        <section className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 pt-[34px] sm:pt-[74px] flex flex-col md:flex-row gap-[40px]">
            <div className="min-w-full md:min-w-[240px] text-secondaryColor font-clash tracking-[1%] space-y-[24px] sm:space-y-[40px] sm:shrink-0">
                <div><Link href="/legal/terms-of-use">Terms of Service</Link></div>
                <div><Link href="/legal/privacy-policy" className="font-[600] text-[#107269] ">Privacy Policy</Link></div>
                <div><Link href="/legal/membership">Premium membership</Link></div>
                
            </div>
 
            <div className="w-full md:w-[690px] space-y-[24px] sm:space-y-[40px] text-secondaryColor leading-[150%] tracking-[1%]">
                <p>
                   At THR!BE, we value your privacy. This Privacy Policy explains how we collect, 
                   use, and protect your personal information when you engage with us through our platform, events, 
                   forms, or community tools.
                </p>
                <div>
                   <h2 className="font-[700]">What We Collect:</h2>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Basic contact details (name, email, phone)</li>
                    <li>Skill information and preferences</li>
                    <li>Resume/portfolio (if shared)</li>
                    <li>Payment details (for premium members)</li>
                    <li>Interaction data (event participation, form submissions, etc.)</li>
                    </ul>
                </div>

                <div>
                   <h2 className="font-[700]">How We Use It:</h2>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>To match you with internship or job opportunities</li>
                    <li>To provide community support and learning resources</li>
                    <li>To send relevant updates, newsletters, and event info</li>
                    <li>To improve our offerings and tailor your experience</li>
                    <li>To process subscriptions (if you&#39;re a premium member)</li>
                    </ul>
                </div>

                <div>
                   <h2 className="font-[700]">We Don&#39;t:</h2>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Sell or rent your data</li>
                    <li>Share your data with third parties without consent (except service providers like email or payment platforms we use)</li>
                    </ul>
                </div>

                <div>
                   <h2 className="font-[700]">Your Rights</h2>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Request, update, or delete your data anytime</li>
                    <li>Opt-out of non-essential emails</li>
                    <li>Reach us anytime at [your email] for privacy-related requests</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Privacy;