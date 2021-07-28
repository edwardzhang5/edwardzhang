import React from 'react';


const Navbar = () => (
    <nav className="navbar navbar-default mu-navbar">
        <div className="container-fluid">
            {/*  Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>

                {/* Text Logo */}
                <a className="navbar-brand" href="#">Edward</a>

                {/* Image Logo */}
                {/* <a className="navbar-brand" href="#"><img src="assets/images/logo.png"></a> */}


            </div>

            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav mu-menu navbar-right">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#mu-about">ABOUT ME</a></li>
                    <li><a href="#mu-portfolio">PROJECTS</a></li>
                    <li><a href="#mu-contact">CONTACT</a></li>
                </ul>
            </div>{/* /.navbar-collapse */}
        </div>{/* /.container-fluid */}
    </nav>
);
export default Navbar;

