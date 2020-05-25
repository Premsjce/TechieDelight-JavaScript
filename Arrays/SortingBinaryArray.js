/**
 * Sorting the Binary array (Which contains just 0's and 1's) in Linear time
 * Link : https://www.techiedelight.com/sort-binary-array-linear-time/
 */

 function sortBinaryArray(binArray){
     let len = binArray.length;
     let oneCounter = 0;
     //count no of 1's present in total array
     for(let i = 0; i < len;i++){
         if(binArray[i] ===  1){
             oneCounter+=1;
         }
     }

     let result = Array(len).fill(0);

     //initialize rest of result with 1's
     for(let i = (len - oneCounter); i < len; i++){
         result[i] = 1;
     }

     return result;
 }

 let input  = [1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0];
 console.log("Before sortin : " + input);
 console.log("After sorting : " + sortBinaryArray(input));