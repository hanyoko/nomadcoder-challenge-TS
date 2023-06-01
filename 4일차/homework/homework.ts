//last(arr): 이 함수는 배열의 마지막 요소를 반환해야 합니다.
type First = {
    <T>(arr:T[]): T
}

const last:First = (arr) => {
    arr[arr.length-1]
    return arr[arr.length-1]
}
const number1 = console.log("number = " +last([1,2,3,4]));
const boolean1 = console.log("boolean = " +last([true, false, true]));
const string1 = console.log("string = " +last(["a", "b", "c"]));


//prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 return해야 합니다.
type Second = {
    <T>(arr:T[], item:T):T
}
const prepend:Second = (arr, item) => {
    arr.unshift(item)
    return arr[arr.length*0]
}
const number2 = console.log("number = " +prepend([1,2,3,4], 5));
const boolean2 = console.log("boolean = " +prepend([true, false, true], null));
const string2 = console.log("string = " +prepend(["a", "b", "c"], "hello"));


//mix(arr,arr) : 두개의 배열을 매개변수로 받아, 매개변수로 받은 두 배열을 하나의 배열로 섞어서 하나의 배열로 반환합니다.
function mix <T> (arr: T[], arr2: T[]){
    return [...arr, ...arr2]
}
const number3 = console.log("number = " +mix([1,2], [3,4]));
const boolean3 = console.log("boolean = " +mix([true, false], [false, true]));
const string3 = console.log("string = " +mix(["a", "b"], ["c", "hello"]));


//count(arr) : 배열을 매개변수로 받아, 매개변수로 받아온 배열의 길이를 반환하면됩니다.
type Count = {
    <T>(arr: T[]):T
}
const count:Count = (arr: any) => arr.length

const number4 = console.log("number = " +count([1,2,3,4]));
const boolean4 = console.log("boolean = " +count([true, false, true]));
const string4 = console.log("string = " +count(["a", "b", "c"]));


//findIndex(arr, item) : 첫번째 매개변수로 배열을, 두번째 매개변수로 받아온 item이 첫번째 매개변수 arr배열의 몇번째 index로 존재하는지 체크한후 존재한다면 몇번째 index인지 반환하고 존재하지않는다면 null을 반환합니다.
type FindIndex = {
    <T>(arr: T[], item:T):T
}
const findIndex:FindIndex = (arr:any, item) => {
    let answer = arr.indexOf(item)
    if (answer) return answer
    else if (answer === 0) return 0
    return null
}
const number5 = console.log("number = " +findIndex([1,2,3,4], 5));
const boolean5 = console.log("boolean = " +findIndex([true, false, true], null));
const string5 = console.log("string = " +findIndex(["a", "b", "c"], "hello"));


//slice(arr, startIndex, endIndex): 첫번째 매개변수로 배열 arr을 받고, 두번째 매개변수로 숫자 startIndex, 세번째 매개변수 숫자 endIndex를 받습니다. 첫번째 매개변수 arr을 두번째 매개변수로 받은 startIndex부터 세번째 매개변수로 받은 인덱스까지 자른 결과를 반환하면됩니다. 이때 세번째 매개변수는 필수 매개변수가 아닙니다.
type Slice = {
    <T>(arr:T[], startIndex:number, endIndex?:number) : T
}
const slice:Slice = (arr:any, start,end?) => arr.slice(start, end)
let color = ["빨강","주황","노랑","초록","파랑"]
const checkColor = console.log(color.slice(2,4))
const checkColor2 = console.log(slice([13,14,15,16],2))