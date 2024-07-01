const changeTime = () => {
  const getDate = new Date();
  const day = getDate.toLocaleString("en-GB", { weekday: "long" });
  const time = getDate.toUTCString();

  const todaysDate = document.getElementById("currentDate");
  const todaysTime = document.getElementById("currentTime");

  todaysTime.innerHTML = `Current Time: ${time}`;
  todaysDate.innerHTML = `Current Day: ${day}`;
};


changeTime();
setInterval(changeTime, 1000);
