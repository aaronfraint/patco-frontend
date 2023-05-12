import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

function SelectStation() {
  const [selectedStation, setSelectedStation] = useState("");

  function handleChange(e) {
    console.log(e);
    setSelectedStation(e.target.value);
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
        <MenuItem value={"15_16th_and_locust"}>15_16th_and_locust</MenuItem>
        <MenuItem value={"12_13th_and_locust"}>12_13th_and_locust</MenuItem>
        <MenuItem value={"9_10th_and_locust"}>9_10th_and_locust</MenuItem>
        <MenuItem value={"8th_and_market"}>8th_and_market</MenuItem>
        <MenuItem value={"city_hall"}>city_hall</MenuItem>
        <MenuItem value={"broadway"}>broadway</MenuItem>
        <MenuItem value={"ferry_ave"}>ferry_ave</MenuItem>
        <MenuItem value={"collingswood"}>collingswood</MenuItem>
        <MenuItem value={"westmont"}>westmont</MenuItem>
        <MenuItem value={"haddonfield"}>haddonfield</MenuItem>
        <MenuItem value={"woodcrest"}>woodcrest</MenuItem>
        <MenuItem value={"ashland"}>ashland</MenuItem>
        <MenuItem value={"lindenwold"}>lindenwold</MenuItem>
      </Select>
    </FormControl>
  );
}

export { SelectStation };
