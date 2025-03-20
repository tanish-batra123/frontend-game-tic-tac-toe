let boxes = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let newbutton = document.querySelector(".new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
const winpattern = [
    [0, 1, 2], [0, 3, 6], [3, 4, 5], [6, 7, 8],
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];

// Sound effects
let winSound = new Audio("play-time-fun-upbeat-gaming-birthday-music-259703.mp3"); 


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "blue";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "red";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

function checkwinner() {
    for (let pattern of winpattern) {
        let post1 = boxes[pattern[0]].innerText;
        let post2 = boxes[pattern[1]].innerText;
        let post3 = boxes[pattern[2]].innerText;

        if (post1 !== "" && post1 === post2 && post2 === post3) {
            console.log("🎉 Winner:", post1);
            msg.innerText = `🎉 Winner: ${post1}`;
            msgcontainer.classList.remove("hide");
            winSound.play();

            
            boxes.forEach((box) => box.disabled = true);
            return;  
        }
    }

    
    let isDraw = [...boxes].every(box => box.innerText !== "");
    if (isDraw) {
        console.log("😐 Match Draw!");
        msg.innerText = "😐 Match Draw!";
        msgcontainer.classList.remove("hide");
        winSound.play();  
    }
}

function resetgame() {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        box.style.color = "black"; 
    });

    turnO = true;
    msgcontainer.classList.add("hide");
    winSound.pause();
    winSound.currentTime = 0;
    drawSound.pause();
    drawSound.currentTime = 0;
}

reset.addEventListener("click", resetgame);
newbutton.addEventListener("click", resetgame);
