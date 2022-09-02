import React from "react";
// import { ReactDOM } from "react";
import heroImg1 from "../images/Group 971.png";
import columnImg1 from "../images/global-connection.png";
import columnImg2 from "../images/sales.png";
import columnImg3 from "../images/email-marketing@2x.png";
import heroImg2 from "../images/Group 975.png";
import heroImg3 from "../images/Group 951.png";
import heroImg4 from "../images/Group 1187.png";
import heroImg5 from "../images/Mask Group 17.png";




function Main() {
    return (
            <main id="main">
                <section id="hero" className="d-flex align-items-center">

                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                <h1>Organise Your sales</h1>
                                <h1>Build Great Relationships</h1>
                                <h1>Save Time</h1>
                                <div>
                                    <a href="/#" className="btn-get-started scrollto">Get Started now</a>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 hero-img">
                                <img src={heroImg1} className="img-fluid animated" alt="" />
                            </div>
                        </div>
                        <div className="row justify-content-evenly ">
                            <div className="column"><img src={columnImg1} width="100%" /></div>
                            <div className="column"><img src={columnImg2} width="100%" /> </div>
                            <div className="column"><img src={columnImg3} width="100%" /></div>
                        </div>
                    </div>

                </section>

                <section id="hero" className="d-flex align-items-center">

                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                <h1>Business/Customer Management</h1>
                                <h1>Build Great Relationships</h1>
                                <h1>Save Time</h1>
                                <div>

                                    <a href="/#" className="btn-get-started scrollto">Get Started now</a>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 hero-img">
                                <img src={heroImg2} className="img-fluid animated" alt="" />
                            </div>
                        </div>
                    </div>

                </section>

                <section id="about" className="about">
                    <div className="container">

                        <div className="row justify-content-between">
                            <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                <img src={heroImg3} className="img-fluid" alt="" data-aos="zoom-in" />
                            </div>


                            <div className="col-lg-6 pt-5 pt-lg-0">

                                <h3 data-aos="fade-up">FREE EBOOK</h3>

                                <a href="/#" className="btn-get-started scrollto">Get it Now </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="hero" className="d-flex align-items-center">

                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                <h1>Organise Your sales</h1>
                                <h1>Build Great Relationships</h1>
                                <h1>Save Time</h1>

                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 hero-img">
                                <img src={heroImg4} className="img-fluid animated" alt=""
                                    style={{height: "450px", width: "400px"}} />
                            </div>
                        </div>
                    </div>

                </section>

                <section id="about" className="about">
                    <div className="container">

                        <div className="row justify-content-between">
                            <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">

                                <img src={heroImg5} className="img-fluid" alt="" data-aos="zoom-in" />
                            </div>


                            <div className="col-lg-6 pt-5 pt-lg-0">

                                <h3 data-aos="fade-up">FREE EBOOK</h3>
                                <h1>7 Reasons You need To Turn Your business to a mobile Business</h1>
                                <a href="/#" className="btn-get-started scrollto">Get it Now </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    );
}


export default Main;