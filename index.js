import './scss/main.scss'
import $ from "jquery";
import bootstrap from "bootstrap";

// jQuery log element clicked
// $(document).on('click', 'a', event => console.log(event.target));


// On node click console log element
const elements = document.getElementsByTagName('a');
for(let i = 0, len = elements.length; i < len; i++) {
  elements[i].onclick = (event) => {
    console.log(event);
    const targetElement = event.target;
    console.log(targetElement);
  }
}

// Get the modal
const modal = document.getElementById('foodModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementsByClassName('imageModal');
const modalImg = document.getElementById("imageDisplayedInModal");


// loop through multiple imageModels
for(let i = 0, len = img.length; i < len; i++) {
  img[i].onclick = (event) => {
    modal.style.display = "block";
    modalImg.src = event.target.src;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}