type Words = {
    [key: string]: string
    //Words 타입이 string만을 property로 가지는 오브젝트라는 걸 말해주는 것이다.
    //key 자리의 이름은 중요하지않다. 무엇이든 가능 ! 보틍은 key로 작성 !
    //[key:number]: string으로 바꾸면 "potato" 자리에 오류 발생
    //1, 2 등등 과 같은 숫자로 바꿔줘야한다.
}
/*
let dict :Words = {
    "potato": "food"
}
*/


class Dict {
    private words: Words
    //private words를 선언해주고 words의 타입을 선언하지 않으면 오류가 발생한다.
    //그래서 words의 타입을 만들어준다.
    //타입인 Words를 선언해주면 오류가 생기는 이유
    //-> words에는 initializer가 없고 Constructor에서 정의된 sign이 아니라는 에러이다.
    //word가 private이므로, dictionary 안에서만 words를 보기 원한다.
    constructor() {
        this.words = {}
    }
    //를 입력해주면 오류는 사라진다.
    //why? words를 initializer 없이 선언해주고 constructor에서 수동으로 초기화 시켜줬다.

    //단어를 추가하기 위한 메소드
    add(word: Word) {
            //클래스 Word를 타입처럼 사용
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def
        }
    }
 

    //term을 이용해서 단어 불러오는 기능
    def(term:string){
        return this.words[term]
    }

}

//각각의 단어 만들기
class Word {
    constructor(
        public term: string,
        public def: string
    ) { }
}
//새로운 단어 생성
const kimchi = new Word("kimchi", "한국의 음식");

//새로운 사전
const dict = new Dict()

//사전에 kimchi 넣기
dict.add(kimchi);

//이 부분에서 kimchi의 definition을 찾을 수 있어야한다.
dict.def("kimchi")



/* JS 변환

//let dict :Words = {
//    "potato": "food"
//}

class Dict {
    //private words를 선언해주고 words의 타입을 선언하지 않으면 오류가 발생한다.
    //그래서 words의 타입을 만들어준다.
    //타입인 Words를 선언해주면 오류가 생기는 이유
    //-> words에는 initializer가 없고 Constructor에서 정의된 sign이 아니라는 에러이다.
    //word가 private이므로, dictionary 안에서만 words를 보기 원한다.
    constructor() {
        this.words = {};
    }
    //를 입력해주면 오류는 사라진다.
    //why? words를 initializer 없이 선언해주고 constructor에서 수동으로 초기화 시켜줬다.
    //단어를 추가하기 위한 메소드
    add(word) {
        //클래스 Word를 타입처럼 사용
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    //term을 이용해서 단어 불러오는 기능
    def(term) {
        return this.words[term];
    }
}
//각각의 단어 만들기
class Word {
    constructor(term, def) {
        this.term = term;
        this.def = def;
    }
}
//새로운 단어 생성
const kimchi = new Word("kimchi", "한국의 음식");
//새로운 사전
const dict = new Dict();
//사전에 kimchi 넣기
dict.add(kimchi);
//이 부분에서 kimchi의 definition을 찾을 수 있어야한다.
dict.def("kimchi");

*/