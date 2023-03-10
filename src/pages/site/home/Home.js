import React from "react";
import Slider from "react-slick";

import Payment from "./Payment";
import Map from "./Map";
import banner_bg from "../../../assets/img/banner/banner-bg.png";
import about_bg from "../../../assets/img/bg/about_bg.png";
import product_bg from "../../../assets/img/bg/product_bg.png";
import mobile_app1 from "../../../assets/img/banner/mobile-app-1.png";
import mobile_app2 from "../../../assets/img/banner/mobile-app-2.png";
import mobile_app3 from "../../../assets/img/banner/mobile-app-3.png";
import mobile_app4 from "../../../assets/img/banner/mobile-app-4.png";
import mobile_app5 from "../../../assets/img/banner/mobile-app-5.png";
import saz_icon from "../../../assets/icons/apps/app1.png";
import tv_icon from "../../../assets/icons/apps/app2.png";
import lk_icon from "../../../assets/icons/apps/app3.png";
import chat_icon from "../../../assets/icons/apps/app4.png";
import toleg_icon from "../../../assets/icons/apps/app5.png";
import google_play from "../../../assets/icons/apps/google_play.png";
import app_store from "../../../assets/icons/apps/app_store.png";
import qr from "../../../assets/icons/apps/qr.png";
import blue_bg from "../../../assets/img/bg/blue-bg.png";

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
        autoplaySpeed: 2000,
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

    const phones_settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        swipeToSlide: true,
        pauseOnHover: true,
        autoplaySpeed: 3000,
        transformEnabled: false,
    };

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
                                <h1 className="mb-15">"Altyn Asyr" ??GPJ</h1>
                                <p className="mb-50">"Altyn Asyr" ??apyk g??rn????li pa??darlar jemgy??etini?? h??d??rle????n hyzmatlaryndan pe??dalany??.</p>
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
            <section class="pt-120 pb-120 product-bg bg-img">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="section-title mb-35">
                                <span class="d-block text-uppercase fw-medium mb-15">Discover feature</span>
                                <h2>Hosting Made Simple Fast Web Convenient</h2>
                            </div>
                            <a href="#!" class="btn">
                                Discover Now
                            </a>
                        </div>
                        <div class="col-lg-8">
                            <div class="row no-gutters card-box-style position-relative mt-50 mt-lg-0">
                                <div class="col-md-6 active">
                                    <div class="card">
                                        <div class="watermark-icon">
                                            <img src="assets/img/demo/icons/features/watermark-logo.png" alt="" />
                                        </div>
                                        <div class="card-icon mb-30">
                                            <img src="assets/img/demo/icons/features/01.png" alt="" />
                                        </div>
                                        <div class="card-content">
                                            <span class="d-block text-uppercase">Explore the feature</span>
                                            <h3>Flexible Computer Type</h3>
                                            <p>Spin a managed Kubernetes clusters click Simply specify the nodes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card">
                                        <div class="watermark-icon">
                                            <img src="assets/img/demo/icons/features/watermark-logo.png" alt="" />
                                        </div>
                                        <div class="card-icon mb-30">
                                            <img src="assets/img/demo/icons/features/02.png" alt="" />
                                        </div>
                                        <div class="card-content">
                                            <span class="d-block text-uppercase">Explore the feature</span>
                                            <h3>Backups &amp; Snapshot</h3>
                                            <p>Spin a managed Kubernetes clusters click Simply specify the nodes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card">
                                        <div class="watermark-icon">
                                            <img src="assets/img/demo/icons/features/watermark-logo.png" alt="" />
                                        </div>
                                        <div class="card-icon mb-30">
                                            <img src="assets/img/demo/icons/features/03.png" alt="" />
                                        </div>
                                        <div class="card-content">
                                            <span class="d-block text-uppercase">Explore the feature</span>
                                            <h3>Natively Integrated</h3>
                                            <p>Spin a managed Kubernetes clusters click Simply specify the nodes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card">
                                        <div class="watermark-icon">
                                            <img src="assets/img/demo/icons/features/watermark-logo.png" alt="" />
                                        </div>
                                        <div class="card-icon mb-30">
                                            <img src="assets/img/demo/icons/features/01.png" alt="" />
                                        </div>
                                        <div class="card-content">
                                            <span class="d-block text-uppercase">Explore the feature</span>
                                            <h3>Real-Time Alerts</h3>
                                            <p>Spin a managed Kubernetes clusters click Simply specify the nodes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="box"></div>
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
                                <span className="d-block text-uppercase fw-medium mb-15">M??mkin??ilikler</span>
                                <h2>Ulgamy?? m??mkin??ilikleri</h2>
                            </div>
                            <a href="index.html#" className="btn">
                                ??hlisi
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
                                <h2>So??ky t??zelikler</h2>
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
                                                            <a href="blog-details.html">??Altyn asyr?? </a>
                                                        </h3>
                                                        <a href="blog-details.html" className="btn btn-bordered">
                                                            Gi??i??le??in
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
                                                            <a href="blog-details.html">??Altyn asyr?? ????j??kli</a>
                                                        </h3>
                                                        <a href="blog-details.html" className="btn btn-bordered">
                                                            Gi??i??le??in
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
                                                            <a href="blog-details.html">??Altyn asyr?? ????j??kli</a>
                                                        </h3>
                                                        <a href="blog-details.html" className="btn btn-bordered">
                                                            Gi??i??le??in
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
                                                            <a href="blog-details.html">??Altyn asyr?? ????j??kli </a>
                                                        </h3>
                                                        <a href="blog-details.html" className="btn btn-bordered">
                                                            Gi??i??le??in
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
                                                            <a href="blog-details.html">??Altyn asyr?? </a>
                                                        </h3>
                                                        <a href="blog-details.html" className="btn btn-bordered">
                                                            Gi??i??le??in
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
                                                            <a href="blog-details.html">??Altyn asyr?? ????j??kli</a>
                                                        </h3>
                                                        <a href="blog-details.html" className="btn btn-bordered">
                                                            Gi??i??le??in
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
                                                            <a href="blog-details.html">??Altyn asyr?? ????j??kli</a>
                                                        </h3>
                                                        <a href="blog-details.html" className="btn btn-bordered">
                                                            Gi??i??le??in
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
                                                            <a href="blog-details.html">??Altyn asyr?? ????j??kli </a>
                                                        </h3>
                                                        <a href="blog-details.html" className="btn btn-bordered">
                                                            Gi??i??le??in
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
                                <h2>TMCELL hyzmat edi?? b??l??m??eleri?? salgylary</h2>
                                <p>??hli wela??atlarda ??erle??en TMCELL hyzmat edi?? b??l??m??eleri?? salgylary.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="d-flex">
                                <div className="position-relative w-100 text-center">
                                    <Map />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-120 pb-120 apps-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Slider {...phones_settings} className="slick">
                                <div className="item">
                                    <div className="row">
                                        <div className="col-xl-8 col-lg-8 col-md-8 col-12 d-flex align-items-center justify-content-center">
                                            <img src={mobile_app1} alt="phone" className="app-phone" />
                                            <img src={blue_bg} alt="phone" className="bg" />
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-center">
                                            <div className="section-title mb-60 text-center">
                                                <h2>TMCELL T??leg</h2>
                                                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                <div className="row text-center justify-content-center mt-25">
                                                    <div className="col-6">
                                                        <img src={qr} alt="icon" className="app-icon" />
                                                    </div>
                                                    <div className="col-6 d-flex flex-column pt-25">
                                                        <a href={"https://it.net.tm"}>
                                                            <img src={google_play} alt="icon" className="app-icon mb-25" />
                                                        </a>
                                                        <a href={"https://it.net.tm"}>
                                                            <img src={app_store} alt="icon" className="app-icon mb-25" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-xl-8 col-lg-8 col-md-8 col-12 d-flex align-items-center justify-content-center">
                                            <img src={mobile_app2} alt="phone" className="app-phone" />
                                            <img src={blue_bg} alt="phone" className="bg" />
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-center">
                                            <div className="section-title mb-60 text-center">
                                                <h2>TMCELL Sazz</h2>
                                                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                <div className="row text-center justify-content-center mt-25">
                                                    <div className="col-6">
                                                        <img src={qr} alt="icon" className="app-icon" />
                                                    </div>
                                                    <div className="col-6 d-flex flex-column pt-25">
                                                        <a href={"https://it.net.tm"}>
                                                            <img src={google_play} alt="icon" className="app-icon mb-25" />
                                                        </a>
                                                        <a href={"https://it.net.tm"}>
                                                            <img src={app_store} alt="icon" className="app-icon mb-25" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-xl-8 col-lg-8 col-md-8 col-12 d-flex align-items-center justify-content-center">
                                            <img src={mobile_app3} alt="phone" className="app-phone" />
                                            <img src={blue_bg} alt="phone" className="bg" />
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-center">
                                            <div className="section-title mb-60 text-center">
                                                <h2>Mobile TV</h2>
                                                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                <div className="row text-center justify-content-center mt-25">
                                                    <div className="col-6">
                                                        <img src={qr} alt="icon" className="app-icon" />
                                                    </div>
                                                    <div className="col-6 d-flex flex-column pt-25">
                                                        <a href={"https://it.net.tm"}>
                                                            <img src={google_play} alt="icon" className="app-icon mb-25" />
                                                        </a>
                                                        <a href={"https://it.net.tm"}>
                                                            <img src={app_store} alt="icon" className="app-icon mb-25" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-xl-8 col-lg-8 col-md-8 col-12 d-flex align-items-center justify-content-center">
                                            <img src={mobile_app4} alt="phone" className="app-phone" />
                                            <img src={blue_bg} alt="phone" className="bg" />
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-center">
                                            <div className="section-title mb-60 text-center">
                                                <h2>??ahsy otag</h2>
                                                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                <div className="row text-center justify-content-center mt-25">
                                                    <div className="col-6">
                                                        <img src={qr} alt="icon" className="app-icon" />
                                                    </div>
                                                    <div className="col-6 d-flex flex-column pt-25">
                                                        <a href={"https://it.net.tm"}>
                                                            <img src={google_play} alt="icon" className="app-icon mb-25" />
                                                        </a>
                                                        <a href={"https://it.net.tm"}>
                                                            <img src={app_store} alt="icon" className="app-icon mb-25" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-xl-8 col-lg-8 col-md-8 col-12 d-flex align-items-center justify-content-center">
                                            <img src={mobile_app5} alt="phone" className="app-phone" />
                                            <img src={blue_bg} alt="phone" className="bg" />
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-center">
                                            <div className="section-title mb-60 text-center">
                                                <h2>Tmchat</h2>
                                                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                <div className="row text-center justify-content-center mt-25">
                                                    <div className="col-6">
                                                        <img src={qr} alt="icon" className="app-icon" />
                                                    </div>
                                                    <div className="col-6 d-flex flex-column pt-25">
                                                        <a href={"https://it.net.tm"}>
                                                            <img src={google_play} alt="icon" className="app-icon mb-25" />
                                                        </a>
                                                        <a href={"https://it.net.tm"}>
                                                            <img src={app_store} alt="icon" className="app-icon mb-25" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className="col-12 col-xl-6 col-lg-6 col-md-6 phones-slider-container">
                            {/* <div className="phones-slider">
                                <div className="slide-track">
                                    <div className="slide">
                                        <img src={mobile_app3} alt="phone" />
                                    </div>
                                    <div className="slide">
                                        <img src={mobile_app1} alt="phone" />
                                    </div>
                                    <div className="slide">
                                        <img src={mobile_app5} alt="phone" />
                                    </div>
                                    <div className="slide">
                                        <img src={mobile_app4} alt="phone" />
                                    </div>
                                    <div className="slide">
                                        <img src={mobile_app2} alt="phone" />
                                    </div>
                                </div>
                            </div>
                            <div className="phones-slider">
                                <div className="slide-track">
                                    <div className="slide">
                                        <img src={mobile_app2} alt="phone" />
                                    </div>
                                    <div className="slide">
                                        <img src={mobile_app5} alt="phone" />
                                    </div>
                                    <div className="slide">
                                        <img src={mobile_app4} alt="phone" />
                                    </div>
                                    <div className="slide">
                                        <img src={mobile_app3} alt="phone" />
                                    </div>
                                    <div className="slide">
                                        <img src={mobile_app1} alt="phone" />
                                    </div>
                                </div>
                            </div>
                            <div className="phones-slider">
                                <div className="slide-track">
                                    <div className="slide">
                                        <img src={mobile_app1} alt="phone" />
                                    </div>
                                    <div className="slide">
                                        <img src={mobile_app4} alt="phone" />
                                    </div>
                                    <div className="slide">
                                        <img src={mobile_app3} alt="phone" />
                                    </div>
                                    <div className="slide">
                                        <img src={mobile_app2} alt="phone" />
                                    </div>
                                    <div className="slide">
                                        <img src={mobile_app5} alt="phone" />
                                    </div>
                                </div>
                            </div> */}
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
