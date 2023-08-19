//import "./style/styles.scss";

//document.querySelector("#app").innerHTML = ``;

// Smooth animation for dropdown
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseover', () => {
      item.querySelector('.sub-menu').style.opacity = 1;
      item.querySelector('.sub-menu').style.pointerEvents = 'auto';
    });
    item.addEventListener('mouseout', () => {
      item.querySelector('.sub-menu').style.opacity = 0;
      item.querySelector('.sub-menu').style.pointerEvents = 'none';
    });
  });
  
