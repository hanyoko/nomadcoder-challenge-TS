abstract class User {
    constructor(
       protected firstName:string,
       //protected, private, public 등은 javascript에서는 보이지 않는다
       protected lastName:string,
       protected nickname:string
       //private은 말 그대로 개인적인 것을 말하고, User 클래스의 인스턴스나 메소드에서 접근할 수 있으나,
       //getFullName은 추상 클래스여서 인스턴스화 할 수 없다.
       //만약 필드가 외부로부터는 보호되지만 다른 자식 클래스에서는 사용되기를 원한다면, private을 쓰지 말 것 !
       //대신 protected를 쓰자 !
       //만약(2) nickname을 외부의 모든 곳에서 사용가능하게 만들려면
       //protected를 지워주면 public이 된다. public을 적어줘도 좋다.
   ){}
   abstract getNickName():void
   getFullName(){
       return `${this.firstName} ${this.lastName}`
   }
}
           //User 상속
class Player0602 extends User {
   getNickName(){
       console.log(this.nickname)  //protected를 쓰면 오류는 사라진다.
       //하지만 User를 상속하면, 이제 User.nickname에 접근할 수 있다.
   }
}

const nico0602 = new Player0602("nico", "las", "니꼬");


nico0602.getFullName()
//nico.firstName() protected를 사용한 후에는 클래스 밖에서는 여기를 접근할 수 없다
//nickname이 public이 되면
//nico.nickname을 쓸 수 있다.

/* JS 변환

class User {
    constructor(firstName, 
    //protected, private, public 등은 javascript에서는 보이지 않는다
    lastName, nickname
    //private은 말 그대로 개인적인 것을 말하고, User 클래스의 인스턴스나 메소드에서 접근할 수 있으나,
    //getFullName은 추상 클래스여서 인스턴스화 할 수 없다.
    //만약 필드가 외부로부터는 보호되지만 다른 자식 클래스에서는 사용되기를 원한다면, private을 쓰지 말 것 !
    //대신 protected를 쓰자 !
    //만약(2) nickname을 외부의 모든 곳에서 사용가능하게 만들려면
    //protected를 지워주면 public이 된다. public을 적어줘도 좋다.
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
//User 상속
class Player0602 extends User {
    getNickName() {
        console.log(this.nickname); //protected를 쓰면 오류는 사라진다.
        //하지만 User를 상속하면, 이제 User.nickname에 접근할 수 있다.
    }
}
const nico0602 = new Player0602("nico", "las", "니꼬");
nico0602.getFullName();
//nico.firstName() protected를 사용한 후에는 클래스 밖에서는 여기를 접근할 수 없다
//nickname이 public이 되면
//nico.nickname() 을 쓸 수 있다.
*/


