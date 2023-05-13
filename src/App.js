import { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import { ListOfTimes } from "./components/single_station_times/listOfTimes";
import { SelectStation } from "./components/shared/selectStation";
import { SelectDirection } from "./components/shared/selectDirection";
import { setApiData } from "./store/appSlice";
import { SwitchView } from "./components/shared/switchView";

// const API_BASE_URL = "http://localhost:8000";
const API_BASE_URL = "https://patco-api.planninglab.org";

function App() {
  const selectedStation = useSelector((state) => state.app.selectedStation);
  const selectedDirection = useSelector((state) => state.app.selectedDirection);
  const apiData = useSelector((state) => state.app.apiData);
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
    <Container maxWidth="sm">
      <br />
      <br />
      <div className="flex">
        <Typography variant="h4">PATCO Schedule</Typography>
        <div>
          <SwitchView />
        </div>
      </div>

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
      {apiData && <ListOfTimes dataList={apiData} />}
    </Container>
  );
}

export default App;
