import {
  TableCell,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableHead,
  styled,
  tableCellClasses,
} from "@mui/material";

function formatTime(time) {
  let hour = parseInt(time.slice(0, 2));
  let minute = time.slice(3, 5);
  let timeOfDay = "AM";

  if (hour >= 12) {
    timeOfDay = "PM";
  }

  if (hour > 12) {
    hour -= 12;
  }
  return `${hour}:${minute} ${timeOfDay}`;
}

function formatTimeAway(secondsAway) {
  if (secondsAway <= 90) {
    return `${secondsAway.toFixed(2)} seconds`;
  } else if (secondsAway < 60 * 60) {
    let minutes = secondsAway / 60;
    return `${minutes.toFixed(2)} minutes`;
  } else {
    let hours = secondsAway / 60 / 60;
    return `${hours.toFixed(2)} hours`;
  }
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

function ListOfTimes({ dataList }) {
  return (
    <div>
      <TableContainer component={Paper} sx={{ maxHeight: "50vh" }}>
        <Table stickyHeader aria-label="simple table" size="small">
          <TableHead
            sx={{
              backgroundColor: "red",
            }}
          >
            <TableRow>
              <StyledTableCell>Stop Time</StyledTableCell>
              <StyledTableCell>Time Until Train Arrives</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataList.map((row) => (
              <TableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {formatTime(row.stop_time)}
                </StyledTableCell>
                <StyledTableCell>
                  {formatTimeAway(row.seconds_away)}
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export { ListOfTimes };
