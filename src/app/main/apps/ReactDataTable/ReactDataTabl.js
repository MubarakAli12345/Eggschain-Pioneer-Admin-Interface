import React from "react";
import { Card, CardContent, LinearProgress } from "@material-ui/core";
import ReactDataTable from "@ashvin27/react-datatable";
import "./ReactDataRabl.css";
function ReactDataTabl(props) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="scrollerme reset-this">
            <ReactDataTable records={props.records} columns={props.columns} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReactDataTabl;
