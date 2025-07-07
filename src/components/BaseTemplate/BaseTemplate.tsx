import React, { useState, useEffect } from 'react';
import './BaseTemplate.css';
import avatarImage from '../../images/avatar.png'; 
import blueEllipse from '../../images/blueEllipse.png';
import yellowEllipse from '../../images/yellowEllipse.png';
import ReactCurvedText from "react-curved-text";
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import Cloud from '../../images/Cloud.svg';
import Cloud1 from '../../images/cloud1.svg';
import Cloud2 from '../../images/cloud2.svg';
import Cloud3 from '../../images/cloud3.svg';
import Cloud4 from '../../images/cloud4.svg';
import Cloud5 from '../../images/cloud5.svg';
import Cloud6 from '../../images/cloud6.svg';
import instagram from '../../images/instagram.svg';
import linkedin from '../../images/linkedin.svg';
import github from '../../images/github.svg';
import email from '../../images/email.svg';

type BaseTemplateProps = {
  children?: any;
  marqueeText?: string;
}

const BaseTemplate = ({ children, marqueeText = "ll@•pet•ad).]•ll@•pet•ad).]•" }: BaseTemplateProps) => {
  const [dimensions, setDimensions] = useState({
    cx: window.innerWidth <= 768 ? window.innerWidth * 0.5 : window.innerWidth * 0.35,
    cy: window.innerWidth <= 768 ? window.innerWidth * 0.45 : window.innerWidth * 0.35,
    rx: window.innerWidth <= 768 ? window.innerWidth * 0.4 : window.innerWidth * 0.25,
    ry: window.innerWidth <= 768 ? window.innerWidth * 0.4 : window.innerWidth * 0.275,
    offset: window.innerWidth <= 768 ? window.innerWidth * 0.15 : window.innerWidth * 0.09
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        cx: window.innerWidth <= 768 ? window.innerWidth * 0.5 : window.innerWidth * 0.35,
        cy: window.innerWidth <= 768 ? window.innerWidth * 0.45 : window.innerWidth * 0.35,
        rx: window.innerWidth <= 768 ? window.innerWidth * 0.4 : window.innerWidth * 0.25,
        ry: window.innerWidth <= 768 ? window.innerWidth * 0.4 : window.innerWidth * 0.275,
        offset: window.innerWidth <= 768 ? window.innerWidth * 0.15 : window.innerWidth * 0.09
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

//   const [home, setHome] = useState(true);
//   const [art, setArt] = useState(false);
//   const [code, setCode] = useState(false);
//   const [about, setAbout] = useState(false);

  return (
    <div className="base-template">
        <img src={Cloud} alt="Cloud" className="cloud" />
        <img src={Cloud1} alt="Cloud 1" className="cloud1" />
        <img src={Cloud2} alt="Cloud 2" className="cloud2" />
        <img src={Cloud3} alt="Cloud 3" className="cloud3" />
        <img src={Cloud4} alt="Cloud 4" className="cloud4" />
        <img src={Cloud5} alt="Cloud 5" className="cloud5" />
        <img src={Cloud6} alt="Cloud 6" className="cloud6" />
        <div className='socials'>
          <a href='https://www.linkedin.com/in/lilychisholm' style={{'zIndex': 100 }}>
            <img src={linkedin} alt="linkedin" className="linkedin"/>
          </a>
          <a href='https://www.instagram.com/lavindex' style={{'zIndex': 100 }}>
            <img src={instagram} alt="instagram" className="instagram"/>
          </a>
          <a  href='https://www.github.com/lilychisholm' style={{'zIndex': 100 }}>
            <img src={github} alt="github" className="github"/>
          </a>
          <a  href='lchisholm30@gatech.edu' style={{'zIndex': 100 }}>
            <img src={email} alt="email" className="email"/>
          </a>
        </div>
        
        
      <header className="header">
        <Marquee 
                direction="right" 
                className="marquee"
                loop={0}
                autoFill={true}
                speed={150}
            >
                {marqueeText}
            </Marquee>
            <div className="header-image">
                <div className="name-container">
                    <ReactCurvedText
                        className="name"
                        text="Lily Seika Chisholm"
                        width={window.innerWidth <= 768 ? '100vw' : '70vw'}
                        height={window.innerWidth <= 768 ? '80vw' : '50vw'}
                        cx={dimensions.cx}
                        cy={dimensions.cy}
                        rx={dimensions.rx}
                        ry={dimensions.ry}
                        startOffset={dimensions.offset}
                        reversed={true}
                        clockwise={true}
                        textPathProps={{
                            fill: "#B0D4FF",
                            stroke: "black",
                        }}
                        textProps={{ style: { fontSize: window.innerWidth <= 768 ? '12vw' : '8vw', fontFamily: 'DIGILFS', letterSpacing: 1 } }}
                    />
                </div>
                <img src={blueEllipse} alt="Blue Ellipse" className="blue-ellipse" />
                <img src={yellowEllipse} alt="Yellow Ellipse" className="yellow-ellipse" />
                <img src={avatarImage} alt="Lily Chisholm" className="avatar" />
                <nav className="nav">
                    <Link to="/" >home</Link>
                    <Link to="/art" >art</Link>
                    <Link to="/code" >code</Link>
                    <Link to="/about" >about</Link>
                </nav>
            </div>
      </header>
      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Lily Chisholm. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BaseTemplate;