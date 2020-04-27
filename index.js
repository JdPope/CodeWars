// 4.26.2020
function twoSum(numbers, target) {
    for (i=0; i<numbers.length-1; i++) {
        for (j=i+1; j<numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i,j]
        }
    }    
}
// console.log(twoSum([1234,5678,9012], 14690))
// answer should be [1,2]

// 4.27.2020
function findOdd(array) {
    const count = array.reduce((acc, curr)=> {
       if (typeof acc[curr] == 'undefined'){
         acc[curr] = 1
       }else{
         acc[curr] += 1
       }
       return acc
     }, {})
    const oddNum = Object.entries(count).filter(pair => pair[1]%2 !=0 )
    return parseInt(oddNum[0][0])
}

// console.log(findOdd([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]))
// anser should be 5