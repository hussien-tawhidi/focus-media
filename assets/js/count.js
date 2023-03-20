window.onload = function () {
  var options = {
    useEasing: true,
    useGrouping: true,
    separator: ",",
    decimal: ".",
    prefix: "",
    suffix: ",000",
  };
  var demo = new CountUp("number", 0, 300, 0, 2.5, options);
  demo.start();

  var options1 = {
    useEasing: true,
    useGrouping: true,
    separator: ",",
    decimal: ".",
    prefix: "Given ",
    suffix: "",
  };

  var demo1 = new CountUp("number1", 0, 25000, 0, 2.5, options1);
  demo1.start();

  var options2 = {
    useEasing: true,
    useGrouping: true,
    separator: ",",
    decimal: ".",
    prefix: "",
    suffix: ",000",
  };

  var d = new Date();
  var n = d.getMonth();
  var f = n + 1;
  var e = 300 / 12;
  var newtotal = e * f;

  var demo2 = new CountUp("number2", 0, newtotal, 0, 2.5, options2);
  demo2.start();
};
