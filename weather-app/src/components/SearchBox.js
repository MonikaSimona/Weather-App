import React from 'react'
import { connect } from 'react-redux'

function SearchBox(props) {
    //  console.log(props.searchData)

    return (
        <div className='searchBox'>
            {/* <label htmlFor="search">Search:</label> */}
            <input type="text" name="searchQuery" id="search" placeholder='Enter City...' />
            <button >Search</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        searchData: state.searchDataReducer
    }
}
export default connect(mapStateToProps, null)(SearchBox);