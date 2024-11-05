// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger) 

var timeline = gsap.timeline()


timeline.from(".logo",{
    opacity:0,
    duration:1.5,
    delay:3.3,
    x:-300
})


timeline.from(".nav-items",{
    opacity:0,
    duration:1,
    y:-50,
})



gsap.from("#carouselExampleIndicators",{
    y:-100,
    duration:1.5,
    opacity:0
})

gsap.from("#gsap0",{
    x:-500,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#gsap0",
        scroller:"body"
    }
})
gsap.from("#gsap3",{
    x:500,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#gsap3",
        scroller:"body"
    }
})

gsap.from("#exp1",{
    x:800,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#exp1",
        scroller:"body"
    }
})
gsap.from(".experience-counter",{
    x:-800,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".experience-counter",
        scroller:"body"
    }
})


gsap.from("#gsap1",{
    x:-500,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#gsap1",
        scroller:"body"
    }
})
gsap.from("#gsap2",{
    x:500,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#gsap2",
        scroller:"body"
    }
})
gsap.from("#gsap4",{
    opacity:0,
    duration:0.5,
    scale:0,
    scrollTrigger:{
        trigger:"#gsap4",
        scroller:"body"
    }
})
gsap.from("#gsap6",{
    opacity:0,
    duration:1,
    scale:1,
    scrollTrigger:{
        trigger:"#gsap6",
        scroller:"body"
    }
})
gsap.from("#btn",{
    opacity:0,
    duration:1,
    y:-10,
    scale:1,
    scrollTrigger:{
        trigger:"#btn",
        scroller:"body"
    }
})
gsap.from("#welcmimg",{
    opacity:0,
    duration:1,
    x:-300,
    scrollTrigger:{
        trigger:"#welcmimg",
        scroller:"body"
    }
})
gsap.from("#faq",{
    opacity:0,
    y:20,
    duration:1,
    scrollTrigger:{
        trigger:"#faq",
        scroller:"body"
    }
})

gsap.from(".form-container",{
    opacity:0,
    y:20,
    duration:1,
    scrollTrigger:{
        trigger:".form-container",
        scroller:"body"
    }
})

gsap.from("#cookie-banner",{
    opacity:0,
    y:200,
    duration:1,
    delay:4,
    scrollTrigger:{
        trigger:"#cookie-banner",
        scroller:"body"
    }
})

