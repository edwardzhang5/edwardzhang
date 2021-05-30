import React, { Component } from 'react';
import MenuBar from "./layout/menubar";

class project extends Component {
    render() {
        return (
            <div>
                <MenuBar />
                <div style={{ marginLeft: "80px", marginTop: "80px" }}>
                    <h1>Projects</h1>
                </div>

            </div >

        );
    }
}
export default project;