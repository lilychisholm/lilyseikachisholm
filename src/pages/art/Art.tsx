import React from 'react';
import BaseTemplate from '../../components/BaseTemplate/BaseTemplate.tsx';
import './Art.css';
import Graph from '../../images/graph.svg';
import SwirlGirl from '../../images/swirlgirl.png';

const Art = () => {
    return (
        <div className="art-page">
            <BaseTemplate>
                <div className="art-page-container">
                    <div className="graph-container">
                        <img src={Graph} alt="Graph" className="graph" />
                        <img src={Graph} alt="Graph" className="graph" />
                    </div>
                    <img src={SwirlGirl} alt="Swirl Girl" className="swirlgirl" />
                    <div className="art-text-container">
                        <h1 className="art-title">Art</h1>
                        <h2 className="art-subtitle">explore the portfolio</h2>
                    </div>
                </div>
            </BaseTemplate>
        </div>
    );
}

export default Art;