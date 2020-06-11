(function() {
  'use strict';

  //need a stop, slow, and go button

  //happens on click

  //need eventlistener for each

  //first get the elements
  let stop = document.getElementById('stopButton');
  let slow =  document.getElementById('slowButton');
  let go = document.getElementById('goButton');

  let stoplight = document.getElementById("stopLight")
  let slowLight = document.getElementById("slowLight")
  let golight = document.getElementById("goLight")

  let stopClicked = false;
  let slowClicked = false;
  let goClicked = false;
  //next add eventlistener

  stop.addEventListener("click", function(){
   stopClicked = !stopClicked

    if(stopClicked){
    stopLight.classList.add("stop")
    } else {
    stopLight.classList.remove("stop")
    }
  })

  slow.addEventListener("click",  function(){
    slowClicked = !slowClicked

     if(slowClicked){
     slowLight.classList.add("slow")
     } else {
     slowLight.classList.remove("slow")
    }
  })

  go.addEventListener("click", function(){
    goClicked = !goClicked

    if(goClicked){
    goLight.classList.add("go")
    } else{
    goLight.classList.remove("go")
    }
  })


    //mouse Events

    stop.addEventListener('mouseenter', e=>{
      console.log(`Entered ${stop.innerText} button`)
    })

    slow.addEventListener('mouseenter', e=>{
      console.log(`Entered ${slow.innerText} button`)
    })

    go.addEventListener('mouseenter', e=>{
      console.log(`Entered ${go.innerText} button`)
    })

    stop.addEventListener('mouseleave', e=>{
      console.log(`Left ${stop.innerText} button`)
    })

    slow.addEventListener('mouseleave', e=>{
      console.log(`Left ${slow.innerText} button`)
    })

    go.addEventListener('mouseleave', e=>{
      console.log(`Left ${go.innerText} button`)
    })

    /*bonus still working
    document.getElementById("controls").addEventListener('click', e=>{
      if(e.target && e.target.className === "button"){

      }
    })*/


})();
