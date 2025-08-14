const tali = document.querySelector(".tali");

const UCF = document.querySelector(".UCF");

const gettingRich = document.querySelector(".gettingRich");

const exploration = document.querySelector(".exploration");

const responseBox = document.querySelector(".aboutmeSecResponse");

function toggleAboutMe(aboutmeSectionName) {
  if (aboutmeSectionName === tali) {
    aboutmeSectionName.addEventListener("click", () => {
      document.querySelector(".aboutmeSecResponse").innerHTML =
        "Tali is a great person!";
      responseBox.style.display = "block";
    });
  }

  if (aboutmeSectionName === UCF) {
    aboutmeSectionName.addEventListener("click", () => {
      document.querySelector(".aboutmeSecResponse").innerHTML = "I love UCF!";
      responseBox.style.display = "block";
    });
  }

  if (aboutmeSectionName === gettingRich) {
    aboutmeSectionName.addEventListener("click", () => {
      document.querySelector(".aboutmeSecResponse").innerHTML = "shmone!";
      responseBox.style.display = "block";
    });
  }

  if (aboutmeSectionName === exploration) {
    aboutmeSectionName.addEventListener("click", () => {
      document.querySelector(".aboutmeSecResponse").innerHTML =
        "internet explorer!";
      responseBox.style.display = "block";
    });
  }
}

toggleAboutMe(tali);

toggleAboutMe(UCF);

toggleAboutMe(gettingRich);

toggleAboutMe(exploration);
