// const cup = () => "hi"

// class Block {
//     constructor(private data: string){}
//     static halo(){
//         return "hi";
//     }
// }

//타입스크립트가 localStorage, Math, window 등의 타입을 이해하고 인지한다. !
//document.querySelector()
//localStorage.getItem()    //Storage.getItem(key: string): string
//Math.fround()             // Math.fround(x: number): number
//localStorage.setItem()      //Storage.setItem(key: string, value: string): void

///////////

//node_modules에 설치된 자바스크립트 모듈을 어떻게 사용하는지에 대해 알아보기
//myPackage.d.ts 에 타입정의를 입력하면 에러가 사라진다.
import {init, exit} from "myPackage";

init({  //init(config: Config): boolean import init
    url: "true"
})

exit(1) //exit(code: number): number    import exit

localStorage.clear()
