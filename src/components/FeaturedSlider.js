import React from 'react';
import TypedReact from './assets/TypedReact';

const FeaturedSlider = () => (
    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mu-featured-area">
                                    <h1>Edward Zhang</h1>

                                    {/* Start text slide */}
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

);
export default FeaturedSlider;