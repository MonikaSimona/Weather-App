export const addCityToFavorites = (city) => ({
    type:'ADD_CITY',
    // payload:{
    //     name:city.name,
    //     temp:city.temp,
    //     icon:city.icon,
    //     wind:city.wind
    // }
    payload:city
})
export const deleteCityFromFavorites = (city) => ({
    type:'DELETE_CITY',
    payload:city
})