import React from 'react';

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
                                        <li><a href="#mu-about">ABOUT US</a></li>
                                        <li><a href="#mu-service">SERVICES</a></li>
                                        <li><a href="#mu-portfolio">PORTFOLIO</a></li>
                                        <li><a href="#mu-testimonials">TESTIMONIALS</a></li>
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
                                        <div className="mu-featured-slider" id="typed-strings">
                                            <p>I am <span>UI/UX Designer</span></p>
                                            <p>I am <span>Web Developer</span></p>
                                            <p>I am <span>Photographer</span></p>
                                        </div>
                                        <span id="typed"></span>
                                    </div>
                                    {/*<!-- Start text slide -->*/}

                                    <div className="mu-featured-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ipsa necessitatibus voluptate. Dolores sed neque, accusantium iusto inventore harum quibusdam, aspernatur, ullam vero ea eos ipsam tenetur dolore qui voluptatibus!</p>
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
                                            <p>My name is Kevin Pitter. I am professional <strong>Web Designer</strong> and <strong>Web Developer</strong>. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
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
                                                            <span>Html5</span>
                                                            <div className="mu-pro-bar mu-html5-bar">

                                                            </div>
                                                            <span>css</span>
                                                            <div className="mu-pro-bar mu-css-bar">

                                                            </div>
                                                            <span>Photoshop</span>
                                                            <div className="mu-pro-bar mu-photoshop-bar">
                                                            </div>
                                                            <span>Wordpress</span>
                                                            <div className="mu-pro-bar mu-wordpress-bar">
                                                            </div>
                                                            <span>jQuery</span>
                                                            <div className="mu-pro-bar mu-jquery-bar">
                                                            </div>
                                                        </div>

                                                        {/*<!-- Start Social Media -->*/}
                                                        <div className="mu-social-media">
                                                            <h3>Social</h3>
                                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                                            <a href="#"><i className="fa fa-linkedin"></i></a>
                                                            <a href="#"><i className="fa fa-google-plus"></i></a>
                                                        </div>

                                                        {/* <!-- Download Ressume Button -->*/}
                                                        <a href="#" className="mu-resume-btn">Download My Resume</a>

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
                                            <h2 className="mu-heading-title">MY PORTFOLIO</h2>
                                            <span className="mu-header-dot"></span>
                                        </div>

                                        {/*<!-- Start Portfolio Filter -->*/}
                                        <div className="mu-portfolio-filter-area">
                                            <ul className="mu-simplefilter">
                                                <li className="active" data-filter="all">All</li>
                                                <li data-filter="1">Web App</li>
                                                <li data-filter="2">UI/UX</li>
                                                <li data-filter="3">Graphics Design</li>
                                                <li data-filter="4">Mobile App</li>
                                                <li data-filter="5">Branding</li>
                                                <li data-filter="6">Marketing</li>
                                            </ul>
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

                    {/*<!-- Start Testimonials -->*/}
                    <section id="mu-testimonials">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mu-testimonials-area">
                                        <div className="mu-testimonial-header">
                                            <h2 className="mu-heading-title">Client Testimonials</h2>
                                            <span className="mu-header-dot"></span>
                                        </div>

                                        <div className="mu-testimonials-block">
                                            <ul className="mu-testimonial-slide">

                                                <li>
                                                    <i className="fa fa-quote-right mu-quote-icon"></i>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                                    <h5 className="mu-ct-name"> - Jhon Doe</h5>
                                                    <span className="mu-ct-title">CEO, Apple Inc.</span>
                                                </li>

                                                <li>
                                                    <i className="fa fa-quote-right mu-quote-icon"></i>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                                    <h5 className="mu-ct-name"> - Alice Boga</h5>
                                                    <span className="mu-ct-title">Director, Google Inc.</span>
                                                </li>

                                                <li>
                                                    <i className="fa fa-quote-right mu-quote-icon"></i>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                                    <h5 className="mu-ct-name"> - Jhon Smith</h5>
                                                    <span className="mu-ct-title">Web Developer</span>
                                                </li>

                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*<!-- End Testimonials -->*/}


                    {/*<!-- Start Contact -->*/}
                    <section id="mu-contact">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mu-contact-area">

                                        <div className="mu-contact-header">
                                            <h2 className="mu-heading-title">CONTACT ME</h2>
                                            <span className="mu-header-dot"></span>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
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
                                                                    <p>Dooley Branch Rd Millen, GA 30442, USA</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <div className="mu-contact-top-single">
                                                                    <div className="mu-icon"><i className="fa fa-phone"></i></div>
                                                                    <p>+90 987 678 9834</p>
                                                                    <p>+90 567 098 785</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <div className="mu-contact-top-single">
                                                                    <div className="mu-icon"><i className="fa fa-envelope"></i></div>
                                                                    <p>contact@domain.com</p>
                                                                    <p>support@domain.com</p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="mu-contact-bottom">
                                                        <div id="form-messages"></div>
                                                        <form id="ajax-contact" method="post" action="mailer.php" className="mu-contact-form">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Name" id="name" name="name" required />
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="email" className="form-control" placeholder="Enter Email" id="email" name="email" required />
                                                            </div>
                                                            <div className="form-group">
                                                                <textarea className="form-control" placeholder="Message" id="message" name="message" required></textarea>
                                                            </div>
                                                            <button type="submit" className="mu-send-msg-btn"><span>SUBMIT</span></button>
                                                        </form>
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
                            <p className="mu-copy-right">&copy; Copyright <a rel="nofollow" href="http://markups.io">markups.io</a>. All right reserved.</p>
                        </div>
                    </div>

                </footer>
                {/*<!-- End footer -->*/}






            </div>
        )
    }
}

export default Home;