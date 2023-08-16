var tl=gsap.timeline();
tl
.from('.navbar',{
    x:-100,
    duration:1
})
.from('.part1',{
    autoAlpha:0,
    scale:1.5,
    duration:1
})
gsap.from('.part3',{
    autoAlpha:0,
    duration:1,
    scrollTrigger:{
        trigger:".part3",
        toggleActions: 'play none none reverse',
        start:'top 50%'
    }
})
gsap.from('.part4',{
    autoAlpha:0,
    scrollTrigger:{
        trigger:".part4",
        toggleActions: 'play none none reverse',
        start:'top 50%'
    }
})
gsap.from('.part5',{
    autoAlpha:0,
    x:-100,
    scrollTrigger:{
        trigger:".part5",
        start:'top 50%'
    }
})
gsap.from('.part6',{
    autoAlpha:0,
    duration:1,
    scrollTrigger:{
        trigger:".part6",
        toggleActions: 'play none none reverse',
        start:'top 50%'
    }
})
gsap.from('.part7',{
    autoAlpha:0,
    x:-100,
    scrollTrigger:{
        trigger:".part7",
        start:'top 50%'
    }
})
gsap.from('.part8',{
    autoAlpha:0,
    x:-100,
    scrollTrigger:{
        trigger:".part8",
        start:'top 50%'
    }
})
gsap.from('.part9',{
    autoAlpha:0,
    scrollTrigger:{
        trigger:".part9",
        toggleActions: 'play none none reverse',
        start:'top 50%'
    }
})
gsap.from('.part12',{
    autoAlpha:0,
    scale:0.5,
    duration:1,
    scrollTrigger:{
        trigger:".part12",
        toggleActions: 'play none none reverse',
        start:'top 50%'
    }
})