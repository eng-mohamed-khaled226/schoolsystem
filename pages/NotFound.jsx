import React from 'react'
import Nav from '../src/component/Nav'
import { NavLink } from "react-router-dom";

function NotFound() {
    return (
        <>
            <div className="main-container" id="container">


                <div id="content">
                    <div className="middle-content container-xxl p-0">
                        <div style={{ width: "100%", marginTop: "1rem", position: "relative" }}>
                            <Nav />


                            <div className="col-md-12 text-center" style={{ marginTop: "3rem" }}>
                                <h1>404</h1>
                                <h2>Page Not Found</h2>
                                <p>
                                    Sorry, the page you are looking
                                    for does not exist.
                                </p>
                                <button style={{ border: "none" }}>
                                    <NavLink to="/" className="btn btn-primary">Back to Home</NavLink>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default NotFound