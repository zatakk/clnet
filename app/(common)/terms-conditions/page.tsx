
import Breadcrumb from "@/components/Shared/Breadcrumb";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import Link from "next/link";

export default function TermsConditionsPage() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        title="Terms and Conditions"
        sectionClass="project-section md:py-[150px] sm:py-[100px] py-20"
        items={[{ label: "Home", href: "/" }, { label: "Terms and Conditions" }]}
      />


      {/* <Breadcrumb
        title="Terms & Conditions"
        sectionClass="terms-section"
        items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]}
      /> */}
      <section className="bg-nu10 lg:py-20 md:py-16 py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-nu30 fontMont sm:font-bold font-semibold mb-8"
              data-aos="fade-right"
              data-aos-duration="2000">
              Terms and Conditions
            </h1>
            
            <div className="space-y-8 text-nu50">
              <div data-aos="fade-up" data-aos-duration="1200">
                <h1 className="text-nu30 fontMont text-3xl font-bold mb-6">TERMS OF SERVICE AGREEMENT</h1>
                <p className="font-bold mb-4">
                  PLEASE READ THESE TERMS & CONDITIONS CAREFULLY BEFORE YOU AGREE TO SUBSCRIBE TO OUR SERVICES ONLINE AND DO TRANSACTIONS. BY USING THIS WEBSITE OR ORDERING SERVICES FROM THIS WEBSITE YOU AGREE TO BE BOUND BY ALL OF THE TERMS AND CONDITIONS OF THIS AGREEMENT WITHOUT ANY EXCEPTION.
                </p>
                <p className="mb-4">
                  These <strong>Terms and Conditions</strong> govern the way in which we render our services to you. Some are Free and Some are paid based on the type of service chosen by you, including any eLearning courses.
                </p>
                <p className="mb-4">
                  These terms tell you who we are, how we will provide services / products to you, how you and we may change or end the contract, what to do if there is a problem and other important information. All rights not expressly granted in these terms are hereby reserved.
                </p>
                <p className="mb-4">
                  You agree to review this agreement periodically to ensure that you are aware of any amendments to this agreement, which may be made at any time.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-duration="1400">
                <h2 className="text-nu30 fontMont text-2xl font-bold mb-4">DEFINITIONS</h2>
                <p className="mb-4">The Definitions of the Terms used in the website shall be as follows. Any Terms not specifically mentioned here shall be having their colloquial meaning in general as applicable to the context.</p>
                
                <div className="space-y-4">
                  <p><strong>"Trikona Conskill"</strong> means Trikona Conskill Consulting LLP registered under the MCA, India and its rightful heirs and Power of Attorney Holders including the Partners and other Franchisee Owners;</p>
                  
                  <p><strong>"Agreement"</strong> means the Registration Form and other Forms together with the Terms mentioned here and the Website Terms;</p>
                  
                  <p><strong>"Registration Form"</strong> means the form used by the User to Register Services from Trikona Conskill;</p>
                  
                  <p><strong>"Purchase Form"</strong> means the form used by the User to Purchase Services from Trikona Conskill;</p>
                  
                  <p><strong>"Trikona Online"</strong> means Trikona Conskill's eLearning environment where the Services can be accessed;</p>
                  
                  <p><strong>"Trikona Credits"</strong> means the currency used for transactions on 'Trikona Online' by the User to Purchase Services from Trikona Conskill;</p>
                  
                  <p><strong>"Commencement Date"</strong> means the date for commencement of the Services;</p>
                  
                  <p><strong>"Completion Date"</strong> means the date for completion of the Services as specified for the services registered for;</p>
                  
                  <p><strong>"Charges"</strong> means the fees for the Services, as set on in the Registration Form, which are payable in accordance with these Terms;</p>
                  
                  <p><strong>"Documentation"</strong> means the information and materials made available to the User by Trikona Online in connection with the Services;</p>
                  
                  <p><strong>"Intellectual Property Rights"</strong> means any patents, rights to inventions, copyright and related rights, trade marks, business names and domain names, rights in get-up, goodwill and the right to sue for passing off, rights in designs, database rights, rights to use, and protect the confidentiality of, confidential information (including know-how), and all other intellectual property rights, in each case whether registered or unregistered and including all applications and rights to apply for and be granted, renewals or extensions of, and rights to claim priority from, such rights and all similar or equivalent rights or forms of protection which subsist or will subsist now or in the future in any part of the world;</p>
                  
                  <p><strong>"Services"</strong> means the access to and provision of e-learning modules by Trikona Online consisting of eLearning courses, articles, posts, etc., and all of which are accessed via the LMS Platform including communications via any other third party audio-video etc.,; all other services as mentioned in the website and the user is intending to or is actually making use of.</p>
                  
                  <p><strong>"Products"</strong> means the courses, stand-alone assesments or any other online service packaged and available for purchase on the website at indicated prices.</p>
                  
                  <p><strong>"Terms"</strong> means these Terms and Conditions for the supply of the Services;</p>
                  
                  <p><strong>"User"</strong> means a person who has Subscribed to our website and/or utilised free / purchased Services from Trikona; and</p>
                  
                  <p><strong>"Website Terms"</strong> means Trikona website Terms of Use</p>
                  <p className="pl-4">
                    (<Link href="http://www.trikona.conskill.in/terms-and-conditions" className="text-primary hover:underline">http://www.trikona.conskill.in/terms-and-conditions</Link>)
                    (<Link href="http://constructionlearning.org/terms-and-conditions" className="text-primary hover:underline">http://constructionlearning.org/terms-and-conditions</Link>)
                  </p>
                  <p>and privacy policy</p>
                  <p className="pl-4">
                    (<Link href="http://www.trikona.conskill.in/privacy-policy" className="text-primary hover:underline">http://www.trikona.conskill.in/privacy-policy</Link>)
                    (<Link href="http://constructionlearning.org/privacy-policy" className="text-primary hover:underline">http://constructionlearning.org/privacy-policy</Link>)
                  </p>

                  <p><strong>"Website"</strong> means the online hosted services including extended domains subdomains etc.,. For sake of clarity the present Terms and Conditions hold good for the following websites</p>
                  <p className="pl-4">
                    <Link href="http://www.trikona.conskill.in" className="text-primary hover:underline">www.trikona.conskill.in</Link>
                  </p>
                  <p className="pl-4">
                    <Link href="http://constructionlearning.org" className="text-primary hover:underline">www.constructionworld.online</Link>
                  </p>
                  <p className="pl-4">
                    <Link href="http://www.construction-training.in" className="text-primary hover:underline">www.construction-training.in</Link>
                  </p>
                  <p>being the main domains and any other sub-domains of these domains.</p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-duration="1600">
                <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">1.  GENERAL</h2>
                <p className="leading-relaxed">
                Trikona Conskill primarily develop, maintain & distribute the e-learning Products and Services.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-duration="1800">
  <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">
    2. THE SERVICES
  </h2>

  <ol className="leading-relaxed list-decimal pl-6 space-y-4">
    <li>
      1. The Registration Form constitutes an offer by the User to utilise and/or
      purchase the Products / Services offered by Trikona Conskill in accordance
      with these Terms and Conditions.
    </li>
    <li>
      2. The contract will be deemed to have been created between the parties when
      the User accepts the Terms and Conditions and Trikona Conskill issues an
      email to the User confirming the log-in details for the LMS Platform
      'Trikona Online'.
    </li>
    <li>
      3. All Registrations are made on basis of the data provided, verified to the
      extent possible and in good faith. Trikona Conskill reserves the right to
      refuse Registrations in its sole discretion including but not limited to
      terminating the registration in case of provision of wrong information at
      the time of registration.
    </li>
    <li>
      4. The Agreement constitutes the entire agreement between the parties. The
      User acknowledges that they have not relied on any statement, promise,
      representation, assurance or warranty made by or given on behalf of
      Trikona Conskill, which is not set out in the Agreement.
    </li>
    <li>
      5. The Services and Documentation are provided "as is" without any
      representation or warranty of any kind whether express or implied,
      including but not limited to, the implied warranties of satisfactory
      quality, fitness for a particular purpose, non-infringement, compatibility,
      security and accuracy.
    </li>
    <li>
      6. Trikona Conskill does not warrant that the LMS Platform will be
      uninterrupted, error-free or free from viruses.
    </li>
  </ol>
</div>

              <div data-aos="fade-up" data-aos-duration="2000">
                <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">3. Access to Products / Services</h2>
                <ol className="leading-relaxed list-decimal pl-6 space-y-4">
    <li>
      1. On Trikona Conskill's receipt of a completed Registration Form, Trikona Conskill shall issue the User with login details which will allow the User to access the Products/Services. Login will provide the User with access to move within the website and choose further Products/Services to use. Users wishing to resit or complete any course more than once will be required to complete a new Registration Form.
    </li>
    <li>
      2. The User shall not share login details with any other party. Access to Products/Services will be for a limited duration as set out on the relevant instructions for each Product/Service. Users may choose to complete the Products/Services in staged intervals and save progress within the LMS Platform within the stipulated time allocation for completion of the relevant module.
    </li>
    <li>
      3. The starting date of your access to the Products/Services is deemed to be the date that you first have access. We will attempt to contact you where your access period has ended. Where this is the case, we cannot guarantee that certification or completion (as appropriate) will be possible. As such, it is your responsibility to ensure that you complete the content within the allocated time period. If you do not think this will be possible, then extensions of time are available for purchase at an additional cost.
    </li>
    <li>
      4. We will take all commercially reasonable steps to provide you with uninterrupted access to the Products/Services. However, your access may be restricted from time to time for reasons beyond our control. Such reasons include force majeure events, power outages and actions from computer hackers and others acting outside the law. Your access may also be interrupted due to software issues, server downtime, increased Internet traffic, programming errors, regular maintenance and other related reasons. Where this is the case, we will take commercially reasonable steps to restore your full access within a reasonable period of time. 'Commercially Reasonable' in these terms shall mean reasonable efforts taken in good faith, without an unduly burdensome use or expenditure of time, resources, personnel or money.
    </li>
    <li>
      5. Our aim is to provide courses and materials of the highest quality. As such, improvements or changes to the Products/Services or any other materials may occur at any time without prior notification in order to ensure that they are up to date and accurate.
    </li>
    <li>
      6. Where your access to the Products/Services is restricted for any of the above reasons, we may provide you with a free extension of time at our sole discretion.
    </li>
  </ol>
              </div>

              <div data-aos="fade-up" data-aos-duration="2200">
                <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">4. Grant of Licence</h2>
                <p className="leading-relaxed">
                In consideration of your payment made, we hereby grant you a licence to use the purchased Products/Services. This licence is limited, revocable, non-exclusive, non-sublicensable and non-transferable, and is subject to the rights and obligations granted under these Terms. This licence is personal to you and cannot be shared or exchanged with others. The license is purely for purpose as mentioned in the Product/Service. The license shall expire upon the expiry of the Product/Service.
              </p>
              </div>

              <div data-aos="fade-up" data-aos-duration="2400">
                <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">5. Compatibility</h2>
                <ol className="leading-relaxed list-decimal pl-6 space-y-4">
                  <li>
                    1. The Trikona Online Platform is supported on most web browsers and mobile devices. However, we prefer use of 'Chrome' as it has been the most reliable during our multiple testing sessions.
                  </li>
                  <li>
                    2. It is also the User's responsibility to ensure compatibility of users hardware/software.
                  </li>
                </ol>
              </div>

              <div data-aos="fade-up" data-aos-duration="2600">
                <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">6. Pricing And Payment</h2>
                <ol className="leading-relaxed list-decimal pl-6 space-y-4">
                  <li>
                    1. In order to simplify the process of making payments and include gamification of the entire e-learning process with an intention to make the learning process more interesting, all transactions on Trikona Online are in terms of 'Trikona Credits'. Trikona Credits need to be purchased using money and the only acceptable currency for purchase of 'Trikona Credits' is the Indian Rupee. You can make the payments either through Direct Bank Payments or UPI. Currently we do not use any Payment Gateway and do not need/store any of your personal credit card or bank details or UPI details or other personally identifiable payment details. Payment for the Products must be made at the point of purchase.
                  </li>
                  <li>
                    2. You agree to provide payment for the Products in the stipulated currency and you will be liable to pay any relevant conversion charges, as well as applicable sales tax in your region. Please note that we must receive your payment in full before providing you with access to the Products.
                  </li>
                  <li>
                    3. Your payment includes the licensing of the Products/Services for a limited period of time that is appropriate for the eLearning content. We are unable to provide a refund if you fail to complete the content within the allocated time, except at our absolute and sole discretion.
                  </li>
                  <li>
                    4. We reserve our right to review and change the pricing of any of our products. This will not affect products that have already been purchased.
                  </li>
                </ol>
              </div>

              <div data-aos="fade-up" data-aos-duration="2800">
                <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">7. Amendments, Cancellation And Restriction Policy</h2>
                <ol className="leading-relaxed list-decimal pl-6 space-y-4">
                  <li>
                    1. Trikona Conskill shall use its reasonable endeavours to adhere to the advertised description of the Services but it reserves the right to amend or cancel any part of the Services. This includes, but is not limited to, changes to speakers, content and programme of the modules.
                  </li>
                  <li>
                    2. On the occurrence of changes to the Services after confirmation of the Registration (other than cancellation which is dealt in any other clauses), Trikona Conskill shall use all reasonable endeavours (subject to Trikona Conskill's right to amend the charges payable) to provide reasonable alternative Services to the User which shall be the User's sole remedy.
                  </li>
                  <li>
                    3. On the occurrence of the Services or part of the Services being cancelled after confirmation of the Registration, Trikona Conskill may in its discretion: (a) offer the User a complimentary transfer to an alternative equivalent module, subject to availability; or (b) withhold or refund any Charges paid by Users in extreme cases solely at the discretion of Trikona Conskill without assigning any reasons.
                  </li>
                  <li>
                    4. Save for as set out in this Clause, Trikona Conskill shall not be responsible for any other costs incurred by the User as a result of cancellation or amendment of the Services or any part of the Services.
                  </li>
                  <li>
                    5. Trikona Conskill shall not refund the Charges to the User if the User fails to access and/or complete a module within any stipulated time period.
                  </li>
                </ol>
              </div>

              <div data-aos="fade-up" data-aos-duration="3000">
                <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">8. Cancellation By Users</h2>
                <ol className="leading-relaxed list-decimal pl-6 space-y-4">
                  <li>
                    1. Where Products are delivered to you immediately, you will not have the right to change your mind. In other cases, you may change your mind within fourteen (14) days of purchase, so long as Products/Services have not been provided to you, downloaded, streamed or otherwise accessed. If you do wish to cancel, please contact us via email as indicated on the particular Product/Service Description.
                  </li>
                  <li>
                    2. It is your responsibility to ensure that you meet the system requirements, including compatible hardware, software, telecommunications equipment and Internet service, prior to purchasing any content. We are unable to provide refunds where your access to the Products is inhibited due to insufficient system requirements.
                  </li>
                  <li>
                    3. We may restrict your access to the Products if you breach these terms, including without limitation:
                    <ol className="list-[lower-alpha] pl-6 space-y-2 mt-2">
                      <li>a. A failure to make any payment due to us; or</li>
                      <li>b. Failure to provide accurate information that is necessary for us to provide the Products to you.</li>
                      <li>c. Deliberately providing misleading information at the time of Registration / any other transaction with us.</li>
                    </ol>
                  </li>
                  <li>
                    4. In these circumstances, we will inform you in writing (through email to your registered email ID) with seven (7) days' notice the nature and extent of restriction to your access to the Products/Services.
                  </li>
                </ol>
              </div>

              <div data-aos="fade-up" data-aos-duration="3200">
                <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">9. Terms and Termination</h2>
                <ol className="leading-relaxed list-decimal pl-6 space-y-4">
                  <li>
                    1. In the event of termination due to any of the reasons mentioned in these Terms and Conditions, the following shall apply.
                  </li>
                  <li>
                    2. This Agreement shall commence on the Commencement Date and shall continue in full force and effect until the Completion Date.
                  </li>
                  <li>
                    3. This Agreement may be terminated by Trikona Conskill at any point on 14 days notice.
                  </li>
                  <li>
                    4. This Agreement may be terminated by Trikona Conskill with immediate effect if the User commits a material breach.
                  </li>
                  <li>
                    5. On termination of this Agreement for any reason, all licences granted to the User under this Agreement shall immediately terminate.
                  </li>
                  <li>
                    6. Any provision of this Agreement which is expressly or by implication is intended to come into or remain in force on or after termination will remain in full force and effect despite the expiry or termination of this Agreement.
                  </li>
                </ol>
              </div>

              <div data-aos="fade-up" data-aos-duration="3400">
                <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">10. Copyrights & Intellectual Property</h2>
                <ol className="leading-relaxed list-decimal pl-6 space-y-4">
                  <li>
                    1. All rights, title and interest in intellectual property rights relating to the Products/Services including copyright, patents, trademarks, trade secrets, improvements, developments, proprietary information, know-how, processes, methods, business plans or models (including computer software and preparatory and design materials thereof) and all other intellectual property (whether registered or not) developed or created from time to time shall exclusively be owned by Trikona Conskill. While you may utilise the intellectual property, you understand that there shall be no transfer of ownership of the same.
                  </li>
                  <li>
                    2. Nothing that you see or read in the Products/Services may be copied, reproduced, modified, distributed, transmitted, republished, displayed or performed for commercial use.
                  </li>
                  <li>
                    3. All other trademarks, service marks and trade names in this material are the marks of the respective owners and any unauthorised use is prohibited.
                  </li>
                  <li>
                    4. Trikona Conskill hereby grants to the User a non-exclusive, non-transferable, limited licence during the term of the Agreement to use the Services for the non-commercial purposes set out in the Registration Form.
                  </li>
                </ol>
              </div>

              <div data-aos="fade-up" data-aos-duration="3600">
                <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">11. Links to Third Party Sites</h2>
                <ol className="leading-relaxed list-decimal pl-6 space-y-4">
                  <li>
                    1. Trikona Conskill website or its affiliate websites may present links to third party websites not owned or operated by Trikona Conskill. Trikona Conskill shall not be responsible for the availability of these sites or their content. Trikona Conskill shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the User's use of or reliance on any content of any such site or goods or services available through any such site.
                  </li>
                  <li>
                    2. There will be embedded videos freely available on youtube under YouTube License and used as per appropriateness. Trikona Conskill has no control over the content or the streaming of such videos which can also be viewed directly on Youtube. Their use in Trikona Online is only based on context. The copyrights rest with the parent Youtube Channel only and Trikona Conskill neither claims nor has any kind of ownership on such embedded videos.
                  </li>
                </ol>
              </div>

              <div data-aos="fade-up" data-aos-duration="3600">
                <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">12. Promotions and Advertising</h2>
                <ol className="leading-relaxed list-decimal pl-6 space-y-4">
                  <li>
                    1. Trikona Conskill may present advertisements or promotional materials on or through the Services. The User's participation in any promotional event or item is subject to the terms and conditions associated with that event or item.
                  </li>
                  <li>
                    2. The User's dealings with, or participation in promotions by any third party advertisers on or through the event or item are solely between the User and such third party. The User agrees that Trikona Conskill shall not be responsible or liable for any loss or damage of any kind incurred by the User as the result of any such dealings or as the result of the presence of such third parties on the events or items.
                  </li>
                </ol>
              </div>
              <div data-aos="fade-up" data-aos-duration="3600">
                <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">13. Limitations of Liability</h2>
                <ol className="leading-relaxed list-decimal pl-6 space-y-4">
                  <li>
                    1. Subject to Clause 13.3, Trikona Conskill shall not be liable to the User in contract, derelict (including negligence) or otherwise arising out of or in connection with this Agreement for any: (a) indirect, incidental, special or consequential loss or damage (whether or not such loss or damage is of the types specified in Clauses below; or (b) loss of or corruption to data (including software) or any other information; and (c) loss of revenue or the loss of money.
                  </li>
                  <li>
                    2. In any case, whether or not such losses or damages were foreseen, foreseeable, known or otherwise whatsoever arising out of or in connection with the use of this website.
                  </li>
                  <li>
                    3. Subject to Clause 13.3, the aggregate liability of Trikona Conskill for any breach of the terms of this Agreement, or otherwise in relation to the subject matter of this Agreement in contract, delict (including negligence) or otherwise shall in no event exceed the Charges paid by the User in the twelve (12) month period preceding the breach.
                  </li>
                  <li>
                    4. Nothing in this Agreement will exclude or limit Trikona Conskill's liability for death or personal injury caused by negligence; (ii) for fraud; or (iii) for any other liability which cannot be excluded by law.
                  </li>
                  <li>
                    5. Trikona Conskill accepts no responsibility for any loss incurred while using material or information gathered via modules. The copyright of all training materials and Documentation rests with Trikona Conskill and Trikona Conskill shall not be held responsible for any infringements as a result of plagiarism, libel, slander, misuse of material or any other breaches of third party rights.
                  </li>
                </ol>
              </div>
              <div data-aos="fade-up" data-aos-duration="3600">
                <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">14. Registration Issues and Complaints</h2>
                <ol className="leading-relaxed list-decimal pl-6 space-y-4">
                  <li>
                    1. The User shall refer all issues during Registration to the Trikona Online helpdesk at helpdesk@conskill.in. The helpdesk will endeavour to respond to Registration enquires within 24 hours of receipt on Monday to Thursday and the first day of the following working week on a Friday, Saturday or Sunday. Trikona Conskill shall not be held responsible for any loss, virus or corruption suffered due to failure to respond to Registration issues. The helpdesk is open from 9am to 5pm, Monday to Friday with the exception of local public holidays.
                  </li>
                  <li>
                    2. If the User wishes to make a complaint, the User can notify Trikona Conskill's education team in writing to registration@conskill.in
                  </li>
                </ol>
              </div>
              <div data-aos="fade-up" data-aos-duration="3600">
                <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">15. Force Majeure</h2>
                <p className="leading-relaxed mb-4">
                  Trikona Conskill shall not be liable for any delay in performing or failure to perform its obligations under these terms due to any cause outside Trikona Conskill's reasonable control. Such delay or failure shall not constitute a breach of this Agreement and the time for performance of the affected obligation shall be extended by such period as is reasonable.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-duration="3600">
                <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">16. No Agency</h2>
                <p className="leading-relaxed mb-4">
                  Neither party shall, in performing the Services or their obligations under the Agreement, hold themselves out or permit any person to hold itself out as being authorised to bind the other party in any way and will not do any act which might reasonably create the impression that it is so authorised.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-duration="3600">
                <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">17. Variation</h2>
                <p className="leading-relaxed mb-4">
                  These Terms may be varied by Trikona Conskill at any time on giving the User adequate notice in writing (including by e-mail).
                </p>
              </div>
              <div data-aos="fade-up" data-aos-duration="3600">
                <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">18. Severability</h2>
                <p className="leading-relaxed mb-4">
                  If and in so far as any part or provision of these Terms is or becomes void or unenforceable, it shall be deemed not to be, or never to have been or formed, a part of the Terms and the remaining provisions shall continue in full force and effect.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-duration="3600">
                <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">19. Waiver</h2>
                <p className="leading-relaxed mb-4">
                  The failure of either party to exercise or enforce any right conferred on that party by these Terms shall not be deemed to be a waiver of any such right or operate to bar the exercise or enforcement thereof at any time or times thereafter.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-duration="3600">
                <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">20. Third Party Rights</h2>
                <p className="leading-relaxed mb-4">
                  These Terms are not intended to create, nor shall they create, any rights, entitlement, claims or benefits enforceable by any person that is not a party to them.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-duration="3600">
                <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">21. Other Important Terms</h2>
                <ol className="leading-relaxed list-decimal pl-6 space-y-4">
                  <li>
                    1. Nobody else has any rights under these terms – they are between you and us. No other person shall have any rights to enforce any of its terms.
                  </li>
                  <li>
                    2. You need our consent to transfer your rights under these terms to someone else. We may not agree to this as these terms grant a licence for your benefit only.
                  </li>
                  <li>
                    3. If a court finds part of these terms illegal, then rest will continue in force.
                  </li>
                  <li>
                    4. Even if we delay in enforcing this contract, we can still enforce it later. If we do not insist immediately that you do anything you are required to do under these terms, or if we delay in taking steps against you in respect of your breaking this contract, that will not mean that you do not have to do those things and it will not prevent us taking steps against you at a later date.
                  </li>
                </ol>
              </div>
              <div data-aos="fade-up" data-aos-duration="3600">
                <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">22. Privacy</h2>
                <p className="leading-relaxed mb-4">
                  User details are managed in accordance with Trikona Conskill's data protection and privacy policy (<a href="http://www.trikona.conskill.in/privacy-policy" className="text-blue-600 hover:text-blue-800">http://www.trikona.conskill.in/privacy-policy</a>).
                </p>
              </div>
              <div data-aos="fade-up" data-aos-duration="3600">
                <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">23. Assignation</h2>
                <ol className="leading-relaxed list-decimal pl-6 space-y-4">
                  <li>
                    1. Trikona Conskill may at any time assign, transfer, subcontract or deal in any other manner with all or any of its rights under the Agreement and may subcontract or delegate in any manner any or all of its obligations under the Agreement to any third party, representative, employee or agent.
                  </li>
                  <li>
                    2. The User shall not, without the prior written consent of Trikona Conskill, assign or otherwise transfer any of its rights or obligations under this Agreement.
                  </li>
                </ol>
              </div>
              <div data-aos="fade-up" data-aos-duration="3600">
                <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">24. Governing Law</h2>
                <p className="leading-relaxed mb-4">
                  These terms are governed by and construed in accordance with the laws of India. The Jurisdiction will be solely with Hyderabad High Court only.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-duration="3600">
                <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">25. For Further Information About Us And How To Contact Us</h2>
                <p className="leading-relaxed mb-4">
                  You can contact us on +91 7093333128 or by writing to us at info@conskill.in
                </p>
                <p className="leading-relaxed mb-4">
                  This was last updated on 30<sup>th</sup> November 2018.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}