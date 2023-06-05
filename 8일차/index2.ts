/* interface */
//인터페이스는 타입스크립트에게 오브젝트의 모양을 설명해 주기 위해 존재한다.

interface User {
    name: string
}
interface User {
    lastName: string
}
interface User {
    health: number
}
//type과는 다르게 같은 이름의 인터페이스를 만들 수 있다.
//인터페이스를 3번 각각 만들기만 하면, 타입스크립트가 알아서 하나로 합쳐준다.

interface Player extends User {

}

const yohan : User = {
    name: "yohan",
    lastName: "ko",
    health: 10
}


/* type 
type User = {
    name: string
}
type User = {           //작동하지않는다.
    lastName: string
}

//type은 종류에 관계없이 어떠한 타입을 만들 때 다 쓸 수 있으므로 많이 다르다.
//원한다면 오브젝트의 모양을 타입을 이용하여 정의할 수 있다.
//하지만, 타입스크립드에게 오브젝트의 모양을 알려줄 때는 인터페이스를 사용하는 것이 더 좋다.
//인터페이스가 더 객체지향 프로그래밍처럼 보여서 보는 사람이 이해하기 더 쉽기 때문에

type Player = User {

}

const nico : Player = {
    name: "nico"
}
*/

//인터페이스는 객체 지향 프로그래밍의 개념을 활용해서 디자인 되었고,
//타입은 더 유연하다. 조금 더 개방적이라고 말할 수 있다.


/* JS 변환
//interface
//인터페이스는 타입스크립트에게 오브젝트의 모양을 설명해 주기 위해 존재한다.
const yohan = {
    name: "yohan",
    lastName: "ko",
    health: 10
};

//type
type User = {
    name: string
}
type User = {           //작동하지않는다.
    lastName: string
}

//type은 종류에 관계없이 어떠한 타입을 만들 때 다 쓸 수 있으므로 많이 다르다.
//원한다면 오브젝트의 모양을 타입을 이용하여 정의할 수 있다.
//하지만, 타입스크립드에게 오브젝트의 모양을 알려줄 때는 인터페이스를 사용하는 것이 더 좋다.
//인터페이스가 더 객체지향 프로그래밍처럼 보여서 보는 사람이 이해하기 더 쉽기 때문에

type Player = User {

}

const nico : Player = {
    name: "nico"
}

//인터페이스는 객체 지향 프로그래밍의 개념을 활용해서 디자인 되었고,
//타입은 더 유연하다. 조금 더 개방적이라고 말할 수 있다.

*/