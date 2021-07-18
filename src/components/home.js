import React from 'react';
import TypedReact from './assets/TypedReact';

class Home extends React.Component {

    render() {
        return (
            <div>
                {/*<!-- Start Header -->*/}
                <header id="mu-header" className="" role="banner">
                    <div className="container">
                        <nav className="navbar navbar-default mu-navbar">
                            <div className="container-fluid">
                                {/* <!-- Brand and toggle get grouped for better mobile display -->*/}
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>

                                    {/*<!-- Text Logo -->*/}
                                    <a className="navbar-brand" href="#">Edward</a>

                                    {/*<!-- Image Logo -->*/}
                                    {/*<!-- <a className="navbar-brand" href="#"><img src="assets/images/logo.png"></a> -->*/}


                                </div>

                                {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav mu-menu navbar-right">
                                        <li><a href="#">HOME</a></li>
                                        <li><a href="#mu-about">ABOUT ME</a></li>
                                        <li><a href="#mu-service">SERVICES</a></li>
                                        <li><a href="#mu-portfolio">PROJECTS</a></li>
                                        <li><a href="#mu-contact">CONTACT</a></li>
                                    </ul>
                                </div>{/*<!-- /.navbar-collapse -->*/}
                            </div>{/*<!-- /.container-fluid -->*/}
                        </nav>
                    </div>
                </header>
                {/*<!-- End Header -->*/}

                {/*<!-- Start Featured Slider -->*/}

                <section id="mu-featured-slider">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mu-featured-area">
                                    <h1>Edward Zhang</h1>

                                    {/*<!-- Start text slide -->*/}
                                    <div className="mu-featured-slider-wrapper">
                                        <div className="mu-featured-slider">
                                            <TypedReact strings={['I am a <b>Creator</b>', 'I am a <b>Problem-Solver</b>', 'I am an <b>Visionary</b>', 'I am an <b>Adventurer</b>']}/>
                                        </div>
                                    </div>


                                    <div className="mu-featured-content">
                                        <a href="#mu-portfolio" className="mu-primary-btn view-my-work-btn">VIEW MY WORK</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*<!-- Start Featured Slider -->*/}
                
                {/*<!-- Start main content -->*/}

                <main role="main">

                    {/* <!-- Start About -->*/}
                    <section id="mu-about">
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

                                        {/*<!-- Start About Us Content -->*/}
                                        <div className="mu-about-content">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mu-about-content-left">
                                                        <img className="mu-profile-img" src="assets/images/profile.jpg" alt="Profile Image" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mu-about-content-right">

                                                        {/*<!-- Start skills progress bar -->*/}

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

                                                        {/*<!-- Start Social Media -->*/}
                                                        <div className="mu-social-media">
                                                            <h3>Social</h3>
                                                            <a href="https://github.com/edwardzhang5"><i className="fa fa-github"></i></a>
                                                            <a href="https://twitter.com/edward_zhang_"><i className="fa fa-twitter"></i></a>
                                                            <a href="https://www.linkedin.com/in/edwardzhang5/"><i className="fa fa-linkedin"></i></a>
                                                        </div>

                                                        {/* <!-- Download Ressume Button -->*/}
                                                        <a href="assets/EdwardZhangResume.pdf" className="mu-resume-btn">Download My Resume</a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End About Us Content -->*/}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*<!-- End About -->*/}

                    {/*<!-- Start Service -->*/}
                    <section id="mu-service">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mu-service-area">

                                        <div className="mu-service-header">
                                            <h2 className="mu-heading-title">MY SERVICES</h2>
                                            <span className="mu-header-dot"></span>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                                        </div>

                                        {/*<!-- Start Service Content -->*/}
                                        <div className="mu-service-content">
                                            <div className="row">

                                                {/*<!-- Service Single Content -->*/}
                                                <div className="col-md-4 col-sm-6">
                                                    <div className="mu-service-content-single">
                                                        <span className="mu-service-icon-box">
                                                            <i className="fa fa-leaf"></i>
                                                        </span>
                                                        <h4>UI/UX Design</h4>
                                                        <p>Lorem ipsum dolor sit amet, consect adipis elit minim veniam ettis inkeras.</p>
                                                    </div>
                                                </div>
                                                {/*<!-- / Service Single Content -->*/}

                                                {/*<!-- Service Single Content -->*/}
                                                <div className="col-md-4 col-sm-6">
                                                    <div className="mu-service-content-single">
                                                        <span className="mu-service-icon-box">
                                                            <i className="fa fa-desktop"></i>
                                                        </span>
                                                        <h4>Web Development</h4>
                                                        <p>Lorem ipsum dolor sit amet, consect adipis elit minim veniam ettis inkeras.</p>
                                                    </div>
                                                </div>
                                                {/*<!-- / Service Single Content -->*/}

                                                {/*<!-- Service Single Content -->*/}
                                                <div className="col-md-4 col-sm-6">
                                                    <div className="mu-service-content-single">
                                                        <span className="mu-service-icon-box">
                                                            <i className="fa fa-briefcase"></i>
                                                        </span>
                                                        <h4>Branding</h4>
                                                        <p>Lorem ipsum dolor sit amet, consect adipis elit minim veniam ettis inkeras.</p>
                                                    </div>
                                                </div>
                                                {/* <!-- / Service Single Content -->*/}

                                                {/*<!-- Service Single Content -->*/}
                                                <div className="col-md-4 col-sm-6">
                                                    <div className="mu-service-content-single">
                                                        <span className="mu-service-icon-box">
                                                            <i className="fa fa-camera"></i>
                                                        </span>
                                                        <h4>Photography</h4>
                                                        <p>Lorem ipsum dolor sit amet, consect adipis elit minim veniam ettis inkeras.</p>
                                                    </div>
                                                </div>
                                                {/*<!-- / Service Single Content -->*/}

                                                {/*<!-- Service Single Content -->*/}
                                                <div className="col-md-4 col-sm-6">
                                                    <div className="mu-service-content-single">
                                                        <span className="mu-service-icon-box">
                                                            <i className="fa fa-android"></i>
                                                        </span>
                                                        <h4>Apps Development</h4>
                                                        <p>Lorem ipsum dolor sit amet, consect adipis elit minim veniam ettis inkeras.</p>
                                                    </div>
                                                </div>
                                                {/*<!-- / Service Single Content -->*/}

                                                {/*<!-- Service Single Content -->*/}
                                                <div className="col-md-4 col-sm-6">
                                                    <div className="mu-service-content-single">
                                                        <span className="mu-service-icon-box">
                                                            <i className="fa fa-line-chart"></i>
                                                        </span>
                                                        <h4>Digital Marketing</h4>
                                                        <p>Lorem ipsum dolor sit amet, consect adipis elit minim veniam ettis inkeras.</p>
                                                    </div>
                                                </div>
                                                {/*<!-- / Service Single Content -->*/}

                                            </div>
                                        </div>
                                        {/* <!-- End Service Content -->*/}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- End Service -->*/}

                    {/*<!-- Start Portfolio -->*/}
                    <section id="mu-portfolio">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mu-portfolio-area">

                                        <div className="mu-portfolio-header">
                                            <h2 className="mu-heading-title">MY PROJECTS</h2>
                                            <span className="mu-header-dot"></span>
                                        </div>



                                        {/* <!-- Start Portfolio Content -->*/}
                                        <div className="mu-portfolio-content">
                                            <div className="filtr-container">

                                                <div className="col-xs-6 col-sm-4 col-md-4 filtr-item" data-category="1">
                                                    <div className="mu-item-thumbonail">
                                                        <img className="img-responsive" src="assets/images/portfolio/img-1.jpeg" alt="image" />
                                                    </div>
                                                    <div className="mu-filter-item-content">
                                                        <h4 className="mu-filter-item-title">WEB DEVELOPMENT</h4>
                                                        <a className="mu-filter-link" href="#"><i className="fa fa-link"></i></a>
                                                        <a className="mu-filter-imglink" href="assets/images/portfolio/img-1.jpeg" title="Web Development"><i className="fa fa-search"></i></a>
                                                    </div>
                                                </div>

                                                <div className="col-xs-6 col-sm-4 col-md-4 filtr-item" data-category="2">
                                                    <div className="mu-item-thumbonail">
                                                        <img className="img-responsive" src="assets/images/portfolio/img-2.jpeg" alt="image" />
                                                    </div>
                                                    <div className="mu-filter-item-content">
                                                        <h4 className="mu-filter-item-title">UI/UX DESIGN</h4>
                                                        <a className="mu-filter-link" href="#"><i className="fa fa-link"></i></a>
                                                        <a className="mu-filter-imglink" href="assets/images/portfolio/img-2.jpeg" title="UI/UX DESIGN"><i className="fa fa-search"></i></a>
                                                    </div>
                                                </div>

                                                <div className="col-xs-6 col-sm-4 col-md-4 filtr-item" data-category="3">
                                                    <div className="mu-item-thumbonail">
                                                        <img className="img-responsive" src="assets/images/portfolio/img-3.jpeg" alt="image" />
                                                    </div>
                                                    <div className="mu-filter-item-content">
                                                        <h4 className="mu-filter-item-title">GRAPHICS DESIGN</h4>
                                                        <a className="mu-filter-link" href="#"><i className="fa fa-link"></i></a>
                                                        <a className="mu-filter-imglink" href="assets/images/portfolio/img-3.jpeg" title="GRAPHICS DESIGN"><i className="fa fa-search"></i></a>
                                                    </div>
                                                </div>

                                                <div className="col-xs-6 col-sm-4 col-md-4 filtr-item" data-category="4">
                                                    <div className="mu-item-thumbonail">
                                                        <img className="img-responsive" src="assets/images/portfolio/img-4.jpeg" alt="image" />
                                                    </div>
                                                    <div className="mu-filter-item-content">
                                                        <h4 className="mu-filter-item-title">MOBILE APP</h4>
                                                        <a className="mu-filter-link" href="#"><i className="fa fa-link"></i></a>
                                                        <a className="mu-filter-imglink" href="assets/images/portfolio/img-4.jpeg" title="MOBILE APP"><i className="fa fa-search"></i></a>
                                                    </div>
                                                </div>

                                                <div className="col-xs-6 col-sm-4 col-md-4 filtr-item" data-category="5">
                                                    <div className="mu-item-thumbonail">
                                                        <img className="img-responsive" src="assets/images/portfolio/img-5.jpeg" alt="image" />
                                                    </div>
                                                    <div className="mu-filter-item-content">
                                                        <h4 className="mu-filter-item-title">BRANDING</h4>
                                                        <a className="mu-filter-link" href="#"><i className="fa fa-link"></i></a>
                                                        <a className="mu-filter-imglink" href="assets/images/portfolio/img-5.jpeg" title="BRANDING"><i className="fa fa-search"></i></a>
                                                    </div>
                                                </div>

                                                <div className="col-xs-6 col-sm-4 col-md-4 filtr-item" data-category="6">
                                                    <div className="mu-item-thumbonail">
                                                        <img className="img-responsive" src="assets/images/portfolio/img-6.jpeg" alt="image" />
                                                    </div>
                                                    <div className="mu-filter-item-content">
                                                        <h4 className="mu-filter-item-title">MARKETING</h4>
                                                        <a className="mu-filter-link" href="#"><i className="fa fa-link"></i></a>
                                                        <a className="mu-filter-imglink" href="assets/images/portfolio/img-6.jpeg" title="MARKETING"><i className="fa fa-search"></i></a>
                                                    </div>
                                                </div>

                                                <div className="col-xs-6 col-sm-4 col-md-4 filtr-item" data-category="1">
                                                    <div className="mu-item-thumbonail">
                                                        <img className="img-responsive" src="assets/images/portfolio/img-7.jpg" alt="image" />
                                                    </div>
                                                    <div className="mu-filter-item-content">
                                                        <h4 className="mu-filter-item-title">WEB DEVELOPMENT</h4>
                                                        <a className="mu-filter-link" href="#"><i className="fa fa-link"></i></a>
                                                        <a className="mu-filter-imglink" href="assets/images/portfolio/img-7.jpg" title="WEB DEVELOPMENT"><i className="fa fa-search"></i></a>
                                                    </div>
                                                </div>

                                                <div className="col-xs-6 col-sm-4 col-md-4 filtr-item" data-category="4">
                                                    <div className="mu-item-thumbonail">
                                                        <img className="img-responsive" src="assets/images/portfolio/img-8.jpeg" alt="image" />
                                                    </div>
                                                    <div className="mu-filter-item-content">
                                                        <h4 className="mu-filter-item-title">MOBILE APP</h4>
                                                        <a className="mu-filter-link" href="#"><i className="fa fa-link"></i></a>
                                                        <a className="mu-filter-imglink" href="assets/images/portfolio/img-8.jpeg" title="MOBILE APP"><i className="fa fa-search"></i></a>
                                                    </div>
                                                </div>

                                                <div className="col-xs-6 col-sm-4 col-md-4 filtr-item" data-category="3">
                                                    <div className="mu-item-thumbonail">
                                                        <img className="img-responsive" src="assets/images/portfolio/img-9.jpeg" alt="image" />
                                                    </div>
                                                    <div className="mu-filter-item-content">
                                                        <h4 className="mu-filter-item-title">GRAPHICS DESIGN</h4>
                                                        <a className="mu-filter-link" href="#"><i className="fa fa-link"></i></a>
                                                        <a className="mu-filter-imglink" href="assets/images/portfolio/img-9.jpeg" title="GRAPHICS DESIGN"><i className="fa fa-search"></i></a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        {/* <!-- End Portfolio Content -->*/}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*<!-- End Portfolio -->*/}




                    {/*<!-- Start Contact -->*/}
                    <section id="mu-contact">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mu-contact-area">

                                        <div className="mu-contact-header">
                                            <h2 className="mu-heading-title">CONTACT ME</h2>
                                            <span className="mu-header-dot"></span>
                                            <p>Feel free to contact me! I usually try to get back to emails and phone calls within one business day. </p>
                                        </div>

                                        {/*<!-- Start Contact Content -->*/}
                                        <div className="mu-contact-content">
                                            <div className="row">

                                                <div className="col-md-12">
                                                    <div className="mu-contact-top">

                                                        <div className="row">
                                                            <div className="col-sm-4">
                                                                <div className="mu-contact-top-single">
                                                                    <div className="mu-icon"><i className="fa fa-map-marker"></i></div>
                                                                    <p>Gainesville, Florida, USA</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <div className="mu-contact-top-single">
                                                                    <div className="mu-icon"><i className="fa fa-phone"></i></div>
                                                                    <p>+1 561 202 7436</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <div className="mu-contact-top-single">
                                                                    <div className="mu-icon"><i className="fa fa-envelope"></i></div>
                                                                    <p>edwardzhang5@gmail.com</p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                        {/*<!-- End Contact Content -->*/}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*<!-- End Contact -->*/}

                </main>

                {/*<!-- End main content -->*/}


                {/*<!-- Start footer -->*/}
                <footer id="mu-footer" role="contentinfo">
                    <div className="container">
                        <div className="mu-footer-area">
                            <p className="mu-copy-right">&copy; Copyright markups.io. All right reserved.</p>
                        </div>
                    </div>

                </footer>
                {/*<!-- End footer -->*/}






            </div>
        )
    }
}

export default Home;