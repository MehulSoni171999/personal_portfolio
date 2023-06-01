function revealToSpan() {

    document.querySelectorAll(".reveal")
        .forEach(function (elem) {
            var parent = document.createElement('span');
            var child = document.createElement('span');

            parent.classList.add('parent');
            child.classList.add('child');

            child.innerHTML = elem.innerHTML;
            parent.appendChild(child);

            elem.innerHTML = '';
            elem.appendChild(parent);
        });

}


function loaderAnimation() {

    var tl = gsap.timeline();

    tl
        .from('#loader .parent .child span', {
            x: '50px',
            duration: 1,
            // opacity:0,
            delay: 1,
            stagger: .2,
            ease: Power3.easeInOut,
        })
        .to('#loader .parent .child', {
            y: "-100%",
            duration: 1.5,
            // delay:1,
            ease: Circ.easeInOut,
        })
        .to('#loader', {
            height: '0vh',
            duration: 1,
            // delay:1,
            ease: Power3.easeInOut,
        })

        .to('#elem', {
            height: "100%",
            top: '0vh',
            duration: 1.5,
            delay: -1,
            ease: Power3.easeInOut,
          
        })
        .to('#elem', {
            height: '0vh',
            duration: 1,
            delay: -.5,
            ease: Power3.easeInOut,
            onComplete: function () {
                aniimateHome()
                navanim()
            }
        })


}

function navanim(){
    document.querySelector('nav').style.backgroundColor = 'initial';
}


function animateSVG() {
    document.querySelectorAll("#Visual>g").forEach(function (e) {
        var charecter = e.childNodes[1].childNodes[1];
        charecter.style.strokeDasharray = charecter.getTotalLength() + "px";
        charecter.style.strokeDashoffset = charecter.getTotalLength() + "px";

    })
    
}


function visual() {
    var ts = gsap.timeline();
    ts.to('#Visual>g>g>#v_path', {
        strokeDashoffset: 0,
        duration: 1,
        ease: Expo.easeIn,
        //  delay:2
    })
        .to('#Visual>g>g>#i_path', {
            strokeDashoffset: 0,
            duration: .7,
            ease: Expo.easeIn,
            delay: -.5
        })
        .to('#Visual>g>g>#s_path', {
            strokeDashoffset: 0,
            duration: .7,
            ease: Expo.easeIn,
            delay: -.35
        })
        .to('#Visual>g>g>#u_path', {
            strokeDashoffset: 0,
            duration: .7,
            ease: Expo.easeIn,
            delay: -.35
        })
        .to('#Visual>g>g>#a_path', {
            strokeDashoffset: 0,
            duration: .7,
            ease: Expo.easeIn,
            delay: -.35
        })
        .to('#Visual>g>g>#l_path', {
            strokeDashoffset: 0,
            duration: .9,
            ease: Expo.easeIn,
            delay: -.35
        })
        .to('#Visual>g>g>#dot_path', {
            strokeDashoffset: 0,
            duration: .5,
            ease: Expo.easeIn,
            delay: -.45
        })


}
function valueset() {
    gsap.set("#nav a", { y: "-100%, opacity:0" })
    gsap.set("#home .parent .child", { y: "100%" })
    gsap.set("#home row img", { opacity: 0 })
}

animateSVG()

function aniimateHome() {


    var tl = gsap.timeline();

    tl.to("#nav a", {
        y: 0,
        opacity: 1,
        stagger: .05,
        ease: Expo.easeInOut0

    })
        .to(".row img", {
            // y:0,
            opacity: 1,
            // stagger:.1,
            duration: .5,
            ease: Expo.easeInOut,

        })
        .to("#home .parent .child", {
            y: 0,
            // opacity:1,
            // stagger:.1,
            duration: 1,
            delay: -1,
            ease: Expo.easeInOut0,
            onComplete: function () {
                visual()
            }


        })


}
function loco() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

function showCard() {
    // var relX;
    // var relY;

    // $(".image").mousemove(function(e){
    //     var parentOffset = $(this).offset(); 
    //     var relX = e.pageX - parentOffset.left;
    //     var relY = e.pageY - parentOffset.top;
        
    //  });   
  

    var cnt = document.querySelectorAll(".cnt")
     
    cnt.forEach((e) => {
        var showingImage;
       
        e.addEventListener('mousemove', function (dets) {
          
            showingImage=dets.target;
            var arrayColor= ["#8CC6D7","#D1DFE9","#7F869E","#B5B5D8","#E4F6F3"]
            dets.target.style.filter = "grayscale(1)"
            document.querySelector('#workfeed').style.background  = `${arrayColor[dets.target.dataset.index]}`;
            })
        e.addEventListener("mouseleave", function (dets) {
             showingImage.style.filter = "grayscale(0)"
            document.querySelector('#workfeed').style.background  = "#F5F5DC";  
        })
    })
}

var navcomponent=document.querySelectorAll("nav h1")

navcomponent.forEach(function (data) {
    var i=0;
      var clutter = "";
      data.textContent.split("")
        .forEach(function (elem) {
          var done=`<span class='reverse'>${elem}</span>`
          // done.style.animationOrder= `${i++}`
          clutter +=  done;
        })
      data.innerHTML = clutter;

    })  


    let hand=document.querySelector('.hand')
    let title=document.querySelector('.lets')
  let mouseX;
  let mouseY;

document.querySelector('#main').addEventListener('mousemove',(e)=>{
    mouseX=e.mouseX;
    mouseY=e.mouseY;
    console.log(mouseX,mouseY)

})

  title.addEventListener('mouseenter',()=>{
      gsap.to(hand,1,{
        scale:1.2,
        opacity:1,
        top:"-25px",
        left:"-75px",
        rotate:0,
        ease:Elastic.easeOut.config(1,0.3)
      })
  })

  title.addEventListener('mousemove',(e)=>{
    gsap.to(hand,1,{
       x:e.clientX,
       y:e.clientY,
    })
})

title.addEventListener('mouseleave',()=>{
    gsap.to(hand,1,{
      scale:0,
      opacity:0,
      top:"15px",
      left:"35px",
      rotate:45,
      ease:Elastic.easeOut.config(1,0.1)
    })
})
 

 function linesvg(){
    document.querySelectorAll("#wave>path").forEach(function (e) {
        var charecter = e;
        console.log(e)
        charecter.style.strokeDasharray = charecter.getTotalLength() + "px";
        charecter.style.strokeDashoffset = charecter.getTotalLength() + "px";

    })
   gsap.to("#wave>path", {
        scrollTrigger: {
    
            trigger: "#workfeed",
            // pin: "#workfeed",
            start: "top 45%",
            end: "top -135%",
            // markers:true,

            // end: "bottom 90%",

            

            // markers:true,
            scrub: 1,
        },
        // opacity:1,
        strokeDashoffset:0,
        // ease:easeIn
        // stagger: 1,
    })

 }

 var wi=window.innerWidth;
 function linesvg2(){
    document.querySelectorAll("#wave>path").forEach(function (e) {
        var charecter = e;
        console.log(e)
        charecter.style.strokeDasharray = charecter.getTotalLength() + "px";
        charecter.style.strokeDashoffset = charecter.getTotalLength() + "px";

    })
   gsap.to("#wave>path", {
        scrollTrigger: {
    
            trigger: "#workfeed",
            // pin: "#workfeed",
            start: "top 0%",
            end: "top -255%",
            // markers:true,
            // end: "bottom 90%",

            

            // markers:true,
            scrub: .1,
        },
        // opacity:1,
        strokeDashoffset:0,
        // ease:easeIn
        // stagger: 1,
    })

 }
 if( wi < 800){
    linesvg2()
 }else{
    linesvg()
 }
 
showCard()

loco()

revealToSpan()
loaderAnimation()

valueset()
animateSVG()


