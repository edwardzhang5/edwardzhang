import React from 'react';
import Navbar from "../Navbar";


class Gatorloop extends React.Component{
    render(){
        return(
            <div className="container">
                    <Navbar/>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mu-portfolio-area">
                                        <div className="mu-portfolio-header">
                                            <h2 className="mu-heading-title">Gatorloop Inventory Managment System</h2>
                                            <h5 className="mu-heading-title">Product Owner, Full Stack Developer</h5>
                                            <span className="mu-header-dot"></span>
                                        </div>
                                        <div className="mu-portfolio-content">
                                            <div className="filtr-container">

                                                <div className="col-xs-12 col-sm-12 col-md-12 filtr-item" data-category="1">
                                                    <div className="mu-item-thumbonail">
                                                        <img className="img-responsive" src="assets/images/portfolio/GG1.gif" alt="image" />
                                                    </div>
                                                    
                                                </div>
                                                <div className="col-xs-12 col-sm-12 col-md-12 filtr-item" data-category="1">
                                                    <div className="mu-item-thumbonail">
                                                        <img className="img-responsive" src="assets/images/portfolio/GG2.gif" alt="image" />
                                                    </div>
                                                    
                                                </div>
                                                <div className="col-xs-12 col-sm-12 col-md-12 filtr-item" data-category="1">
                                                    <div className="mu-item-thumbonail">
                                                        <img className="img-responsive" src="assets/images/portfolio/GG3.gif" alt="image" />
                                                    </div>
                                                    
                                                </div>                                               

                                            </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

        )
    }
}
export default Gatorloop;