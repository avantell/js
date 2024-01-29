// let num = 20
// function showFirstMessage(text) {
//     console.log(text)
//     num = 10
// }
// showFirstMessage ('Hello World')
// console.log(num)
//
//
// function calc (a, b) {
//     return  (a + b)
// }
//
// console.log(calc (4, 15))
// console.log(calc (4, 12))
// console.log(calc (4, 18))
// console.log(calc (4, 12))
// console.log(calc (4, 19))
//
//
// function ret () {
//     let num = 50
//     return num
// }
//
// const anotherNum = ret()
// console.log(anotherNum)
//
// // Конвертация валют на примере функции

const usdCurs = 88.09
function convert (amount, curs) {
    console.log (curs * amount)
}
convert(700, usdCurs)
