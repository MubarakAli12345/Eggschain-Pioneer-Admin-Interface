import React, { Component, useState } from "react";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Filter } from "@material-ui/icons";
const FilterList = (props) => {
    const {filterValue} =props
  const [Value, setValue] = useState("all");
  let filterVal = "all";
  const handleChangeFilter = (event) => {
    filterVal = event.target.value;
    setValue(event.target.value);
    filterValue(event.target.value)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl
        style={{
          float: "right",
          position: "relative",
          right: "13%",
          width: "20%",
        }}
      >
       
        <InputLabel id="demo-simple-select-label">Filters</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Value}
          label="Filters"
          onChange={handleChangeFilter}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="today">Today</MenuItem>
          <MenuItem value="yestarday">Yesterday</MenuItem>
          <MenuItem value="this-week">This Week</MenuItem>
          <MenuItem value="previous-week">Previous Week</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterList;
