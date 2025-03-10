const clouds = [
  document.getElementById('cloud1'),
  document.getElementById('cloud2'),
  document.getElementById('cloud3'),
  document.getElementById('cloud4'),
  document.getElementById('cloud5'),
  document.getElementById('cloud6'),
  document.getElementById('cloud7'),
];

function getCloudSpeed() {
  if (window.innerWidth <= 650) {
    return 0.1;
  } else {
    return 0.02;
  }
}

function animateClouds() {
  let speed = getCloudSpeed();
  
  clouds.forEach((cloud) => {
    let posX = parseFloat(cloud.style.left) || 0;
    posX -= speed;

    if (window.innerWidth <= 650) {
      if (posX < -40) {  
        cloud.style.fill = "transparent";
        posX = 102;
      } else {
        cloud.style.fill = "white";
        cloud.style.opacity = 0.7;
      }
    } else {
      if (posX < -13) {  
        cloud.style.fill = "transparent";
        posX = 102;
      } else {
        cloud.style.fill = "white";
        cloud.style.opacity = 0.7;
      }
    }
    
    cloud.style.left = `${posX}%`;
  });
  
  requestAnimationFrame(animateClouds);
}

animateClouds();
