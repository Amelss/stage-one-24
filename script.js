const changeTime = () => {
  const getDate = new Date();
  const day = getDate.toLocaleString("en-GB", { weekday: "long" });


  const hours = getDate.getUTCHours().toString().padStart(2, "0");
  const minutes = getDate.getUTCMinutes().toString().padStart(2, "0");
  const seconds = getDate.getUTCSeconds().toString().padStart(2, "0");
  const time = `${hours}:${minutes}:${seconds}`;

  const todaysDate = document.getElementById("currentDate");
  const todaysTime = document.getElementById("currentTime");

  todaysTime.innerHTML = `Current Time: ${time}`;
  todaysDate.innerHTML = `Current Day: ${day}`;
};


changeTime();
setInterval(changeTime, 1000);
