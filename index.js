// 2. Написать функцию, которая возвращает массив строк длинна которых больше N. Функция принимает массив и минимальную длинну строки

function returnArrStr (arr, N) {
    let resultedArray = arr.filter (function (value) {
        if (value.length > N) return value
    })
    return resultedArray
}
console.log (returnArrStr (['eweh', 'jhhf', 'poiuyt', 'df', 'ijkhhhj'], 3))


// 3. Написать функцию, которая сортирует массив строк по количиству буквы (X)  в слове пример ['world', 'hello']   sortMe(['world', 'hello'], 'l') ---> ['hello', 'world']

function sortArray (arrStr, x) {
    let array = arrStr.sort (function (str1, str2) {
//        if (str1 > str2) {
//            return -1
//        } else if (str1 < str2){
//            return 1
//        } else {
//            return 0
//        } 
    })
    return array
}
console.log (sortArray (['world', 'hello'], 'l'))