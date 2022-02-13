import React from "react";
import { HiOutlineCurrencyYen } from "react-icons/hi";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import overview from "../Images/overview.png";
import marketImage from "../Images/market.png";
import Timer from "./Timer";

import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "reactstrap";

function Dashboard() {
    return (
        <div>
            <h2 className=" m-4 pt-2 dashboardTitle">Dashboard</h2>
            <Row className="p-4 dashboardContainer justify-content-md-between">
                <div className="columnOne mt-md-2  col-md-6  ">
                    <div className="xvsBox col-md-11 pt-5 pb-5 pe-4 ps-4 mb-4">
                        <HiOutlineCurrencyYen
                            size={35}
                            className="yenSymbolYellow"
                            color="#f8b94b"
                        />
                        <span> 0 XVS</span>
                        <BsArrowUpRightCircleFill
                            size={25}
                            className="shortcut"
                        />
                    </div>

                    <div className="vaiBox col-md-11 pt-5 pb-5 pe-4 ps-4 mb-4">
                        <HiOutlineCurrencyYen
                            size={35}
                            className="yenSymbolYellow"
                            color="#73BB59"
                        />
                        <span> 0 VAI</span>
                        <BsArrowUpRightCircleFill
                            size={25}
                            className="shortcut"
                        />
                    </div>

                    <div className="creditBox col-md-11 pt-3 pb-4 pe-4 ps-4 mb-4">
                        <h3>$0</h3>
                        <h6>Available Credit</h6>
                        <h6>Borrow Limit</h6>
                        <h4 className="progressBarText">0%</h4>
                        <progress
                            value="0"
                            max="100"
                            className="w-100"
                        ></progress>
                    </div>

                    <div className="spxBox col-md-11 pt-3 pb-4 pe-4 ps-4 mb-4">
                        <h4>OverView</h4>
                        <p className="note">
                            In this section, a photo has been used !
                        </p>
                        <img src={overview} className="w-100 h-auto" />
                    </div>
                </div>
                <div className="columnTwo mt-md-2 col-md-6">
                    <div className="balanceBox col-md-12 pt-3 pb-4 pe-4 ps-4 mb-4 d-flex align-items-center  justify-content-between text-center ">
                        <div className="supplyBalance col-md-3 justify-content-center">
                            <h6>Supply Balance</h6>
                            <h5>$0</h5>
                        </div>
                        <div className="timerBalance col-md-3 justify-content-center w-25 text-center">
                            <Timer />
                        </div>
                        <div className="BorrowBalance col-md-3 justify-content-center">
                            <h6>Borrow Balance</h6>
                            <h4>$0</h4>
                        </div>
                    </div>

                    <div className="marketBox col-md-12 pt-3 pb-4 pe-4 ps-4 mb-4">
                        <p className="note">
                            In this section, a photo has been used !
                        </p>
                        <img src={marketImage} className="w-100 h-auto" />
                    </div>
                </div>
            </Row>
        </div>
    );
}

export default Dashboard;
