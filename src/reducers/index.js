import {combineReducers} from 'redux'


const songsReducer = () =>{
    return[
        {title:'no scrubs',duration:'4:05'},
        {title:'macarena',duration:'2:30'},
        {title:'all star',duration:'3:15'},
        {title:'i want it that way',duration:'1:45'},
    ]
};



const selectedSongReducer = (selectedSong= null,action)=>{

    if(action.type==='SONG_SELECTED'){
        return action.payload
    }

    return selectedSong;
}


const postList =(state=[],action)=>{

    switch(action.type) {
        case 'FETCH_POSTS':
            return action.payload;
            default:
                return state;
    }
}

const  userList =(state=[],action)=>{
    switch(action.type){
        case 'FECH_USER':
            return [...state,action.payload];
            default:
                return state
    }
}




export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer,
    posts:postList,
    users:userList
})