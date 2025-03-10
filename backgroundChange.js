function updateBackground() {
  const body = document.body;
  const currentHour = new Date().getHours();

  body.classList.remove("morning", "day", "evening", "night");

  if (currentHour >= 6 && currentHour < 10) {
    body.classList.add("morning");
  } else if (currentHour >= 10 && currentHour < 18) {
    body.classList.add("day");
  } else if (currentHour >= 18 && currentHour < 20) {
    body.classList.add("evening");
  } else {
    body.classList.add("night");
  }
}

updateBackground();

setInterval(updateBackground, 3600000); // 3600000 = 1h
