import React from 'react'
import Section from '../UI/Section'
import Link from 'next/link'

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

                    <Link href={"/"}>Draw</Link>
                </h3>
                <br/>
                <div className="listing">
                    <span>Final</span>
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
                <br/>
                <div className="listing">
                    <span>12.02. 00:30</span>
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

            <br/><br/>

            <div className="score-table">
                <h3>
                    <span>NSSFFL - Play Offs</span>

                    <Link href={"/"}>Draw</Link>
                </h3>
                <br/>
                <div className="listing">
                    <span>Final</span>
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
                <div className="listing">
                    <span>12.02. 00:30</span>
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
        </Section>
    )
}
