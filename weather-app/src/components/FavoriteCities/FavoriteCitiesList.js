import React,{useEffect,useState} from 'react'
import FavoriteCitiesItem from './FavoriteCitiesItem'

 function FavoriteCitiesList() {
    const [favoriteCitiesList,setFavoriteCities] = useState([])
useEffect(() => {
setFavoriteCities(JSON.parse(localStorage.getItem('favoriteCities')))
},[])
    
    return (
        <div className='container favoriteCitiesList'>
           {favoriteCitiesList && favoriteCitiesList.map(city => (
               <FavoriteCitiesItem cityName={city.name}/>
           ))}
        </div>
    )
}

export default FavoriteCitiesList
