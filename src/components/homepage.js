import React, { Component } from 'react';
import MenuBar from "./layout/menubar";

class homepage extends Component {
    render() {
        return (
            <div>
            <MenuBar/>
                <div className="font-link" style={{
                    marginLeft: "5%", marginTop: "7%", color: "#F6E8EA", } }>
                    <h1>I'm <b>Edward Zhang</b>,<br /> a Computer Engineering and Finance <br /> student at the <a style={{textDecoration:"none"}} href="https://www.ufl.edu/">University of Florida</a>.
                    </h1>
                </div>
                <div style={{
                    color: "#F6E8EA", fontSize: 450, marginLeft: "62%", lineHeight: 0.6
                }}>
                    <p><b>HI</b></p>
                </div>


             </div>
            
            );
    }
}
export default homepage;