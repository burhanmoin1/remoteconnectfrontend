'use client';
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const TosAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Create a ref for each accordion section
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
      // Scroll into view when opening
      setTimeout(() => {
        accordionRefs.current[index]?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 300); // Delay to allow animation
    }
  };

  return (
    <div className="flex flex-col lg:w-[80%] lg:ml-40 lg:m-10 h-[100vh] space-y-4">
      <div className='m-2 xl:m-0 lg:m-0 md:m-4 sm:m-0'>
        <h2 className='font-bold text-2xl'>Remoteconnect Terms of Service</h2>
        <p className='font-bold italic text-xs'>Updated August 2024</p>
        <p className='text-sm mt-4'>
          <span className='font-bold'>These Terms of Service</span> (these "Terms") govern your use of the RemoteConnect website or apps (collectively, “our websites and apps”), including any content, functionality, and services offered on or through <a href='/'>www.remoteconnect.tech</a>. In these Terms, “you” or “user” refers to you as an individual using the Site. Please read them carefully as they affect your rights and liabilities under the law. If you do not agree to these Terms, please do not register for an account or use our websites and apps. These Terms are effective as of the date they are published on our websites and apps.
        </p>
      </div>
      <div className="lg:space-y-2 space-y-4">
        {/* Section 1 */}
        <div className="border border-gray-300 rounded-md" ref={(el) => { accordionRefs.current[1] = el; }}>
          <button
            onClick={() => toggleAccordion(1)}
            className="flex justify-between w-full p-4 text-left text-lg font-medium focus:outline-none"
          >
            1. Acceptance and Modification of Terms
            <span>{activeIndex === 1 ? '-' : '+'}</span>
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: activeIndex === 1 ? 'auto' : 0, opacity: activeIndex === 1 ? 1 : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-4">
              <p className="text-base mb-4">
                <strong>a. Acceptance of Terms</strong><br />
                Our websites and apps are provided to you subject to these Terms. These Terms constitute a binding agreement between you and RemoteConnect. By accessing or using our websites and apps, you agree to accept and be bound by these Terms.
              </p>
              <p className="text-base mb-4">
                <strong>b. Changes to Terms</strong><br />
                We may update these Terms periodically to reflect changes in our services or legal requirements. The updated version will apply to you, and the current Terms will be accessible through our websites and apps.
              </p>
              <p className="text-base mb-4">
                <strong>c. Notification of Modifications</strong><br />
                If we believe that the updates to these Terms will have a significant impact on you, we will notify you through our websites and/or apps at least 30 days before the changes are implemented.
              </p>
              <p className="text-base mb-4">
                <strong>d. Continuation of Use</strong><br />
                If you disagree with any version of the Terms, please stop using our websites and apps.
              </p>
              <p className="text-base mb-4">
                <strong>e. Conflicting Agreements</strong><br />
                Your use of our services may be subject to additional agreements with RemoteConnect. If there is a conflict between these Terms and any other agreements, the terms of the additional agreements will take precedence.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Section 2 */}
        <div className="border border-gray-300 rounded-md" ref={(el) => { accordionRefs.current[2] = el; }}>
          <button
            onClick={() => toggleAccordion(2)}
            className="flex justify-between w-full p-4 text-left text-lg font-medium focus:outline-none"
          >
            2. Registration
            <span>{activeIndex === 2 ? '-' : '+'}</span>
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: activeIndex === 2 ? 'auto' : 0, opacity: activeIndex === 2 ? 1 : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-4">
              <p className="text-base mb-4">
                <strong>a. Eligibility for Registration</strong><br />
                To register an account on RemoteConnect, you must have the legal capacity to enter into a binding contract under the laws of your country of residence. This typically means you must be of legal age (usually 18 years or older) and possess the mental capacity to agree to these terms and enter into contracts.
              </p>
              <p className="text-base mb-4">
                <strong>b. Age Restriction</strong><br />
                You must be at least 18 years old or the age of majority in your jurisdiction to register for an account. By registering, you confirm that you meet this age requirement.
              </p>
              <p className="text-base mb-4">
                <strong>c. Updating Information</strong><br />
                You must promptly update any changes to the information you provided during registration. This helps us maintain effective communication with you and manage your account appropriately.
              </p>
              <p className="text-base mb-4">
                <strong>d. Account Security</strong><br />
                You are responsible for keeping your account credentials confidential and for all activities that occur under your account. Notify us immediately if you suspect any unauthorized use of your account or any security breaches.
              </p>
              <p className="text-base mb-4">
                <strong>e. Compliance with Local Laws</strong><br />
                If your country of residence has stricter age or other requirements for entering into contracts or using online services, you must comply with those laws. You are responsible for understanding and adhering to the legal requirements applicable to you.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Section 3 */}
        <div className="border border-gray-300 rounded-md" ref={(el) => { accordionRefs.current[3] = el; }}>
          <button
            onClick={() => toggleAccordion(3)}
            className="flex justify-between w-full p-4 text-left text-lg font-medium focus:outline-none"
          >
            3. Passwords and Security
            <span>{activeIndex === 3 ? '-' : '+'}</span>
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: activeIndex === 3 ? 'auto' : 0, opacity: activeIndex === 3 ? 1 : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-4">
              <p className="text-base mb-4">
                <strong>a. Password and Login Details</strong><br />
                When you register an account through our websites and apps, you will be required to create a password. To prevent fraud, you must keep your Login Details confidential and not disclose them to anyone. You agree to notify us immediately of any unauthorized use of your Login Details or any other security breaches.
              </p>
              <p className="text-base mb-4">
                <strong>b. Security Measures</strong><br />
                If we suspect a potential security breach or misuse of our websites and apps, we may require you to update your Login Details or suspend your account to protect our services and users.
              </p>
              <p className="text-base mb-4">
                <strong>c. Responsibility for Account Security</strong><br />
                You are fully responsible for maintaining the confidentiality of your Login Details and for all activities conducted through your account. You can change your password at any time via the Settings section.
              </p>
              <p className="text-base mb-4">
                <strong>d. Liability for Security Breaches</strong><br />
                If you fail to maintain the confidentiality of your Login Details:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>You will be liable for all resulting direct losses or damages incurred by both you and us.</li>
                <li>You will indemnify us fully for any loss or damage resulting from the compromise of your Login Details, except where such loss or damage is directly attributable to our actions.</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Section 4 */}
        <div className="border border-gray-300 rounded-md" ref={(el) => { accordionRefs.current[4] = el; }}>
          <button
            onClick={() => toggleAccordion(4)}
            className="flex justify-between w-full p-4 text-left text-lg font-medium focus:outline-none"
          >
            4. Intellectual Property
            <span>{activeIndex === 4 ? '-' : '+'}</span>
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: activeIndex === 4 ? 'auto' : 0, opacity: activeIndex === 4 ? 1 : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-4">
              <p className="text-base mb-4">
                <strong>a. Ownership of Content</strong><br />
                All content, trademarks, and data on our websites and apps, including but not limited to software, databases, text, graphics, icons, hyperlinks, private information, designs, and agreements, are the property of or licensed to RemoteConnect and as such, are protected from infringement by local and international legislation and treaties. All rights in and to the content are reserved and retained by RemoteConnect.
              </p>
              <p className="text-base mb-4">
                <strong>b. Use of Our Intellectual Property</strong><br />
                You may not use any of our intellectual property without our prior written consent, which may be withheld at our sole discretion. Unauthorized use, including reproduction, modification, distribution, or republication, is strictly prohibited.
              </p>
              <p className="text-base mb-4">
                <strong>c. Feedback and Submissions</strong><br />
                Any feedback, ideas, suggestions, or other information you provide to us concerning our websites and apps or services will be considered non-confidential and non-proprietary. We may use any such feedback or submissions for any purpose without any obligation to you.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Section 5 */}
        <div className="border border-gray-300 rounded-md" ref={(el) => { accordionRefs.current[5] = el; }}>
          <button
            onClick={() => toggleAccordion(5)}
            className="flex justify-between w-full p-4 text-left text-lg font-medium focus:outline-none"
          >
            5. User Responsibilities
            <span>{activeIndex === 5 ? '-' : '+'}</span>
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: activeIndex === 5 ? 'auto' : 0, opacity: activeIndex === 5 ? 1 : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-4">
              <p className="text-base mb-4">
                <strong>a. Compliance with Laws</strong><br />
                You must comply with all applicable local, state, national, and international laws and regulations when using our services.
              </p>
              <p className="text-base mb-4">
                <strong>b. Acceptable Use</strong><br />
                You must use our websites and apps in a responsible manner and avoid any actions that might harm other users, RemoteConnect, or third parties. You agree not to engage in any conduct that is fraudulent, abusive, or otherwise illegal.
              </p>
              <p className="text-base mb-4">
                <strong>c. Cooperation with Investigations</strong><br />
                We reserve the right to investigate any suspected violations of these Terms. You agree to cooperate with any such investigations and to provide us with information or assistance as necessary.
              </p>
              <p className="text-base mb-4">
                <strong>d. Termination of Use</strong><br />
                We reserve the right to terminate or restrict your access to our websites and apps if we believe you have violated these Terms or any applicable laws.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TosAccordion;
