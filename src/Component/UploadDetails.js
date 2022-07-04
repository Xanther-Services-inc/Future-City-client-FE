import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button, Link } from "@mui/material";
import AWS from "aws-sdk";
import Cookies from "universal-cookie";
import axios from "axios";
import { useParams } from "react-router-dom";

const BUCKET = "futurecitybucket";
const REGION = "us-east-1";
const ACCESS_KEY = "AKIAVT2GP3LBVPWQVLDE";
const SECRET_ACCESS_KEY = "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";

export default function UploadDetails({
  setUploadDetailsObj,
  draftApplication,
}) {
  const cookies = new Cookies();
  const { applicationIdParams } = useParams();
  const [idFile, setIdFile] = useState(null);
  const [bankStatementFile, setBankStatementFile] = useState(null);
  const [salarySlipFile, setSalarySlipFile] = useState(null);
  const [addressProofFile, setAddressProofFile] = useState(null);
  const [paymentProofFile, setPaymentProofFile] = useState(null);

  const [idUrl, setIdUrl] = React.useState("");
  const [bankStatementUrl, setBankStatementUrl] = React.useState("");
  const [salarySlipUrl, setSalarySlipUrl] = React.useState("");
  const [addressProofUrl, setAddressProofUrl] = React.useState("");
  const [paymentProofUrl, setPaymentProofUrl] = React.useState("");

  const [idFileName, setIdFileName] = useState("");
  const [bankStatementFileName, setBankStatementFileName] = useState("");
  const [salarySlipFileName, setSalarySlipFileName] = useState("");
  const [addressProofFileName, setAddressProofFileName] = useState("");
  const [paymentProofFileName, setPaymentProofFileName] = useState("");
  const [url, setUrl] = useState("");

  const [state, setState] = useState({
    idFileLink: "",
    bankStatementFileLink: "",
    salarySlipFileLink: "",
    addressProofFileLink: "",
    paymentProofFileLink: "",
  });

  AWS.config.update({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
  });

  const myBucket = new AWS.S3({
    params: { Bucket: BUCKET },
    region: REGION,
  });

  const uploadFileHandler = async (file, fileName, id) => {
    const params = {
      ACL: "public-read",
      Body: file,
      Bucket: BUCKET,
      Key: fileName,
    };

    await myBucket
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        console.log(evt);
        // return `https://${params.Bucket}.s3.amazonaws.com/${fileName}`;
      })
      .onAsync("success", (data) => {
        console.log(data);
        setState({
          ...state,
          [id]: `https://${params.Bucket}.s3.amazonaws.com/${fileName}`,
        });
        setUploadDetailsObj({
          ...state,
          [id]: `https://${params.Bucket}.s3.amazonaws.com/${fileName}`,
        });
        setUrl(`https://${params.Bucket}.s3.amazonaws.com/${fileName}`);
      })
      .send((err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
    return url;
  };
  // const uploadfile = async (file, filename, event) => {
  //   const upload = await uploadFileHandler(file, filename);
  //   console.log(upload, event.target.name);
  // };
  console.log(state);
  console.log("hello world", state.idFileLink);
  React.useEffect(() => {
    (async () => {
      const isDraftApplication = await axios.get(
        `https://futurecity.majhailcollection.in/api/getApplicationById?applicationId=${applicationIdParams}`,
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
      setState({
        idFileLink: isDraftApplication.data.data.documents.idFileLink,
        bankStatementFileLink:
          isDraftApplication.data.data.employmentInfo.bankStatementFileLink,
        salarySlipFileLink:
          isDraftApplication.data.data.employmentInfo.salarySlipFileLink,
        addressProofFileLink:
          isDraftApplication.data.data.employmentInfo.addressProofFileLink,
        paymentProofFileLink:
          isDraftApplication.data.data.employmentInfo.paymentProofFileLink,
      });
      setUploadDetailsObj({
        ...state,
      });
      // setDraftApplication(isDraftApplication.data.data);
      console.log(isDraftApplication.data.data);
    })();
  }, []);

  return (
    <React.Fragment style={{ color: "#FAFAFA", justifyContent: "center" }}>
      <Typography variant="h6" gutterBottom textAlign={"left"}>
        Upload documents
      </Typography>
      <>
        <Grid
          container
          spacing={3}
          sx={{
            marginTop: "5px",
            display: "flex",
          }}
        >
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <input
              type="file"
              name={idFileName}
              id="file-upload"
              onChange={(e) => {
                const file = e.target.files[0];
                setIdFile(file);
                setIdFileName(file.name);
                setIdUrl(URL.createObjectURL(file));
              }}
              style={{ display: "none" }}
            />
            <label htmlFor="file-upload">
              {/* <Link href={idUrl} target="_blank"> */}
              <Button
                variant="contained"
                color="error"
                component="span"
                // endIcon={<GetAppIcon />}
              >
                Choose File
              </Button>
              {/* </Link> */}
            </label>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link href={idUrl} target="_blank">
              <Typography variant="h6" gutterBottom>
                {idFileName
                  ? idFileName.slice(0, 8) + "...." + idFileName.slice(-4)
                  : "Choose Id File"}
              </Typography>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              component="span"
              name="idFile"
              id="idFile"
              textContent="idFile"
              // endIcon={<GetAppIcon />}
              onClick={(e) => {
                console.log(e.target.id);
                uploadFileHandler(idFile, idFileName, e.target.id);
              }}
            >
              Upload
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          sx={{
            marginTop: "5px",
            display: "flex",
          }}
        >
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <input
              type="file"
              name={bankStatementFileName}
              id="bank"
              // onChange={handleselectedFile}
              onChange={(e) => {
                console.log(e.target.files[0].name);
                setBankStatementFile(e.target.files[0]);
                setBankStatementFileName(e.target.files[0].name);
                setBankStatementUrl(URL.createObjectURL(e.target.files[0]));
              }}
              style={{ display: "none" }}
            />
            <label htmlFor="bank">
              <Button
                variant="contained"
                color="error"
                component="span"
                // endIcon={<GetAppIcon />}
              >
                Choose File
              </Button>
            </label>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Link href={bankStatementUrl} target="_blank">
              <Typography variant="h6" gutterBottom>
                {bankStatementFileName
                  ? bankStatementFileName.slice(0, 8) +
                    "...." +
                    bankStatementFileName.slice(-4)
                  : "Choose bank statement file"}
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              color="primary"
              component="span"
              id="bankStatement"
              // endIcon={<GetAppIcon />}
              onClick={(e) =>
                uploadFileHandler(
                  bankStatementFile,
                  bankStatementFileName,
                  e.target.id
                )
              }
            >
              Upload
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          sx={{
            marginTop: "5px",
            display: "flex",
          }}
        >
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <input
              type="file"
              name={salarySlipFileName}
              id="salary"
              // onChange={handleselectedFile}
              onChange={(e) => {
                console.log(e.target.files[0].name);
                setSalarySlipFile(e.target.files[0]);
                setSalarySlipFileName(e.target.files[0].name);
                setSalarySlipUrl(URL.createObjectURL(e.target.files[0]));
              }}
              style={{ display: "none" }}
            />
            <label htmlFor="salary">
              <Button
                variant="contained"
                color="error"
                component="span"
                // endIcon={<GetAppIcon />}
              >
                Choose File
              </Button>
            </label>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link href={salarySlipUrl} target="_blank">
              <Typography variant="h6" gutterBottom>
                {salarySlipFileName
                  ? salarySlipFileName.slice(0, 8) +
                    "...." +
                    salarySlipFileName.slice(-4)
                  : "Choose Salary slip"}
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              color="primary"
              id="salarySlip"
              component="span"
              // endIcon={<GetAppIcon />}
              onClick={(e) =>
                uploadFileHandler(
                  salarySlipFile,
                  salarySlipFileName,
                  e.target.id
                )
              }
            >
              Upload
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          sx={{
            marginTop: "5px",
            display: "flex",
          }}
        >
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <input
              type="file"
              name={addressProofFileName}
              id="address"
              // onChange={handleselectedFile}
              onChange={(e) => {
                console.log(e.target.files[0].name);
                setAddressProofFile(e.target.files[0]);
                setAddressProofFileName(e.target.files[0].name);
                setAddressProofUrl(URL.createObjectURL(e.target.files[0]));
              }}
              style={{ display: "none" }}
            />
            <label htmlFor="address">
              <Button
                variant="contained"
                color="error"
                component="span"
                // endIcon={<GetAppIcon />}
              >
                Choose File
              </Button>
            </label>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link href={addressProofUrl} target="_blank">
              <Typography variant="h6" gutterBottom>
                {addressProofFileName
                  ? addressProofFileName.slice(0, 8) +
                    "...." +
                    addressProofFileName.slice(-4)
                  : "Choose address proof file"}
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              color="primary"
              id="addressProof"
              component="span"
              // endIcon={<GetAppIcon />}
              onClick={(e) =>
                uploadFileHandler(
                  addressProofFile,
                  addressProofFileName,
                  e.target.id
                )
              }
            >
              Upload
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          sx={{
            marginTop: "5px",
            display: "flex",
          }}
        >
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <input
              type="file"
              name={paymentProofFileName}
              id="payment"
              // onChange={handleselectedFile}
              onChange={(e) => {
                console.log(e.target.files[0].name);
                setPaymentProofFile(e.target.files[0]);
                setPaymentProofFileName(e.target.files[0].name);
                setPaymentProofUrl(URL.createObjectURL(e.target.files[0]));
              }}
              style={{ display: "none" }}
            />
            <label htmlFor="payment">
              <Button
                variant="contained"
                color="error"
                component="span"
                // endIcon={<GetAppIcon />}
              >
                Choose File
              </Button>
            </label>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link href={paymentProofUrl} target="_blank">
              <Typography variant="h6" gutterBottom>
                {paymentProofFileName
                  ? paymentProofFileName.slice(0, 8) +
                    "...." +
                    paymentProofFileName.slice(-4)
                  : "Choose payment proof file"}
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              color="primary"
              id="paymentProof"
              component="span"
              // endIcon={<GetAppIcon />}
              onClick={(e) =>
                uploadFileHandler(
                  paymentProofFile,
                  paymentProofFileName,
                  e.target.id
                )
              }
            >
              Upload
            </Button>
          </Grid>
        </Grid>
      </>
      <hr
        style={
          {
            //   marginTop: "10px",
          }
        }
      />
    </React.Fragment>
  );
}
