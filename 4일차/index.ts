//다형성(polymorphism)
//여러가지 다른 구조들 or 모양들
//타입스크립트에서 함수는 다른 2-3개의 parameter를 가질 수 있다.
//또는 string이나 object를 첫번째 parameter로 가질 수 있다.

//배열을 받고, 그 배열의 요소를 하나씩 print 하는 함수

type SuperPrint = {
    //call signature
    //concreate type : number / boolean / string / void / unknown 등등 ...
    (arr: number[]):void
    (arr: boolean[]):void
    (arr: string[]):void
    (arr: (number | boolean)[]):void
    //위와 같은 방법은 좋지않다. 왜냐하면, 모든 가능성을 다 조합해서 만들어야한다.
    //새로운 타입을 입력하면 동작하지 않는다.
    //그래서 그 대신 generic을 사용한다.
    //generic
    //type의 placeholder 같은 것
    //타입스크립트가 타입을 유추할 수 있다.
    //generic을 사용할 때 : call signature를 작성할 때, 여기에 들어올 확실한 타입을 모를 떄 generic을 사용한다.
    //generic을 사용하는 방법 : 먼저 타입스크립트에 generic을 사용하고 싶다고 알려줘야한다.
    //-> superPrint1 참고
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

superPrint([1, 2, 3, 4])
//const superPrint: (arr: number[]) => void (+3 overloads)
superPrint([true, false, true])
//const superPrint: (arr: boolean[]) => void (+3 overloads)
superPrint(["a", "b", "c"])
//const superPrint: (arr: string[]) => void (+3 overloads)
//superPrint([1, 2, true, false]) //작동하지않는다. call signature가 없기 떄문에
superPrint([1, 2, true, false])     //generic을 사용해주면 정상적으로 작동한다.
//const superPrint: (arr: (number | boolean)[]) => void (+3 overloads)
//여러 개의 타입도 알아서 변환해준다.

type SuperPrint1 = {
    //generic
    //type의 placeholder 같은 것
    //타입스크립트가 타입을 유추할 수 있다.
    //generic을 사용할 때 : call signature를 작성할 때, 여기에 들어올 확실한 타입을 모를 떄 generic을 사용한다.
    //generic을 사용하는 방법 : 먼저 타입스크립트에 generic을 사용하고 싶다고 알려줘야한다.
    <TypePlaceholder1>(arr: TypePlaceholder1[]): void
}

const superPrint1: SuperPrint1 = (arr1) => {
    arr1.forEach(i1 => console.log(i1))
}

superPrint1([1, 2, 3, 4])
//-> const superPrint: <number>(arr: number[]) => void  
//타입스크립트가 발견한 타입으로 변경해준다 .... !!
//상당히 간편한 방법인 것 같다 ..
superPrint1([true, false, true])
//-> const superPrint: <boolean>(arr: boolean[]) => void
superPrint1(["a", "b", "c"])
//-> const superPrint: <string>(arr: string[]) => void
//superPrint([1, 2, true, false]) //작동하지않는다. call signature가 없기 떄문에
superPrint1([1, 2, true, false])     //generic을 사용해주면 정상적으로 작동한다.
//-> const superPrint: <number | boolean>(arr: (number | boolean)[]) => void
//여러 개의 타입도 알아서 변환해준다.

//제네릭은 여전히 함수에 타입을 입력하는 것을 허용한다.
//하지만, 타입들을 일일이 다 써줄 필요가 없다


//superPrint의 리턴 타입을 바꾸고 싶다면,
type SuperPrint2 = {
    <TypePlaceholder2>(arr: TypePlaceholder2[]): TypePlaceholder2
                                                //void가 아닌 TypePlaceholder2로 바꾼다
                                                //왜냐하면 이건 TypePlaceholder2를 리턴하는 함수기이 때문에
    //함수가 TypePlaceholder2의 배열을 받고 TypePlaceholder2 중 하나를 리턴하도록 했다.                                          
}
//배열의 첫번째 요소를 리턴하도록
const superPrint2: SuperPrint2 = (arr2) => arr2[0]

const spA2 = superPrint2([1, 2, 3, 4]);
//const spA2: number
//const superPrint2: <number>(arr: number[]) => number
const spB2 = superPrint2([true, false, true]);
//const spB2: boolean
//const superPrint2: <boolean>(arr: boolean[]) => boolean
const spC2 = superPrint2(["a", "b", "c"]);
//const spC2: string
//const superPrint2: <string>(arr: string[]) => string
const spD2 = superPrint2([1, 2, true, false, "hello"]);
//const spD2: string | number | boolean
//const superPrint2: <string | number | boolean>(arr: (string | number | boolean)[]) => string | number | boolean

//generic은 내가 요구한대로 signature을 생성해줄 수 있는 도구

type SuperPrint3 = <T, M>(a: T[], b:M) => T
                                    //타입스크립트가 알게 되는 곳
                                    //타입스크립트는 제네릭이 처음 사용되는 지점을 기반으로 이 타입이 무엇인지 알게 된다.

//가정 먼저 해야할 일은, 제네릭을 사용할 거라고 얘기해주고, 이름을 작성해준다.
//이름은 뭐든 상관없다. T, M, V 등등 자유롭게 사용가능하다.
//그리고 어디에서 이 제네릭을 사용할 건지 얘기해줘야한다.
//그래서 나는 제네릭이 함수의 두번째 인자를 사용할 거라고 얘기해줄 것이다.
//타입스크립트는 제네릭을 처음 인식했을 때와 제네릭의 순서를 기반으로 제네릭의 타입을 알게 된다.
const superPrint3: SuperPrint3 = (a) => a[0]

const spA3 = superPrint3([1, 2, 3, 4], "x");     //두번째 argument를 입력해주면 타입스크립트는 그것이 함수에서 제네릭으로 되어 있다는 것을 알게 된다.
//const spA3: number
//const superPrint3: <number, string>(a: number[], b: string) => number
const spB3 = superPrint3([true, false, true], 1);
//const spB3: boolean
//const superPrint3: <boolean, number>(a: boolean[], b: number) => boolean
const spC3 = superPrint3(["a", "b", "c"], false);
//const spC3: string
//const superPrint3: <string, boolean>(a: string[], b: boolean) => string
const spD3 = superPrint3([1, 2, true, false, "hello"], []);
//const spD3: string | number | boolean
//const superPrint3: <string | number | boolean, never[]>(a: (string | number | boolean)[], b: never[]) => string | number | boolean


function superPrint4<V>(a: V[]){
    return a[0]
}
// type SuperPrint4 = <T>(a: T[]) => T
// const superPrint4: SuperPrint4 = (a) => a[0]

//const spA4 = superPrint4<boolean>([1, 2, 3, 4]);    //만약 내가 직접 타입을 지정해서 적어준다면 argument에 담긴 값이 오류를 나타낸다
//const spA4 = superPrint4<number>([1, 2, 3, 4]);     //대부분의 경우 타입스크립트가 스스로 타입을 잘 찾기 때문에 이렇게 하지 않아도 된다.
const spA4 = superPrint4([1, 2, 3, 4]);
//const spA4: number
//function superPrint4<number>(a: number[]): number
const spB4 = superPrint4([true, false, true]);
//const spB4: boolean
//function superPrint4<boolean>(a: boolean[]): boolean
const spC4 = superPrint4(["a", "b", "c"]);
//const spC4: string
//function superPrint4<string>(a: string[]): string
const spD4 = superPrint4([1, 2, true, false, "hello"]);
//const spD4: string | number | boolean
//function superPrint4<string | number | boolean>(a: (string | number | boolean)[]): string | number | boolean


//제네릭을 사용해 타입을 생성할 수 있고, 어떤 경우는 타입을 확장할 수도 있다. 또는 코드를 저장한다.
type GenericPlayer<E> = {
    name: string
    extraInfo: E        //any를 사용하면 보호를 못 받기 때문에 generic <E>를 사용한다.
}
type MouseExtra = {
    favFood: string
}
type MousePlayer = GenericPlayer<MouseExtra>

const mouse: MousePlayer = {
    name: "mouse",
    extraInfo: {
        favFood: "kimchi"
    }
}

//extraInfo를 가지고 있지 않은 GenericPlayer
const note: GenericPlayer<null> = {
    name: "note",
    extraInfo: null
}

//generic을 사용하는 또다른 방법
// type A = Array<number>
// let a:A = [1,2,3,4]

// function printAllNumbers(arr: Array<number>){

// }


//ReactJS에서의 generic 사용
//useState<number>()
//이렇게 ReactJS를 타입스크립트와 같이 사용하면 내 useState의 state 타입을 알 수 있다
//ReactJS의 함수인 useState를 사용할 때 내가 제네릭을 보내면 useState의 call signature이 number 타입의 useState가 된다. !!!


//모두들 다른 프로그래머들이 쓸 라이브러리나 코드를 디자인 할 때 제네릭을 사용한다.
//generic은 매우매우 유용한 개념이다 !!!