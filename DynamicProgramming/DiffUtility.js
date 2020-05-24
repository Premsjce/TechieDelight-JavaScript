/**
 * Link : https://www.techiedelight.com/implement-diff-utility/
 * Implementing the difference utility
 */


//This function returns the string comparing inputOne with inputTwo
//returns the string highlighting the difference
function diff(inputOne, inputTwo, firstLength, secondLength, lookup) {

    //If last character of inputOne and inputTwo matches
    if (firstLength > 0 && secondLength > 0 && inputOne[firstLength - 1] === inputTwo[secondLength - 1]) {
        diff(inputOne, inputTwo, firstLength - 1, secondLength - 1, lookup);
        output += " " + inputOne[firstLength - 1];
    } else if (secondLength > 0 && (firstLength === 0 || lookup[firstLength][secondLength - 1] >= lookup[firstLength - 1][secondLength])) {
        diff(inputOne, inputTwo, firstLength, secondLength - 1, lookup);
        output += " +" + inputTwo[secondLength - 1];
    } else if (firstLength > 0 && (secondLength == 0 || lookup[firstLength][secondLength - 1] < lookup[firstLength - 1][secondLength])) {
        diff(inputOne, inputTwo, firstLength - 1, secondLength, lookup);
        output += " -" + inputOne[firstLength - 1];
    }
}

//Filling up the Longest common subsequence lookup table
function findLCSUsingDP(firstInput, secondInput, lookup) {
    let fLength = firstInput.length + 1;
    let sLength = secondInput.length + 1;

    lookup = new Array(fLength +1);

    for (let i = 0; i <= fLength; i++) {
        lookup[i] = new Array(sLength+1);
        for (let j = 0; j <= sLength; j++) {
            lookup[i][j] = 0;
        }
    }

    for (let i = 1; i <= fLength; i++) {
        for (let j = 1; j < sLength; j++) {
            if (firstInput[i - 1] == secondInput[j - 1]) {
                lookup[i][j] = lookup[i - 1][j - 1] + 1;
            } else {
                lookup[i][j] = Math.max(lookup[i - 1][j], lookup[i][j - 1]);
            }
        }
    }
    return lookup;
}

const fInput = "XMJYAUZW";
const sInput = "MZJAWXUW";
const fLength = fInput.length;
const sLength = sInput.length;
let lookup = findLCSUsingDP(fInput, sInput, new Map());
let output = "";
diff(fInput, sInput, fLength, sLength, lookup, output);

console.log(output);