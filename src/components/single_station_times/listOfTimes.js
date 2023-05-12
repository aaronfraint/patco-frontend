function Entry({ data }) {
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
      return `${secondsAway.toFixed(2)} seconds away`;
    } else if (secondsAway < 60 * 60) {
      let minutes = secondsAway / 60;
      return `${minutes.toFixed(2)} minutes away`;
    } else {
      let hours = secondsAway / 60 / 60;
      return `${hours.toFixed(2)} hours away`;
    }
  }

  const timeAsText = formatTime(data[0]);

  const timeAway = formatTimeAway(data[1]);

  return (
    <li>
      {timeAsText} : {timeAway}
    </li>
  );
}

function ListOfTimes({ dataList }) {
  const list = dataList.map((element) => (
    <Entry data={element} key={element} />
  ));
  return <ul>{list}</ul>;
}

export { ListOfTimes };
