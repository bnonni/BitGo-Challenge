function SearchingChallenge(strArr) {
    let slice = 0;
    let columns = strArr[0].length - 1;
    let rowStringMatrix = '';
    let colStringMatrix = '';
    
    for(let row of strArr){
     rowStringMatrix += row
    }
    while(slice <= columns){
        for(let row of strArr){
            colStringMatrix += row[slice]
        }
        slice++;
    }
    let rowHoles = (rowStringMatrix.match(new RegExp("(0)\\1+", "g")) || []).length;
    let columnHoles = (colStringMatrix.match(new RegExp("(0)\\1+", "g")) || []).length;
    return rowHoles + columnHoles;
}

let a = ['01111', '01101', '00011', '11110'];
let b = ['1011', '0010'];
let c = ["110", "000", "111"]
console.log(SearchingChallenge(a));
console.log(SearchingChallenge(b));
console.log(SearchingChallenge(c));