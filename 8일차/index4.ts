//타입과 인터페이스의 차이점 정리 및 오늘 수업 복습

//인터페이스를 사용해 클래스에 특정 메소드나 property를 상속하도록 강제하는 방법을 배웠다.
//인터페이스는 내가 원하는 메소드와 property 를 클래스가 가지도록 강제할 수 있게 해준다.
//인터페이스는 자바스크립트로 컴파일 되지 않는다.
//추상 클래스와 비슷한 보호를 제공하지만, 인터페이스는 자바스크립트 파일에서 보이지 않는다.
//추상 클래스를 쓰면 자바스크립트에서 일반적인 클래스로 바뀐다.
//파일 크기가 좀 더 커지고, 추가 클래스가 만들어진다는 뜻이다.
//만약 추상 클래스를 다른 클래스들이 특정 모양을 따르도록 하기 위한 용도로 쓴다면,
//같은 역할을 하는 인터페이스를 쓰는 게 더 좋다.
//class Player extends User 처럼 쓰는 것 대신에
//class Player implements USer로 써줘야한다.
//타입스크립트가 여전히 보호해 주겠지만, 인터페이스가 자바스크립트 코드에서 보이지는 않을 것이다.

//타입과 인터페이스 비교
//첫번째, type을 쓰고 싶다면, type 키워드를 쓰면된다.
//이름은 내가 원하는 대로 
//옵션, 1. 오브젝트의 모양을 설명하는 것 / 2. type alias를 만드는 것 / 3. 타입을 특정된 값으로 만드는 것

//1. type Player = { }

//2. type Player = number

//3. type Player = "1" | "2"

type PlayerA = {
    name: string
}
type PlayerAA = PlayerA & {
    lastName: string
}
const playerA: PlayerAA = {
    name: "nico",
    lastName: "xxx"
}
//type에서는 같은 이름의 타입을 만들어서 

interface PlayerB {
    name: string
}
interface PlayerB {
    lastName: string
}
interface PlayerB {
    health: number
}
const playerB: PlayerB = {
    name: "nico",
    lastName: "xxx",
    health: 10
}

/////////

//인터페이스와 타입 모두 추상 클래스를 대체해서 쓸 수 있다.
//클래스나 오브젝트의 모양읠 정의하고 싶으면 인터페이스를 사용하고,
//그 외의 모든 경우에서는 타입을 사용
type PlayerC = {
    firstName: string
}
interface PlayerD {
    firstName: string
}
//type 상속
class User implements PlayerC {
    constructor(
        public firstName: string
    ){}
}
//interface 상속
class User2 implements PlayerD {
    constructor(
        public firstName: string
    ){}
}

///////// 

//interface와 type 상속 받는 방법

//interface는 항상 상속이 가능하다.
interface Animal {
    name: string
}
//Bear 인터페이스를 선언하고, Animal을 상속 받으면 된다.
interface Bear extends Animal {
    honey: boolean
}

const bear = getBear();
bear.name;
bear.honey;

//type
//Animal 타입을 만든 이후에,
type Animal2 = { 
    name2: string
}
//새 타입을 만들어서 & 연산자를 사용해야한다.
type Bear2 = Animal2 & {
    honey2: boolean
}

const bear2 = getBear2();
bear2.name2;
bear.honey2;

///////

//타입스크립트에게 오브젝트의 모양을 알려주기 위해서는 인터페이스를 쓰고,
//나머지 상황에서는 타입을 사용한다.


/* JS 변환
//타입과 인터페이스의 차이점 정리 및 오늘 수업 복습
const playerA = {
    name: "nico",
    lastName: "xxx"
};
const playerB = {
    name: "nico",
    lastName: "xxx",
    health: 10
};
//type 상속
class User {
    constructor(firstName) {
        this.firstName = firstName;
    }
}
//interface 상속
class User2 {
    constructor(firstName) {
        this.firstName = firstName;
    }
}
const bear = getBear();
bear.name;
bear.honey;
const bear2 = getBear2();
bear2.name2;
bear.honey2;
///////
//타입스크립트에게 오브젝트의 모양을 알려주기 위해서는 인터페이스를 쓰고,
//나머지 상황에서는 타입을 사용한다.
*/

