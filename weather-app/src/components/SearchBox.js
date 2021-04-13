import React, { useState } from 'react'
import { connect } from 'react-redux'
import { currentCity } from '../store/actions/currentDataActions'

function SearchBox(props) {

    const [searchQuery, setSearchQuery] = useState('')

  

    const handlefilterCity = () => {
        localStorage.setItem("searchQuery",searchQuery)
        props.currentCity(searchQuery);
        console.log(props.currentdata)
        setSearchQuery('')
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
       
        currentdata: state.currentDataReducer.data
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       
        currentCity: (cityQuery) => {
            dispatch(currentCity(cityQuery))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);