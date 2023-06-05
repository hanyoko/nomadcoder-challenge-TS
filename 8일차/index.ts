type Nickname = string
type Health = 1 | 5 | 10
type Friends = Array<string>
type Team = "red" | "blue" | "yellow"

type Player = {
    nickname: string,
    healthBar: number
    team: Team
}

//type을 interface로 변형
/*
interface Player {
    nickname: string,
    healthBar: number
    team: Team
}
*/
//interface
//interface는 한가지 용도로만을 가지고 있다.
//오브젝트 모양을 특정해주기 위함
//React.js 작업 때 주로 사용 

//type과 interface는 오브젝트의 모양을 결정한다는 같은 역할을 한다.
//하지만, 다른 점은, type 키워드는 interface 키워드에 비해 좀 더 활요할 수 있는 게 많다는 것
//interface로는 아래와 같은 것을 할 수 없다
//interface Hello = string      작동하지않는다.
//interface는 오로지 오브젝트의 모양을 타입스크립트에게 설명해 주기 위해서만 사용되는 키워드는
//type 키워드는 다양한 목적으로 사용가능하다.
//type 키워드를 사용해 오브젝트의 모양을 정해줄 수도 있고,
//특정 값들로만 제한할 수도 있고,
//타입 alias를 만드는 등 원하는 모든 걸 할 수 있다.

interface Person {
    nickname: string,
    healthBar: number
    team: Team
}

const nico : Player = {
    nickname: "nico",
    healthBar: 10,  //healthBar는 Health에서 주어진 것만 사용가능
    team: "red"     //team은 Team에서 주어진 것만 사용가능
}

type Food = string;

const kimchi:Food = "delicous"

/* JS 변환
const nico = {
    nickname: "nico",
    healthBar: 10,
    team: "red" //team은 Team에서 주어진 것만 사용가능
};
const kimchi = "delicous";
const nico = {
    name: "nico"
};
*/