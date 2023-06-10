interface SStorage<T> {
    [key:string]:T
    }
    
    class LocalStorage<T> {
    private storage: SStorage<T> = {}
    //Create
    set(key:string, value:T){
    if(this.storage[key] !== undefined){
    return console.log(`${key}가 이미 존재합니다. update 호출 바랍니다.`)
    }
    this.storage[key] = value
    }
    //Read
    get(key:string):T|void {
    if(this.storage[key] === undefined){
    return console.log(`${key}가 존재하지 않습니다.`)
    }
    return this.storage[key]
    }
    //Update
    update(key:string, value:T){
    if(this.storage[key] !== undefined){
    this.storage[key] = value
    } else {
    console.log(`${key}가 존재하지 않아 새로 만듭니다.`)
    this.storage[key] = value
    }
    }
    //Delete
    remove(key:string){
    if(this.storage[key] === undefined){
    return console.log(`${key}가 존재하지 않습니다.`)
    }
    delete this.storage[key]
    }
    clear(){
    this.storage = {}
    }
    }
    
    const stringsStorage = new LocalStorage()
    
    const booleanStorage = new LocalStorage()