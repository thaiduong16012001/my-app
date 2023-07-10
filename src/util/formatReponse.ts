
function formatDefault(res:any){
    const list = []
    for(let id in res.data){
        const obj = res?.data[id]
        list.push({id,...obj,key:id } )
    }
    return list
}
export default formatDefault