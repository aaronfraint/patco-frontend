import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { setSelectedDirection } from "../../store/appSlice";

function SelectDirection() {
  const selectedDirection = useSelector((state) => state.app.selectedDirection);
  const dispatch = useDispatch();

  function handleChange(e) {
    console.log(e);
    dispatch(setSelectedDirection(e.target.value));
  }

  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">Heading</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedDirection}
        label="Heading"
        onChange={handleChange}
      >
        <MenuItem value={"wb"}>Westbound</MenuItem>
        <MenuItem value={"eb"}>Eastbound</MenuItem>
      </Select>
    </FormControl>
  );
}

export { SelectDirection };
