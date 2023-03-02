const textArea=document.getElementById("textArea");
const totalCounter=document.getElementById("total-counter");
const remCounter=document.getElementById("remaining-counter");

textArea.addEventListener("keyup",()=>{updateCounter()});

function updateCounter()
{
   totalCounter.innerHTML=textArea.value.length;
   remCounter.innerHTML=textArea.getAttribute("maxlength")-textArea.value.length;
}
