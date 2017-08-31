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
  this.increment = increment;
  this.value = 0;
  this.maximum = 1000000*this.increment;
  this.updateBar = function(val) {
    // let percent = (val/this.maximum)/100;
    // // console.log(val, this.value);
    $(".btn."+this.label).append(val.toString());
    $("#"+this.label).val(val);
  };
  this.addification = function(i) {
    this.value += i;
    this.updateBar(this.value);
    console.log("omg why is this happening!??!?!")
    // console.log( [ this.value, "#"+this.label, $("#"+this.label).val() ] )
  }
  this.button = $("<input>",  {
    class: "btn btn-default btn-sm "+this.label,
    value: label,
    type: "button",
    onclick: this.addification(increment),
    width: "6.6rem",
  });
  this.bar = $("<progress>", {
    class: "clickerBar",
    id: this.label,
    max: this.maximum,
    value: this.value,
    width: "6.6rem"
  });

  this.makeAClicker = function() {
    let div = $("<div>").addClass("col-sm-4 justify-content-center");
    let neuDiv = $(div).append(this.button).append(this.bar);
    $("#theClickers").append(neuDiv);
  };

};

function restart() {
  $("progress").val(0);
}

$( function(){
  var LIVECLICKERS = new Array;
  for (let e in CLICKERS) {
    let neuClicker = new Clicker(e, CLICKERS[e]);
    // console.log(neuClicker);
    neuClicker.value = 420/neuClicker.increment;
    LIVECLICKERS.push(neuClicker);
    neuClicker.makeAClicker();
    neuClicker.updateBar(neuClicker.value);
  };

});
