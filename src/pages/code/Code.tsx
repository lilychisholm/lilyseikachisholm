import React from 'react';
import BaseTemplate from '../../components/BaseTemplate/BaseTemplate.tsx';
import './Code.css';
import Card from './Card.tsx';
import MoneyParce from '../../images/moneyparse.png'
import InternalNote from '../../images/internalnote.png'
import chickfila from '../../images/chick-fil-a-1.svg'
import website from '../../images/website.png'
import scambuster from '../../images/scambuster.png'
import godaddy from '../../images/gd.png'

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
                    <div className="cards-container">
                        <div className="cards">
                            <div className="card1">
                                <Card>
                                    <div className='cardcontent'>
                                        <h1>ScamBuster</h1>
                                        <img src={scambuster} alt="scambuster" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        {/* <div className='text1'>
                                            <a href='https://devpost.com/software/scam-detection-w1rcgj'>ScamBuster</a>
                                            <text>&nbsp;was made for the "So you think you can hack?" hackathon by DataBricks. Using a Bert-mini NLP model,
                                                my team and I created a dataset of scam SMS messages, and trained the Bert-mini model on them. It was able to detect 
                                                scam messages with 90% accuracy, and we integrated it into an Android app. The app would automatically rate incoming SMS messages
                                                from 0.0-1.0 to express the likelihood of the message being a scam, 0.0 being definitely not a scam and 1.0 being a scam 
                                                for sure. <a href='https://github.com/lilychisholm/ScamBuster'>Here's</a> the repo for it!
                                            </text>
                                        </div> */}
                                    </div>
                                </Card>
                            </div>
                            <div className="card2">
                                <Card>
                                    <div className='cardcontent'>
                                        <h1>Internal Notes</h1>
                                        <img src={InternalNote} alt="MoneyParse" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        {/* <div className='text2'>
                                            <text> If you're a user of the GoDaddy Conversations platform, you might've noticed a feature that's shown up 
                                                recently; internal notes! I was actually one of two engineers who made that feature, allowing users to add a 
                                                note to their conversations. Used AWS, React.js, and some internal APIs. I've done a lot of other work at GoDaddy too 
                                                though, ranging from user experiments, Figma designs, to AWS, data, and more!</text>
                                        </div>  */}
                                    </div>
                                </Card>
                            </div>
                            <div className="card3">
                                <Card>
                                    <div className='cardcontent'>
                                        <h1>This Website!</h1>
                                        <img src={website} alt="website" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        {/* <div className='text3'>
                                            <text> I made this website somewhat on a whim, I could've used something else to build and 
                                                deploy my website but for whatever reason I decided I wanted to design and code this 
                                                from scratch. The whole thing is built using Typescript, React.js, Javascript, Node.js, 
                                                a lot of Node packages, HTML, and CSS. The design was made on Figma. I'm planning on keeping
                                                this website as a continuous work in progress, something to experiment cool webdev stuff with.
                                                The next step is adding some elements using three.js - the goal is to eventually have a cracked
                                                profile like <a href='https://hsmkrt1996.com/ '>Hisami Kurita</a>
                                                &nbsp;:D Anywho, <a href='https://github.com/lilychisholm/lilyseikachisholm'>here's</a> 
                                                &nbsp;the github for this site if you wanna check it out!
                                            </text>
                                        </div> */}
                                    </div>
                                </Card>
                            </div>
                            <div className="card4">
                                <Card>
                                    <div className='cardcontent'>
                                        <h1>Email Automation</h1>
                                        <img src={chickfila} alt="chickfila" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        {/* <div className='text4'>
                                            <text> During my time co-oping at Chick-Fil-A, one of the projects I was given was an email automation. 
                                                I needed to intercept emails that arrived for Chick-Fil-A, read any invoices within the text of the email 
                                                or within an attached document, find the corresponding accountant for the restaurant the invoice was directed to,
                                                and forward the email to them. I did this using a combination of AWS services including Textract, DynamoDB,
                                                S3, Lambdas, and SES. </text>
                                        </div> */}
                                    </div>
                                </Card>
                            </div>
                            <div className="card5">
                                <Card>
                                    <div className='cardcontent'>
                                        <h1>Handwritten Paylinks</h1>
                                        <img src={godaddy} alt="GoDaddy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        {/* <div className='text5'>
                                            <a href='https://armin3moneyparce.pythonanywhere.com'>MoneyParce</a>
                                            <text> is a web app made to help users 
                                        track their finances! It includes functionality for inputting expenses and income, budget making, and
                                        generating financial reports. There's a secure login, admin setup, and password reset if you forget :) 
                                        This project was made for CS2340, Objects and Design, Spring 2025. Django (the REST framework, ORM, all that stuff), SQLite, 
                                        Python, CSS, and HTML. It's hosted on pythonanywhere. Check it out on my github </text>
                                        <a href='https://github.com/lilychisholm/MoneyParse'>here.</a>
                                    </div> */}
                                    </div>
                                </Card>
                            </div>
                            <div className="card6">
                                <Card>
                                    <div className='cardcontent'>
                                        <h1>MoneyParce</h1>
                                        <img src={MoneyParce} alt="MoneyParse" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        {/* <div className='text6'>
                                            <a href='https://armin3moneyparce.pythonanywhere.com'>MoneyParce</a>
                                            <text> is a web app made to help users 
                                        track their finances! It includes functionality for inputting expenses and income, budget making, and
                                        generating financial reports. There's a secure login, admin setup, and password reset if you forget :) 
                                        This project was made for CS2340, Objects and Design, Spring 2025. Django (the REST framework, ORM, all that stuff), SQLite, 
                                        Python, CSS, and HTML. It's hosted on pythonanywhere. Check it out on my github </text>
                                        <a href='https://github.com/lilychisholm/MoneyParse'>here.</a>
                                    </div> */}
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </BaseTemplate>
        </div>
    );
}

export default Code;