"use client";

import Breadcrumb from "@/components/Shared/Breadcrumb";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        title="Privacy Policy"
        sectionClass="project-section  md:py-[150px] sm:py-[100px] py-20"
        items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <section className="bg-nu10 lg:py-20 md:py-16 py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-nu30 fontMont sm:font-bold font-semibold mb-8"
              data-aos="fade-right"
              data-aos-duration="2000">
              Privacy Policy
            </h1>

            <div data-aos="fade-up" data-aos-duration="3600">
              <h1 className="text-nu30 fontMont text-3xl font-bold mb-6">Trikona Conskill Privacy Policy</h1>
              <p className="leading-relaxed mb-4 text-nu30">
                Trikona Conskill treats the privacy of our visitors and users with the highest importance. This policy details the measures that we take to preserve and safeguard your privacy when you visit our website or communicate with our personnel.
              </p>
              <p className="leading-relaxed mb-4 text-nu30">
                This Privacy Policy may be updated from time to time.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="3600">
              <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">1. Information Collection</h2>
              <p className="leading-relaxed mb-4 text-nu30">
                We call data that identifies or could reasonably be used to identify you as an individual 'Personal Data'. This includes information about you that you give us by filling on forms on this site, registering or by corresponding with us by phone, live web chat, email or otherwise. This information may include your full name, job title and contact details including your email address and telephone number. In view of the nature of our services, this personal information is very much required to suitably cater to your specific requirements.
              </p>
              <p className="leading-relaxed mb-4 text-nu30">
                We may collect personal information from Users in a variety of ways, including when Users: visit our site:
              </p>
              <ol className="leading-relaxed list-decimal pl-6 space-y-4 text-nu30">
                <li>1. register on the site;</li>
                <li>2. subscribe to the newsletter;</li>
                <li>3. respond to a survey;</li>
                <li>4. fill out a form; and</li>
                <li>5. in connection with other activities, services, features or resources we make available on our Sites.</li>
              </ol>
            </div>

            <div data-aos="fade-up" data-aos-duration="3600">
              <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">2. Your Information and how we use it</h2>
              <p className="leading-relaxed mb-4 text-nu30">
                We collect your data, including Personal Data, for certain <strong>legitimate business interests</strong> of ours. Processing under this basis may occur in the following circumstances:
              </p>
              <ol className="leading-relaxed list-decimal pl-6 space-y-4 text-nu30">
                <li>1. To personalize user experience;</li>
                <li>2. We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Sites;</li>
                <li>3. To improve our Sites;</li>
                <li>4. We continually strive to improve our website offerings based on the information and feedback we receive from you;</li>
                <li>5. To improve customer service;</li>
                <li>6. Your information helps us to more effectively respond to your customer service requests and support needs;</li>
                <li>7. To share your information with third parties;</li>
                <li>8. We may share or sell information with third parties for marketing or other purposes;</li>
                <li>9. To administer a content, promotion, survey or other Sites feature;</li>
                <li>10. To send Users information they agreed to receive about topics we think will be of interest to them;</li>
                <li>11. To send periodic emails; and</li>
                <li>12. If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email or User may contact us via our Sites.</li>
              </ol>
              <p className="leading-relaxed mb-4 text-nu30">
                Where you have made a purchase, we will also process data for the <strong>performance of the contract</strong>, which will involve payment or transaction details being processed and shared with our payment providers.
              </p>
              <p className="leading-relaxed mb-4 text-nu30">
                When you register on our website or download resources, you are also given the opportunity to provide us with your <strong>consent</strong>. If you choose to do this, then we will use the Personal Data provided with your registration to let you know about our products and services which we think you will find interesting. You will be able to access resources on the website and will be sent relevant email notifications based on your interests. Where appropriate, we may also contact you by telephone.
              </p>
              <p className="leading-relaxed mb-4 text-nu30">
                You can subsequently withdraw your consent at any time by a) letting us know over the telephone; or b) following the 'unsubscribe' link that is provided in emails.
              </p>
              <p className="leading-relaxed mb-4 text-nu30">
                When you interact with our website, we use Google Analytics to better understand your journey and help us provide improvements. Google Analytics may record your geographical location, device, internet browser and operating system, none of which would be classified as Personal Data.
              </p>
              <p className="leading-relaxed mb-4 text-nu30">
                Any information that we process, including Personal Data, will be stored on a secure server behind a firewall. We will not retain your Personal Data for longer than is necessary for the processing. Where you have registered and provided your consent to receive communications from us, then we will retain your Personal Data for this purpose until your consent is withdrawn.
              </p>
              <p className="leading-relaxed mb-4 text-nu30">
                In order to identify spam as well as for security purpose of the other users of the website, we may also collect your IP address details. Some regulations make it mandatory to collect the same. Irrespective of anything else, you are agreeing to share the IP address with us whenever you are visiting the website(s).
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="3600">
              <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">3. Where will Your Information be Shared?</h2>
              <p className="leading-relaxed mb-4 text-nu30">
                We may share your personal data with our advertisers, vendors, and customers, including data profiling companies, business-to-business lead buyers, and data aggregation companies that track user behaviour. We also may share your personal data with third party service providers to help us with our business activities such as email marketing, offering customer service, or operating a community forum.
              </p>
              <p className="leading-relaxed mb-4 text-nu30">
                We also use a number of payment providers, which are:
              </p>
              <ol className="leading-relaxed list-decimal pl-6 space-y-4 text-nu30">
                <li>1. UPI and Direct Bank Payments only.</li>
                <li>2. No other 3<sup>rd</sup> party payment gateways at this point of time.</li>
              </ol>
              <p className="leading-relaxed mb-4 text-nu30">
                Any payments you make on the website will be processed by one of these providers. It will only collect, use and disclose your information to the extent necessary to allow it to perform its services. We recommend that you familiarise yourself with UPI Payments respective privacy policies and terms of service.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="3600">
              <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">4. Cookies</h2>
              <ol className="leading-relaxed list-decimal pl-6 space-y-4 text-nu30">
                <li>1. Our site uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our site.</li>
                <li>2. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser. They enable the site or service provider systems to recognise your browser and capture and remember certain information, such as items saved in your online shopping basket. The cookie holds information our Sites may need to personalize or enhance your experience and to gather statistical data, such as which pages are visited, the internet provider's domain name and the addresses of the sites visited immediately before coming to and immediately after leaving the Sites. The information in the cookie lets Trikona Conskill trace "clickstream" activity (i.e., the paths taken by visitors to our Sites as they move from page to page) to enable us to better serve our customers by revealing which portions of our Sites are the most popular.</li>
                <li>3. Any data gathered through the use of cookies will not identify you personally. It is strictly aggregate statistical data about our visitors and how they used the resources on this web page. No Personal Data will be shared at any time via cookies.</li>
                <li>4. We may link the anonymous visitor ID from your cookie to a user ID in our database to help us analyze web traffic and statistics. From time to time, other companies may help us with data research and analysis, but they will be prohibited from using that data for any other purpose.</li>
                <li>5. You may choose to decline all cookies on your computer. Your browser has an option to disable the use of cookies. Please review your browser's instructions for doing so. If you do choose to decline cookies, then you may be limited to certain areas of our website and certain features of the Website may not be available if you delete or reject cookies.</li>
              </ol>
            </div>

            <div data-aos="fade-up" data-aos-duration="3600">
              <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">5. Your Information Protection</h2>
              <p className="leading-relaxed mb-4 text-nu30">
                We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Sites. Sensitive and private data exchange between the Sites and its Users happens over a SSL secured communication channel and is encrypted and protected with digital signatures.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="3600">
              <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">6. Third Party Links / Websites</h2>
              <p className="leading-relaxed mb-4 text-nu30">
                Users may find advertising or other content on our Sites that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Sites. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Sites, is subject to that website's own terms and policies.
              </p>
              <p className="leading-relaxed mb-4 text-nu30">
                We bear no responsibility or liability for the content and activities of these third-party sites. Nonetheless, we seek to protect the integrity of our website and welcome any feedback regarding these third-party websites.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="3600">
              <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">7. Advertising</h2>
              <p className="leading-relaxed mb-4 text-nu30">
                Ads appearing on our site may be delivered to Users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile non personal identification information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. <strong><u>This privacy policy does not cover the use of cookies by any advertisers.</u></strong>
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="3600">
              <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">8. Google Adsense</h2>
              <p className="leading-relaxed mb-4 text-nu30">
                Some of the ads may be served by Google. Google's use of the DART cookie enables it to serve ads to Users based on their visit to our Sites and other sites on the Internet. DART uses "non personally identifiable information" and does NOT track personal information about you, such as your name, email address, physical address, etc. You may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at http://www.google.com/privacy_ads.html
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="3600">
              <h2 className="text-nu30 fontMont text-2xl font-semibold mb-4">9. Accessing your Information</h2>
              <p className="leading-relaxed mb-4 text-nu30">
                If you wish to exercise your right of access, then you may make a subject access request by contacting us as per the below. In most cases, we will not charge you a fee and will respond within one month. Fees may be charged for repeated or vexatious requests and we may take two months to provide all information in response to particularly complex requests. We will let you know if this is the case.
              </p>
              <p className="leading-relaxed mb-4 text-nu30">
                Contact us at info@trikona.online
              </p>
              <p className="leading-relaxed mb-4 text-nu30">
                This Privacy Policy was last updated on 30<sup>th</sup> April, 2023.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
} 