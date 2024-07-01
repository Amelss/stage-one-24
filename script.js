const todaysDate = document.getElementById("currentDate");
const todaysTime = document.getElementById("currentTime");
const getDate = new Date();
const day = getDate.toLocaleString("en-GB", { weekday: "long" });
const time = getDate.toUTCString();

todaysTime.innerHTML = `${time}`;
todaysDate.innerHTML = `${day}`;
