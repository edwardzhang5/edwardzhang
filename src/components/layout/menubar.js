import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './nav.css';

class MenuBar extends Component {
    render() {
        return (
            <div className="font-link">
            <nav class="navbar navbar-expand-md color-nav ">
                <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2" style={{ marginLeft: "1.5rem" }}>
                    <ul class="navbar-nav mr-auto ">
                        <li class="nav-item ">
                            <Link to="/aboutme" class="nav-link" >About Me</Link>
                        </li>
                        <li class="nav-item " style={{ marginLeft: "1rem" }}>
                            <Link to="/project" class="nav-link">Projects</Link>
                        </li>
                        <li class="nav-item " style={{ marginLeft: "1rem" }}>
                                <a class="nav-link" href="https://drive.google.com/file/d/1lRjJ4P4heFGx1HQ-uKHJwVp3HompxS16/view?usp=sharing" target="_blank">Resume</a>
                        </li>
                    </ul>
                </div>
                <div class="mx-auto order-0">
                    <a class="navbar-brand mx-auto" href="/">Edward Zhang</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="navbar-collapse collapse w-100 order-3 dual-collapse2" style={{ marginRight: "1.5rem" }}>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown" style={{ marginRight: "1rem" }} >
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Socials
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="https://www.linkedin.com/in/edwardzhang5/" target="_blank">LinkedIn</a>
                                <a class="dropdown-item" href="https://github.com/edwardzhang5" target="_blank">GitHub</a>
                                <a class="dropdown-item" href="https://www.facebook.com/edward.zhang.353250" target="_blank">Facebook</a>
                                <a class="dropdown-item" href="https://twitter.com/edward_zhang_" target="_blank">Twitter</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact" class="nav-link">Contact Me</Link>
                        </li>
                    </ul>
                </div>
                </nav>
                </div>

        );
    }
}
export default MenuBar;