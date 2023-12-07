
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
        spaceBetween: 70,
        // loop: true,
        allowTouchMove: false,
        mousewheel: {
            releaseOnEdges: true,
        },
    });
}

if (document.querySelector(".mySwiper")) {
    const swiper2 = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".mySwiper-next",
            prevEl: ".mySwiper-prev",
        },
        spaceBetween: 20,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        effect: 'easeIn',
        breakpoints: {
            480: {
                slidesPerView: 1,          
            },
            640: {
                slidesPerView: 2,          
            },
            1200: {
                slidesPerView: 3
            }
        }
    });
}

const scrollReveal = document.querySelectorAll(".scrollReveal");
if (scrollReveal) {
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
}

document.querySelector("header .bars").addEventListener("click", evt => {
    evt.currentTarget.classList.toggle("active");
    document.querySelector("header .nav_content").classList.toggle("active");
});

const linkedImagesWrapper = document.querySelector(".linkedImagesWrapper");
if (linkedImagesWrapper) {
    const hoverLinksWrapper = linkedImagesWrapper.querySelectorAll(".hoverLinksWrapper a");
    const hoverImages = linkedImagesWrapper.querySelectorAll(".hoverImagesWrapper img");
    if (hoverLinksWrapper && hoverImages) {
        hoverLinksWrapper.forEach((link,idx) => {
            link.addEventListener("mouseenter", () => {
                const activeImg = linkedImagesWrapper.querySelector(".hoverImagesWrapper img:not(.d-none)");
                if (activeImg) {
                    activeImg.classList.remove("active");
                    activeImg.classList.add("d-none");
                }
                hoverImages[idx].classList.remove("d-none");
                setTimeout(() => {
                    hoverImages[idx].classList.add("active");
                }, 50);
            });
        })
    }
}



// const underLines = document.querySelectorAll(".underline");

// if (underLines && underLines.length) {
//     underLines.forEach(underLine => {
//         let removeClassTimeout;

//         underLine.addEventListener("mouseover", evt => {
//             clearTimeout(removeClassTimeout); // Clear any pending timeouts
//             evt.currentTarget.classList.add("active");
//         });

//         underLine.addEventListener("mouseleave", evt => {
//             const target = evt.currentTarget;
//             const lineElement = target.querySelector(".line");

//             if (lineElement) {
//                 lineElement.addEventListener("transitionend", e => {
//                     if (e.propertyName === "width") {
//                         removeClassTimeout = setTimeout(() => {
//                             target.classList.remove("active");
//                         }, 0); // Use a minimal timeout
//                     }
//                 });
//             }
//         });
//     });
// }


// const underLines = document.querySelectorAll(".underline");
// if (underLines && underLines.length) {
//     underLines.forEach(underLine => {
//         underLine.addEventListener("mouseover", evt => {
//             evt.currentTarget.classList.add("active");
//         });
//         underLine.addEventListener("mouseleave", evt => {
//             const target = evt.currentTarget;
//             const lineElement = target.querySelector(".line");
//             if (lineElement) {
//                 lineElement.addEventListener("transitionend", e => {
//                     if (e.propertyName === "width") {
//                         target.classList.remove("active");                        
//                     }
//                 });
//             }
//         });
//     });
// }

// const underLines = document.querySelectorAll(".underline");
// if (underLines && underLines.length) {
//     underLines.forEach(underLine => {
//         let transitionend = false;
//         let mouseleave = true;
//         underLine.addEventListener("mouseover", evt => {
//             mouseleave = false;
//             transitionend = false;
//             evt.currentTarget.classList.add("active");
//         });

//         underLine.addEventListener("mouseleave", evt => {
//             // const target = evt.currentTarget;
//             mouseleave = true;
//             removeClass();            
//         });

//         const lineElement = underLine.querySelector(".line");
//         if (lineElement) {
//             lineElement.addEventListener("transitionend", e => {
//                 if (e.propertyName === "width") {
//                     transitionend = true;
//                     removeClass();
//                     // target.classList.remove("active");
//                 }
//             });
//         }
//         function removeClass() {
//             if (mouseleave && transitionend) {
//                 underLine.classList.remove("active");
//             }
//         }
//     });
// }


// const underLines = document.querySelectorAll(".underline");

// if (underLines && underLines.length) {
//     underLines.forEach(underLine => {
//         let isMouseOver = false;

//         underLine.addEventListener("mouseover", evt => {
//             isMouseOver = true;
//             evt.currentTarget.classList.add("active");
//         });

//         underLine.addEventListener("transitionend", evt => {
//             if (evt.propertyName === "width" && !isMouseOver) {
//                 evt.currentTarget.classList.remove("active");
//             }
//         });

//         underLine.addEventListener("mouseleave", () => {
//             isMouseOver = false;
//         });
//     });
// }



const underLines = document.querySelectorAll(".underline");
if (underLines && underLines.length > 0) {
  underLines.forEach(line => {
    let timeStamp = "";
    line.addEventListener("mouseenter", () => {
      timeStamp = Date.now();
      line.classList.add("active");
    });
    line.addEventListener("mouseleave", () => {
      if (Date.now() - timeStamp < 400) {
        setTimeout(() => {
          line.classList.remove("active");
        }, 400 + Date.now() - timeStamp);
      } else {
        line.classList.remove("active");
      }
    });
  });
}
