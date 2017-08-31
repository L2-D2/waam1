const CLICKERS = ["a","b","c","d","e","f","g","h","i","j","k","l"]

$( document ).ready(function(){
  CLICKERS.forEach(function(e) {
    $("#theClickers").append(
      `<div class="col col-xs-6 justify-content-center">
          <input type="button" class="btn btn-default btn-sm" value="${e}">
          <span class="clickerBar" id="${e}">----</span>
      </div>`)
  })
})
