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
import "react-toastify/dist/ReactToastify.css";
import _ from "lodash";
import { createBrowserHistory } from "history";
import apiService from "../../../helper/apiService";
import firebaseService from "app/services/firebaseService";
import { getAuth, updateUser } from "firebase/auth";
import ReactDataTabl from "../ReactDataTable/ReactDataTabl";
import {
  Card,
  CardContent,
  Container,
  Paper,
  Typography,
  Fade,
  CircularProgress,
  LinearProgress,
} from "@material-ui/core";
import Chart from "react-apexcharts";
// import { useTable, UseTable } from "react-table";

import "./Initiatives.css";
import {
  FcApprove,
  FcConferenceCall,
  FcVoicePresentation,
  FcCancel,
} from "react-icons/fc";
// import { getAuth, signInWithCustomToken } from "firebase/auth";
import Approved from "../../../../images/approved.PNG";
import Rejected from "../../../../images/rejected.PNG";
import ReactDataTablee from "./ReactDataTablee";

function Initiatives(props) {
  const [totalMembers, setTotalMembers] = useState("");
  const [totalUsers, setTotalUsers] = useState("");
  const [totalClinics, setTotalClinics] = useState("");
  const [totalData, setTotalData] = useState([]);
  const [totalDataWithoutSuper, setTotalDataWithoutSuper] = useState([]);
  const [state, setState] = useState({
    options: {
      labels: ["Users", "Approvers"],
      colors: ["#00008B", "#3C4252"],
      background_Color: ["red", "yellow"],
      fill: {
        colors: ["#00008B", "#3C4252"],
      },
    },
    series: [],
  });
  const [newSeries, setNewSeries] = useState([]);
  const [disablee, setDisable] = useState(false);
  const [ind, setInd] = useState(1);
  const [loader, setLoader] = useState(false);
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");
  const [load, setLoad] = useState(false);
  const [mainLoader, setMainLoader] = useState(false);
  const userData = useSelector(({ auth }) => auth.user.data);
  useEffect(() => {
    // console.log("USerdata@@@@@@@@@@@", userData.role);
    //set token
    // setLoad(true);
    // setToken(userData.token);
    // setRole(userData.role);
    // setTimeout(() => {
    //   setLoad(false);
    // }, 2000);
    // getSignupUser();
    fetchUsers();
  }, []);

  // console.log("State", state);
  const fetchUsers = async () => {
    setMainLoader(true);
    let data;
    data = await apiService.getApi(`${API_BASE_URL}auth/getUsers`);
    // console.log("All Users", data);
    let filterData = data.filter((fil) => {
      return fil.role != "superAdmin";
    });
    // console.log("Without Super Admin", filterData);
    console.log("Data", filterData);
    setTotalDataWithoutSuper(filterData);
    setTotalMembers(data.length);
    setTotalData(data);

    // setDisable(data.isUserDisabled);/
    //filter all users
    let filteredUsers = data.filter((user) => user.role == "user");
    // console.log("Users", filteredUsers);
    setTotalUsers(filteredUsers.length);

    //filter all clinics

    let filteredClinics = data.filter((user) => user.role == "clinic");
    setTotalClinics(filteredClinics.length);

    setNewSeries([filteredUsers.length, filteredClinics.length]);
    setMainLoader(false);
  };

  const welcome_heading = {
    marginTop: "15px",
    textAlign: "center",
  };

  const container = {
    marginTop: "40px",
  };
  const card = {
    height: "209px",
    width: "230px",
    marginTop: "11px",
  };
  const h6 = {
    fontSize: "2.3rem",
  };
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
  const margin_right0 = {
    marginRight: "0px",
  };
  const blueColor = {
    backgroundColor: "#3C4252",
    borderColor: "#3C4252",
  };
  const enableColor = {
    backgroundColor: "#777E86",
    borderColor: "#777E86",
  };
  const total_members_icon = {
    fontSize: "40px",
    marginLeft: "15px",
  };
  const unautorizedd_container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "90vh",
  };
  const unauthorized_heading = {
    fontWeight: "bold",
  };
  const unauthorized_icon = {
    position: "relative",
    left: "11px",
    bottom: "2px",
    fontSize: "40px",
  };
  const getSignupUser = async () => {
    setLoad(true);
    let use;
    use = await apiService.getApi(
      `${API_BASE_URL}auth/getUser/${userData.firebaseId}`
    );
    setRole(use.role);
    setToken(use.token);
    //  clinicFirebaseId=use.firebaseId
    // console.log("Sign up", clinicFirebaseId);
    setLoad(false);
  };
  // React Data Table Code
  const btnClassName = "btn btn-primary btn-sm";

  /**
   *
   * @param {*in record papram we have complete record of individual row} record
   * @param {* it is the index of each row} i
   */
  const editRecord = async (record, i, btnClassName) => {
    console.log("Disableeeeee or enable", totalData[i].isUserDisabled);
    // console.log("Recorddddddddddddd", record);
    // console.log("Index", i);
    // setInd(i);
    // firebase.auth().updateUser(record.firebaseId, {
    //   disabled: true,
    // });
    // console.log("Firebase", firebase);
    // console.log("Firebase Service", firebaseService);
    console.log("Ii", i);
    if (btnClassName === "btn btn-primary btn-sm") {
      let put = apiService
        .putApi(`${API_BASE_URL}auth/disable`, {
          // isUserDisabled: true,
          firebaseId: record.firebaseId,
          isUserDisabled: true,
        })
        .then(async (res) => {
          setLoader(true);
          let data;
          // console.log("Successfully disable user", res);

          setInd(i);
          data = await apiService.getApi(`${API_BASE_URL}auth/getUsers`);
          // console.log("All Users", data);
          let filterData = data.filter((fil) => {
            return fil.role != "superAdmin";
          });
          // console.log("Without Super Admin", filterData);
          console.log("Data", filterData);
          setTotalDataWithoutSuper(filterData);
          setDisable(true);
          setLoader(false);
          toast.success(
            `${totalDataWithoutSuper[i].fullName} Disabled Successfully`,
            {
              position: "bottom-right",
            }
          );
        })
        .catch((err) => {
          console.log("Not disable user", err);
          toast.error(`Didn't Disable ${totalDataWithoutSuper[i].fullName}`, {
            position: "bottom-right",
          });
        });
    }
  };
  /**
   *
   * @param {*in record papram we have complete record of individual row} record
   * @param {* it is the index of each row} i
   */
  const editRecordEnable = async (record, i, btnClassName) => {
    console.log("enable dis", totalData[i].isUserDisabled);
    if (btnClassName === "btn btn-primary btn-sm") {
      let put = apiService
        .putApi(`${API_BASE_URL}auth/enable`, {
          //
          firebaseId: record.firebaseId,
          isUserDisabled: false,
        })
        .then(async (res) => {
          setLoader(true);
          let data;
          console.log("Successfully disable user", record, res);

          setInd(i);
          data = await apiService.getApi(`${API_BASE_URL}auth/getUsers`);
          // console.log("All Users", data);
          let filterData = data.filter((fil) => {
            return fil.role != "superAdmin";
          });
          // console.log("Without Super Admin", filterData);
          console.log("Data", filterData);
          setTotalDataWithoutSuper(filterData);
          setDisable(false);
          setLoader(false);
          toast.success(
            `${totalDataWithoutSuper[i].fullName} Enabled Successfully`,
            {
              position: "bottom-right",
            }
          );
        })
        .catch((err) => {
          toast.error(`Didn't Disable ${totalDataWithoutSuper[i].fullName}`, {
            position: "bottom-right",
          });
        });
    }
  };

  const adminColumn = [
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
      key: "date",
      text: "Joined Date",
    },
    {
      key: "time",
      text: "Joined Time",
    },
    {
      key: "role",
      text: "Role",
      sortable: true,
    },
  ];

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
      key: "date",
      text: "Joined Date",
    },
    {
      key: "time",
      text: "Joined Time",
    },
    {
      key: "role",
      text: "Role",
      sortable: true,
    },
    {
      key: "action",
      text: "Action",
      className: "action",
      width: 100,
      align: "left",
      sortable: false,
      cell: (record, i) => {
        console.log("Recordddd", record);

        return (
          <>
            {totalDataWithoutSuper[i].isUserDisabled == false && !loader ? (
              <button
                className={btnClassName}
                style={blueColor}
                itemID={i}
                onClick={() => editRecord(record, i, btnClassName)}
              >
                Disable
              </button>
            ) : totalDataWithoutSuper[i].isUserDisabled == true && !loader ? (
              <button
                className={btnClassName}
                onClick={() => editRecordEnable(record, i, btnClassName)}
                style={enableColor}
                itemID={i}
              >
                Enable
              </button>
            ) : (
              <button
                className={btnClassName}
                onClick={() => editRecord(record, i, btnClassName)}
                style={blueColor}
                itemID={i}
              >
                Disable
              </button>
            )}

            {/* {disablee == false ? (
              <button
                className="btn btn-primary btn-sm"
                onClick={() => editRecord(record)}
              >
                Disable
              </button>
            ) : (
              disablee ==
              true(
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => editRecordEnable(record)}
                >
                  Enable
                </button>
              )
            )} */}
          </>
        );
      },
    },
    {
      key: "status",
      text: "Status",
      cell: (record, i) => {
        if (totalDataWithoutSuper[i].isUserDisabled === true) {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "5px",
                marginRight: "1px",
              }}
            >
              <img
                style={{
                  width: "20px",
                }}
                src={Rejected}
              />
            </div>
          );
        }
        if (totalDataWithoutSuper[i].isUserDisabled === false) {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "5px",
                marginRight: "1px",
              }}
            >
              <img
                style={{
                  width: "20px",
                }}
                src={Approved}
              />
            </div>
          );
        }
      },
    },
  ];

  return (
    <>
      <ToastContainer style={{ fontSize: "15px" }} />

      {/* {console.log("Token Exist", userData.token)}
      {console.log("Check Cond", userData.token === userData.token)} */}
      {(userData.role == "admin" || userData.role == "superAdmin") &&
      userData.token === userData.token &&
      !mainLoader ? (
        <Container style={container}>
          <Grid container spacing={2}>
            <Grid item lg={3} md={3} sm={3} xs={4}>
              <Card style={card} className="card">
                <div style={card_flex}>
                  <Typography style={h6} variant="h6" className="total_members">
                    Total Members{" "}
                  </Typography>
                  <Typography
                    style={marginTop25}
                    variant="h2"
                    className="total_member_icon"
                  >
                    {totalMembers}
                    {/* <SupervisedUserCircle style={total_members_icon} /> */}
                    <FcConferenceCall style={total_members_icon} />
                  </Typography>
                </div>
              </Card>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={4}>
              <Card style={card} className="card">
                <div style={card_flex}>
                  <Typography style={h6} variant="h6" className="total_users">
                    Users{" "}
                  </Typography>
                  <Typography
                    style={marginTop25}
                    variant="h2"
                    className="total_user_icon"
                  >
                    {totalUsers}
                    {/* <AccountCircle style={total_members_icon} /> */}
                    <FcVoicePresentation style={total_members_icon} />
                  </Typography>
                </div>
              </Card>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={4}>
              <Card style={card} className="card">
                <div style={card_flex}>
                  <Typography style={h6} variant="h6" className="total_clinics">
                    Approvers{" "}
                  </Typography>
                  <Typography
                    style={marginTop25}
                    variant="h2"
                    className="total_clinic_icons"
                  >
                    {totalClinics}
                    {/* <LocalHospital style={total_members_icon} /> */}
                    <FcApprove style={total_members_icon} />
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
                className="chart_container"
              />
            </Grid>
          </Grid>
          {/* install bootstrap before use for better styling */}
          {/* React datatable styling is in index.css file that is global file */}
          {/* <div className="card animated fadeIn" style={marginTop40}>
            <div className="card-body">
              <div className="scrollme col-12">
              
                {!loader ? (
                  <ReactDataTable
                    records={totalDataWithoutSuper}
                    columns={
                      userData.role == "superAdmin" ? column : adminColumn
                    }
                  />
                ) : (
                  <>
                    <LinearProgress color="primary" />
                  
                  </>
                )}
              </div>
            </div>
          </div> */}
          {/* <Card>
            <CardContent>
              <div className="scrollerme">
                {!loader ? (
                  <ReactDataTable
                    records={totalDataWithoutSuper}
                    columns={
                      userData.role == "superAdmin" ? column : adminColumn
                    }
                  />
                ) : (
                  <>
                    <LinearProgress color="primary" />
                
                  </>
                )}
              </div>
            </CardContent>
          </Card> */}
          {!loader ? (
            <ReactDataTabl
              records={totalDataWithoutSuper}
              columns={userData.role == "superAdmin" ? column : adminColumn}
            />
          ) : (
            <LinearProgress />
          )}
        </Container>
      ) : mainLoader == true ? (
        <FuseLoading />
      ) : (
        <>
          <Container>
            <Grid container>
              <Grid item lg={12} sm={12} xs={12} style={unautorizedd_container}>
                <Typography variant="h4" style={unauthorized_heading}>
                  UnAuthorized Access
                  <FcCancel style={unauthorized_icon} />
                </Typography>
                <Typography variant="h5">
                  You don't have access for this Portal
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </>
  );
}
export default withReducer("Initiatives", reducer)(Initiatives);
