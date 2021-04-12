import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { filterCity } from '../store/actions/searchDataActions'
import { currentCity } from '../store/actions/currentDataActions'

function SearchBox(props) {

    const [searchQuery, setSearchQuery] = useState('')

  

    const handlefilterCity = () => {
        localStorage.setItem('searchQuery',searchQuery)
        props.currentCity(searchQuery);
        console.log(props.currentdata)
    }
    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

    return (
        <div className='searchBox'>
            <input type="text" name="searchQuery" id="search" placeholder='Enter City...' value={searchQuery} onChange={(e) => handleChange(e)} />
            <button onClick={handlefilterCity} >Search</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        filteredCity: state.searchDataReducer.data,
        currentdata: state.currentDataReducer.data
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        filter: (cityQuery) => {
            dispatch(filterCity(cityQuery))
        },
        currentCity: (cityQuery) => {
            dispatch(currentCity(cityQuery))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);