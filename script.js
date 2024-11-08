//const arr = ['Joakim', 37, { lastName: 'Lindh'}, [1, 2, 3, 4,], false]

//console.log(arr)
//console.log(arr[0])

const arr = [0, 1, 2, 3, 4, 5, 6, 7]

const user = [
    { firstName: 'Joakim', lName: 'Lindh', age: 37, isActive: true },
    { firstName: 'Jeanette', lName: 'Lindh', age: 37, isActive: false },
    { firstName: 'Hans', lName: 'Mattin-Lassei', age: 40, isActive: true },
]

const names = ['Joakim', 'Jeanette', 'Hans']

console.log(names[0])

// Lägga till i början
names.unshift('colin')
// ta bort i början
const removed = names.shift()

// Lägg till i slutet
names.push('colin')

// Ta bort i slutet
names.pop()
const removed2 = names.pop()

// console.log(removed)
console.log(names)

// byta namn
names[1] = 'Nytt namn'

const index = names.indexOf('Nytt namn')

names[index] = 'hej'

// delete names[1]

names.splise(index, 1)
names.splice(1, 0, 'Colin', 'Jeanette')
const removed3 = names.splices(1, 2, 'Tommy')

//console.log(removed)


const [name1, name2, name3] = names

const arr2 = ['Colin', 'Jeanette']

//names = names.concat(arr2)

//names.push(arr2)
const newArray = [...names, arr2, 'Nisse']

console.log(newArray)

//const obj = {
   // fName: 'Joakim',
  //  lName: 'Lindh'
//}

//const obj2 = {
    //...obj,
   // lName: 'Andersson',
   // email: 'joakim@domain.com'
//}
//console.log(obj2)

//const newArray = [...names, ...arr2, 'Nisse']

//newArray.sort().reverse()
//console.log(newArray)

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 11, 14, 13]

console.log(numbers)
numbers.sort((a, b) => {
 return a-b
})
console.log(numbers)