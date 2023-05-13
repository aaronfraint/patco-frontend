import { useSelector, useDispatch } from "react-redux";

import { Fab } from "@mui/material";

import { setActiveView } from "../../store/appSlice";

function SwitchView() {
  const dispatch = useDispatch();
  const activeView = useSelector((state) => state.app.activeView);

  const text =
    activeView == "single-station-list"
      ? "Switch to map view"
      : "Switch to list view";

  const color = activeView == "single-station-list" ? "primary" : "secondary";

  function handleClick() {
    const newView =
      activeView == "single-station-list" ? "map-view" : "single-station-list";
    dispatch(setActiveView(newView));
  }

  return (
    <Fab variant="extended" color={color} onClick={handleClick}>
      {text}
    </Fab>
  );
}

export { SwitchView };
