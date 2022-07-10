/**
 * CREATED AND EDITED BY RAVI PATHAK
 */

import Carousel from "react-bootstrap/Carousel";

import background from "../Images/house1.jpg";
import background1 from "../Images/house1.jpg";
import background2 from "../Images/house2.jpg";
import background3 from "../Images/house3.jpg";
import background4 from "../Images/house4.jpg";

export const HouseDetailsDesignCard = (housingData) => {
  console.log(housingData, "housing >>>>>>>>>>>>>>>>>>>>>");
  return (
    <div className="col-3 cardSpacing">
      <Carousel fade>
        {housingData?.housingData.complexImages.map((value, index) => (
          <Carousel.Item interval={10000} key={index}>
            <div
              className="carousalItem"
              style={{ backgroundImage: `url(${value})` }}
            ></div>
          </Carousel.Item>
        ))}

        {/* <Carousel.Item interval={10000}>
          <div
            className="carousalItem"
            style={{ backgroundImage: `url(${background2})` }}
          ></div>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <div
            className="carousalItem"
            style={{ backgroundImage: `url(${background})` }}
          ></div>
        </Carousel.Item> */}
      </Carousel>
      <a
        href={"/housingdesign/" + housingData?.housingData?.complexId}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="row">
          <div className="col">
            <div className="shortComplexDetail">
              <h5>{housingData?.housingData?.name}</h5>
              <p style={{ fontWeight: "400" }}>
                {housingData?.housingData?.region}
              </p>
              {housingData?.housingData?.complexType === "Social-Housing" ? (
                <strong>R1,850 - R22,000</strong>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
