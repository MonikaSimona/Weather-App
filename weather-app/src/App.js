import axios from 'axios'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import {searchData, currentData} from './test-data';
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';
import ComingDaysWeatherList from './components/ComingDaysWeatherList';
import FavoriteCitiesList from './components/FavoriteCitiesList';
import CurrentWeather from './components/CurrentWeather';

function App() {
  // console.log(process.env)
  // console.log(searchData.list[0].name)
  // console.log(currentData.clouds.all)
  // const options = {
  //   method: 'GET',
  //   url: `${process.env.REACT_APP_RAPID_API__SEARCH_DATA_URL}`,
  //   params: {
  //     q: 'london',
  //     cnt: '2',
  //     mode: 'null',
  //     lon: '0',
  //     type: 'link, accurate',
  //     lat: '0',
  //     units: 'imperial, metric'
  //   },
  //   headers: {
  //     'x-rapidapi-key': `${process.env.REACT_APP_RAPID_API_KEY}`,
  //     'x-rapidapi-host': `${process.env.REACT_APP_RAPID_API_HOST}`
  //   }
  // };
  
  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });
  return (
    <div className="container">
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/home' component={CurrentWeather}/>
        <Route  path='/coming-days' component={ComingDaysWeatherList}/>
        <Route  path='/favorites' component={FavoriteCitiesList}/>
        <Route  path='/search' component={SearchBox}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
