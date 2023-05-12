import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import "./App.css";
import { ListOfTimes } from "./components/single_station_times/listOfTimes";
import { SelectStation } from "./components/shared/selectStation";

function App() {
  const selectedStation = useSelector((state) => state.app.selectedStation);
  // const dispatch = useDispatch();

  const [apiData, setApiData] = useState("");

  async function getDataFromApi() {
    const response = await fetch(
      `https://patco-api.planninglab.org/api/v0/timetable/?station_name=${selectedStation}&direction=wb`
    );
    const jsonData = await response.json();
    return jsonData;
  }

  // getDataFromApi();

  useEffect(() => {
    getDataFromApi().then((data) => setApiData(data.upcoming_times));
  }, [selectedStation]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h1">PATCO Schedule</Typography>
      <SelectStation />
      {apiData && <ListOfTimes dataList={apiData} />}
    </Container>
  );
}

export default App;
