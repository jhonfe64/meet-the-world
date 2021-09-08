import { useState, useEffect } from "react";

const useFetch = (url, item) => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        const getData = async (url, item) => {
        
            try {

                const info = await fetch(url);

                if(!info.ok){
                    throw new Error ("HTTP error!")
                }else{
                    const jsonInfo = await info.json();
                    setData(jsonInfo);
                }
            }
            catch(e){
                //console.log(e.name + e.message);
            }
        }
        getData(url)
    },[item, url]);
    return [data];
}

export default useFetch;