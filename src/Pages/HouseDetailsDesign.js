/**
 * CREATED AND EDITED BY RAVI PATHAK
 */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import { HouseDetailsDesignCard } from "../Component/HouseDetailDesignCard";
import MenuAppBar from "../Component/MenuAppBar";

export const HouseDetailsDesign = () => {
  const [loading, setLoading] = useState(true);
  const [housing, setHousing] = useState([]);
  const { type } = useParams();
  const cookies = new Cookies();

  useEffect(() => {
    (async () => {
      const housings = await axios.get(
        `https://futurecity.majhailcollection.in/api/getAllComplexByType?complexType=${type}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Access-Control-Allow-Headers":
              "Content-Type, Authorization, Content-Length, X-Requested-With",
            Authorization: "Bearer " + cookies.get("token"),
          },
        }
      );

      setHousing(housings.data.data);
      setLoading(false);
    })();
  }, [type]);

  return (
    <>
      <MenuAppBar />
      <div className="container-fluid ralewayFont">
        <div className="container">
          {/* complex title section */}
          <div style={{ margin: "24px" }}>
            <div className="row">
              <div className="col textAlignLeft">
                <p style={{ marginBottom: "0px" }}>Housing List by:</p>
                <h4 className="complexName">
                  <strong>
                    {type === "social-housing" ? "Social Housing" : type}
                  </strong>
                </h4>
              </div>
            </div>
            <br />
            <div className="row">
              {loading
                ? "Loading Data..."
                : housing.map((value, index) => (
                    <HouseDetailsDesignCard housingData={value} />
                  ))}

              {/* <HouseDetailsDesignCard />
              <HouseDetailsDesignCard />
              <HouseDetailsDesignCard />
              <HouseDetailsDesignCard />
              <HouseDetailsDesignCard />
              <HouseDetailsDesignCard />
              <HouseDetailsDesignCard />
              <HouseDetailsDesignCard />
              <HouseDetailsDesignCard /> */}
            </div>
          </div>
          {/* complex title section ends here*/}
        </div>
      </div>
    </>
  );
};
