import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Cookies from "universal-cookie";
import { useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import MenuAppBar from "../Component/MenuAppBar";

const columns = [
  { id: "Application ID", label: "Application Id", minWidth: 170 },
  { id: "Name", label: "Name", minWidth: 100 },
  {
    id: "Region",
    label: "Region",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Status",
    label: "Status",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  //   {
  //     id: "density",
  //     label: "Density",
  //     minWidth: 170,
  //     align: "right",
  //     format: (value) => value.toFixed(2),
  //   },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

export default function ApplicationTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const cookies = new Cookies();
  const [applications, setApplications] = React.useState([]);
  useEffect(() => {
    (async () => {
      const applicationData = await axios.get(
        `https://futurecity.majhailcollection.in/api/getUserApplicationsByStatus?status=submitted`,
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
      setApplications(applicationData.data.data);
    })();
  }, []);

  return (
    <>
      <MenuAppBar />
      <h1> Recent orders </h1>
      <Paper
        sx={{
          width: "60%",
          overflow: "hidden",
          margin: "auto",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          marginTop: "10%",
        }}
      >
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Application Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Region</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {applications.map((app, index) => (
                <TableRow key={index}>
                  <TableCell>{app.applicationId}</TableCell>
                  <TableCell>{app.name}</TableCell>
                  <TableCell>{app.region}</TableCell>
                  <TableCell>{app.submitStatus}</TableCell>
                  <Button
                    onClick={() => {
                      window.location.href = `/status/${app.submitStatus}`;
                    }}
                    variant="contained"
                    sx={{ height: "20px" }}
                  >
                    View Status
                  </Button>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={5}
          rowsPerPage={5}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
