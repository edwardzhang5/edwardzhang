import React, { Component } from 'react';
import MenuBar from "./layout/menubar";

class contact extends Component {
    render() {
        return (
            <div>
                <MenuBar />
                <div style={{ marginLeft: "80px", marginTop: "80px" }}>
                    <h1>Contact Me!</h1>
                </div>

            </div >

        );
    }
}
export default contact;