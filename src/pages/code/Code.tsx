import React from 'react';
import BaseTemplate from '../../components/BaseTemplate/BaseTemplate.tsx';
import './Code.css';
import Card from './Card.tsx';
import MoneyParce from '../../images/moneyparse.png'
import InternalNote from '../../images/internalnote.png'
import chickfila from '../../images/chickfila.png'

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
                    <div className="cards">
                        <div className="card1">
                            <Card>
                                <div className='cardcontent'>
                                    <h1>ScamBuster</h1>
                                    <img src={MoneyParce} alt="MoneyParse" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div className='text1'>
                                        <a href='https://armin3moneyparce.pythonanywhere.com'>MoneyParce</a>
                                        <text> is a web app made to help users 
                                        track their finances! It includes functionality for inputting expenses and income, budget making, and
                                        generating financial reports. There's a secure login, admin setup, and password reset if you forget :) 
                                        This project was made for CS2340, Objects and Design, Spring 2025. Django (the REST framework, ORM, all that stuff), SQLite, 
                                        Python, CSS, and HTML. It's hosted on pythonanywhere. Check it out on my github </text>
                                        <a href='https://github.com/lilychisholm/MoneyParse'>here.</a>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="card2">
                            <Card>
                                <div className='cardcontent'>
                                    <h1>Internal Notes</h1>
                                    <img src={InternalNote} alt="MoneyParse" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div className='text2'>
                                        <text> If you're a user of the GoDaddy Conversations platform, you might've noticed a feature that's shown up 
                                            recently; internal notes! I was actually one of two engineers who made that feature, allowing users to add a 
                                            note to their conversations. Used AWS, React.js, and some internal APIs. I've done a lot of other work at GoDaddy too 
                                            though, ranging from user experiments, Figma designs, to AWS, data, and more!</text>
                                    </div> 
                                </div>
                            </Card>
                        </div>
                        <div className="card3">
                            <Card>
                                <div className='cardcontent'>
                                    <h1>This Website!</h1>
                                    <img src={MoneyParce} alt="MoneyParse" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div className='text3'>
                                        <a href='https://armin3moneyparce.pythonanywhere.com'>MoneyParce</a>
                                        <text> is a web app made to help users 
                                        track their finances! It includes functionality for inputting expenses and income, budget making, and
                                        generating financial reports. There's a secure login, admin setup, and password reset if you forget :) 
                                        This project was made for CS2340, Objects and Design, Spring 2025. Django (the REST framework, ORM, all that stuff), SQLite, 
                                        Python, CSS, and HTML. It's hosted on pythonanywhere. Check it out on my github </text>
                                        <a href='https://github.com/lilychisholm/MoneyParse'>here.</a>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="card4">
                            <Card>
                                <div className='cardcontent'>
                                    <h1>Email Automation</h1>
                                    <img src={chickfila} alt="chickfila" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div className='text4'>
                                        <text> During my time co-oping at Chick-Fil-A, one of the projects I was given was an email automation. 
                                            I needed to intercept emails that arrived for Chick-Fil-A, read any invoices within the text of the email 
                                            or within an attached document, find the corresponding accountant for the restaurant the invoice was directed to,
                                            and forward the email to them.  </text>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="card5">
                            <Card>
                                <div className='cardcontent'>
                                    <h1>Handwritten Paylinks</h1>
                                    <img src={MoneyParce} alt="MoneyParse" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div className='text5'>
                                        <a href='https://armin3moneyparce.pythonanywhere.com'>MoneyParce</a>
                                        <text> is a web app made to help users 
                                        track their finances! It includes functionality for inputting expenses and income, budget making, and
                                        generating financial reports. There's a secure login, admin setup, and password reset if you forget :) 
                                        This project was made for CS2340, Objects and Design, Spring 2025. Django (the REST framework, ORM, all that stuff), SQLite, 
                                        Python, CSS, and HTML. It's hosted on pythonanywhere. Check it out on my github </text>
                                        <a href='https://github.com/lilychisholm/MoneyParse'>here.</a>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="card6">
                            <Card>
                                <div className='cardcontent'>
                                    <h1>MoneyParce</h1>
                                    <img src={MoneyParce} alt="MoneyParse" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div className='text6'>
                                        <a href='https://armin3moneyparce.pythonanywhere.com'>MoneyParce</a>
                                        <text> is a web app made to help users 
                                        track their finances! It includes functionality for inputting expenses and income, budget making, and
                                        generating financial reports. There's a secure login, admin setup, and password reset if you forget :) 
                                        This project was made for CS2340, Objects and Design, Spring 2025. Django (the REST framework, ORM, all that stuff), SQLite, 
                                        Python, CSS, and HTML. It's hosted on pythonanywhere. Check it out on my github </text>
                                        <a href='https://github.com/lilychisholm/MoneyParse'>here.</a>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </BaseTemplate>
        </div>
    );
}

export default Code;