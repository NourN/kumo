const clouds = [
  document.getElementById('cloud1'),
  document.getElementById('cloud2')
];

// animation
function animateClouds() {
  clouds.forEach((cloud, index) => {
      let speed = 0.02;
      let posX = parseFloat(cloud.style.left) || 0;
      posX -= speed;
      if (posX < -30) {
          posX = 100;
      }
      cloud.style.left = posX + '%';
  });
  requestAnimationFrame(animateClouds);
}

animateClouds();