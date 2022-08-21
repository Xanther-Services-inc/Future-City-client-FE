/**
 * CREATED AND EDITED BY RAVI PATHAK
 */

import { Button, Card } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";

import background from "../Images/house1.jpg";
import background1 from "../Images/house1.jpg";
import background2 from "../Images/house2.jpg";
import background3 from "../Images/house3.jpg";
import background4 from "../Images/house4.jpg";

export const HouseDetailsDesignCard = (housingData) => {
  console.log(housingData, "housing >>>>>>>>>>>>>>>>>>>>>");
  return (
    <div className="col-3">
      <Card className="cardSpacing DarkCard" style={{paddingRight:"5px"}}>
        <div
          style={{
            marginTop: "5%",
            marginLeft: "2.5%",
          }}
        >
          <Carousel fade>
            {housingData?.housingData.complexImages.map((value, index) => (
              <Carousel.Item interval={10000} key={index}>
                <div
                  className="carousalItem"
                  style={{
                    backgroundImage: `url(${
                      "https://futurecity.majhailcollection.in/" +
                      value.split("http://44.206.163.98:3000/")[1]
                    })`,
                  }}
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

          <div className="row">
            <div className="col">
              <div className="shortComplexDetail DarkFontsColor">
                <h5>{housingData?.housingData?.name}</h5>
                <p style={{ fontWeight: "400" }}>
                  {housingData?.housingData?.region}
                </p>
                {housingData?.housingData?.complexType === "Social-Housing" ? (
                  <>
                    <div className="DarkPricingContainer">
                      Income Range: <strong>R1,850 - R22,000</strong>
                    </div>
                    {/* <Button
                    sx={{
                      backgroundColor: "#ffc107",
                      borderColor: "#ffc107",
                      // color: "white",
                      fontWeight: "bold",
                      fontSize: "14px",
                      borderRadius: "5px",
                      padding: "5px",
                      marginTop: "5px",
                      marginBottom: "5px",
                    }}
                  > */}
                    <a
                      className="btn btn-primary DarkButtonBackground"
                      href={"/housing/" + housingData?.housingData?.complexId}
                      style={{
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Apply{" "}
                    </a>
                    <br />
                    {/* </Button> */}
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
