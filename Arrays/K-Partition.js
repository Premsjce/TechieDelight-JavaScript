/**
 * K-Partition problem  : print all partitions
 * Link : https://www.techiedelight.com/k-partition-problem-print-all-subsets/
 * 
 * In this problem, we need to partition an arry of positive integers into k disjoint subset 
 * where sum of all elements in each subsets are equal
 * K will be given
 */

const ds = require("../Utils/DataStructures");


function driver() {
    let input = [7, 3, 5, 12, 2, 1, 5, 3, 8, 4, 6, 4];
    let k = 5;
    partition(input, k);
}

//Main funtion to solve K-Partition problems
function partition(input, k) {
    //Get number of items in input array
    let n = input.length;

    //Base case
    if (n < k) {
        console.log("K - Partition is not possibe witk just " + n + " elements");
        return false;
    }

    //Get sum of all elements
    let sum = 0;
    input.forEach(item => sum += item);
    console.log("Total sum of all elements : " + sum);

    //Create an Array of size K for each subset and initialize it
    //by their expected sum. i.e sum/k
    let sumLeft = ds.array1DWithInit(1, sum / k);

    let result = (sum % k) && subsetSum(input, n - 1, sumLeft, A, k);

    if (!result) {
        console.log("Partition is not possible");
        return;
    }

    //Print all K partitions

}

function subsetSum(input, len, sumLeft, A, k) {
    //return true if subset is found
    if (checkSum(sumLeft, k)) {
        return true;
    }

    //basecase, no items left
    if (len < 0) {
        return false;
    }

    let result = false;

    //consider current item input[n], and explore all possibilities
    //using backtracking
    for (let i = 0; i < k; i++) {
        if (!result && (sumLeft[i] = input[len]) >= 0) {
            A[len] = i + 1;
            sumLeft[i] = sumLeft[i] - input[len];
            result = subsetSum(input, len - 1, sumLeft, A, k);

            //backtrack -- remove current item from ith subset
            sumLeft[i] = sumLeft[i] + input[len];
        }
    }
    return result;
}

function checkSum(sumLeft, k) {
    let r = true;
    for (let i = 0; i < k; i++) {
        if (sumLeft[i] != 0) {
            r = false;
        }
    }
    return r;
}