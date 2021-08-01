import React from 'react';

const About = () => (
        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mu-about-area">

                                        <div className="mu-about-header">
                                            <h2 className="mu-heading-title">ABOUT ME</h2>
                                            <span className="mu-header-dot"></span>
                                            <p>My name is Edward Zhang. I am a student at the <strong>University of Florida</strong> studying <strong>Computer Engineering</strong> and <strong>Finance</strong>. I am passionate about technology and machine learning and am extremely excited to leverage new ideas to advance our financial capabilities.</p>
                                            <p>I'm a highly analytical and data-driven problem-solver who likes to find unconventional solutions using a bigger picture understanding.
                                            I love learning and believe in continuous improvement in everything I do. I think that there's always a way to do something better - and my life's goal is to find out how.
                                                </p>
                                        </div>

                                        {/* Start About Us Content */}
                                        <div className="mu-about-content">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mu-about-content-left">
                                                        <img className="mu-profile-img" src="assets/images/profile.jpg" alt="Profile Image" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mu-about-content-right">

                                                        {/* Start skills progress bar */}

                                                        <div className="mu-skill-progress-bar">
                                                            <h3>Skills</h3>
                                                            <span>C++</span>
                                                            <div className="mu-pro-bar mu-c++-bar">

                                                            </div>
                                                            <span>Python</span>
                                                            <div className="mu-pro-bar mu-python-bar">

                                                            </div>
                                                            <span>Java</span>
                                                            <div className="mu-pro-bar mu-java-bar">
                                                            </div>
                                                            <span>React</span>
                                                            <div className="mu-pro-bar mu-react-bar">
                                                            </div>
                                                            <span>Node.JS</span>
                                                            <div className="mu-pro-bar mu-node-bar">
                                                            </div>
                                                            <span>Machine Learning</span>
                                                            <div className="mu-pro-bar mu-ml-bar">
                                                            </div>
                                                        </div>

                                                        {/* Start Social Media */}
                                                        <div className="mu-social-media">
                                                            <h3>Social</h3>
                                                            <a href="https://github.com/edwardzhang5" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                                                            <a href="https://www.linkedin.com/in/edwardzhang5/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                                                            <a href="https://twitter.com/edward_zhang_" target="_blank" rel="noopener noreferrer" ><i className="fa fa-twitter"></i></a>
                                                        </div>

                                                        {/*  Download Ressume Button */}
                                                        <a href="assets/EdwardZhangResume.pdf" className="mu-resume-btn">Download My Resume</a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*  End About Us Content */}

                                    </div>
                                </div>
                            </div>
                        </div>

);
export default About;