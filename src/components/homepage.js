import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import menubar from "./layout/menubar";

class homepage extends Component {
    render() {
        return (
            <div>
            <menubar/>
            <div style={{ marginLeft: "80px", marginTop: "80px" } }>
                <h1>Welcome to Edward's webpage</h1>
                    <Link to= "/aboutme">
                        <button
                            style={{ width: "400px", height:"300px" }}
                            type="button" 
                            class="btn btn-danger">Dab</button>
                    </Link>
                </div>

             </div>
            
            );
    }
}
export default homepage;