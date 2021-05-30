import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import MenuBar from "./layout/menubar";

class homepage extends Component {
    render() {
        return (
            <div>
            <MenuBar/>
            <div style={{ marginLeft: "80px", marginTop: "80px" } }>
                <h1>Welcome to Edward's webpage</h1>
                    <Link to= "/aboutme">
                        <button
                            style={{ }}
                            type="button" 
                            class="btn btn-danger btn-lg">Dab</button>
                    </Link>
                </div>

             </div>
            
            );
    }
}
export default homepage;