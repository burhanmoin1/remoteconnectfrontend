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
      }, 200); // Delay to allow animation
    }
  };

  return (
    <div className="flex flex-col lg:w-[80%] lg:ml-40 lg:m-10 space-y-4">
      <div className='m-2 xl:m-0 lg:m-0 md:m-4 sm:m-0'>
        <h2 className='font-bold text-4xl'>Remoteconnect Terms of Service</h2>
        <p className='font-bold italic text-xs'>Updated August 2024</p>
        <p className='text-lg mt-4 lg:w-[88%]'>
          <span className='font-bold'>These Terms of Service</span> (these "Terms") govern your use of the Remoteconnect website or apps (collectively, “our websites and apps”), including any content, functionality, and services offered on or through <a href='/'>www.remoteconnect.tech</a>. In these Terms, “you” or “user” refers to you as an individual using the Site. Please read them carefully as they affect your rights and liabilities under the law. If you do not agree to these Terms, please do not register for an account or use our websites and apps.
        </p>
      </div>
      <div>
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
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-4">
              <p className="text-base mb-4">
                <strong className='text-lg'>A. Acceptance of Terms</strong><br /><br/>
                Our websites and apps are provided to you subject to these Terms. These Terms constitute a binding agreement between you and Remoteconnect. By accessing or using our websites and apps, you agree to accept and be bound by these Terms.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>B. Changes to Terms</strong><br /><br/>
                We may update these Terms periodically to reflect changes in our services or legal requirements. The updated version will apply to you, and the current Terms will be accessible through our websites and apps.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>C. Notification of said changes</strong><br /><br/>
                If we believe that the updates to these Terms are to impact you, we will notify you through our websites and or via email before the changes are implemented.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>D. Continuation of Use</strong><br /><br/>
                If you disagree with any version of the Terms, you can discontinue the usage of our websites and apps.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>E. Conflicting Agreements</strong><br /><br/>
                When you use Remoteconnect or related service, such as our websites and apps, there might be additional terms or agreements that apply to specific features or services. If there is any disagreement or conflict between these general Terms of Service and any additional terms or agreements, the terms in the additional agreements will take priority.
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
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-4">
              <p className="text-base mb-4">
                <strong className='text-lg'>A. Eligibility for Registration</strong><br /><br/>
                To register an account on Remoteconnect, you must have the legal capacity to enter into a binding contract under the laws of your country of residence. This typically means you must be of legal age (usually 18 years or older) and possess the mental capacity to agree to these terms and enter into contracts.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>B. Age Restriction</strong><br /><br/>
                You must be at least 18 years old or the age of majority in your jurisdiction to register for an account. By registering, you confirm that you meet this age requirement.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>C. Updating Information</strong><br /><br/>
                You must promptly update any changes to the information you provided during registration. This helps us maintain effective communication with you and manage your account appropriately.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>D. Account Security</strong><br /><br/>
                You are responsible for keeping your account credentials confidential and for all activities that occur under your account. Notify us immediately if you suspect any unauthorized use of your account or any security breaches.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>E. Compliance with Local Laws</strong><br /><br/>
                If your country of residence has stricter age or other requirements for entering into contracts or using online services, you must comply with those laws. You are responsible for understanding and adhering to the legal requirements applicable to you.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>F. Accuracy of Information</strong><br /><br/>
                You are responsible for ensuring that the details you provide during registration, and at any subsequent time, are accurate and complete. It is essential that the information you submit is current and correct.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>G. Account Suspension or Termination</strong><br /><br/>
                We reserve the right to suspend or terminate your account if we believe that you have violated these Terms or if we need to enforce compliance with our policies.
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
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-4">
              <p className="text-base mb-4">
                <strong className='text-lg'>A. Password and Login Details</strong><br /><br/>
                When you register an account through our websites and apps, you will be required to create a password. To prevent fraud, you must keep your Login Details confidential and not disclose them to anyone. You agree to notify us immediately of any unauthorized use of your Login Details or any other security breaches.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>B. Security Measures</strong><br /><br/>
                If we suspect a potential security breach or misuse of our websites and apps, we may require you to update your Login Details or suspend your account to protect our services and users.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>C. Responsibility for Account Security</strong><br /><br/>
                You are fully responsible for maintaining the confidentiality of your Login Details and for all activities conducted through your account. You can change your password at any time via the Settings section.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>D. Liability for Security Breaches</strong><br /><br/>
                If you fail to maintain the confidentiality of your Login Details:
              </p>
              <ul className="list-disc list-inside mb-2">
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
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-4">
              <p className="text-base mb-4">
                <strong className='text-lg'>A. Intellectual Property Rights</strong><br /><br/>
                Remoteconnect owns all intellectual property rights associated with our websites and apps. Unless stated otherwise, Remoteconnect retains all intellectual property rights in our websites and apps.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>B. Use of Your Intellectual Property</strong><br /><br/>
                We do not claim ownership of any pre-existing intellectual property you own (such as your company logo). However, by using our services, you grant us a perpetual, non-transferable, royalty-free licence to use your intellectual property in the products and services we provide (or make available) to you. If you revoke this licence, we may not be able to continue offering certain products and services to you.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>C. Restrictions on Use of Materials</strong><br /><br/>
                Unless explicitly permitted by us, the materials and content on our websites and apps are intended for your personal, non-commercial use only. You must retain all copyright and proprietary notices. Reproduction, modification, copying, distribution, or use of any materials or content for non-personal or commercial purposes is prohibited without our prior written consent.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>D. Ownership of Work Product</strong><br /><br/>
                Unless otherwise agreed upon in writing, all intellectual property rights in the work product created by freelancers during the course of the job belong to the client upon payment. Freelancers agree to transfer all rights to the client upon full payment.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>E. Submission of Ideas and Feedback</strong><br /><br/>
                We welcome your ideas and feedback regarding our websites and apps. By submitting materials or information (including suggestions for new or improved products and services) to public areas of our websites and apps (such as bulletin boards, forums, and newsgroups) or directly to us (e.g., via email), you agree that we may reproduce, distribute, transmit, create derivative works of, and publicly display such submissions. You acknowledge that you will not receive compensation for your ideas or feedback, even if we incorporate them into our websites and apps (including products and services). If required by law, you agree to formally transfer any intellectual property or other rights in your ideas and feedback to us for nominal consideration.
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
            5. Overview of main terms and their uses
            <span>{activeIndex === 5 ? '-' : '+'}</span>
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: activeIndex === 5 ? 'auto' : 0, opacity: activeIndex === 5 ? 1 : 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-4">
              <h3 className="mb-4 text-xl">
                <strong>5.1 Key terms</strong><br />
              </h3>
              <p className="text-base mb-4">
                <strong>Clients</strong> are users on Remoteconnect is an individual or entity that establishes an organisation or team within the platform to manage and oversee projects.
              </p>
              <p className="text-base mb-4">
                <strong>Freelancers</strong> on Remoteconnect is a professional who offers their skills and services to clients on a project basis.
              </p>
              <p className="text-base mb-4">
                <strong>Organisation </strong>or<strong> Team</strong> on Remoteconnect refers to a structured group created by a client, consisting of one or more freelancers who collaborate on various projects.
              </p>
              <p className="text-base mb-4">
                <strong>Jobs</strong> on Remoteconnect refers to a project or task that a client posts within their organisation or team, designed to fulfil specific, long-term objectives.
              </p>
              <p className="text-base mb-4">
                <strong>Contract</strong> on Remoteconnect is a formal agreement between a client and a freelancer or organisation that outlines the terms, conditions, and expectations for the work to be performed. 
              </p>
              <p className="text-base mb-4">
                <strong>Hourly Contract</strong> means that a freelancer will be compensated based on the number of hours worked. Under this contract, the freelancer logs their hours and is paid according to the agreed-upon hourly rate. This type of contract is typically used for ongoing work or projects where the scope may change or evolve over time.
              </p>  
              <p className="text-base mb-4">
                <strong>Hourly Limit</strong> or<strong> Weekly Hourly Limit</strong> is the maximum number of hours a freelancer is allowed to work within a week as defined in the Hourly Contract. This limit ensures that both the freelancer and the client have clear expectations about the time commitment and budget for the project.  
              </p>
              <p className="text-base mb-4">
                <strong>Hourly Rate</strong> is the amount of money that a client agrees to pay the freelancer for each hour worked under an Hourly Contract. This rate is agreed upon by both parties before the contract begins and is used to calculate the freelancer's earnings based on the hours logged.
              </p>
              <p className="text-base mb-4">
                <strong>Hourly Weekly Report</strong> or<strong> Hourly Weekly Report</strong> is a summary of the hours worked by the freelancer during a week in connection with an Hourly Contract. This report is submitted to the client for approval and serves as the basis for payment for that week.
              </p>
              <p className="text-base mb-4">
                <strong>Fixed-Term Contract</strong> or<strong> Per Annum Contract</strong>is an agreement where a freelancer is hired for a set period, typically one year. The freelancer is compensated with an annual salary or a fixed payment schedule, and the contract outlines the specific terms, duties, and expectations for the duration of the contract. This type of contract is often used for long-term projects or ongoing roles where a steady commitment is required.
              </p>
              <h3 className="mb-4 text-xl">
                <strong>5.2 Clients</strong><br />
              </h3>
              <p className="text-base mb-4">
                <strong className='text-lg'>A. Registration and Account Requirements</strong>
              </p>
              <p className="text-base mb-4"><strong>Eligibility:</strong> Only registered and verified clients may post jobs on Remoteconnect. By registering, you agree to provide accurate, complete, and up-to-date information about your business or personal details. Any failure to provide such information may lead to the suspension or termination of your account.
                </p>
                <p><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials. Remoteconnect is not liable for any loss or damage arising from unauthorised access to your account due to your failure to secure your login details.
              </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>B. Organisation and Team Creation</strong>
              </p>
                <p><strong>Mandatory Team Setup:</strong> Before posting jobs, clients are required to create an organisation or team on Remoteconnect. This structure ensures that job postings are aligned with long-term project goals and promotes cohesive development efforts.
                </p><br/>
                <p><strong>Role Definition:</strong> As part of the organisation setup, clients must define roles and responsibilities within their team. This allows for effective role matching and streamlines the hiring process for specific project needs.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>C. Job Posting and Offers</strong>
              </p>
                <p><strong>Job Postings:</strong>  Clients can post jobs on Remoteconnect after setting up their organisation. Job postings should include clear and detailed descriptions of the tasks, requirements, and expectations. Remoteconnect reserves the right to remove or modify job postings that do not meet platform standards.
                </p><br/>
                <p><strong>Offers and Contracts:</strong> Once a suitable freelancer is identified, you may extend an offer. Accepting an offer creates a binding contract between you and the freelancer. It is your responsibility to ensure that the terms are clear and mutually agreed upon before the freelancer begins work.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>D. Payment Terms</strong>
              </p>
                <p><strong>Setting Pay Rates:</strong>  Clients have the flexibility to determine the pay rate for each job. Jobs on Remoteconnect can be offered either on an hourly basis or as full-time positions. Payment terms should be clearly stated in the job posting and agreed upon in the contract.
                </p><br/>
                <p><strong>Fees:</strong> Remoteconnect reserves the right to charge a fee based on the job type and rate. These fees will be transparently communicated to you before the job posting goes live.
                </p><br/>
                <p><strong>Payment Disputes:</strong> In the event of a payment dispute, you should first attempt to resolve the issue directly with the freelancer. Remoteconnect will only intervene if both parties are unable to reach a resolution. Our decision in such disputes is final and binding.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>E. Project Management and Freelancer Relations</strong>
              </p>
                <p><strong>Ongoing Communication:</strong>  Clients are expected to maintain clear and timely communication with freelancers throughout the duration of the project. This includes providing necessary resources, clarifying expectations, and responding to inquiries.
                </p><br/>
                <p><strong>Professional Conduct:</strong> Clients must treat freelancers with respect and professionalism. Any form of harassment, discrimination, or unprofessional behaviour will not be tolerated and may result in the suspension or termination of your account.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>F. Intellectual Property and Confidentiality</strong>
              </p>
                <p><strong>Ownership:</strong>  As a client, you typically own the intellectual property created during the course of a job unless otherwise agreed upon in the contract. It is your responsibility to specify ownership terms in the job posting and contract.
                </p><br/>
                <p><strong>Confidentiality:</strong> You must ensure that any confidential information shared with freelancers is protected. Non-disclosure agreements (NDAs) may be required, and any breach of confidentiality by a freelancer should be reported to Remoteconnect immediately.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>G. Job Completion and Feedback</strong>
              </p>
                <p><strong>Job Completion:</strong>  Upon completion of a job, you are responsible for reviewing the freelancer's work and providing timely approval or requesting revisions as needed. Payments should be made promptly according to the agreed terms.
                </p><br/>
                <p><strong>Feedback System:</strong>  After the job is completed, you may leave feedback on the freelancer's performance. This feedback is visible to other potential clients and freelancers and plays a crucial role in maintaining a high standard of service on Remoteconnect.
                </p><br/>
                <p><strong>Disputing Feedback:</strong>  If you believe that a freelancer has unfairly rated your conduct or project, you may dispute the feedback. Remoteconnect will review the feedback and take appropriate action if necessary.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>H. Account Suspension and Termination</strong>
              </p>
                <p><strong>Violations:</strong>   Remoteconnect reserves the right to suspend or terminate your account if you violate these TOS, including but not limited to failing to pay freelancers as agreed, posting fraudulent job offers, or engaging in unprofessional conduct.
                </p><br/>
                <p><strong>Termination by Client:</strong>  You may choose to terminate your account at any time. However, you must complete any active contracts and resolve any disputes before doing so.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>I. Compliance with Laws</strong>
              </p>
                <p><strong>Legal Obligations:</strong>  You are responsible for complying with all applicable laws, including tax obligations, when using Remoteconnect. This includes ensuring that you have the necessary permits or licences to hire freelancers and operate your business.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>J. Amendments to Terms of Service</strong>
              </p>
                <p><strong>Changes to Terms:</strong>  Remoteconnect may update these Terms of Service from time to time. If changes are made, you will be notified 30 days before they take effect. Continued use of the platform after the changes take effect will signify your acceptance of the revised Terms of Service.
                </p><br/>
                <h3 className="mb-4 text-xl">
                <strong>5.3 Freelancers</strong><br />
              </h3>
              <p className="text-base mb-4">
                <strong className='text-lg'>A. Registration and Account Requirements</strong>
              </p>
                <p><strong>Eligibility:</strong> Only registered and verified freelancers may apply for jobs on Remoteconnect. By registering, you agree to provide accurate, complete, and up-to-date information about yourself. Failure to do so may result in the suspension or termination of your account.
                </p><br/>
                <p><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your login credentials. Remoteconnect will not be liable for any loss or damage arising from your failure to secure your account.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>B. Job Applications and Proposals</strong>
              </p>
                <p><strong>Application Limits:</strong> Freelancers can have up to two active job proposals at any given time. If one slot is filled, only one active job proposal remains. If both slots are filled, you will be unable to apply for additional jobs until one proposal is completed or withdrawn.
                </p><br/>
                <p><strong>Job Suitability:</strong> You must ensure that you meet the requirements of the job before applying. Applying for jobs for which you are not qualified may result in penalties, including account suspension.''.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>C. Offer Acceptance and Contractual Obligations</strong>
              </p>
                <p><strong>Offer Review:</strong>  Once a client makes an offer, you are responsible for reviewing the terms carefully. Accepting an offer creates a binding contract between you and the client.
                </p><br/>
                <p><strong>Hourly Contracts:</strong>  If the job is based on an hourly contract, you are expected to log your hours accurately. You must adhere to the hourly limit set by the client and report your hours weekly.
                </p><br/>
                <p><strong>Fixed-Price Contracts:</strong>  For fixed-price jobs, you must agree on deliverables and deadlines before starting work. Payment will be tied to the completion of agreed milestones.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>D. Conduct and Professionalism</strong>
              </p>
                <p><strong>Professional Standards:</strong>  You are expected to maintain high professional standards while working on Remoteconnect. This includes meeting deadlines, communicating effectively with clients, and delivering high-quality work.
                </p><br/>
                <p><strong>Communication:</strong>   Clear and timely communication with clients is essential. Failure to respond to client inquiries within a reasonable time frame may result in negative feedback or account penalties.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>E. Intellectual Property and Confidentiality</strong>
              </p>
                <p><strong>Ownership:</strong>  Any intellectual property created during the course of a job typically belongs to the client unless otherwise agreed upon. You must transfer all rights to the client upon completion of the job.
                </p><br/>
                <p><strong>Confidentiality:</strong> You must keep all client information confidential. Non-disclosure agreements (NDAs) may be required, and failure to comply may result in legal action and account termination.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>F. Payments and Disputes</strong>
              </p>
                <p><strong>Payment Terms:</strong>  Payments will be made according to the terms agreed upon in the contract. For hourly contracts, payments are made based on the hours reported and approved by the client. For fixed-price contracts, payments are tied to milestone completion.
                </p><br/>
                <p><strong>Dispute Resolution:</strong> If a dispute arises with a client, you should attempt to resolve it directly. Remoteconnect will only intervene if the parties are unable to reach a resolution. Our decision in such disputes is final and binding.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>G. Account Suspension and Termination</strong>
              </p>
                <p><strong>Violations:</strong>  Remoteconnect reserves the right to suspend or terminate your account if you violate these TOS, including but not limited to applying for jobs for which you are not qualified, failing to deliver work as agreed, or engaging in unprofessional conduct.
                </p><br/>
                <p><strong>Termination by Freelancer:</strong> You may choose to terminate your account at any time. However, you must complete any active contracts and resolve any disputes before doing so.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>H. Review and Feedback System</strong>
              </p>
                <p><strong>Feedback:</strong> Upon completion of a job, clients may leave feedback on your performance. This feedback will be visible to other potential clients and can impact your ability to secure future jobs.
                </p><br/>
                <p><strong>Disputing Feedback:</strong> If you believe that feedback left by a client is unfair or violates our guidelines, you may dispute it. Remoteconnect will review the feedback and take appropriate action if necessary.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>I. Compliance with Laws</strong>
              </p>
                <p><strong>Legal Obligations:</strong> You are responsible for complying with all applicable laws, including tax obligations, while using Remoteconnect. This includes reporting income earned through the platform and ensuring that you have the necessary permits or licences to offer your services.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>J. Amendments to Terms of Service</strong>
              </p>
                <p><strong>Changes to TOS:</strong> Remoteconnect may update these TOS from time to time. If changes are made, you will be notified 30 days before they take effect. Continued use of the platform after the changes take effect will signify your acceptance of the revised TOS.
                </p><br/>
                <h3 className="mb-4 text-xl">
                <strong>5.4 Jobs</strong><br />
              </h3>
              <p className="text-base mb-4">
                <strong className='text-lg'>A. Job Posting and Management</strong>
              </p>
                <p><strong>Eligibility:</strong>  Only registered and verified clients are permitted to post jobs on Remoteconnect. To post a job, you must first create an organisation or team and define the roles and responsibilities within your team.
                </p><br/>
                <p><strong>Job Descriptions:</strong>  Jobs must be posted with clear, accurate, and detailed descriptions. This includes the scope of work, required skills, expected deliverables, and any other relevant information. Remoteconnect reserves the right to remove or modify job postings that do not meet platform standards or are deemed inappropriate.
                </p><br/>
                <p><strong>Posting Fees:</strong>  Remoteconnect may charge fees for posting jobs, which will be outlined before you complete the posting process. These fees are non-refundable, even if the job posting is removed or modified.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>B. Job Offers and Contracts</strong>
              </p>
                <p><strong>Offers:</strong> Once a freelancer applies to a job posting, you may review their application and extend an offer if they are a suitable match. An offer constitutes a binding agreement between you (the client) and the freelancer.
                </p><br/>
                <p><strong>Contract Terms:</strong> All contracts must clearly outline the terms of engagement, including job scope, deadlines, payment terms, and any other relevant details. It is your responsibility to ensure that both parties understand and agree to these terms before work begins.
                </p><br/>
                <p><strong>Modification of Contracts:</strong> Any changes to the terms of a contract must be agreed upon by both parties and documented in writing. Unauthorised modifications or verbal agreements are not enforceable.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>C. Payment Terms</strong>
              </p>
                <p><strong>Payment Structure:</strong>  Jobs can be offered on an hourly basis, per project, or as full-time positions. You are responsible for specifying the payment structure in your job posting and contract.
                </p><br/>
                <p><strong>Fee Structure:</strong> Remoteconnect reserves the right to charge a service fee based on the job type and rate. These fees will be transparently communicated before the job posting is finalised.
                </p><br/>
                <p><strong>Dispute Resolution:</strong>  In the event of a payment dispute, you should attempt to resolve the issue directly with the freelancer. If the dispute cannot be resolved, Remoteconnect will intervene only if both parties fail to reach an agreement. Our decision in such disputes is final.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>D. Job Completion and Feedback</strong>
              </p>
                <p><strong>Completion:</strong> You are responsible for reviewing the freelancers work upon completion of the job. Any issues or requests for revisions should be communicated promptly. Final approval and payment should be made according to the agreed terms.
                </p><br/>
                <p><strong>Feedback:</strong> After job completion, you may provide feedback on the freelancers performance. Feedback should be honest and relevant to the work completed. This feedback will be visible to other users on the platform.
                </p><br/>
                <p><strong>Dispute of Feedback:</strong> If you believe that the feedback received is unfair or inaccurate, you may file a dispute. Remoteconnect will review the dispute and take appropriate action if necessary.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>E. Job Posting Restrictions</strong>
              </p>
                <p><strong>Prohibited Content:</strong> Job postings must not include discriminatory, defamatory, or illegal content. Remoteconnect reserves the right to remove postings that violate these guidelines or applicable laws.
                </p><br/>
                <p><strong>Duplicate Postings:</strong> Duplicate job postings for the same or similar positions are not permitted. All job postings must be unique and provide specific details about the job.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>F. Confidentiality and Intellectual Property</strong>
              </p>
                <p><strong>Confidential Information:</strong>  You must ensure that any confidential information shared with freelancers is protected. Any breaches of confidentiality should be reported to Remoteconnect immediately.
                </p><br/>
                <p><strong>Intellectual Property:</strong> Unless otherwise agreed upon in the contract, you typically own the intellectual property created during the course of a job. It is your responsibility to specify ownership terms clearly in the job posting and contract.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>G. Termination and Suspension</strong>
              </p>
                <p><strong>Termination:</strong> You may terminate a job posting or contract at any time, provided that you fulfil any existing obligations and resolve any active disputes.
                </p><br/>
                <p><strong>Suspension:</strong>  Remoteconnect reserves the right to suspend or terminate your ability to post jobs if you violate these TOS or engage in behaviour that is deemed harmful to the platform or its users.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>H. Compliance with Laws</strong>
              </p>
                <p><strong>Legal Compliance:</strong> You are responsible for ensuring that your job postings and contracts comply with all applicable laws and regulations. This includes, but is not limited to, employment laws, tax obligations, and intellectual property laws.
                </p><br/>
                <p><strong>Suspension:</strong>  Remoteconnect reserves the right to suspend or terminate your ability to post jobs if you violate these TOS or engage in behaviour that is deemed harmful to the platform or its users.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>I. Amendments to Terms of Service</strong>
              </p>
                <p><strong>Changes:</strong> Remoteconnect may update these TOS from time to time. You will be notified of any changes 30 days before they take effect. Continued use of the platform after the changes take effect will signify your acceptance of the revised TOS.
                </p><br/>
                <h3 className="mb-4 text-xl">
                <strong>5.5 Contracts</strong><br />
              </h3>
              <p className="text-base mb-4">
                <strong className='text-lg'>A. Contract Formation</strong>
              </p>
                <p><strong>Creation:</strong> A contract is formed when a client extends an offer to a freelancer, and the freelancer accepts the offer. This contract constitutes a binding agreement between the client and freelancer and outlines the terms of their engagement.
                </p><br/>
                <p><strong>Details:</strong> Contracts must include, at a minimum, the following details:
                </p>
                <p>Scope of work and deliverables
                </p>
                <p>Deadlines and milestones
                </p>
                <p>Payment terms, including rates and schedules
                </p>
                <p>Any additional terms or conditions specific to the job
                </p><br/>
                <p><strong>Agreement:</strong> Both parties must agree to and document all terms in writing. Verbal agreements or informal communications are not considered legally binding.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>B. Payment Terms</strong>
              </p>
                <p><strong>Payment Structure:</strong> Contracts can specify payment on an hourly basis, per project, or as a full-time position. All payment terms must be clearly outlined and agreed upon before work begins.
                </p><br/>
                <p><strong>Invoices:</strong> Freelancers must submit invoices as specified in the contract. Clients are responsible for reviewing and processing invoices promptly according to the agreed payment schedule.
                </p><br/>
                <p><strong>Fees:</strong>  Remoteconnect reserves the right to charge service fees based on the job type and rate. These fees will be communicated before the contract is finalised.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>C. Modifications and Amendments</strong>
              </p>
                <p><strong>Changes:</strong>  Any changes to the contract terms must be mutually agreed upon by both parties and documented in writing. Unauthorised modifications or verbal agreements are not enforceable.
                </p><br/>
                <p><strong>Approval:</strong>  Both client and freelancer must approve any amendments before they become effective.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>D. Completion and Delivery</strong>
              </p>
                <p><strong>Deliverables:</strong> Freelancers are responsible for delivering the work according to the specifications and deadlines outlined in the contract.
                </p><br/>
                <p><strong>Review:</strong> Clients must review the completed work and provide feedback or request revisions if necessary. Final approval must be given in accordance with the contract terms.
                </p><br/>
                <p><strong>Acceptance:</strong>  Once the work is completed and accepted, the client must make payment as agreed. Any delays in payment must be addressed promptly.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>E. Dispute Resolution</strong>
              </p>
                <p><strong>Resolution:</strong> In case of disputes regarding the contract, both parties should attempt to resolve the issue through direct communication. If a resolution cannot be reached, Remoteconnect may assist in mediating the dispute if both parties agree.
                </p><br/>
                <p><strong>Intervention:</strong>  Remoteconnects intervention is limited to cases where direct resolution is not feasible. Our decision in such disputes is final.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>F. Confidentiality and Intellectual Property</strong>
              </p>
                <p><strong>Confidential Information:</strong> Both parties must protect any confidential information shared during the contract. Breaches of confidentiality must be reported to Remoteconnect immediately.
                </p><br/>
                <p><strong>Intellectual Property:</strong>  Ownership of intellectual property created during the contract is typically specified in the contract. Unless otherwise agreed, intellectual property rights will be retained by the client or freelancer as per the contract terms.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>G. Termination</strong>
              </p>
                <p><strong>Termination:</strong> Either party may terminate the contract in accordance with the terms specified. If a contract is terminated, both parties must fulfil any outstanding obligations and resolve any active disputes.
                </p><br/>
                <p><strong>Suspension:</strong>  Remoteconnect reserves the right to suspend or terminate contracts if either party violates these TOS or engages in behaviour that is harmful to the platform or its users.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>H. Compliance with Laws</strong>
              </p>
                <p><strong>Legal Compliance:</strong> Both client and freelancer must ensure that their contract and work comply with all applicable laws and regulations, including employment laws, tax obligations, and intellectual property laws.
                </p><br/>
                <p className="text-base mb-4">
                <strong className='text-lg'>I. Amendments to Terms of Service</strong>
              </p>
                <p><strong>Updates:</strong> Remoteconnect may update these TOS from time to time. You will be notified of any changes 30 days before they take effect. Continued use of the platform after the changes take effect will signify your acceptance of the revised TOS.
                </p><br/>
            </div>
          </motion.div>
          <div className="border border-gray-300 rounded-md" ref={(el) => { accordionRefs.current[6] = el; }}>
          <button
            onClick={() => toggleAccordion(6)}
            className="flex justify-between w-full p-4 text-left text-lg font-medium focus:outline-none"
          >
            6. Payments
            <span>{activeIndex === 6 ? '-' : '+'}</span>
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: activeIndex === 6 ? 'auto' : 0, opacity: activeIndex === 6 ? 1 : 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-4">
              <p className="text-base mb-4">
                <strong className='text-lg'>A. Payment Methods</strong><br /><br/>
                Clients on Remoteconnect can make payments using the following methods:
              </p>
              <li>
                Payoneer
              </li>
              <li>
              Bank Transfer
              </li>
              <li>
              Credit Card
              </li><br/>
              <p className="text-base mb-4">
                <strong className='text-lg'>B. Payment Processing</strong><br /><br/>
                All payments made by Clients for services rendered by Freelancers will first be processed through Remoteconnect. The platform will deduct its applicable service fees before transferring the remaining funds to the Freelancer.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>C. Payment Frequency</strong><br /><br/>
                <p><strong>Termination:</strong> Either party may terminate the contract in accordance with the terms specified. If a contract is terminated, both parties must fulfil any outstanding obligations and resolve any active disputes.
                </p><br/>
                <p><strong>Suspension:</strong>  Remoteconnect reserves the right to suspend or terminate contracts if either party violates these TOS or engages in behaviour that is harmful to the platform or its users.
                </p>
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>D. Verified Payment Methods</strong><br /><br/>
                <p><strong>For Clients:</strong> Clients must have a verified payment method before they are allowed to post jobs on Remoteconnect. This verification ensures that the Client has the necessary means to compensate Freelancers for their work.
                </p><br/>
                <p><strong>For Freelancers:</strong>  Freelancers must have a verified payment receiving method (e.g., a Payoneer account or another supported account) before they can accept jobs. This verification is necessary to ensure that Freelancers can receive payments securely.
                </p>

              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>E. Secure Transfer Methods</strong><br /><br/>
                Remoteconnect uses secure methods for all financial transactions, including Payoneer API and Square API, to process payments. This ensures that all payments are handled safely and securely, providing peace of mind for both Clients and Freelancers.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>F. Dispute Resolution and Fund Holding</strong><br /><br/>
                <p><strong>Fund Holding:</strong> Remoteconnect will hold funds for twenty-four (24) hours after receiving a payment to allow the Client time to open a dispute if necessary.
                </p><br/>
                <p><strong>Dispute Resolution:</strong>  If a Client wishes to open a dispute within this 48-hour window, Remoteconnect will hold the funds and assist in resolving the issue. If no dispute is raised within this period, the payment will be released to the Freelancer.
                </p><br/>
                <p><strong>Refunds:</strong>  If a dispute is opened and resolved in favour of the Client, a refund may be issued. If no dispute is opened within the 48-hour window, the payment will be finalised, and no refunds will be processed.
                </p>
              </p>
            </div>
          </motion.div>
        </div>
        <div className="border border-gray-300 rounded-md" ref={(el) => { accordionRefs.current[7] = el; }}>
          <button
            onClick={() => toggleAccordion(7)}
            className="flex justify-between w-full p-4 text-left text-lg font-medium focus:outline-none"
          >
            7. Communication and Platform Integrity
            <span>{activeIndex === 7 ? '-' : '+'}</span>
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: activeIndex === 7 ? 'auto' : 0, opacity: activeIndex === 7 ? 1 : 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-4">
              <p className="text-base mb-4">
                <strong className='text-lg'>A. Compliance with Terms</strong><br /><br/>
                By using our websites and apps, you agree to adhere to all terms and conditions outlined in these Terms of Service. Any violation of these terms may result in the suspension or termination of your account.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>B. Prohibited Communications</strong><br /><br/>
                To maintain the integrity and security of our platform, you agree not to engage in any of the following activities:
              </p>
              <ol>
              <li>
                <strong>Discussing Payments Outside the Platform: </strong>All payment-related discussions must be conducted exclusively through Remoteconnect. Any attempt to negotiate or discuss payment terms outside of the platform is strictly prohibited.
              </li><br/>
              <li>
                <strong>Promoting or Suggesting Alternative Platforms: </strong>
                Users are prohibited from suggesting, promoting, or facilitating the movement of transactions or communications to other platforms outside of Remoteconnect.
              </li><br/>
              <li>
                <strong>Acting on Behalf of Others: </strong>
                You may not post jobs, submit proposals, or conduct any other activities on behalf of another individual or entity without explicit authorization.
              </li><br/>
              <li>
                <strong>Sharing Illegal or Inappropriate Content: </strong>
                Any content that violates applicable laws, is defamatory, abusive, obscene, or otherwise inappropriate is strictly prohibited.
              </li>
            </ol><br/>
              <p className="text-base mb-4">
                <strong className='text-lg'>C. Consequences of Violations</strong><br /><br/>
                Any violation of the above policies may result in immediate account termination. Remoteconnect reserves the right to take appropriate legal action in cases of severe or repeated violations.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>D. Monitoring and Enforcement</strong><br /><br/>
                Remoteconnect reserves the right to monitor communications on the platform to ensure compliance with these terms. Any suspected violations will be investigated, and appropriate action will be taken to maintain the integrity of the platform.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="border border-gray-300 rounded-md" ref={(el) => { accordionRefs.current[8] = el; }}>
          <button
            onClick={() => toggleAccordion(8)}
            className="flex justify-between w-full p-4 text-left text-lg font-medium focus:outline-none"
          >
            8. Your use of our Services
            <span>{activeIndex === 8 ? '-' : '+'}</span>
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: activeIndex === 8 ? 'auto' : 0, opacity: activeIndex === 8 ? 1 : 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-4">
              <p className="text-base mb-4">
                <strong className='text-lg'>A. Prohibited Activities</strong><br /><br/>
                You agree not to engage in any of the following prohibited activities:
              </p>
              <ul>
                <li>
                  <strong>Unauthorised Use: </strong>
                  Access or use our services in a manner that is not explicitly authorised by these Terms. This includes using our platforms for purposes not intended or approved by us.
                </li><br />
                <li>
                  <strong>Illegal Content: </strong>
                  Post, share, or transmit any content that is illegal, defamatory, obscene, offensive, or infringes on the rights of others. This includes content that violates intellectual property rights, privacy rights, or any other legal rights.
                </li><br />
                <li>
                  <strong>Impersonation: </strong>
                  Create, use, or operate an account on behalf of another person or entity without proper authorization. This includes applying for jobs, posting job offers, or engaging in any transactions as another person or entity.
                </li><br />
                <li>
                  <strong>Misrepresentation: </strong>
                  Provide false, misleading, or inaccurate information when using our services, including but not limited to personal details, job applications, or job postings.
                </li><br />
                <li>
                  <strong>Spam and Abuse: </strong>
                  Distribute unsolicited advertisements, promotional materials, or spam through our services. This also includes engaging in abusive practices, harassment, or intimidation of other users.
                </li><br />
                <li>
                  <strong>Malicious Activities: </strong>
                  Engage in activities that could harm, disrupt, or interfere with our services, including but not limited to the introduction of viruses, malware, or other malicious software.
                </li><br />
              </ul>
              <p className="text-base mb-4">
                <strong className='text-lg'>B. Account Responsibility</strong><br /><br/>
                You are solely responsible for all activities conducted under your account. This includes maintaining the confidentiality and security of your login credentials and ensuring that your account is not used for any prohibited activities.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>C. Action Against Violations</strong><br /><br/>
                We reserve the right to take appropriate action against any user who violates these Terms, including but not limited to suspending or terminating their account, removing any offending content, and reporting such violations to relevant authorities.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>D. Reporting Violation</strong><br /><br/>
                If you become aware of any violations of these Terms or other inappropriate conduct on our platforms, please contact us immediately. We will investigate and take appropriate actions as necessary to address any issues.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="border border-gray-300 rounded-md" ref={(el) => { accordionRefs.current[9] = el; }}>
          <button
            onClick={() => toggleAccordion(9)}
            className="flex justify-between w-full p-4 text-left text-lg font-medium focus:outline-none"
          >
            9. International Use & Translations
            <span>{activeIndex === 9 ? '-' : '+'}</span>
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: activeIndex === 9 ? 'auto' : 0, opacity: activeIndex === 9 ? 1 : 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-4">
              <p className="text-base mb-4">
                <strong className='text-lg'>A. Geographic Restrictions</strong><br /><br/>
                We do not guarantee that the materials on our websites and apps are suitable or available for use in all locations. Accessing our websites and apps from regions where the content is illegal or prohibited is not allowed. If you choose to access our services from your location, you do so at your own risk and are responsible for adhering to local laws.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>B. Translation of Terms</strong><br /><br/>
                These Terms may be translated into the local language of the applicable region. In the event of any discrepancies between the English version and the translated version, the English version will take precedence. The translated version will be considered automatically adjusted to align with and reflect the English version.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="border border-gray-300 rounded-md" ref={(el) => { accordionRefs.current[10] = el; }}>
          <button
            onClick={() => toggleAccordion(10)}
            className="flex justify-between w-full p-4 text-left text-lg font-medium focus:outline-none"
          >
           10. Disclaimer and Limitation of Liability
            <span>{activeIndex === 10 ? '-' : '+'}</span>
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: activeIndex === 10 ? 'auto' : 0, opacity: activeIndex === 10 ? 1 : 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-4">
              <p className="text-base mb-4">
                <strong className='text-lg'>A. Loss of Data Upon Account Termination</strong><br /><br/>
                Upon termination of your account, whether voluntary or involuntary, RemoteConnect may delete all data associated with your account, including but not limited to job postings, proposals, messages, and personal information. We are not liable for any loss of data, business opportunities, or other consequential damages that may result from account termination. It is your responsibility to back up any important data before account termination.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>B. Amendment of Data</strong><br /><br/>
                <strong>Data Modification:</strong> Remoteconnect reserves the right to amend, modify, or update any data, including but not limited to user profiles, job postings, and other information, as deemed necessary for operational or business purposes. This includes correcting errors, updating information, or making changes in accordance with our policies and practices.<br/><br/>
                <strong>User Responsibility:</strong> It is your responsibility to review and verify the accuracy of the data associated with your account. RemoteConnect is not responsible for any inaccuracies or outdated information that may occur as a result of data amendments.
              </p>
              <p className="text-base mb-4">
                <strong className='text-lg'>C. Limitation of Liability</strong><br /><br/>
                <strong>General Limitation:</strong> To the maximum extent permitted by law, RemoteConnect shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of, or inability to use, our websites, apps, or services. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses.<br/><br/>
                <strong>Exclusions:</strong> Some jurisdictions do not allow the exclusion or limitation of certain damages. If these laws apply to you, the above limitations may not apply, and you may have additional rights.
              </p>
            </div>
          </motion.div>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default TosAccordion;
