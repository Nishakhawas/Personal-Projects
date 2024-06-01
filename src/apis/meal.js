import axios from "axios";

export function getMeal(){
    return new Promise((resolve,reject) => {
        axios.get("https://themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res)=>{
            resolve(res) 
            
        })
        .catch((e)=>reject(e))
        
    })
}
