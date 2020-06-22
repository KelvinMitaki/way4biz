import React from "react";


import "./Footer.css";


class Footer extends React.Component {
    render(){
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">   
                        <div className="col-md-4">
                            <h4>About Us</h4>
                            <div className="site-footer-info">
                                <p>About</p>
                                <p>Sitemap</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h4>Customer Service</h4>
                            <div className="site-footer-info">
                                <p>Contact Us</p>
                                <p>Help Center</p>
                                <p>Report Abuse</p>
                                {/* <p></p> */}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h4>Buy From Us</h4>
                            <div className="site-footer-info">
                                <p>Categories</p>
                                <p></p>
                                <p></p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="col copyright">
                        <p>&copy;2020. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default Footer