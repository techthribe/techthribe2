import Link from "next/link";

const TermsOfUse = () => {
    return(
        <section className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 pt-[34px] sm:pt-[74px] flex flex-col md:flex-row gap-[40px]">
            <div className="min-w-full md:min-w-[240px] text-secondaryColor text-[20px] font-clash tracking-[1%] space-y-[24px] sm:space-y-[40px] sm:shrink-0">
                <div><Link href="/legal/terms-of-service" className="font-[600] text-[#107269] ">Terms of Service</Link></div>
                <div><Link href="/legal/privacy-policy">Privacy Policy</Link></div>
                <div><Link href="/legal/membership">Premium membership</Link></div>
                
            </div>
 
            <div className="w-full md:w-[690px] space-y-[24px] sm:space-y-[40px] text-secondaryColor leading-[150%] tracking-[1%]">
                <p>
                    Welcome to THR!BE, a community dedicated to fostering connection, collaboration, 
                    and growth within the tech ecosystem. By accessing, joining, or participating in THR!BE (the “Community”), 
                    you agree to comply with the following Terms of Service. These terms govern your participation, behavior, 
                    and access to resources provided through THR!BE&#39;s platforms and offerings.
                </p>
                <div>
                   <h2 className="font-[700]">1. Community Conduct & Code of Ethics</h2>
                    <p>THR!BE is a values-driven space designed to be respectful, inclusive, and empowering. All members, whether free or premium, are expected to:</p>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Treat fellow members with dignity and respect.</li>
                    <li>Maintain a safe environment, free from discrimination, harassment, bullying, or exclusion.</li>
                    <li>Foster constructive, professional, and inclusive conversations.</li>
                    <li>Refrain from any behavior that disrupts community operations or negatively impacts others' experience.</li>
                    </ul>
                   <p> 
                    Failure to comply with these expectations may result in temporary or permanent removal from the community.
                   </p>
                </div>

                <div>
                   <h2 className="font-[700]">2. Privacy & Confidentiality</h2>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Members are expected to respect the privacy of others within the community.</li>
                    <li>Private conversations, shared job leads, personal information, or sensitive insights must not be shared outside the group without explicit permission.</li>
                    <li>THR!BE may collect basic user data (e.g., name, email address) solely for internal purposes such as event organization, communication, and service delivery. We do not share user data with third parties.</li>
                   </ul>
                </div>

                <div>
                   <h2 className="font-[700]">3. Events, Activities, and Participation</h2>
                    <p>
                     By participating in THR!BE-hosted events - including webinars, challenges, masterclasses, and live streams - members grant
                      THR!BE the right to record and reuse content for promotional and archival purposes, provided that member privacy and 
                      dignity are upheld.
                     Event attendance and participation are voluntary but encouraged to enhance the community experience.   
                    </p>
                </div>

                 <div>
                   <h2 className="font-[700]">4. Intellectual Property & Content Usage</h2>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Members retain ownership of content they create but grant THR!BE a non-exclusive license to share or promote member-contributed content within and outside the community, with appropriate credit.</li>
                    <li>THR!BE&#39;s name, logo, design assets, educational materials, and branded content may not be used, copied, distributed, or resold without prior written permission.</li>
                    </ul>
                </div>

                <div>
                   <h2 className="font-[700]">5. Communication</h2>
                    <p>All official communication related to community activities, premium services, and support will be distributed through</p>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Email newsletters</li>
                    <li>The official THR!BE group platform</li>
                    <li>Announcements on the THR!BE website or social channels</li>
                    </ul>
                   <p> 
                    Members are responsible for staying informed and updated via these channels.
                   </p>
                </div>

                <div>
                   <h2 className="font-[700]">6. Premium Membership Terms</h2>
                    <p>
                    THR!BE offers an optional Premium Membership for a recurring monthly fee. Premium members gain access to additional services and benefits that include:
                    </p>
                    <div>
                    <p>a. Premium Benefits</p>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Interview Preparation: One session per month (30–45 minutes via video or voice).</li>
                    <li>CV/Portfolio Review: One review per quarter.</li>
                    <li>Contract Review and Advisory: One legal contract review every two months.</li>
                    <li>Annual THR!BE Merchandise: One official merch item per year.</li>
                    <li>Exclusive Discounts: Reduced pricing for paid events, live sessions, and partner offers.</li>
                    </ul>
                    </div>
                    <div>
                    <p>b. Subscription & Billing</p>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Premium membership is billed monthly and renews automatically.</li>
                    <li>Members may cancel their subscription at any time. Access continues until the end of the billing cycle.</li>
                    <li>No refunds will be issued for unused benefits or missed services.</li>
                    </ul>
                    </div>
                    <div>
                    <p>b. Subscription & Billing</p>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Premium membership is billed monthly and renews automatically.</li>
                    <li>Members may cancel their subscription at any time. Access continues until the end of the billing cycle.</li>
                    <li>No refunds will be issued for unused benefits or missed services.</li>
                    </ul>
                    </div>
                    <div>
                    <p>c. Subscription & Billing</p>
                    <p>
                    All general community rules apply to Premium Members. 
                    Being a premium member does not exempt individuals from community expectations or consequences for violations. 
                    </p>
                    </div>
                </div>

                 <div>
                   <h2 className="font-[700]">7. Termination of Access</h2>
                    <p>THR!BE reserves the right to suspend or terminate any member&#39;s access - free or premium - without notice in the event of:</p>
                    <ul className="list-disc list-outside pl-[30px]">
                    <li>Repeated violations of community guidelines</li>
                    <li>Fraudulent behavior or impersonation</li>
                    <li>Intentional disruption of events or harassment of members</li>
                    <li>Use of THR!BE for spam, solicitation, or irrelevant self-promotion</li>
                    </ul>
                   <p> 
                    In cases of termination, premium members will not be refunded for the current subscription period.
                   </p>
                </div>

                <div>
                   <h2 className="font-[700]">8. Membership Activity & Weeding Policy</h2>
                    <p>To maintain a vibrant, engaged, and high-value community, THR!BE routinely reviews participation. We reserve the right to remove members based on the following conditions:</p>
                    <div className="space-y-[24px] sm:space-y-[40px]">
                    <div>
                        <h5>a. Inactive Memberships</h5>
                        <p>
                        Members may be removed after 60 consecutive days of inactivity, defined as no engagement with events, 
                        content, discussions, or group check-ins. Inactivity will be evaluated fairly and members will receive 
                        at least one reminder or opt-in prompt before removal
                        </p>
                    </div>
                    <div>
                        <h5>b. Misaligned Participation</h5>
                        <p>Members who consistently:</p>
                         <ul className="list-disc list-outside pl-[30px]">
                            <li>Join solely for passive observation,</li>
                            <li>Avoid collaboration or engagement,</li>
                            <li>Or act in a manner misaligned with THR!BE&#39;s purpose, may be removed following a documented review</li>
                        </ul>
                    </div>
                     <div>
                        <h5>c. Right to Moderate and Remove</h5>
                        <p>
                        THR!BE reserves the right to pause, mute, or remove any member - regardless of membership tier - to protect the integrity, 
                        experience, and mission of the community. 
                        </p>
                    </div>
                    </div>
                </div>

                <div>
                   <h2 className="font-[700]">9. Modification of Services</h2>
                    <p>
                    We reserve the right to modify, suspend, or discontinue any part of the community services, 
                    including but not limited to: events, benefits,
                    communication formats, pricing, or terms of service. Notice will be given in advance for significant changes. 
                    </p>   
                </div>

                 <div>
                   <h2 className="font-[700]">10. Contact</h2>
                    <p>For questions, concerns, or support inquiries, please contact</p>   
                    <div><Link href="#" className="underline text-primaryColor">Hello@thribe.com</Link></div>
                    <div><Link href="#" className="underline text-primaryColor">www.thribe.com</Link></div>
                    <p>Thank you for being part of THR!BE - a community built with intention, integrity, and the belief that we all grow better together.</p>
                </div>


            </div>

        </section>
    )
}

export default TermsOfUse;