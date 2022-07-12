import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import UploaderProgress from "../Component/UploaderProgress";
import { useNavigate } from "react-router-dom";
import MenuAppBar from "../Component/MenuAppBar";
import swal from "sweetalert";

export const StepsForm = () => {
  const [formStep, setFormStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    setFormStep(formStep + 1);
  };
  const handleBack = () => {
    setFormStep(formStep - 1);
  };

  const { type } = useParams();
  const cookies = new Cookies();

  const [housing, setHousing] = useState();
  const [loading, setLoading] = useState();

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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [sidNo, setSidNo] = useState(true);
  const [nonsidNo, setNonSidNo] = useState(false);
  const [passport, setPassport] = useState("");
  const [dob, setDob] = useState("");
  const [marital, setMarital] = useState("");
  const [disability, setDisability] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [zip, setZip] = useState("");

  // =======================================================================================

  const [bank, setBank] = useState("");
  const [branch, setBranch] = useState("");
  const [acType, setAcType] = useState("");
  const [acNumber, setAcNumber] = useState("");

  // ========================================================================================

  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [altContact, setAltContact] = useState("");

  // ==========================================================================================

  const [occupation, setOccupation] = useState("");
  const [employer, setEmployer] = useState("");
  const [employerContact, setEmployerContact] = useState("");
  const [totalIncome, setTotalIncome] = useState("");
  const [totalExpances, setTotalExpances] = useState("");

  // ===========================================================================================

  const [nxtKin, setNxtKin] = useState("");
  const [kinContact, setKinContact] = useState("");

  // ============================================================================================

  const [idFile, setIdFile] = useState();
  const [bankStatementFile, setBankStatementFile] = useState();
  const [salarySlip, setSalarySlip] = useState();
  const [addressProof, setAddressProof] = useState();
  const [paymentProof, setPaymentProof] = useState();

  const handleIdFile = (event) => {
    console.log(event.target.files[0], "id");
    if (event.target.files && event.target.files[0]) {
      setIdFile(event.target.files[0]);
    }
  };

  const handleBankStatementFile = (event) => {
    console.log(event.target.files[0], "bank statement");
    if (event.target.files && event.target.files[0]) {
      setBankStatementFile(event.target.files[0]);
    }
  };

  const handleSalarySlip = (event) => {
    console.log(event.target.files[0], "salary slip");
    if (event.target.files && event.target.files[0]) {
      setSalarySlip(event.target.files[0]);
    }
  };

  const handleAddressProof = (event) => {
    console.log(event.target.files[0], "address proof");
    if (event.target.files && event.target.files[0]) {
      setAddressProof(event.target.files[0]);
    }
  };

  const handlePaymentProof = (event) => {
    console.log(event.target.files[0], "payment proof");
    if (event.target.files && event.target.files[0]) {
      setPaymentProof(event.target.files[0]);
    }
  };
  // ================================================================================

  const [checkUpload, setCheckUpload] = useState(0);
  let savedImages = [];

  const handleSubmit = async () => {
    setFormStep(formStep + 1);
    const formData = new FormData();
    formData.append("selectedFile", idFile);
    await axios({
      method: "post",
      url: `https://futurecity.majhailcollection.in/api/upload`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + cookies.get("token"),
      },
    }).then(async (fileData) => {
      console.log(fileData);
      savedImages.push(fileData.data.data.file);
      setCheckUpload(1);
    });

    const formData1 = new FormData();
    formData1.append("selectedFile", bankStatementFile);
    await axios({
      method: "post",
      url: `https://futurecity.majhailcollection.in/api/upload`,
      data: formData1,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + cookies.get("token"),
      },
    }).then(async (fileData) => {
      console.log(fileData);
      savedImages.push(fileData.data.data.file);
    });

    const formData2 = new FormData();
    formData2.append("selectedFile", salarySlip);
    await axios({
      method: "post",
      url: `https://futurecity.majhailcollection.in/api/upload`,
      data: formData2,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + cookies.get("token"),
      },
    }).then(async (fileData) => {
      console.log(fileData);
      savedImages.push(fileData.data.data.file);
      setCheckUpload(3);
    });

    const formData3 = new FormData();
    formData3.append("selectedFile", addressProof);
    await axios({
      method: "post",
      url: `https://futurecity.majhailcollection.in/api/upload`,
      data: formData3,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + cookies.get("token"),
      },
    }).then(async (fileData) => {
      console.log(fileData);
      savedImages.push(fileData.data.data.file);
      setCheckUpload(4);
    });

    const formData4 = new FormData();
    formData4.append("selectedFile", paymentProof);
    await axios({
      method: "post",
      url: `https://futurecity.majhailcollection.in/api/upload`,
      data: formData4,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + cookies.get("token"),
      },
    }).then(async (fileData) => {
      console.log(fileData);
      savedImages.push(fileData.data.data.file);
      setCheckUpload(5);
    });

    const applicationData = {
      personalDetails: {
        firstName: firstName,
        lastName: lastName,
        saIDNumber: sidNo,
        nonSaIDNumber: nonsidNo,
        idNumber: passport,
        dateOfBirth: dob,
        maritialStatus: marital,
        disability: disability,
        address: address,
        city: city,
        state: region,
        postalCode: zip,
      },
      bankDetails: {
        bankName: bank,
        branchCode: branch,
        accountType: acType,
        accountNumber: acNumber,
      },
      contactInfo: {
        emailAddress: email,
        contactNumber: contact,
        alternativeContactNumber: altContact,
      },
      employmentInfo: {
        occupation: occupation,
        employer: employer,
        employerContactNumber: employerContact,
        totalIncome: totalIncome,
        totalExpense: totalExpances,
      },
      emergencyContactInfo: {
        nextOfKin: nxtKin,
        nextOfKinContact: kinContact,
      },
      documents: {
        idDocument: savedImages[0] ?? "",
        threeMonthsBankStatement: savedImages[1] ?? "",
        threeMonthsSalarySlip: savedImages[2] ?? "",
        addressProof: savedImages[3] ?? "",
        paymentProof: savedImages[4] ?? "",
      },
      complexId: 1,
    };
    await axios
      .post(
        "https://futurecity.majhailcollection.in/api/createApplication",
        applicationData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: cookies.get("token"),
          },
        }
      )
      .then((res) => {
        console.log(res, "res data after file uploaded and data uploaded");
        if (res?.data?.status === 200) {
          navigate("/payment");
        }
        console.log(res, "submitted the application form");
      });
  };
  return (
    <>
      <MenuAppBar />
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Tenancy Application</h4>
          </div>
        </div>

        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="steps">
                <div className="stepsBulletsDone">1</div> &nbsp; Personal Info.
                <p>_______________</p>
                <div
                  className={formStep > 1 ? "stepsBulletsDone" : "stepsBullets"}
                >
                  2
                </div>{" "}
                &nbsp; Contact Info.
                <p>________________</p>
                <div
                  className={formStep > 2 ? "stepsBulletsDone" : "stepsBullets"}
                >
                  3
                </div>{" "}
                &nbsp; Employement Info.
                <p>________________</p>
                <div
                  className={formStep > 3 ? "stepsBulletsDone" : "stepsBullets"}
                >
                  4
                </div>{" "}
                &nbsp; Employement Contact Info.
                <p>________________</p>
                <div
                  className={formStep > 4 ? "stepsBulletsDone" : "stepsBullets"}
                >
                  5
                </div>{" "}
                &nbsp; Upload Documents
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="row">
          <div className="col" style={{ bacground: "red" }}>
            <div
              style={{
                width: "90vw",
                height: "200px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="ApplicationDataContainer shadow">
                <img
                  src={housing?.complexImages[0]}
                  style={{ height: "200px", padding: "10px" }}
                />
                <div className="HOusingContent">
                  <h3>{housing?.complexType}</h3>
                  <h6>{housing?.name}</h6>
                  <p>{housing?.region}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FORM ONE COMES  */}
        {formStep === 1 ? (
          <>
            <br />
            <div
              className="container formData"
              style={{ border: "1px solid #dfdfdf", textAlign: "left" }}
            >
              <br />
              <h4>Personal Info</h4>
              <br />
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    {/* <label for="exampleFormControlInput1" class="form-label">
                      First Name
                    </label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    {/* <label for="exampleFormControlInput1" class="form-label">
                      Last Name
                    </label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="said"
                      checked
                      onChange={(e) => {
                        setSidNo(true);
                        setNonSidNo(false);
                      }}
                    />
                    <label className="form-check-label" for="said">
                      Non-SA ID Number/Passport Number
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="passport"
                      onChange={(e) => {
                        setNonSidNo(true);
                        setSidNo(false);
                      }}
                    />
                    <label className="form-check-label" for="passport">
                      Non-SA ID Number/Passport Number
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    {/* <label for="exampleFormControlInput1" class="form-label">
                      Passport Number
                    </label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Passport Number"
                      onChange={(e) => {
                        setPassport(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    {/* <label for="exampleFormControlInput1" class="form-label">
                      DOB
                    </label> */}
                    <input
                      type="date"
                      className="form-control"
                      placeholder="DOB"
                      onChange={(e) => {
                        setDob(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    {/* <label for="exampleFormControlInput1" class="form-label">
                      Marital Status
                    </label> */}
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => {
                        setMarital(e.target.value);
                      }}
                    >
                      <option selected>Marital Status</option>
                      <option value="Married">Married</option>
                      <option value="Unmarried">Unmarried</option>
                      <option value="Separated">Separated</option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    {/* <label for="exampleFormControlInput1" class="form-label">
                      Disability
                    </label> */}
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => {
                        setDisability(e.target.value);
                      }}
                    >
                      <option selected>Disability</option>
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    {/* <label for="exampleFormControlInput1" class="form-label">
                      Address
                    </label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    {/* <label for="exampleFormControlInput1" class="form-label">
                      City
                    </label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    {/* <label for="exampleFormControlInput1" class="form-label">
                      State/Provinance/Region
                    </label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State/Provinance/Region"
                      onChange={(e) => {
                        setRegion(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    {/* <label for="exampleFormControlInput1" class="form-label">
                      Zip/Postal Code
                    </label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zip/Postal Code"
                      onChange={(e) => {
                        setZip(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col"></div>
              </div>
            </div>

            <br />
            <br />
            <div
              className="container formData"
              style={{ border: "1px solid #dfdfdf", textAlign: "left" }}
            >
              <br />
              <h4>Banking Details</h4>
              <br />
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bank Name"
                      onChange={(e) => {
                        setBank(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Branch Code"
                      onChange={(e) => {
                        setBranch(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Account Type"
                      onChange={(e) => {
                        setAcType(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Account Number"
                      onChange={(e) => {
                        setAcNumber(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3 nextBackButton">
                <button className="btn btn-primary">Back</button>
                &nbsp;&nbsp;
                <button className="btn btn-primary" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {/* FORM ONE ENDS */}

        {/* FORM TWO COMES  */}
        {formStep === 2 ? (
          <>
            <br />
            <br />
            <div
              className="container formData"
              style={{ border: "1px solid #dfdfdf", textAlign: "left" }}
            >
              <br />
              <h4>Contact Info</h4>
              <br />
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email Address"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Contact Number"
                      onChange={(e) => {
                        setContact(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Alterntive Contact Number"
                      onChange={(e) => {
                        setAltContact(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3 nextBackButton">
                <button className="btn btn-primary" onClick={handleBack}>
                  Back
                </button>
                &nbsp;&nbsp;
                <button className="btn btn-primary" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {/* FORM TWO ENDS */}

        {/* FORM THREE COMES  */}
        {formStep === 3 ? (
          <>
            <br />
            <br />
            <div
              className="container formData"
              style={{ border: "1px solid #dfdfdf", textAlign: "left" }}
            >
              <br />
              <h4>Employment Info</h4>
              <br />
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Occupation"
                      onChange={(e) => {
                        setOccupation(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Employer"
                      onChange={(e) => {
                        setEmployer(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Employer Contact Number"
                      onChange={(e) => {
                        setEmployerContact(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Total Income"
                      onChange={(e) => {
                        setTotalIncome(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Total Expenses"
                      onChange={(e) => {
                        setTotalExpances(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3 nextBackButton">
                <button className="btn btn-primary" onClick={handleBack}>
                  Back
                </button>
                &nbsp;&nbsp;
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    console.log({ totalIncome });
                    if (
                      Number(totalIncome) > 22000 ||
                      Number(totalIncome) < 1850
                    ) {
                      swal(
                        "Opps!",
                        "Total Income should be within R 1850 to R 22000",
                        "error"
                      );
                    } else {
                      handleNext();
                    }
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {/* FORM THREE ENDS */}

        {/* FORM FOUR COMES  */}
        {formStep === 4 ? (
          <>
            <br />
            <br />
            <div
              className="container formData"
              style={{ border: "1px solid #dfdfdf", textAlign: "left" }}
            >
              <br />
              <h4>Emergency Contact Info</h4>
              <br />
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name of Kin"
                      onChange={(e) => {
                        setNxtKin(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Next of Kin Contact"
                      onChange={(e) => {
                        setKinContact(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3 nextBackButton">
                <button className="btn btn-primary" onClick={handleBack}>
                  Back
                </button>
                &nbsp;&nbsp;
                <button className="btn btn-primary" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {/* FORM FOUR ENDS */}

        {/* FORM FIVE COMES  */}
        {formStep === 5 ? (
          <>
            <br />
            <br />
            <div
              className="container formData"
              style={{ border: "1px solid #dfdfdf", textAlign: "left" }}
            >
              <br />
              <h4>Upload Documents</h4>
              <br />
              <div className="row">
                <div className="col">
                  <div className="fileUpload form-control">
                    <label className="btn btn-primary" for="inputTag">
                      Id File
                      <input
                        id="inputTag"
                        type="file"
                        onChange={handleIdFile}
                      />
                    </label>
                    <label className="selectedFilename">
                      {idFile ? idFile.name : "choose file..."}
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="fileUpload form-control">
                    <label className="btn btn-primary" for="inputTag1">
                      Bank Statement
                      <input
                        id="inputTag1"
                        type="file"
                        onChange={handleBankStatementFile}
                      />
                    </label>
                    <label className="selectedFilename">
                      {bankStatementFile
                        ? bankStatementFile.name
                        : "choose file..."}
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="fileUpload form-control">
                    <label className="btn btn-primary" for="inputTag2">
                      Salary Slip
                      <input
                        id="inputTag2"
                        type="file"
                        onChange={handleSalarySlip}
                      />
                    </label>
                    <label className="selectedFilename">
                      {salarySlip ? salarySlip.name : "choose file..."}
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="fileUpload form-control">
                    <label className="btn btn-primary" for="inputTag3">
                      Address Proof
                      <input
                        id="inputTag3"
                        type="file"
                        onChange={handleAddressProof}
                      />
                    </label>
                    <label className="selectedFilename">
                      {addressProof ? addressProof.name : "choose file..."}
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="fileUpload form-control">
                    <label className="btn btn-primary" for="inputTag4">
                      Payment Proof
                      <input
                        id="inputTag4"
                        type="file"
                        onChange={handlePaymentProof}
                      />
                    </label>
                    <label className="selectedFilename">
                      {paymentProof ? paymentProof.name : "choose file..."}
                    </label>
                  </div>
                </div>
              </div>

              <div className="mb-3 nextBackButton">
                <button className="btn btn-primary" onClick={handleBack}>
                  Back
                </button>
                &nbsp;&nbsp;
                <button className="btn btn-primary" onClick={handleSubmit}>
                  {/* <button className="btn btn-primary" onClick={handleNext}> */}
                  Submit
                </button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {/* FORM FIVE ENDS */}
        {/* UPLOADING LOADER STARTS */}
        {formStep === 6 ? (
          <>
            <UploaderProgress
              dataValue={
                checkUpload === 0
                  ? "Uploading Image 1"
                  : checkUpload === 1
                  ? "Uploading Image 2"
                  : checkUpload === 2
                  ? "Uploading Image 3"
                  : checkUpload === 3
                  ? "Uploading Image 4"
                  : "Finalizing Application...."
              }
            />
          </>
        ) : (
          ""
        )}
        {/* UPLOADING LOADER ENDS */}
        <br />
        <br />
      </div>
    </>
  );
};
