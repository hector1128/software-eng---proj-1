const aboutmeSection = document.querySelector(".aboutmeSec");

if (aboutmeSection) {
  aboutmeSection.addEventListener("click", aboutmeMessage);
}

function aboutmeMessage() {
  console.log("About Me section clicked!");
}
