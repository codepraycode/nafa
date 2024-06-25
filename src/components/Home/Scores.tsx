import React from 'react'
import Section from '../UI/Section'
import Link from '@/components/UI/AppLink';
import { slugifyLink as slugify } from '@/utils/slugify';

export default function LiveScores() {
    return (
        <Section
            name='live_scores'
        >
            <h2
                className='fw-600 lg-fs-32 fs-20 lh-24 text-clr-4 text-uppercase'
            >
                Latest Scores
            </h2>
            <br/>

            <div className="score-table">
                <h3
                    className='text-clr-light bg-3 lh-24 fw-600'
                >
                    <span
                        className='lg-fs-24 fs-12'
                    >
                        NSSFFL - Play Offs
                    </span>

                    <Link
                        href={slugify("Draw")}
                        className='text-clr-light lg-fs-16 fs-12'
                    >
                        Draw
                    </Link>
                </h3>

                <div className="listing">
                    <div className='text-clr-4 fw-600 fs-16 lh-24'>
                        <div className="list-item">
                            <span
                                className='simple fw-500 fs-20 lh-24 text-clr-dark'
                            >
                                Final
                            </span>

                            <span>
                                Ondo State
                            </span>

                            <div>
                                <span>25</span>
                                <span>25</span>
                                <span>25</span>
                                <span>25</span>
                                <span>25</span>
                                <span>25</span>
                            </div>
                        </div>

                        <div className="list-item">
                            <span
                                className='simple fw-500 fs-20 lh-20'
                            >
                                12.02. 00:30
                            </span>
                            <span>Lagos State</span>

                            <div>
                                <span>25</span>
                                <span>25</span>
                                <span>25</span>
                                <span>25</span>
                                <span>25</span>
                                <span>25</span>
                            </div>
                        </div>
                    </div>

                    <hr/>
                    <span className='caution' />
                </div>
            </div>

            {/* <hr/> */}

            <div className="score-table">
                <h3
                    className='text-clr-light bg-3 lh-24 fw-600'
                >
                    <span
                        className='lg-fs-24 fs-12'
                    >
                        NSSFFL - All Stars
                    </span>

                    <Link
                        href={slugify("Draw")}
                        className='text-clr-light lg-fs-16 fs-12'
                    >
                        Draw
                    </Link>
                </h3>

                <div className="listing">
                    <div className='text-clr-4 fw-600 fs-16 lh-24'>
                        <div className="list-item">                        
                            <span
                                className='simple fw-500 fs-20 lh-24 text-clr-dark'
                            >
                                Final
                            </span>

                            <span>Ondo State</span>

                            <div>
                                <span>25</span>
                                <span>25</span>
                                <span>25</span>
                                <span>25</span>
                                <span>25</span>
                                <span>25</span>
                            </div>
                        </div>

                        <div className="list-item">
                            <span
                                className='simple fw-500 fs-20 lh-20'
                            >
                                12.02. 00:30
                            </span>

                            <span>Lagos State</span>

                            <div>
                                <span>25</span>
                                <span>25</span>
                                <span>25</span>
                                <span>25</span>
                                <span>25</span>
                                <span>25</span>
                            </div>
                        </div>
                    </div>

                    <hr/>
                    <span className='caution' />
                </div>
            </div>
        </Section>
    )
}
