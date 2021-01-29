document.querySelector("#students-container").addEventListener("click", (event)=>{
    let clickedElement = event.target;
    if(clickedElement.tagName.toLowerCase() === "button"){
        let index = parseInt(clickedElement.id);
        removeFromList(index);
    } 
});



