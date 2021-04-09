import axios from 'axios';

export const currentCity = (cityQuery) => {

    return (dispatch) => {
      
        const options = {
            method: 'GET',
            url: `${process.env.REACT_APP_RAPID_API__CURRENT_DATA_URL}`,
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
            console.log(response)
           return dispatch({
               type:'CURRENT_CITY',
               payload:response.data
           })
        }).catch(function (error) {
            console.error(error);
        });
    }
}