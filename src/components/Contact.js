import React from 'react';

const Contact = () => (
<div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mu-contact-area">

                                        <div className="mu-contact-header">
                                            <h2 className="mu-heading-title">CONTACT ME</h2>
                                            <span className="mu-header-dot"></span>
                                            <p>Feel free to contact me! I usually try to get back to emails and phone calls within one business day. </p>
                                        </div>

                                        {/* Start Contact Content */}
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
                                        {/* End Contact Content */}

                                    </div>
                                </div>
                            </div>
                        </div>
);
export default Contact;