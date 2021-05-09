function SearchingChallenge(strArr) {
    let twoD = [];
    let contiguous = 0;
    let rows = strArr.length - 1;
    let columns = strArr[0].length - 1;
    for (let arr of strArr) {
        let newArr = [];
        for (let str of arr.split('')) {
            newArr.push(str * 1);
        }
        twoD.push(newArr);
    }

    for (let j = 0; j < rows; j++) {
        for (let k = 0; k < columns; k++) {
            let positionValue = twoD[j][k];
            let rightValue = twoD[j][k + 1];
            let downValue = twoD[j + 1][k];
            if (positionValue === 0) {
                if (k < columns) {
                    positionValue === rightValue ? (contiguous += 1) : 0;
                    positionValue === downValue ? (contiguous += 1) : 0;
                } else {
                    positionValue === downValue ? (contiguous += 1) : 0;
                }
            }
        }
    }
    return contiguous;
}

let a = ['01111', '01101', '00011', '11110'];
let b = ['1011', '0010'];
let c = ["110", "000", "111"]
console.log(SearchingChallenge(a));
console.log(SearchingChallenge(b));
console.log(SearchingChallenge(c));