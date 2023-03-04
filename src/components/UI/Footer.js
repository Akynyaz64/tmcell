import React from "react";

import footer_bg from "../../assets/img/footer-bg.png"

const Footer = () => {
    return (
        <>
            <footer className="footer cover-bg" style={{"backgroundImage":`url(${footer_bg})`}}>
                <div className="footer-top pt-90 pb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-4">
                                <div className="widget widget_nav_menu">
                                    <h3 className="widget-title">Nyrhnamalar</h3>
                                    <ul>
                                        <li>
                                            <a href="index.html#">Internet 50</a>
                                        </li>
                                        <li>
                                            <a href="index.html#">Sowgat 1000+</a>
                                        </li>
                                        <li>
                                            <a href="index.html#">Çäksiz gepleşik+</a>
                                        </li>
                                        <li>
                                            <a href="index.html#">Sowgat 2000</a>
                                        </li>
                                        <li>
                                            <a href="index.html#">Sowgat 500</a>
                                        </li>
                                        <li>
                                            <a href="index.html#">Gürleşiber</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                <div className="widget widget_nav_menu">
                                    <h3 className="widget-title">Hyzmatlar</h3>
                                    <ul>
                                        <li>
                                            <a href="index.html#">Rouming</a>
                                        </li>
                                        <li>
                                            <a href="index.html#">TMCell töleg</a>
                                        </li>
                                        <li>
                                            <a href="index.html#">TMCell saz</a>
                                        </li>
                                        <li>
                                            <a href="index.html#">Mobile TV</a>
                                        </li>
                                        <li>
                                            <a href="index.html#">RBT hyzmaty</a>
                                        </li>
                                        <li>
                                            <a href="index.html#">Ynamly töleg</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                <div className="widget widget_contact_info">
                                    <h3 className="widget-title">Salgylarymyz</h3>
                                    <ul>
                                        <li className="media">
                                            <span className="widget-icon">
                                                <img src="assets/img/theme/icon/map-marker.svg" className="svg" alt="" />
                                            </span>
                                            <div className="media-body">217 Oguzhan köçesi, Aşgabat şäheri, 744000</div>
                                        </li>
                                        <li className="media">
                                            <span className="widget-icon">
                                                <img src="assets/img/theme/icon/phone.svg" className="svg" alt="" />
                                            </span>
                                            <div className="media-body">
                                                <a href="tel:088">088</a>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <span className="widget-icon">
                                                <img src="assets/img/theme/icon/mail.svg" className="svg" alt="" />
                                            </span>
                                            <div className="media-body">
                                                <a href="mailto:info@tmcell.tm">info@tmcell.tm</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom py-30">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-12 text-center">
                                <p className="copyright-text">
                                    Ähli hukuklary goralan © <span className="currentYear">2023</span> TMCELL.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <button type="button" className="back-to-top position-fixed d-inline-flex align-items-center justify-content-center text-white c1-bg p-0">
                <i className="fas fa-arrow-up"></i>
            </button>
        </>
    );
};

export default Footer;
