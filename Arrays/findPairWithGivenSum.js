/**
 * TechieDelight Solution
 * Arrays
 * Problem 1 : https://www.techiedelight.com/find-pair-with-given-sum-array/
 * Desc :
 *  Given an unsorted array of integers, find a pair with given sumin it
 * 
 *  Naive approach is  Brute force one, which take O(n2) time,
 *  Good solution is to Sort the array first, then solve using Lower and Higher index O(nLogn)
 *  Even better is O(n) complexity with Hashing
 * 
 *  Given below are 2 best solution for the problem
 */


function findPairAfterSorting(inputArray, sum) {
    inputArray.sort();

    let lowerIndex = 0;
    let higherIndex = inputArray.length - 1;

    while (lowerIndex < higherIndex) {

        if (inputArray[lowerIndex] + inputArray[higherIndex] === sum) {
            return {
                result: "Pair found",
                pairs: [lowerIndex, higherIndex]
            };
        }
        if ((inputArray[lowerIndex] + inputArray[higherIndex]) < sum) {
            lowerIndex++;
        } else {
            higherIndex--;
        }
    }

    return {
        result: "No Pair",
        pairs: [undefined, undefined]
    }
}

//This approach used the Hash map data structure, its time complexity will be O(n)
function findPairHashing(inputArray, sum) {
    let numMap = new Map();
    for (let i = 0; i < inputArray.length; i++) {
        if (numMap.has(sum - inputArray[i])) {
            return {
                result: "Pair found",
                pairs: [i, numMap[inputArray[i]]]
            };
        }
        else {
            numMap.set(sum - inputArray[i], inputArray[i]);
        }
    }
    return {
        result : "No Pair",
        pairs : [undefined, undefined]
    }
}