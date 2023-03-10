import React, { useEffect } from "react";
import Slider from "react-slick";

import Payment from "./Payment";
import banner_bg from "../../../assets/img/banner/banner-bg.png";
import about_bg from "../../../assets/img/bg/about_bg.png";
import product_bg from "../../../assets/img/bg/product_bg.png";
import mobile_app1 from "../../../assets/img/banner/mobile-app-1.png";
import mobile_app2 from "../../../assets/img/banner/mobile-app-2.png";
import mobile_app3 from "../../../assets/img/banner/mobile-app-3.png";
import mobile_app4 from "../../../assets/img/banner/mobile-app-4.png";
import mobile_app5 from "../../../assets/img/banner/mobile-app-5.png";
import toleg_icon from "../../../assets/icons/mail.svg";
import saz_icon from "../../../assets/icons/mail.svg";
import tv_icon from "../../../assets/icons/mail.svg";
import lk_icon from "../../../assets/icons/mail.svg";
import chat_icon from "../../../assets/icons/mail.svg";

const Home = () => {
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        swipeToSlide: true,
        pauseOnHover: false,
        autoplaySpeed: 4000,
        transformEnabled: false,
    };

    const news_settings1 = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        swipeToSlide: true,
        pauseOnHover: true,
        autoplaySpeed: 3000,
        transformEnabled: false,
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const news_settings2 = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        swipeToSlide: true,
        pauseOnHover: true,
        autoplaySpeed: 3000,
        transformEnabled: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    useEffect(() => {
        const script = document.createElement("script");
        const script2 = document.createElement("script");

        script.src = "/countrymap.js";
        script.async = true;
        script2.src = "/mapdata.js";
        script2.async = true;

        document.body.appendChild(script);
        document.body.appendChild(script2);

        return () => {
            document.body.removeChild(script);
            document.body.removeChild(script2);
        };
    }, []);

    return (
        <>
            <section className="banner d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${banner_bg})` }}>
                <div className="container container-xxl">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="banner-content">
                                {/* <div className="d-flex align-items-center text-white mb-25">
                                    <a href="https://www.youtube.com/watch?v=eEzD-Y97ges" className="btn_play mr-15" data-fancybox>
                                        <i className="fas fa-play"></i>{" "}
                                    </a>
                                    Promo Video
                                </div> */}
                                <h1 className="mb-15">"Altyn Asyr" ÝGPJ</h1>
                                <p className="mb-50">"Altyn Asyr" ýapyk görnüşli paýdarlar jemgyýetiniň hödürleýän hyzmatlaryndan peýdalanyň.</p>
                                <a href="index.html#" className="btn bg-white">
                                    Hyzmatlar
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="banner-image text-center mt-50 mt-lg-0 d-flex justify-content">
                                <div className="banner-slider">
                                    <Slider {...settings}>
                                        <div className="slider-item">
                                            <a href="https://it.net.tm" target={"_blank"} rel="noreferrer">
                                                <img src={require("../../../assets/img/carousel/carousel-1.png")} alt="Banner" />
                                            </a>
                                        </div>
                                        <div className="slider-item">
                                            <a href="https://it.net.tm" target={"_blank"} rel="noreferrer">
                                                <img src={require("../../../assets/img/carousel/carousel-2.png")} alt="Banner" />
                                            </a>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-120 pb-120 product-bg" style={{ backgroundImage: `url(${about_bg})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="section-title mb-35">
                                <span className="d-block text-uppercase fw-medium mb-15">Mümkinçilikler</span>
                                <h2>Ulgamyň mümkinçilikleri</h2>
                            </div>
                            <a href="index.html#" className="btn">
                                Ählisi
                            </a>
                        </div>
                        <div className="col-lg-8">
                            <div className="advice-container">
                                <a href="https://it.net.tm" target={"_blank"} rel="noreferrer">
                                    <img src={require("../../../assets/img/banner/phone_mock1.png")} alt="" id="img1" />
                                </a>
                                <a href="https://it.net.tm/tmcell" target={"_blank"} rel="noreferrer">
                                    <img src={require("../../../assets/img/banner/phone_mock2.png")} alt="" id="img2" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-120 pb-90 product-bg" style={{ backgroundImage: `url(${product_bg})` }}>
                <Payment />
            </section>
            <section className="pt-lg-80 pb-80 overflow-hidden news-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center mb-60">
                                <span className="d-block text-uppercase fw-medium mb-15">Altyn Asyr</span>
                                <h2>Soňky täzelikler</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="news-image-tablet">
                                <img src={require("../../../assets/img/banner/news_tablet1.png")} alt="" id="tablet1" />
                                <div className="news-containers">
                                    <div className="row">
                                        <Slider {...news_settings1} className="w-100">
                                            <div className="col">
                                                <div className="single-post-item radius-5 overflow-hidden mb-30">
                                                    <a href="blog-details.html" className="post-thumbnail overflow-hidden d-flex">
                                                        <img src={require("../../../assets/blog/01.png")} alt="" />
                                                    </a>
                                                    <div className="post-content">
                                                        <ul className="post-meta nav mb-10">
                                                            <li>
                                                                <i className="far fa-calendar-alt"></i> <a href="index.html#">26 Aug, 2020</a>
                                                            </li>
                                                        </ul>
                                                        <h3 className="post-title mb-10">
                                                            <a href="blog-details.html">«Altyn asyr» </a>
                                                        </h3>
                                                        <a href="blog-details.html" className="btn btn-bordered">
                                                            Giňişleýin
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="single-post-item radius-5 overflow-hidden mb-30">
                                                    <a href="blog-details.html" className="post-thumbnail overflow-hidden d-flex">
                                                        <img src={require("../../../assets/blog/03.png")} alt="" />
                                                    </a>
                                                    <div className="post-content">
                                                        <ul className="post-meta nav mb-10">
                                                            <li>
                                                                <i className="far fa-calendar-alt"></i> <a href="index.html#">26 Aug, 2020</a>
                                                            </li>
                                                        </ul>
                                                        <h3 className="post-title mb-10">
                                                            <a href="blog-details.html">«Altyn asyr» öýjükli</a>
                                                        </h3>
                                                        <a href="blog-details.html" className="btn btn-bordered">
                                                            Giňişleýin
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="single-post-item radius-5 overflow-hidden mb-30">
                                                    <a href="blog-details.html" className="post-thumbnail overflow-hidden d-flex">
                                                        <img src={require("../../../assets/blog/01.png")} alt="" />
                                                    </a>
                                                    <div className="post-content">
                                                        <ul className="post-meta nav mb-10">
                                                            <li>
                                                                <i className="far fa-calendar-alt"></i> <a href="index.html#">26 Aug, 2020</a>
                                                            </li>
                                                        </ul>
                                                        <h3 className="post-title mb-10">
                                                            <a href="blog-details.html">«Altyn asyr» öýjükli</a>
                                                        </h3>
                                                        <a href="blog-details.html" className="btn btn-bordered">
                                                            Giňişleýin
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="single-post-item radius-5 overflow-hidden mb-30">
                                                    <a href="blog-details.html" className="post-thumbnail overflow-hidden d-flex">
                                                        <img src={require("../../../assets/blog/03.png")} alt="" />
                                                    </a>
                                                    <div className="post-content">
                                                        <ul className="post-meta nav mb-10">
                                                            <li>
                                                                <i className="far fa-calendar-alt"></i> <a href="index.html#">26 Aug, 2020</a>
                                                            </li>
                                                        </ul>
                                                        <h3 className="post-title mb-10">
                                                            <a href="blog-details.html">«Altyn asyr» öýjükli </a>
                                                        </h3>
                                                        <a href="blog-details.html" className="btn btn-bordered">
                                                            Giňişleýin
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="news-image-tablet">
                                <img src={require("../../../assets/img/banner/news_tablet2.png")} alt="" id="tablet2" />
                                <div className="news-containers2">
                                    <div className="row">
                                        <Slider {...news_settings2} className="w-100">
                                            <div className="col">
                                                <div className="single-post-item radius-5 overflow-hidden mb-30">
                                                    <a href="blog-details.html" className="post-thumbnail overflow-hidden d-flex">
                                                        <img src={require("../../../assets/blog/01.png")} alt="" />
                                                    </a>
                                                    <div className="post-content">
                                                        <ul className="post-meta nav mb-10">
                                                            <li>
                                                                <i className="far fa-calendar-alt"></i> <a href="index.html#">26 Aug, 2020</a>
                                                            </li>
                                                        </ul>
                                                        <h3 className="post-title mb-10">
                                                            <a href="blog-details.html">«Altyn asyr» </a>
                                                        </h3>
                                                        <a href="blog-details.html" className="btn btn-bordered">
                                                            Giňişleýin
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="single-post-item radius-5 overflow-hidden mb-30">
                                                    <a href="blog-details.html" className="post-thumbnail overflow-hidden d-flex">
                                                        <img src={require("../../../assets/blog/03.png")} alt="" />
                                                    </a>
                                                    <div className="post-content">
                                                        <ul className="post-meta nav mb-10">
                                                            <li>
                                                                <i className="far fa-calendar-alt"></i> <a href="index.html#">26 Aug, 2020</a>
                                                            </li>
                                                        </ul>
                                                        <h3 className="post-title mb-10">
                                                            <a href="blog-details.html">«Altyn asyr» öýjükli</a>
                                                        </h3>
                                                        <a href="blog-details.html" className="btn btn-bordered">
                                                            Giňişleýin
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="single-post-item radius-5 overflow-hidden mb-30">
                                                    <a href="blog-details.html" className="post-thumbnail overflow-hidden d-flex">
                                                        <img src={require("../../../assets/blog/01.png")} alt="" />
                                                    </a>
                                                    <div className="post-content">
                                                        <ul className="post-meta nav mb-10">
                                                            <li>
                                                                <i className="far fa-calendar-alt"></i> <a href="index.html#">26 Aug, 2020</a>
                                                            </li>
                                                        </ul>
                                                        <h3 className="post-title mb-10">
                                                            <a href="blog-details.html">«Altyn asyr» öýjükli</a>
                                                        </h3>
                                                        <a href="blog-details.html" className="btn btn-bordered">
                                                            Giňişleýin
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="single-post-item radius-5 overflow-hidden mb-30">
                                                    <a href="blog-details.html" className="post-thumbnail overflow-hidden d-flex">
                                                        <img src={require("../../../assets/blog/03.png")} alt="" />
                                                    </a>
                                                    <div className="post-content">
                                                        <ul className="post-meta nav mb-10">
                                                            <li>
                                                                <i className="far fa-calendar-alt"></i> <a href="index.html#">26 Aug, 2020</a>
                                                            </li>
                                                        </ul>
                                                        <h3 className="post-title mb-10">
                                                            <a href="blog-details.html">«Altyn asyr» öýjükli </a>
                                                        </h3>
                                                        <a href="blog-details.html" className="btn btn-bordered">
                                                            Giňişleýin
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-light pt-120 pb-120 overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center mb-60">
                                <span className="d-block text-uppercase fw-medium mb-15">Salgylarymyz</span>
                                <h2>TMCELL hyzmat ediş bölümçeleriň salgylary</h2>
                                <p>Ähli welaýatlarda ýerleşen TMCELL hyzmat ediş bölümçeleriň salgylary.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="d-flex">
                                <div className="position-relative w-100 text-center">
                                    <div id="map" style={{ width: "auto!important" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-120 pb-90 apps-container">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="section-title mb-60">
                                <h2>Biziň mobil goşundylarymyzdan peýdalanyň</h2>
                                <div className="row text-center">
                                    <div className="col-4">
                                        <img src={toleg_icon} alt="icon" />
                                        <h5 className="my-4">TMCELL Töleg</h5>
                                    </div>
                                    <div className="col-4">
                                        <img src={saz_icon} alt="icon" />
                                        <h5 className="my-4">TMCELL Sazz</h5>
                                    </div>
                                    <div className="col-4">
                                        <img src={tv_icon} alt="icon" />
                                        <h5 className="my-4">Mobile TV</h5>
                                    </div>
                                    <div className="col-4">
                                        <img src={lk_icon} alt="icon" />
                                        <h5 className="my-4">Şahsy otag</h5>
                                    </div>
                                    <div className="col-4">
                                        <img src={chat_icon} alt="icon" />
                                        <h5 className="my-4">Tmchat</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mobile-apps">
                                <div className="phone-apps" id="apps1">
                                    <img src={mobile_app3} alt="phone" />
                                    <img src={mobile_app1} alt="phone" />
                                    <img src={mobile_app5} alt="phone" />
                                    <img src={mobile_app4} alt="phone" />
                                    <img src={mobile_app2} alt="phone" />
                                </div>
                                <div className="phone-apps" id="apps2">
                                    <img src={mobile_app2} alt="phone" />
                                    <img src={mobile_app5} alt="phone" />
                                    <img src={mobile_app4} alt="phone" />
                                    <img src={mobile_app3} alt="phone" />
                                    <img src={mobile_app1} alt="phone" />
                                </div>
                                <div className="phone-apps" id="apps3">
                                    <img src={mobile_app1} alt="phone" />
                                    <img src={mobile_app4} alt="phone" />
                                    <img src={mobile_app3} alt="phone" />
                                    <img src={mobile_app2} alt="phone" />
                                    <img src={mobile_app5} alt="phone" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-6">
                            <div className="mockup-phone">
                                <img src="https://klike.net/uploads/posts/2020-01/1578300192_33.jpg" alt="phone" />
                                <div className="phone-body"></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mockup-phone">
                                <img src="https://klike.net/uploads/posts/2020-01/1578300192_33.jpg" alt="phone" />
                                <div className="phone-body"></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mockup-phone">
                                <img src="https://klike.net/uploads/posts/2020-01/1578300192_33.jpg" alt="phone" />
                                <div className="phone-body"></div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    );
};

export default Home;
