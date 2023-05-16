import { useEffect } from "react";
import { Container, List, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { DeckGL } from "deck.gl";
import { LineLayer } from "deck.gl";
import { Map } from "react-map-gl";
// import { StaticMap, MapContext, NavigationControl } from "react-map-gl";
import { MapContext } from "react-map-gl/dist/esm/components/map";
import maplibregl from "maplibre-gl"; // import { Map } from "maplibre-gl";
// import "./App.css";
// import { ListOfTimes } from "./components/single_station_times/listOfTimes";

import { ListOfTimes } from "../single_station_times/listOfTimes";

import { SelectStation } from "../shared/selectStation";
import { SelectDirection } from "../shared/selectDirection";
import { setApiData } from "../../store/appSlice";

// const API_BASE_URL = "http://localhost:8000";
const API_BASE_URL = "https://patco-api.planninglab.org";

function ViewMap() {
  const selectedStation = useSelector((state) => state.app.selectedStation);
  const selectedDirection = useSelector((state) => state.app.selectedDirection);
  const apiData = useSelector((state) => state.app.apiData);
  const activeView = useSelector((state) => state.app.activeView);
  const dispatch = useDispatch();

  //   async function getDataFromApi() {
  //     const response = await fetch(
  //       `${API_BASE_URL}/api/v0/timetable/?station_name=${selectedStation}&direction=${selectedDirection}`
  //     );
  //     const jsonData = await response.json();
  //     return jsonData;
  //   }

  //   useEffect(() => {
  //     getDataFromApi().then((data) => dispatch(setApiData(data.upcoming_times)));
  //   }, [selectedStation, selectedDirection]);

  // Data to be used by the LineLayer
  const data = [
    {
      sourcePosition: [-122.41669, 37.7853],
      targetPosition: [-122.41669, 37.781],
    },
  ];

  const INITIAL_VIEW_STATE = {
    longitude: -75.11874626045356,
    latitude: 39.94796001149046,
    zoom: 12,
    bearing: 0,
    pitch: 0,
  };

  const MAP_STYLE =
    "https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json";
  const NAV_CONTROL_STYLE = {
    position: "absolute",
    top: 10,
    left: 10,
  };

  const layers = [new LineLayer({ id: "line-layer", data })];
  return (
    <div style={{ zIndex: -1 }}>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layers}
        ContextProvider={MapContext.Provider}
      >
        <Map mapStyle={MAP_STYLE} mapLib={maplibregl} />
        {/* <NavigationControl style={NAV_CONTROL_STYLE} /> */}
      </DeckGL>
    </div>
  );
}

export default ViewMap;
