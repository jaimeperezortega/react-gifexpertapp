import { useState, useEffect } from "react"
import getGifs from "../helpers/getGifs";


const useFetchGifs = ( category )=>{

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(()=>{

        getGifs(category).then(images =>{
            
                setState({
                    data: images,
                    loading: false,
                })
            
           
        })
       
    },[category])

    // useEffect(()=>{
    //     getGifs(category).then(images=> setImages(images));
    // },[category])

   

    return state;

}

export default useFetchGifs;