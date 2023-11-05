import axios from 'axios';
import { useEffect, useState } from 'react';

const useFindFood = () => {
    const [topFood,setTopFood] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/v1/allFoods?page=${0}&size=${6}`)
        .then(result=>{
            // console.log(result)
            setTopFood(result.data)
        })
        .catch(error=>{
            console.log(error);
        })
    },[])
    console.log(topFood);
    return {topFood,setTopFood};
};

export default useFindFood;