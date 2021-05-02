import React from 'react'
import { Component } from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions'



class SongList extends Component{

     renderList(){
         return this.props.data.map((song)=>{
             return(
                 <div className="item" key={song.title}>
                     <div className="right floated content">
                         <button onClick={()=>this.props.selectSong(song)} className="ui button primary">
                             Select
                         </button>

                     </div>
                     <div className="content">{song.title}</div>
                 </div>
             )
         })
     }

    render(){
        return(
     <div className="ui divided list">
         {this.renderList()}
     </div>
        )
    }
}

const mapStateToProps = ( state) =>{

    console.log(state,'hey stattam')
    return {
        data:state.songs,
    }
   
}

const mapDispatchToProps = dispatch =>{
    return{
        selectSong:song=>dispatch(selectSong(song))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SongList);