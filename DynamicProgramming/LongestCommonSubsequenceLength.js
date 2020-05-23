/**
 * Longest Common  Subsequence and finding th length
 * Link :  https://www.techiedelight.com/longest-common-subsequence/
 * 
 * Its a Dynamic Programming problem
 */

//It'll be a recursrive call
function findLCSUsingRecursiveApproach(firstInput, secondInput, firstIndex, secondIndex) {

    if (firstIndex === 0 || secondIndex === 0) {
        return 0;
    }

    if (firstInput[firstIndex - 1] === secondInput[secondIndex - 1]) {
        return findLCSUsingRecursiveApproach(firstInput, secondInput, firstIndex - 1, secondIndex - 1) + 1;
    }

    return Math.max(
        findLCSUsingRecursiveApproach(firstInput, secondInput, firstIndex, secondIndex - 1),
        findLCSUsingRecursiveApproach(firstInput, secondInput, firstIndex - 1, secondIndex),
    );
}



//The problem exhibits overlappig subproblem, and can be solved using Dynamic Programming - MEMOIZATION (Top-Down approach)
function findLCSUsingMemoization(firstInput, secondInput, firstIndex, secondIndex, lookup) {

    if (firstIndex == 0 || secondIndex == 0) {
        return 0;
    }

    let key = firstIndex + "-" + secondIndex;

    if (!lookup.has(key)) {

        if (firstInput[firstIndex] === secondInput[secondIndex]) {
            lookup.set(key, findLCSUsingMemoization(firstInput, secondInput, firstIndex - 1, secondIndex - 1, lookup) + 1);
        } else {
            lookup.set(key,
                Math.max(
                    findLCSUsingMemoization(firstInput, secondInput, firstIndex - 1, secondIndex, lookup),
                    findLCSUsingMemoization(firstInput, secondInput, firstIndex, secondIndex - 1, lookup))
            );
        }
    }
    return lookup.get(key);
}

//Solving using Bottom-Up Approach -  Tabulation (Using the table to store the results)
function findLCSUsingTabulation(firstInput, secondInput) {
    let firstLength = firstInput.length;
    let secondLength = secondInput.length;
    let tab = new Array(firstLength + 1);

    for (let i = 0; i <= firstLength; i++) {
        tab[i] = new Array(secondLength + 1)
        for (let j = 0; j <= secondLength; j++) {
            tab[i][j] = 0;
        }
    }

    for (let i = 1; i <= firstLength; i++) {
        for (let j = 1; j <= secondLength; j++) {
            if (firstInput[i - 1] == secondInput[j - 1]) {
                tab[i][j] = tab[i - 1][j - 1] + 1;
            } else {
                tab[i][j] = Math.max(tab[i - 1][j], tab[i][j - 1]);
            }
        }
    }
    return tab[firstLength][secondLength];
}

const fInput = "XMJYAUZW";
const sInput = "MZJAWXUW";
const fLength = fInput.length;
const sLength = sInput.length;

console.log(findLCSUsingRecursiveApproach(fInput, sInput, fLength, sLength));

console.log(findLCSUsingMemoization(fInput, sInput, fLength, sLength, new Map()));

console.log(findLCSUsingTabulation(fInput, sInput));

