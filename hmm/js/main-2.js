// 섹션3 슬라이드 컨테이너


let slides = document.querySelector('.container'),
    slide = document.querySelectorAll('.slide'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 100,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');


makeClone();

function makeClone() {
    for (let i = 0; i < slideCount; i++) {
        // a.cloneNode() ,a.cloneNode(true)
        //  a를 복사  / a의 내용까지 복사
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        // a,cloneNode(b)
        // a뒤에 b를 복사붙여넣기
        slides.appendChild(cloneSlide);
    }

    for (let i = slideCount - 1; i >= 0; i--) {
        // a.cloneNode() ,a.cloneNode(true)
        //  a를 복사  / a의 내용까지 복사
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        // a.prepend(b)
        // a앞에 b를 복사붙여넣기
        slides.prepend(cloneSlide);
    }
    updatewidth();
    setInitialPos();

    setTimeout(function () {
        slides.classList.add('animated');
    }, 100);
}
function updatewidth() {
    let currentslides = document.querySelectorAll('.slide');
    let newSlideCount = currentslides.length;

    let newwidth = (slideWidth * newSlideCount) + 'vw';
    slides.style.width = newwidth;
}
function setInitialPos() {
    let initialtranslateValue = -(slideWidth) * slideCount;
    slides.style.transform = 'translate(' + initialtranslateValue + 'vw)';
}
nextBtn.addEventListener('click', function () {
    moveSlide(currentIdx + 1);
})
prevBtn.addEventListener('click', function () {
    moveSlide(currentIdx - 1);
})
function moveSlide(num) {
    slides.style.left = -num * (slideWidth) + 'vw';
    currentIdx = num;
    console.log(currentIdx, slideCount);

    // 뷰위치 돌려놓기
    if (currentIdx == slideCount) {

        setTimeout(function () {
            slides.classList.remove('animated');
            slides.style.left = '0vw';
            currentIdx = 0;
        }, 500);
        setTimeout(function () {
            slides.classList.add('animated')
        }, 600)
    } else if (-currentIdx == slideCount) {
        setTimeout(function () {
            slides.classList.remove('animated');
            slides.style.left = '0vw';
            currentIdx = 0;
        }, 500);
        setTimeout(function () {
            slides.classList.add('animated')
        }, 600)
    }

}



