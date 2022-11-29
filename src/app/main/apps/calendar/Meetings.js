import React, { useEffect, useRef, useState } from "react";
import { FusePageSimple } from "@fuse";
import Grid from "@material-ui/core/Grid";
import MeetingCard from "./MeetingCard";
import MeetingsHeader from "./MeetingsHeader";
import MeetingsSideBarContent from "./MeetingsSideBarContent";
import withReducer from "app/store/withReducer";
import { useDispatch, useSelector } from "react-redux";
import reducer from "./store/reducers";
import axios from "axios";
import { API_BASE_URL } from "app/main/api-config/api";
import { FuseLoading } from "@fuse";
import _ from "lodash";
import user from "app/auth/store/reducers/user.reducer";
import apiService from "../../../helper/apiService";

function Meetings(props) {
  const { location } = props;
  const pageLayout = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [MeetingsData, setMeetingsData] = useState(null);
  const [Initiatives, setInitiatives] = useState(null);
  const [reload, setReload] = useState(true);
  const [status, setStatus] = useState("calendar");
  const [searchParams, setSearchParams] = useState(
    location.state ? Object.assign(location.state) : null
  );
  console.log("Meeting ke search params", searchParams);
  const userData = useSelector(({ auth }) => auth.user.data);

  const [searchText, setSearchText] = useState("");
  console.log("Meetings ke andar wala mawaad", props.location);
  const handleReload = () => {
    setReload(!reload);
  };
  const handleStatus = (value) => {
    setStatus(value);
  };
  const handlesearchParams = (value) => {
    setSearchParams(value);
  };

  const handleSearchText = (value) => {
    setSearchText(value);
  };
  const searchMeetings = async () => {
    setIsLoading(true);
    let meetings;
    // meetings = await axios
    //   .post(
    //     `${API_BASE_URL}meetings/searchMeetings`,
    //     _.merge(searchParams, {
    //       title: searchText,
    //       email: userData.email,
    //     })
    //   )
    //   .then((response) => {
    //     setIsLoading(false);
    //     return response.data;
    //   });

    meetings = await apiService.postApi(
      `${API_BASE_URL}meetings/searchMeetings`,
      _.merge(searchParams, {
        title: searchText,
        email: userData.email,
      })
    );
    setIsLoading(false);
    setMeetingsData(meetings);
    console.log(MeetingsData);

    let initiatives;
    setIsLoading(true);
    // initiatives = await axios
    //   .post(`${API_BASE_URL}initiative/searchInitiatives`, {
    //     title: "",
    //     email: userData.email,
    //   })
    //   .then((response) => {
    //     setIsLoading(false);
    //     return response.data;
    //   });

    initiatives = await apiService.postApi(
      `${API_BASE_URL}initiative/searchInitiatives`,
      {
        title: "",
        email: userData.email,
      }
    );
    setIsLoading(false);
    initiatives = initiatives.filter((init) => init.host == userData.email);
    setInitiatives(initiatives);
  };

  useEffect(() => {
    searchMeetings();
  }, [searchParams, status, searchText, reload]);
  // alert("searchParams");
  console.log("searchParams", searchParams);
  return (
    <FusePageSimple
      classes={{
        contentWrapper: "p-0 sm:p-24 pb-80 sm:pb-80 h-full",
        content: "flex flex-col h-full",
        leftSidebar: "w-256 border-0",
        header: "min-h-72 h-72 sm:h-136 sm:min-h-136",
      }}
      header={<MeetingsHeader handleSearchText={handleSearchText} {...props} />}
      content={
        <Grid
          style={{ marginTop: "10px" }}
          container
          direction="column"
          alignItems="center"
          justify="center"
        >
          {isLoading && (
            <div style={{ marginTop: "120px" }}>
              <FuseLoading />
            </div>
          )}
          {!isLoading && (
            <MeetingCard
              {...props}
              initiatives={Initiatives}
              initiativeTitle={
                location && location.state && location.state.initativeTitle
              }
              MeetingsData={MeetingsData}
              handleStatus={handleStatus}
              handleReload={handleReload}
            />
          )}
        </Grid>
      }
      leftSidebarContent={
        <div>
          {!isLoading && (
            <MeetingsSideBarContent
              initiatives={Initiatives}
              handleStatus={handleStatus}
              handlesearchParams={handlesearchParams}
              handleReload={handleReload}
              searchParams={searchParams}
            />
          )}
        </div>
      }
      sidebarInner
      ref={pageLayout}
      innerScroll
    />
  );
}
export default withReducer("Meetings", reducer)(Meetings);
