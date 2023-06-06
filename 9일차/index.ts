//다형성, 제네릭, 클래스 그리고 인터페이스 합치기

//다형성은 다른 모양의 코드를 가질 수 있게 해준다.
//다형성을 이룰 수 있는 방법은 제네릭을 사용하는 것
//제네릭은 placeholder 타입을 쓸 수 있도록 해준다.

//브라우저에서 쓰는 로컬 스토리지 API와 비슷한 API 만들기
interface SStorage<T> { //인터페이스는 class의 제네릭을 받고
    [key: string]: T    //여기에 T가 위치할 거라고 알려준다.
}

//타입스크립트에게 T라고 불리는 제네릭을 받을 계획이라고 알려주기
//제네릭에 대해 한가지 놀라운 것, 이걸 다른 타입에게 물려줄 수 있다.
//제네릭은 클래스 이름에 들어오지만, 같은 제네릭을 인터페이스로 보낸다.
//=> 제네릭을 클래스로 보내고, 클래스는 제네릭을 인터페이스로 보낸 뒤에 인터페이스는 제네릭을 사용
class LocalStorage<T> {
    private storage: SStorage<T> = {}
    //set 메소드 쓸 때, string 형식의 key를 넣어준다.
    //T타입의 value를 넣어준다.
    set(key: string, value: T){
        this.storage[key] = value;
    }
    //API 디자인의 구현을 보여주기 위한 것
    //remove는 string 형식의 key를 받아서 이걸 로컬 스토리지로부터 지울 것이다.
    //key를 받는 get도 필요하고, 이건 T를 리턴해줄 것이다.
    remove(key:string){
        delete this.storage[key]
    }
    //T에 생긴 오류를 없애기 위해 set 안에 this.storage[key] = value; 입력
    //get을 쓰면 string을 보내주고 T를 받는다.
    get(key:string): T {
        return this.storage[key]
    }
    clear(){
        this.storage = {}
    }
    
}
const stringStorage = new LocalStorage<string>()

stringStorage.get("key")     //을 쓰면 string을 보내주고 string을 받게 된다.
stringStorage.set("hello", "how are you")

const booleansStorage = new LocalStorage<boolean>();

booleansStorage.get("xxx");
booleansStorage.set("hello", true)



/* JS 변환
//다형성, 제네릭, 클래스 그리고 인터페이스 합치기
//타입스크립트에게 T라고 불리는 제네릭을 받을 계획이라고 알려주기
//제네릭에 대해 한가지 놀라운 것, 이걸 다른 타입에게 물려줄 수 있다.
//제네릭은 클래스 이름에 들어오지만, 같은 제네릭을 인터페이스로 보낸다.
//=> 제네릭을 클래스로 보내고, 클래스는 제네릭을 인터페이스로 보낸 뒤에 인터페이스는 제네릭을 사용
class LocalStorage {
    constructor() {
        this.storage = {};
    }
    //set 메소드 쓸 때, string 형식의 key를 넣어준다.
    //T타입의 value를 넣어준다.
    set(key, value) {
        this.storage[key] = value;
    }
    //API 디자인의 구현을 보여주기 위한 것
    //remove는 string 형식의 key를 받아서 이걸 로컬 스토리지로부터 지울 것이다.
    //key를 받는 get도 필요하고, 이건 T를 리턴해줄 것이다.
    remove(key) {
        delete this.storage[key];
    }
    //T에 생긴 오류를 없애기 위해 set 안에 this.storage[key] = value; 입력
    //get을 쓰면 string을 보내주고 T를 받는다.
    get(key) {
        return this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}
const stringStorage = new LocalStorage();
stringStorage.get("key"); //을 쓰면 string을 보내주고 string을 받게 된다.
stringStorage.set("hello", "how are you");
const booleansStorage = new LocalStorage();
booleansStorage.get("xxx");
booleansStorage.set("hello", true);
*/