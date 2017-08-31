const CLICKERS = {
  tenmirco: 0.00001,
  myrri: 0.0001,
  milli: 0.001,
  centi: 0.01,
  tenth: 0.1,
  an: 1,
  ten: 10,
  hunned: 100,
  onethou: 1000,
  myriad: 10000,
  hunnedthou: 100000,
  million: 1000000
}

function Clicker(label, increment) {
  this.label = label;
  this.button = $("<input>",  {
    class: "btn btn-default btn-sm",
    value: label,
    type: "button",
    width: "8rem",
  });
  this.bar = $("<div>")
    .addClass("clickerBar")
    .add("<span>", {
      id: label,
      data: this.value
    });
  this.increment = increment;
  this.value = 0;
  this.maximum = 1000000*this.increment;
  this.makeAClicker = function() {
    let div = $("<div>").addClass("col-sm-4 justify-content-center");
    let neuDiv = $(div).append(this.button).append(this.bar);
    $("#theClickers").append(neuDiv);
  };
  this.updateBar = function(val) {
    let percent = (val/this.maximum)/100;
    $("#"+this.label).animate({width: `${percent}%`}, 420);
  };
}

$( function(){
  var LIVECLICKERS = new Array;
  for (let e in CLICKERS) {
    let neuClicker = new Clicker(e, CLICKERS[e]);
    neuClicker.value = 420*neuClicker.increment;
    neuClicker.updateBar(neuClicker.value);
    LIVECLICKERS.push(neuClicker);
    neuClicker.makeAClicker();
  };

});
