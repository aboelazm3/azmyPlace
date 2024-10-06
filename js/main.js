let asideLinksWidth = $("aside .links").outerWidth(true);

$("aside").animate(
  {
    left: -asideLinksWidth,
  },
  0
);

$(".open").on("click", function () {
  $("aside").animate(
    {
      left: 0,
    },
    2000
  );
});
$(".close").on("click", function () {
  $("aside").animate(
    {
      left: -asideLinksWidth,
    },
    2000
  );
});

$("aside .links a").on("click", function (e) {
  let linkId = $(e.target).attr("href");
  $("html  , body").animate({ scrollTop: $(linkId).offset().top }, 2000);
});

$(".deration h3").on("click", function (e) {
  $(e.target).next().slideToggle(2000);
  $(".deration p").not($(e.target).next()).slideUp(1500);
});

$("textarea").on("keyup", function () {
  if ($("textarea").val().length < 100) {
    $(".counter").text(100 - $("textarea").val().length);
  } else {
    $(".counter").text("your available character finished");
  }
});



// counter  

let counterDate  = new Date("Dec 31 , 2024 23:59:59").getTime();
let counter = setInterval( function () {
    let DateNow  = new Date().getTime();
    let timeLeft = counterDate - DateNow;
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)) +  `  D`

    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24 )  ) / (1000 * 60  * 60)) + `  H`

    let minutes = Math.floor((timeLeft % (1000 * 60 * 60  )  ) / (1000 * 60 )) + `  M`

    let seconds = Math.floor((timeLeft % (1000 * 60  )  ) / (1000)) + `  S`

    if (timeLeft  < 0) {
        alert('time is over');
        clearInterval(counter);
    }








    document.querySelector('.days').innerHTML  = days <  10 ? '0' + days : days;

    document.querySelector('.hours').innerHTML = hours <  10 ? '0' + hours : hours

    document.querySelector('.mins').innerHTML = minutes <  10 ? '0' + minutes : minutes

    document.querySelector('.secs').innerHTML = seconds < 10  ? '0' + seconds : seconds





}  , 1000 );




$(window).on('scroll'  , function(){
  let  scroll = $(window).scrollTop();
  
  if (scroll > 100){
    $('.UP').slideDown(200);
  }else {
    $('.UP').slideUp(200);
  }

})



$('.UP').on('click' , function () {
  $('html , body').animate({scrollTop : 0} , 1000)

  
})




