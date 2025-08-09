let box=document.querySelectorAll(".cell");
let restartBtn=document.querySelector(".Restart");
let container=document.querySelector(".win");
let winMessage=document.querySelector(".Message");

let turnX=true;

const winCombos=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

box.forEach((cell)=>{
    cell.addEventListener("click",()=>{
        if(cell.innerText !=="") return;

        cell.innerText=turnX?"X":"O";
        cell.style.color=turnX?"blue":"red";
        turnX=!turnX;
        cell.disabled=true;

        Winner();
    });
});

const Winner=()=>{

    for(let pattern of winCombos){
        let value1=box[pattern[0]].innerText;
        let value2=box[pattern[1]].innerText;
        let value3=box[pattern[2]].innerText;
        if(value1===value2 && value2===value3 && value1!==""){
            console.log("Winner is:-"+value1);
            showWinner(value1, pattern);
            return; 
        }
    }
}

const showWinner=(winner, pattern)=>{
    winMessage.innerText="Congratulations Player "+winner+" You have Won!";
    winMessage.classList.add("show"); 
    container.classList.remove("hide");
    pattern.forEach(index => {
        box[index].classList.add("winner-cell");
    });

    box.forEach((cell)=>{
        cell.disabled=true;
    });
}

restartBtn.addEventListener("click",()=>{
    turnX=true;
    box.forEach((cell)=>{
        cell.innerText="";
        cell.disabled=false;
        cell.style.color=""; 
        cell.classList.remove("winner-cell"); 
    });
    winMessage.classList.remove("show"); 
    container.classList.add("hide");
});
