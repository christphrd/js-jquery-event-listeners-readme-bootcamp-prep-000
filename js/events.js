//define functions here

function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('.tasty').on('load',function() {

  }) //load, red frame
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if (key.which == 71){
      alert('g was pressed');
    }
  })
}

function submitIt() {
  // submit "Your form is going to be submitted now."
}

$(document).ready(function(){

// call functions here

});
