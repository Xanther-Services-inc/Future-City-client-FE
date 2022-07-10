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
                style={{ backgroundImage: `url(${housing?.complexImages[0]})` }}
              ></div>
              <div className="col imagesSpacing">
                <div className="row">
                  <div
                    className="col imgCol2"
                    style={{
                      backgroundImage: `url(${
                        housing?.complexImages.length > 1
                          ? housing?.complexImages[1]
                          : housing?.complexImages[0]
                      })`,
                    }}
                  ></div>
                  <div
                    className="col imgCol3"
                    style={{
                      backgroundImage: `url(${
                        housing?.complexImages.length > 2
                          ? housing?.complexImages[2]
                          : housing?.complexImages.length === 2
                          ? housing?.complexImages[1]
                          : housing?.complexImages[0]
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
                          ? housing?.complexImages[3]
                          : housing?.complexImages.length === 3
                          ? housing?.complexImages[2]
                          : housing?.complexImages.length === 2
                          ? housing?.complexImages[1]
                          : housing?.complexImages[0]
                      })`,
                    }}
                  ></div>
                  <div
                    className="col imgCol5"
                    style={{
                      backgroundImage: `url(${
                        housing?.complexImages.length >= 5
                          ? housing?.complexImages[4]
                          : housing?.complexImages.length === 4
                          ? housing?.complexImages[3]
                          : housing?.complexImages.length === 3
                          ? housing?.complexImages[2]
                          : housing?.complexImages.length === 2
                          ? housing?.complexImages[1]
                          : housing?.complexImages[0]
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
                      <h3 className="housingPrice">
                        R{" "}
                        {parseFloat(housing?.additionalCharges) +
                          parseFloat(housing?.applicationFee)}
                      </h3>
                    </div>
                  </div>
                  <div className="row" style={{ margin: "10px" }}>
                    <div className="col priceDetails textAlignLeft">
                      <label>CARETAKER NAME</label>
                      <p>{housing?.careTaker}</p>
                      <hr className="hrs" />
                      <label>CARETAKER CONTACT</label>
                      <p>{housing?.careTakerContact}</p>
                    </div>
                  </div>
                  <div class="d-grid gap-2 pricingBtn">
                    {/* <button class="btn btn-primary" type="button">
                      Reserve
                    </button> */}
                    <a
                      className="btn btn-primary"
                      href={"/tenancy/" + housing?.complexId}
                    >
                      Reserve
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
            <div style={{ margin: "24px" }}>
              <div className="row">
                <div className="col">
                  <hr style={{ border: "1px solid #DDDDDD" }} />
                </div>
              </div>
              <div className="row">
                <div className="col textAlignLeft">
                  <h4>Where you'll be</h4>
                </div>
              </div>
              <div className="row">
                <div
                  className="col mapContainer"
                  style={{ backgroundImage: `url(${map})` }}
                ></div>
              </div>
            </div>
            {/* map section ends here */}
          </div>
        </div>
      )}
    </>
  );
};
