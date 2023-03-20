// window.onload = function () {
//   var options = {
//     useEasing: true,
//     useGrouping: true,
//     separator: ",",
//     decimal: ".",
//     prefix: "",
//     suffix: ",000",
//   };
//   var demo = new CountUp("number", 0, 300, 0, 2.5, options);
//   demo.start();

//   var options1 = {
//     useEasing: true,
//     useGrouping: true,
//     separator: ",",
//     decimal: ".",
//     prefix: "Given ",
//     suffix: "",
//   };

//   var demo1 = new CountUp("number1", 0, 25000, 0, 2.5, options1);
//   demo1.start();

//   var options2 = {
//     useEasing: true,
//     useGrouping: true,
//     separator: ",",
//     decimal: ".",
//     prefix: "",
//     suffix: ",000",
//   };

//   var d = new Date();
//   var n = d.getMonth();
//   var f = n + 1;
//   var e = 300 / 12;
//   var newtotal = e * f;

//   var demo2 = new CountUp("number2", 0, newtotal, 0, 2.5, options2);
//   demo2.start();
// };

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
