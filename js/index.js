//设置父元素的width
window.onload = function () {
    //拿到所有li
    const list = document.querySelectorAll('li')
    const num = list.length
    const width = list[0].offsetWidth
    let swiperDom = document.getElementById('swiper-container')
    swiperDom.style.width = width * num + 'px';
    //设置定时器，没过三秒钟向左偏移一个width
    let n = 0;
    setInterval(() => {
        n++;
        if (n > num - 1) {
            n = 1
        }
        swiperDom.style.left = -width * n + 'px';
    }, 2000)
}
