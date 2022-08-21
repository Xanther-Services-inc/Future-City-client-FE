/**
 * CREATED AND EDITED BY RAVI PATHAK
 */
import background from "../Images/house1.jpg";
import background1 from "../Images/house1.jpg";
import background2 from "../Images/house2.jpg";
import background3 from "../Images/house3.jpg";
import background4 from "../Images/house4.jpg";
import map from "../Images/map.jpg";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
export const ComplexDetails1 = () => {
  const [loading, setLoading] = useState(true);
  const [housing, setHousing] = useState([]);
  const { type } = useParams();
  const cookies = new Cookies();

  let img1,
    img2,
    img3,
    img4,
    img5 = "";

  useEffect(() => {
    (async () => {
      const housings = await axios.get(
        `https://futurecity.majhailcollection.in/api/getComplexById?complexId=${type}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Access-Control-Allow-Headers":
              "Content-Type, Authorization, Content-Length, X-Requested-With",
            Authorization: cookies.get("token"),
          },
        }
      );

      setHousing(housings.data.data);
      setLoading(false);
    })();
  }, [type]);
  console.log(housing, "housing <<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>");
  return (
    <>
      {loading ? (
        "Loading data ... "
      ) : (
        <div className="container-fluid ralewayFont">
          <div className="container">
            {/* complex title section */}
            <div style={{ margin: "24px" }}>
              <div className="row">
                <div className="col textAlignLeft">
                  <h4 className="complexName">
                    <strong>{housing?.name}</strong>
                  </h4>
                </div>
              </div>
              <div className="row">
                <div className="col-10 textAlignLeft">
                  <span>
                    <i className="fa fa-"></i>
                    {housing?.address}
                  </span>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <div className="ShareSaveBtn">
                        <FileUploadOutlinedIcon />
                        Share
                      </div>
                    </div>
                    <div className="col">
                      <div className="ShareSaveBtn">
                        <FavoriteBorderOutlinedIcon />
                        Save
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* complex title section ends here*/}

            {/* images section */}
            <div className="row" style={{ margin: "24px" }}>
              <div
                className="col imagesSpacing"
                style={{
                  backgroundImage: `url(${
                    "https://futurecity.majhailcollection.in/" +
                    housing?.complexImages[0].split(
                      "http://44.206.163.98:3000/"
                    )[1]
                  })`,
                }}
              ></div>
              <div className="col imagesSpacing">
                <div className="row">
                  <div
                    className="col imgCol2"
                    style={{
                      backgroundImage: `url(${
                        housing?.complexImages.length > 1
                          ? "https://futurecity.majhailcollection.in/" +
                            housing?.complexImages[1].split(
                              "http://44.206.163.98:3000/"
                            )[1]
                          : "https://futurecity.majhailcollection.in/" +
                            housing?.complexImages[0].split(
                              "http://44.206.163.98:3000/"
                            )[1]
                      })`,
                    }}
                  ></div>
                  <div
                    className="col imgCol3"
                    style={{
                      backgroundImage: `url(${
                        housing?.complexImages.length > 2
                          ? "https://futurecity.majhailcollection.in/" +
                            housing?.complexImages[2].split(
                              "http://44.206.163.98:3000/"
                            )[1]
                          : housing?.complexImages.length === 2
                          ? "https://futurecity.majhailcollection.in/" +
                            housing?.complexImages[1].split(
                              "http://44.206.163.98:3000/"
                            )[1]
                          : "https://futurecity.majhailcollection.in/" +
                            housing?.complexImages[0].split(
                              "http://44.206.163.98:3000/"
                            )[1]
                      })`,
                    }}
                  ></div>
                </div>
                <div className="row">
                  <div
                    className="col imgCol4"
                    style={{
                      backgroundImage: `url(${
                        housing?.complexImages.length > 3
                          ? "https://futurecity.majhailcollection.in/" +
                            housing?.complexImages[3].split(
                              "http://44.206.163.98:3000/"
                            )[1]
                          : housing?.complexImages.length === 3
                          ? "https://futurecity.majhailcollection.in/" +
                            housing?.complexImages[2].split(
                              "http://44.206.163.98:3000/"
                            )[1]
                          : housing?.complexImages.length === 2
                          ? "https://futurecity.majhailcollection.in/" +
                            housing?.complexImages[1].split(
                              "http://44.206.163.98:3000/"
                            )[1]
                          : "https://futurecity.majhailcollection.in/" +
                            housing?.complexImages[0].split(
                              "http://44.206.163.98:3000/"
                            )[1]
                      })`,
                    }}
                  ></div>
                  <div
                    className="col imgCol5"
                    style={{
                      backgroundImage: `url(${
                        housing?.complexImages.length >= 5
                          ? "https://futurecity.majhailcollection.in/" +
                            housing?.complexImages[4].split(
                              "http://44.206.163.98:3000/"
                            )[1]
                          : housing?.complexImages.length === 4
                          ? "https://futurecity.majhailcollection.in/" +
                            housing?.complexImages[3].split(
                              "http://44.206.163.98:3000/"
                            )[1]
                          : housing?.complexImages.length === 3
                          ? "https://futurecity.majhailcollection.in/" +
                            housing?.complexImages[2].split(
                              "http://44.206.163.98:3000/"
                            )[1]
                          : housing?.complexImages.length === 2
                          ? "https://futurecity.majhailcollection.in/" +
                            housing?.complexImages[1].split(
                              "http://44.206.163.98:3000/"
                            )[1]
                          : "https://futurecity.majhailcollection.in/" +
                            housing?.complexImages[0].split(
                              "http://44.206.163.98:3000/"
                            )[1]
                      })`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            {/* images section ends here */}
            {/* Housing Details Section */}

            <div className="row" style={{ margin: "24px" }}>
              {/* housing details */}
              <div className="col-8 textAlignLeft">
                <div className="row">
                  <div className="col">
                    <h4 style={{ fontWeight: "bold" }}>{housing?.name}</h4>
                    <h6>{housing?.complexType}</h6>
                  </div>
                </div>
                <hr style={{ border: "1px solid #DDDDDD" }} />

                <div className="row">
                  <div className="col">
                    <p>{housing?.description}</p>
                  </div>
                </div>
              </div>
              {/* housing details ends here */}
              {/* pricinf section starts here */}
              <div className="col">
                <div className="container pricingBox shadow">
                  <div className="row">
                    <div className="col textAlignLeft">
                      {/* <h6 className="housingPrice"> */}
                      <span>Application Processing Fee &nbsp;&nbsp;</span>
                      <span style={{ fontSize: "30px" }}>
                        R
                        {parseFloat(housing?.additionalCharges) +
                          parseFloat(housing?.applicationFee)}
                      </span>
                      {/* </h6> */}
                    </div>
                  </div>
                  <div className="row" style={{ margin: "10px" }}>
                    <div className="col priceDetails textAlignLeft">
                      <label>AGENT NAME</label>
                      <p>{housing?.careTaker}</p>
                      <hr className="hrs" />
                      <label>AGENT CONTACT</label>
                      <p>{housing?.careTakerContact}</p>
                    </div>
                  </div>
                  <div class="d-grid gap-2 pricingBtn">
                    {/* <button class="btn btn-primary" type="button">
                      Reserve
                    </button> */}
                    <a
                      className="btn btn-primary DarkButtonBackground"
                      href={"/application-form/" + housing?.complexId}
                    >
                      Apply
                    </a>
                  </div>
                  <div className="row" style={{ margin: "10px" }}>
                    <div className="col">
                      <div className="priceDistribution">
                        <p>Application Fee</p>
                        <p>R{housing?.applicationFee}</p>
                      </div>
                      <hr />
                      <div className="priceDistribution">
                        <p>Additional Charges</p>
                        <p>R{housing?.additionalCharges}</p>
                      </div>
                      <hr />
                      <div className="priceDistribution totalPrice">
                        <p>Total</p>
                        <p>
                          R
                          {parseFloat(housing?.additionalCharges) +
                            parseFloat(housing?.applicationFee)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* pricing section ends here */}
            </div>
            {/* Housing Details Section Ends Here */}
            {/* map section comes here */}
            <div>
              <iframe
                // src={housing.mapsLink}
                // src="https://www.google.com/maps/place/Phase+5,+Sector+59,+Sahibzada+Ajit+Singh+Nagar,+Punjab+140308/@30.7125452,76.7100359,17z/data=!3m1!4b1!4m5!3m4!1s0x390fee8a9ee7c53f:0x651a4b4633e36d64!8m2!3d30.7125406!4d76.7122246"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919.8347616812483!2d27.729733829219885!3d-26.150777795140574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf06520d35b3de6e7!2zMjbCsDA5JzAyLjgiUyAyN8KwNDMnNDkuMCJF!5e1!3m2!1sen!2sin!4v1657513232455!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: "0", width: "100%" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* map section ends here */}
          </div>
        </div>
      )}
    </>
  );
};
