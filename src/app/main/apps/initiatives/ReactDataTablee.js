import React from "react";
import { Card, CardContent, LinearProgress } from "@material-ui/core";
import ReactDataTable from "@ashvin27/react-datatable";

function ReactDataTablee(props) {
  return (
    <>
      <Card>
        <CardContent>
          <div className="scrollerme">
            <ReactDataTable records={props.records} columns={props.columns} />
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default ReactDataTablee;
