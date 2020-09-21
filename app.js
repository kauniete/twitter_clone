////scroll only in the middle of the page
$(document).ready(function () {
  $("#left").sticky({ topSpacing: 0 });
});
$(document).ready(function () {
  $("#right").sticky({ topSpacing: 0 });
});

////////modal for tweet button
var modal = document.getElementById("modal");
var btn = document.getElementById("open_modal_to_tweet");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/////////////////// subpages in the middle
function showPage(pageId) {
  console.log("showing page...", pageId);

  document.querySelectorAll(".subpage").forEach((item) => {
    item.style.display = "none";
    console.log("x");
    document.getElementById(pageId).style.display = "grid";
  });
}

////class active on menu
var linkContainer = document.getElementById("left");
var link = linkContainer.getElementsByClassName("menu");

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// toggle on notfications page
var linkContainer = document.getElementById("notifications");
var link = linkContainer.getElementsByClassName("toggle");
for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active-toggle");
    current[0].className = current[0].className.replace("active-toggle", "");
    this.className += " active-toggle";
  });
}
