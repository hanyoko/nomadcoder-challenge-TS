[1,2,3,4] + false   //실행되기 전에 에러를 발생

function divide(a, b){  //a, b가 어떤 데이터타입인지 몰라서 생기는 에러
    return a / b
}

divide("hello") //두개의 입력값이 있지만 하나의 입력값만 있어서 생기는 에러

const player = {
    age: 12
}
player.age = false  //숫자에서 boolean으로 타입을 바꿀 수 없다고 생기는 에러

let a = "hello"
a = "bye"
a = 1   //a는 string이지만 boolean으로 입력해서 생기는 오류

let b : boolean = "x"   //b는 boolean이어야 하는데 string이 입력되어서 생기는 오류
let c : boolean = false
let d = [1,2,3] //number의 array
d.push("1")

let d2 : number[] = []
d2.push(1)

const player2 = {
    name: "han"
}
player2.name = "yohan"

const kimchi = {
    맛있어: true
}