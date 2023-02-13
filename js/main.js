// 브라우저 휠 이벤트
$(function () {
  var ts;
  $('html, body').bind('touchstart', function(e){
    e.stopPropagation();
    ts = e.originalEvent.touches[0].clientY;
  });
  
  $('html, body').bind('touchend', function(e){
    e.stopPropagation();
    var te = e. originalEvent.changedTouches[0].clientY;
    if(ts > te + 5){
      console.log('touch down');
    } else if(ts < te - 5){
      console.log('touch up');
    }
  });


  window.addEventListener("wheel", function (e) {
    e.preventDefault();
  }, { passive: false });

  var $html = $("html");

  var page = 1;

  var lastPage = $(".section").length;

  $html.animate({ scrollTop: 0 }, 10,"swing");

  $(window).on("wheel", function (e) {

    if ($html.is(":animated")) return;

    if (e.originalEvent.deltaY > 0) {
      if (page == lastPage) return;

      page++;
    } else if (e.originalEvent.deltaY < 0) {
      if (page == 1) return;
      page--;

      $(".menu li:nth-child(1)").css({ color: "#D65454" });
      $(".menu li:nth-child(2)").css({ color: "#433C3C" });
      $(".sub-sec2 .left").stop(true).animate({ left: '-1000px' }, 300)
      $(".sub-sec2 .right .top").stop(true).animate({ opacity: '0' }, 300)
      $(".sub-sec2 .right .mid").stop(true).animate({ opacity: '0' }, 400)
      $(".sub-sec2 .right .btm").stop(true).animate({ opacity: '0' }, 500)
    }
    if (page == 2) {
      $(".menu li:nth-child(2)").css({ color: "#D65454" });
      $(".menu li:nth-child(1)").css({ color: "#433C3C" });
      $(".menu li:nth-child(3)").css({ color: "#433C3C" });
      $(".menu li:nth-child(4)").css({ color: "#433C3C" });
      $(".sub-sec2 .left").stop(true).animate({ left: '0px' }, 300)
      $(".sub-sec2 .right .top").stop(true).animate({ opacity: '1' }, 400);
      $(".sub-sec2 .right .mid").stop(true).animate({ opacity: '1' }, 700);
      $(".sub-sec2 .right .btm").stop(true).animate({ opacity: '1' }, 900);
    }
    if (page == 3) {
      $(".menu li:nth-child(3)").css({ color: "#D65454" });
      $(".menu li:nth-child(2)").css({ color: "#ccc" });
      $(".menu li:nth-child(4)").css({ color: "#ccc" });
      $(".menu li:nth-child(1)").css({ color: "#ccc" });
      $(".sub-sec2 .left").stop(true).animate({ left: '-1000px' }, 300)
      $(".sub-sec2 .right .top").stop(true).animate({ opacity: '0' }, 300)
      $(".sub-sec2 .right .mid").stop(true).animate({ opacity: '0' }, 400)
      $(".sub-sec2 .right .btm").stop(true).animate({ opacity: '0' }, 500)
    }
    if (page == 4) {
      $(".menu li:nth-child(4)").css({ color: "#D65454" });
      $(".menu li:nth-child(3)").css({ color: "#433C3C" });
      $(".menu li:nth-child(2)").css({ color: "#433C3C" });
      $(".menu li:nth-child(1)").css({ color: "#433C3C" });
      $(".sub-sec2 .left").stop(true).animate({ left: '-1000px' }, 300)
      $(".sub-sec2 .right .top").stop(true).animate({ opacity: '0' }, 300)
      $(".sub-sec2 .right .mid").stop(true).animate({ opacity: '0' }, 400)
      $(".sub-sec2 .right .btm").stop(true).animate({ opacity: '0' }, 500)
    }
    $(".main").click(function () {
      $(".menu li:nth-child(1)").css({ color: "#D65454" });
      $(".menu li:nth-child(2)").css({ color: "#433C3C" });
      $(".menu li:nth-child(3)").css({ color: "#433C3C" });
      $(".menu li:nth-child(4)").css({ color: "#433C3C" });

      $(".sub-sec2 .left").stop(true).animate({ left: '-1000px' }, 300)
      $(".sub-sec2 .right .top").stop(true).animate({ opacity: '0' }, 300)
      $(".sub-sec2 .right .mid").stop(true).animate({ opacity: '0' }, 400)
      $(".sub-sec2 .right .btm").stop(true).animate({ opacity: '0' }, 500)

      page == 1;
      

    })
    $(".aboutme").click(function () {
      $(".menu li:nth-child(2)").css({ color: "#D65454" });
      $(".menu li:nth-child(1)").css({ color: "#433C3C" });
      $(".menu li:nth-child(3)").css({ color: "#433C3C" });
      $(".menu li:nth-child(4)").css({ color: "#433C3C" });

      $(".sub-sec2 .left").stop(true).animate({ left: '0px' }, 300)
      $(".sub-sec2 .right .top").stop(true).animate({ opacity: '1' }, 400);
      $(".sub-sec2 .right .mid").stop(true).animate({ opacity: '1' }, 700);
      $(".sub-sec2 .right .btm").stop(true).animate({ opacity: '1' }, 900);

      page == 2;
      
    })
    $(".publishing").click(function () {
      $(".menu li:nth-child(3)").css({ color: "#D65454" });
      $(".menu li:nth-child(2)").css({ color: "#ccc" });
      $(".menu li:nth-child(4)").css({ color: "#ccc" });
      $(".menu li:nth-child(1)").css({ color: "#ccc" });

      $(".sub-sec2 .left").stop(true).animate({ left: '-1000px' }, 300)
      $(".sub-sec2 .right .top").stop(true).animate({ opacity: '0' }, 300)
      $(".sub-sec2 .right .mid").stop(true).animate({ opacity: '0' }, 400)
      $(".sub-sec2 .right .btm").stop(true).animate({ opacity: '0' }, 500)

      page == 3;
      
    })
    $(".connect").click(function () {
      $(".menu li:nth-child(4)").css({ color: "#D65454" });
      $(".menu li:nth-child(3)").css({ color: "#433C3C" });
      $(".menu li:nth-child(2)").css({ color: "#433C3C" });
      $(".menu li:nth-child(1)").css({ color: "#433C3C" });

      $(".sub-sec2 .left").stop(true).animate({ left: '-1000px' }, 300)
      $(".sub-sec2 .right .top").stop(true).animate({ opacity: '0' }, 300)
      $(".sub-sec2 .right .mid").stop(true).animate({ opacity: '0' }, 400)
      $(".sub-sec2 .right .btm").stop(true).animate({ opacity: '0' }, 500)

      page == 4;
      
    })
    var posTop = (page - 1) * $(window).height();

    $html.animate({ scrollTop: posTop }, 500);

    console.log(page, lastPage);
  });

  var $slider = $('.slidelist'),
    $firstSlide = $slider.find('div').first() // 첫번째 슬라이드
      .stop(true).animate({ 'opacity': 1 }, 200); // 첫번째 슬라이드만 보이게 하기

  function PrevSlide() { // 이전버튼 함수
    stopSlide(); startSlide(); //타이머 초기화
    var $lastSlide = $slider.find('div').last() //마지막 슬라이드
      .prependTo($slider); //마지막 슬라이드를 맨 앞으로 보내기  
    $secondSlide = $slider.find('div').eq(1)//두 번째 슬라이드 구하기
      .stop(true).animate({ 'opacity': 0 }, 400); //밀려난 두 번째 슬라이드는 fadeOut 시키고
    $firstSlide = $slider.find('div').first() //맨 처음 슬라이드 다시 구하기
      .stop(true).animate({ 'opacity': 1 }, 400);//새로 들어온 첫 번째 슬라이드는 fadeIn 시키기
  }

  function NextSlide() { // 다음 버튼 함수
    stopSlide(); startSlide(); //타이머 초기화
    $firstSlide = $slider.find('div').first() // 첫 번째 슬라이드
      .appendTo($slider); // 맨 마지막으로 보내기
    var $lastSlide = $slider.find('div').last() // 맨 마지막으로 보낸 슬라이드
      .stop(true).animate({ 'opacity': 0 }, 400); // fadeOut시키기
    $firstSlide = $slider.find('div').first()// 맨 처음 슬라이드
      .stop(true).animate({ 'opacity': 1 }, 400);// fadeIn 시키기
  }

  $('.next').on('click', function () { //다음버튼 클릭
    NextSlide();
  });
  $('.prev').on('click', function () { //이전 버튼 클릭
    PrevSlide();
  });

  startSlide(); // 자동 슬라이드 시작

  var theInterval;

  function startSlide() {
    theInterval = setInterval(NextSlide, 5000); //자동 슬라이드 설정
  }

  function stopSlide() { //자동 멈추기
    clearInterval(theInterval);
  }

  $('.slider').hover(function () { //마우스 오버시 슬라이드 멈춤
    stopSlide();
  }, function () {
    startSlide();
  });

  $(".slide").on('mouseover', function () {
    $(".slide span").stop(true).animate({ opacity: "1" }, 500)
  })
  $(".slide").on('mouseout', function () {
    $(".slide span").stop(true).animate({ opacity: "0" }, 500)
  })
})
