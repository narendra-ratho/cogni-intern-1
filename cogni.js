gsap.to(".navbar img", {
    
    rotation: 360,
    duration: 1.5,
    delay: 0.8,
    ease: "bounce",
    
    
})
gsap.from("#navbarNav a", {
   y: -30,
    opacity: 0,
   duration: 1,
   stagger: 0.3,
  
  
    
})
gsap.from(".left #video1", {
    x: 300,
    opacity: 0,
    duration: 1.7,
    delay: 0.5,
   
   
})
// gsap.from(".right #H", {
//   scrollTrigger: ".right #H",
//     x: -200,
//     opacity: 0,
//     duration: 1.5,
//     markers: true,
//     scroller:"body,"
// })
gsap.from(".right #H", {
  x: -200,
    opacity: 0,
    duration: 1.5,
    
})
gsap.from(".right h2", {
  x:200,
  opacity:0,
  duration:1.5,
  delay:0.3,
  stagger: 0.3,
})
gsap.from(".right p",{
    y:100,
    opacity:0,
    duration:1.5,
    delay:0.5,
})
gsap.from(".right .btn",{
    y:100,
    opacity:0,
    duration:1.5,
    delay:0.5,
})
gsap.from(".scr h1",{
    transform:"translateX(-110%)",
    scrollTrigger:{
        trigger:".scr",
        // markers:true,
        start:"top 210%",
       scrub:2,
        
       
        
    }
    
    
})
gsap.from(".anim img",{
    rotation: 360,
    duration: 3,
    scrollTrigger:{
        trigger:".anim",
        
        start:"top 80%",
        end:"top 50%",
        scrub:2,
     
    }
})