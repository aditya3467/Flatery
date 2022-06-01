var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
       node.classList.remove('border');
    });
    tabButtons[panelIndex].style.backgroundColor="#d7d4d4";
    // tabButtons[panelIndex].style.color="white";
    tabButtons[panelIndex].classList.add('border');
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    // tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#f44336');