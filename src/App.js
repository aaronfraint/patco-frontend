import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import "./App.css";
import { SwitchView } from "./components/shared/switchView";
import ViewSingleStation from "./components/views/singleStation";
import ViewMap from "./components/views/mapView";

function App() {
  const activeView = useSelector((state) => state.app.activeView);

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

      {activeView == "single-station-list" && <ViewSingleStation />}
      {activeView == "map-view" && <ViewMap />}
    </Container>
  );
}

export default App;
