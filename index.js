// 4.26.2020
function twoSum(numbers, target) {
    for (i=0; i<numbers.length-1; i++) {
        for (j=i+1; j<numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i,j]
        }
    }    
}
// console.log(twoSum([1234,5678,9012], 14690))
// answer = [1,2]

// 4.27.2020
// function findOdd(array) {
//     const count = array.reduce((acc, curr)=> {
//        if (typeof acc[curr] == 'undefined'){
//          acc[curr] = 1
//        }else{
//          acc[curr] += 1
//        }
//        return acc
//      }, {})
//     const oddNum = Object.entries(count).filter(pair => pair[1]%2 !=0 )
//     return parseInt(oddNum[0][0])
// }
// Refactored:
// Bitwise Exclusive Or (XOR)
const findOdd = (xs) => xs.reduce((a, b) => a ^ b)
// console.log(findOdd([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]))
// answer = 5

// 4.28.2020
function order(words){
    return words && words.split(' ')
        .map(word => word.match(/\d+/))
        .sort()
        .map(word => word.input).join(' ')
}
//   console.log(order("is2 Thi1s T4est 3a"))
//   answer "Thi1s is2 3a T4est"

function findNumber(array){
    newArray = []
    array.forEach(e => newArray[e-1] = e)
    return (newArray.findIndex( el => el == undefined)+1) || array.length+1
} 
// console.log(findNumber([13,11,10,3,2,1,4,5,6,9,7,8]))
// answer = 12

function findNumber(array){
    array.sort((a,b) => a-b)
        if (array[0]==1){
            for (i=1; i < array.length;i++){
                if( (array[i] - i) > 1){
                    return i + 1
                }
            }return i+1
        }else{
            return 1
        }
} 

//6.10.2020
var countBits = function(n) {
    return n.toString(2)
            .split("")
            .filter( digit => digit == 1)
            .length
  };

//6.11.20
const data = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
    }
    
    function greet(language) {
     return !data[language] ?'Welcome': data[language] 
    }

//6.12.2020 Start
function multiplicationTable(row,col){
    let arr = []
        i = 0
        
      addToArray(arr)
    }
    
    function addToArray(arr){
        
        if(i>(row*col)) return arr
      
        return addToArray(arr)
      }

