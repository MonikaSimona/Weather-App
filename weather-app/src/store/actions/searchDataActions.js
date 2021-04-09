import axios from 'axios';

export const filterCity = (cityQuery) => {

    return (dispatch) => {
      
        const options = {
            method: 'GET',
            url: `${process.env.REACT_APP_RAPID_API__SEARCH_DATA_URL}`,
            params: {
                q: `${cityQuery}`,
                cnt: '1',
                mode: 'null',
                lon: '0',
                type: 'link, accurate',
                lat: '0',
                units: 'imperial, metric'
            },
            headers: {
                'x-rapidapi-key': `${process.env.REACT_APP_RAPID_API_KEY}`,
                'x-rapidapi-host': `${process.env.REACT_APP_RAPID_API_HOST}`
            }
        };

        axios.request(options).then(function (response) {
           return dispatch({
               type:'SET_CITY',
               payload:response.data
           })
        }).catch(function (error) {
            console.error(error);
        });
    }
}