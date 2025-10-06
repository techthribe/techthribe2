import Link from "next/link";

const Membership = () => {
    return(
        <section className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 pt-[34px] sm:pt-[74px] flex flex-col md:flex-row gap-[40px]">
            <div className="min-w-full md:min-w-[240px] text-secondaryColor font-clash tracking-[1%] space-y-[24px] sm:space-y-[40px] sm:shrink-0 leading-[100%]">
                <div><Link href="/legal/terms-of-service" >Terms of Service</Link></div>
                <div><Link href="/legal/privacy-policy">Privacy Policy</Link></div>
                <div><Link href="/legal/membership" className="font-[600] text-[#107269]">Premium membership</Link></div>         
            </div>
 
            <div className="w-full md:w-[690px] space-y-[24px] sm:space-y-[40px] text-secondaryColor leading-[150%] tracking-[1%]">
                <p>
                    By subscribing to THR!BE Premium, you agree to the following terms and conditions, 
                    which outline your rights and obligations as a premium member and our commitments to you.
                </p>
                <div>
                   <h2 className="font-[700]">1. Subscription Overview</h2>
                    <p>
                    THR!BE Premium is a paid membership that grants exclusive benefits and priority access to THR!BE&#39;s career, 
                    legal, and learning resources. By subscribing, 
                    you receive value-added services designed to accelerate your personal and professional growth.
                    </p>
                </div>

                 <div>
                   <h2 className="font-[700]">2. Included Benefits</h2>
                    <p>As a Premium member, you will gain access to the following:</p>
                    <div className="space-y-[24px] sm:space-y-[40px]">
                    <div>
                        <h5>a. Discounts on External Paid Events</h5>
                        <ul className="list-disc list-outside pl-[30px]">
                            <li>THR!BE partners with external event organizers to provide discounts.</li>
                            <li>Discounts are valid only for events officially listed by THR!BE.</li>
                            <li>Discount levels may vary and are subject to availability.</li>
                        </ul>
                    </div>
                    <div>
                        <h5>b. Project Reviews</h5>
                         <ul className="list-disc list-outside pl-[30px]">
                            <li>You may submit up to 2 project reviews per quarter.</li>
                            <li>Reviews include expert critique, UI/UX feedback, and career advice.</li>
                            <li>Additional reviews may be available for an extra fee.</li>
                        </ul>
                    </div>
                     <div>
                        <h5>c. Exclusive Job Board</h5>
                            <ul className="list-disc list-outside pl-[30px]">
                                <li>You get early access to premium job opportunities vetted by our team.</li>
                                <li>THR!BE does not guarantee job placement.</li>
                                <li>Listings are curated for quality and relevance.</li>
                            </ul>
                    </div>
                    <div>
                        <h5>d. Legal Employment Contract Reviews & Advice</h5>
                            <ul className="list-disc list-outside pl-[30px]">
                                <li>Members may submit 1 employment contract per quarter for review.</li>
                                <li>Reviews are done by licensed professionals or legal advisors affiliated with THR!BE.</li>
                                <li>Advice is general guidance, not a replacement for legal representation.</li>
                            </ul>
                    </div>
                     <div>
                        <h5>e. Yearly Merch & Rewards</h5>
                            <ul className="list-disc list-outside pl-[30px]">
                                <li>Members receive 1 exclusive merchandise package per subscription year.</li>
                                <li>Shipping times and designs may vary.</li>
                                <li>Rewards may include digital products, discount codes, or gifts.</li>
                            </ul>
                    </div>
                    </div>
                </div>

                <div>
                   <h2 className="font-[700]">3. Membership Fees</h2>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>The Premium plan is billed monthly, quaterly or annually, depending on your selection.</li>
                    <li>All fees are clearly displayed at checkout and are non-refundable once processed.</li>
                    <li>Prices are subject to change, with prior notice given to current subscribers.</li>
                   </ul>
                </div>

                <div>
                   <h2 className="font-[700]">4. Cancellations & Refunds</h2>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>You can cancel anytime via your account dashboard or by emailing support.</li>
                    <li>Cancellations take effect at the end of your current billing cycle.</li>
                    <li>Partial refunds are not issued for unused benefits within a billing period.</li>
                   </ul>
                </div>

                <div>
                   <h2 className="font-[700]">5. Fair Use Policy</h2>
                   <p>To ensure fairness and sustainability:</p>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Reviews and legal consultations are limited as outlined above.</li>
                    <li>Abuse (e.g., spamming job board access, mass content downloads, or reselling benefits) may result in suspension without refund.</li>
                    <li>Membership is non-transferable.</li>
                   </ul>
                </div>

                <div>
                   <h2 className="font-[700]">6. THR!BE&#39;s Right</h2>
                   <p>To ensure fairness and sustainability:</p>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Reviews and legal consultations are limited as outlined above.</li>
                    <li>Abuse (e.g., spamming job board access, mass content downloads, or reselling benefits) may result in suspension without refund.</li>
                    <li>Membership is non-transferable.</li>
                   </ul>
                </div>

                <div>
                   <h2 className="font-[700]">7. Data & Privacy</h2>
                   <p>
                    Your data will be processed in accordance with our Privacy Policy. By subscribing, 
                    you consent to our data handling practices for communication, billing, and service delivery.
                   </p>
                </div>

                <div>
                   <h2 className="font-[700]">8. Governing Law</h2>
                   <p>
                    These terms are governed by the laws of 
                    [Insert Country/Jurisdiction]. Disputes will be resolved in [Insert Legal Location] under fair arbitration.
                   </p>
                </div>

                <div>
                   <h2 className="font-[700]">9. Contact</h2>
                   <p>
                     For support, cancellations, or inquiries:
                   </p>
                   <div>
                    <Link href="#" className="decoration text-[#107269]">Hello@thribe.com</Link>
                   </div>
                    <div>
                    <Link href="#" className="decoration text-[#107269]">www.thribe.com</Link>
                   </div>
                </div>




            </div>

        </section>
    )
}

export default Membership;