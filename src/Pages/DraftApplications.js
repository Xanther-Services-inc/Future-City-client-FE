import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import MenuAppBar from "../Component/MenuAppBar";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useState } from "react";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    312.44
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574",
    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    100.81
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    654.39
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function DraftApplications() {
  const cookies = new Cookies();
  const [draftApplications, setDraftApplications] = useState([]);
  useEffect(() => {
    (async () => {
      const applicationData = await axios.get(
        "https://futurecity.majhailcollection.in/api/getUserApplicationsByStatus?status=draft",
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
      console.log({ applicationData });
      setDraftApplications(applicationData.data.data);
    })();
  }, []);
  console.log(draftApplications);
  return (
    <React.Fragment>
      <MenuAppBar />
      <h1> Recent orders </h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Complex Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Region</TableCell>
            <TableCell align="right">Application ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {draftApplications.map((draft) => (
            <TableRow
              key={draft.complexId}
              onClick={() => {
                window.location.href = `http://localhost:3000/tenancy/${draft.complexId}/${draft.applicationId}`;
              }}
            >
              <TableCell>{draft.complexId}</TableCell>
              <TableCell>{draft.name}</TableCell>
              <TableCell>{draft.submitStatus}</TableCell>
              <TableCell>{draft.region}</TableCell>
              <TableCell align="right">{draft.applicationId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
