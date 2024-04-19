let box = document.querySelectorAll(".box");
let turn;
let msg = document.querySelector(".msg");
let reset = document.querySelector(".reset");
let counter = 0;
let winner = false;

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



checkResult = () => {
    for (const pattern of result) {


        const pvalue1 = box[pattern[0]].textContent;
        const pvalue2 = box[pattern[1]].textContent;
        const pvalue3 = box[pattern[2]].textContent;

        if (pvalue1 != "" && pvalue2 != "" && pvalue3 != "") {
            if (pvalue1 === pvalue2 && pvalue2 === pvalue3) {
                msg.innerHTML = `${pvalue1} won`;
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


}



box.forEach(element => {


    element.addEventListener("click", () => {
        getTurn(element);

        element.disabled = true;
        counter++;
        checkResult();
        if (counter > 8 && winner === false)
            msg.innerHTML = "Match is draw try again";

    })

})

reset.addEventListener("click", () => {
    box.forEach(element => {
        element.innerHTML = "";
        element.disabled = false;
        msg.innerHTML = "TicTacToe";
        counter = 0;
        winner = false;
    });
})


