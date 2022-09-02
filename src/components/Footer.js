import React from "react";
import logo from "../images/logo.png"

function Footer() {
    return (
        <footer id="footer">
            <div className="container-e">
                <div className="footer-top">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <img src={logo} alt="image"/>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Our offers</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Pricing</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">FAQs</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Contacts</h4>
                            <div className="social-links mt-3">
                                <a href="#" className="twitter"><box-icon type="logo"  color="white" name="twitter"></box-icon></a>
                                <a href="#" className="facebook"><box-icon type="logo"  color="white" name="facebook"></box-icon></a>
                                <a href="#" className="instagram"><box-icon type="logo"  color="white" name="instagram"></box-icon></a>
                                <a href="#" className="twitter"><box-icon color="white" name='current-location'></box-icon></a>
                                <a href="#" className="linkedin"><box-icon type='logo' color='white' name='linkedin'></box-icon></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container py-2">
                <div className="copyright">
                    &copy; <span>Made with </span> byAfrican Founders
                </div>
            </div>
        </footer>
    );
}


export default Footer;