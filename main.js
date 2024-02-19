// zoom image when hover
function zoomIn() {
  document.querySelector(".profile-image").classList.add("zoomed");
}
function zoomOut() {
  document.querySelector(".profile-image").classList.remove("zoomed");
}

document.querySelectorAll(".project-title").forEach(function (title) {
  title.addEventListener("click", function () {
    var projectFeature = title.nextElementSibling; // Lấy ra phần tử kế tiếp của project-title
    projectFeature.classList.toggle("active");
  });
});
// circle-----

const circles=document.querySelectorAll('.circle');
circles.forEach(elem=>{
  var dots= elem.getAttribute("data-dots");
  var marked= elem.getAttribute("data-percent");
  var percent= Math.floor(dots*marked/100);
  var points= "";
  var rotate= 360 / dots;

  for (let i=0 ;i < dots ;i++){
    points += ` <div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML=points;

const pointsMarkeds = elem.querySelectorAll('.points');
  for (let i=0 ;i<percent;i++){
    pointsMarkeds[i].classList.add('marked')
  }
})
