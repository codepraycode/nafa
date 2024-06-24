
import Partners from '@/components/Home/Partners'
import PageHeader from '@/components/PageHeader'
import AppLink from '@/components/UI/AppLink'
import Section from '@/components/UI/Section'
import { slugify, slugifyLink } from '@/utils/slugify'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HistoryPage() {
    return (
        <>
            <PageHeader
                title='SAFEGUARDING POLICY'
                image={""}
                small
            />

            <Section name='page-content' className='policy'>
                <div className='items-menu'>
                    <ul className='role-list'>
                        <li>
                            <Link href={slugifyLink("PURPOSE OF THE POLICY", "#")}>
                                PURPOSE OF THE POLICY
                            </Link>
                        </li>
                        <li>
                            <Link href={slugifyLink("DEFINITIONS", "#")}>
                                DEFINITIONS
                            </Link>
                        </li>
                        <li>
                            <Link href={slugifyLink("SCOPE OF THE POLICY", "#")}>
                                SCOPE OF THE POLICY
                            </Link>
                        </li>
                        <li>
                            <Link href={slugifyLink("POLICY ACTIONS", "#")}>
                                POLICY ACTIONS
                            </Link>
                        </li>
                        <li>
                            <Link href={slugifyLink("NON-COMPLIANCE", "#")}>
                                NON-COMPLIANCE
                            </Link>
                        </li>
                        <li>
                            <Link href={slugifyLink("MONITORING AND REVIEW", "#")}>
                                MONITORING AND REVIEW
                            </Link>
                        </li>
                        <li>
                            <Link href={slugifyLink("APPROVAL AND IMPLEMENTATION", "#")}>
                                APPROVAL AND IMPLEMENTATION
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="items-content">
                    <h1
                        className='text-clr-8 fs-48 fw-700 lh-37 ff-gotham'
                    >
                        POLICY STATEMENT FOR NAFA
                    </h1>
                    <br/><br/>
                    <p className='ff-montserrat fw-400 fs-20 lh-37 text-justify'>
                        The Nigeria American Football Association (NAFA) is committed to providing a fun, safe, and respectful environment for all children, young people, and adults involved in American Football. We recognise the right of all participants to be free from all forms of abuse and acknowledge our duty of care to safeguard them.
                    </p>

                    <br/><br/><br/><br/>

                    <h2
                        id={slugifyLink("Purpose of the policy", "#")}
                        className='ff-montserrat fw-600 fs-32 lh-37 text-justify'
                    >
                        Purpose of the policy
                    </h2>
                    <br/><br/>

                    <p className='ff-montserrat fw-400 fs-20 lh-37 text-justify'>
                        This policy outlines our commitment to safeguarding individuals involved in the delivery of American Football in Nigeria. It is supported by codes of conduct, guidelines, and procedures to ensure effective implementation. This policy applies to everyone, without any form of discrimination.<br/>
                        We recognise that certain groups, such as disabled individuals, women, and those on elite pathways, may be particularly vulnerable to abuse. NAFA accepts the responsibility to promote their inclusion, safety, and well-being throughout all levels of our sport.
                    </p>

                    <br/><br/><br/><br/>

                    <h2
                        id={slugify("Definitions")}
                        className='ff-montserrat fw-600 fs-32 lh-37 text-justify'
                    >
                        Definitions
                    </h2>
                    <br/><br/>

                    <ul className='ff-montserrat fw-400 fs-20 lh-37 text-justify'>
                        <li>
                            <span className='fw-600'>Child</span>: A person under the age of 18 years.
                        </li>
                        <li>
                            <span className='fw-600'>Adult</span>: A person aged 18 years or older.
                        </li>
                        <li>
                            <span className='fw-600'>Abuse</span>: Any act or omission that harms another person, which can be physical, emotional, sexual, or by neglect. Abuse can occur in person or online and can be perpetrated by an adult or another child.
                        </li>

                        <li>
                            <span className='fw-600'>Safeguarding</span>: Proactive measures taken to ensure the safety of children and vulnerable adults from harm when involved in American Football.
                        </li>

                        <li>
                            <span className='fw-600'>Child/Adult Protection</span>: refers to the action taken in response to a specific concern for a child or other vulnerable individual who may be suffering or are at risk of suffering harm or abuse. It is an essential part of safeguarding and requires referral to specialized protection services, law-enforcement agencies and expert local organizations who are trained to advice on and manage cases, if concerns arise.
                        </li>
                    </ul>
                    <br/><br/>

                    <h2
                        id={slugifyLink("Scope of the policyy", "#")}
                        className='ff-montserrat fw-600 fs-32 lh-37 text-justify'
                    >
                        Scope of the policy 
                    </h2>
                    <br/><br/>

                    <div>

                        <p className='ff-montserrat fw-400 fs-20 lh-37 text-justify'>
                            This policy applies to all individuals involved in NAFA activities, including but not limited to:
                        </p>

                        <br/>

                        <ul className='ff-montserrat fw-400 fs-20 lh-37 text-justify'>
                            <li>
                                Coaches and instructors
                            </li>
                            <li>
                                Medical staff
                            </li>
                            <li>
                                Managers
                            </li>

                            <li>
                                Administrators and coordinators
                            </li>

                            <li>
                                Volunteers
                            </li>

                            <li>
                                Parents and guardians
                            </li>
                            <li>
                                Peer and youth mentors
                            </li>
                            <li>
                                Implementing partners
                            </li>
                            <li>
                                Consultants, contractors, and subcontractors
                            </li>
                        </ul>
                    </div>

                    <br/><br/>
                    <h2
                        id={slugifyLink("Policy Actiony", "#")}
                        className='ff-montserrat fw-600 fs-32 lh-37 text-justify'
                    >
                        Policy Actions
                    </h2>
                    <br/><br/>

                    <div>
                        <ul className='ff-montserrat fw-400 fs-20 lh-37 text-justify'>
                            <li>Appoint a safeguarding officer. </li>
                            <li>Set up an internal steering group to guide our work and/or an external expert advisory group.</li>
                            <li>Collaborate with local child protection authorities/agencies and civil society organisations.</li>
                            <li>Implement protocols to ensure prompt and appropriate action in response to allegations of abuse. This includes the referral of concerns to the relevant statutory authorities. Recognising that in some contexts, such authorities may not exist, it is crucial to establish and maintain partnerships with expert local organisations and NGOs. These partners will be vetted for their competence and training in managing such issues, ensuring a comprehensive and effective response system is in place.</li>
                            <li>Develop an implementation/action plan to promote and install safeguarding measures across the NAFA.</li>
                            <li>Implement stringent recruitment and screening procedures to prevent the employment of unsuitable individuals.</li>
                            <li>Ensure that all staff and volunteers are fully aware of their roles and responsibilities concerning safeguarding practices. Provide comprehensive training upon their induction into the organisation and continue with regular training sessions and updates at least annually.</li>
                            <li>Require all members of staff and volunteers to sign and comply with the code of conduct.</li>
                            <li>Address concerns regarding poor practices and any breaches of the code of conduct through the designated competent body within NAFA.</li>
                            <li>Actively ensure that both children and adults involved in NAFA are well-informed about their rights and understand the available resources for support. Provide clear guidance on how and where to report concerns or seek help, ensuring that this information is easily accessible and comprehensible for all participants.</li>
                            <li>Ensure investigatory, disciplinary and appeals processes are in place to appropriately manage allegations, reports and cases where staff or volunteers have been found to have breached this policy and the code of conduct. Case management and support for victims of abuse (or alleged victims), and those accused, will be undertaken by the relevant authorities. Any internal investigation will be put on hold until statutory investigations are complete, so that internal processes do not compromise statutory or criminal investigations.</li>
                            <li>Implement procedures to ensure that all records of concerns, allegations, reports, and submitted evidence are maintained accurately and stored securely. These records should be accessible only to authorised personnel, ensuring confidentiality and integrity in handling sensitive information.</li>
                            <li>NAFA will continually assess how children participate in football across the country and regularly review our safeguarding practices, at least annually. This is to ensure ongoing learning and improvements in line with evolving best practices and national legislation. Additionally, NAFA will proactively consult with children and other vulnerable groups, guided by local agencies and partners, to enhance our safeguarding strategies effectively.</li>
                        </ul>
                        
                        <p className='ff-montserrat fw-400 fs-20 lh-37 text-justify'>
                            This policy, and its accompanying code of conduct, procedures and guidelines, will be widely promoted and made available on the NAFA website.
                        </p>
                    </div>

                    <br/><br/>
                    <h2
                        id={slugifyLink("Non-Compliancy", "#")}
                        className='ff-montserrat fw-600 fs-32 lh-37 text-justify'
                    >
                        Non-Compliance
                    </h2>
                    <br/><br/>
                    <p className='ff-montserrat fw-400 fs-20 lh-37 text-justify'>
                        Failure to comply with this policy by anyone involved with NAFA Activities as distinctly enumerated under the scope of Policy will result in disciplinary action, including dismissal.
                    </p>
                    <br/><br/>


                    <h2
                        id={slugifyLink("Monitoring and Reviey", "#")}
                        className='ff-montserrat fw-600 fs-32 lh-37 text-justify'
                    >
                        Monitoring and Review
                    </h2>
                    <br/><br/>


                    <div>
                        <p className='ff-montserrat fw-400 fs-20 lh-37 text-justify'>
                            This policy will undergo an annual review conducted in collaboration with expert local organizations and NGOs. Reviews may also occur more urgently under the following circumstances:
                        </p>

                        <ul className='ff-montserrat fw-400 fs-20 lh-37 text-justify'>
                            <li>
                                Changes in national legislation, policies, and services related to the rights and protection of children and adults, including safeguarding specifics.
                            </li>

                            <li>
                                Following any significant changes, events, or specific cases that may impact policy relevance or effectiveness
                            </li>
                        </ul>
                    </div>

                    <br/><br/>
                    <h2
                        id={slugifyLink("Approval and Implementatioy", "#")}
                        className='ff-montserrat fw-600 fs-32 lh-37 text-justify'
                    >
                        Approval and Implementation
                    </h2>
                    <br/><br/>
                    <p className='ff-montserrat fw-400 fs-20 lh-37 text-justify'>
                        This policy is approved by the Executive Committee of NAFA and is effective from the 1st day of June 2024.
                        <br/>
                        It will be prominently displayed and available on the NAFA website.

                        <br/><br/>

                        Reporting a concern?<br/>
                        NAFA offers secure reporting procedures for victims through the email address: safeguarding@nafa.ng
                    </p>


                </div>
            </Section>

        </>
    )
}
