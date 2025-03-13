let boxes=document.querySelectorAll(".btn");
let reset=document.querySelector(".reset");
let newbutton=document.querySelector(".new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
const winpattern=[
    [0,1,2],[0,3,6],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO===true){
            box.innerText="O";
            box.style.color=turnO? "blue":"red";
            turnO=false; // xturn 
        }
        else{
            box.innerText="X";
            turnO=true; //o turn 
        }
        box.disabled=true;
        checkwinner();
    });


});
let winSound = new Audio("play-time-fun-upbeat-gaming-birthday-music-259703.mp3"); 

function checkwinner(){
    let isDraw = true;
    for(pattern of winpattern){
        let post1 = boxes[pattern[0]].innerText;
        let post2 = boxes[pattern[1]].innerText;
        let post3 = boxes[pattern[2]].innerText;
        
        if (post1 !== "" && post1 === post2 && post2 === post3) {
            console.log("🎉 Congratulations Winner is:", post1);
           
            msg.innerText = `🎉 Congratulations Winner is: ${post1}`;
            msgcontainer.classList.remove("hide"); // Show the winner message
            winSound.play();

            boxes.forEach((box) => {
                box.disabled = true;
            });
        }
        

    }
    boxes.forEach((box)=>{
        if(box.innerText===""){
            isDraw=false;
        }
    });
    if (isDraw) {
        console.log("😐 Match Draw!");
        msg.innerText = "😐 Match Draw!";
        msgcontainer.classList.remove("hide");
        winSound.play(); 
    }
    return ;

};


function resetgame() {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        box.style.color = "red";
    });

    turnO = true;
    msgcontainer.classList.add("hide");
    winSound.pause();
    winSound.currentTime = 0;
}


reset.addEventListener("click", resetgame);
newbutton.addEventListener("click", resetgame);
