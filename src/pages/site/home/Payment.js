import React from "react";

const Payment = () => {
    return (
        <div className="client_area">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-4">
                        <div className="d-flex flex-column justify-content-center">
                            <h1 className="text-white mb-25">Şahsy otag</h1>
                            <p className="text-white">Hasabyňyzy we ykjam hyzmatlaryňyzy dolandyrmak üçin iň ýokary derejeli mümkinçiliklerden peýdalanyň.</p>
                            <a href="https://hyzmat.tmcell.tm" class="btn bg-white">
                                Ulgama gir →
                            </a>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-8">
                        <div className="subscribe_area_1 section-title text-center">
                            <h2 className="mb-25">Online töleg</h2>
                            <p className="mb-25">Online töleg hyzmatyndan peýdalanyp hasabyňyzy dolduryp bilersiňiz.</p>
                            <div className="form-group">
                                <span>+993</span>
                                <input className="subscribe_in" type="text" placeholder="60 00 00 00" maxLength={8} max={8} name="phone" required />
                            </div>
                            <button className="btn">Hasaby doldur</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
