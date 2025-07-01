import React from 'react';
import BaseTemplate from '../../components/BaseTemplate/BaseTemplate.tsx';
import './About.css';

export default function About() {
    return (
        <div className="about-page">
            <BaseTemplate>
                <div className="about-page-container">
                    <h1 className="about-title">About</h1>
                </div>
            </BaseTemplate>
        </div>
    );
}