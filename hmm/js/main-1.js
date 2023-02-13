// 브라우저 휠 이벤트
$(function () {

    window.addEventListener("wheel", function (e) {
        e.preventDefault();
    }, { passive: false });

    var $html = $("html");

    var page = 1;

    var lastPage = $(".section").length;

    $html.animate({ scrollTop: 0 }, 10, "swing");

    $(window).on("wheel", function (e) {

        if ($html.is(":animated")) return;

        if (e.originalEvent.deltaY > 0) {
            if (page == lastPage) return;

            page++;
        } else if (e.originalEvent.deltaY < 0) {
            if (page == 1) return;



            $(".logo img:nth-child(1)").addClass("on")
            $(".logo img:nth-child(2)").removeClass("on")

            $(".menu li a").css({ color: "#fff" })
            $(".menu li a").hover(function () {
                $(this).removeClass("ss");
            })

            page--;
        }
        if (page == 2) {
            // console.log('안녕하세요')
            // logo 이미지
            $(".logo img:nth-child(2)").addClass("on")
            $(".logo img:nth-child(1)").removeClass("on")
            // 글씨
            $(".menu li a").css({ color: "#0C205C" })
            $(".menu li a").hover(function () {
                $(this).addClass("ss");
            })
        }
        if (page == 3) {
            // logo 이미지
            $(".logo img:nth-child(1)").addClass("on")
            $(".logo img:nth-child(2)").removeClass("on")
            // 글씨
            $(".menu li a").css({ color: "#fff" })
            $(".menu li a").hover(function () {
                $(this).removeClass("ss");
            })

        }
        if (page == 5) {
            $(".logo img:nth-child(2)").addClass("on")
            $(".logo img:nth-child(1)").removeClass("on")
            // 글씨
            $(".menu li a").css({ color: "#0C205C" })
            $(".menu li a").hover(function () {
                $(this).addClass("ss");
            })

            $("header").css({ opacity: "1" })

        }
        if (page == 6) {
            $("header").css({ opacity: "0" })
        }
        var posTop = (page - 1) * $(window).height();

        $html.animate({ scrollTop: posTop }, 500);

        console.log(page, lastPage);

    });

    $($html).on("touchstart", function (e) {
        e.originalEvent.touches[0].pageX
        e.originalEvent.touches[0].pageY
        // e.originalEvent.changedTouches[0] 는 사용 불가!
    })

    $($html).on("touchmove", function (e) {
        e.originalEvent.touches[0].pageX
        e.originalEvent.touches[0].pageY
        e.originalEvent.changedTouches[0].pageX
        e.originalEvent.changedTouches[0].pageY
        // 둘 다 사용 가능!
    })

    $($html).on("touchend", function (e) {
        e.originalEvent.changedTouches[0].pageX
        e.originalEvent.changedTouches[0].pageY
        // e.originalEvent.touches[0] 는 사용 불가!
    })

    $(".slide_wrap").children("div:gt(0)").hide();

    let idx = 0;

    setInterval(function () {
        let next = (idx + 1) % 5;

        $(".slide_wrap").find("div").eq(idx).fadeOut();
        $(".slide_wrap").find("div").eq(next).fadeIn();

        idx = next;
    }, 3000);

    // text color change

    let $list = $(".swipe_container"),
        $first = $list.find("div").first()
            .css({ color: "#0047D5" });
    $last = $list.find("div").not($first)
        .css({ color: "#E3E3E3" });
    let color = 0;

    setInterval(function () {
        let change = (color + 1) % 5;

        $(".swipe_container").find("div").eq(color).css({ color: "#E3E3E3" });
        $(".swipe_container").find("div").eq(change).css({ color: "#0047D5" });

        color = change;

    }, 3000);


    // 모바일 햄버거 메뉴
    $(".m-menu").click(function (ev) {
        ev.preventDefault();
        $(this).toggleClass("move1")
        $(".m-page1").toggleClass("move")
    })
})
