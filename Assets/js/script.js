$(document).ready(function (){

  // getting the current hour
    var currentHour = dayjs().hour()
    console.log(currentHour);

    $('.time-block').each(function(){
    var time = $(this).attr('id').split('hour-')[1];

  // setting time for colors 
    if (time == currentHour){
      $(this).addClass('present')
    } else if (time > currentHour){
      $(this).addClass('future')
    } else {
      $(this).addClass('past')
    }
    })

  // saving to local storage
    $('.saveBtn').on('click', function(){
      var time = $(this).parent().attr('id')
      var text = $(this).siblings('.typed').val()
      localStorage.setItem(time, text)
    })

  // getting what was saved from local
    $('#hour-9 .typed').val(localStorage.getItem('hour-9'))
    $('#hour-10 .typed').val(localStorage.getItem('hour-10'))
    $('#hour-11 .typed').val(localStorage.getItem('hour-11'))
    $('#hour-12 .typed').val(localStorage.getItem('hour-12'))
    $('#hour-13 .typed').val(localStorage.getItem('hour-13'))
    $('#hour-14 .typed').val(localStorage.getItem('hour-14'))
    $('#hour-15 .typed').val(localStorage.getItem('hour-15'))
    $('#hour-16 .typed').val(localStorage.getItem('hour-16'))
    $('#hour-17 .typed').val(localStorage.getItem('hour-17'))
    $('#hour-18 .typed').val(localStorage.getItem('hour-18'))
    $('#hour-19 .typed').val(localStorage.getItem('hour-19'))
    $('#hour-20 .typed').val(localStorage.getItem('hour-20'))
    
    
  // displaying current date in header
    $('#currentDay').text(dayjs().format('dddd, MMMM D'))
  })