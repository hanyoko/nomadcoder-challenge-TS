//어떻게 추상클래스를 만드는지 
//추상클래스는 유용한데, 다른 클래스가 가져야 할 property랑 메소드를 명시할 수 있도록 도와준다.
//추상클래스는 이걸 상속받는 다른 클래스가 가질 property와 메소드를 지정하도록 해준다.
//

//User 추상 클래스와 Player 클래스
/*
abstract class User {
    constructor(
        //protected는 추상 클래스로부터 상속받은 클래스들이 property에 접근하도록 해준다.
        //만약, private을 쓰면 firstName과 lastName을 Player가 접근할 수 없다.
        protected firstName: string,
        protected lastName: string
    ) {}
    //이 추상클래스가 두 개의 메소드를 가지도록 할 것이다.
    //첫번째, sayHi - 이건 string으로 된 name을 받아서 string을 반환
    abstract sayHi(name:string):string
    //두번째, fullName - 이건 그냥 string을 반환
    abstract fullName():string
}

//클래스 Player는 User를 상속
class Player extends User {
    fullName(){ //fullName은 string을 반환
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name:string){    //sayHi는 string을 리턴해야되고 name을 받아야한다.
        return `Hello ${name}. My name is ${this.fullName}`
    }
}

*/



//추상클래스는 그것으로부터 인스턴스를 만드는 걸 허용하지않는다.
//new User 은 작동하지않는다.
//상속받는 클래스가 어떻게 동작해야할 지 일러주기 위해서 추상클래스를 사용한다.
//추상클래스는 무엇을 구현해야 할 지에 대해서는 알려줄 수 있다. ex) sayHi와 fullName이 있어야한다가 알려줌.
//추상클래스의 문제점은, 자바스크립트에는 abstract의 개념이 없다는 것이다.
//타입스크립트에서 추상 클래스를 만들면 자바스크립트에서는 결국 클래스로 변한다.
//그러면 왜 추상클래스를 사용하냐 ?
//우리는 다른 클래스들이 표준화된 모양, 표준화된 property와 메소드를 갖도록 해주는 청사진을 만들기 위해 추상클래스를 사용한다.

//인터페이스는 가볍다. 인터페이스는 컴파일하면 JS로 바뀌지않고 사라진다.
//인터페이스를 쓸 때 클래스가 특정 형태를 따르도록 어떻게 강제하냐가 문제점이다.
//추상클래스를 인터페이스로 바꾸기
interface User {
    firstName: string,
    lastName: string,
    sayHi(name:string):string
    fullName():string
}
interface Human {
    health: number
}

//implements 는 자바스크립트가 사용하지 않는 단어
//implements를 사용하면 코드는 더 가벼워진다.
//class Player {} 이렇게
//User 인터페이스를 추적할 수가 없다. 인터페이스는 타입스크립트에서만 존재하고, 자바스크립트에서는 존재하지않는 단어이기에
//하지만 타입스크립트에서는 Player는 User 인터페이스를 상속해야한다고 알려주고있다.
//
class Player implements User, Human {
    constructor(
        //인터페이스를 상속할 때는 property를 private으로 만들 수 없다.
        public firstName: string,
        public lastName: string,
        public health: number
    ){}
    fullName(){ //fullName은 string을 반환
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name:string){    //sayHi는 string을 리턴해야되고 name을 받아야한다.
        return `Hello ${name}. My name is ${this.fullName}`
    }
}



//추상화를 원할 때 클래스와 인터페이스를 사용할 떄의 차이점에 대해 알아보자
//스스로 특정한 형태를 억지로라도 따르도록 만들고,
//자바스크립트 코드를 보게 되면 더이상 추상클래스를 추가로 사용하지않는다.
//또, 파일 사이즈를 줄이고 싶을 때 필요하다.
//이것이 인터페이스와 클래스의 가장 큰 차이점 !
//인터페이스는 고유한 사용처가 있다.
//얘네들은 클래스의 모양을 알려준다는 점에서 유용하다.
//자바스크립트 코도로 컴파일 되지는 않는다.
//추상클래스를 사용할 때는 그 클래스들이 자바스크립트에서 보였지만 !
//인터페이스를 상속하는 것의 문제점 중 하나는 private / proteced property들을 사용하지 못한다는 것과
//추상 클래스에서는 constructor가 이 귀찮은 부분을 해주도록 할 수 있었지만 인터페이스를 사용하게 되면, 이 부분을 해 줄 constructor가 없다.
//만약 우리가 원한다면, 하나 이상의 인터페이스를 동시에 상속할 수 있다.
//유용하게 사용할 수 있을 때 : 어댑터 패턴과 같은 디자인 패턴을 사용하여 팀과 함께 일할때 인터페이스를 만들어두고 팀원이 원하는 각자의 방식으로 클래스를 상속하도록 하는 건 멋진 방법이다.
//만약 모두가 같은 인터페이스를 사용한다면, 같은 property와 method를 가지게 될 것이다.
//다시 한 번 말하면, 인터페이스는 클래스가 아니지만 클래스의 모양을 특정할 수 있게 해주는 간단한 방법이다.
//이간 오브젝트의 모양을 결정지을 수도 있지만, 클래스의 모양을 특정짓기도한다.

//인터페이스를 타입으로 지정할 수도 있다는 것을 알아야한다 !
// function makeUser(user: User){
//     return "hi"
// }

//인터페이스를 타입으로 지정하기
function makeUser(user: User): User{
    return {
        firstName: "yohan",
        lastName: "ko",
        fullName: () => "xx",   
        sayHi: (name) => "string" 
    }
}
makeUser({
    firstName: "yohan",
    lastName: "ko",
    fullName: () => "xx",       //fullName은 string을 반환하는 함수여야한다.
    sayHi: (name) => "string"   //sayHi는 name을 받고, string을 반환하는 함수여야한다.
})
//argumenr에 인터페이스를 씀으로써 오브젝트의 모양을 지정해 줄 수도 있다.
//argument에 설정할 수도 있고, 인터페이스를 리턴할 수도 있다는 것 !
//하지만 인터페이스를 반환한다면, 타입을 리턴하는 것처럼 new 다음에 클래스를 넣어줘야하는 class의 리턴과는 다르다.
//만약 인터페이스를 리턴한다면, new User처럼 쓸 필요가 없다.
//위와 같이 오브젝트를 리턴해주면 , 인터페이스를 만족할 것이다.



/* JS 변환

//어떻게 추상클래스를 만드는지 
//추상클래스는 유용한데, 다른 클래스가 가져야 할 property랑 메소드를 명시할 수 있도록 도와준다.
//추상클래스는 이걸 상속받는 다른 클래스가 가질 property와 메소드를 지정하도록 해준다.
//
//User 추상 클래스와 Player 클래스
class User {
    constructor(
    //protected는 추상 클래스로부터 상속받은 클래스들이 property에 접근하도록 해준다.
    //만약, private을 쓰면 firstName과 lastName을 Player가 접근할 수 없다.
    firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
//클래스 Player는 User를 상속
class Player extends User {
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name) {
        return `Hello ${name}. My name is ${this.fullName}`;
    }
}
//implements 는 자바스크립트가 사용하지 않는 단어
//implements를 사용하면 코드는 더 가벼워진다.
//class Player {} 이렇게
//User 인터페이스를 추적할 수가 없다. 인터페이스는 타입스크립트에서만 존재하고, 자바스크립트에서는 존재하지않는 단어이기에
//하지만 타입스크립트에서는 Player는 User 인터페이스를 상속해야한다고 알려주고있다.
//
class Player {
    constructor(
    //인터페이스를 상속할 때는 property를 private으로 만들 수 없다.
    firstName, lastName, health) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.health = health;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name) {
        return `Hello ${name}. My name is ${this.fullName}`;
    }
}
//추상화를 원할 때 클래스와 인터페이스를 사용할 떄의 차이점에 대해 알아보자
//스스로 특정한 형태를 억지로라도 따르도록 만들고,
//자바스크립트 코드를 보게 되면 더이상 추상클래스를 추가로 사용하지않는다.
//또, 파일 사이즈를 줄이고 싶을 때 필요하다.
//이것이 인터페이스와 클래스의 가장 큰 차이점 !
//인터페이스는 고유한 사용처가 있다.
//얘네들은 클래스의 모양을 알려준다는 점에서 유용하다.
//자바스크립트 코도로 컴파일 되지는 않는다.
//추상클래스를 사용할 때는 그 클래스들이 자바스크립트에서 보였지만 !
//인터페이스를 상속하는 것의 문제점 중 하나는 private / proteced property들을 사용하지 못한다는 것과
//추상 클래스에서는 constructor가 이 귀찮은 부분을 해주도록 할 수 있었지만 인터페이스를 사용하게 되면, 이 부분을 해 줄 constructor가 없다.
//만약 우리가 원한다면, 하나 이상의 인터페이스를 동시에 상속할 수 있다.
//유용하게 사용할 수 있을 때 : 어댑터 패턴과 같은 디자인 패턴을 사용하여 팀과 함께 일할때 인터페이스를 만들어두고 팀원이 원하는 각자의 방식으로 클래스를 상속하도록 하는 건 멋진 방법이다.
//만약 모두가 같은 인터페이스를 사용한다면, 같은 property와 method를 가지게 될 것이다.
//다시 한 번 말하면, 인터페이스는 클래스가 아니지만 클래스의 모양을 특정할 수 있게 해주는 간단한 방법이다.
//이간 오브젝트의 모양을 결정지을 수도 있지만, 클래스의 모양을 특정짓기도한다.
//인터페이스를 타입으로 지정할 수도 있다는 것을 알아야한다 !
// function makeUser(user: User){
//     return "hi"
// }
//인터페이스를 타입으로 지정하기
function makeUser(user) {
    return {
        firstName: "yohan",
        lastName: "ko",
        fullName: () => "xx",
        sayHi: (name) => "string"
    };
}
makeUser({
    firstName: "yohan",
    lastName: "ko",
    fullName: () => "xx",
    sayHi: (name) => "string" //sayHi는 name을 받고, string을 반환하는 함수여야한다.
});
//argumenr에 인터페이스를 씀으로써 오브젝트의 모양을 지정해 줄 수도 있다.
//argument에 설정할 수도 있고, 인터페이스를 리턴할 수도 있다는 것 !
//하지만 인터페이스를 반환한다면, 타입을 리턴하는 것처럼 new 다음에 클래스를 넣어줘야하는 class의 리턴과는 다르다.
//만약 인터페이스를 리턴한다면, new User처럼 쓸 필요가 없다.
//위와 같이 오브젝트를 리턴해주면 , 인터페이스를 만족할 것이다.

*/