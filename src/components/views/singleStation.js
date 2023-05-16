import { useEffect } from "react";
import { Container, List, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

// import "./App.css";
// import { ListOfTimes } from "./components/single_station_times/listOfTimes";

import { ListOfTimes } from "../single_station_times/listOfTimes";

import { SelectStation } from "../shared/selectStation";
import { SelectDirection } from "../shared/selectDirection";
import { setApiData } from "../../store/appSlice";

// const API_BASE_URL = "http://localhost:8000";
const API_BASE_URL = "https://patco-api.planninglab.org";

function ViewSingleStation() {
  const selectedStation = useSelector((state) => state.app.selectedStation);
  const selectedDirection = useSelector((state) => state.app.selectedDirection);
  const apiData = useSelector((state) => state.app.apiData);
  const activeView = useSelector((state) => state.app.activeView);
  const dispatch = useDispatch();

  async function getDataFromApi() {
    const response = await fetch(
      `${API_BASE_URL}/api/v0/timetable/?station_name=${selectedStation}&direction=${selectedDirection}`
    );
    const jsonData = await response.json();
    return jsonData;
  }

  // getDataFromApi();

  useEffect(() => {
    getDataFromApi().then((data) => dispatch(setApiData(data.upcoming_times)));
  }, [selectedStation, selectedDirection]);

  return (
    <div>
      <Typography variant="h5">
        {selectedDirection} trains from {selectedStation}
      </Typography>

      <br />
      <div className="flex">
        <SelectStation />
        <br />
        <br />
        <SelectDirection />
      </div>
      <br />
      {apiData && <ListOfTimes dataList={apiData} />}
    </div>
  );
}

export default ViewSingleStation;
