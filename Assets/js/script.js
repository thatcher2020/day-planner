$(document).ready(function (){

  // getting the current hour
    var currentHour = dayjs().hour()
    console.log(currentHour);

    $('.time-block').each(function(){
    var time = $(this).attr('id').split('hour-')[1];

  // setting time for colors 
    if (time < currentHour) {
      $(this).addClass('past')
    } else if (time == currentHour) {
      $(this).addClass('present')
    } else {
      $(this).addClass('future')
    }
  })
  
  // saving to local storage
    $('.saveBtn').on('click', function(){
      var time = $(this).parent().attr('id')
      var text = $(this).siblings('.description').val()
      localStorage.setItem(time, text)
    })

  // getting what was saved from local
    $('#hour-9 .description').val(localStorage.getItem('hour-9'))
    $('#hour-10 .description').val(localStorage.getItem('hour-10'))
    $('#hour-11 .description').val(localStorage.getItem('hour-11'))
    $('#hour-12 .description').val(localStorage.getItem('hour-12'))
    $('#hour-13 .description').val(localStorage.getItem('hour-13'))
    $('#hour-14 .description').val(localStorage.getItem('hour-14'))
    $('#hour-15 .description').val(localStorage.getItem('hour-15'))
    $('#hour-16 .description').val(localStorage.getItem('hour-16'))
    $('#hour-17 .description').val(localStorage.getItem('hour-17'))

  // displaying current date in header
    $('#currentDay').text(dayjs().format('dddd, MMMM D'))
  })