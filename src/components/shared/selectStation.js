import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { setSelectedStation } from "../../store/appSlice";

function SelectStation() {
  const selectedStation = useSelector((state) => state.app.selectedStation);
  const dispatch = useDispatch();

  // const [selectedStation, setSelectedStation] = useState("");

  function handleChange(e) {
    console.log(e);
    dispatch(setSelectedStation(e.target.value));
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Select a station</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedStation}
        label="Select a station"
        onChange={handleChange}
      >
        <MenuItem value={"15_16th_and_locust"}>15/16th & Locust</MenuItem>
        <MenuItem value={"12_13th_and_locust"}>12/13th & Locust</MenuItem>
        <MenuItem value={"9_10th_and_locust"}>9/10th & Locust</MenuItem>
        <MenuItem value={"8th_and_market"}>8th & Market</MenuItem>
        <MenuItem value={"city_hall"}>City Hall</MenuItem>
        <MenuItem value={"broadway"}>Broadway</MenuItem>
        <MenuItem value={"ferry_ave"}>Ferry Ave</MenuItem>
        <MenuItem value={"collingswood"}>Collingswood</MenuItem>
        <MenuItem value={"westmont"}>Westmont</MenuItem>
        <MenuItem value={"haddonfield"}>Haddonfield</MenuItem>
        <MenuItem value={"woodcrest"}>Woodcrest</MenuItem>
        <MenuItem value={"ashland"}>Ashland</MenuItem>
        <MenuItem value={"lindenwold"}>Lindenwold</MenuItem>
      </Select>
    </FormControl>
  );
}

export { SelectStation };
