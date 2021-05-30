import React, { Component } from "react";

class MenuBar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" style={{ marginLeft: ".5rem" }} href="/">Edward Zhang</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item" style={{ marginLeft: "1rem" }}>
                            <a class="nav-link" href="/aboutme">About Me</a>
                        </li>
                        <li class="nav-item" style={{ marginLeft: "1rem" }}>
                            <a class="nav-link" href="/project">Projects</a>
                        </li>

                        <li class="nav-item" style={{ marginLeft: "1rem" }}>
                            <a class="nav-link" href="https://drive.google.com/file/d/1OeMbBoJL4LWet48ZJ39bcWi3gdo56PtF/view?usp=sharing">Resume</a>
                        </li>
                        
                        <li class="nav-item dropdown" style={{ marginLeft: "1rem" }}>
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Socials
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="https://www.linkedin.com/in/edwardzhang5/">LinkedIn</a>
                                <a class="dropdown-item" href="https://github.com/edwardzhang5">GitHub</a>
                                <a class="dropdown-item" href="https://www.facebook.com/edward.zhang.353250">Facebook</a>
                                <a class="dropdown-item" href="https://twitter.com/edward_zhang_">Twitter</a>
                            </div>
                        </li>
                        <li class="nav-item" style={{ marginLeft: "1rem" }}>
                            <a class="nav-link" href="/contact">Contact Me</a>
                        </li>

                    </ul>
                </div>
               

            </nav>

        );
    }
}
export default MenuBar;