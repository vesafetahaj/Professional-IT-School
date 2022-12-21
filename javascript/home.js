let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
     slideIndex = 1
  }  
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000);
}

  var button = document.getElementById('darkmode');
	var text = document.getElementById('text');
	var body = document.querySelector("body");
  var aboutContent = document.getElementById("about-content");
  var header = document.getElementById("header");

button.onclick = function(){
  body.style.backgroundColor = "black";
  header.style.backgroundColor = "black";
  body.style.color = "white";
  aboutContent.style.boxShadow = "0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19)";
}
button.ondblclick = function(){
  body.style.backgroundColor = "white";
  body.style.color = "black";
  header.style.backgroundColor = "white";
  aboutContent.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
}