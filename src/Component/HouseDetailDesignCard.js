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
    <Card className="col-3 cardSpacing">
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

        <div className="row">
          <div className="col">
            <div className="shortComplexDetail">
              <h5>{housingData?.housingData?.name}</h5>
              <p style={{ fontWeight: "400" }}>
                {housingData?.housingData?.region}
              </p>
              {housingData?.housingData?.complexType === "Social-Housing" ? (
                <>
                  <strong>R1,850 - R22,000</strong>{" "}
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
                    className="btn btn-primary"
                    href={"/housing/" + housingData?.housingData?.complexId}
                    style={{ color: "white", textDecoration: "none" }}
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
  );
};
