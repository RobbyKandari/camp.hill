const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".foter"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  
gsap.to(".about",{
    scrollTrigger:{
        trigger:`#page2>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})
gsap.to(center, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: .5,
      trigger: `.center`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  