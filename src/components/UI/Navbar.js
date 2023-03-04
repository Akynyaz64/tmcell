import React from "react";

const Navbar = () => {
    return (
        <>
            <header className="header header-sticky d-none d-lg-block">
                <div className="container container-xxl">
                    <div className="row align-items-center">
                        <div className="col-lg-2">
                            <a href="index.html">
                                <img src="assets/img/demo/logo.png" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-10 d-flex align-items-center justify-content-end">
                            <div className="horizontal-menu">
                                <ul className="nav">
                                    <li className="current-menu-item">
                                        <a href="about.html">Barada</a>
                                    </li>
                                    <li>
                                        <a href="pricing.html">Nyrhnamalar</a>
                                        <ul className="submenu">
                                            <li>
                                                <a href="affiliate.html">TM</a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">RU</a>
                                            </li>
                                            <li>
                                                <a href="blog.html">EN</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="products.html">Hyzmatlar</a>
                                    </li>
                                    <li>
                                        <a href="products.html">Internet</a>
                                    </li>
                                    <li>
                                        <a href="products.html">Täzelikler</a>
                                    </li>
                                    <li>
                                        <a href="products.html">Habarlaşmak</a>
                                    </li>
                                    <li>
                                        <a href="index.html#">TM</a>
                                        <ul className="submenu">
                                            <li>
                                                <a href="affiliate.html">TM</a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">RU</a>
                                            </li>
                                            <li>
                                                <a href="blog.html">EN</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="d-flex align-items-center ml-15 header-right">
                                <a href="contact.html" className="btn header-button">
                                    Şahsy otag
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="mobile-header header-sticky d-lg-none py-15">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <a href="index.html">
                                <img src="assets/img/demo/logo.png" alt="" />
                            </a>
                        </div>
                        <div className="col-6 d-flex align-items-center justify-content-end">
                            <button className="trigger-button mr-20" data-toggle="offCanvas" data-target="offcanvasMenu">
                                <span></span> <span></span> <span></span>
                            </button>{" "}
                            <a href="contact.html" className="btn header-button">
                                Şahsy otag
                            </a>
                            <div className="offcanvas" id="offcanvasMenu">
                                <div className="offcanvas-panel w-100 h-100 bg-white">
                                    <div className="offcanvas-header py-30 px-15 d-flex align-items-center justify-content-between">
                                        <a href="index.html">
                                            <img src="assets/img/demo/logo.png" alt="" />{" "}
                                        </a>
                                        <button className="close-button close-offcanvas">
                                            <span className="active">
                                                <span></span> <span></span> <span></span>
                                            </span>
                                        </button>
                                    </div>
                                    <div className="offcanvas-content bg-white py-30">
                                        <div className="vertical-menu">
                                            <ul className="nav flex-column">
                                                <li className="current-menu-item">
                                                    <a href="about.html">Barada</a>
                                                </li>
                                                <li>
                                                    <a href="pricing.html">Nyrhnamalar</a>
                                                    <ul className="submenu">
                                                        <li>
                                                            <a href="affiliate.html">TM</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-details.html">RU</a>
                                                        </li>
                                                        <li>
                                                            <a href="blog.html">EN</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="products.html">Hyzmatlar</a>
                                                </li>
                                                <li>
                                                    <a href="products.html">Internet</a>
                                                </li>
                                                <li>
                                                    <a href="products.html">Täzelikler</a>
                                                </li>
                                                <li>
                                                    <a href="products.html">Habarlaşmak</a>
                                                </li>
                                                <li>
                                                    <a href="index.html#">TM</a>
                                                    <ul className="submenu">
                                                        <li>
                                                            <a href="affiliate.html">TM</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-details.html">RU</a>
                                                        </li>
                                                        <li>
                                                            <a href="blog.html">EN</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
