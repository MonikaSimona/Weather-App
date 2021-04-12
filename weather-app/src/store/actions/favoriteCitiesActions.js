export const addCityToFavorites = (city) => ({
    type:'ADD_CITY',

    payload:city
})
export const deleteCityFromFavorites = (city) => ({
    type:'DELETE_CITY',
    payload:city
})