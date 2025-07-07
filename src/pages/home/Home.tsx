import BaseTemplate from '../../components/BaseTemplate/BaseTemplate.tsx';
import React from 'react';
import './Home.css';
import Marquee from "react-fast-marquee";


const Home = () => {
    return (
        <BaseTemplate>
            <Marquee 
                direction="left" 
                className="marquee-home"
                loop={0}
                autoFill={true}
                speed={150}
                >
                ll@•pet•ad).]•ll@•pet•ad).]•
            </Marquee>
        </BaseTemplate>
    );
}

export default Home;