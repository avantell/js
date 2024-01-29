const arr = [1,2,3,4,5]

// arr.pop() //Удаляет последний символ в массиве
// arr.push(10) //Добавляет элемент в массив в массиве
//
// console.log(arr)

//Перебираем массив:

// for (let i=0; i < arr.length; i++) {
//     console.log(arr[i])
// }

arr.forEach(function (num, i, arr){
    console.log(`${i}: ${num} в массиве под названием ${arr} `)
})


