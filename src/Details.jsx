import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillYoutube } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import Loading from './Loader/Loading'

const Details = () => {

  const {id} = useParams()
  const [meal,setMeal] = useState({})
  const [isLoading,setIsLoading] = useState(true)

  const getSingleMeal = async ()=>{
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    // console.log(data.meals[0]);
    setMeal(data?.meals[0])
    setIsLoading(false)

  }
  useEffect(()=>{
    getSingleMeal()
  },[])

  return (
   <>
    {isLoading? (
      <Loading/>
    ): (
      <div className=' flex flex-col gap-5'>
      <img src={meal.strMealThumb} alt="" width={"500px"} className=" rounded-xl shadow-xl shadow-cyan-400" />
      <div className=' text-white bg-purple-500 text-center w-20 text-sm rounded-lg'>{meal.strCategory}</div>
      <h1 className='text-3xl'>{meal.strMeal}</h1>
      <div>
        <h2 className='text-2xl mb-3'>Instructions</h2>
        <p className=' tracking-wider leading-6'>{meal.strInstructions}</p>
      </div>
      <div className=' flex items-center gap-6'>
        
      <a href={meal.strYoutube}><AiFillYoutube className=' text-red-600 text-5xl cursor-pointer'/></a>
      <p className=' underline'>Watch from YouTube</p>
      </div>
    </div>
    )}
   </>
  )
}

export default Details