let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelectorAll(".RESET");
let msgcontainer= document.querySelector(".msgcontainer");
let msg=document.querySelector(".msg");
let reset = document.querySelector(".reset")

let turn0 = true;

const winpatterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8]
    , [1, 4, 7], [2, 4, 6], [2, 5, 8],
    [3, 4, 5], [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turn0){
            box.innerText="0"
            turn0=false;
        }
        else{
            box.innerText="X"
            turn0=true;
        }
        box.disabled=true;

        checkwinner();
    })
})
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
  };

const checkwinner=()=>{
    for(let patterns of winpatterns){
        let p1val=boxes[patterns[0]].innerText;
        let p2val=boxes[patterns[1]].innerText;
        let p3val=boxes[patterns[2]].innerText;

        if(p1val !="" && p2val !="" && p3val !=""){
            if(p1val===p2val && p2val===p3val){
                console.log("winner "+p1val);
                showWinner(p1val);
            }
        }
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };
  

const resetGame=()=>{
    turn0=true;
    count = 0;
  enableBoxes();
  msgcontainer.classList.add("hide");
}
reset.addEventListener("click", resetGame);

