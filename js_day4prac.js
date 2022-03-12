// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// // <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

// const mainText = document.querySelector("body h2");

// function handleMouseMainTextOn(){
//   mainText.style.color = colors[0];
//   mainText.innerText="The mouse is here!!";
// }

// function handleMouseMainTextLeave(){
//   mainText.style.color =colors[1];
//   mainText.innerText="The mouse is gone!!";
// }

// function handleWindowResize(){
//   mainText.style.color = colors[2];
//   mainText.innerText="You just resized!!";  
// }

// function handleContextmenu(){
//   mainText.style.color = colors[3];
//   mainText.innerText="That was a right click!!";  
// }




const mainText = document.querySelector("body h2");

const superEventHandler = {

  handleMouseMainTextOn : function (){
    mainText.style.color = colors[0];
    mainText.innerText="The mouse is here!!";
  },

  handleMouseMainTextLeave: function (){
    mainText.style.color =colors[1];
    mainText.innerText="The mouse is gone!!";
},


  handleWindowResize : function (){
    mainText.style.color = colors[2];
    mainText.innerText="You just resized!!";
  },

  handleContextmenu : function (){
    mainText.style.color = colors[3];
    mainText.innerText="That was a right click!!"; 
  }
};




mainText.addEventListener("mouseenter" ,superEventHandler.handleMouseMainTextOn);
mainText.addEventListener("mouseleave",superEventHandler.handleMouseMainTextLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.handleContextmenu);
