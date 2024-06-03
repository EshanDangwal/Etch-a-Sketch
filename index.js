const body=document.body;
const container=document.createElement("div");
container.setAttribute("id","container");
container.addEventListener("mouseover",(event)=>{
    event.stopPropagation();
    event.preventDefault();
    event.target.style.backgroundColor="green";
})
function createGrid(gridNumber=16){
    for(let i=0;i<gridNumber;i++){
        const gridItem=document.createElement("div");
        for(let j=0;j<gridNumber;j++){
            const gridItemChild=document.createElement("div");
            container.appendChild(gridItemChild);
        }
        container.appendChild(gridItem);
    }
}

const gridBtn=document.createElement("button");
gridBtn.textContent="Customise Grid";

gridBtn.addEventListener("click",()=>{
    const userInput=parseInt(prompt("Input grid size"));
    createGrid(userInput??16);
});
body.appendChild(gridBtn);
body.appendChild(container);



createGrid();
