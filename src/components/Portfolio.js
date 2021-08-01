import React from 'react';
import {Link} from 'react-router-dom';

const Portfolio = () => (
                    <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mu-portfolio-area">

                                        <div className="mu-portfolio-header">
                                            <h2 className="mu-heading-title">MY PROJECTS</h2>
                                            <span className="mu-header-dot"></span>
                                        </div>



                                        {/*  Start Portfolio Content */}
                                        <div className="mu-portfolio-content">
                                            <div className="filtr-container">

                                                <div className="col-xs-12 col-sm-12 col-md-12 filtr-item" data-category="1">
                                                    <div className="mu-item-thumbonail">
                                                        <img className="img-responsive" src="assets/images/portfolio/GG1.gif" alt="image" />
                                                    </div>
                                                    <div className="mu-filter-item-content">
                                                        <h3 className="mu-filter-item-title">Gatorloop Inventory Management System</h3>
                                                        <Link to="/gatorloopims" class="mu-filter-link"><i className="fa fa-link"></i></Link>
                                                        <a className="mu-filter-imglink" href="assets/images/portfolio/GG1.gif" title="GG"><i className="fa fa-search"></i></a>
                                                        
                                                    </div>
                                                </div>

                                                <div className="col-xs-12 col-sm-4 col-md-8 filtr-item" data-category="2">
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


                                            </div>
                                        </div>
                                        {/*  End Portfolio Content */}

                                    </div>
                                </div>
                            </div>
                        </div>

);
export default Portfolio;

