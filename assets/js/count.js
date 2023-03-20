

var options = {
  useEasing: true,
  useGrouping: true,
  separator: ",",
  decimal: ".",
};

var counterParent = document.getElementById("unique-id");
var children = counterParent.children;

function countStart() {
  $("#unique-id").addClass("active");
  for (var i = 0; i < children.length; i++) {
    var item = document
      .getElementById(children[i].id)
      .querySelector(".counter");
    var countValue = item.getAttribute("data-value");

    var countUP = new CountUp(item, 0, countValue, 0, 2, options);
    if (!countUP.error) {
      countUP.start();
    }
  }
}

ScrollReveal().reveal(".counter-block", {
  beforeReveal: countStart,
});
