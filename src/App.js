import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

import { Container, Typography } from "@mui/material";
import { ListOfTimes } from "./components/single_station_times/listOfTimes";
import { SelectStation } from "./components/shared/selectStation";
function App() {
  const [apiData, setApiData] = useState("");

  async function getDataFromApi() {
    const response = await fetch(
      "https://patco-api.planninglab.org/api/v0/timetable/?station_name=haddonfield&direction=wb"
    );
    const jsonData = await response.json();
    return jsonData;
  }

  // getDataFromApi();

  useEffect(() => {
    getDataFromApi().then((data) => setApiData(data.upcoming_times));
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h1">PATCO Schedule</Typography>
      <SelectStation />
      {apiData && <ListOfTimes dataList={apiData} />}
    </Container>
  );
}

export default App;
