const hello = document.querySelector("body h2");
const body = document.body;






function assignment (){
  let garo = window.innerWidth;

  if(garo >1300){
    body.classList.add("mango")
    body.classList.remove("grape")
    body.classList.remove("sky");
  }

  else if(garo <=1300 && garo>1000){
    body.classList.remove("mango")
    body.classList.add("grape")
    body.classList.remove("sky");
  } 
  else{
    body.classList.remove("mango")
    body.classList.remove("grape")
    body.classList.add("sky");
  }
}


window.addEventListener("resize", assignment);


// function assignment (){
//   let garo = window.innerWidth;

//   if(garo >1300){
//     body.style.backgroundColor= "yellow";
//   }

//   else if(garo <=1300 && garo>1000){
//     body.style.backgroundColor= "purple";
//   } 
//   else{
//     body.style.backgroundColor= "navy";
//   }
// }


// window.addEventListener("resize", assignment);
