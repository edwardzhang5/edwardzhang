import React from 'react';
import Navbar_Project from "../Navbar_Project";


class Gatorloop extends React.Component{
    render(){
        return(
            <div className="container">
                    <Navbar_Project/>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mu-project-area">
                                        <div className="mu-portfolio-header">
                                            <h1 className="mu-heading-title">Gatorloop Inventory Managment System</h1>
                                            <h5 className="mu-heading-title">Product Owner, Full Stack Developer</h5>
                                            <p className="mu-about-project">For this project, I was the technical product owner managing a five-person agile team. Our goal was to build and deploy an inventory managment system web app utilizing the MERN tech stack for our client, Gatorloop.
                                            Features we implemented included a MongoDB backend and login functionality, along with full deployment on Heroku. I directed scrum meetings, controlled project scope, and worked closely with the client to develop a clear product vision.
                                            I also kept in constant communication with my team to prevent scope creep and ensure that we aligned with our client's vision. 
                                            <strong> I am pleased to show the results of that project below.</strong>
                                            </p>
                                            <span className="mu-header-dot"></span>
                                        </div>
                                        <div className="mu-portfolio-content">
                                            <div className="filtr-container">
                                                <h4 className="mu-heading-project">Login and Register Pages</h4>
                                                <div className="col-xs-12 col-sm-12 col-md-12 filtr-item" data-category="1">
                                                    <div className="mu-item-thumbonail">
                                                        <img className="img-responsive" src="assets/images/portfolio/GG1.gif" alt="image" />
                                                    </div>
                                                    
                                                </div>
                                                <h4 className="mu-heading-project">Dashboard and Inventory Pages</h4>
                                                <div className="col-xs-12 col-sm-12 col-md-12 filtr-item" data-category="1">
                                                    <div className="mu-item-thumbonail">
                                                        <img className="img-responsive" src="assets/images/portfolio/GG2.gif" alt="image" />
                                                    </div>
                                                    
                                                </div>
                                                <h4 className="mu-heading-project">Purchase Order Form and Dashboard</h4>
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