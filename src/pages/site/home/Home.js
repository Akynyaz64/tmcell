import React, {useEffect} from "react";
import Slider from "react-slick";

import banner_bg from "../../../assets/img/banner/banner-bg.png";
import about_bg from "../../../assets/img/bg/about_bg.png";
import subscribe_bg from "../../../assets/img/bg/subscribe-bg.png";
import product_bg from "../../../assets/img/bg/product_bg.png";

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
            <section className="banner d-flex align-items-center justify-content-center" style={{backgroundImage: `url(${banner_bg})`}}>
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
                            <div className="banner-image text-center mt-50 mt-lg-0 d-flex justify-content-center">
                                <img src={require("../../../assets/img/banner/banner-img.png")} alt="Banner" style={{width: "20vw"}} />
                                <div className="slider-container">
                                    <Slider {...settings}>
                                        <div className="slider-item">
                                            <a href="https://it.net.tm">
                                                <img src={require("../../../assets/img/carousel/carousel-1.jpg")} alt="Banner" />
                                            </a>
                                        </div>
                                        <div className="slider-item">
                                            <a href="https://it.net.tm">
                                                <img src={require("../../../assets/img/carousel/carousel-2.jpg")} alt="Banner" />
                                            </a>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-120 pb-120 product-bg" style={{backgroundImage: `url(${about_bg})`}}>
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
            <section className="pt-lg-80 overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3" dir="rtl">
                            <div className="subscribe-image d-none d-lg-block">
                                <img className="radius-5" src={require("../../../assets/about_tmcell.jpg")} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-9 d-flex align-items-center">
                            <div className="newsletter-bg-img" style={{backgroundImage: `url(${subscribe_bg})`}}></div>
                            <div className="pl-lg-50 pt-100 pb-100 w-100">
                                <div className="row no-gutters justify-content-end">
                                    <div className="col-lg-10">
                                        <div className="section-title">
                                            <h2 className="text-white">Täzelikler barada habarly boluň!</h2>
                                            <p className="text-white">"Altyn Asyr" ýapyk görnüşli paýdarlar jemgyýeti barada we ýurdumyzyň aragatnaşyk ulgamy barada täzelikler bilen habarly boluň.</p>
                                        </div>
                                        <form action="https://themelooks.us13.list-manage.com/subscribe/post?u=79f0b132ec25ee223bb41835f&id=f4e0e93d1d" className="newsletter-form">
                                            <input type="email" className="theme-input-style" placeholder="Email salgyňyz" />{" "}
                                            <button type="button" className="btn bg-white">
                                                Abuna ýazyl
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-120 pb-90 product-bg" style={{backgroundImage: `url(${product_bg})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="profile-page">
                                <h1>Şahsy otag</h1>
                            </div>
                        </div>
                        <div className="col-lg-8"></div>
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
                                    <div id="map" style={{width: "auto!important"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-120 pb-90">
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
                        <div className="col-lg-4 col-md-6">
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
                                        <a href="blog-details.html">«Altyn asyr» öýjükli aragatnaşyk operatory täze internet bukjalaryny hödürleýär</a>
                                    </h3>
                                    <div className="post-summary">
                                        <p>«Altyn asyr» öýjükli aragatnaşyk operatory ilatyň gyzyklanmalaryny göz öňünde tutmak bilen...</p>
                                    </div>
                                    <a href="blog-details.html" className="btn btn-bordered">
                                        Giňişleýin
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
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
                                        <a href="blog-details.html">«Altyn asyr» öýjükli aragatnaşyk operatory täze internet bukjalaryny hödürleýär</a>
                                    </h3>
                                    <div className="post-summary">
                                        <p>«Altyn asyr» öýjükli aragatnaşyk operatory ilatyň gyzyklanmalaryny göz öňünde tutmak bilen...</p>
                                    </div>
                                    <a href="blog-details.html" className="btn btn-bordered">
                                        Giňişleýin
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
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
                                        <a href="blog-details.html">«Altyn asyr» öýjükli aragatnaşyk operatory täze internet bukjalaryny hödürleýär</a>
                                    </h3>
                                    <div className="post-summary">
                                        <p>«Altyn asyr» öýjükli aragatnaşyk operatory ilatyň gyzyklanmalaryny göz öňünde tutmak bilen...</p>
                                    </div>
                                    <a href="blog-details.html" className="btn btn-bordered">
                                        Giňişleýin
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
