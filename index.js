// 4.26.2020
function twoSum(numbers, target) {
    for(x=0;x<numbers.length-1;x++){
        for (i=0;i<numbers.length-1;i++){
            if (numbers[x] + numbers[i+1] === target){
                return [x,(i+1)]
            }
        }
    }    
}

console.log(twoSum([1234,5678,9012], 14690))
// answer should be [1,2]
