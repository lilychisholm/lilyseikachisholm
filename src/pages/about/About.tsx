import React from 'react';
import BaseTemplate from '../../components/BaseTemplate/BaseTemplate.tsx';
import './About.css';
import selfie from '../../images/B00A7D12-7619-4B7B-B858-D96989DEAA20.JPG';

export default function About() {
    return (
        <div className="about-page">
            <BaseTemplate>
                <div className="about-page-container">
                    <h1 className="about-title">About</h1>
                    <p className="about-p"> hi! i’m lily seika chisholm. i’m a student at the georgia instititue of technology, majoring in computer science with threads 
                        in media and systems architecture. i’m also an artist. i like to focus my pieces on the internet, japanese culture, the will to live,
                         fish, and something something twenty one year old angst. 
                    currently i’m working on a project for create-x at georgia tech, 
                    aimed to make materials planning easier for artists! i have some other  projects but they’re not ready for release yet. my current 
                    coding interests are creative coding, data/AI/ML (been working on Kaggle), and arduino.
                    </p>
                    <p className="about-p2">
                    what else can i cram in here.. i’ll put my resume in here so you can go through the nitty gritty of my work experience and whatnot, but outside of 
                    that stuff i like to go to various cafes, make yummy food, watch movies (“they cloned tyrone” was a recent amazing watch), play piano + drums, embroider, 
                    listen to online lectures (currently trying to get through stanford’s machine learning series), read (current book: wicked), but more often you can probably
                     find me doodling or working on a personal project to procrastinate studying.
                    </p>
                    <p className="about-p3">
                    thanks for checking this out! ジャネー！
                    </p>
                    <div className="resume-section">
                        <a href={`${process.env.PUBLIC_URL}/CHISHOLM_LILY_RESUME.pdf`} target="_blank" rel="noopener noreferrer">
                            <button className="resume-btn">View My Resume!</button>
                        </a>
                    </div>
                    <img src={selfie} className='selfie'/>
                </div>
            </BaseTemplate>
        </div>
    );
}