let tl=gsap.timeline();
tl.from(".right",{
    opacity:0,
    x:50,
    duration:1
})

tl.from(".left div:nth-of-type(1)",{
    opacity:0,
    y:50,
    duration:0.5
})

tl.from(".left p",{
    opacity:0,
    y:50,
    duration:0.3
})

tl.from(".left div:nth-of-type(2)",{
    opacity:0,
    y:50,
    duration:0.3
})
tl.from("footer",{
    opacity:0,
    y:50,
    duration:0.5
})

tl.from(".img1",{
    opacity:0,
    duration:0.3
})
tl.from(".img2",{
    opacity:0,
    duration:0.3
})
tl.from(".img3",{
    opacity:0,
    duration:0.3
})
tl.from(".img4",{
    opacity:0,
    duration:0.3
})
