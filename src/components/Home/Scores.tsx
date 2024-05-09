import React from 'react'
import Section from '../UI/Section'
import Link from '@/components/UI/AppLink';
import { slugifyLink as slugify } from '@/utils/slugify';

export default function LiveScores() {
    return (
        <Section
            name='live_scores'
        >
            <h2>Latest Scores</h2>
            <br/>

            <div className="score-table">
                <h3>
                    <span>NSSFFL - Play Offs</span>

                    <Link href={slugify("Draw")}>Draw</Link>
                </h3>

                <div className="listing">
                    <div>
                        <div className="list-item">                        
                            <span className='simple'>Final</span>
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
                            <span className='simple'>12.02. 00:30</span>
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
                <h3>
                    <span>NSSFFL - All Stars</span>

                    <Link href={slugify("Draw")}>Draw</Link>
                </h3>

                <div className="listing">
                    <div>
                        <div className="list-item">                        
                            <span className='simple'>Final</span>
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
                            <span className='simple'>12.02. 00:30</span>
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
