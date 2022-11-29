import React, { useEffect, useRef, useState } from "react";
import { FusePageSimple } from "@fuse";
import Grid from "@material-ui/core/Grid";
import InitiativeCard from "./InitiativeCard";
import InitiativeHeader from "./InitiativeHeader";
import InitiativeSideBarContent from "./InitiativeSideBarContent";
import withReducer from "app/store/withReducer";
import { useDispatch, useSelector } from "react-redux";
import reducer from "./store/reducers";
import axios from "axios";
import { API_BASE_URL } from "app/main/api-config/api";

import { FuseLoading } from "@fuse";
import { ToastContainer, toast } from "react-toastify";
import _ from "lodash";
import { createBrowserHistory } from "history";
import apiService from "../../../helper/apiService";
import "react-toastify/dist/ReactToastify.css";
import {
  Card,
  CardContent,
  Container,
  Paper,
  Typography,
  Fade,
} from "@material-ui/core";
import Chart from "react-apexcharts";
// import { useTable, UseTable } from "react-table";
import ReactDataTable from "@ashvin27/react-datatable";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase/app";
function Initiatives(props) {
  const [totalMembers, setTotalMembers] = useState("");
  const [totalUsers, setTotalUsers] = useState("");
  const [totalClinics, setTotalClinics] = useState("");
  const [totalData, setTotalData] = useState("");
  const [state, setState] = useState({
    options: {
      labels: ["User", "Clinic"],
      colors: ["#808080", "#00008B"],
      background_Color: ["red", "yellow"],
      fill: {
        colors: ["#808080", "#00008B"],
      },
    },
    series: [],
  });
  const [newSeries, setNewSeries] = useState([]);
  useEffect(async () => {
    let data;
    data = await apiService.getApi(`${API_BASE_URL}auth/getUsers`);
    console.log("All Users", data);
    setTotalMembers(data.length);
    setTotalData(data);
    //filter all users
    let filteredUsers = data.filter((user) => user.role == "user");
    console.log("Users", filteredUsers);
    setTotalUsers(filteredUsers.length);

    //filter all clinics

    let filteredClinics = data.filter((user) => user.role == "clinic");
    setTotalClinics(filteredClinics.length);

    setNewSeries([filteredUsers.length, filteredClinics.length]);
  }, 2000);
  console.log("State", state);

  const welcome_heading = {
    marginTop: "15px",
    textAlign: "center",
  };

  const container = {
    marginTop: "40px",
  };
  const card = {
    height: "250px",
    width: "90%",
  };
  const h6 = {};
  const card_flex = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "20px",
  };
  const marginTop25 = {
    marginTop: "25px",
    fontWeight: "bold",
  };
  const chart_grid = {
    marginTop: "40px",
  };
  const marginTop40 = {
    marginTop: "40px",
  };
  // React Data Table Code
  const editRecord = (record) => {
    console.log("Recorddddddddddddd", record);
    //   firebase.auth().updateUser(record.firebaseId, {
    //     disabled: true
    // });
    console.log("Firebase", firebase);
  };
  const column = [
    {
      key: "fullName",
      text: "Full Name",
      sortable: true,
    },
    {
      key: "email",
      text: "Email",
    },
    {
      key: "phoneNumber",
      text: "Phone Number",
    },
    {
      key: "role",
      text: "Role",
    },
    {
      key: "action",
      text: "Action",
      className: "action",
      width: 100,
      align: "left",
      sortable: false,
      cell: (record) => {
        return (
          <>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => editRecord(record)}
              style={{ marginRight: "5px" }}
            >
              Disable
            </button>
          </>
        );
      },
    },
  ];
  const config = {
    page_size: 10,
    length_menu: [10, 20, 50],
    button: {
      excel: true,
      print: true,
    },
  };

  return (
    <>
      {/* <h1 style={welcome_heading}>Welcome to Admin Portal</h1>
      <div>
        <h1>Length is {lengthh}</h1>
      </div> */}
      <Container style={container}>
        <Grid container spacing={2}>
          <Grid item lg={3} md={3} sm={3} xs={4}>
            <Card style={card}>
              <div style={card_flex}>
                <Typography style={h6} variant="h6">
                  Total Members{" "}
                </Typography>
                <Typography style={marginTop25} variant="h2">
                  {totalMembers}
                </Typography>
              </div>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={4}>
            <Card style={card}>
              <div style={card_flex}>
                <Typography style={h6} variant="h6">
                  Users{" "}
                </Typography>
                <Typography style={marginTop25} variant="h2">
                  {totalUsers}
                </Typography>
              </div>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={4}>
            <Card style={card}>
              <div style={card_flex}>
                <Typography style={h6} variant="h6">
                  Clinics{" "}
                </Typography>
                <Typography style={marginTop25} variant="h2">
                  {totalClinics}
                </Typography>
              </div>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={4}>
            <Chart
              options={state.options}
              series={newSeries}
              type="donut"
              width="380"
            />
          </Grid>
        </Grid>
        {/* install bootstrap before use for better styling */}
        {/* React datatable styling is in index.css file that is global file */}
        <div className="card animated fadeIn" style={marginTop40}>
          <div className="card-body">
            <div className="scrollme col-12">
              {/* to change styling go to index.css */}
              <ReactDataTable records={totalData} columns={column} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
export default withReducer("Initiatives", reducer)(Initiatives);
