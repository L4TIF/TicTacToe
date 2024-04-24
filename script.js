let box = document.querySelectorAll(".box");
let turn = true;
let msg = document.querySelector(".msg");
let bigmsg = document.querySelector(".bigmsg");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".newGame");
let counter = 0;
let winner = false;
let winX = document.querySelector(".X");
let winO = document.querySelector(".O");
let winCountX = 0;
let winCountO = 0;
let playturn = document.querySelector(".turn");

let result = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
winCounterO = () => {

    winCountO++;


    winO.innerHTML = `O: ${winCountO}`;

    //round winner
    if (winCountO === 10) {
        bigmsg.style.display = "block";
        bigmsg.innerHTML = "O won 10 rounds";
        reset.disabled = "true"
    }
}
winCounterX = () => {


    winCountX++;

    winX.innerHTML = `X: ${winCountX}`;

    //round winner
    if (winCountX === 10) {
        bigmsg.style.display = "block";
        bigmsg.innerHTML = "X won 10 rounds";
        reset.disabled = "true"
    }
}


checkResult = () => {
    for (const pattern of result) {



        const pvalue1 = box[pattern[0]].textContent;
        const pvalue2 = box[pattern[1]].textContent;
        const pvalue3 = box[pattern[2]].textContent;

        if (pvalue1 != "" && pvalue2 != "" && pvalue3 != "") {
            if (pvalue1 === pvalue2 && pvalue2 === pvalue3) {
                msg.innerHTML = `${pvalue1} won`;
                pvalue1 === 'X' ? winCounterX() : winCounterO();
                playturn.innerHTML = "";

                winner = true;

                for (const iterator of box) {
                    iterator.disabled = true;

                }

            }


        }

    }

}



getTurn = (element) => {

    if (turn) {

        element.innerHTML = "X";
        turn = false;

    }
    else {

        element.innerHTML = "O";
        turn = true;
    }
    //calling func check turn
    checkturn();

}



box.forEach(element => {


    element.addEventListener("click", () => {
        getTurn(element);

        element.disabled = true;
        counter++;
        checkResult();


        if (counter > 8 && winner === false) {
            playturn.innerHTML = "";
            msg.innerHTML = " Draw try again";
            msg.style.color = "Red";
        }

    })

})


//cheking turn
checkturn = () => {
    if (turn)
        playturn.innerHTML = "X turn";
    else
        playturn.innerHTML = "O turn";
}



//reset button

reset.addEventListener("click", () => {
    box.forEach(element => {
        element.innerHTML = "";
        element.disabled = false;
        msg.innerHTML = "TicTacToe";
        counter = 0;
        winner = false;
        msg.style.color = "";
        playturn.innerHTML = "";
        checkturn();
    });
})

//newgame button

newGame.addEventListener("click", () => {
    box.forEach(element => {
        element.innerHTML = "";
        element.disabled = false;
        msg.innerHTML = "TicTacToe";
        counter = 0;
        winner = false;
        msg.style.color = "";
        winCountX = 0;
        winCountO = 0;
        winX.innerHTML = "X: 0";
        winO.innerHTML = "O: 0";
        bigmsg.style.display = "none";
        reset.disabled = false;
        checkturn();


    });
})

