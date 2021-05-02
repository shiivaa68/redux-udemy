import React from 'react'
import {connect} from 'react-redux'

const SongDetails =({song})=>{
    return(
        <div>
            <h3>details for:</h3>
            <p>
                title:{song && song.title}
                <br/>
                duration:{song&&song.duration}
            </p>
 
        </div>
    )
}


const mapStateToProps = state =>{
    return{
        song:state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetails);