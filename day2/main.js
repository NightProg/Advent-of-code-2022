const fs = require("fs");

function readFile() {

    let e = [];
    let file = fs.readFileSync("input.txt");
    let lines = file.toString().split("\n");
    lines.forEach(element => {
        e.push(element.split(" "))
    });
    return e;
}

function countScore(list) {
    let score = 0;
    let dv = {"A": 1, "B": 2, "C": 3}
    let dl = {"X": "A", "Y": "B", "Z": "C"}
    let lr = ["AB", "BC", "CA"]
    list.forEach((x) => {
        let letter = dl[x[1]]
        let value = dv[letter]
        if (x[0] == letter) {
            score += 3 + value
        } else if (lr.includes(x[0] + letter)) {
            score += 6 + value
        } else {
            score += value
        }

    })
    return score
}

function countScorev2(list) {
    let score = 0;
    let dv = {"A": 1, "B": 2, "C": 3}
    let dl = {"X": "A", "Y": "B", "Z": "C"}
    let lr = ["AB", "BC", "CA"]
    let drr = {"AA": "AC", "BA":"BA", "CA":"CB", "AB": "AA", "BB":"BB", "CB":"CC", "AC":"AB", "BC":"BC","CC": "CA"}
    list.forEach((x) => {
        let letter = dl[x[1]]
        let value = dv[letter]
        let fv = drr[x[0] + letter];
        if (fv[0] == fv[1]) {
            score += 3 + dv[fv[1]]
        } else if (lr.includes(fv)) {
            score += 6 + dv[fv[1]]
        } else {
            score += dv[fv[1]]
        }

    })
    return score
}
console.log(countScorev2(readFile()))