import React from 'react';
import BaseTemplate from '../../components/BaseTemplate/BaseTemplate.tsx';
import './Code.css';
import Card from './Card.tsx';

const codeText = "01001100 01101001 01101100 01111001 00100000 01010011 01100101 01101001 01101011 01100001 00100000 01000011 01101000 01101001 01110011 01101000 01101111 01101100 01101101";

const Code = () => {
    return (
        <div className="code-page">
            <BaseTemplate marqueeText={codeText}>
                <div className="code-page-container">
                    <div className="code-text-container">
                        <h1 className="code-title">
                            C<br/>
                            o<br/>
                            d<br/>
                            e
                        </h1>
                        <h2 className="code-subtitle">personal projects</h2>
                    </div>
                    <div className="card1">
                        <Card />
                    </div>
                    <div className="card2">
                        <Card />
                    </div>
                    <div className="card3">
                        <Card />
                    </div>
                    <div className="card4">
                        <Card />
                    </div>
                    <div className="card5">
                        <Card />
                    </div>
                    <div className="card6">
                        <Card />
                    </div>
                </div>
            </BaseTemplate>
        </div>
    );
}

export default Code;