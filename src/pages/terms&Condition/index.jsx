// AboutUs.js

import React from "react";

const TermsConditions = () => {

    const Para = ({ text, heading, points }) => {
        return (
            <div>
                <h1 className="text-lg font-semibold mt-5 ">{heading}</h1>
                <p className="text-slate-500 text-sm my-2 break-words">{text}</p>
                {points && points.length > 0 && (
                    <ul className="list-disc list-inside text-slate-500 text-sm">
                        {points.map((point, index) => (
                            <li key={index} className="my-3 break-words">{point}</li>
                        ))}
                    </ul>
                )}
            </div>
        );
    };


    return (
        <section className="my-5 py-14 px-[10%]">

            <h1 className="font-semibold text-slate-800 text-2xl">Terms & Conditions</h1>

            <hr />

            <Para text="First things first, privacy and security of your personal information is our priority. We assure you that user or customer information collected through accessing, using, browsing or otherwise of the instant website,is safe, kept on a secure server and fully compliant with all of the relevant consumer laws. All payment transactions are made only through encrypted technology."
            />

            <Para text={<><a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                codesandmarketing.com</a> privacy is to our customers, and we strive to be clear about how we collect, use, disclose, transfer and store your information. This Privacy Policy provides an overview of our information practices. The Privacy Policy applies to websites or online applications that refer to or link to the Privacy Policy (collectively, our “Services”). </>} />

            <Para heading="Note :-" text="Our privacy policy is subject to change from time to time without notice. To make sure you are aware of the changes, please review this policy periodically. Further, this privacy statement may or may not apply to our business partners, affiliates or other third parties. This is the most current version of the Privacy Policy. You can check the “effective date” posted at the top to see when the Privacy Policy was last updated." />

            <Para text="PLEASE NOTE THAT THE PRIVACY POLICY APPLIES TO YOUR USAGE/VISIT OF OUR WEBSITE. IT ALSO APPLIES REGARDLESS OF WHETHER YOU USE A COMPUTER, MOBILE PHONE, TABLET, TV, OR OTHER DEVICES TO ACCESS OUR SERVICES. IT IS IMPORTANT THAT YOU READ PRIVACY POLICY CAREFULLY SINCE ANYTIME YOU USE OUR SERVICES, YOU CONSENT TO THE PRACTICES WE DESCRIBE IN THE PRIVACY POLICY AND HE SUPPLEMENTS. IF YOU DO NOT AGREE TO THE PRACTICES DESCRIBED IN THE PRIVACY POLICY, YOU SHOULD NOT USE OUR SERVICES." />

            <Para text="BY USING THE SERVICES OR BY OTHERWISE GIVING US YOUR INFORMATION, YOU WILL BE DEEMED TO HAVE READ, UNDERSTOOD AND AGREED TO THE PRACTICES AND POLICIES OUTLINED IN THIS PRIVACY POLICY AND AGREE TO BE BOUND BY THE PRIVACY POLICY. YOU HEREBY CONSENT TO OUR COLLECTION, USE AND SHARING, DISCLOSURE OF YOUR INFORMATION AS DESCRIBED IN THIS PRIVACY POLICY. WE RESERVE THE RIGHT TO CHANGE, MODIFY, ADD OR DELETE PORTIONS OF THE TERMS OF THIS PRIVACY POLICY, AT OUR SOLE DISCRETION, AT ANY TIME. " />

            <Para text="  IF YOU DO NOT AGREE WITH THIS PRIVACY POLICY AT ANY TIME, DO NOT USE ANY OF THE SERVICES OR GIVE US ANY OF YOUR INFORMATION. IF YOU USE THE SERVICES ON BEHALF OF SOMEONE ELSE (SUCH AS YOUR CHILD) OR AN ENTITY (SUCH AS YOUR EMPLOYER), YOU REPRESENT THAT YOU ARE AUTHORISED BY SUCH INDIVIDUAL OR ENTITY TO :- "
                points={[
                    " (I) ACCEPT THIS PRIVACY POLICY ON SUCH INDIVIDUAL’S OR ENTITY’S BEHALF, AND",
                    "(II) CONSENT ON BEHALF OF SUCH INDIVIDUAL OR ENTITY TO OUR COLLECTION, USE AND DISCLOSURE OF SUCH INDIVIDUAL’S OR ENTITY’S INFORMATION AS DESCRIBED IN THIS PRIVACY POLICY."]} />

            <Para
                heading="1. WHY THIS PRIVACY POLICY?"
                text="This Privacy Policy is published in compliance with, inter alia:"
                points={[
                    "i. Section 43A of the Information Technology Act, 2000",
                    "ii. Regulation 4 of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Information) Rules, 2011 (the “SPI Rules”)",
                    "iii. Regulation 3(1) of the Information Technology (Intermediaries Guidelines) Rules, 2011."
                ]}
            />

            <Para
                text="This Privacy Policy states the following:"
                points={[
                    "iv. The type of information collected from the Users, including Personal Information (as defined in paragraphs below) and Sensitive Personal Data or Information (as defined in paragraphs below) relating to an individual",
                    "v. The purpose, means and modes of collection, usage, processing, retention and destruction of such information;",
                    <> vi. How and to whom <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                        codesandmarketing.com</a> will disclose such information"</>
                ]} />

            <Para
                heading={
                    <>
                        COLLECTION AND USAGE OF INFORMATION REQUIRED BY{' '}
                        <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                            codesandmarketing.com
                        </a>
                    </>
                }
                text="We only collect user or customer information as required to conduct our business and to enable us to provide the best services to our users and customers. We do not sell or rent this information to third parties." />

            <Para
                points={[
                    <>
                        "i. We may collect personal information about you when you visit our website, including name, address, email address, phone numbers, information used to personalize, date of birth and other information. <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                            codesandmarketing.com</a>  uses this information to provide better service to you and to enable us to contact you if a problem arises.</>,

                    <>ii. We may ask you for and collect personal information at other times, including when you avail the services of <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                        codesandmarketing.com</a> when you complete surveys on <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                            codesandmarketing.com</a> when you participate in a user forum or blog hosted by <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                            codesandmarketing.com</a> or one of/any of our business partners. We use the information you provide to help us provide you better services, to customize your experience on our website, and to provide advice and purchase recommendations and for other purposes consistent with this statement. <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                            codesandmarketing.com</a> may also match user information with third party data to help us better understand our customers.</>,

                    "iii. We will use the personal information you provide through the Website torespond to your questions, have efficient communication and to provide you with efficient customer service. After you have entered personalinformation into a form or data field on the Website, we may use certain identifying technologies to allow that website to “remember” your personal preferences, such as sections of the Website that you visit frequently and, if you choose, your user ID.",

                    "iv. We shall collect, store and use your information in compliance with all applicable laws. You may always limit the amount and type of personal information that we receive about you by choosing not to enter any personal information into forms or data fields on the Website. Some of our online services can only be provided to you if you provide us with appropriate personal information. Other parts of the Website may ask whether you wish to opt out or opt into our contact lists for offers, promotions and additional services that may be of interest to you. If opted to do so, we may use this information for marketing and promotional purpose. For example, in accordance with applicable law and with your consent, we will use your email address to send you news and newsletters, special offers, and promotions, and to contact you about products or information we think may interest you. However, you shall have an option to unsubscribe from our updated and newsletter if you may please.",

                    "v. We shall collect your transaction or banking details such as credit/debit card number, cardholder name, expiration date and CVV and/or other information as required for internet banking or other payment instruments is not held by but is held by our Payment Gateway partner, prepaid instruments partner and other partner banks.",

                    <> vi. Your session log information on our site which includes your navigation within the site, source of traffic, IP address (from which we can approximately determine user location), browser type, browser language, operating system, date and time of request, etc.
                        vii. Identification code of your communication device with you use to access the website or otherwise deal with any <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                            codesandmarketing.com</a> related entity;</>,

                    <> viii. We also conducts research on its users’ demographics, interests, and behaviour based on the information provided to us when the user engages us for providing any services or simply visit our website. We do this to better understand and serve our users. This research is compiled and analysed on an aggregated basis so as to prevent identification of personal information relating to any one individual. <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                        codesandmarketing.com</a> may share this aggregated data with our business partners/subsidiaries and not with any other unauthorised third party/entity.</>,

                    "In addition, our web server logs collect the domain names and certainrelated data of visitors to our web sites. This information is aggregated to measure number of visits, average time spent on our web site, pages viewed and web site usage information. We use this information to measure the use of our sites; to improve the content of our sites; and to provide tailored advertisements. Aggregated information is not used in such a form that would enable direct connection of any personal information to our visitors.",

                    <>That unless the user/visitor signs through his email on our website we shall provide only that information for which the user/visitor has requested for and sought assistance for through our online portal. Further, detailed and complete assistance can be requested by signing up by the visitor or user. We shall also ask for your personal information when you express an interest in employment opportunities at <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                        codesandmarketing.com</a>.</>,

                    "Email communication by any user or customer directly with _____[Office1] such as Product/service enquiry, order and transaction related information, disputes or complaints etc.",

                    "Any other items of sensitive personal data or information as such term is defined under the Information Technology (Reasonable Security Practices And Procedures And Sensitive Personal Data Of Information) Rules, 2011 enacted under the Information Technology Act, 2000.",

                    "Any other Information that you provide during Your registration process, if any, on the Website.",

                ]}
            />

            <Para heading="Note: "
                text="User generated content on the site shared by users via reviews, blogs, online chat or instant messages, discussion boards, forums, user testimonials etc. are not considered as personal information and is not subject to the terms of this privacy policy."
            />

            <Para
                heading="3.USE OF COOKIES"
                text="A cookie is a small string of information of website that you visit transfers to your computer for identification purposes. Cookies can be used to follow your activity on the website and that information helps us to understand your preferences and improve your website experience. Cookies are also used to remember for instance your user name and password. You can set your browser to notify you when you are sent a cookie, and you can decide whether or not to accept it." />

            <Para
                heading="4.BEACONS"
                text="We along with certain third parties also may use technologies called beacons (or “pixels”) that communicate information from your device to a server. Beacons can be embedded in online content, videos, and emails, and can allow a server to read certain types of information from your device, know when you have viewed particular content or a particular email message, determine the time and date on which you viewed the beacon, and the IP address of your device. We also use beacons for a variety of purposes, including to analyse the use of our Services and (in conjunction with cookies) to provide content and ads that are more relevant to you." />
            <Para
                heading="5.OPT-OUT, DELETE OR MODIFY PERSONAL INFORMATION"
                points={[
                    <>i. You agree and acknowledge that you are providing your information out of your free will. You have option not to provide or permit <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                        codesandmarketing.com</a> to collect. In such a case when you don’t want to share the data with <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                            codesandmarketing.com</a>, you should neither visit our website nor use any services provided by <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                            codesandmarketing.com</a> nor shall contact <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                            codesandmarketing.com</a>. Further, you may cancel your registration at any time, and you can choose to opt-outof receiving any e-mails and/or sms messages from us by unsubscribing at our website.[Office2]</>,
                    "ii. If you want to opt-out, delete or modify your personal information, please visit the subscription page. We encourage you promptly to update your personal information if it changes."
                ]}
            />

            <Para
                heading={<> 6.YOU REPRESENT TO <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                    codesandmarketing.com</a> that</>}

                points={[
                    <>i. The Information You provide to <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                        codesandmarketing.com</a> from time to time is and shall be authentic, correct, current and updated and You have all the rights, permissions and consents as may be required to provide such Information to <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                            codesandmarketing.com</a>.</>,
                    <>ii.Your providing the Information to <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                        codesandmarketing.com</a>  and <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                            codesandmarketing.com</a> consequent storage, collection, usage, transfer, access or processing of the same shall not be in violation of any third party agreement, laws, charter documents, judgments, orders and decrees.</>,
                    <>iii.<a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                        codesandmarketing.com</a> and each of <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                            codesandmarketing.com</a> entities officers, directors, contractors or agents shall not be responsible for the authenticity of the Information that You or any other user provide to <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                            codesandmarketing.com</a>. You shall indemnify and hold harmless <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                            codesandmarketing.com</a> and each of <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                            codesandmarketing.com</a> entities officers, directors, contracts or agents and any third party relying on the Information provided by You in the event You are in breach of this Privacy Policy including this provision and the immediately preceding provision above.</>,
                    <>iv. Your Information will primarily be stored in electronic form however certain data can also be stored in physical form. We may store, collect, process and use your data in countries other than Republic of India but under compliance with applicable laws. We may enter into agreements with third parties (in or outside of India) to store or process your information or data. These third parties may have their own security standards to safeguard your information or data and we will on commercial reasonable basis require from such third parties to adopt reasonable security standards to safeguard your information / data.</>
                ]}
            />

            <Para
                heading="7.PROTECTING YOUR DATA"
                points={[
                    <>We secure our website and other systems against loss, destruction, unauthorized access, modification or distribution of your data by unauthorized persons by implementing the appropriate technical and organizational measures.</>,
                    <>We will maintain adequate technical and organizational security measures to protect personally identifiable information.</>,
                    <>As a policy, we secure each web page that collects personal information; however, the confidentiality of personal information transmitted over the Internet will not be guaranteed. We urge you to exercise caution when transmitting personal information over the Internet. We are committed to maintain privacy of our clients and shall adopt all the measures to prevent leakage of personal information relating to our clients. However, we shall not be held responsible for any loss arising out of access and usage of unauthorised personal information by an unauthorised third party despite using all due measures by us.</>,
                    <>We are not obliged to store your Information for a period which is beyond the intended purpose for which such Information was collected or submitted.</>
                ]}
            />

            <Para
                heading="8.ONLINE POLICY"
                text="The Privacy Policy does not extend to anything that is inherent in the operation of the internet, and therefore beyond our control, and is not to be applied in any manner contrary to applicable law or governmental regulation. This online privacy policy only applies to information collected through our website and not to information collected offline."
            />

            <Para
                heading="9.RIGHT TO INFORMATION"
                text="There is a right to information about your personal data that we store and the right to rectification, blocking and deleting your stored personal data for which you can contact us +91-9599876298."
            />

            <Para
                heading="10.THIRD PARTY ADVERTISERS AND LINKS TO OTHER WEBSITES"
                points={[
                    <>This Privacy Policy applies only to our website. <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                        codesandmarketing.com</a> may provide links to other websites, which we believe, may be of interest to you. These companies may use information (not including your name, address, email address, or telephone number) but only about your visits to this and other websites in order to provide advertisements about gods and services of interest to you.</>,

                    <>Our website links to other websites that may collect personally identifiable information about you. <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                        codesandmarketing.com</a> is not responsible for any form of transmission, whatsoever, received by You from any third party website. Accordingly, </>,

                    <><a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                        codesandmarketing.com</a> does not make any representations concerning the privacy practices or policies of such third parties or terms of use of such third party websites, nor does <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                            codesandmarketing.com</a> control or guarantee the accuracy, integrity, or quality of the content available on such third party websites. The inclusion or exclusion does not imply any endorsement by <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                            codesandmarketing.com</a> of the third party websites, the website’s provider, or the information on the website. The information provided by You to such third party websites shall be governed in accordance with the privacy policies of such third party websites and it is recommended that You review the privacy policy of such third party websites prior to using such websites.</>
                ]}
            />

            <Para
                heading="11.JURISDICTION"
                text="Any dispute related to the violation of the terms of this privacy policy, or any other related matters arising out of this privacy policy shall be governed by Indian Law without regard to conflict of laws principles. The courts of __[Office3] and shall be the exclusive forum for any lawsuit, and you consent to the personal jurisdiction of said courts. You agree to present any claims against us within 30 days of the incident and to file within one year of the incident, and you acknowledge that this expressly limits the applicable statute of limitations to one year."
            />

            <Para
                heading="12.CHANGE IN POLICY"
                text={<> <a className="text-blue-400" href="https://codesandmarketing.com/" target="_blank" rel="noopener noreferrer">
                    codesandmarketing.com</a> reserves the right to amend this Privacy Policy without prior notice to reflect technological advancements, legal and regulatory changes and good business practices. If we change our privacy practices, a new Privacy Policy will reflect those changes and the effective date of the revised Privacy Policy will be set forth at the beginning of the new/amended Privacy Policy.</>}
            />

            <Para
                heading="13.WHERE DO I REPORT MY GRIEVANCES?"
                text="In accordance with Information Technology Act 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below:"
            />

        </section>
    );
};

export default TermsConditions;
