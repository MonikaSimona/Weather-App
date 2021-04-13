export const addCityToFavorites = (city) => ({
    type: 'ADD_CITY',
    payload: city
})
export const addAllCities = (cities) => ({
    type:'ADD_CITIES',
    payload:cities
})
export const deleteCityFromFavorites = (city) => ({
    type: 'DELETE_CITY',
    payload: city
})