import axios from 'axios';
import { useEffect, useState } from 'react';

const useFindFood = () => {
    const [topFoods,setTopFoods] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/v1/allFoods?page=${0}&size=${6}`)
        .then(result=>{
            // console.log(result)
            setTopFoods(result.data)
        })
        .catch(error=>{
            console.log(error);
        })
    },[])
    console.log(topFoods);
    return {topFoods,setTopFoods};
};

export default useFindFood;