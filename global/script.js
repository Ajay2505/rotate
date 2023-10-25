
gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical', 
    gestureDirection: 'vertical', 
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);


const mainClippy = document.querySelector(".main_section .clippy_wrapper");
if (mainClippy) {
    gsap.to(mainClippy, {
        width: "100vw",
        height: "100vh",
        borderRadius: "0px",
        scrollTrigger: {
            trigger: ".main_section",
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin:'.main_section',
            pinSpacing: true,
            // markers: true,
        }
    });
}

gsap.to(".heading_block", {
   opacity: 1,
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        endTrigger: ".main_section",
        end: "bottom top",
        scrub: true,
        // pin:'.main_section',
        // pinSpacing: true,
        // markers: true,
    }
});


ScrollTrigger.create({
    trigger: ".restaurants_section", 
    start: "top center", 
    end: "bottom center", 
    onEnter: () => {
        document.body.setAttribute("data-bg", "res");
    },
    onEnterBack: () => {
        document.body.setAttribute("data-bg", "res");
    },
    onLeaveBack: () => {
        document.body.setAttribute("data-bg", "main");
    },
    // markers: true
});


ScrollTrigger.create({
    trigger: ".news_section", 
    start: "top center", 
    end: "bottom center", 
    onEnter: () => {
        document.body.setAttribute("data-bg", "news");
    },
    onEnterBack: () => {
        document.body.setAttribute("data-bg", "news");
    },
    // markers: true
});

ScrollTrigger.create({
    trigger: ".events_section", 
    start: "top center", 
    end: "bottom center", 
    onEnter: () => {
        document.body.setAttribute("data-bg", "events");
    },
    onEnterBack: () => {
        document.body.setAttribute("data-bg", "events");
    },
    // markers: true
});


ScrollTrigger.create({
    trigger: ".history_section", 
    start: "top center", 
    end: "bottom center", 
    onEnter: () => {
        document.body.setAttribute("data-bg", "history");
    },
    onEnterBack: () => {
        document.body.setAttribute("data-bg", "history");
    },
    // markers: true
});


if (document.querySelector(".main_swiper")) {
    const swiper = new Swiper(".main_swiper", {
        navigation: {
          nextEl: ".main-swiper-next",
          prevEl: ".main-swiper-prev",
        },
        slidesPerView: "auto",
        freeMode: true,
        spaceBetween: 100,
        // loop: true,
        allowTouchMove: false,
        mousewheel: {
            releaseOnEdges: true,
        },
    });
}

const scrollReveal = document.querySelectorAll(".scrollReveal");
scrollReveal.forEach(el => {
    gsap.to(el, {
        y: 0,
        x: 0,
        opacity: 1,
        duration: .7,
        scrollTrigger: {
            trigger: el.parentElement,
            start: "top 60%",
            toggleActions: "play reverse restart reverse",
            // end: "bottom top",
            // markers: true,
        }
    });
});
