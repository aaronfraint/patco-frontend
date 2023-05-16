import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { setSelectedDirection } from "../../store/appSlice";

function SelectDirection() {
  const selectedDirection = useSelector((state) => state.app.selectedDirection);
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(true);

  function handleChange(e) {
    console.log(e);
    const isChecked = !checked;
    const newDirection = isChecked ? "wb" : "eb";
    dispatch(setSelectedDirection(newDirection));
    setChecked(isChecked);
  }

  const text = checked ? "Heading Westbound" : "Heading Eastbound";

  return (
    <FormControl>
      {/* <InputLabel id="demo-simple-select-label">Heading</InputLabel> */}
      <FormControlLabel
        control={
          <Switch checked={checked} onChange={handleChange} size="large" />
        }
        label={text}
      />{" "}
      {/* <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedDirection}
        label="Heading"
        onChange={handleChange}
      >
        <MenuItem value={"wb"}>Westbound</MenuItem>
        <MenuItem value={"eb"}>Eastbound</MenuItem>
      </Select> */}
    </FormControl>
  );
}

export { SelectDirection };
