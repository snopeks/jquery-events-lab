console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  console.log('jquery activated!')
  $('body').append('<button>Clear</button>')
  $("#time").text( Date.now() );

  $('input.add').on('change', function changeItUp(event){

    var left = $('input#left').val();
    var right = $('input#right').val();
    var leftItem = parseInt(left) || 0;
    var rightItem = parseInt(right) || 0;
    var result = leftItem + rightItem;
    $('#total').val(result)

  })

  //when the button is clicked, clear the input values
  $('button').on('click', function clearAllVals(){
    console.log('click');
    $('input#left').val(null);
    $('input#right').val(null);
    $('#total').val(null);
  })
})


