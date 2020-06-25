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
// function multiplicationTable(row,col){
//     let arr = []
//         i = 0
        
//       addToArray(arr)
//     }
    
//     function addToArray(arr){
        
//         if(i>(row*col)) return arr
      
//         return addToArray(arr)
//       }

function multiplicationTable(row,col){
    let array = []
    let i = 1
    do {
    array.push(new Array(i, i+i))
    i = i*2
    } while(i <= col)
    return array
}


console.log(multiplicationTable(2,2))
//output: [[1,2],[2,4]]
console.log(multiplicationTable(3,3))
//output [[1,2,3],[2,4,6],[3,6,9]]
//so you know the number of arrays will be the second argument, and the number of elements is the first argument
//the first array will always be that number counting up from one
//the subseuent arrays are just the that element plus its self...
//getting closer...i feel like i need a loop for row to...that I'm calling inside the push statemement....
//I can either manipulate i more or I could try a .shift
//with every incrementation...i will also need to increment? I think?


//6.23.2020 Longest Palindrome
longestPalindrome=function(s){
    //that is the same in reverse...some kind of sorting mechanism...
  //so I could split it into an array...then reverse it...
  let originalArray = s.split("")
  let reversedArray = s.split("").reverse()
  let completeArray = []
  //that is the same in reverse...some kind of sorting mechanism...
  //so I could split it into an array...then reverse it...
  //build a loop if i sub the other array is equal to the other array...add it to the new array?
  console.log('s', s, 's split', s.split("").reverse())
  

  }

console.log(longestPalindrome("a"),'output: 1')

//6.24.2020
function filter_list(l) {
    return l.filter( e => (typeof e != 'string'))
}

//6.25.2020
function positiveSum(arr) {
    const pos = arr.filter(num => num > 0)
    return pos.length ? pos.reduce((num, sum) => sum + num) : 0 
}