type Age = number;
type Name = string;
type Player = {
    readonly name: Name,    //readonly를 작성한 후 수정을 시도하면 typescript가 오류를 발생시킬 것이다. 읽기 전용이기 떄문에 
    age?: Age   //이런 식으로 object에만 유효한 것이 아니라 모든 타입에 적용할 수 있다.
}

let number : number[] = [1, 2];
let string : string[] = ["li", "1"];
let boolean : boolean[] = [true];

/*const myplayer : object = {
    name: "nico"
}

myplayer.name */  
//myplayer에 name이 존재하는지 모른다

const playerYo : {  //age를 적지않으면 오류를 발생
    name: string,
    age?: number,   //age 옆에 ?를 추가해주면 age를 선택적으로 만들 수 있다.
    //optional parameter(선택적 변수)를 지정하는 방법
} = {
    name: "nico"
}

/* if(myplayer.age < 10){  //오류 발생 why? myplayer.age가 undifined일 수도 있다.

} */

if(playerYo.age && playerYo.age < 10){  //이렇게 작성하면 myplayer.age가 존재하는지 확인을 거친 후 typescript가 계속 할 수 있게 허용해준다.

}

const playerHan: { 
    name: string,
    age?: number,  
} = {
    name: "nico"
}   //같은 내용이 담긴 값을 만들 때, Ailas 타입을 사용하면 더 적은 코드를 작성할 수 있다.

const han : Player = {
    name: "han",
}

const yohan : Player = {
    name: "yohan",
    age: 12
}
//이런 식으로 간단하게 작성할 수 있다.

//함수 만들기
function playerMaker(name:string) : Player{ //: Player를 추가해주면 age에 생긴 오류가 사라진다.
//=> string 타입으로 name을 받고 Player 타입을 return 하는 함수
    return {
        name    //같은 이름을 가진다면 : name을 생략할 수 있다.

    }
}
const nico = playerMaker("nico");
nico.age = 12   ///작동하지않는다. why? playerMaker는 string인 name이라는 요소만 있는 object를 return하고 있기 때문

//화살표 함수로 만들기
const playerMaker2 = (name:string) : Player => ({name})
const nico2 = playerMaker2("nico2");
nico2.age = 12
//nico2.name = "las"  //오류 발생
nico2.age = 20  //readonly가 아닌 age는 정상 작동

const numbers : number[] = [1,2,3,4]
numbers.push(1)

const names: readonly string[] = ["1", "2"]
//readonly는 push, filter, map 등을 할 수 없다. 왜냐하면 이것들은 array을 바꾸지 않기 떄문에

//Tuple은 array를 생성할 수 있게 한다.
//최소한의 길이를 가져야하고 특정 위치에 특정 타입이 있어야한다.
//

const player3 : readonly [string, number, boolean] = ["yohan", 1, true]
//player[0] = 1         //오류를 발생시키며 작동하지않는다. why? typescript가 첫번째 index는 항상 string이어야 한다는 것을 알기 때문에
//player[0] = "hi"      //readonly를 입력한 후에는 수정이 불가능하다.

//javascript도 가지고 있는 type
let aa : undefined = undefined;
let bb : null = null;

//optional parameter는 undefined가 될 수도 있다.

//any는 typescript로부터 빠져나오고 싶을 때 사용한다.
//any를 사용하면 typescript의 보호장치를 읽어버린다.
const aaa : any[] = [1,2,3,4]
const bbb : any = true

aaa + bbb   //오류가 생기지않고 작동한다.  why? any를 사용하여 typescript의 보호장치에서 빠져나왔기 때문에
            //만약, any를 지우면 오류를 출력한다.

//unknown
//변수의 type을 미리 알지 못 할 떄 unknown을 사용한다.
//typeof를 사용하여 typescript가 강제로 확인을 해볼 수 있다.
let one : unknown;
//let two = one + 1 을 하면 typescript는 허용해 주지 않는다.
//왜냐하면 one의 type이 unknown이라서

if(typeof one === 'number' ){
    let two = one + 1
}
if(typeof one === "string"){
    let two = one.toUpperCase();
}

//void
//아무것도 return 하지 않는 함수를 대상으로 사용한다.
//typescript는 함수가 아무것도 return 하지 않는다는 것을 자동으로 인식하기 떄문에 void를 적어주지 않아도 된다.

function hello(){       //함수 위에 마우스를 가져가면 void라고 되어있는 것을 볼 수 있다.
    console.log('x')    //이 함수는 아무것도 return 하지 않는다.
}

/* const abc = hello(){
    abd.toUpperCase()   //hello는 비어있기 때문에 toUpperCase가 없어서 허용되지 않는다.
} */

//never
//함수가 절대 return 하지 않을 때 발생한다.
//예를 들어 함수가 exception(예외)이 발생할 때.
//

// function hi():never {
//     return "X"
// }    작동하지않는다.

function hi():never {
    throw new Error("xxx")
}
//오류를 발생시키면 모든 게 정상적이다.
//return 하지 않고 오류를 발생시킬 때 사용

//never type이 두가지일 때
function two(name:string|number){
    if(typeof name === "string"){
        name    //name은 string
    }else if(typeof name === "number"){
        name    //name은 number
    }else {
        name    //name은 never
                //두가지 타입인 string, number이 조건에 들어갔으니 무엇을 쓰더라도 never이 된다.
                //무슨 일이 있어도 절대 실행되지 않아야 한다는 것
                //타입이 올바르게 들어온다면 코드는 실행되지 않는다.
    }
}

//사용빈도
//1. void
//2. unknown
//3. never