const getStorage = (name:string)=>  {
    return JSON.parse(localStorage.getItem(name) as string);
}
const setStorage = (name:string, data:any)=>{
    localStorage.setItem(name, JSON.stringify(data))
}

export {getStorage, setStorage}