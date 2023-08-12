const INVENTORY='inventory'

export const setInventory=(data)=>localStorage.setItem(INVENTORY,JSON.stringify(data))

export const getInventory=()=>{
    const data=JSON.parse(localStorage.getItem(INVENTORY)??'[]')
    return data
}